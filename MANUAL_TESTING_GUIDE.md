# Manual Responsive Testing Guide

## Quick Start

To test the responsive design manually, follow these steps:

### 1. Start the Development Server

```bash
cd personal-portfolio
npm run dev
```

**Note:** Requires Node.js 20.19+ or 22.12+

### 2. Open Browser DevTools

1. Open the site in Chrome/Firefox/Edge
2. Press `F12` or `Cmd+Option+I` (Mac) / `Ctrl+Shift+I` (Windows/Linux)
3. Click the device toolbar icon or press `Cmd+Shift+M` (Mac) / `Ctrl+Shift+M` (Windows/Linux)

---

## Testing Checklist by Breakpoint

### Mobile - 320px Width

**How to test:**
1. In DevTools, select "Responsive" mode
2. Set width to `320px`
3. Scroll through entire page

**What to verify:**

✅ **Navigation**
- Hamburger menu icon visible in top right
- Site name/logo visible on left
- Full navigation menu hidden
- Click hamburger → menu slides in from side
- Menu items stack vertically
- Click menu item → smooth scroll to section
- Click hamburger again → menu closes

✅ **Profile Section**
- Profile photo: 128px × 128px (small circle)
- Name: Readable, doesn't overflow
- Title: Wraps to multiple lines if needed
- Bio: Readable with adequate padding
- All content centered
- No horizontal scrolling

✅ **Work Experience**
- Cards stack vertically (one per row)
- Each card has full width
- Company name in cyan color
- Position and date visible
- Bullet points align correctly
- Tap card → subtle scale effect

✅ **Education**
- Cards stack vertically
- Same styling as work experience
- All text readable

✅ **Contact**
- Email and social links stack vertically
- Icons visible and appropriately sized
- Links are tappable (44px minimum)

---

### Mobile - 375px Width (iPhone SE, iPhone 12/13 mini)

**How to test:**
1. Set DevTools width to `375px`
2. Or select "iPhone SE" from device dropdown

**What to verify:**
- All 320px tests still pass
- Content has more breathing room
- No awkward gaps or spacing issues

---

### Mobile - 414px Width (iPhone 12/13 Pro Max)

**How to test:**
1. Set DevTools width to `414px`
2. Or select "iPhone 12 Pro" from device dropdown

**What to verify:**
- All previous tests still pass
- Layout utilizes additional width effectively
- Text doesn't look too small or cramped

---

### Tablet - 768px Width (iPad Mini, md breakpoint)

**How to test:**
1. Set DevTools width to `768px`
2. Or select "iPad Mini" from device dropdown

**What to verify:**

✅ **Navigation**
- Hamburger menu HIDDEN
- Full navigation menu VISIBLE horizontally
- Navigation links spread across top bar
- Smooth scroll still works

✅ **Profile Section**
- Profile photo: 192px × 192px (larger)
- Name: Larger text (48px)
- Title: Larger text (30px)
- Bio: Larger text (20px)
- More spacing around elements

✅ **Work Experience**
- Cards display in 2-column grid
- Equal width columns
- Gap between cards
- Hover effects work (scale + shadow)

✅ **Education**
- Cards display in 2-column grid
- Consistent with work experience

✅ **Contact**
- Links may display horizontally
- More spacing

---

### Tablet - 1024px Width (iPad Pro, lg breakpoint)

**How to test:**
1. Set DevTools width to `1024px`
2. Or select "iPad Pro" from device dropdown

