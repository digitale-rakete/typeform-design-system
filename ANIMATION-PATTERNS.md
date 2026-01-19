# Animation Patterns

> Framer Motion Animation Patterns für Typeform-Style Apps

---

## 🎬 Core Animation Principles

### 1. Timing

```typescript
// Typeform's Animation Timings
const TIMING = {
  fast: 150,      // Micro-interactions (hover, active)
  normal: 300,    // Standard transitions
  slow: 500,      // Page transitions, modals
}

const EASING = {
  easeOut: [0.25, 0.46, 0.45, 0.94],  // Smooth deceleration
  easeIn: [0.42, 0, 1, 1],             // Smooth acceleration
  easeInOut: [0.42, 0, 0.58, 1],       // Symmetric
}
```

### 2. Movement

```typescript
// Subtle movement distances
const DISTANCE = {
  micro: 4,   // Hover effects
  small: 10,  // Button press
  medium: 20, // Fade in/out
  large: 40,  // Slide in/out
}
```

---

## 📦 Reusable Variants

### Fade In

```typescript
export const fadeIn = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

// Usage
<motion.div variants={fadeIn} initial="hidden" animate="visible">
  Content
</motion.div>
```

### Fade In + Slide Up

```typescript
export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}
```

### Fade In + Slide Down

```typescript
export const fadeInDown = {
  hidden: {
    opacity: 0,
    y: -20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}
```

### Scale In

```typescript
export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}
```

---

## 🎯 Stagger Animations

### Container + Items

```typescript
export const staggerContainer = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,  // Delay zwischen Items
      delayChildren: 0.2     // Initial delay
    }
  }
}

export const staggerItem = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

// Usage
<motion.div variants={staggerContainer} initial="hidden" animate="visible">
  <motion.h1 variants={staggerItem}>Headline</motion.h1>
  <motion.p variants={staggerItem}>Paragraph 1</motion.p>
  <motion.p variants={staggerItem}>Paragraph 2</motion.p>
  <motion.button variants={staggerItem}>CTA</motion.button>
</motion.div>
```

### List Animation

```typescript
export const listContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

export const listItem = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

// Usage - Feature List
<motion.ul variants={listContainer} initial="hidden" animate="visible">
  {features.map(feature => (
    <motion.li key={feature.id} variants={listItem}>
      {feature.name}
    </motion.li>
  ))}
</motion.ul>
```

---

## 🔄 Page Transitions

### Wizard Steps

```typescript
export const wizardTransition = {
  initial: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 100 : -100
  }),
  animate: {
    opacity: 1,
    x: 0
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -100 : 100
  }),
  transition: {
    duration: 0.3,
    ease: [0.25, 0.46, 0.45, 0.94]
  }
}

// Usage
import { AnimatePresence } from 'framer-motion'

const [step, setStep] = useState(0)
const [direction, setDirection] = useState(0)

<AnimatePresence mode="wait" custom={direction}>
  <motion.div
    key={step}
    custom={direction}
    variants={wizardTransition}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    <QuestionComponent question={questions[step]} />
  </motion.div>
</AnimatePresence>
```

### Modal/Dialog

```typescript
export const modalBackdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

export const modalContent = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

// Usage
<AnimatePresence>
  {isOpen && (
    <>
      <motion.div
        variants={modalBackdrop}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="fixed inset-0 bg-black/50"
      />
      <motion.div
        variants={modalContent}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="fixed inset-0 flex items-center justify-center"
      >
        <div className="bg-white rounded-2xl p-8">
          Modal Content
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>
```

---

## 🎨 Interactive Animations

### Hover Scale

```typescript
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  transition={{
    duration: 0.15,
    ease: [0.25, 0.46, 0.45, 0.94]
  }}
>
  Click Me
</motion.button>
```

### Card Hover

```typescript
<motion.div
  className="card"
  whileHover={{
    y: -8,
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
  }}
  transition={{
    duration: 0.3,
    ease: [0.25, 0.46, 0.45, 0.94]
  }}
>
  Card Content
</motion.div>
```

