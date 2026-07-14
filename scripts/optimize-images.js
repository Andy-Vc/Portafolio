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

    const avifPath = `${basePath}.avif`;
    const webpPath = `${basePath}.webp`;

    if (fs.existsSync(avifPath) && fs.existsSync(webpPath)) {
      console.log(`⏭ ${file} ya convertido`);
      continue;
    }

    await sharp(fullPath)
      .avif({ quality: 65 })
      .toFile(avifPath);

    await sharp(fullPath)
      .webp({ quality: 80 })
      .toFile(webpPath);

    console.log(`✔ ${file} → AVIF + WebP`);
  }
}

convertFolder(inputDir)
  .then(() => console.log('✅ Conversión terminada'))
  .catch(console.error);