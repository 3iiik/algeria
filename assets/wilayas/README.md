# Wilaya Photos

Images of Algerian wilaya capital cities, sourced from **Wikimedia Commons**.

## Attribution

All images are freely licensed (Creative Commons / public domain) and are used
in compliance with their respective licenses. **You must provide attribution** as
specified in `credits.json` — typically "Author name / Wikimedia Commons" with a
link back to the source URL.

If you modify or redistribute this project, include `credits.json` alongside
the images to maintain proper attribution.

## How the images were fetched

Run `node fetch-wilaya-images.js` from the project root. The script:

1. Reads `wilayas.json` — 69 wilayas (codes 01–69, including the 11 new 2026
   wilayas).
2. For each capital city, queries the Wikimedia Commons API
   (`commons.wikimedia.org/w/api.php`) — **free, no API key required**.
3. Filters results to find real photos (skips maps, flags, icons, logos,
   blazons).
4. Downloads the best match as `{code}-{name_en}.jpg`.
5. Saves attribution data to `credits.json`.
6. Logs any failures to `missing.json`.

Rate limiting: 600 ms delay between requests to be respectful of Wikimedia's
servers.

## Manual sourcing

The 11 newest wilayas (codes 59–69) are small towns that often have minimal
Wikimedia Commons coverage. These are expected to mostly fail and will be
logged in `missing.json`. You will need to source photos for these manually,
for example by:

- Searching for high-quality Flickr images under Creative Commons licenses.
- Taking your own photographs.
- Using other freely licensed repositories.

## File naming

`{code}-{name_en}.jpg` where `code` is the two-digit wilaya number (01–69).

## License of this dataset

The metadata in `wilayas.json` and `credits.json` is provided as-is. The
individual images are subject to their own licenses as listed in `credits.json`.
