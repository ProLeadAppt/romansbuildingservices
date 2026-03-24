import { readdir, readFile, writeFile } from 'fs/promises';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const replacements = [
  // Vite imports: @/assets/*.jpg -> @/assets/*.webp
  { from: /@\/assets\/([\w-]+)\.(jpg|jpeg|png)/g, to: '@/assets/$1.webp' },
  // String paths: /src/assets/*.jpg|png -> /src/assets/*.webp
  { from: /\/src\/assets\/([\w-]+)\.(jpg|jpeg|png)/g, to: '/src/assets/$1.webp' },
  // Lovable uploads: /lovable-uploads/*.jpg|png -> /lovable-uploads/*.webp
  { from: /\/lovable-uploads\/([\w()\s~.-]+)\.(jpg|jpeg|png)/g, to: '/lovable-uploads/$1.webp' },
];

let filesModified = 0;
let totalReplacements = 0;

async function processDir(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      // Skip node_modules, .git, dist, public/gallery
      if (['node_modules', '.git', 'dist', 'gallery'].includes(entry.name)) continue;
      await processDir(fullPath);
    } else if (['.tsx', '.ts', '.jsx', '.js', '.html', '.css'].includes(extname(entry.name))) {
      await processFile(fullPath);
    }
  }
}

async function processFile(filePath) {
  const content = await readFile(filePath, 'utf-8');
  let newContent = content;
  let count = 0;

  for (const { from, to } of replacements) {
    const regex = new RegExp(from.source, from.flags);
    const matches = newContent.match(regex);
    if (matches) {
      count += matches.length;
      newContent = newContent.replace(regex, to);
    }
  }

  if (count > 0) {
    await writeFile(filePath, newContent, 'utf-8');
    const rel = filePath.replace(rootDir + '\\', '').replace(rootDir + '/', '');
    console.log(`  ${rel}: ${count} replacement(s)`);
    filesModified++;
    totalReplacements += count;
  }
}

async function main() {
  console.log('Updating image references to WebP...\n');

  await processDir(join(rootDir, 'src'));
  await processDir(join(rootDir, 'public'));
  await processFile(join(rootDir, 'index.html'));

  console.log(`\nDone: ${totalReplacements} replacements across ${filesModified} files`);
}

main().catch(console.error);
