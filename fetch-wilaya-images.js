const https = require("https");
const fs = require("fs");
const path = require("path");

// ─── Configuration ──────────────────────────────────────────────────────────
const WILAYAS_FILE = path.join(__dirname, "assets", "wilayas", "wilayas.json");
const OUTPUT_DIR = path.join(__dirname, "assets", "wilayas");
const CREDITS_FILE = path.join(OUTPUT_DIR, "credits.json");
const MISSING_FILE = path.join(OUTPUT_DIR, "missing.json");
const DELAY_MS = 1200;
const UA = "AlgeriaWilayaQuiz/1.0 (https://github.com/your-username/algeria-quiz)";

// Wikipedia page titles that differ from the raw city name
const PAGE_TITLE_MAP = {
  "Adrar": "Adrar, Algeria",
  "Batna": "Batna (city)",
  "Constantine": "Constantine, Algeria",
  "Mila": "Mila (city)",
  "Mascara": "Mascara, Algeria",
};

// ─── HTTP helper with exponential backoff ───────────────────────────────────
function getJSON(url, attempt = 1) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { "User-Agent": UA } }, (res) => {
      let data = "";
      res.on("data", (c) => (data += c));
      res.on("end", () => {
        if (res.statusCode === 429) {
          const wait = Math.pow(5, attempt) * 1000;
          if (attempt < 4) {
            console.log(`\n  [429] retrying in ${wait / 1000}s (attempt ${attempt})...`);
            setTimeout(() => { getJSON(url, attempt + 1).then(resolve).catch(reject); }, wait);
          } else {
            reject(new Error("429 rate limited after 4 attempts"));
          }
          return;
        }
        try { resolve(JSON.parse(data)); }
        catch { reject(new Error(data.substring(0, 120))); }
      });
    }).on("error", reject);
  });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { "User-Agent": UA } }, (res) => {
      let redirects = 0;
      function handle(r) {
        if (r.statusCode >= 300 && r.statusCode < 400 && r.headers.location && redirects < 5) {
          redirects++;
          https.get(r.headers.location, { headers: { "User-Agent": UA } }, handle).on("error", reject);
          return;
        }
        if (r.statusCode !== 200) {
          file.close(); try { fs.unlinkSync(dest); } catch {}
          return reject(new Error("HTTP " + r.statusCode));
        }
        r.pipe(file);
        file.on("finish", () => file.close(resolve));
      }
      handle(res);
    }).on("error", (e) => { file.close(); try { fs.unlinkSync(dest); } catch {} reject(e); });
  });
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ─── Stage 1: Wikipedia → Wikidata IDs ──────────────────────────────────────
async function getWikidataIds(wilayas) {
  console.log("Stage 1: Fetching Wikidata IDs from Wikipedia...\n");

  // Resolve page titles via the map
  const pageTitles = wilayas.map((w) => PAGE_TITLE_MAP[w.capital_city] || w.capital_city);
  const entities = {}; // { code: { entity, title } }

  for (let i = 0; i < pageTitles.length; i += 50) {
    const batchTitles = pageTitles.slice(i, i + 50);
    const batchCodes = wilayas.slice(i, i + 50).map((w) => w.code);

    const url =
      "https://en.wikipedia.org/w/api.php?action=query" +
      "&redirects=1" +
      "&prop=pageprops" +
      "&titles=" + encodeURIComponent(batchTitles.join("|")) +
      "&format=json";

    const data = await getJSON(url);

    // Build redirect map: original title → redirected title
    const redirectMap = {};
    if (data.query.redirects) {
      for (const r of data.query.redirects) {
        redirectMap[r.from] = r.to;
      }
    }

    const pages = {};
    for (const pg of Object.values(data.query.pages)) {
      if (pg.pageid) pages[pg.title] = pg;
    }

    for (let j = 0; j < batchTitles.length; j++) {
      const code = batchCodes[j];
      const rawTitle = batchTitles[j];
      // Resolve redirects: if the title redirected, use the final title
      const title = redirectMap[rawTitle] || rawTitle;
      const pg = pages[title];

      if (!pg || !pg.pageprops?.wikibase_item) {
        entities[code] = null;
        continue;
      }
      if (pg.pageprops.disambiguation !== undefined) {
        entities[code] = null;
        continue;
      }
      entities[code] = { entity: pg.pageprops.wikibase_item, title };
    }

    console.log(`  Batch ${Math.floor(i / 50) + 1}/~2 done`);
  }

  return entities;
}

