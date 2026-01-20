import { test } from '@playwright/test'

test('Quick Anti-Gravity Check', async ({ page }) => {
  const errors: string[] = []
  const warnings: string[] = []

  // Listen to console
  page.on('console', msg => {
    console.log(`BROWSER [${msg.type()}]: ${msg.text()}`)
    if (msg.type() === 'error') errors.push(msg.text())
    if (msg.type() === 'warning') warnings.push(msg.text())
  })

  page.on('pageerror', error => {
    console.log(`PAGE ERROR: ${error.message}`)
    errors.push(error.message)
  })

  // Navigate
  console.log('Loading page...')
  await page.goto('http://localhost:3000')

  // Wait for load
  await page.waitForLoadState('networkidle')
  console.log('Page loaded')

  // Screenshot 1: Initial
  await page.screenshot({ path: 'tests/screenshots/quick-01-initial.png', fullPage: true })
  console.log('Screenshot 1: Initial')

  // Wait for animation to start
  await page.waitForTimeout(3000)

  // Screenshot 2: After 3s
  await page.screenshot({ path: 'tests/screenshots/quick-02-after-3s.png', fullPage: true })
  console.log('Screenshot 2: After 3 seconds')

  // Check canvas
  const canvasExists = await page.locator('canvas').count()
  console.log(`Canvas elements: ${canvasExists}`)

  // Get pointer events
  const pointerEventsInfo = await page.evaluate(() => {
    const canvas = document.querySelector('canvas')
    const bgDiv = document.querySelector('.hidden.md\\:block.absolute')

    return {
      canvas: canvas ? window.getComputedStyle(canvas).pointerEvents : 'NOT_FOUND',
      background: bgDiv ? window.getComputedStyle(bgDiv).pointerEvents : 'NOT_FOUND',
    }
  })
  console.log('Pointer Events:', JSON.stringify(pointerEventsInfo, null, 2))

  // Move mouse
  await page.mouse.move(500, 400)
  await page.waitForTimeout(2000)

  // Screenshot 3: After mouse move
  await page.screenshot({ path: 'tests/screenshots/quick-03-mouse-moved.png', fullPage: true })
  console.log('Screenshot 3: After mouse move')

  // Summary
  console.log('\n=== SUMMARY ===')
  console.log(`Errors: ${errors.length}`)
  console.log(`Warnings: ${warnings.length}`)

  if (errors.length > 0) {
    console.log('\nERRORS:')
    errors.forEach(e => console.log(`  - ${e}`))
  }
})
