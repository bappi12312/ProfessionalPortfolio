#!/bin/bash

# This script handles the build process for Netlify deployment

# Create necessary directories
mkdir -p dist/public

# Run the Vite build process
echo "Running Vite build..."
npm run build

# Create and ensure the _redirects file exists in multiple locations (for redundancy)
echo "Creating _redirects file..."
echo "/*    /index.html   200" > dist/public/_redirects
echo "/*    /index.html   200" > dist/_redirects

# Create a 404.html that redirects to index.html
echo "Creating 404.html fallback page..."
cp client/public/netlify-fallback.html dist/public/404.html
cp client/public/netlify-fallback.html dist/404.html

# Also create a fallback for direct routes
for route in about skills projects contact; do
  echo "Creating fallback for /$route"
  mkdir -p dist/public/$route
  cp client/public/netlify-fallback.html dist/public/$route/index.html
done

# Make sure all the key files exist
echo "Verifying build output..."
if [ -f dist/public/index.html ]; then
  echo "✅ index.html exists"
else
  echo "❌ index.html not found"
fi

if [ -f dist/public/_redirects ]; then
  echo "✅ _redirects exists"
else
  echo "❌ _redirects not found"
fi

echo "Build completed successfully!"