// ─── Stage 2: Fetch P18 + P17 + P31 and validate ──────────────────────────
async function getP18Claims(entities, wilayas) {
  console.log("\nStage 2: Fetching P18/P17/P31 from Wikidata...\n");

  const validEntities = Object.entries(entities)
    .filter(([, v]) => v !== null)
    .map(([code, v]) => ({ code, entity: v.entity, triedAlt: false }));

  const p18Results = {};
  let checked = 0;

  for (const item of validEntities) {
    checked++;
    if (checked % 10 === 0 || checked === validEntities.length) {
      process.stdout.write(`  Progress: ${checked}/${validEntities.length}\r`);
    }
    const qid = item.entity;
    const url =
      "https://www.wikidata.org/w/api.php?action=wbgetentities" +
      "&ids=" + qid +
      "&props=claims" +
      "&property=P18|P17|P31" +
      "&format=json";

    const data = await getJSON(url);
    const entity = data.entities?.[qid];

    if (!entity) {
      p18Results[item.code] = null;
      continue;
    }

    const p31 = entity.claims?.P31?.map((c) => c.mainsnak.datavalue?.value?.id) || [];
    const p17 = entity.claims?.P17?.map((c) => c.mainsnak.datavalue?.value?.id) || [];
    const p18 = entity.claims?.P18?.[0]?.mainsnak?.datavalue?.value;

    // VALIDATION: must have country = Algeria (Q262)
    const hasAlgeria = p17.includes("Q262");

    if (!hasAlgeria) {
      // First time fail: try alternative title with ", Algeria" appended
      if (!item.triedAlt) {
        const wilaya = wilayas.find((w) => w.code === item.code);
        if (wilaya) {
          const altTitle = wilaya.capital_city + ", Algeria";
          if (altTitle !== item.title) {
            console.log(`  [${item.code}] ${wilaya.capital_city}: P17 check failed, trying "${altTitle}"...`);
            await sleep(DELAY_MS);
            try {
              const altUrl =
                "https://en.wikipedia.org/w/api.php?action=query" +
                "&redirects=1&prop=pageprops" +
                "&titles=" + encodeURIComponent(altTitle) +
                "&format=json";
              const altData = await getJSON(altUrl);
              const altPage = Object.values(altData.query.pages).find((p) => !p.missing);
              if (altPage?.pageprops?.wikibase_item && altPage.pageprops.disambiguation === undefined) {
                const altQid = altPage.pageprops.wikibase_item;
                if (altQid !== qid) {
                  // Fetch P18 for the alternative entity
                  const altUrl2 =
                    "https://www.wikidata.org/w/api.php?action=wbgetentities" +
                    "&ids=" + altQid +
                    "&props=claims" +
                    "&property=P18|P17|P31" +
                    "&format=json";
                  await sleep(DELAY_MS);
                  const altData2 = await getJSON(altUrl2);
                  const altEntity = altData2.entities?.[altQid];
                  if (altEntity) {
                    const altP17 = altEntity.claims?.P17?.map((c) => c.mainsnak.datavalue?.value?.id) || [];
                    const altP18 = altEntity.claims?.P18?.[0]?.mainsnak?.datavalue?.value;
                    if (altP17.includes("Q262") && altP18) {
                      p18Results[item.code] = { filename: altP18, entity: altQid };
                      console.log(`    → Found via "${altTitle}"`);
                      continue;
                    }
                  }
                }
              }
            } catch {
              // fall through to null
            }
          }
        }
      }
      p18Results[item.code] = null;
      console.log(`  [${item.code}] Rejected: no Algeria entity`);
    } else if (p18) {
      p18Results[item.code] = { filename: p18, entity: qid };
    } else {
      p18Results[item.code] = null;
    }
    await sleep(DELAY_MS);
  }

  return p18Results;
}

