#!/bin/bash
# Image Optimization Script for Performance
# Converts hero images to WebP format at display size (~380px width)

echo "🖼️  Optimizing hero images for web performance..."

# Check if sharp-cli is available
if ! command -v sharp &> /dev/null; then
    echo "Installing sharp-cli..."
    npm install -g sharp-cli
fi

# Create optimized directory if it doesn't exist
mkdir -p src/assets/optimized

# Optimize iPhone image
echo "Processing iPhone image..."
npx sharp -i src/assets/iphone-screen-repair-macon.jpg \
  -o src/assets/optimized/iphone-screen-repair-macon.webp \
  --webp '{"quality":80}' \
  resize 760 auto

# Optimize iPad image  
echo "Processing iPad image..."
npx sharp -i src/assets/ipad-screen-repair-macon.jpg \
  -o src/assets/optimized/ipad-screen-repair-macon.webp \
  --webp '{"quality":80}' \
  resize 760 auto

# Optimize MacBook image
echo "Processing MacBook image..."
npx sharp -i src/assets/macbook-repair-macon.jpg \
  -o src/assets/optimized/macbook-repair-macon.webp \
  --webp '{"quality":80}' \
  resize 760 auto

# Optimize logo (convert to WebP)
echo "Processing logo..."
if [ -f "src/assets/logo.png" ]; then
    npx sharp -i src/assets/logo.png \
      -o src/assets/optimized/logo.webp \
      --webp '{"quality":90}' \
      resize 260 auto
fi

echo "✅ Image optimization complete!"
echo "📦 Optimized images saved to src/assets/optimized/"
echo ""
echo "Next steps:"
echo "1. Update imports in Home.tsx to use optimized/*.webp"
echo "2. Update Navigation.tsx logo import to use optimized/logo.webp"
echo "3. Deploy and configure Cache-Control headers"
