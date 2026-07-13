const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 375, height: 812 } });

  page.on('console', msg => console.log('CONSOLE:', msg.type(), msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 10000 });
  await page.waitForTimeout(1000);

  const titleBefore = await page.textContent('#start-title');
  console.log('TITLE BEFORE:', JSON.stringify(titleBefore));

  const btnCount = await page.locator('[data-lang]').count();
  console.log('Lang buttons found:', btnCount);

  await page.locator('button[data-lang="fr"]').click();
  await page.waitForTimeout(500);

  const titleAfter = await page.textContent('#start-title');
  console.log('TITLE AFTER CLICK FR:', JSON.stringify(titleAfter));

  const stored = await page.evaluate(() => localStorage.getItem('algeria-lang'));
  console.log('localStorage:', stored);

  const langVal = await page.evaluate(() => currentLang);
  console.log('currentLang:', langVal);

  await page.locator('button[data-lang="ar"]').click();
  await page.waitForTimeout(500);
  const titleAr = await page.textContent('#start-title');
  console.log('TITLE AFTER CLICK AR:', JSON.stringify(titleAr));

  await page.screenshot({ path: 'debug_lang.png', fullPage: false });
  console.log('Screenshot saved');

  await browser.close();
})();
