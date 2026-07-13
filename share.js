// ============================================================
// SHARE — Generates a neo-brutalist share card image
// Uses html2canvas loaded dynamically from CDN.
// ============================================================

const shareBtn = document.getElementById("share-btn");

shareBtn.addEventListener("click", shareResult);

async function shareResult() {
  const cityName = document.getElementById("result-city").textContent;
  const tagline = document.getElementById("result-tagline").textContent;
  const cityKey = Object.keys(CITIES).find(
    (k) => CITIES[k].name === cityName
  );
  const city = CITIES[cityKey];
  const emoji = city?.emoji || "📍";
  const demonym = city ? city.demonym : cityName.toUpperCase();
  const cardLang = currentLang || 'en';
  const taglineObj = city?.tagline;
  const shareTagline = typeof taglineObj === 'object' ? (taglineObj[cardLang] || taglineObj.en) : tagline;

  // Build neo-brutalist share card matching Stitch design
  const card = document.createElement("div");
  card.className = "share-card";
  card.dir = cardLang === 'ar' ? 'rtl' : 'ltr';
  card.innerHTML = `
    <div class="zellige-pattern"></div>
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute top-10 left-10 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-20"></div>
      <div class="absolute bottom-20 right-10 w-48 h-48 bg-primary-container rounded-full blur-3xl opacity-20"></div>
    </div>
    <div class="content">
      <!-- Top badge -->
      <div class="animate-float sticker-rotate-left">
        <div class="bg-tertiary-container text-on-tertiary-container border-2 border-on-background px-md py-xs rounded-full font-label-bold neo-shadow-sm inline-block text-xs">
          ${t('result_badge')}: 100% VIBE
        </div>
      </div>

      <!-- Headline -->
      <div class="space-y-sm">
        <h2 class="font-display-lg text-3xl md:text-display-lg text-primary uppercase tracking-tighter leading-none">
          ${t('share_card_im')}<br>
          <span class="text-secondary bg-surface px-4 border-4 border-on-background inline-block sticker-rotate-right mt-2 neo-shadow-sm text-3xl">${demonym}</span>
        </h2>
        <p class="font-body-lg text-on-surface bg-white/80 backdrop-blur-sm px-sm py-xs border-2 border-on-background rounded-md inline-block mt-4 text-base">
          ${shareTagline}
        </p>
      </div>

      <!-- Visual assets row -->
      <div class="w-full flex justify-around items-center px-base">
        <div class="w-20 h-20 bg-primary-fixed border-2 border-on-background rounded-full flex items-center justify-center sticker-rotate-left neo-shadow-sm">
          <span class="material-symbols-outlined text-primary text-4xl" style="font-variation-settings: 'FILL' 1;">wb_sunny</span>
        </div>
        <div class="w-24 h-24 border-4 border-on-background rounded-lg overflow-hidden sticker-rotate-right neo-shadow-sm relative flex items-center justify-center bg-surface-container">
          ${city.image
            ? `<img src="${city.image}" alt="${city.name}" style="width:100%;height:100%;object-fit:cover;" crossorigin="anonymous" />`
            : `<span class="text-5xl">${emoji}</span>`
          }
        </div>
        <div class="w-20 h-20 bg-secondary-fixed border-2 border-on-background rounded-full flex items-center justify-center sticker-rotate-left neo-shadow-sm">
          <span class="material-symbols-outlined text-secondary text-4xl" style="font-variation-settings: 'FILL' 1;">favorite</span>
        </div>
      </div>

      <!-- Footer badge -->
      <div class="w-full">
        <div class="bg-on-background text-surface p-md rounded-lg neo-shadow-sm flex items-center gap-md text-left">
          <div class="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center shrink-0 bg-primary-container text-on-primary-container text-2xl">
            🇩🇿
          </div>
          <div>
            <p class="font-label-bold text-xs text-surface-variant">${t('share_card_quiz')}</p>
            <p class="font-display-lg text-base leading-none italic">${t('share_card_title')}</p>
          </div>
          <span class="material-symbols-outlined ml-auto text-secondary-fixed" style="font-variation-settings: 'FILL' 1;">chevron_right</span>
        </div>
      </div>
    </div>
  `;

  // Temporarily append offscreen for capture
  card.style.position = "fixed";
  card.style.left = "-9999px";
  card.style.top = "0";
  document.body.appendChild(card);

  try {
    if (typeof html2canvas === "undefined") {
      await loadScript(
        "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js"
      );
    }

    const canvas = await html2canvas(card, {
      backgroundColor: "#f7fbf3",
      scale: 2,
      useCORS: true,
    });

    const link = document.createElement("a");
    link.download = `my-algerian-city-${cityName.toLowerCase()}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  } catch (err) {
    console.error("Share image generation failed:", err);
    alert("Could not generate share image. Check your internet connection.");
  } finally {
    document.body.removeChild(card);
  }
}

function loadScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}
