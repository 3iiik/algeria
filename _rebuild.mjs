import fs from 'fs';

const raw = fs.readFileSync('data.js', 'utf-8');

// Find all CITIES objects by matching from "const CITIES = {" to matching "};"
// The original (first) one has the clean un-nested structure
// We'll extract the first QUESTIONS and the first CITIES

function extractBalanced(text, startIdx) {
  let depth = 1;
  let i = startIdx;
  while (depth > 0 && i < text.length) {
    if (text[i] === '{' || text[i] === '[') depth++;
    if (text[i] === '}' || text[i] === ']') depth--;
    i++;
  }
  // Return from the opening bracket (at startIdx-1) through the closing bracket (at i-1)
  return text.slice(startIdx, i);
}

// Find first QUESTIONS — include opening [ and extract to matching ]
const qIdx = raw.indexOf('const QUESTIONS = [');
const qStart = qIdx + 'const QUESTIONS = ['.length - 1;
const qBody = raw[qStart] + extractBalanced(raw, qStart + 1);
const QUESTIONS = eval(qBody);

// Find first CITIES — include opening { and extract to matching }
const cIdx = raw.indexOf('const CITIES = {');
const cStart = cIdx + 'const CITIES = {'.length - 1;
const cBody = raw[cStart] + extractBalanced(raw, cStart + 1);
const CITIES = eval('(' + cBody + ')');

// Serialize properly
function fmt(v, indent) {
  if (v === null || typeof v !== 'object') return JSON.stringify(v);
  if (Array.isArray(v)) return '[\n' + v.map(x => '  '.repeat(indent+1) + fmt(x, indent+1)).join(',\n') + '\n' + '  '.repeat(indent) + ']';
  const entries = Object.entries(v);
  if (entries.length === 0) return '{}';
  const allSimple = entries.every(([k,v]) => typeof v !== 'object' || v === null);
  if (allSimple && entries.length <= 6) {
    const s = JSON.stringify(v).replace(/"([^"]+)":/g, '$1:');
    if (s.length < 100) return s;
  }
  const pad = '  '.repeat(indent);
  const inner = '  '.repeat(indent + 1);
  const lines = entries.map(([k, vv]) => {
    const key = /^\d+$/.test(k) ? k : k;
    return `${inner}${key}: ${fmt(vv, indent + 1)}`;
  });
  return `{\n${lines.join(',\n')}\n${pad}}`;
}

const OUT = `// ============================================================
// DATA — 69 wilaya capital cities + 8 quiz questions
// Auto-generated from Gemini content + Wikidata P18 images
// ============================================================

let currentLang = localStorage.getItem('algeria-lang') || 'en';

const UI = {
  quiz_start: { en: "Start Quiz", fr: "Commencer le Quiz", ar: "ابدأ الاختبار" },
  quiz_choose: { en: "CHOOSE! 🔥", fr: "CHOISIS ! 🔥", ar: "!اختر 🔥" },
  progress_start: { en: "Start", fr: "Départ", ar: "البداية" },
  progress_goal: { en: "The Goal", fr: "L'Objectif", ar: "الهدف" },
  result_prefix: { en: "You belong in", fr: "Ta place est à", ar: "مكانك في" },
  result_suffix: { en: "!", fr: " !", ar: "!" },
  result_badge: { en: "QUIZ RESULT", fr: "RÉSULTAT DU QUIZ", ar: "نتيجة الاختبار" },
  share_btn: { en: "Share Result", fr: "Partager", ar: "مشاركة النتيجة" },
  try_again: { en: "Try Again", fr: "Recommencer", ar: "حاول مجدداً" },
  sticker_1: { en: "100% MATCH", fr: "100% MATCH", ar: "تطابق تام %100" },
  vibe_prefix: { en: "Perfect Vibe", fr: "Vibe Parfait", ar: "ال vibe مثالي" },
  start_tagline: { en: "From the chaos of Algiers to the chill of Oran, find out where you actually belong. 🇩🇿", fr: "Du chaos d'Alger au chill d'Oran, découvre où est ta vraie place. 🇩🇿", ar: "من فوضى الجزائر العاصمة إلى هدوء وهران، اكتشف أين مكانك الحقيقي. 🇩🇿" },
  start_title: { en: "Which Algerian City<br class=\\"hidden md:block\\" /> Are You?", fr: "Quelle Ville Algérienne<br class=\\"hidden md:block\\" /> Es-Tu ?", ar: "أي مدينة جزائرية<br class=\\"hidden md:block\\" /> أنت؟" },
  join_count: { en: "Join 12.5k people who found their home city today", fr: "Rejoins 12.5k personnes qui ont trouvé leur ville aujourd'hui", ar: "انضم إلى 12.5 ألف شخص وجدوا مدينتهم اليوم" },
  share_card_quiz: { en: "Take the quiz on", fr: "Fais le quiz sur", ar: "اختبر نفسك على" },
  share_card_title: { en: "Which Algerian City Are You?", fr: "Quelle Ville Algérienne Es-Tu ?", ar: "أي مدينة جزائرية أنت؟" },
  share_card_im: { en: "I'M 100%", fr: "JE SUIS 100%", ar: "أنا %100" }
};

const QUESTIONS = ${fmt(QUESTIONS, 0)};

const CITIES = ${fmt(CITIES, 0)};
`;

fs.writeFileSync('data.js', OUT);
const keys = Object.keys(CITIES);
console.log(`Written: ${keys.length} cities, ${QUESTIONS.length} questions`);
console.log('First city:', keys[0], '→ tagline type:', typeof CITIES[keys[0]].tagline);
