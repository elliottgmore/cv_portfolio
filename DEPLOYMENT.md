# GitHub Pages Deployment Guide

This guide explains how to deploy the CV Portfolio to GitHub Pages.

## Configuration Changes Made

1. **Vite Base Path**: Added `base: "/cv_portfolio/"` to `vite.config.ts`
2. **React Router**: Added `basename="/cv_portfolio"` to `BrowserRouter` in `App.tsx`
3. **Jekyll Disabled**: Added `.nojekyll` file to prevent Jekyll processing

## Deployment Options

### Option 1: Manual Deployment
1. Run `npm run build` to create the `dist` folder
2. Deploy the contents of the `dist` folder to GitHub Pages
3. Configure GitHub Pages to serve from the correct source

### Option 2: GitHub Actions (Recommended)
Create a GitHub Actions workflow to automatically build and deploy:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## Verification

After deployment, the site should be accessible at:
`https://elliottgmore.github.io/cv_portfolio/`

The errors about 404 for `src/main.tsx` and `favicon.ico` should be resolved.