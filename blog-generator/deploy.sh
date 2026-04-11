#!/bin/bash
# Deploy blog to GitHub Pages
# This script copies output to docs/ folder for GitHub Pages deployment

set -e

echo "🚀 Deploying blog to GitHub Pages..."

# Get script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# Activate virtual environment
if [ -d ".venv" ]; then
    source .venv/bin/activate
fi

# Generate the blog
echo "📄 Generating blog..."
python generate.py

# Create docs directory for GitHub Pages
DOCS_DIR="../docs"
echo "📁 Copying to $DOCS_DIR..."

# Remove old docs if exists
rm -rf "$DOCS_DIR"

# Copy output to docs
cp -r output "$DOCS_DIR"

echo "✅ Blog deployed to $DOCS_DIR"
echo ""
echo "Next steps:"
echo "1. Commit the docs/ folder: git add docs/ && git commit -m 'Deploy blog'"
echo "2. Push to GitHub: git push"
echo "3. Go to Settings > Pages in your GitHub repo"
echo "4. Select 'Deploy from a branch' and choose 'main' with '/docs' folder"
echo ""
echo "Your blog will be available at: https://yourusername.github.io/repo-name/"
