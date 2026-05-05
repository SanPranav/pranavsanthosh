const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, '..', 'public', 'images', 'gallery');
const outputFile = path.join(galleryDir, 'manifest.json');
const supportedExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif']);

if (!fs.existsSync(galleryDir)) {
  fs.mkdirSync(galleryDir, { recursive: true });
}

const files = fs
  .readdirSync(galleryDir)
  .filter((file) => supportedExtensions.has(path.extname(file).toLowerCase()))
  .sort((a, b) => a.localeCompare(b))
  .map((name) => ({ name }));

fs.writeFileSync(outputFile, `${JSON.stringify(files, null, 2)}\n`);