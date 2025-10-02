# Tailwind CSS Breakpoint Reference

## Quick Reference

| Breakpoint | Min Width | Device Type | Tailwind Prefix |
|------------|-----------|-------------|-----------------|
| Default    | 0px       | Mobile      | (none)          |
| sm         | 640px     | Mobile L    | `sm:`           |
| md         | 768px     | Tablet      | `md:`           |
| lg         | 1024px    | Desktop     | `lg:`           |
| xl         | 1280px    | Desktop L   | `xl:`           |
| 2xl        | 1536px    | Desktop XL  | `2xl:`          |

---

## Implementation in This Project

### Navigation Component

```jsx
// Mobile: Hamburger menu
<button className="md:hidden">☰</button>

// Desktop: Full menu
<nav className="hidden md:flex">
  <a href="#profile">Profile</a>
  <a href="#experience">Experience</a>
  // ...
</nav>
```

**Behavior:**
- 0-767px: Hamburger menu visible, nav links hidden
- 768px+: Hamburger hidden, nav links visible

---

### Profile Component

#### Profile Photo Sizing

```jsx
<img className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48" />
```

**Sizes:**
- 0-639px: 128px × 128px (`w-32 h-32`)
- 640-767px: 160px × 160px (`sm:w-40 sm:h-40`)
- 768px+: 192px × 192px (`md:w-48 md:h-48`)

#### Typography Scaling

```jsx
// Name
<h1 className="text-3xl sm:text-4xl md:text-5xl">

// Title
<p className="text-xl sm:text-2xl md:text-3xl">

// Bio
<p className="text-base sm:text-lg md:text-xl">
```

**Font Sizes:**

| Element | Mobile (0px) | Tablet (640px) | Desktop (768px) |
|---------|--------------|----------------|-----------------|
| Name    | 30px         | 36px           | 48px            |
| Title   | 20px         | 24px           | 30px            |
| Bio     | 16px         | 18px           | 20px            |

---

### Work Experience & Education Components

#### Grid Layout

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
```

**Layout:**
- 0-767px: 1 column (cards stack vertically)
- 768px+: 2 columns (cards side by side)

#### Section Padding

```jsx
<section className="py-16 md:py-24">
```

**Padding:**
- 0-767px: 64px vertical padding (`py-16`)
- 768px+: 96px vertical padding (`md:py-24`)

---

### Container Spacing

```jsx
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
```

**Horizontal Padding:**
- 0-639px: 16px (`px-4`)
- 640-1023px: 24px (`sm:px-6`)
- 1024px+: 32px (`lg:px-8`)

**Max Width:**
- All breakpoints: 1152px (`max-w-6xl`)
- Content centered with `mx-auto`

---

## Testing Breakpoints

### Critical Widths to Test

1. **320px** - iPhone SE (smallest common mobile)
2. **375px** - iPhone 12/13 mini
3. **414px** - iPhone 12/13 Pro Max
4. **640px** - sm breakpoint (mobile landscape)
5. **768px** - md breakpoint (tablet portrait)
6. **1024px** - lg breakpoint (tablet landscape/small laptop)
7. **1280px** - xl breakpoint (laptop)
8. **1920px** - Full HD desktop

### Transition Points

Watch for layout changes at these exact widths:

- **639px → 640px**: sm breakpoint activates
- **767px → 768px**: md breakpoint activates (major layout change)
- **1023px → 1024px**: lg breakpoint activates
- **1279px → 1280px**: xl breakpoint activates

---

## Common Responsive Patterns Used

### 1. Hide/Show Elements

```jsx
// Hide on mobile, show on desktop
className="hidden md:block"

// Show on mobile, hide on desktop
className="block md:hidden"
```

### 2. Responsive Flexbox

```jsx
// Stack on mobile, row on desktop
className="flex flex-col md:flex-row"
```

### 3. Responsive Grid

```jsx
// 1 column mobile, 2 columns tablet, 3 columns desktop
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

### 4. Responsive Spacing

```jsx
// Smaller spacing on mobile, larger on desktop
className="p-4 md:p-6 lg:p-8"
className="space-y-4 md:space-y-6"
```

### 5. Responsive Text

```jsx
// Smaller text on mobile, larger on desktop
className="text-sm md:text-base lg:text-lg"
```

---

## Mobile-First Approach

Tailwind uses a mobile-first approach:

```jsx
// ✅ Correct: Base styles for mobile, then override for larger screens
className="text-sm md:text-base lg:text-lg"

// ❌ Wrong: Don't use max-width breakpoints
// Tailwind doesn't support max-width by default
```

**How it works:**
1. Base classes apply to all screen sizes
2. Prefixed classes (sm:, md:, lg:) apply at that breakpoint and above
3. Later breakpoints override earlier ones

**Example:**
```jsx
className="text-sm md:text-base lg:text-lg"
```
- 0-767px: `text-sm` (14px)
- 768-1023px: `text-base` (16px) - overrides text-sm
- 1024px+: `text-lg` (18px) - overrides text-base

---

## Debugging Tips

### Check Applied Classes

1. Open DevTools
2. Inspect element
3. Look at "Computed" tab
4. See which Tailwind classes are active

### Test Breakpoint Transitions

1. Open DevTools responsive mode
2. Slowly drag width slider
3. Watch for layout changes at breakpoints
4. Verify smooth transitions

### Common Issues

**Issue:** Layout breaks at specific width
- **Solution:** Check if you're missing a responsive class at that breakpoint

**Issue:** Element too wide on mobile
- **Solution:** Add `max-w-full` or use responsive width classes

**Issue:** Text too small on mobile
- **Solution:** Ensure base text size is at least `text-base` (16px)

---

## Verification Checklist

Use this checklist when implementing responsive features:

- [ ] Base styles work on mobile (320px)
- [ ] sm: classes activate at 640px
- [ ] md: classes activate at 768px
- [ ] lg: classes activate at 1024px
- [ ] xl: classes activate at 1280px
- [ ] No horizontal scrolling at any width
- [ ] Touch targets at least 44px on mobile
- [ ] Text readable at all sizes
- [ ] Images scale appropriately
- [ ] Spacing looks good at all breakpoints

---

## Resources

- [Tailwind CSS Responsive Design Docs](https://tailwindcss.com/docs/responsive-design)
- [Tailwind CSS Breakpoint Customization](https://tailwindcss.com/docs/breakpoints)
- [Chrome DevTools Device Mode](https://developer.chrome.com/docs/devtools/device-mode/)

---

**Last Updated:** 2025/10/2
