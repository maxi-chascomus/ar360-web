import sharp from 'sharp';
import { readdirSync, statSync, existsSync, mkdirSync } from 'fs';
import { join, basename, extname } from 'path';

const INPUT_DIR = 'src/assets/portfolio';
const OUTPUT_DIR = 'src/assets/portfolio/optimized';
const MAX_WIDTH = 1200;
const MAX_HEIGHT = 900;
const WEBP_QUALITY = 75;
const JPEG_QUALITY = 80;

const validExtensions = ['.png', '.jpg', '.jpeg', '.webp'];

async function optimizeImage(inputPath, outputPath) {
  const stats = statSync(inputPath);
  const originalSize = stats.size;

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    let pipeline = image;

    // Resize if larger than max dimensions
    if (metadata.width > MAX_WIDTH || metadata.height > MAX_HEIGHT) {
      pipeline = pipeline.resize(MAX_WIDTH, MAX_HEIGHT, {
        fit: 'inside',
        withoutEnlargement: true,
      });
    }

    // Convert to WebP
    pipeline = pipeline.webp({ quality: WEBP_QUALITY, effort: 6 });

    await pipeline.toFile(outputPath);

    const optimizedStats = statSync(outputPath);
    const optimizedSize = optimizedStats.size;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);

    console.log(`✅ ${basename(inputPath)} → ${basename(outputPath)}`);
    console.log(`   ${(originalSize / 1024).toFixed(0)} KB → ${(optimizedSize / 1024).toFixed(0)} KB (${savings}% reduction)`);

    return { originalSize, optimizedSize, savings: parseFloat(savings) };
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
    return null;
  }
}

async function main() {
  console.log('🖼️  Optimizando imágenes de portfolio...\n');

  if (!existsSync(INPUT_DIR)) {
    console.error(`❌ Directorio no encontrado: ${INPUT_DIR}`);
    process.exit(1);
  }

  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const files = readdirSync(INPUT_DIR)
    .filter(f => validExtensions.includes(extname(f).toLowerCase()))
    .filter(f => !f.startsWith('.'));

  if (files.length === 0) {
    console.log('No se encontraron imágenes para optimizar.');
    return;
  }

  console.log(`Encontradas ${files.length} imagen(es) para optimizar.\n`);

  let totalOriginal = 0;
  let totalOptimized = 0;
  let successCount = 0;

  for (const file of files) {
    const inputPath = join(INPUT_DIR, file);
    const name = basename(file, extname(file));
    const outputPath = join(OUTPUT_DIR, `${name}.webp`);

    const result = await optimizeImage(inputPath, outputPath);
    if (result) {
      totalOriginal += result.originalSize;
      totalOptimized += result.optimizedSize;
      successCount++;
    }
    console.log('');
  }

  const totalSavings = ((totalOriginal - totalOptimized) / totalOriginal * 100).toFixed(1);
  console.log('📊 Resumen:');
  console.log(`   Imágenes procesadas: ${successCount}/${files.length}`);
  console.log(`   Tamaño original total: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Tamaño optimizado total: ${(totalOptimized / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Ahorro total: ${totalSavings}%`);

  if (successCount > 0) {
    console.log('\n✨ Optimización completada. Las imágenes WebP están en:', OUTPUT_DIR);
    console.log('   Actualiza App.jsx para usar las versiones .webp optimizadas.');
  }
}

main().catch(console.error);