import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

sharp.cache(false);

const assetsDir = 'c:/Users/User/OneDrive/Área de Trabalho/PROJETOS - OWN/own-barber-club/src/assets';
const files = fs.readdirSync(assetsDir);

const galleryFiles = files.filter(f => f.toLowerCase().startsWith('galeria-'));

async function compress() {
  console.log(`Encontradas ${galleryFiles.length} imagens de galeria para processar...`);

  for (const file of galleryFiles) {
    const filePath = path.join(assetsDir, file);
    const tempPath = path.join(assetsDir, 'temp-' + file);
    const stats = fs.statSync(filePath);
    const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);

    console.log(`Processando ${file} (${sizeMB} MB)...`);

    try {
      await sharp(filePath)
        .resize({ width: 1600, withoutEnlargement: true })
        .jpeg({ quality: 80, mozjpeg: true })
        .toFile(tempPath);

      // Remove original e renomeia o temporário
      fs.unlinkSync(filePath);
      fs.renameSync(tempPath, filePath);
      
      const newStats = fs.statSync(filePath);
      const newSizeKB = (newStats.size / 1024).toFixed(2);
      console.log(`✓ ${file} finalizado: ${newSizeKB} KB`);
    } catch (err) {
      console.error(`Erro ao processar ${file}:`, err);
      if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
    }
  }

  console.log('\nTodas as imagens foram otimizadas!');
}

compress();
