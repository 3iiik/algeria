import fs from 'fs';
const raw = fs.readFileSync('data.js', 'utf-8');
console.log('File length:', raw.length);

// Find array start/end helpers
function extractBalanced(text, startIdx) {
  let depth = 1;
  let i = startIdx;
  while (depth > 0 && i < text.length) {
    if (text[i] === '{' || text[i] === '[') depth++;
    if (text[i] === '}' || text[i] === ']') depth--;
    i++;
  }
  return { body: text.slice(startIdx, i), endPos: i };
}

// Find QUESTIONS
const qIdx = raw.indexOf('const QUESTIONS = [');
console.log('QUESTIONS idx:', qIdx);
if (qIdx >= 0) {
  const qStart = qIdx + 'const QUESTIONS = ['.length - 1;
  console.log('QUESTIONS start char:', JSON.stringify(raw[qStart]));
  const result = extractBalanced(raw, qStart + 1);
  const qBody = raw[qStart] + result.body;
  console.log('QUESTIONS body length:', qBody.length);
  console.log('QUESTIONS body start:', JSON.stringify(qBody.substring(0, 50)));
  console.log('QUESTIONS body end:', JSON.stringify(qBody.substring(qBody.length - 10)));
  try {
    const q = eval(qBody);
    console.log('QUESTIONS parsed:', q.length, 'items');
  } catch (e) {
    console.log('QUESTIONS eval error:', e.message);
  }
}

// Find CITIES
const cIdx = raw.indexOf('const CITIES = {');
console.log('\nCITIES idx:', cIdx);
if (cIdx >= 0) {
  const cStart = cIdx + 'const CITIES = {'.length - 1;
  console.log('CITIES start char:', JSON.stringify(raw[cStart]));
  const result = extractBalanced(raw, cStart + 1);
  const cBody = raw[cStart] + result.body;
  console.log('CITIES body length:', cBody.length);
  console.log('CITIES body start:', JSON.stringify(cBody.substring(0, 50)));
  console.log('CITIES body end:', JSON.stringify(cBody.substring(cBody.length - 10)));
  try {
    const c = eval('(' + cBody + ')');
    console.log('CITIES parsed:', Object.keys(c).length, 'cities');
    console.log('First key:', Object.keys(c)[0]);
  } catch (e) {
    console.log('CITIES eval error:', e.message);
  }
}
