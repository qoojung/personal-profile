# GitHub Pages URL Reference

Quick reference for GitHub Pages URL formats and configuration.

## This Repository

| Property | Value |
|----------|-------|
| **GitHub Username** | `qoojung` |
| **Repository Name** | `personal-profile` |
| **GitHub Pages URL** | `https://qoojung.github.io/personal-profile/` |
| **Repository Type** | Project Repository |
| **Vite Base Path** | `/personal-profile/` |

## URL Format Patterns

### Project Repository (Current Setup)

```
https://<username>.github.io/<repository-name>/
```

**Example**:
```
https://qoojung.github.io/personal-profile/
```

**Characteristics**:
- ✅ Repository can have any name
- ✅ Multiple project sites per account
- ⚠️ Requires base path configuration in build tools
- 📝 URL includes repository name as path segment

**Vite Configuration Required**:
```javascript
// vite.config.js
export default defineConfig({
  base: '/personal-profile/',
  // ... other config
});
```

### User/Organization Repository (Alternative)

```
https://<username>.github.io/
```

**Example**:
```
https://qoojung.github.io/
```

**Requirements**:
- ⚠️ Repository MUST be named `<username>.github.io`
- ⚠️ Only ONE user/org site per account
- ✅ No base path needed (root URL)
- ✅ Cleaner URL structure

**Vite Configuration**:
```javascript
// vite.config.js
export default defineConfig({
  base: '/',
  // ... other config
});
```

## URL Components Breakdown

For: `https://qoojung.github.io/personal-profile/`

| Component | Value | Description |
|-----------|-------|-------------|
| **Protocol** | `https://` | Secure HTTP (enforced by GitHub) |
| **Subdomain** | `qoojung` | Your GitHub username |
| **Domain** | `github.io` | GitHub Pages domain |
| **Path** | `/personal-profile/` | Repository name (for project repos) |

## Configuration Matrix

| Repository Name | GitHub Pages URL | Vite Base Path | Type |
|----------------|------------------|----------------|------|
| `personal-profile` | `https://qoojung.github.io/personal-profile/` | `/personal-profile/` | Project |
| `qoojung.github.io` | `https://qoojung.github.io/` | `/` | User |
| `my-app` | `https://qoojung.github.io/my-app/` | `/my-app/` | Project |
| `portfolio` | `https://qoojung.github.io/portfolio/` | `/portfolio/` | Project |

## Custom Domain (Optional)

If using a custom domain:

| Domain Type | Example | DNS Configuration |
|-------------|---------|-------------------|
| **Subdomain** | `www.example.com` | CNAME → `qoojung.github.io` |
| **Apex Domain** | `example.com` | A records → GitHub IPs |
| **Both** | `example.com` + `www.example.com` | A + CNAME records |

**With Custom Domain**:
- URL: `https://www.example.com/`
- Vite Base Path: `/`
- CNAME file required in `public/` directory

## Quick Verification

### Check Your Current URL

1. Go to: `https://github.com/qoojung/personal-profile/settings/pages`
2. Look for "Your site is live at" message
3. URL should be: `https://qoojung.github.io/personal-profile/`

### Test URL Accessibility

```bash
# Using curl
curl -I https://qoojung.github.io/personal-profile/

# Expected response
HTTP/2 200
```

### Verify Base Path in Build

```bash
# Build the project
npm run build

# Check index.html for correct asset paths
cat dist/index.html | grep -E '(href|src)='

# All paths should start with /personal-profile/
```

## Common URL Issues

### Issue: 404 Page Not Found

**Possible Causes**:
- ❌ GitHub Pages not enabled
- ❌ Workflow hasn't completed
- ❌ Wrong URL (missing repository name)

**Correct URL**: `https://qoojung.github.io/personal-profile/`  
**Wrong URL**: `https://qoojung.github.io/` (missing `/personal-profile/`)

### Issue: Assets Not Loading (404)

**Cause**: Incorrect base path in `vite.config.js`

**Check**:
```javascript
// Should be:
base: '/personal-profile/'

// NOT:
base: '/'
base: '/personal-portfolio/'  // Wrong repo name
base: 'personal-profile'      // Missing slashes
```

### Issue: Redirect to Wrong URL

**Cause**: CNAME file in `public/` directory

**Solution**: Remove `public/CNAME` if not using custom domain

## Environment-Specific URLs

| Environment | URL | Purpose |
|-------------|-----|---------|
| **Local Dev** | `http://localhost:5173/` | Development server |
| **Local Preview** | `http://localhost:4173/` | Preview production build |
| **GitHub Pages** | `https://qoojung.github.io/personal-profile/` | Live production site |

## URL Best Practices

### ✅ Do

- Use HTTPS (enforced by GitHub)
- Include trailing slash for consistency
- Test URL after each deployment
- Document URL in README
- Use environment variables for base path

### ❌ Don't

- Hardcode full URLs in code
- Use HTTP (not supported)
- Forget to update base path when renaming repo
- Mix up repository name in base path

## Testing Checklist

After deployment, verify:

- [ ] Main URL loads: `https://qoojung.github.io/personal-profile/`
- [ ] With trailing slash: `https://qoojung.github.io/personal-profile/`
- [ ] Without trailing slash: `https://qoojung.github.io/personal-profile`
- [ ] All assets load (check browser console)
- [ ] Navigation works correctly
- [ ] Images display properly
- [ ] External links work
- [ ] HTTPS is enforced (no HTTP access)

## Quick Reference Commands

```bash
# Get repository info
git remote -v

# Extract username and repo name
# origin  git@github.com:qoojung/personal-profile.git

# Build URL pattern
# https://<username>.github.io/<repo-name>/
# https://qoojung.github.io/personal-profile/

# Test URL
curl -I https://qoojung.github.io/personal-profile/

# Check DNS (for custom domains)
dig www.example.com
nslookup www.example.com
```

## Additional Notes

- **URL is case-sensitive**: Use exact repository name casing
- **Trailing slash**: Optional but recommended for consistency
- **Subdirectories**: Supported (e.g., `/personal-profile/about/`)
- **Query parameters**: Supported (e.g., `?page=2`)
- **Hash routing**: Supported for SPAs (e.g., `#/about`)

---

**Last Updated**: 2025/10/2  
**Repository**: `https://github.com/qoojung/personal-profile`  
**Live Site**: `https://qoojung.github.io/personal-profile/`
