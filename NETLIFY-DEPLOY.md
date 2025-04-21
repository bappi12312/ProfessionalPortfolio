# Deploying Your Portfolio to Netlify

This document provides instructions for deploying your portfolio project to Netlify, specifically tailored for this React/Vite portfolio application.

## Prerequisites

- A [Netlify](https://www.netlify.com/) account (free tier is fine)
- Your project code in a Git repository (GitHub, GitLab, or Bitbucket)

## Important Files for Deployment

The following files in your project are essential for successful deployment:

1. `netlify.toml` - Configuration file for Netlify deployment settings
2. `client/_redirects` - Handles SPA routing (prevents 404 errors)
3. `netlify-build.sh` - Custom build script for Netlify

## Deployment Steps

### Step 1: Push your latest code to GitHub

Make sure all your recent changes are committed and pushed to your repository.

### Step 2: Deploy via Netlify UI

1. **Log in to Netlify**:
   Go to [netlify.com](https://www.netlify.com/) and log in to your account.

2. **Create a new site**:
   Click on "New site from Git" on your Netlify dashboard.

3. **Connect to your Git provider**:
   Select your Git provider (GitHub, GitLab, or Bitbucket) and authorize Netlify to access your repositories.

4. **Select your repository**:
   Choose the repository containing your portfolio project.

5. **Configure build settings**:
   - **Branch to deploy**: `main` (or your preferred branch)
   - **Build command**: `bash netlify-build.sh`
   - **Publish directory**: `dist/public`

6. **Advanced build settings** (important!):
   Click "Show advanced" and add the following environment variable:
   - Key: `CI`
   - Value: `false`

7. **Deploy site**:
   Click "Deploy site" and wait for the build process to complete.

## Troubleshooting 404 Errors

If you're still seeing 404 errors after deployment, follow these steps:

1. **Check your _redirects file**:
   Make sure the file exists at the root of your published site. You can verify this by:
   - Going to your Netlify dashboard
   - Selecting your site
   - Clicking "Deploys" > Latest deploy > "Files"
   - Look for a `_redirects` file in the root

2. **Add manual redirect rules in Netlify**:
   - Go to Site settings > Domain management > Custom domains
   - Scroll down to "Custom domain redirect"
   - Add a rule:
     - From: `/*`
     - To: `/index.html`
     - Status: `200`
     - Force: checked

3. **Redeploy with clear cache**:
   - Go to Deploys in your Netlify dashboard
   - Click "Trigger deploy" > "Clear cache and deploy site"

## Testing Your Deployment

After deploying, test your site by:
1. Visiting the main page
2. Refreshing the page to ensure it loads correctly
3. Testing navigation between different sections
4. Testing the site on mobile devices

## Custom Domain (Optional)

To set up a custom domain:
1. Go to Site settings > Domain management
2. Click "Add custom domain"
3. Follow the instructions to configure your domain

---

If you encounter any issues, check the Netlify deployment logs for specific error messages and troubleshooting guidance.