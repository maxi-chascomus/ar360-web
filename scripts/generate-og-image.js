import sharp from 'sharp';
import { writeFileSync } from 'fs';

const WIDTH = 1200;
const HEIGHT = 630;
const OUTPUT_PATH = 'public/og-image.jpg';

async function generateOGImage() {
  console.log('🎨 Generando placeholder OG image (1200x630)...');

  // Crear SVG como buffer
  const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <!-- Fondo degradado AR360° -->
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#031019"/>
      <stop offset="50%" style="stop-color:#073044"/>
      <stop offset="100%" style="stop-color:#041019"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#4ffcff"/>
      <stop offset="100%" style="stop-color:#0098b4"/>
    </linearGradient>
  </defs>
  
  <!-- Fondo -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
  
  <!-- Elementos decorativos sutiles -->
  <circle cx="150" cy="150" r="200" fill="url(#accent)" opacity="0.08"/>
  <circle cx="1050" cy="480" r="180" fill="url(#accent)" opacity="0.06"/>
  
  <!-- Línea divisoria -->
  <line x1="100" y1="315" x2="1100" y2="315" stroke="url(#accent)" stroke-width="2" opacity="0.3"/>
  
  <!-- Logo AR360° -->
  <text x="600" y="240" font-family="system-ui, sans-serif" font-size="72" font-weight="800" fill="#4ffcff" text-anchor="middle" letter-spacing="-2">
    AR360°
  </text>
  
  <!-- Tagline -->
  <text x="600" y="305" font-family="system-ui, sans-serif" font-size="24" fill="#b9d5db" text-anchor="middle" opacity="0.9">
    Marketing Visual · Digitalización · Audiovisual
  </text>
  
  <!-- Servicios principales -->
  <g font-family="system-ui, sans-serif" font-size="18" fill="#9fbcc3" text-anchor="middle">
    <text x="300" y="400">🏠 Recorridos 360°</text>
    <text x="900" y="400">📸 Fotografía HDR</text>
    <text x="300" y="440">🎬 Producción Audiovisual</text>
    <text x="900" y="440">📱 Contenido Redes</text>
  </g>
  
  <!-- Ubicación -->
  <text x="600" y="520" font-family="system-ui, sans-serif" font-size="16" fill="#75939d" text-anchor="middle">
    Chascomús · Buenos Aires · Argentina
  </text>
  
  <!-- URL -->
  <text x="600" y="560" font-family="system-ui, sans-serif" font-size="18" fill="#4ffcff" text-anchor="middle" font-weight="600">
    ar360.com.ar
  </text>
  
  <!-- Badge "Placeholder" -->
  <rect x="1020" y="20" width="160" height="36" rx="18" fill="#4ffcff" opacity="0.2"/>
  <text x="1100" y="44" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#4ffcff" text-anchor="middle">
    Placeholder
  </text>
</svg>
`;

  // Convertir SVG a JPG usando sharp
  const svgBuffer = Buffer.from(svg);
  
  await sharp(svgBuffer)
    .resize(WIDTH, HEIGHT)
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(OUTPUT_PATH);

  console.log(`✅ OG image generada: ${OUTPUT_PATH}`);
  console.log(`📐 Dimensiones: ${WIDTH}x${HEIGHT}`);
  console.log(`💡 Reemplaza ${OUTPUT_PATH} con tu imagen final cuando la tengas lista.`);
}

generateOGImage().catch(console.error);