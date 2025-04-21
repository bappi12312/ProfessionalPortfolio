#!/usr/bin/env node

// This script runs before the Netlify build process to ensure proper configuration

const fs = require('fs');
const path = require('path');

// Make sure the build directory exists
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Make sure the public directory exists in dist
const distPublicDir = path.join(distDir, 'public');
if (!fs.existsSync(distPublicDir)) {
  fs.mkdirSync(distPublicDir, { recursive: true });
}

// Create a _redirects file in the output directory
const redirectsPath = path.join(distPublicDir, '_redirects');
fs.writeFileSync(redirectsPath, '/* /index.html 200\n');

console.log('✅ Netlify build preparation complete');
console.log('- Created _redirects file for SPA routing');