// ─── Stage 2b: Wikidata search fallback for Wikidata-less pages ────────────
async function fallbackWikidataSearch(wilayas, entities, p18Results) {
  const missing = Object.entries(entities).filter(([, v]) => v === null).map(([c]) => c);
  if (missing.length === 0) return;

  console.log("\nStage 2b: Wikidata search fallback for missing entities...\n");

  const VALID_P31 = new Set([
    "Q515", "Q3957", "Q2989398", "Q1549591", "Q532",
    "Q486972", "Q11723798", "Q200174", "Q7935107",
    "Q21076335", "Q15642541",
  ]);
  const ALGERIA = "Q262";

  for (const code of missing) {
    const w = wilayas.find((x) => x.code === code);
    if (!w) continue;

    // Try Wikidata search with the city name
    const searchUrl =
      "https://www.wikidata.org/w/api.php?action=wbsearchentities" +
      "&search=" + encodeURIComponent(w.capital_city) +
      "&language=en&format=json&limit=10";
    await sleep(DELAY_MS);

    try {
      const data = await getJSON(searchUrl);
      const results = data.search || [];
      if (results.length === 0) continue;

      // For each result, fetch P31, P17, P18 and validate
      for (const r of results) {
        const entityUrl =
          "https://www.wikidata.org/w/api.php?action=wbgetentities" +
          "&ids=" + r.id +
          "&props=claims" +
          "&property=P18|P17|P31" +
          "&format=json";
        await sleep(DELAY_MS);

        const entityData = await getJSON(entityUrl);
        const entity = entityData.entities?.[r.id];
        if (!entity) continue;

        const p31 = entity.claims?.P31?.map((c) => c.mainsnak.datavalue?.value?.id) || [];
        const p17 = entity.claims?.P17?.map((c) => c.mainsnak.datavalue?.value?.id) || [];
        const p18 = entity.claims?.P18?.[0]?.mainsnak?.datavalue?.value;

        if (p17.includes(ALGERIA) && p31.some((id) => VALID_P31.has(id)) && p18) {
          p18Results[code] = { filename: p18, entity: r.id };
          entities[code] = { entity: r.id, title: r.label };
          console.log(`  [${code}] ${w.capital_city} → ${r.id} (${r.label}) — ${p18.substring(0, 50)}`);
          break;
        }
      }
    } catch {
      // ignore search errors
    }
  }
}

// ─── Stage 3: Download images ──────────────────────────────────────────────
async function downloadImages(wilayas, p18Results, credits) {
  console.log("\nStage 3: Downloading images from Commons...\n");
  let ok = 0, total = 0;

  for (const w of wilayas) {
    const safeName = w.name_en.replace(/[^a-zA-Z0-9_-]/g, "_");
    const fname = `${w.code}-${safeName}.jpg`;
    const fpath = path.join(OUTPUT_DIR, fname);

    if (fs.existsSync(fpath) && credits[w.code]) {
      ok++;
      continue;
    }

    const p18 = p18Results[w.code];
    if (!p18) continue;
    total++;

    const dlUrl = "https://commons.wikimedia.org/wiki/Special:FilePath/" +
      encodeURIComponent(p18.filename.replace(/ /g, "_"));

    process.stdout.write(`  [${w.code}] ${w.name_en}...`);
    try {
      await download(dlUrl, fpath);
      credits[w.code] = {
        code: w.code,
        name_en: w.name_en,
        capital_city: w.capital_city,
        commons_filename: p18.filename,
        source_url: dlUrl,
        wikidata_entity: p18.entity,
      };
      ok++;
      console.log(" OK");
    } catch (err) {
      console.log(" FAIL (" + err.message + ")");
    }

    await sleep(DELAY_MS);
  }

  console.log(`  Downloaded: ${ok}/${wilayas.length} (${total} attempted)`);
}

