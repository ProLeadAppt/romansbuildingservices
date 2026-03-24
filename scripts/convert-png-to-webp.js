import sharp from 'sharp';
import { readdir, stat, unlink } from 'fs/promises';
import { join, dirname, basename, extname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// Directories to scan for PNG files
const scanDirs = [
  join(rootDir, 'src', 'assets'),
  join(rootDir, 'public', 'lovable-uploads')
];

// Quality setting for WebP conversion
const WEBP_QUALITY = 95;

// Track converted files
const convertedFiles = [];
const failedFiles = [];

/**
 * Recursively find all PNG files in a directory
 */
async function findPngFiles(dir) {
  const files = [];
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      
      if (entry.isDirectory()) {
        // Skip icon directories
        if (entry.name === 'icons' || fullPath.includes('/icons/')) {
          continue;
        }
        const subFiles = await findPngFiles(fullPath);
        files.push(...subFiles);
      } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.png')) {
        // Skip icon files
        if (!fullPath.includes('/icons/')) {
          files.push(fullPath);
        }
      }
    }
  } catch (error) {
    if (error.code !== 'ENOENT') {
      console.error(`Error reading directory ${dir}:`, error.message);
    }
  }
  
  return files;
}

/**
 * Convert a PNG file to WebP
 */
async function convertToWebP(pngPath) {
  try {
    const webpPath = pngPath.replace(/\.png$/i, '.webp');
    
    console.log(`Converting: ${pngPath} -> ${webpPath}`);
    
    await sharp(pngPath)
      .webp({ quality: WEBP_QUALITY })
      .toFile(webpPath);
    
    convertedFiles.push({ png: pngPath, webp: webpPath });
    console.log(`✓ Successfully converted: ${basename(pngPath)}`);
    
    return true;
  } catch (error) {
    console.error(`✗ Failed to convert ${pngPath}:`, error.message);
    failedFiles.push(pngPath);
    return false;
  }
}

/**
 * Main conversion function
 */
async function main() {
  console.log('Starting PNG to WebP conversion...\n');
  console.log(`Quality setting: ${WEBP_QUALITY}%\n`);
  
  // Find all PNG files
  let allPngFiles = [];
  for (const dir of scanDirs) {
    console.log(`Scanning directory: ${dir}`);
    const files = await findPngFiles(dir);
    allPngFiles.push(...files);
    console.log(`Found ${files.length} PNG file(s) in ${dir}\n`);
  }
  
  if (allPngFiles.length === 0) {
    console.log('No PNG files found to convert.');
    return;
  }
  
  console.log(`Total PNG files to convert: ${allPngFiles.length}\n`);
  console.log('Starting conversion...\n');
  
  // Convert all files
  for (const pngFile of allPngFiles) {
    await convertToWebP(pngFile);
  }
  
  // Summary
  console.log('\n' + '='.repeat(50));
  console.log('Conversion Summary:');
  console.log('='.repeat(50));
  console.log(`Total files processed: ${allPngFiles.length}`);
  console.log(`Successfully converted: ${convertedFiles.length}`);
  console.log(`Failed: ${failedFiles.length}`);
  
  if (convertedFiles.length > 0) {
    console.log('\nConverted files:');
    convertedFiles.forEach(({ png, webp }) => {
      console.log(`  ${basename(png)} -> ${basename(webp)}`);
    });
  }
  
  if (failedFiles.length > 0) {
    console.log('\nFailed files:');
    failedFiles.forEach(file => {
      console.log(`  ${file}`);
    });
  }
  
  console.log('\nConversion complete!');
  console.log('\nNext steps:');
  console.log('1. Update all code references from .png to .webp');
  console.log('2. Delete original PNG files');
}

// Run the conversion
main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});

