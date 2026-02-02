#!/bin/bash
echo "🚀 Deploying to GitHub Pages..."

# Build the project
echo "📦 Building project..."
npm run build

# Deploy to GitHub Pages
echo "📤 Deploying to GitHub Pages..."
npm run deploy

echo "✅ Deployment completed!"
