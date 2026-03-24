import sharp from 'sharp';
import { readdir, mkdir, stat, unlink } from 'fs/promises';
import { join, dirname, basename, extname } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// Configuration
const CONFIG = {
  // Main site images (hero, about, etc.) - high quality, max 1400px wide
  siteImages: {
    dir: join(rootDir, 'src', 'assets'),
    quality: 80,
    maxWidth: 1400,
    maxHeight: 900,
  },
  // Gallery images (Instagram) - move to public, generate thumb + full
  galleryImages: {
    sourceDir: join(rootDir, 'src', 'assets', 'images'),
    outputDir: join(rootDir, 'public', 'gallery'),
    thumbQuality: 75,
    thumbWidth: 600,
    fullQuality: 80,
    fullWidth: 1200,
    fullHeight: 900,
  },
  // Lovable uploads - convert in place
  lovableUploads: {
    dir: join(rootDir, 'public', 'lovable-uploads'),
    quality: 80,
    maxWidth: 1200,
    maxHeight: 900,
  },
  // PWA icons - regenerate from best source
  icons: {
    dir: join(rootDir, 'public', 'icons'),
    sizes: [72, 96, 128, 144, 152, 192, 384, 512],
  },
};

let stats = { converted: 0, skipped: 0, errors: 0, savedBytes: 0 };

async function convertToWebP(inputPath, outputPath, options = {}) {
  const { quality = 80, maxWidth, maxHeight } = options;
  try {
    const inputStat = await stat(inputPath);
    let pipeline = sharp(inputPath);

    // Get metadata to check dimensions
    const metadata = await sharp(inputPath).metadata();

    // Skip tiny/corrupt files
    if (inputStat.size < 100) {
      console.log(`  SKIP (too small): ${basename(inputPath)} (${inputStat.size}B)`);
      stats.skipped++;
      return false;
    }

    // Resize if needed (maintain aspect ratio)
    if (maxWidth || maxHeight) {
      const needsResize =
        (maxWidth && metadata.width > maxWidth) ||
        (maxHeight && metadata.height > maxHeight);
      if (needsResize) {
        pipeline = pipeline.resize({
          width: maxWidth,
          height: maxHeight,
          fit: 'inside',
          withoutEnlargement: true,
        });
      }
    }

    await pipeline.webp({ quality, effort: 6 }).toFile(outputPath);

    const outputStat = await stat(outputPath);
    const saved = inputStat.size - outputStat.size;
    const pct = ((saved / inputStat.size) * 100).toFixed(1);

    console.log(
      `  OK: ${basename(inputPath)} (${formatSize(inputStat.size)}) -> ${basename(outputPath)} (${formatSize(outputStat.size)}) [${pct}% smaller]`
    );
    stats.converted++;
    stats.savedBytes += Math.max(0, saved);
    return true;
  } catch (error) {
    console.error(`  ERROR: ${basename(inputPath)} - ${error.message}`);
    stats.errors++;
    return false;
  }
}

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes}B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)}KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
}

function getWebPPath(filePath) {
  return filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
}

async function getImageFiles(dir, recursive = false) {
  const files = [];
  if (!existsSync(dir)) return files;

  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isFile() && /\.(jpg|jpeg|png)$/i.test(entry.name)) {
      files.push(fullPath);
    } else if (recursive && entry.isDirectory()) {
      files.push(...(await getImageFiles(fullPath, true)));
    }
  }
  return files;
}

// ============================================
// 1. Convert site images (src/assets/*.jpg/png)
// ============================================
async function convertSiteImages() {
  console.log('\n=== Converting site images (src/assets/) ===');
  const { dir, quality, maxWidth, maxHeight } = CONFIG.siteImages;
  const files = await getImageFiles(dir);

  if (files.length === 0) {
    console.log('  No images found');
    return;
  }

  for (const file of files) {
    const webpPath = getWebPPath(file);
    await convertToWebP(file, webpPath, { quality, maxWidth, maxHeight });
  }
}

