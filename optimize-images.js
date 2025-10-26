#!/usr/bin/env node
// Image Optimization Script using sharp library
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const optimizeImage = async (inputPath, outputPath, width) => {
  try {
    await sharp(inputPath)
      .resize(width, null, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outputPath);
    
    const stats = fs.statSync(outputPath);
    console.log(`✓ ${path.basename(outputPath)} - ${Math.round(stats.size / 1024)} KB`);
  } catch (error) {
    console.error(`✗ Error processing ${inputPath}:`, error.message);
  }
};

const main = async () => {
  console.log('🖼️  Optimizing hero images for web performance...\n');
  
  // Create optimized directory
  const optimizedDir = path.join(__dirname, 'src/assets/optimized');
  if (!fs.existsSync(optimizedDir)) {
    fs.mkdirSync(optimizedDir, { recursive: true });
  }

  // Optimize hero images at 760px width (2x for 380px display)
  await optimizeImage(
    'src/assets/iphone-screen-repair-macon.jpg',
    'src/assets/optimized/iphone-screen-repair-macon.webp',
    760
  );

  await optimizeImage(
    'src/assets/ipad-screen-repair-macon.jpg',
    'src/assets/optimized/ipad-screen-repair-macon.webp',
    760
  );

  await optimizeImage(
    'src/assets/macbook-repair-macon.jpg',
    'src/assets/optimized/macbook-repair-macon.webp',
    760
  );

  // Optimize logo at 260px width (2x for 130px display)
  if (fs.existsSync('src/assets/logo.png')) {
    await optimizeImage(
      'src/assets/logo.png',
      'src/assets/optimized/logo.webp',
      260
    );
  }

  console.log('\n✅ Image optimization complete!');
  console.log('📦 Optimized images saved to src/assets/optimized/\n');
  console.log('Next steps:');
  console.log('1. Update imports in Home.tsx to use optimized/*.webp');
  console.log('2. Update Navigation.tsx logo import to use optimized/logo.webp');
  console.log('3. Deploy and configure Cache-Control headers');
};

main().catch(console.error);
