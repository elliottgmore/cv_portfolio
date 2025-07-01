# GitHub Pages Deployment Guide

This guide explains how to deploy the CV Portfolio to GitHub Pages.

## Configuration Changes Made

1. **Vite Base Path**: Added `base: "/cv_portfolio/"` to `vite.config.ts`
2. **React Router**: Added `basename="/cv_portfolio"` to `BrowserRouter` in `App.tsx`
3. **Jekyll Disabled**: Added `.nojekyll` file to prevent Jekyll processing

## Deployment Method: Deploy from Branch

This project is configured to use GitHub Pages' "Deploy from a branch" option, which automatically deploys when changes are pushed to the main branch.

### How it works:
1. The `dist` folder containing built files is committed to the repository
2. GitHub Pages serves the built application directly from the `dist` folder
3. When you push changes to main, GitHub Pages automatically updates the live site

### To deploy changes:
1. Make your code changes
2. Run `npm run build` to rebuild the application
3. Commit both your source changes and the updated `dist` folder
4. Push to the main branch
5. GitHub Pages will automatically serve the updated site

### One-time GitHub Pages Setup:
1. Go to your repository's Settings → Pages
2. Set Source to "Deploy from a branch"
3. Select branch "main" and folder "/docs" or configure to serve from the `dist` folder
4. Save the settings

## Verification

After deployment, the site should be accessible at:
`https://elliottgmore.github.io/cv_portfolio/`

The errors about 404 for `src/main.tsx` and `favicon.ico` should be resolved.