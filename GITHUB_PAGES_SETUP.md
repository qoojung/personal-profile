# GitHub Pages Configuration Guide

This document provides detailed instructions for configuring GitHub Pages for the personal portfolio project.

## Overview

This project uses GitHub Pages with GitHub Actions as the deployment source. This modern approach allows automated deployments triggered by pushes to the main branch.

## Configuration Steps

### Step 1: Access Repository Settings

1. Open your web browser and navigate to: `https://github.com/qoojung/personal-profile`
2. Click on the **Settings** tab (located in the top navigation bar)
3. You must have admin access to the repository to modify these settings

### Step 2: Navigate to Pages Settings

1. In the left sidebar, scroll down to the **Code and automation** section
2. Click on **Pages**
3. This opens the GitHub Pages configuration panel

### Step 3: Configure Deployment Source

1. Locate the **Source** section (usually at the top of the Pages settings)
2. Click on the dropdown menu under **Source**
3. Select **GitHub Actions** from the available options
   - This replaces the legacy "Deploy from a branch" method
   - Enables deployment via the workflow defined in `.github/workflows/deploy.yml`
4. The page will automatically save this setting

**Important**: Do NOT select "Deploy from a branch" - this is the old method and won't work with our GitHub Actions workflow.

### Step 4: Verify HTTPS Enforcement

1. Scroll down to find the **Enforce HTTPS** checkbox
2. Verify that it is **checked** (enabled)
3. This should be enabled by default for all GitHub Pages sites
4. HTTPS ensures:
   - Secure encrypted connections
   - Protection against man-in-the-middle attacks
   - Better SEO rankings
   - Required for modern web features

**Note**: If the checkbox is disabled (grayed out), HTTPS is automatically enforced and cannot be disabled.

### Step 5: Note Your GitHub Pages URL

After configuration, GitHub will display your site's URL. The URL format is:

```
https://<username>.github.io/<repository-name>/
```

For this repository:
- **Username**: `qoojung`
- **Repository Name**: `personal-profile`
- **Full URL**: `https://qoojung.github.io/personal-profile/`

**Important**: The trailing slash is optional but recommended for consistency.

## Verification Checklist

After completing the configuration, verify the following:

- [ ] Repository Settings → Pages is accessible
- [ ] Source is set to "GitHub Actions" (not "Deploy from a branch")
- [ ] HTTPS enforcement is enabled
- [ ] GitHub Pages URL is displayed: `https://qoojung.github.io/personal-profile/`
- [ ] No error messages are shown in the Pages settings
- [ ] The GitHub Actions workflow has been created (`.github/workflows/deploy.yml`)

## Understanding the URL Structure

### Project Repository (Current Setup)

**Format**: `https://<username>.github.io/<repository-name>/`

**Example**: `https://qoojung.github.io/personal-profile/`

**Characteristics**:
- Repository can have any name
- URL includes the repository name as a path
- Requires `base` configuration in `vite.config.js`
- Multiple project sites can exist per user/organization

### User/Organization Repository (Alternative)

**Format**: `https://<username>.github.io/`

**Requirements**:
- Repository must be named exactly `<username>.github.io`
- For user `qoojung`, repository would be `qoojung.github.io`
- URL does NOT include repository name
- Only one user/org site per account

**Note**: This project uses the Project Repository format.

## Post-Configuration Steps

### 1. Trigger First Deployment

After enabling GitHub Pages:

```bash
# Make a small change (or use existing changes)
git add .
git commit -m "Enable GitHub Pages deployment"
git push origin main
```

This will trigger the GitHub Actions workflow and deploy your site.

### 2. Monitor Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow run named "Deploy to GitHub Pages"
3. Click on the workflow run to view detailed logs
4. Wait for both "build" and "deploy" jobs to complete (usually 2-3 minutes)

### 3. Access Your Live Site

1. Once the workflow shows a green checkmark ✅, your site is live
2. Navigate to: `https://qoojung.github.io/personal-profile/`
3. The site should load with all assets and styling intact

## Troubleshooting

### "GitHub Pages is not enabled"

**Solution**: Follow Steps 1-3 above to enable GitHub Pages with GitHub Actions as the source.

### "Source option is grayed out"

**Possible Causes**:
- Repository is private and you're on the free plan (GitHub Pages requires public repos on free tier)
- You don't have admin access to the repository

**Solution**: 
- Make the repository public, or
- Upgrade to GitHub Pro/Team for private repository Pages, or
- Request admin access from the repository owner

### "Deploy from a branch" is selected instead of "GitHub Actions"

**Solution**: Change the source to "GitHub Actions" as described in Step 3.

### HTTPS checkbox is missing

**Explanation**: GitHub has made HTTPS mandatory for all Pages sites. If you don't see the checkbox, HTTPS is automatically enforced.

### Site shows 404 after deployment

**Possible Causes**:
- Workflow hasn't completed yet
- Workflow failed (check Actions tab)
- Base path in `vite.config.js` doesn't match repository name

**Solution**:
1. Check Actions tab for workflow status
2. Verify `vite.config.js` has correct base path: `/personal-profile/`
3. Wait a few minutes for DNS propagation

### Assets not loading (404 errors)

**Cause**: Incorrect base path configuration

**Solution**: Verify `vite.config.js` contains:
```javascript
base: '/personal-profile/'
```

## Security Considerations

### HTTPS Enforcement

- **Always enabled**: Protects user data and privacy
- **Automatic SSL**: GitHub provides free SSL certificates
- **No configuration needed**: Works out of the box

### Repository Visibility

- **Public repository**: Code is visible to everyone
- **No secrets in code**: Never commit API keys, passwords, or tokens
- **Use GitHub Secrets**: For sensitive environment variables in workflows

### Permissions

The GitHub Actions workflow requires specific permissions:
- `contents: read` - Read repository code
- `pages: write` - Deploy to GitHub Pages
- `id-token: write` - Authentication for deployment

These are configured in `.github/workflows/deploy.yml` and are minimal required permissions.

## Custom Domain Configuration (Optional)

If you want to use a custom domain (e.g., `www.yourname.com`):

### 1. Add CNAME File

Create `public/CNAME` with your domain:
```
www.yourname.com
```

### 2. Configure DNS

Add DNS records with your domain provider:
- **CNAME record**: `www` → `qoojung.github.io`
- **A records** (for apex domain): Point to GitHub's IP addresses

### 3. Update GitHub Settings

1. Go to Settings → Pages
2. Enter your custom domain in the "Custom domain" field
3. Wait for DNS check to complete
4. Enable "Enforce HTTPS" (may take up to 24 hours)

### 4. Update Vite Config

Change `base` in `vite.config.js` to `/` for custom domains.

## Maintenance

### Regular Checks

- Monitor workflow execution times (should be < 3 minutes)
- Check for failed deployments in Actions tab
- Verify site accessibility periodically
- Review GitHub Actions usage (free tier: unlimited for public repos)

### Updating Configuration

If you need to change GitHub Pages settings:
1. Go to Settings → Pages
2. Make your changes
3. Settings are saved automatically
4. Re-run the workflow if needed

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)

## Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review workflow logs in the Actions tab
3. Verify all configuration steps were completed
4. Check GitHub Status page for service issues

---

**Configuration Date**: 2025/10/2  
**Repository**: `qoojung/personal-profile`  
**GitHub Pages URL**: `https://qoojung.github.io/personal-profile/`
