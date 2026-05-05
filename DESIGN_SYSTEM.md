# Design System Reference Guide

**Version:** 1.0  
**Status:** Production Ready  
**Last Updated:** May 4, 2026

---

## Overview

This design system provides a cohesive, accessible, and maintainable foundation for the Pranav Santhosh portfolio. It follows **shadcn/ui composition patterns**, **Radix UI accessibility standards**, and modern React best practices.

---

## Design Tokens

### Color System

#### Primary Palette
```css
--color-accent-primary: #AFCBFF      /* Main CTA, highlights */
--color-accent-secondary: #8FB4FF    /* Hover state, secondary */
--color-accent-tertiary: #C7DDFF     /* Light accents */
```

#### Text Colors
```css
--color-text-primary: #ffffff        /* Main text (100% opacity) */
--color-text-secondary: #a0a0a0      /* Secondary text (62.5% brightness) */
--color-text-tertiary: #707070       /* Tertiary text (43.75% brightness) */
```

#### Background Colors
```css
--color-bg-primary: #000000          /* Page background */
--color-bg-secondary: #0a0a0a        /* Card background */
--color-bg-tertiary: #111111         /* Nested backgrounds */
```

#### Glass Effect (Frosted Glass UI)
```css
--color-glass-bg: rgba(175, 203, 255, 0.05)        /* Base 5% opacity */
--color-glass-border: rgba(175, 203, 255, 0.12)    /* Border 12% opacity */
--color-glass-hover: rgba(175, 203, 255, 0.08)     /* Hover 8% opacity */
```

#### Shadow System
```css
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.4)          /* Subtle */
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.5)         /* Medium */
--shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.6)         /* Large */
--shadow-xl: 0 16px 48px rgba(0, 0, 0, 0.7)        /* Extra Large */
```

### Typography System

#### Font Family
```css
--font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
```

#### Font Sizes (Modular Scale)
```css
--font-size-xs: 0.75rem      /* 12px */
--font-size-sm: 0.875rem     /* 14px */
--font-size-base: 1rem       /* 16px */
--font-size-lg: 1.125rem     /* 18px */
--font-size-xl: 1.25rem      /* 20px */
--font-size-2xl: 1.5rem      /* 24px */
--font-size-3xl: 1.875rem    /* 30px */
--font-size-4xl: 2.25rem     /* 36px */
--font-size-5xl: 3rem        /* 48px */
--font-size-6xl: 3.75rem     /* 60px */
```

#### Font Weights
```css
--font-weight-light: 300
--font-weight-normal: 400
--font-weight-medium: 500
--font-weight-semibold: 600
--font-weight-bold: 700
--font-weight-extrabold: 800
```

#### Line Heights
```css
--line-height-tight: 1.2       /* Headings */
--line-height-normal: 1.5      /* Body text */
--line-height-relaxed: 1.75    /* Loose reading */
```

**Usage:**
```css
h1 {
  font-size: var(--font-size-6xl);
  font-weight: var(--font-weight-extrabold);
  line-height: var(--line-height-tight);
}

body {
  font-size: var(--font-size-base);
  line-height: var(--line-height-normal);
  color: var(--color-text-primary);
}
```

### Spacing Scale (8px Base)

```css
--spacing-1: 0.25rem    /* 4px   */
--spacing-2: 0.5rem     /* 8px   */
--spacing-3: 0.75rem    /* 12px  */
--spacing-4: 1rem       /* 16px  */
--spacing-5: 1.25rem    /* 20px  */
--spacing-6: 1.5rem     /* 24px  */
--spacing-8: 2rem       /* 32px  */
--spacing-10: 2.5rem    /* 40px  */
--spacing-12: 3rem      /* 48px  */
--spacing-16: 4rem      /* 64px  */
--spacing-20: 5rem      /* 80px  */
--spacing-24: 6rem      /* 96px  */
--spacing-32: 8rem      /* 128px */
```

**Usage in Components:**
```css
.button {
  padding: var(--spacing-3) var(--spacing-6);    /* 12px 24px */
  margin-bottom: var(--spacing-4);               /* 16px */
}

.card {
  padding: var(--spacing-6);                     /* 24px */
}

.section {
  padding: var(--spacing-16) var(--spacing-6);   /* 64px 24px */
}
```

### Border Radius System

```css
--radius-sm: 0.25rem    /* 4px   */
--radius-md: 0.5rem     /* 8px   */
--radius-lg: 0.75rem    /* 12px  */
--radius-xl: 1rem       /* 16px  */
--radius-2xl: 1.5rem    /* 24px  */
--radius-full: 9999px   /* Fully rounded */
```

**Usage:**
```css
.button {
  border-radius: var(--radius-lg);
}

.card {
  border-radius: var(--radius-xl);
}

.modal {
  border-radius: var(--radius-2xl);
}

.badge {
  border-radius: var(--radius-full);
}
```

