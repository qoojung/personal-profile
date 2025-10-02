# Deployment Verification Checklist

This checklist ensures that deployments to GitHub Pages are successful and the site is functioning correctly.

## Pre-Deployment Checklist

Before pushing changes to trigger a deployment:

### Local Testing

- [ ] Run `npm run build` locally without errors
- [ ] Run `npm run preview` and verify site works correctly
- [ ] Test all navigation links and sections
- [ ] Verify all images and assets load properly
- [ ] Check browser console for errors
- [ ] Test responsive design on different screen sizes
- [ ] Verify external links (LinkedIn, email, etc.) work

### Code Quality

- [ ] All changes are committed with descriptive commit messages
- [ ] No console.log statements or debug code left in production
- [ ] No sensitive data (API keys, tokens) in code
- [ ] Dependencies are up to date (check for security vulnerabilities)
- [ ] Code follows project style guidelines

### Configuration

- [ ] `vite.config.js` has correct base path: `/personal-profile/`
- [ ] `.gitignore` excludes `node_modules/` and `dist/`
- [ ] `package.json` has all required dependencies
- [ ] GitHub Actions workflow file (`.github/workflows/deploy.yml`) is present

## Deployment Process Checklist

During the deployment:

### Triggering Deployment

- [ ] Changes pushed to `main` branch
- [ ] GitHub Actions workflow triggered automatically
- [ ] Workflow appears in Actions tab with "in progress" status

### Monitoring Build Job

Navigate to: `https://github.com/qoojung/personal-profile/actions`

- [ ] Build job started successfully
- [ ] Checkout step completed (green checkmark)
- [ ] Node.js setup completed
- [ ] Dependencies cached (if applicable)
- [ ] Dependencies installed successfully
- [ ] Build step completed without errors
- [ ] Artifact uploaded successfully
- [ ] Build job shows green checkmark

### Monitoring Deploy Job

- [ ] Deploy job started after build completion
- [ ] Deploy job depends on build job (waits for build to finish)
- [ ] Deployment to GitHub Pages initiated
- [ ] Deploy job shows green checkmark
- [ ] Deployment URL displayed in workflow output

### Checking Workflow Status

- [ ] Overall workflow shows green checkmark ✅
- [ ] No error messages in workflow logs
- [ ] Build time is reasonable (< 3 minutes)
- [ ] Deployment completed within expected timeframe

## Post-Deployment Verification

After deployment completes:

### Site Accessibility

- [ ] Site is accessible at: `https://qoojung.github.io/personal-profile/`
- [ ] HTTPS is enforced (no HTTP access)
- [ ] Site loads within 3 seconds
- [ ] No 404 errors for the main page

### Content Verification

- [ ] All sections are visible and properly formatted
- [ ] Profile photo loads correctly
- [ ] All images and icons display properly
- [ ] Text content is readable and properly styled
- [ ] Colors and styling match the design

### Navigation Testing

- [ ] All navigation links work correctly
- [ ] Smooth scrolling to sections works
- [ ] Navigation highlights active section
- [ ] Mobile menu (if applicable) works correctly

### Asset Loading

- [ ] All CSS files load correctly
- [ ] All JavaScript files load correctly
- [ ] All images load without 404 errors
- [ ] Favicon displays in browser tab
- [ ] All fonts load correctly

### Functionality Testing

- [ ] External links open in new tabs
- [ ] Email link opens email client
- [ ] LinkedIn link goes to correct profile
- [ ] GitHub link (if present) works correctly
- [ ] All interactive elements respond correctly

### Responsive Design

Test on multiple screen sizes:

- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)
- [ ] Layout adapts correctly to each size
- [ ] No horizontal scrolling on mobile
- [ ] Touch targets are appropriately sized

### Browser Compatibility

Test on multiple browsers:

