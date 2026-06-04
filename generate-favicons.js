import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const PUBLIC_DIR = path.resolve('public');
const LOGO_PATH = path.join(PUBLIC_DIR, 'logo.png'); // Also support logo.jpg

async function generateFavicons() {
  // Find the logo file
  let sourceFile = LOGO_PATH;
  if (!fs.existsSync(sourceFile)) {
    sourceFile = path.join(PUBLIC_DIR, 'logo.jpg');
    if (!fs.existsSync(sourceFile)) {
      console.error('Error: Please place your logo image in the public folder as "logo.png" or "logo.jpg"');
      process.exit(1);
    }
  }

  console.log(`Found logo at: ${sourceFile}. Generating favicons...`);

  try {
    // 1. Generate 32x32 standard png (used as fallback for .ico)
    await sharp(sourceFile)
      .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .toFile(path.join(PUBLIC_DIR, 'favicon.png'));
    
    // Copy the favicon.png to favicon.ico for legacy support
    fs.copyFileSync(path.join(PUBLIC_DIR, 'favicon.png'), path.join(PUBLIC_DIR, 'favicon.ico'));

    // 2. Generate Apple Touch Icon (180x180)
    await sharp(sourceFile)
      .resize(180, 180, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
      .toFile(path.join(PUBLIC_DIR, 'apple-touch-icon.png'));

    // 3. Generate PWA Icons (192x192 and 512x512)
    await sharp(sourceFile)
      .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .toFile(path.join(PUBLIC_DIR, 'pwa-192x192.png'));

    await sharp(sourceFile)
      .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .toFile(path.join(PUBLIC_DIR, 'pwa-512x512.png'));

    console.log('✅ Favicons generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons();
