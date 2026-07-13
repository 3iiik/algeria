import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 375, height: 812 } });

page.on('console', msg => console.log('CONSOLE:', msg.type(), msg.text()));
page.on('pageerror', err => console.log('PAGE ERROR:', err.message));

await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 10000 });
await page.waitForTimeout(1000);

// Check current title
const titleBefore = await page.textContent('#start-title');
console.log('TITLE BEFORE:', JSON.stringify(titleBefore));

// Check language buttons
const btnCount = await page.locator('[data-lang]').count();
console.log('Lang buttons found:', btnCount);

// Try clicking FR
await page.locator('button[data-lang="fr"]').click();
await page.waitForTimeout(500);

const titleAfter = await page.textContent('#start-title');
console.log('TITLE AFTER CLICK FR:', JSON.stringify(titleAfter));

// Check localStorage
const stored = await page.evaluate(() => localStorage.getItem('algeria-lang'));
console.log('localStorage:', stored);

// Check currentLang value
const langVal = await page.evaluate(() => currentLang);
console.log('currentLang:', langVal);

// Try clicking AR
await page.locator('button[data-lang="ar"]').click();
await page.waitForTimeout(500);
const titleAr = await page.textContent('#start-title');
console.log('TITLE AFTER CLICK AR:', JSON.stringify(titleAr));

// Take a screenshot
await page.screenshot({ path: 'debug_lang.png', fullPage: false });

await browser.close();
