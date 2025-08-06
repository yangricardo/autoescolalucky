#!/bin/bash

# Build script for Autoescola Lucky
# This script builds the project and updates the sitemap with current date

echo "🏗️  Building Autoescola Lucky..."

# Build the project
yarn build

# Update sitemap with current date
current_date=$(date +%Y-%m-%d)
sitemap_file="dist/sitemap.xml"

if [ -f "$sitemap_file" ]; then
    echo "📅 Updating sitemap with current date: $current_date"
    sed -i "s/<lastmod>.*<\/lastmod>/<lastmod>$current_date<\/lastmod>/" "$sitemap_file"
fi

echo "✅ Build completed successfully!"
echo "📁 Files generated in ./dist/"
echo "🌐 Ready for deployment to GitHub Pages"
