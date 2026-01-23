import { test, expect } from '@playwright/test'

test.describe('Customer Journey Horizontal Scroll Analysis', () => {
  test('capture key scroll positions', async ({ page }, testInfo) => {
    // Increase timeout for this test
    test.setTimeout(90000)

    // Set viewport to desktop size
    await page.setViewportSize({ width: 1920, height: 1080 })

    // Navigate to the page
    await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' })

    // Wait a bit for the page to fully render
    await page.waitForTimeout(2000)

    // Take initial screenshot (before journey section)
    await page.screenshot({
      path: 'tests/screenshots/00-page-top.png',
      fullPage: false
    })

    // Get journey section information
    const journeyInfo = await page.evaluate(() => {
      const journeySection = document.querySelector('#journey')
      if (!journeySection) return null

      const rect = journeySection.getBoundingClientRect()
      return {
        height: journeySection.scrollHeight,
        top: rect.top + window.scrollY,
        viewportHeight: window.innerHeight
      }
    })

    if (!journeyInfo) {
      throw new Error('Journey section not found')
    }

    console.log('Journey section:', journeyInfo)

    // Define scroll positions to capture (in pixels from journey start)
    const scrollPositions = [
      { offset: 0, name: '01-phase1-start' },
      { offset: journeyInfo.height * 0.15, name: '02-phase1-middle' },
      { offset: journeyInfo.height * 0.2, name: '03-phase2-start' },
      { offset: journeyInfo.height * 0.35, name: '04-phase2-middle' },
      { offset: journeyInfo.height * 0.4, name: '05-phase3-start' },
      { offset: journeyInfo.height * 0.55, name: '06-phase3-middle' },
      { offset: journeyInfo.height * 0.6, name: '07-phase4-start' },
      { offset: journeyInfo.height * 0.75, name: '08-phase4-middle' },
      { offset: journeyInfo.height * 0.8, name: '09-phase5-start' },
      { offset: journeyInfo.height * 0.95, name: '10-phase5-end' }
    ]

    // Capture screenshots at each position
    for (const position of scrollPositions) {
      const scrollTo = journeyInfo.top + position.offset

      await page.evaluate((scrollY) => {
        window.scrollTo({ top: scrollY, behavior: 'instant' })
      }, scrollTo)

      // Wait for smooth animation to settle
      await page.waitForTimeout(1000)

      await page.screenshot({
        path: `tests/screenshots/${position.name}.png`,
        fullPage: false
      })

      console.log(`Captured: ${position.name} at scroll ${Math.round(scrollTo)}px`)
    }

    // Capture one more after journey section
    await page.evaluate((scrollY) => {
      window.scrollTo({ top: scrollY, behavior: 'instant' })
    }, journeyInfo.top + journeyInfo.height + 500)

    await page.waitForTimeout(1000)

    await page.screenshot({
      path: 'tests/screenshots/11-after-journey.png',
      fullPage: false
    })

    console.log('All screenshots captured successfully')
  })
})