### Motion & Transitions

```css
--transition-fast: 150ms ease-in-out      /* Quick interactions */
--transition-base: 200ms ease-in-out      /* Standard motion */
--transition-slow: 300ms ease-in-out      /* Deliberate animations */
```

**Framer Motion Equivalents:**
```js
// Fast (responsive feel)
transition={{ duration: 0.15, ease: 'easeOut' }}

// Base (standard)
transition={{ duration: 0.2, ease: 'easeOut' }}

// Slow (deliberate)
transition={{ duration: 0.3, ease: 'easeOut' }}
```

---

## Component API

### Button Component

**Props:**
```tsx
interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';      // Default: 'primary'
  size?: 'small' | 'medium' | 'large';               // Default: 'medium'
  href?: string;                                      // Creates Link if provided
  onClick?: (event) => void;
  disabled?: boolean;
  className?: string;                                 // Additional classes
}
```

**Variants:**
```jsx
// Primary CTA
<Button variant="primary">Get Started</Button>

// Secondary outline
<Button variant="secondary">Learn More</Button>

// Ghost (minimal)
<Button variant="ghost">Cancel</Button>

// Sizes
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>

// With navigation
<Button href="/about">Go to About</Button>

// Disabled state
<Button disabled>Disabled</Button>
```

**Styling:**
```css
.btn {
  /* All buttons have focus-visible outline */
  outline: 2px solid var(--color-accent-primary);
  outline-offset: 2px;
}

.btn--primary:hover {
  transform: scale(1.02) translateY(-2px);
  box-shadow: var(--shadow-md);
}
```

### Card Component

**Props:**
```tsx
interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'glass' | 'outlined' | 'filled';  // Default: 'default'
  hover?: boolean;                                          // Default: true
  className?: string;
}
```

**Slot Pattern:**
```jsx
<Card>
  <Card.Header>
    <h3>Header Title</h3>
  </Card.Header>
  
  <Card.Content>
    {/* Main content goes here */}
  </Card.Content>
  
  <Card.Footer>
    <Button>Action</Button>
  </Card.Footer>
</Card>
```

**Variants:**
```jsx
<Card>Default (glass)</Card>
<Card variant="glass">Explicit glass</Card>
<Card variant="outlined">Outlined only</Card>
<Card variant="filled">Filled background</Card>
<Card hover={false}>No hover effect</Card>
```

**Styling:**
```css
.card {
  padding: var(--spacing-6);
  border-radius: var(--radius-xl);
  background: var(--color-glass-bg);
  transition: all var(--transition-base);
}

.card--hoverable:hover {
  background: var(--color-glass-hover);
  border-color: var(--color-accent-primary);
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}
```

### Dialog Component

**Props:**
```tsx
interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  closeOnEsc?: boolean;                    // Default: true
  closeOnBackdropClick?: boolean;          // Default: true
}
```

**Usage:**
```jsx
const [isOpen, setIsOpen] = useState(false);

<Dialog
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
>
  <div>Modal content</div>
  <Dialog.Close onClick={() => setIsOpen(false)} />
</Dialog>
```

### Tabs Component

**Props:**
```tsx
interface TabsProps {
  tabs: Array<{
    value: string;
    label: string;
    content: ReactNode;
  }>;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}
```

**Usage:**
```jsx
<Tabs
  tabs={[
    { value: 'tab1', label: 'Tab 1', content: <div>Content 1</div> },
    { value: 'tab2', label: 'Tab 2', content: <div>Content 2</div> },
  ]}
  defaultValue="tab1"
  onValueChange={(value) => console.log(value)}
/>
```

---

## Utility Classes

### `cn()` - Class Name Merger

```js
import { cn } from '../../utils/cn';

// Merge classes with conflicts resolved
const buttonClass = cn(
  'btn',                    // Base
  'btn--primary',          // Variant
  isActive && 'btn--active', // Conditional
  customClass              // Override
);

// In JSX
<button className={cn('btn', variant === 'primary' && 'btn--primary')}>
  Click me
</button>
```

---

## Best Practices

### 1. Always Use Design Tokens

❌ **Don't:**
```css
button {
  padding: 12px 24px;
  background: #AFCBFF;
  border-radius: 8px;
}
```

✅ **Do:**
```css
button {
  padding: var(--spacing-3) var(--spacing-6);
  background: var(--color-accent-primary);
  border-radius: var(--radius-lg);
}
```

### 2. Compose Over Inheritance

❌ **Don't:**
```jsx
<div className="card-with-header-and-footer">
  ...
</div>
```

✅ **Do:**
```jsx
<Card>
  <Card.Header>...</Card.Header>
  <Card.Content>...</Card.Content>
  <Card.Footer>...</Card.Footer>
</Card>
```