// ============================================
// 2. Convert gallery images (src/assets/images/ -> public/gallery/)
// ============================================
async function convertGalleryImages() {
  console.log('\n=== Converting gallery images (344 Instagram photos) ===');
  const { sourceDir, outputDir, thumbQuality, thumbWidth, fullQuality, fullWidth, fullHeight } =
    CONFIG.galleryImages;

  // Create output dirs
  const thumbDir = join(outputDir, 'thumbs');
  const fullDir = join(outputDir, 'full');
  await mkdir(thumbDir, { recursive: true });
  await mkdir(fullDir, { recursive: true });

  const files = await getImageFiles(sourceDir);
  console.log(`  Found ${files.length} images to convert`);

  let count = 0;
  for (const file of files) {
    count++;
    const name = basename(file, extname(file));
    const thumbPath = join(thumbDir, `${name}.webp`);
    const fullPath = join(fullDir, `${name}.webp`);

    if (count % 50 === 0) {
      console.log(`  Progress: ${count}/${files.length}`);
    }

    // Generate thumbnail (small, for grid)
    try {
      await sharp(file)
        .resize({ width: thumbWidth, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: thumbQuality, effort: 6 })
        .toFile(thumbPath);
    } catch (e) {
      console.error(`  ERROR thumb: ${basename(file)} - ${e.message}`);
      stats.errors++;
      continue;
    }

    // Generate full-size (for lightbox)
    try {
      await sharp(file)
        .resize({ width: fullWidth, height: fullHeight, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: fullQuality, effort: 6 })
        .toFile(fullPath);
      stats.converted++;
    } catch (e) {
      console.error(`  ERROR full: ${basename(file)} - ${e.message}`);
      stats.errors++;
    }
  }

  // Calculate savings
  const origFiles = await getImageFiles(sourceDir);
  let origTotal = 0;
  for (const f of origFiles) {
    origTotal += (await stat(f)).size;
  }

  let newTotal = 0;
  for (const dir of [thumbDir, fullDir]) {
    const webps = await readdir(dir);
    for (const f of webps) {
      newTotal += (await stat(join(dir, f))).size;
    }
  }

  console.log(`  Gallery total: ${formatSize(origTotal)} originals -> ${formatSize(newTotal)} WebP (thumbs + full)`);
}

// ============================================
// 3. Convert lovable-uploads
// ============================================
async function convertLovableUploads() {
  console.log('\n=== Converting lovable-uploads ===');
  const { dir, quality, maxWidth, maxHeight } = CONFIG.lovableUploads;
  const files = await getImageFiles(dir);

  if (files.length === 0) {
    console.log('  No images found');
    return;
  }

  for (const file of files) {
    const webpPath = getWebPPath(file);
    // Check if WebP already exists (some are already .webp)
    if (existsSync(webpPath) && webpPath !== file) {
      console.log(`  SKIP (webp exists): ${basename(file)}`);
      stats.skipped++;
      continue;
    }
    await convertToWebP(file, webpPath, { quality, maxWidth, maxHeight });
  }
}

// ============================================
// 4. Regenerate PWA icons
// ============================================
async function regenerateIcons() {
  console.log('\n=== Regenerating PWA icons ===');
  const { dir, sizes } = CONFIG.icons;

  // Find the best source image for icons (logo)
  const logoPath = join(rootDir, 'src', 'assets', 'romans-logo.png');
  if (!existsSync(logoPath)) {
    console.log('  SKIP: No logo source found');
    return;
  }

  for (const size of sizes) {
    const outputPath = join(dir, `icon-${size}x${size}.png`);
    try {
      await sharp(logoPath)
        .resize(size, size, { fit: 'contain', background: { r: 10, g: 46, b: 118, alpha: 1 } })
        .png({ quality: 90, compressionLevel: 9 })
        .toFile(outputPath + '.tmp');

      // Replace
      if (existsSync(outputPath)) await unlink(outputPath);
      const { rename } = await import('fs/promises');
      await rename(outputPath + '.tmp', outputPath);

      const s = await stat(outputPath);
      console.log(`  OK: icon-${size}x${size}.png (${formatSize(s.size)})`);
    } catch (e) {
      console.error(`  ERROR: icon-${size}x${size}.png - ${e.message}`);
    }
  }
}

// ============================================
// Main
// ============================================
async function main() {
  console.log('Romans Building Services - Image Optimisation');
  console.log('=============================================');

  const start = Date.now();

  await convertSiteImages();
  await convertGalleryImages();
  await convertLovableUploads();
  await regenerateIcons();

  const elapsed = ((Date.now() - start) / 1000).toFixed(1);

  console.log('\n=============================================');
  console.log('DONE');
  console.log(`  Converted: ${stats.converted}`);
  console.log(`  Skipped: ${stats.skipped}`);
  console.log(`  Errors: ${stats.errors}`);
  console.log(`  Space saved: ${formatSize(stats.savedBytes)}`);
  console.log(`  Time: ${elapsed}s`);
}

main().catch(console.error);
