import fs from 'fs';

const raw = fs.readFileSync('data.js', 'utf-8');

function extractBlock(text, marker, open, close) {
  const idx = text.indexOf(marker);
  if (idx === -1) return null;
  let start = idx + marker.length;
  while (start < text.length && text[start] !== open) start++;
  if (text[start] !== open) return null;
  let depth = 1, i = start + 1;
  while (depth > 0 && i < text.length) {
    if (text[i] === '"' || text[i] === "'") {
      const q = text[i]; i++;
      while (i < text.length && text[i] !== q) { if (text[i] === '\\') i++; i++; }
      i++;
      continue;
    }
    if (text[i] === open) depth++;
    if (text[i] === close) depth--;
    i++;
  }
  return text.slice(start, i);
}

const cBlock = extractBlock(raw, 'const CITIES =', '{', '}');
const qBlock = extractBlock(raw, 'const QUESTIONS =', '[', ']');
if (!cBlock || !qBlock) { console.error('Extraction failed'); process.exit(1); }

const CITIES = eval('(' + cBlock + ')');
const QUESTIONS = eval(qBlock);
const cityKeys = Object.keys(CITIES);

// Serializer that handles {en,fr,ar} objects compactly
function fmt(v, indent) {
  if (v === null || typeof v !== 'object') return JSON.stringify(v);
  if (Array.isArray(v)) {
    if (v.length === 0) return '[]';
    const items = v.map(x => '  '.repeat(indent + 1) + fmt(x, indent + 1));
    return '[\n' + items.join(',\n') + '\n' + '  '.repeat(indent) + ']';
  }
  const entries = Object.entries(v);
  if (entries.length === 0) return '{}';
  const allSimple = entries.every(([,vv]) => typeof vv !== 'object' || vv === null);
  if (allSimple) {
    const str = JSON.stringify(v).replace(/"([^"]+)":/g, '$1:');
    if (str.length < 90) return str;
  }
  const pad = '  '.repeat(indent);
  const inner = '  '.repeat(indent + 1);
  const lines = entries.map(([k, vv]) => `${inner}${k}: ${fmt(vv, indent + 1)}`);
  return '{\n' + lines.join(',\n') + '\n' + pad + '}';
}

const out = `// ============================================================
// DATA — 69 wilaya capital cities + 8 quiz questions
// Auto-generated from Gemini content + Wikidata P18 images
// ============================================================

let currentLang = localStorage.getItem('algeria-lang') || 'en';

const UI = {
  quiz_start: ${JSON.stringify({ en: "Start Quiz", fr: "Commencer le Quiz", ar: "ابدأ الاختبار" })},
  quiz_choose: ${JSON.stringify({ en: "CHOOSE! 🔥", fr: "CHOISIS ! 🔥", ar: "!اختر 🔥" })},
  progress_start: ${JSON.stringify({ en: "Start", fr: "Départ", ar: "البداية" })},
  progress_goal: ${JSON.stringify({ en: "The Goal", fr: "L'Objectif", ar: "الهدف" })},
  result_prefix: ${JSON.stringify({ en: "You belong in", fr: "Ta place est à", ar: "مكانك في" })},
  result_suffix: ${JSON.stringify({ en: "!", fr: " !", ar: "!" })},
  result_badge: ${JSON.stringify({ en: "QUIZ RESULT", fr: "RÉSULTAT DU QUIZ", ar: "نتيجة الاختبار" })},
  share_btn: ${JSON.stringify({ en: "Share Result", fr: "Partager", ar: "مشاركة النتيجة" })},
  try_again: ${JSON.stringify({ en: "Try Again", fr: "Recommencer", ar: "حاول مجدداً" })},
  sticker_1: ${JSON.stringify({ en: "100% MATCH", fr: "100% MATCH", ar: "تطابق تام %100" })},
  vibe_prefix: ${JSON.stringify({ en: "Perfect Vibe", fr: "Vibe Parfait", ar: "ال vibe مثالي" })},
  start_tagline: ${JSON.stringify({ en: "From the chaos of Algiers to the chill of Oran, find out where you actually belong. 🇩🇿", fr: "Du chaos d'Alger au chill d'Oran, découvre où est ta vraie place. 🇩🇿", ar: "من فوضى الجزائر العاصمة إلى هدوء وهران، اكتشف أين مكانك الحقيقي. 🇩🇿" })},
  start_title: ${JSON.stringify({ en: 'Which Algerian City<br class="hidden md:block" /> Are You?', fr: 'Quelle Ville Algérienne<br class="hidden md:block" /> Es-Tu ?', ar: 'أي مدينة جزائرية<br class="hidden md:block" /> أنت؟' })},
  join_count: ${JSON.stringify({ en: "Join 12.5k people who found their home city today", fr: "Rejoins 12.5k personnes qui ont trouvé leur ville aujourd'hui", ar: "انضم إلى 12.5 ألف شخص وجدوا مدينتهم اليوم" })},
  share_card_quiz: ${JSON.stringify({ en: "Take the quiz on", fr: "Fais le quiz sur", ar: "اختبر نفسك على" })},
  share_card_title: ${JSON.stringify({ en: "Which Algerian City Are You?", fr: "Quelle Ville Algérienne Es-Tu ?", ar: "أي مدينة جزائرية أنت؟" })},
  share_card_im: ${JSON.stringify({ en: "I'M 100%", fr: "JE SUIS 100%", ar: "أنا %100" })}
};

const QUESTIONS = ${fmt(QUESTIONS, 0)};

const CITIES = ${fmt(CITIES, 0)};
`;

fs.writeFileSync('data.js', out);
console.log('✅ Written clean data.js');
console.log(`   ${cityKeys.length} cities, ${QUESTIONS.length} questions`);
console.log(`   File size: ${(fs.statSync('data.js').size / 1024).toFixed(1)} KB`);
