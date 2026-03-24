import sharp from 'sharp';
import { readdir, writeFile } from 'fs/promises';
import { join, dirname, basename } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const results = [];

async function convertFile(pngPath) {
  const webpPath = pngPath.replace(/\.png$/i, '.webp');
  try {
    await sharp(pngPath).webp({ quality: 95 }).toFile(webpPath);
    results.push({ png: basename(pngPath), webp: basename(webpPath), status: 'success' });
    return true;
  } catch (error) {
    results.push({ png: basename(pngPath), status: 'error', error: error.message });
    return false;
  }
}

async function processDirectory(dir) {
  try {
    const files = await readdir(dir, { withFileTypes: true });
    for (const file of files) {
      if (file.isFile() && file.name.toLowerCase().endsWith('.png')) {
        const fullPath = join(dir, file.name);
        await convertFile(fullPath);
      }
    }
  } catch (error) {
    results.push({ dir, status: 'error', error: error.message });
  }
}

async function main() {
  const assetsDir = join(rootDir, 'src', 'assets');
  const uploadsDir = join(rootDir, 'public', 'lovable-uploads');
  
  if (existsSync(assetsDir)) {
    await processDirectory(assetsDir);
  }
  
  if (existsSync(uploadsDir)) {
    await processDirectory(uploadsDir);
  }
  
  // Write results to file
  await writeFile(
    join(rootDir, 'conversion-results.json'),
    JSON.stringify(results, null, 2)
  );
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});

