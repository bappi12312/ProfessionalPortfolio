# Portfolio Deployment Guide

## Quick Start - Netlify Deployment

To deploy this portfolio on Netlify:

1. Push your code to GitHub
2. Go to [Netlify](https://www.netlify.com/) and sign in
3. Click "New site from Git" and select your repository
4. Use these build settings:
   - **Build command**: `bash netlify-build.sh`
   - **Publish directory**: `dist/public`
   - Add environment variable `CI` = `false`
5. Click "Deploy site"

## Detailed Instructions

For detailed deployment instructions, see [NETLIFY-DEPLOY.md](./NETLIFY-DEPLOY.md)

## Troubleshooting 404 Errors

If you see "Page not found" errors after deployment:

1. Make sure your _redirects file is properly deployed
2. Add a manual redirect rule in Netlify settings:
   - From: `/*`
   - To: `/index.html`
   - Status: `200`
3. Redeploy with cleared cache

## Files Required for Deployment

This project includes several files to support Netlify deployment:

- `netlify.toml` - Configuration for Netlify build
- `netlify-build.sh` - Custom build script
- `client/_redirects` - Redirect rules for SPA routing
- `client/public/netlify-fallback.html` - Fallback page for direct route access

These files have been set up to handle client-side routing with React Router.