### Icon Rotation

```typescript
<motion.div
  animate={{ rotate: isOpen ? 180 : 0 }}
  transition={{ duration: 0.3 }}
>
  <ChevronDownIcon />
</motion.div>
```

---

## 📊 Progress Animations

### Progress Bar

```typescript
<motion.div
  className="h-2 bg-purple-600 rounded-full"
  initial={{ width: 0 }}
  animate={{ width: `${progress}%` }}
  transition={{
    duration: 0.5,
    ease: [0.25, 0.46, 0.45, 0.94]
  }}
/>
```

### Counter Animation

```typescript
import { useMotionValue, useTransform, animate } from 'framer-motion'

export function Counter({ value }: { value: number }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, Math.round)

  useEffect(() => {
    const animation = animate(count, value, {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94]
    })
    return animation.stop
  }, [value])

  return <motion.span>{rounded}</motion.span>
}
```

---

## 🎯 Advanced Patterns

### Scroll-Triggered Animations

```typescript
import { useScroll, useTransform } from 'framer-motion'

export function ParallaxSection() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <motion.div style={{ y }}>
      Content moves slower than scroll
    </motion.div>
  )
}
```

### Intersection Observer Animation

```typescript
import { useInView } from 'framer-motion'

export function FadeInWhenVisible({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}
```

### Loading Spinner

```typescript
<motion.div
  className="w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full"
  animate={{ rotate: 360 }}
  transition={{
    duration: 1,
    repeat: Infinity,
    ease: "linear"
  }}
/>
```

---

## 🎬 Animation Utilities

### Create Animation Variants File

```typescript
// lib/animations.ts

export const animations = {
  // Fade
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },

  // Slide
  slideUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  slideDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  },
  slideLeft: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  },
  slideRight: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  },

  // Scale
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  },

  // Containers
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }
}

export const transitions = {
  fast: {
    duration: 0.15,
    ease: [0.25, 0.46, 0.45, 0.94]
  },
  normal: {
    duration: 0.3,
    ease: [0.25, 0.46, 0.45, 0.94]
  },
  slow: {
    duration: 0.5,
    ease: [0.25, 0.46, 0.45, 0.94]
  }
}
```

---

## 🔧 Performance Tips

### 1. Use `transform` and `opacity`

```typescript
// ✅ Good - GPU accelerated
<motion.div animate={{ x: 100, opacity: 0.5 }} />

// ❌ Bad - Triggers layout recalc
<motion.div animate={{ marginLeft: 100 }} />
```

### 2. Use `layout` for Auto-Animations

```typescript
// Automatically animates layout changes
<motion.div layout>
  {items.map(item => (
    <motion.div key={item.id} layout>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

### 3. Respect `prefers-reduced-motion`

```typescript
import { useReducedMotion } from 'framer-motion'

export function AnimatedComponent() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      animate={shouldReduceMotion ? { opacity: 1 } : fadeInUp.visible}
    >
      Content
    </motion.div>
  )
}
```

---

## 📚 Complete Example

### Animated Landing Section

```tsx
'use client'

import { motion } from 'framer-motion'
import { animations, transitions } from '@/lib/animations'

export function AnimatedSection() {
  return (
    <motion.section
      variants={animations.staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h2
        variants={animations.slideUp}
        transition={transitions.normal}
        className="text-5xl font-bold mb-6"
      >
        Heading
      </motion.h2>

      <motion.p
        variants={animations.slideUp}
        transition={transitions.normal}
        className="text-xl text-gray-600 mb-8"
      >
        Description text
      </motion.p>

      <motion.div
        variants={animations.slideUp}
        transition={transitions.normal}
      >
        <Button>Call to Action</Button>
      </motion.div>
    </motion.section>
  )
}
```

---

**Created:** 2025-11-26
**Version:** 1.0.0