// ─── Stage 4: Fetch license info (batch) ───────────────────────────────────
async function getLicenseInfo(credits) {
  console.log("\nStage 4: Fetching license info from Commons...\n");

  const entries = Object.entries(credits);
  let done = 0;

  for (let i = 0; i < entries.length; i += 50) {
    const batch = entries.slice(i, i + 50);
    const fileTitles = batch.map(([, c]) => "File:" + c.commons_filename).join("|");

    const url =
      "https://commons.wikimedia.org/w/api.php?action=query" +
      "&titles=" + encodeURIComponent(fileTitles) +
      "&prop=imageinfo" +
      "&iiprop=extmetadata|url" +
      "&format=json";

    const data = await getJSON(url);

    for (const pg of Object.values(data.query?.pages || {})) {
      if (pg.missing) continue;
      const ii = pg.imageinfo?.[0];
      if (!ii) continue;

      const fileTitle = pg.title.replace(/^File:/, "");
      const entry = batch.find(([, c]) => c.commons_filename === fileTitle);
      if (!entry) continue;

      const meta = ii.extmetadata || {};
      const get = (k) => (meta[k]?.value) || "";
      entry[1].author = get("Artist") || "Unknown";
      entry[1].license = get("LicenseShortName") || "See Commons page";
      entry[1].license_url = get("LicenseUrl") || "";
      entry[1].commons_page = ii.descriptionurl || "";
      done++;
    }

    await sleep(DELAY_MS);
  }

  console.log(`  License info: ${done}/${entries.length}`);
}

// ─── Main ───────────────────────────────────────────────────────────────────
async function main() {
  const wilayas = JSON.parse(fs.readFileSync(WILAYAS_FILE, "utf8"));
  let credits = {};
  if (fs.existsSync(CREDITS_FILE)) {
    credits = JSON.parse(fs.readFileSync(CREDITS_FILE, "utf8"));
  }

  console.log(`Processing ${wilayas.length} wilayas\n`);

  // Stage 1
  const entities = await getWikidataIds(wilayas);

  const noWiki = Object.entries(entities)
    .filter(([, v]) => v === null)
    .map(([c]) => c);
  if (noWiki.length > 0) {
    console.log(`\n  No Wikipedia page: ${noWiki.join(", ")}`);
  }

  // Stage 2
  await sleep(2000);
  const p18Results = await getP18Claims(entities, wilayas);

  const noP18 = Object.entries(p18Results)
    .filter(([, v]) => v === null)
    .map(([c]) => c);

  // Stage 2b: Wikidata search fallback for entities with no Wikipedia page
  await sleep(2000);
  await fallbackWikidataSearch(wilayas, entities, p18Results);

  // Stage 3
  await sleep(2000);
  await downloadImages(wilayas, p18Results, credits);

  // Stage 4
  await sleep(2000);
  await getLicenseInfo(credits);

  // Save
  fs.writeFileSync(CREDITS_FILE, JSON.stringify(credits, null, 2), "utf8");

  const missing = [];
  for (const w of wilayas) {
    if (!credits[w.code]) {
      missing.push({
        code: w.code,
        name_en: w.name_en,
        capital_city: w.capital_city,
        reason: p18Results[w.code] === null
          ? "No P18 image on Wikidata (or P17 didn't match Algeria)"
          : entities[w.code] === null
            ? "No Wikipedia page"
            : "Unknown",
      });
    }
  }

  if (missing.length > 0) {
    fs.writeFileSync(MISSING_FILE, JSON.stringify(missing, null, 2), "utf8");
  } else if (fs.existsSync(MISSING_FILE)) {
    fs.unlinkSync(MISSING_FILE);
  }

  const finalNoWiki = Object.entries(entities)
    .filter(([, v]) => v === null)
    .map(([c]) => c);
  const finalNoP18 = Object.entries(p18Results)
    .filter(([, v]) => v === null)
    .map(([c]) => c);

  console.log("\n─── Report ───");
  console.log(`  Success: ${Object.keys(credits).length}/${wilayas.length}`);
  console.log(`  No P18 on Wikidata: ${finalNoP18.length}`);
  console.log(`  No Wikipedia/Wikidata entry: ${finalNoWiki.length}`);
  if (missing.length > 0) {
    console.log("\n  Missing:");
    for (const m of missing) {
      console.log(`    [${m.code}] ${m.name_en} — ${m.reason}`);
    }
  }
}

main().catch(console.error);
