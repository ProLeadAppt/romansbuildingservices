import sharp from 'sharp';
import { existsSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const testPng = join(rootDir, 'src', 'assets', 'romans-logo.png');
const testWebp = join(rootDir, 'src', 'assets', 'romans-logo.webp');

console.log('Testing conversion...');
console.log('PNG exists:', existsSync(testPng));

if (!existsSync(testPng)) {
  console.error('PNG file not found!');
  process.exit(1);
}

try {
  console.log('Starting conversion...');
  const result = await sharp(testPng)
    .webp({ quality: 95 })
    .toFile(testWebp);
  console.log('Success! WebP created:', testWebp);
  console.log('Result:', result);
} catch (error) {
  console.error('Error:', error);
  process.exit(1);
}

