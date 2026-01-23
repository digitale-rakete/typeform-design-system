import { chromium } from '@playwright/test';
import fs from 'fs';

const report = {
  timestamp: new Date().toISOString(),
  consoleMessages: [],
  networkRequests: [],
  errors: [],
  iconDetails: {},
  screenshots: []
};

(async () => {
  console.log('🚀 Starting comprehensive Phase 5 Icon debugging...\n');

  // Launch browser in headed mode
  const browser = await chromium.launch({
    headless: false,
    slowMo: 500 // Slow down by 500ms for visibility
  });

  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });

  const page = await context.newPage();

  // Monitor console messages
  page.on('console', msg => {
    const logEntry = {
      type: msg.type(),
      text: msg.text(),
      location: msg.location()
    };
    report.consoleMessages.push(logEntry);
    console.log(`📢 Console [${msg.type()}]:`, msg.text());
  });

  // Monitor network requests
  page.on('request', request => {
    const url = request.url();
    if (url.includes('lordicon') || url.includes('.json')) {
      const reqEntry = {
        url: url,
        method: request.method(),
        resourceType: request.resourceType()
      };
      report.networkRequests.push(reqEntry);
      console.log(`🌐 Request:`, url);
    }
  });

  // Monitor network responses
  page.on('response', async response => {
    const url = response.url();
    if (url.includes('lordicon') || url.includes('.json')) {
      const status = response.status();
      const statusText = response.statusText();
      console.log(`📥 Response [${status}]:`, url, statusText);

      if (status !== 200) {
        report.errors.push({
          type: 'network',
          url: url,
          status: status,
          statusText: statusText
        });
      }
    }
  });

  // Monitor page errors
  page.on('pageerror', error => {
    const errorEntry = {
      type: 'page-error',
      message: error.message,
      stack: error.stack
    };
    report.errors.push(errorEntry);
    console.error('❌ Page Error:', error.message);
  });

  try {
    console.log('\n📍 Step 1: Navigating to http://localhost:3000');
    await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 60000 });
    console.log('✅ Page loaded (DOM ready)\n');

    // Wait for network to settle and animations to complete
    console.log('⏳ Waiting for network to settle...');
    await page.waitForTimeout(5000);
    console.log('✅ Network settled\n');

    console.log('📍 Step 2: Scrolling to Phase 5 section');
    const phase5Exists = await page.locator('#phase-5').count() > 0;
    console.log('Phase 5 section exists:', phase5Exists);

    if (phase5Exists) {
      await page.locator('#phase-5').scrollIntoViewIfNeeded();
      await page.waitForTimeout(3000); // Wait for animations
      console.log('✅ Scrolled to Phase 5\n');
    }

    console.log('📍 Step 3: Taking full page screenshot');
    await page.screenshot({
      path: 'screenshots/01-full-page.png',
      fullPage: true
    });
    report.screenshots.push('screenshots/01-full-page.png');
    console.log('✅ Saved: screenshots/01-full-page.png\n');

    console.log('📍 Step 4: Taking Phase 5 section screenshot');
    const phase5Section = page.locator('#phase-5');
    await phase5Section.screenshot({ path: 'screenshots/02-phase5-section.png' });
    report.screenshots.push('screenshots/02-phase5-section.png');
    console.log('✅ Saved: screenshots/02-phase5-section.png\n');

    console.log('📍 Step 5: Analyzing lord-icon element');
    const lordIconElements = await page.locator('#phase-5 lord-icon').count();
    console.log(`Found ${lordIconElements} lord-icon element(s) in Phase 5\n`);

    if (lordIconElements > 0) {
      const iconElement = page.locator('#phase-5 lord-icon').first();

      // Get all attributes
      const attributes = {
        src: await iconElement.getAttribute('src'),
        trigger: await iconElement.getAttribute('trigger'),
        colors: await iconElement.getAttribute('colors'),
        speed: await iconElement.getAttribute('speed'),
        style: await iconElement.getAttribute('style')
      };

      report.iconDetails.attributes = attributes;

      console.log('📋 Icon Attributes:');
      console.log('   src:', attributes.src);
      console.log('   trigger:', attributes.trigger);
      console.log('   colors:', attributes.colors);
      console.log('   speed:', attributes.speed);
      console.log('   style:', attributes.style);
      console.log('');

      // Check visibility
      const isVisible = await iconElement.isVisible();
      const boundingBox = await iconElement.boundingBox();

      report.iconDetails.visibility = {
        isVisible: isVisible,
        boundingBox: boundingBox
      };

      console.log('👁️  Visibility:');
      console.log('   isVisible:', isVisible);
      console.log('   boundingBox:', boundingBox);
      console.log('');

      // Get computed styles
      const computedStyle = await iconElement.evaluate(el => {
        const style = window.getComputedStyle(el);
        return {
          display: style.display,
          visibility: style.visibility,
          opacity: style.opacity,
          width: style.width,
          height: style.height,
          position: style.position
        };
      });

      report.iconDetails.computedStyle = computedStyle;

      console.log('🎨 Computed Styles:');
      Object.entries(computedStyle).forEach(([key, value]) => {
        console.log(`   ${key}: ${value}`);
      });
      console.log('');

      // Screenshot of icon element
      try {
        await iconElement.screenshot({ path: 'screenshots/03-icon-element.png' });
        report.screenshots.push('screenshots/03-icon-element.png');
        console.log('✅ Saved: screenshots/03-icon-element.png\n');
      } catch (e) {
        console.warn('⚠️  Could not screenshot icon element:', e.message);
      }

      // Check shadow DOM
      const hasShadowRoot = await iconElement.evaluate(el => !!el.shadowRoot);
      report.iconDetails.hasShadowRoot = hasShadowRoot;
      console.log('🌓 Shadow DOM:', hasShadowRoot ? 'Yes' : 'No');

      if (hasShadowRoot) {
        const shadowContent = await iconElement.evaluate(el => {
          const shadowRoot = el.shadowRoot;
          return shadowRoot ? shadowRoot.innerHTML.substring(0, 500) : 'No content';
        });
        report.iconDetails.shadowContent = shadowContent;
        console.log('   Shadow content preview:', shadowContent.substring(0, 100) + '...\n');
      }
    } else {
      console.log('❌ No lord-icon elements found in Phase 5!\n');
      report.errors.push({
        type: 'missing-element',
        message: 'No lord-icon elements found in #phase-5'
      });
    }

    console.log('📍 Step 6: Testing lord-icon library loading');
    const lordIconDefined = await page.evaluate(() => {
      return typeof window.customElements !== 'undefined' &&
             window.customElements.get('lord-icon') !== undefined;
    });
    report.iconDetails.lordIconLibraryLoaded = lordIconDefined;
    console.log('📚 lord-icon custom element defined:', lordIconDefined);
    console.log('');

    // Take screenshot of all phases for comparison
    console.log('📍 Step 7: Capturing all phases for comparison');
    for (let i = 1; i <= 5; i++) {
      const phaseExists = await page.locator(`#phase-${i}`).count() > 0;
      if (phaseExists) {
        await page.locator(`#phase-${i}`).scrollIntoViewIfNeeded();
        await page.waitForTimeout(1000);
        await page.locator(`#phase-${i}`).screenshot({
          path: `screenshots/phase-${i}-comparison.png`
        });
        report.screenshots.push(`screenshots/phase-${i}-comparison.png`);
        console.log(`✅ Saved: screenshots/phase-${i}-comparison.png`);
      }
    }

    console.log('\n📍 Step 8: Generating detailed report');

  } catch (error) {
    console.error('\n❌ Fatal Error:', error.message);
    report.errors.push({
      type: 'fatal',
      message: error.message,
      stack: error.stack
    });
  }

  // Generate JSON report
  fs.writeFileSync('debug-report.json', JSON.stringify(report, null, 2));
  console.log('\n✅ Report saved to: debug-report.json');

  // Generate human-readable report
  let textReport = `
═══════════════════════════════════════════════════════════
  PHASE 5 ICON DEBUG REPORT
  Generated: ${report.timestamp}
═══════════════════════════════════════════════════════════

📸 SCREENSHOTS
${report.screenshots.map(s => `  - ${s}`).join('\n')}

🔍 ICON DETAILS
  Attributes:
${report.iconDetails.attributes ? Object.entries(report.iconDetails.attributes).map(([k, v]) => `    ${k}: ${v}`).join('\n') : '    None found'}

  Visibility:
    isVisible: ${report.iconDetails.visibility?.isVisible}
    boundingBox: ${JSON.stringify(report.iconDetails.visibility?.boundingBox)}

  Computed Style:
${report.iconDetails.computedStyle ? Object.entries(report.iconDetails.computedStyle).map(([k, v]) => `    ${k}: ${v}`).join('\n') : '    None'}

  Shadow DOM: ${report.iconDetails.hasShadowRoot ? 'Yes' : 'No'}
  lord-icon Library Loaded: ${report.iconDetails.lordIconLibraryLoaded}

🌐 NETWORK REQUESTS (lordicon related)
${report.networkRequests.length > 0 ? report.networkRequests.map(r => `  - [${r.method}] ${r.url}`).join('\n') : '  None'}

📢 CONSOLE MESSAGES
${report.consoleMessages.length > 0 ? report.consoleMessages.slice(0, 20).map(m => `  [${m.type}] ${m.text}`).join('\n') : '  None'}

❌ ERRORS
${report.errors.length > 0 ? report.errors.map(e => `  - [${e.type}] ${e.message || e.statusText}`).join('\n') : '  None'}

═══════════════════════════════════════════════════════════
`;

  fs.writeFileSync('debug-report.txt', textReport);
  console.log('✅ Human-readable report saved to: debug-report.txt\n');

  console.log('📊 Summary:');
  console.log(`   Screenshots taken: ${report.screenshots.length}`);
  console.log(`   Network requests: ${report.networkRequests.length}`);
  console.log(`   Console messages: ${report.consoleMessages.length}`);
  console.log(`   Errors found: ${report.errors.length}`);

  console.log('\n⏸️  Browser will stay open for 10 seconds for you to inspect...');
  await page.waitForTimeout(10000);

  await browser.close();
  console.log('\n✅ Done! Check the screenshots/ folder and reports.\n');
})();
