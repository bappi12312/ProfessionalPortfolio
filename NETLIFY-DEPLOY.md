# Deploying Your Portfolio to Netlify

This document provides instructions for deploying your portfolio project to Netlify.

## Prerequisites

- A [Netlify](https://www.netlify.com/) account (free tier is fine)
- Your project code in a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### Option 1: Deploy via Netlify UI (Recommended for Beginners)

1. **Push your code to GitHub or another Git provider**:
   Make sure your code is committed and pushed to a repository.

2. **Log in to Netlify**:
   Go to [netlify.com](https://www.netlify.com/) and log in to your account.

3. **Create a new site**:
   Click on "New site from Git" on your Netlify dashboard.

4. **Connect to your Git provider**:
   Select your Git provider (GitHub, GitLab, or Bitbucket) and authorize Netlify to access your repositories.

5. **Select your repository**:
   Choose the repository containing your portfolio project.

6. **Configure build settings**:
   - **Branch to deploy**: `main` (or your preferred branch)
   - **Build command**: `vite build`
   - **Publish directory**: `dist`

7. **Deploy site**:
   Click "Deploy site" and wait for the build process to complete.

8. **Configure custom domain (optional)**:
   Once deployed, you can set up a custom domain by going to Site settings > Domain management.

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**:
   ```bash
   npm install netlify-cli -g
   ```

2. **Log in to Netlify via CLI**:
   ```bash
   netlify login
   ```

3. **Initialize Netlify in your project**:
   ```bash
   netlify init
   ```

4. **Configure your build settings as prompted**:
   - Build command: `vite build`
   - Publish directory: `dist`

5. **Deploy your site**:
   ```bash
   netlify deploy --prod
   ```

## Troubleshooting

### If your site shows a blank page or 404 error:
Make sure your `public/_redirects` file contains the following line to handle client-side routing:
```
/* /index.html 200
```

### If your build fails:
Check the build logs in Netlify to identify the issue. Common problems include:
- Missing dependencies
- Build command errors
- Environment variables not set

## Environment Variables

If your portfolio needs environment variables (like API keys), you can set them in Netlify:
1. Go to Site settings > Build & deploy > Environment
2. Add the required environment variables

## Continuous Deployment

Netlify automatically rebuilds and redeploys your site when you push changes to your Git repository. No further configuration is needed for continuous deployment.

---

Enjoy your newly deployed portfolio website!