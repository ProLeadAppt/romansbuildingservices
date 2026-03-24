import sharp from 'sharp';
import { existsSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const testFile = join(rootDir, 'src', 'assets', 'romans-logo.png');
const outputFile = join(rootDir, 'src', 'assets', 'romans-logo.webp');

console.log('Testing sharp conversion...');
console.log('Input file:', testFile);
console.log('Output file:', outputFile);
console.log('Input exists:', existsSync(testFile));

if (existsSync(testFile)) {
  try {
    await sharp(testFile)
      .webp({ quality: 95 })
      .toFile(outputFile);
    console.log('✓ Conversion successful!');
  } catch (error) {
    console.error('✗ Conversion failed:', error.message);
  }
} else {
  console.error('Input file not found!');
}

