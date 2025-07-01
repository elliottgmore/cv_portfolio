#!/bin/bash

# Build and deploy script for GitHub Pages
# This script builds the project and copies files to the docs directory

echo "Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "Build failed. Exiting."
    exit 1
fi

echo "Copying built files to docs directory..."
mkdir -p docs
cp -r dist/* docs/

# Ensure .nojekyll file exists
touch docs/.nojekyll

echo "Build and docs update complete!"
echo "Now commit and push the changes:"
echo "  git add ."
echo "  git commit -m \"Update site\""
echo "  git push origin main"