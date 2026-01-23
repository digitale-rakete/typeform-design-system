import { test, expect } from '@playwright/test'

test('Debug Phase 5 Icon', async ({ page }) => {
  // Navigate to the page
  await page.goto('http://localhost:3000')

  // Wait for the page to load
  await page.waitForLoadState('networkidle')

  // Scroll to Phase 5 section
  await page.locator('#phase-5').scrollIntoViewIfNeeded()

  // Wait a bit for animations
  await page.waitForTimeout(2000)

  // Take screenshot of Phase 5 section
  const phase5Section = page.locator('#phase-5')
  await phase5Section.screenshot({ path: 'tests/screenshots/phase5-section.png' })

  // Take screenshot of the icon specifically
  const iconElement = page.locator('#phase-5 lord-icon').first()
  await iconElement.screenshot({ path: 'tests/screenshots/phase5-icon.png' })

  // Get the icon's attributes
  const iconSrc = await iconElement.getAttribute('src')
  const iconTrigger = await iconElement.getAttribute('trigger')
  const iconColors = await iconElement.getAttribute('colors')
  const iconSpeed = await iconElement.getAttribute('speed')

  console.log('Icon attributes:')
  console.log('  src:', iconSrc)
  console.log('  trigger:', iconTrigger)
  console.log('  colors:', iconColors)
  console.log('  speed:', iconSpeed)

  // Check if the icon element is visible
  const isVisible = await iconElement.isVisible()
  console.log('  isVisible:', isVisible)

  // Get computed styles
  const boundingBox = await iconElement.boundingBox()
  console.log('  boundingBox:', boundingBox)

  // Full page screenshot
  await page.screenshot({ path: 'tests/screenshots/full-page-phase5.png', fullPage: true })
})