**What to verify:**
- Content container has max-width (doesn't stretch full width)
- Content centered with margins on sides
- Increased padding in sections
- All hover effects smooth

---

### Desktop - 1280px Width (Laptop, xl breakpoint)

**How to test:**
1. Set DevTools width to `1280px`
2. Or use full browser window on laptop

**What to verify:**
- Content centered with max-width constraint
- Background extends to edges
- Adequate white space on sides
- All interactive elements have visible hover states
- Focus indicators visible when tabbing through

---

### Desktop - 1920px Width (Full HD Monitor)

**How to test:**
1. Set DevTools width to `1920px`
2. Or use full browser window on external monitor

**What to verify:**
- Content remains centered
- Max-width prevents content from stretching too wide
- No awkward gaps or spacing
- Typography remains readable
- Line lengths not too long

---

## Cross-Breakpoint Tests

### Test 1: Navigation Menu Transition

**Steps:**
1. Start at 320px width
2. Verify hamburger menu works
3. Slowly increase width to 768px
4. At 768px, hamburger should disappear and full menu appear
5. Decrease width back to 767px
6. Hamburger should reappear

**Expected:** Clean transition, no broken states

---

### Test 2: Grid Layout Transition

**Steps:**
1. Start at 320px width
2. Verify work experience cards stack vertically
3. Increase width to 768px
4. Cards should rearrange into 2-column grid
5. Verify no layout shift or broken cards

**Expected:** Smooth transition from 1 to 2 columns

---

### Test 3: Typography Scaling

**Steps:**
1. Start at 320px
2. Note the size of the name in profile section
3. Increase to 640px (sm breakpoint)
4. Name should get slightly larger
5. Increase to 768px (md breakpoint)
6. Name should get larger again

**Expected:** Text scales up smoothly at each breakpoint

---

### Test 4: No Horizontal Scroll

**Steps:**
1. Test at each breakpoint: 320px, 375px, 414px, 768px, 1024px, 1280px, 1920px
2. Scroll vertically through entire page
3. Try to scroll horizontally

**Expected:** No horizontal scrollbar at any width

---

### Test 5: Touch vs Mouse Interactions

**Mobile (320px-767px):**
- Tap cards → should see visual feedback
- Tap links → should navigate/open

**Desktop (768px+):**
- Hover over cards → should see scale + shadow effect
- Hover over links → should see color change
- Click links → should navigate/open

---

## Accessibility Testing

### Keyboard Navigation Test

**Steps:**
1. Set width to 1280px
2. Click in address bar, then press `Tab`
3. Continue pressing `Tab` to move through page
4. Verify focus indicators visible on:
   - Navigation links
   - Hamburger menu (on mobile)
   - Email link
   - Social media links
5. Press `Enter` on focused link
6. Should navigate to section or open link

**Expected:** Clear focus indicators, logical tab order

---

### Screen Reader Test (Optional)

**macOS:**
1. Enable VoiceOver: `Cmd+F5`
2. Navigate through page with `Ctrl+Option+Arrow keys`
3. Verify all content is announced
4. Verify headings are properly identified

**Windows:**
1. Enable Narrator: `Win+Ctrl+Enter`
2. Navigate through page
3. Verify all content is announced

---

### Color Contrast Test

**Steps:**
1. Open DevTools
2. Go to Lighthouse tab
3. Run accessibility audit
4. Check for color contrast issues

**Expected:** All text meets WCAG AA standards (4.5:1 for normal text)

---

## Performance Testing

### Load Time Test

**Steps:**
1. Open DevTools Network tab
2. Refresh page
3. Check "DOMContentLoaded" time
4. Check "Load" time

**Expected:**
- DOMContentLoaded: < 1 second
- Load: < 3 seconds

---

### Animation Performance Test

**Steps:**
1. Open DevTools Performance tab
2. Start recording
3. Scroll through page
4. Hover over cards
5. Stop recording
6. Check for frame drops (should be 60fps)

**Expected:** Smooth animations, no jank

---

## Browser Compatibility

Test on multiple browsers:

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

**What to verify:**
- Layout consistent across browsers
- Animations work smoothly
- Colors render correctly
- Fonts load properly

---

## Device Testing (Recommended)

If possible, test on actual devices:

**Mobile:**
- iPhone (any model)
- Android phone (any model)

**Tablet:**
- iPad (any model)
- Android tablet

**What to verify:**
- Touch interactions work
- Scrolling is smooth
- Text is readable
- Images load correctly
- No performance issues

---

## Common Issues to Watch For

### ❌ Horizontal Scrolling
- Usually caused by element wider than viewport
- Check for fixed widths or missing responsive classes

### ❌ Overlapping Content
- Usually caused by absolute positioning without responsive adjustments
- Check z-index and positioning at different breakpoints

### ❌ Tiny Text on Mobile
- Ensure minimum font size of 16px for body text
- Use responsive text classes (text-base sm:text-lg md:text-xl)

### ❌ Huge Gaps on Desktop
- Ensure max-width constraints on containers
- Use max-w-6xl or similar to prevent content stretching

### ❌ Broken Navigation
- Test hamburger menu thoroughly
- Ensure smooth scroll works at all breakpoints
- Check z-index for mobile menu overlay

---

## Testing Complete!

Once you've verified all items in this guide, the responsive design testing is complete.

**Final Checklist:**
- ✅ All mobile breakpoints tested (320px, 375px, 414px)
- ✅ All tablet breakpoints tested (768px, 1024px)
- ✅ All desktop breakpoints tested (1280px, 1920px)
- ✅ Navigation menu works at all breakpoints
- ✅ No horizontal scrolling at any width
- ✅ Typography scales appropriately
- ✅ Images responsive
- ✅ Hover effects work on desktop
- ✅ Touch interactions work on mobile
- ✅ Keyboard navigation functional
- ✅ Accessibility standards met
- ✅ Performance acceptable

**Status:** ✅ READY FOR PRODUCTION
