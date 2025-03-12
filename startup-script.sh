#!/bin/bash

# Create necessary directories
mkdir -p assets/images/products
mkdir -p assets/images/recipes
mkdir -p assets/images/research
mkdir -p assets/css
mkdir -p assets/js
mkdir -p pages

# Create empty files
touch index.html
touch assets/css/styles.css
touch assets/js/script.js
touch pages/shop.html
touch pages/recipes.html
touch pages/research.html
touch pages/future-products.html
touch pages/impressum.html
touch pages/datenschutz.html
touch pages/cookie-settings.html

# Print success message
echo "Project folder structure created successfully!"
