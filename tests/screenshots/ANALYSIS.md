# Horizontal Scroll Layout Analysis

## Test Results

Successfully captured 11 screenshots at different scroll positions through the Customer Journey section.

**Journey Section Stats:**
- Total height: 8100px (150vh per phase × 5 phases)
- Viewport: 1920×1080px
- Scroll range: 3104px → 10799px

## Critical Issues Identified

### Issue 1: Content Not Centered in Phases

**Observed in screenshots:**
- `01-phase1-start.png`: ✅ Content visible and centered (Analyse & Strategie)
- `02-phase1-middle.png`: ✅ Content visible and centered (Infrastruktur)
- `03-phase2-start.png`: ❌ "Der Start" title visible on left edge, but HUGE empty space on right
- `05-phase3-start.png`: ❌ Almost completely empty - just navbar visible
- `07-phase4-start.png`: ❌ Completely empty - content off-screen
- `09-phase5-start.png`: ❌ Completely empty - content off-screen

**Root Cause:**
The PhaseSection component is not properly centering content within each 100vw container. As horizontal translation occurs, content appears to stay in a fixed position rather than moving with its phase container.

### Issue 2: Excessive Empty Space

**Problem:**
Screenshots show 60-80% of the viewport is empty space in phases 2-5. Users scroll through large areas of darkness with no content visible.

**Current Behavior:**
- Phase 1: Content visible
- Phase 2: Partial content on left edge, empty right side
- Phases 3-5: Almost entirely empty

**Expected Behavior:**
Each phase should fill the viewport with its content centered and visible.

### Issue 3: No Snap-to-Center Behavior

**Current:** Free scroll allows stopping anywhere, including in the middle of empty spaces
**Needed:** Snap to center of each phase when user stops scrolling

### Issue 4: Content Layout Issues

The PhaseSection content structure doesn't adapt well to horizontal scroll:
1. Content appears too small or pushed to edges
2. Vertical centering works, but horizontal positioning fails
3. No responsive padding/margins for horizontal layout

## Proposed Solutions

### Solution 1: Fix PhaseSection Layout

**File:** `components/CustomerJourney/PhaseSection.tsx`

Changes needed:
```tsx
<div className="w-screen h-screen flex items-center justify-center">
  <div className="max-w-4xl w-full px-8">
    {/* Content here - properly contained and centered */}
  </div>
</div>
```

Key fixes:
- Ensure each phase wrapper is `w-screen h-screen`
- Add explicit flex centering: `flex items-center justify-center`
- Contain content in max-width container
- Add horizontal padding for spacing

### Solution 2: Implement Snap-to-Center

**File:** `hooks/useHorizontalScroll.ts`

Add snap behavior:
```typescript
// After scroll stops, snap to nearest phase center
const snapToNearest = () => {
  const index = Math.round(translateX / 100)
  targetX.current = index * 100
}
```

Detect scroll stop:
- Track last scroll time
- If no scroll for 150ms → trigger snap
- Smooth lerp to snap position

### Solution 3: Better Content Adaptivity

Current content layout uses vertical stacking which wastes horizontal space.

Options:
1. **Two-column layout:** Icon/Visual left, content right
2. **Centered compact layout:** Tighter spacing, focused content area
3. **Full-width cards:** Horizontal card layout for "Was wir machen" items

Recommendation: **Centered compact layout** - keeps current structure but optimizes spacing

### Solution 4: Visual Indicators During Scroll

Add visual feedback:
- Dim non-active phases more aggressively
- Show phase number/name during transitions
- Highlight active phase indicator more clearly

## Implementation Priority

1. **Critical (Do First):**
   - Fix PhaseSection centering
   - Implement snap-to-center behavior

2. **High Priority:**
   - Adjust content layout for better space usage
   - Test across different screen sizes

3. **Medium Priority:**
   - Visual polish and indicators
   - Performance optimization

4. **Low Priority:**
   - Boundary detection (Multi-Channel stop)
   - Phase indicator horizontal repositioning

## Next Steps

1. Enter plan mode
2. Create detailed implementation plan for Solutions 1 & 2
3. Get user approval on content layout approach
4. Implement fixes
5. Re-run Playwright tests to verify improvements
