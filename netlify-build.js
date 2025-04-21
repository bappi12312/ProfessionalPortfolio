#!/usr/bin/env node

// This is a custom build script for Netlify that only builds the client-side code
// Run this script using: node netlify-build.js

import { exec } from 'child_process';
import { promises as fs } from 'fs';

console.log('Starting Netlify build process...');

// Run Vite build for the client side only
exec('npm run build', async (error, stdout, stderr) => {
  if (error) {
    console.error(`Error during build: ${error.message}`);
    process.exit(1);
  }
  
  if (stderr) {
    console.error(`Build errors: ${stderr}`);
  }
  
  console.log(stdout);
  console.log('Build completed successfully!');
  
  // Create a _redirects file for Netlify to handle client-side routing
  try {
    await fs.writeFile('dist/_redirects', '/* /index.html 200');
    console.log('Created _redirects file for SPA routing');
  } catch (err) {
    console.error('Error creating _redirects file:', err);
  }
});