import { chromium } from '@playwright/test'
import { mkdir } from 'fs/promises'

async function analyzeAntigravity() {
  console.log('🚀 Starting Anti-Gravity Analysis...\n')

  // Ensure screenshots directory exists
  await mkdir('tests/screenshots', { recursive: true })

  const browser = await chromium.launch({ headless: false })
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  })
  const page = await context.newPage()

  const errors = []
  const warnings = []
  const logs = []

  // Listen to console
  page.on('console', msg => {
    const text = `[${msg.type().toUpperCase()}] ${msg.text()}`
    logs.push(text)
    console.log(`BROWSER: ${text}`)

    if (msg.type() === 'error') errors.push(msg.text())
    if (msg.type() === 'warning') warnings.push(msg.text())
  })

  page.on('pageerror', error => {
    const text = `PAGE ERROR: ${error.message}`
    errors.push(error.message)
    console.log(text)
  })

  try {
    // Navigate
    console.log('📄 Navigating to http://localhost:3000...')
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' })
    console.log('✓ Page loaded\n')

    // Screenshot 1
    await page.screenshot({ path: 'tests/screenshots/analysis-01-initial.png', fullPage: true })
    console.log('📸 Screenshot 1: Initial load')

    // Wait for animation to initialize
    console.log('⏱️  Waiting 3 seconds for animation initialization...')
    await page.waitForTimeout(3000)

    // Screenshot 2
    await page.screenshot({ path: 'tests/screenshots/analysis-02-after-init.png', fullPage: true })
    console.log('📸 Screenshot 2: After initialization\n')

    // Check canvas
    const canvasCount = await page.locator('canvas').count()
    console.log(`🎨 Canvas elements found: ${canvasCount}`)

    if (canvasCount > 0) {
      // Get canvas info
      const canvasInfo = await page.evaluate(() => {
        const canvas = document.querySelector('canvas')
        if (!canvas) return null

        const bgDiv = canvas.closest('.absolute')
        const contentDiv = document.querySelector('.relative.max-w-5xl')

        return {
          canvas: {
            width: canvas.width,
            height: canvas.height,
            clientWidth: canvas.clientWidth,
            clientHeight: canvas.clientHeight,
            pointerEvents: window.getComputedStyle(canvas).pointerEvents,
            zIndex: window.getComputedStyle(canvas).zIndex,
          },
          background: bgDiv ? {
            pointerEvents: window.getComputedStyle(bgDiv).pointerEvents,
            zIndex: window.getComputedStyle(bgDiv).zIndex,
          } : null,
          content: contentDiv ? {
            pointerEvents: window.getComputedStyle(contentDiv).pointerEvents,
            zIndex: window.getComputedStyle(contentDiv).zIndex,
          } : null
        }
      })

      console.log('\n📊 Element Configuration:')
      console.log(JSON.stringify(canvasInfo, null, 2))

      // Check WebGL
      const webglInfo = await page.evaluate(() => {
        const canvas = document.querySelector('canvas')
        if (!canvas) return { hasWebGL: false }

        const gl = canvas.getContext('webgl') || canvas.getContext('webgl2')
        return {
          hasWebGL: !!gl,
          contextType: gl ? (canvas.getContext('webgl2') ? 'webgl2' : 'webgl') : 'none'
        }
      })

      console.log('\n🎮 WebGL Status:', webglInfo)

      // Test mouse movement
      console.log('\n🖱️  Testing mouse movement...')
      await page.mouse.move(960, 400)
      await page.waitForTimeout(1000)

      await page.screenshot({ path: 'tests/screenshots/analysis-03-mouse-center.png', fullPage: true })
      console.log('📸 Screenshot 3: Mouse at center')

      // Move in circle
      console.log('🔄 Moving mouse in circular pattern...')
      const centerX = 960
      const centerY = 400
      const radius = 200

      for (let angle = 0; angle <= 360; angle += 45) {
        const rad = (angle * Math.PI) / 180
        const x = centerX + radius * Math.cos(rad)
        const y = centerY + radius * Math.sin(rad)
        await page.mouse.move(x, y, { steps: 5 })
        await page.waitForTimeout(300)
      }

      await page.screenshot({ path: 'tests/screenshots/analysis-04-after-movement.png', fullPage: true })
      console.log('📸 Screenshot 4: After mouse movement\n')

      // Check animation frame rate
      console.log('🎬 Checking animation activity...')
      const fpsInfo = await page.evaluate(() => {
        return new Promise((resolve) => {
          let frameCount = 0
          const startTime = Date.now()

          function countFrames() {
            frameCount++
            if (Date.now() - startTime < 2000) {
              requestAnimationFrame(countFrames)
            } else {
              const duration = Date.now() - startTime
              resolve({
                frames: frameCount,
                duration,
                fps: Math.round((frameCount / duration) * 1000)
              })
            }
          }

          requestAnimationFrame(countFrames)
        })
      })

      console.log('FPS Info:', fpsInfo)
    }

    // Final screenshot
    await page.screenshot({ path: 'tests/screenshots/analysis-05-final.png', fullPage: true })
    console.log('\n📸 Screenshot 5: Final state')

    // Summary
    console.log('\n' + '='.repeat(50))
    console.log('📋 ANALYSIS SUMMARY')
    console.log('='.repeat(50))
    console.log(`Canvas Elements: ${canvasCount}`)
    console.log(`Console Errors: ${errors.length}`)
    console.log(`Console Warnings: ${warnings.length}`)
    console.log(`Total Console Messages: ${logs.length}`)

    if (errors.length > 0) {
      console.log('\n❌ ERRORS:')
      errors.forEach((err, i) => console.log(`  ${i + 1}. ${err}`))
    }

    if (warnings.length > 0) {
      console.log('\n⚠️  WARNINGS:')
      warnings.forEach((warn, i) => console.log(`  ${i + 1}. ${warn}`))
    }

    console.log('\n✅ Analysis complete! Screenshots saved to tests/screenshots/')
    console.log('='.repeat(50))

  } catch (error) {
    console.error('\n❌ Error during analysis:', error.message)
  } finally {
    await browser.close()
  }
}

analyzeAntigravity().catch(console.error)
