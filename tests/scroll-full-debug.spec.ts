import { test } from '@playwright/test'
import * as fs from 'fs'
import * as path from 'path'

test.describe('Customer Journey Scroll - Full Debug', () => {
  test('scroll and capture every detail', async ({ page }) => {
    test.setTimeout(180000) // 3 minutes

    // Console logging
    const consoleLogs: string[] = []
    page.on('console', (msg) => {
      consoleLogs.push(`[${msg.type()}] ${msg.text()}`)
    })

    // Output directory
    const logDir = path.join(process.cwd(), 'test-results', 'scroll-full-debug')
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true })
    }

    // Navigate
    await page.goto('http://localhost:3000')
    await page.waitForLoadState('networkidle')
    await page.waitForTimeout(2000)

    // Initial screenshot
    await page.screenshot({ path: path.join(logDir, '00-page-loaded.png') })

    // Get journey section position
    const journeyInfo = await page.evaluate(() => {
      const journey = document.querySelector('#journey')
      if (!journey) return null
      const rect = journey.getBoundingClientRect()
      const spacer = journey.querySelector('div[ref]') || journey.querySelector(':scope > div')
      const spacerHeight = spacer ? (spacer as HTMLElement).getBoundingClientRect().height : 0

      return {
        top: rect.top + window.scrollY,
        height: rect.height,
        spacerHeight
      }
    })

    console.log('=== JOURNEY INFO ===')
    console.log(JSON.stringify(journeyInfo, null, 2))

    if (!journeyInfo) {
      throw new Error('Journey not found!')
    }

    // Scroll through journey in 200 steps
    const steps = 200
    const startScroll = journeyInfo.top - 100 // Start a bit before
    const endScroll = journeyInfo.top + journeyInfo.height + 100

    for (let i = 0; i <= steps; i++) {
      const progress = i / steps
      const scrollY = startScroll + (progress * (endScroll - startScroll))

      // Scroll
      await page.evaluate((y) => {
        window.scrollTo({ top: y, behavior: 'instant' })
      }, scrollY)

      // Wait a bit
      await page.waitForTimeout(30)

      // Get detailed state
      const state = await page.evaluate(() => {
        // Journey has 3 children: ScrollProgress, PhaseIndicator, Spacer
        // We want the 3rd child (spacer) > sticky > flex
        const container = document.querySelector('#journey > div:nth-child(3) > div.sticky > div.flex') as HTMLElement
        if (!container) return { error: 'Container not found', selector: '#journey > div:nth-child(3) > div.sticky > div.flex' }

        const transform = container.style.transform
        const translateMatch = transform.match(/translateX\((-?\d+\.?\d*)%?\)/)
        const translateX = translateMatch ? parseFloat(translateMatch[1]) : 0

        const phaseWrappers = Array.from(container.children) as HTMLElement[]

        return {
          scrollY: Math.round(window.scrollY),
          translateX: Math.round(translateX * 100) / 100,
          transformRaw: transform,
          containerWidth: container.style.width,
          phaseCount: phaseWrappers.length,
          phases: phaseWrappers.map((wrapper, idx) => {
            const section = wrapper.querySelector('section')
            return {
              phase: idx + 1,
              opacity: parseFloat(wrapper.style.opacity || '0'),
              sectionId: section?.id || 'unknown'
            }
          })
        }
      })

      // Log every 10 steps
      if (i % 10 === 0) {
        console.log(`\n=== STEP ${i}/${steps} (${Math.round(progress * 100)}%) ===`)
        console.log(JSON.stringify(state, null, 2))

        // Screenshot
        await page.screenshot({
          path: path.join(logDir, `step-${i.toString().padStart(3, '0')}.png`)
        })
      }

      // Screenshot at key translateX values
      if (state && !('error' in state)) {
        const tx = Math.abs(state.translateX)
        if ([0, 50, 100, 150, 200, 250, 300, 350, 400].includes(Math.round(tx))) {
          await page.screenshot({
            path: path.join(logDir, `translateX-${Math.round(tx)}.png`)
          })
        }
      }
    }

    // Save logs
    fs.writeFileSync(
      path.join(logDir, 'console.txt'),
      consoleLogs.join('\n')
    )

    console.log('\n✅ DONE! Check test-results/scroll-full-debug/')
  })
})
