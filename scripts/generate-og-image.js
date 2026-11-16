import sharp from 'sharp';

const WIDTH = 1200;
const HEIGHT = 630;
const OUTPUT_PATH = 'public/og-image.jpg';

// Nota: librsvg (usado por sharp) no resuelve emoji ni "system-ui" de forma
// confiable. Por eso los iconos son vectores y la fuente es explícita (Arial).
const FONT = 'Arial, Helvetica, sans-serif';
const ACCENT = '#4ffcff';

const iconos = {
  recorridos: `<circle cx="0" cy="0" r="9" fill="none" stroke="${ACCENT}" stroke-width="1.6"/>
    <path d="M -6 4 A 9 9 0 0 0 6 4" fill="none" stroke="${ACCENT}" stroke-width="1.6" stroke-linecap="round"/>`,
  fotografia: `<rect x="-10" y="-7" width="20" height="14" rx="2" fill="none" stroke="${ACCENT}" stroke-width="1.6"/>
    <circle cx="0" cy="0" r="3.4" fill="none" stroke="${ACCENT}" stroke-width="1.6"/>
    <circle cx="7" cy="-4" r="1" fill="${ACCENT}"/>`,
  audiovisual: `<rect x="-10" y="-7" width="20" height="14" rx="2" fill="none" stroke="${ACCENT}" stroke-width="1.6"/>
    <path d="M -3 -3 L 5 0 L -3 3 Z" fill="${ACCENT}"/>`,
  redes: `<path d="M -7 -5 L 0 6 L 7 -5 M -7 -5 L 7 -5" stroke="${ACCENT}" stroke-width="1.2" fill="none"/>
    <circle cx="-7" cy="-5" r="2.6" fill="#041019" stroke="${ACCENT}" stroke-width="1.4"/>
    <circle cx="7" cy="-5" r="2.6" fill="#041019" stroke="${ACCENT}" stroke-width="1.4"/>
    <circle cx="0" cy="6" r="2.6" fill="#041019" stroke="${ACCENT}" stroke-width="1.4"/>`,
};

function servicio(x, y, icono, texto) {
  return `
    <g transform="translate(${x}, ${y})">
      <g transform="translate(-92, 0)">${iconos[icono]}</g>
      <text x="-70" y="6" font-family="${FONT}" font-size="19" fill="#9fbcc3">${texto}</text>
    </g>`;
}

async function generateOGImage() {
  console.log('Generando placeholder OG image (1200x630)...');

  const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
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

  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>

  <circle cx="150" cy="150" r="200" fill="url(#accent)" opacity="0.08"/>
  <circle cx="1050" cy="480" r="180" fill="url(#accent)" opacity="0.06"/>

  <line x1="100" y1="315" x2="1100" y2="315" stroke="url(#accent)" stroke-width="2" opacity="0.3"/>

  <text x="600" y="240" font-family="${FONT}" font-size="72" font-weight="bold" fill="#4ffcff" text-anchor="middle" letter-spacing="-2">
    AR360°
  </text>

  <text x="600" y="305" font-family="${FONT}" font-size="24" fill="#b9d5db" text-anchor="middle" opacity="0.9">
    Marketing Visual · Digitalización · Audiovisual
  </text>

  ${servicio(430, 400, 'recorridos', 'Recorridos 360°')}
  ${servicio(880, 400, 'fotografia', 'Fotografía HDR')}
  ${servicio(430, 445, 'audiovisual', 'Producción Audiovisual')}
  ${servicio(880, 445, 'redes', 'Contenido Redes')}

  <text x="600" y="520" font-family="${FONT}" font-size="16" fill="#75939d" text-anchor="middle">
    Chascomús · Buenos Aires · Argentina
  </text>

  <text x="600" y="560" font-family="${FONT}" font-size="18" fill="#4ffcff" text-anchor="middle" font-weight="bold">
    ar360.com.ar
  </text>

  <rect x="1020" y="20" width="160" height="36" rx="18" fill="#4ffcff" opacity="0.2"/>
  <text x="1100" y="44" font-family="${FONT}" font-size="13" font-weight="bold" fill="#4ffcff" text-anchor="middle">
    Placeholder
  </text>
</svg>
`;

  await sharp(Buffer.from(svg))
    .resize(WIDTH, HEIGHT)
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(OUTPUT_PATH);

  console.log(`OK - ${OUTPUT_PATH} (${WIDTH}x${HEIGHT})`);
}

generateOGImage().catch((error) => {
  console.error(error);
  process.exit(1);
});