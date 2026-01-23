import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });

  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(3000);

  await page.locator('#phase-5').scrollIntoViewIfNeeded();
  await page.waitForTimeout(2000);

  await page.locator('#phase-5').screenshot({ path: 'phase5-current.png' });
  console.log('✅ Screenshot saved: phase5-current.png');

  await page.waitForTimeout(5000); // Keep open for inspection
  await browser.close();
})();
