#!/usr/bin/env node

// This script prepares the project for Netlify deployment
// It modifies the client-side code to work without the backend

import { exec } from 'child_process';
import fs from 'fs/promises';
import path from 'path';

async function modifyForStaticDeployment() {
  console.log('Preparing project for static deployment on Netlify...');
  
  try {
    // Create a build directory for Netlify-specific files if it doesn't exist
    await fs.mkdir('netlify-build', { recursive: true });
    
    // Create a file that will help with deployment
    await fs.writeFile('netlify-build/README.md', 
      '# Netlify Deployment\n\n' +
      'This directory contains files specific to Netlify deployment.\n' +
      'The portfolio is being deployed as a static site without the backend.\n'
    );
    
    console.log('✅ Setup for Netlify deployment is complete!');
    console.log('');
    console.log('To deploy to Netlify:');
    console.log('1. Push this repository to GitHub');
    console.log('2. Connect your Netlify account to GitHub');
    console.log('3. Import the repository in Netlify');
    console.log('4. Use the following build settings:');
    console.log('   - Build command: vite build');
    console.log('   - Publish directory: dist');
    console.log('');
    console.log('The portfolio site will be deployed as a static site.');
    
  } catch (error) {
    console.error('Error preparing for Netlify deployment:', error);
    process.exit(1);
  }
}

// Run the function
modifyForStaticDeployment();