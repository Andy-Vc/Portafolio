const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/assets');

async function convertFolder(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await convertFolder(fullPath);
      continue;
    }

    const ext = path.extname(file).toLowerCase();

    if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;

    const basePath = fullPath.replace(ext, '');

    await sharp(fullPath)
      .avif({ quality: 65 })
      .toFile(`${basePath}.avif`);

    await sharp(fullPath)
      .webp({ quality: 80 })
      .toFile(`${basePath}.webp`);

    console.log(`✔ ${file} → AVIF + WebP`);

    // Elimina el original (opcional)
    // fs.unlinkSync(fullPath);
  }
}

convertFolder(inputDir)
  .then(() => console.log('✅ Conversión terminada'))
  .catch(console.error);