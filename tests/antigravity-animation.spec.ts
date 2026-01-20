import { test, expect } from '@playwright/test'

test.describe('Anti-Gravity Animation Analysis', () => {
  const consoleMessages: string[] = []
  const consoleErrors: string[] = []
  const consoleWarnings: string[] = []

  test.beforeEach(async ({ page }) => {
    // Capture console messages
    page.on('console', (msg) => {
      const text = msg.text()
      consoleMessages.push(`[${msg.type()}] ${text}`)

      if (msg.type() === 'error') {
        consoleErrors.push(text)
      } else if (msg.type() === 'warning') {
        consoleWarnings.push(text)
      }
    })

    // Capture page errors
    page.on('pageerror', (error) => {
      consoleErrors.push(`Page Error: ${error.message}`)
    })
  })

  test('should load page and analyze anti-gravity animation', async ({ page }) => {
    console.log('🚀 Starting Anti-Gravity Animation Test...')

    // Navigate to the page
    await page.goto('/')
    console.log('✓ Page loaded')

    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle')
    console.log('✓ Network idle')

    // Take initial screenshot
    await page.screenshot({
      path: 'tests/screenshots/01-initial-load.png',
      fullPage: true
    })
    console.log('✓ Initial screenshot taken')

    // Check if canvas exists
    const canvas = page.locator('canvas')
    const canvasCount = await canvas.count()
    console.log(`📊 Canvas elements found: ${canvasCount}`)

    if (canvasCount > 0) {
      // Get canvas properties
      const canvasBox = await canvas.first().boundingBox()
      console.log('📐 Canvas dimensions:', canvasBox)

      // Check if canvas has pointer-events
      const canvasStyle = await canvas.first().evaluate((el) => {
        return {
          pointerEvents: window.getComputedStyle(el).pointerEvents,
          zIndex: window.getComputedStyle(el).zIndex,
          position: window.getComputedStyle(el).position,
        }
      })
      console.log('🎨 Canvas styles:', canvasStyle)

      // Wait a bit for Three.js to initialize
      await page.waitForTimeout(2000)
      await page.screenshot({
        path: 'tests/screenshots/02-after-initialization.png',
        fullPage: true
      })
      console.log('✓ After initialization screenshot taken')

      // Move mouse to center of Hero section
      if (canvasBox) {
        const centerX = canvasBox.x + canvasBox.width / 2
        const centerY = canvasBox.y + canvasBox.height / 2

        console.log(`🖱️  Moving mouse to center: (${centerX}, ${centerY})`)
        await page.mouse.move(centerX, centerY, { steps: 10 })

        await page.waitForTimeout(1000)
        await page.screenshot({
          path: 'tests/screenshots/03-mouse-at-center.png',
          fullPage: true
        })
        console.log('✓ Mouse at center screenshot taken')

        // Move mouse in a circle to test tracking
        console.log('🖱️  Moving mouse in circular pattern...')
        const radius = 200
        for (let angle = 0; angle <= 360; angle += 30) {
          const rad = (angle * Math.PI) / 180
          const x = centerX + radius * Math.cos(rad)
          const y = centerY + radius * Math.sin(rad)
          await page.mouse.move(x, y, { steps: 5 })
          await page.waitForTimeout(200)
        }

        await page.screenshot({
          path: 'tests/screenshots/04-after-mouse-movement.png',
          fullPage: true
        })
        console.log('✓ After mouse movement screenshot taken')
      }

      // Check for Three.js renderer
      const threeJsInfo = await page.evaluate(() => {
        const canvas = document.querySelector('canvas')
        if (!canvas) return { found: false }

        // Check if WebGL context exists
        const gl = canvas.getContext('webgl') || canvas.getContext('webgl2')

        return {
          found: true,
          hasWebGL: !!gl,
          canvasWidth: canvas.width,
          canvasHeight: canvas.height,
          canvasClientWidth: canvas.clientWidth,
          canvasClientHeight: canvas.clientHeight,
        }
      })
      console.log('🎮 Three.js/WebGL Info:', threeJsInfo)

      // Check for animation frames
      console.log('⏱️  Checking for animation activity...')
      const animationCheck = await page.evaluate(() => {
        return new Promise((resolve) => {
          let frameCount = 0
          const startTime = Date.now()

          function checkFrames() {
            frameCount++
            if (Date.now() - startTime < 1000) {
              requestAnimationFrame(checkFrames)
            } else {
              resolve({ frameCount, fps: frameCount })
            }
          }

          requestAnimationFrame(checkFrames)
        })
      })
      console.log('🎬 Animation frames per second:', animationCheck)
    }

    // Print console summary
    console.log('\n📋 Console Summary:')
    console.log(`   Total messages: ${consoleMessages.length}`)
    console.log(`   Errors: ${consoleErrors.length}`)
    console.log(`   Warnings: ${consoleWarnings.length}`)

    if (consoleErrors.length > 0) {
      console.log('\n❌ Console Errors:')
      consoleErrors.forEach((err) => console.log(`   - ${err}`))
    }

    if (consoleWarnings.length > 0) {
      console.log('\n⚠️  Console Warnings:')
      consoleWarnings.forEach((warn) => console.log(`   - ${warn}`))
    }

    // Check Hero section pointer events
    const heroPointerEvents = await page.evaluate(() => {
      const heroBackground = document.querySelector('.hidden.md\\:block.absolute')
      const contentDiv = document.querySelector('.relative.max-w-5xl')

      return {
        backgroundPointerEvents: heroBackground ? window.getComputedStyle(heroBackground).pointerEvents : 'not found',
        contentPointerEvents: contentDiv ? window.getComputedStyle(contentDiv).pointerEvents : 'not found',
      }
    })
    console.log('\n🎯 Pointer Events Configuration:', heroPointerEvents)

    // Final screenshot
    await page.screenshot({
      path: 'tests/screenshots/05-final-state.png',
      fullPage: true
    })
    console.log('✓ Final screenshot taken')

    // Assertions
    expect(canvasCount).toBeGreaterThan(0)
    expect(consoleErrors.length).toBe(0)
  })
})
