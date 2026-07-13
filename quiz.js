// ============================================================
// QUIZ — Scoring logic (preserved) + neo-brutalist UI
// ============================================================

const state = {
  currentQuestion: 0,
  tally: {},
  totalQuestions: QUESTIONS.length,
  isTransitioning: false,
};

// --- DOM refs ---
const $ = (sel) => document.querySelector(sel);
const introScreen = $("#intro-screen");
const quizScreen = $("#quiz-screen");
const resultScreen = $("#result-screen");
const quizContent = $("#quiz-content");
const progressFill = $("#progress-fill");
const progressBadge = $("#progress-badge");
const progressPct = $("#progress-pct");
const startBtn = $("#start-btn");
const tryAgainBtn = $("#try-again-btn");

// --- Language overlay ---
const langOverlay = $("#lang-overlay");

function initLang() {
  if (!currentLang) {
    langOverlay.classList.remove("hidden");
    [introScreen, quizScreen, resultScreen].forEach((s) => s.classList.remove("active"));
    return;
  }
  langOverlay.classList.add("hidden");
  applyLang();
}

document.querySelectorAll(".overlay-lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;
    localStorage.setItem("algeria-lang", currentLang);
    langOverlay.classList.add("hidden");
    showScreen(introScreen);
    applyLang();
  });
});

// --- Screen switching ---
function showScreen(screen) {
  [introScreen, quizScreen, resultScreen].forEach((s) => s.classList.remove("active"));
  screen.classList.add("active");
}

// --- Start ---
startBtn.addEventListener("click", startQuiz);
tryAgainBtn.addEventListener("click", resetQuiz);

function startQuiz() {
  state.currentQuestion = 0;
  state.tally = {};
  showScreen(quizScreen);
  renderQuestion(state.currentQuestion);
}

function resetQuiz() {
  state.currentQuestion = 0;
  state.tally = {};
  showScreen(introScreen);
}

// --- Language helpers ---
function t(key) {
  return UI[key]?.[currentLang] || UI[key]?.en || key;
}

function applyLang() {
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

  // Intro screen
  const startTitle = document.getElementById('start-title');
  if (startTitle) startTitle.innerHTML = t('start_title');
  const startTagline = document.getElementById('start-tagline');
  if (startTagline) startTagline.textContent = t('start_tagline');
  const startBtnText = document.getElementById('start-btn-text');
  if (startBtnText) startBtnText.textContent = t('quiz_start');
  // Quiz screen
  const progressStart = document.getElementById('progress-start');
  if (progressStart) progressStart.textContent = t('progress_start');
  const progressGoal = document.getElementById('progress-goal');
  if (progressGoal) progressGoal.textContent = t('progress_goal');

  // Result screen
  const resultBadge = document.getElementById('result-badge');
  if (resultBadge) resultBadge.textContent = t('result_badge');
  const resultPrefix = document.getElementById('result-prefix');
  if (resultPrefix) resultPrefix.textContent = t('result_prefix');
  const resultSuffix = document.getElementById('result-suffix');
  if (resultSuffix) resultSuffix.textContent = t('result_suffix');
  const shareBtnText = document.getElementById('share-btn-text');
  if (shareBtnText) shareBtnText.textContent = t('share_btn');
  const tryAgainText = document.getElementById('try-again-text');
  if (tryAgainText) tryAgainText.textContent = t('try_again');

  // Language button active state
  document.querySelectorAll('.lang-btn').forEach(el => {
    el.classList.toggle('lang-btn-active', el.dataset.lang === currentLang);
  });

  // Re-render current question if on quiz screen
  if (quizScreen.classList.contains('active') && state.currentQuestion < state.totalQuestions) {
    renderQuestion(state.currentQuestion);
  }
}

// Bind language switcher
document.querySelectorAll('[data-lang]').forEach(btn => {
  btn.addEventListener('click', () => {
    currentLang = btn.dataset.lang;
    localStorage.setItem('algeria-lang', currentLang);
    applyLang();
  });
});

// Init language on load (show overlay if none selected)
initLang();

// --- Progress bar ---
function updateProgress(index) {
  const pct = Math.round(((index + 1) / state.totalQuestions) * 100);
  progressFill.style.width = `${pct}%`;
  progressPct.textContent = `${pct}%`;
  progressBadge.style.display = "flex";
}

