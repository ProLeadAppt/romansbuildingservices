import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join, dirname, basename } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

async function convertFile(pngPath) {
  const webpPath = pngPath.replace(/\.png$/i, '.webp');
  try {
    console.log(`Converting: ${basename(pngPath)}`);
    await sharp(pngPath).webp({ quality: 95 }).toFile(webpPath);
    console.log(`✓ Created: ${basename(webpPath)}`);
    return true;
  } catch (error) {
    console.error(`✗ Error: ${basename(pngPath)} - ${error.message}`);
    return false;
  }
}

async function processDirectory(dir) {
  try {
    const files = await readdir(dir, { withFileTypes: true });
    let count = 0;
    
    for (const file of files) {
      if (file.isFile() && file.name.toLowerCase().endsWith('.png')) {
        const fullPath = join(dir, file.name);
        if (await convertFile(fullPath)) {
          count++;
        }
      }
    }
    return count;
  } catch (error) {
    console.error(`Error processing ${dir}:`, error.message);
    return 0;
  }
}

async function main() {
  console.log('PNG to WebP Conversion\n');
  
  const assetsDir = join(rootDir, 'src', 'assets');
  const uploadsDir = join(rootDir, 'public', 'lovable-uploads');
  
  let total = 0;
  
  if (existsSync(assetsDir)) {
    console.log(`Processing: ${assetsDir}`);
    total += await processDirectory(assetsDir);
    console.log('');
  }
  
  if (existsSync(uploadsDir)) {
    console.log(`Processing: ${uploadsDir}`);
    total += await processDirectory(uploadsDir);
    console.log('');
  }
  
  console.log(`\nTotal converted: ${total} files`);
}

main().catch(console.error);

