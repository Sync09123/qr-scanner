#!/bin/bash

# Navigate to your Laravel project directory


# Add all changes to the staging area
git add .

# Commit changes with a generic message
git commit -m "Automated deployment"

# Push changes to the remote repository (replace 'origin' and 'main' with your remote and branch names)
git push origin main