// --- Render question ---
function renderQuestion(index) {
  const q = QUESTIONS[index];
  if (!q) return;

  updateProgress(index);

  // Extract emoji from option label (first emoji character or use a fallback)
  function extractEmoji(label) {
    const emojiMatch = label.match(
      /(\p{Emoji_Presentation}|\p{Extended_Pictographic})/u
    );
    return emojiMatch ? emojiMatch[0] : "📍";
  }

  const optionColors = [
    "bg-primary-fixed-dim",
    "bg-secondary-fixed-dim",
    "bg-tertiary-fixed",
    "bg-surface-container-high",
  ];

  // Build question DOM — neo-brutalist style from Stitch design
  const questionEl = document.createElement("div");
  questionEl.className = "quiz-question opacity-0 translate-y-3 transition-all duration-300";
  // Trigger entry animation next frame
  requestAnimationFrame(() => {
    questionEl.classList.remove("opacity-0", "translate-y-3");
    questionEl.classList.add("opacity-100", "translate-y-0");
  });

  const qText = typeof q.question === 'object' ? (q.question[currentLang] || q.question.en) : q.question;

  questionEl.innerHTML = `
    <section class="mb-lg">
      <div class="bg-surface border-4 border-on-background p-md rounded-lg neo-shadow-lg -rotate-1 mb-md">
        <h2 class="font-headline-md text-headline-md-mobile md:text-headline-md text-on-background text-center leading-tight">
          ${qText}
        </h2>
      </div>
      <div class="relative h-0">
        <div class="absolute -top-12 -right-4 bg-secondary text-on-secondary font-bold px-4 py-2 rounded-full border-2 border-on-background rotate-12 neo-shadow-sm animate-pulse text-sm">
          ${t('quiz_choose')}
        </div>
      </div>
    </section>
    <div class="flex flex-col gap-gutter">
      ${q.options
        .map(
          (opt, i) => {
            const optLabel = typeof opt.label === 'object' ? (opt.label[currentLang] || opt.label.en) : opt.label;
            const emoji = extractEmoji(optLabel);
            const cleanLabel = optLabel.replace(emoji, "").trim();
            const colorClass = optionColors[i % optionColors.length];
            return `
              <button class="option-btn group w-full text-left bg-surface border-4 border-on-background p-md rounded-lg neo-shadow hover:neo-shadow-lg hover:-translate-y-1 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center gap-md" data-index="${i}">
                <div class="w-16 h-16 rounded-lg border-2 border-on-background overflow-hidden flex-shrink-0 ${colorClass} flex items-center justify-center text-3xl img-placeholder">
                  ${emoji}
                </div>
                <div class="flex-grow">
                  <span class="font-headline-md text-headline-md-mobile md:text-headline-md text-on-background block text-left">${cleanLabel}</span>
                </div>
                <div class="w-10 h-10 border-4 border-on-background rounded-lg flex items-center justify-center group-hover:bg-primary-container transition-colors checkbox-indicator">
                  <span class="material-symbols-outlined text-on-primary hidden" style="font-variation-settings: 'FILL' 1;">check</span>
                </div>
              </button>
            `;
          }
        )
        .join("")}
    </div>
  `;

  // Mount
  quizContent.innerHTML = "";
  quizContent.appendChild(questionEl);

  // Bind clicks with selectOption visual logic + scoring
  const optionBtns = questionEl.querySelectorAll(".option-btn");
  optionBtns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      if (state.isTransitioning) return;
      selectOption(btn);
      handleAnswer(q.options[i].tags, btn);
    });
  });
}

