#!/bin/bash
BASE="/runways-rescues"
find out -name "*.html" -exec sed -i "s|src=\"/images/|src=\"${BASE}/images/|g" {} \;
find out -name "*.html" -exec sed -i "s|srcSet=\"/_next/|srcSet=\"${BASE}/_next/|g" {} \;
find out -name "*.js"   -exec sed -i "s|\"/images/|\"${BASE}/images/|g" {} \;
echo "✓ Paths fixed for GitHub Pages"
