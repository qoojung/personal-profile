# Testing and Verification Guide

This guide covers testing procedures for the GitHub Pages deployment, including site functionality verification, performance audits, failure scenario testing, and workflow optimization.

## Table of Contents

1. [Site Functionality Verification](#site-functionality-verification)
2. [Performance Audit](#performance-audit)
3. [Deployment Failure Scenarios](#deployment-failure-scenarios)
4. [Deployment History and Rollback](#deployment-history-and-rollback)
5. [Workflow Performance Optimization](#workflow-performance-optimization)

---

## Site Functionality Verification

### Overview

After deployment, verify that all site features work correctly on the live GitHub Pages URL.

### Test Environment

- **Live URL**: `https://qoojung.github.io/personal-profile/`
- **Test Browsers**: Chrome, Firefox, Safari, Edge
- **Test Devices**: Desktop, Tablet, Mobile

### Navigation Testing

#### Test All Navigation Links

1. Open the live site: `https://qoojung.github.io/personal-profile/`
2. Click each navigation link in the header
3. Verify smooth scrolling to the correct section
4. Check that the active section is highlighted in navigation

**Expected Results**:
- All navigation links scroll to correct sections
- Smooth scrolling animation works
- Active section indicator updates correctly
- No console errors

#### Test Section Visibility

Verify each section is visible and properly formatted:

- [ ] Hero/Header section
- [ ] About section
- [ ] Skills section
- [ ] Work Experience section
- [ ] Projects section
- [ ] Contact section

### Image and Asset Testing

#### Profile Photo

- [ ] Profile photo loads correctly
- [ ] Image is properly sized and positioned
- [ ] Image is optimized (check file size)
- [ ] No broken image icon

#### Icons and Graphics

- [ ] All icons display correctly
- [ ] SVG icons render properly
- [ ] Favicon appears in browser tab
- [ ] No 404 errors for any images

#### Asset Path Verification

Open browser DevTools (F12) → Network tab:

- [ ] All assets load from `/personal-profile/` path
- [ ] No 404 errors in Network tab
- [ ] All CSS files load successfully
- [ ] All JS files load successfully

### External Links Testing

#### LinkedIn Link

- [ ] Click LinkedIn link
- [ ] Verify it opens in new tab
- [ ] Verify correct LinkedIn profile URL
- [ ] Check `target="_blank"` and `rel="noopener noreferrer"`

#### Email Link

- [ ] Click email link
- [ ] Verify email client opens
- [ ] Verify correct email address
- [ ] Check `mailto:` protocol works

#### Other External Links

Test any additional external links:
- [ ] GitHub profile link (if present)
- [ ] Portfolio project links
- [ ] Social media links
- [ ] Resume/CV download link (if present)

### Responsive Design Testing

#### Desktop (1920x1080)

- [ ] Layout is properly centered
- [ ] All sections are visible
- [ ] Navigation is horizontal
- [ ] Images are properly sized
- [ ] Text is readable

#### Laptop (1366x768)

- [ ] Layout adapts correctly
- [ ] No horizontal scrolling
- [ ] All content is accessible
- [ ] Navigation works correctly

#### Tablet (768x1024)

- [ ] Layout switches to tablet view
- [ ] Navigation may collapse to hamburger menu
- [ ] Images scale appropriately
- [ ] Touch targets are large enough

#### Mobile (375x667)

- [ ] Layout is single column
- [ ] Navigation is hamburger menu
- [ ] All sections stack vertically
- [ ] Text is readable without zooming
- [ ] No horizontal scrolling
- [ ] Touch targets are at least 44x44px

### Browser Console Testing

Open DevTools Console (F12) on each browser:

#### Chrome/Edge

```
1. Open DevTools (F12)
2. Go to Console tab
3. Reload page
4. Check for errors
```

**Expected**: No errors, only info messages (if any)

#### Firefox

```
1. Open Web Console (F12)
2. Reload page
3. Check for errors
```

**Expected**: No errors or warnings

#### Safari

```
1. Open Web Inspector (Cmd+Option+I)
2. Go to Console tab
3. Reload page
4. Check for errors
```

**Expected**: No errors or warnings

### Smooth Scrolling Testing

1. Click each navigation link
2. Observe scrolling behavior
3. Verify smooth animation
4. Check scroll speed is appropriate

**Expected**:
- Smooth scroll animation (not instant jump)
- Appropriate scroll speed
- Correct target section reached
- No scroll jank or stuttering

### Test Results Template

```markdown
## Site Functionality Test Results

**Test Date**: _______________
**Tester**: _______________
**Deployment URL**: https://qoojung.github.io/personal-profile/

### Navigation
- [ ] All links work
- [ ] Smooth scrolling works
- [ ] Active section highlighting works

### Images
- [ ] Profile photo loads
- [ ] All icons display
- [ ] Favicon shows

### External Links
- [ ] LinkedIn link works
- [ ] Email link works
- [ ] All links open correctly

### Responsive Design
- [ ] Desktop view works
- [ ] Tablet view works
- [ ] Mobile view works

### Browser Compatibility
- [ ] Chrome: Pass/Fail
- [ ] Firefox: Pass/Fail
- [ ] Safari: Pass/Fail
- [ ] Edge: Pass/Fail

**Issues Found**: _______________
**Overall Status**: Pass/Fail
```

---

## Performance Audit

### Overview

Run performance audits to ensure the site loads quickly and efficiently.

### Lighthouse Audit

#### Running Lighthouse in Chrome

1. Open site: `https://qoojung.github.io/personal-profile/`
2. Open DevTools (F12)
3. Go to "Lighthouse" tab
4. Select categories:
   - ✅ Performance
   - ✅ Accessibility
   - ✅ Best Practices
   - ✅ SEO
5. Select "Desktop" or "Mobile"
6. Click "Analyze page load"
7. Wait for audit to complete

#### Target Scores

**Minimum Acceptable Scores**:
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

**Ideal Scores**:
- Performance: 95-100
- Accessibility: 95-100
- Best Practices: 95-100
- SEO: 95-100

### Performance Metrics

#### Core Web Vitals

**First Contentful Paint (FCP)**:
- Target: < 1.5s
- Good: < 1.8s
- Needs Improvement: 1.8s - 3.0s
- Poor: > 3.0s

**Largest Contentful Paint (LCP)**:
- Target: < 2.5s
- Good: < 2.5s
- Needs Improvement: 2.5s - 4.0s
- Poor: > 4.0s

**Time to Interactive (TTI)**:
- Target: < 3.5s
- Good: < 3.8s
- Needs Improvement: 3.8s - 7.3s
- Poor: > 7.3s

**Total Blocking Time (TBT)**:
- Target: < 200ms
- Good: < 300ms
- Needs Improvement: 300ms - 600ms
- Poor: > 600ms

**Cumulative Layout Shift (CLS)**:
- Target: < 0.1
- Good: < 0.1
- Needs Improvement: 0.1 - 0.25
- Poor: > 0.25

**Speed Index**:
- Target: < 3.4s
- Good: < 3.4s
- Needs Improvement: 3.4s - 5.8s
- Poor: > 5.8s

### Asset Optimization Verification

#### Check Bundle Sizes

Review build output from `npm run build`:

```
Expected output:
dist/index.html                   < 1 kB
dist/assets/index-[hash].css     < 40 kB
dist/assets/vendor-[hash].js     < 15 kB
dist/assets/index-[hash].js      < 250 kB (gzipped < 70 kB)
```

#### Image Optimization

Check that images are optimized:

- [ ] Profile photo is < 100 KB
- [ ] Icons are SVG or optimized PNG
- [ ] No unnecessarily large images
- [ ] Images use appropriate formats (WebP, JPEG, PNG)

#### Code Splitting

Verify code splitting is working:

- [ ] Vendor chunk is separate (React, React-DOM)
- [ ] Main bundle is separate
- [ ] CSS is code-split
- [ ] No single bundle > 500 KB

### Network Performance

#### Test with DevTools Network Tab

1. Open DevTools (F12)
2. Go to Network tab
3. Disable cache (checkbox)
4. Reload page (Cmd+R or Ctrl+R)
5. Review network waterfall

**Check**:
- [ ] Total page size < 500 KB
- [ ] Number of requests < 20
- [ ] No requests taking > 1s
- [ ] All assets load successfully (200 status)

#### Test with Throttling

Simulate slower connections:

**Fast 3G**:
1. Open DevTools → Network tab
2. Select "Fast 3G" from throttling dropdown
3. Reload page
4. Verify page loads in < 5s

**Slow 3G**:
1. Select "Slow 3G" from throttling dropdown
2. Reload page
3. Verify page is still usable (< 10s)

### Performance Audit Report Template

```markdown
## Performance Audit Report

**Audit Date**: _______________
**URL**: https://qoojung.github.io/personal-profile/
**Tool**: Lighthouse / Chrome DevTools

### Lighthouse Scores
- Performance: _____ / 100
- Accessibility: _____ / 100
- Best Practices: _____ / 100
- SEO: _____ / 100

### Core Web Vitals
- FCP: _____ s
- LCP: _____ s
- TTI: _____ s
- TBT: _____ ms
- CLS: _____
- Speed Index: _____ s

### Bundle Sizes
- Total Page Size: _____ KB
- JavaScript: _____ KB
- CSS: _____ KB
- Images: _____ KB

### Recommendations
1. _______________
2. _______________
3. _______________

**Overall Assessment**: Pass/Fail
```

---

## Deployment Failure Scenarios

### Overview

Test how the system handles various failure scenarios to ensure robustness.

### Test 1: Build Error (Syntax Error)

#### Purpose
Verify that syntax errors prevent deployment and provide clear error messages.

#### Steps

1. **Introduce a syntax error**:
   ```javascript
   // In src/App.jsx, add invalid syntax
   const App = () => {
     return (
       <div>
         <h1>Test</h1>
       // Missing closing tag
     )
   }
   ```

2. **Commit and push**:
   ```bash
   git add src/App.jsx
   git commit -m "Test: Introduce syntax error"
   git push origin main
   ```

3. **Monitor workflow**:
   - Go to Actions tab
   - Watch build job
   - Verify it fails at build step

4. **Verify behavior**:
   - [ ] Build job shows red X
   - [ ] Deploy job does not run
   - [ ] Error message is clear
   - [ ] Previous deployment remains live
   - [ ] Site is still accessible

5. **Fix and verify recovery**:
   ```bash
   # Fix the syntax error
   git add src/App.jsx
   git commit -m "Fix: Correct syntax error"
   git push origin main
   ```
   - [ ] New workflow runs successfully
   - [ ] Site updates with fix

#### Expected Results
- ✅ Build fails with clear error message
- ✅ Deployment does not occur
- ✅ Previous version remains live
- ✅ Recovery is straightforward

### Test 2: Missing Dependency

#### Purpose
Verify that missing dependencies are caught during build.

#### Steps

1. **Remove a dependency from package.json**:
   ```json
   // Remove "react" from dependencies
   ```

2. **Commit and push**:
   ```bash
   git add package.json
   git commit -m "Test: Remove dependency"
   git push origin main
   ```

3. **Monitor workflow**:
   - Verify build fails at install or build step
   - Check error message mentions missing dependency

4. **Fix**:
   ```bash
   # Restore dependency
   git add package.json
   git commit -m "Fix: Restore dependency"
   git push origin main
   ```

#### Expected Results
- ✅ Build fails with dependency error
- ✅ Error message is actionable
- ✅ Previous deployment remains live

### Test 3: Incorrect Base Path

#### Purpose
Verify that incorrect base path causes asset loading issues (not build failure).

#### Steps

1. **Change base path in vite.config.js**:
   ```javascript
   base: "/wrong-path/"
   ```

2. **Commit and push**:
   ```bash
   git add vite.config.js
   git commit -m "Test: Incorrect base path"
   git push origin main
   ```

3. **Monitor workflow**:
   - Build and deploy succeed
   - But site assets fail to load

4. **Verify site behavior**:
   - [ ] Site loads but assets 404
   - [ ] Console shows 404 errors
   - [ ] Layout is broken

5. **Fix**:
   ```bash
   # Restore correct base path
   base: "/personal-profile/"
   git add vite.config.js
   git commit -m "Fix: Correct base path"
   git push origin main
   ```

#### Expected Results
- ✅ Build succeeds (base path doesn't cause build error)
- ✅ Deployment succeeds
- ⚠️ Site loads but assets fail (404)
- ✅ Easy to diagnose from console errors

### Test 4: Large Bundle Size

#### Purpose
Verify build handles large bundles (warning but not failure).

#### Steps

1. **Add a large dependency**:
   ```bash
   npm install moment lodash
   ```

2. **Import in code**:
   ```javascript
   import moment from 'moment';
   import _ from 'lodash';
   ```

3. **Build and check**:
   - Build succeeds with warnings
   - Bundle size increases
   - Performance score may decrease

4. **Cleanup**:
   ```bash
   npm uninstall moment lodash
   # Remove imports
   ```

#### Expected Results
- ✅ Build succeeds with size warnings
- ⚠️ Bundle size increases
- ⚠️ Performance score may drop

### Failure Scenario Test Results Template

```markdown
## Failure Scenario Test Results

**Test Date**: _______________
**Tester**: _______________

### Test 1: Syntax Error
- Build Failed: Yes/No
- Deploy Prevented: Yes/No
- Error Message Clear: Yes/No
- Previous Site Live: Yes/No
- Recovery Successful: Yes/No

### Test 2: Missing Dependency
- Build Failed: Yes/No
- Error Message Clear: Yes/No
- Recovery Successful: Yes/No

### Test 3: Incorrect Base Path
- Build Succeeded: Yes/No
- Assets Failed to Load: Yes/No
- Easy to Diagnose: Yes/No
- Recovery Successful: Yes/No

### Test 4: Large Bundle
- Build Succeeded: Yes/No
- Warnings Shown: Yes/No
- Performance Impact: Yes/No

**Overall Robustness**: Pass/Fail
```

---

## Deployment History and Rollback

### Overview

Verify deployment history tracking and rollback capabilities.

### Viewing Deployment History

#### Access Actions Tab

1. Navigate to: `https://github.com/qoojung/personal-profile/actions`
2. View list of workflow runs
3. Each run shows:
   - Workflow name
   - Commit message
   - Branch name
   - Timestamp
   - Status (✅ success, ❌ failure, 🟡 in progress)
   - Duration

#### Verify History Information

- [ ] All deployments are listed
- [ ] Timestamps are accurate
- [ ] Commit messages are visible
- [ ] Status indicators are correct
- [ ] Can click to view details

### Deployment Details

#### View Individual Deployment

1. Click on a workflow run
2. Review details:
   - Commit hash
   - Triggered by (user)
   - Workflow file
   - Jobs (build, deploy)
   - Artifacts
   - Deployment URL

#### Check Deployment Logs

- [ ] Build logs are accessible
- [ ] Deploy logs are accessible
- [ ] Logs show all steps
- [ ] Timestamps for each step
- [ ] Can download logs

### Testing Rollback Capability

#### Method 1: Re-run Previous Workflow

**Steps**:

1. Go to Actions tab
2. Find a previous successful deployment
3. Click on the workflow run
4. Click "Re-run all jobs" button
5. Confirm re-run
6. Monitor workflow execution
7. Verify site reverts to previous version

**Verification**:
- [ ] Re-run button is available
- [ ] Workflow runs successfully
- [ ] Site content matches previous version
- [ ] Deployment URL is updated
- [ ] No data loss

#### Method 2: Git Revert

**Steps**:

1. Identify problematic commit:
   ```bash
   git log --oneline -10
   ```

2. Revert the commit:
   ```bash
   git revert <commit-hash>
   ```

3. Push revert commit:
   ```bash
   git push origin main
   ```

4. Monitor automatic deployment
5. Verify site is restored

**Verification**:
- [ ] Revert commit created
- [ ] Workflow triggered automatically
- [ ] Site restored to previous state
- [ ] Git history preserved

#### Method 3: Reset to Previous Commit

**Steps** (use with caution):

1. Identify target commit:
   ```bash
   git log --oneline -10
   ```

2. Reset to commit:
   ```bash
   git reset --hard <commit-hash>
   ```

3. Force push (if necessary):
   ```bash
   git push --force origin main
   ```

4. Monitor deployment

**Verification**:
- [ ] Repository reset to target commit
- [ ] Workflow triggered
- [ ] Site restored
- ⚠️ Git history rewritten (use carefully)

### Rollback Time Testing

Measure how long rollback takes:

1. **Start timer** when initiating rollback
2. **Monitor workflow** execution
3. **Stop timer** when site is restored
4. **Record time**

**Target**: Rollback complete in < 5 minutes

### Deployment History Test Results Template

```markdown
## Deployment History and Rollback Test Results

**Test Date**: _______________
**Tester**: _______________

### History Verification
- [ ] All deployments visible
- [ ] Timestamps accurate
- [ ] Commit messages shown
- [ ] Status indicators correct
- [ ] Logs accessible

### Rollback Method 1: Re-run
- Tested: Yes/No
- Successful: Yes/No
- Time Taken: _____ minutes
- Site Restored: Yes/No

### Rollback Method 2: Git Revert
- Tested: Yes/No
- Successful: Yes/No
- Time Taken: _____ minutes
- Site Restored: Yes/No

### Rollback Method 3: Git Reset
- Tested: Yes/No
- Successful: Yes/No
- Time Taken: _____ minutes
- Site Restored: Yes/No

**Rollback Capability**: Pass/Fail
```

---

## Workflow Performance Optimization

### Overview

Verify and optimize workflow performance for faster deployments.

### Baseline Metrics

#### Measure Current Performance

1. Trigger a fresh deployment
2. Record metrics:
   - Total workflow time
   - Build job time
   - Deploy job time
   - Cache hit/miss
   - Artifact upload time

#### Target Metrics

- **Total Workflow Time**: < 3 minutes
- **Build Job Time**: < 2 minutes
- **Deploy Job Time**: < 1 minute
- **Cache Hit Rate**: > 80%

### Dependency Caching Verification

#### Check Cache Performance

1. **First Run (Cold Cache)**:
   - Trigger workflow
   - Note "Cache not found" message
   - Record build time

2. **Second Run (Warm Cache)**:
   - Make small change
   - Trigger workflow
   - Note "Cache restored" message
   - Record build time
   - Compare with first run

**Expected**:
- [ ] Cache is created on first run
- [ ] Cache is restored on subsequent runs
- [ ] Build time decreases with cache (30-50% faster)
- [ ] Cache key is based on package-lock.json

#### Cache Configuration Review

Check `.github/workflows/deploy.yml`:

```yaml
- name: Cache dependencies
  uses: actions/cache@v4
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-node-
```

**Verify**:
- [ ] Cache path is correct (~/.npm)
- [ ] Cache key includes package-lock.json hash
- [ ] Restore keys are configured
- [ ] Cache action version is latest

### Build Time Analysis

#### Identify Bottlenecks

Review workflow logs for each step:

1. **Checkout**: Should be < 5s
2. **Setup Node.js**: Should be < 10s
3. **Cache Restore**: Should be < 10s
4. **Install Dependencies**: 
   - With cache: < 20s
   - Without cache: < 60s
5. **Build**: Should be < 60s
6. **Upload Artifact**: Should be < 10s

#### Optimization Opportunities

**If Install is Slow**:
- [ ] Verify cache is working
- [ ] Check for unnecessary dependencies
- [ ] Consider using `npm ci` (already used)

**If Build is Slow**:
- [ ] Review bundle size
- [ ] Check for unnecessary imports
- [ ] Verify Vite optimizations are enabled
- [ ] Consider disabling source maps in production

**If Upload is Slow**:
- [ ] Check artifact size
- [ ] Verify only dist/ is uploaded
- [ ] Consider compression

### Artifact Size Optimization

#### Check Artifact Size

1. Go to workflow run
2. Click on "Artifacts" section
3. Note artifact size

**Target**: < 1 MB

#### Optimize if Needed

- [ ] Verify only dist/ is included
- [ ] Check for unnecessary files
- [ ] Ensure node_modules is excluded
- [ ] Verify images are optimized

### Workflow Logs Review

#### Check for Warnings

Review logs for:
- [ ] Deprecation warnings
- [ ] Security warnings
- [ ] Performance warnings
- [ ] Action version warnings

#### Update Actions if Needed

Check for action updates:
- `actions/checkout@v4` → latest?
- `actions/setup-node@v4` → latest?
- `actions/cache@v4` → latest?
- `actions/upload-pages-artifact@v3` → latest?
- `actions/deploy-pages@v4` → latest?

### Performance Test Results Template

```markdown
## Workflow Performance Test Results

**Test Date**: _______________
**Tester**: _______________

### Baseline Metrics
- Total Workflow Time: _____ minutes
- Build Job Time: _____ minutes
- Deploy Job Time: _____ minutes
- Artifact Size: _____ MB

### Cache Performance
- First Run (Cold): _____ minutes
- Second Run (Warm): _____ minutes
- Time Saved: _____ %
- Cache Hit Rate: _____ %

### Step Timings
- Checkout: _____ s
- Setup Node: _____ s
- Cache Restore: _____ s
- Install Deps: _____ s
- Build: _____ s
- Upload Artifact: _____ s
- Deploy: _____ s

### Optimization Opportunities
1. _______________
2. _______________
3. _______________

**Performance Rating**: Excellent/Good/Needs Improvement
```

---

## Summary

This testing guide covers:

1. ✅ **Site Functionality**: Comprehensive testing of all features
2. ✅ **Performance**: Lighthouse audits and optimization verification
3. ✅ **Failure Scenarios**: Robustness testing
4. ✅ **Rollback**: Deployment history and recovery procedures
5. ✅ **Optimization**: Workflow performance analysis

Use these procedures after each deployment to ensure quality and reliability.

---

**Document Version**: 1.0  
**Last Updated**: 2025/10/2  
**Maintained By**: Development Team