// --- Visual selection (from Stitch design) ---
function selectOption(selectedBtn) {
  // Deselect all
  document.querySelectorAll(".option-btn").forEach((btn) => {
    btn.classList.remove(
      "selected",
      "bg-primary-fixed",
      "border-primary",
      "neo-shadow-lg"
    );
    btn.classList.add("bg-surface", "border-on-background", "neo-shadow");
    const indicator = btn.querySelector(".checkbox-indicator");
    if (indicator) {
      indicator.classList.remove("bg-primary", "border-primary");
      const check = indicator.querySelector("span");
      if (check) check.classList.add("hidden");
    }
  });

  // Select clicked
  selectedBtn.classList.remove("bg-surface", "border-on-background", "neo-shadow");
  selectedBtn.classList.add("selected", "bg-primary-fixed", "border-primary", "neo-shadow-lg");
  const indicator = selectedBtn.querySelector(".checkbox-indicator");
  if (indicator) {
    indicator.classList.add("bg-primary", "border-primary");
    const check = indicator.querySelector("span");
    if (check) check.classList.remove("hidden");
  }

  // Snappy scale feedback
  selectedBtn.classList.add("scale-[1.02]");
  setTimeout(() => selectedBtn.classList.remove("scale-[1.02]"), 100);
}

// --- Handle answer (preserved scoring) ---
function handleAnswer(tags, selectedBtn) {
  state.isTransitioning = true;

  // Record tally
  for (const [tag, score] of Object.entries(tags)) {
    state.tally[tag] = (state.tally[tag] || 0) + score;
  }

  // Exit animation on the question wrapper
  const questionEl = quizContent.querySelector(".quiz-question");
  if (questionEl) {
    questionEl.classList.remove("opacity-100", "translate-y-0");
    questionEl.classList.add("opacity-0", "-translate-y-3");
  }

  setTimeout(() => {
    const nextIndex = state.currentQuestion + 1;

    if (nextIndex >= state.totalQuestions) {
      const result = calculateResult();
      showResult(result);
    } else {
      state.currentQuestion = nextIndex;
      renderQuestion(state.currentQuestion);
    }

    state.isTransitioning = false;
  }, 300);
}

// --- Scoring: cosine similarity (normalised dot product) ---
// Pre-compute city vector magnitudes so every city has a fair chance
const CITY_MAGS = {};
(function initMags() {
  for (const [key, city] of Object.entries(CITIES)) {
    let mag = 0;
    for (const v of Object.values(city.tags)) mag += v * v;
    CITY_MAGS[key] = Math.sqrt(mag);
  }
})();

function calculateResult() {
  let bestCity = null;
  let bestScore = -1;

  for (const [key, city] of Object.entries(CITIES)) {
    let dot = 0;
    for (const [tag, cityVal] of Object.entries(city.tags)) {
      const userVal = state.tally[tag] || 0;
      dot += userVal * cityVal;
    }

    // Normalise by city magnitude to prevent high-magnitude cities dominating
    const norm = CITY_MAGS[key] || 1;
    const score = dot / norm;

    if (score > bestScore) {
      bestScore = score;
      bestCity = key;
    }
  }

  return CITIES[bestCity];
}

// --- Show result ---
function showResult(city) {
  const tagline = typeof city.tagline === 'object' ? (city.tagline[currentLang] || city.tagline.en) : city.tagline;
  const description = typeof city.description === 'object' ? (city.description[currentLang] || city.description.en) : city.description;
  const vibeTag = typeof city.vibe_tag === 'object' ? (city.vibe_tag[currentLang] || city.vibe_tag.en) : (city.vibe_tag || t('vibe_prefix'));

  $("#result-city").textContent = city.name;
  $("#result-tagline").textContent = `${tagline} ${city.emoji}`;
  $("#result-description").textContent = description;
  $("#result-vibe-tag").textContent = vibeTag;
  $("#result-vibe-quote").textContent = `"${vibeTag}"`;
  $("#result-sticker-1").textContent = t('sticker_1');
  const suffixEl = document.getElementById('result-suffix');
  if (suffixEl) suffixEl.textContent = t('result_suffix');

  // Show city photo if available, fall back to emoji
  const img = $("#result-image");
  const emoji = $("#result-emoji");
  if (city.image) {
    img.src = city.image;
    img.classList.remove("hidden");
    emoji.classList.add("hidden");
  } else {
    emoji.textContent = city.emoji || "📍";
    emoji.classList.remove("hidden");
    img.classList.add("hidden");
  }

  // Update progress to 100% on result screen too
  progressFill.style.width = "100%";
  progressPct.textContent = "100%";
  progressBadge.style.display = "flex";

  showScreen(resultScreen);
}
