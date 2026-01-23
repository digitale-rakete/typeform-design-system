import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  console.log('Navigating to localhost:3000...');
  await page.goto('http://localhost:3000');

  console.log('Waiting for page to load...');
  await page.waitForLoadState('networkidle');

  console.log('Scrolling to Phase 5...');
  await page.locator('#phase-5').scrollIntoViewIfNeeded();
  await page.waitForTimeout(2000);

  console.log('Taking screenshots...');

  // Screenshot of Phase 5 section
  const phase5Section = page.locator('#phase-5');
  await phase5Section.screenshot({ path: 'phase5-section.png' });
  console.log('✓ Saved phase5-section.png');

  // Get icon details
  const iconElement = page.locator('#phase-5 lord-icon').first();

  try {
    const iconSrc = await iconElement.getAttribute('src');
    const iconTrigger = await iconElement.getAttribute('trigger');
    const iconColors = await iconElement.getAttribute('colors');
    const isVisible = await iconElement.isVisible();
    const boundingBox = await iconElement.boundingBox();

    console.log('\nIcon Details:');
    console.log('  src:', iconSrc);
    console.log('  trigger:', iconTrigger);
    console.log('  colors:', iconColors);
    console.log('  isVisible:', isVisible);
    console.log('  boundingBox:', boundingBox);

    // Screenshot of just the icon
    await iconElement.screenshot({ path: 'phase5-icon.png' });
    console.log('✓ Saved phase5-icon.png');
  } catch (error) {
    console.error('Error getting icon details:', error.message);
  }

  await browser.close();
  console.log('\nDone!');
})();
