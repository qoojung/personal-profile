# Personal Portfolio

[![Deploy to GitHub Pages](https://github.com/qoojung/personal-profile/actions/workflows/deploy.yml/badge.svg)](https://github.com/qoojung/personal-profile/actions/workflows/deploy.yml)

A modern, responsive personal portfolio website built with React and Vite.

## Live Site

🌐 **GitHub Pages URL**: `https://qoojung.github.io/personal-profile/`

The site is automatically deployed to GitHub Pages via GitHub Actions CI/CD pipeline.

## GitHub Pages Configuration

This project is configured to deploy automatically to GitHub Pages using GitHub Actions. Follow these steps to enable GitHub Pages for this repository:

### Enabling GitHub Pages

1. Navigate to your repository on GitHub: `https://github.com/qoojung/personal-profile`
2. Click on **Settings** tab
3. In the left sidebar, click on **Pages** (under "Code and automation" section)
4. Under **Source**, select **GitHub Actions** from the dropdown menu
   - This enables deployment via the GitHub Actions workflow defined in `.github/workflows/deploy.yml`
   - The previous "Deploy from a branch" method is replaced by this modern approach
5. Verify that **Enforce HTTPS** is enabled (this should be enabled by default)
   - HTTPS ensures secure connections to your site
   - GitHub Pages automatically provisions SSL certificates

### GitHub Pages URL Format

Your site will be accessible at the following URL format:

**Project Repository URL**: `https://<username>.github.io/<repository-name>/`

For this repository:

- **Username**: `qoojung`
- **Repository**: `personal-profile`
- **Live URL**: `https://qoojung.github.io/personal-profile/`

### Verification Checklist

After enabling GitHub Pages, verify the following:

- ✅ Source is set to "GitHub Actions"
- ✅ HTTPS enforcement is enabled
- ✅ The URL format matches: `https://qoojung.github.io/personal-profile/`
- ✅ Workflow has run successfully (check Actions tab)
- ✅ Site is accessible at the GitHub Pages URL

### Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file to the `public/` directory with your domain name
2. Configure DNS settings with your domain provider
3. Add the custom domain in GitHub Pages settings

## Development

### Prerequisites

- Node.js 20.x or higher
- npm

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Deployment

### Automatic Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch:

1. Make your changes locally
2. Commit and push to the `main` branch
3. GitHub Actions workflow automatically builds and deploys
4. Site updates are live within 2-3 minutes

### Manual Deployment

You can manually trigger a deployment:

1. Go to the **Actions** tab in GitHub
2. Select the "Deploy to GitHub Pages" workflow
3. Click **Run workflow** button
4. Select the `main` branch and click **Run workflow**

### Deployment Status

Check deployment status:

- View the **Actions** tab for workflow execution logs
- Green checkmark ✅ indicates successful deployment
- Red X ❌ indicates deployment failure (check logs for details)

## CI/CD Pipeline

The project uses GitHub Actions for continuous integration and deployment:

- **Workflow File**: `.github/workflows/deploy.yml`
- **Trigger**: Push to `main` branch or manual dispatch
- **Build Process**:
  - Install dependencies with `npm ci`
  - Build production bundle with `npm run build`
  - Upload artifacts to GitHub Pages
- **Deploy Process**: Automatically deploys built files to GitHub Pages

## Technology Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions

## Project Structure

```
personal-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/                     # Static assets
├── src/
│   ├── components/            # React components
│   ├── data/                  # Portfolio data
│   └── main.jsx              # Application entry point
├── vite.config.js            # Vite configuration (with GitHub Pages base path)
└── package.json              # Dependencies and scripts
```

## Troubleshooting

### Site Not Loading After Deployment

- Verify GitHub Pages is enabled in repository settings
- Check that the workflow completed successfully in Actions tab
- Ensure the base path in `vite.config.js` matches your repository name
- Clear browser cache and try again

### Assets Not Loading (404 Errors)

- Verify the `base` configuration in `vite.config.js` is correct
- Ensure all asset paths are relative
- Check browser console for specific 404 errors

### Deployment Workflow Fails

- Check the workflow logs in the Actions tab
- Verify all dependencies are listed in `package.json`
- Ensure the build command succeeds locally with `npm run build`
- Check that GitHub Pages is enabled with "GitHub Actions" as the source