- [ ] Chrome/Chromium (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Performance Testing

- [ ] Run Lighthouse audit (Chrome DevTools)
- [ ] Performance score > 90
- [ ] Accessibility score > 90
- [ ] Best Practices score > 90
- [ ] SEO score > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3.5s
- [ ] No render-blocking resources

### Console Checks

Open browser console (F12) and verify:

- [ ] No JavaScript errors
- [ ] No 404 errors for assets
- [ ] No CORS errors
- [ ] No mixed content warnings
- [ ] No console warnings

### GitHub Pages Settings

Navigate to: `https://github.com/qoojung/personal-profile/settings/pages`

- [ ] Source is set to "GitHub Actions"
- [ ] HTTPS is enforced
- [ ] Custom domain (if configured) is working
- [ ] Site URL is displayed correctly

## Deployment History Verification

### Actions Tab Review

- [ ] Deployment appears in Actions history
- [ ] Timestamp is correct
- [ ] Commit message is visible
- [ ] Workflow run number incremented
- [ ] Previous deployments are visible in history

### Deployment Status

- [ ] Latest deployment shows green checkmark
- [ ] Deployment URL matches expected URL
- [ ] Environment shows "github-pages"
- [ ] Deployment is marked as "Active"

## Rollback Verification (If Needed)

If issues are found and rollback is required:

### Rollback Process

- [ ] Identify last successful deployment in Actions tab
- [ ] Note the commit hash of working version
- [ ] Click "Re-run all jobs" on successful deployment
- [ ] Monitor re-run workflow
- [ ] Verify site reverts to previous working state

### Alternative Rollback

- [ ] Use `git revert` to undo problematic commit
- [ ] Push revert commit to main branch
- [ ] Wait for automatic deployment
- [ ] Verify site is working correctly

## Troubleshooting Checklist

If deployment fails, check:

### Build Failures

- [ ] Review build logs in Actions tab
- [ ] Check for syntax errors in code
- [ ] Verify all dependencies are in package.json
- [ ] Ensure package-lock.json is committed
- [ ] Test build locally: `npm run build`
- [ ] Check Node.js version compatibility

### Deployment Failures

- [ ] Verify GitHub Pages is enabled
- [ ] Check workflow permissions are correct
- [ ] Ensure artifact was uploaded successfully
- [ ] Review deploy job logs for errors
- [ ] Check GitHub status page for service issues

### Asset Loading Issues

- [ ] Verify base path in vite.config.js: `/personal-profile/`
- [ ] Check asset paths in built index.html
- [ ] Ensure all assets are in dist/ directory
- [ ] Verify no hardcoded absolute URLs in code
- [ ] Check browser console for 404 errors

### Performance Issues

- [ ] Check bundle sizes in build output
- [ ] Verify images are optimized
- [ ] Ensure code splitting is working
- [ ] Check for unnecessary dependencies
- [ ] Review Lighthouse recommendations

## Continuous Monitoring

### Regular Checks (Weekly)

- [ ] Verify site is still accessible
- [ ] Check for any broken links
- [ ] Review GitHub Actions usage
- [ ] Check for dependency updates
- [ ] Review security alerts (if any)

### Monthly Reviews

- [ ] Run full performance audit
- [ ] Update dependencies
- [ ] Review and update content
- [ ] Check analytics (if configured)
- [ ] Review and optimize bundle sizes

## Emergency Procedures

### Site Down

If the site is completely inaccessible:

1. [ ] Check GitHub status page
2. [ ] Verify GitHub Pages is still enabled
3. [ ] Check latest deployment status
4. [ ] Review workflow logs for errors
5. [ ] Consider rolling back to last working version
6. [ ] Contact GitHub support if needed

### Critical Bug Found

If a critical bug is discovered in production:

1. [ ] Document the bug and its impact
2. [ ] Create hotfix branch if needed
3. [ ] Fix the bug and test locally
4. [ ] Push fix to main branch
5. [ ] Monitor deployment closely
6. [ ] Verify fix is live
7. [ ] Document the incident

## Sign-Off

After completing all checks, sign off on the deployment:

**Deployment Date**: _______________

**Deployed By**: _______________

**Commit Hash**: _______________

**Deployment URL**: `https://qoojung.github.io/personal-profile/`

**All Checks Passed**: [ ] Yes [ ] No

**Issues Found**: _______________

**Notes**: _______________

---

## Quick Reference

### Important URLs

- **Live Site**: `https://qoojung.github.io/personal-profile/`
- **Repository**: `https://github.com/qoojung/personal-profile`
- **Actions Tab**: `https://github.com/qoojung/personal-profile/actions`
- **Settings**: `https://github.com/qoojung/personal-profile/settings/pages`

### Key Commands

```bash
# Local testing
npm run build
npm run preview

# Check git status
git status
git log --oneline -5

# View workflow status (using GitHub CLI)
gh workflow list
gh run list --workflow=deploy.yml
gh run view <run-id>
```

### Expected Metrics

- **Build Time**: < 3 minutes
- **Performance Score**: > 90
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Bundle Size**: < 250 KB (gzipped)

### Support Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vite Documentation](https://vitejs.dev/)
- [Lighthouse Documentation](https://developers.google.com/web/tools/lighthouse)

---

**Last Updated**: 2025/10/2
**Version**: 1.0
