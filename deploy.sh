#!/bin/bash
# Quick deploy script for GitHub Pages
# Usage: bash deploy.sh "Update portfolio content"

echo "🚀 Deploying to GitHub Pages..."

# Check for commit message argument
COMMIT_MSG=${1:-"Update portfolio - $(date +'%Y-%m-%d %H:%M')"}

# Git operations
git add -A
git commit -m "$COMMIT_MSG"
git push origin main

echo "✅ Deployed! Check https://bilidarnanto.github.io in 1-2 minutes."