### 3. Keep Component Size Reasonable

**Target:** 100-200 lines per component

If exceeding 200 lines:
- Extract sub-components
- Move logic to hooks
- Split styles to separate file

### 4. Use Semantic HTML

✅ **Correct:**
```jsx
<button onClick={handleClick}>Action</button>
<a href="/page">Link</a>
<h1>Page Title</h1>
```

❌ **Incorrect:**
```jsx
<div onClick={handleClick}>Action</div>
<div onClick={goToPage}>Link</div>
<div style={{ fontSize: '48px', fontWeight: 'bold' }}>Page Title</div>
```

### 5. Implement Accessibility Features

Every interactive element needs:
- ✅ Visible focus state
- ✅ Keyboard navigation
- ✅ ARIA attributes (role, aria-label, aria-selected, etc.)
- ✅ Semantic HTML

### 6. Animation Timing

Use these consistent durations:
- **0.15s** - Quick feedback (hover, press)
- **0.2s** - Standard interaction
- **0.3s** - Deliberate animation

```js
// ✅ Good
whileHover={{ scale: 1.02 }}
transition={{ duration: 0.2, ease: 'easeOut' }}

// ❌ Avoid
whileHover={{ scale: 1.2 }}
transition={{ duration: 1 }}
```

### 7. Spacing Consistency

**Section spacing:** Minimum `py-16` (64px)
**Card padding:** `p-6` (24px)
**Gap between items:** `gap-6` or `gap-8`

### 8. Color Contrast Compliance

All text must meet WCAG AA standards:
- **Normal text:** 4.5:1 ratio
- **Large text (18px+):** 3:1 ratio
- **Interactive elements:** 3:1 ratio

---

## Responsive Design

### Breakpoints (Tailwind-aligned)

```css
/* Mobile-first approach */
/* Base: <640px */

@media (min-width: 640px) {
  /* Tablet: 640px - 1024px */
}

@media (min-width: 1024px) {
  /* Desktop: 1024px+ */
}
```

**Common Pattern:**
```css
.component {
  /* Mobile default */
  font-size: var(--font-size-base);
  padding: var(--spacing-4);
}

@media (min-width: 768px) {
  /* Tablet */
  font-size: var(--font-size-lg);
  padding: var(--spacing-6);
}

@media (min-width: 1024px) {
  /* Desktop */
  font-size: var(--font-size-xl);
  padding: var(--spacing-8);
}
```

---

## Performance Optimization

### Code Splitting

```jsx
import { lazy, Suspense } from 'react';

const Gallery = lazy(() => import('./Gallery/Gallery'));

export default function App() {
  return (
    <Suspense fallback={<Skeleton />}>
      <Gallery />
    </Suspense>
  );
}
```

### Memoization

```jsx
import { useMemo } from 'react';

const MyComponent = ({ items }) => {
  // Only recalculate when items changes
  const filtered = useMemo(
    () => items.filter(item => item.active),
    [items]
  );

  return <div>{filtered.map(...)}</div>;
};
```

### Image Optimization

```jsx
<img
  src={image.src}
  alt={image.title}
  loading="lazy"
  decoding="async"
/>
```

---

## Testing Components

### Accessibility Testing

```bash
# Using axe DevTools
1. Install axe DevTools browser extension
2. Open DevTools > Accessibility
3. Scan page
4. Check for issues

# Keyboard navigation
1. Disable mouse
2. Tab through all interactive elements
3. Verify focus is visible
4. Test arrow keys in components like tabs/carousel
```

### Visual Regression

```bash
# Using Percy
1. Install @percy/cli
2. Run: percy snapshot
3. Review visual changes
```

---

## Troubleshooting

### Focus Indicators Not Visible

**Issue:** Can't see focus outline  
**Solution:** Check `outline-offset` CSS:

```css
.interactive-element:focus-visible {
  outline: 2px solid var(--color-accent-primary);
  outline-offset: 2px; /* ← Important for visibility */
}
```

### Hover Effects Too Slow

**Issue:** Animations feel sluggish  
**Solution:** Reduce transition duration:

```css
/* Change from */
transition: all var(--transition-slow);  /* 300ms */

/* To */
transition: all var(--transition-base);  /* 200ms */
```

### Color Contrast Failing

**Issue:** Text hard to read on background  
**Solution:** Increase contrast ratio:

```css
/* Change text color to lighter or darker */
color: var(--color-text-primary);  /* Usually sufficient */

/* Or use different background */
background: var(--color-bg-secondary);
```

---

## Resources

- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Web Accessibility](https://www.w3.org/WAI/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Design System v1.0**  
Status: ✅ Production Ready  
Last Updated: May 4, 2026
