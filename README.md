# AR360° — Marketing Visual, Digitalización Comercial y Producción Audiovisual

Sitio web institucional de AR360°, consultora de Marketing Visual, Digitalización Comercial y Producción Audiovisual con base en Chascomús, Buenos Aires, Argentina.

## 🚀 Stack Tecnológico

- **Framework**: React 19 + Vite 8
- **Estilos**: CSS vanilla (arquitectura BEM-like, responsive mobile-first)
- **Testing**: Vitest + React Testing Library (50 tests)
- **Linting**: ESLint 10 (flat config) + React Hooks + React Refresh
- **Imágenes**: Sharp (optimización WebP en build)
- **Despliegue**: Cloudflare Pages (plan gratuito)
- **CI/CD**: GitHub Actions

## 📁 Estructura del Proyecto

```
src/
├── assets/
│   ├── hero.png
│   └── portfolio/
│       └── optimized/          # Imágenes WebP optimizadas (generadas por script)
├── components/                 # Componentes UI reutilizables
│   ├── Button.jsx
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── SectionHeader.jsx
│   ├── HeroSection.jsx
│   ├── ServicesSection.jsx
│   ├── ExperienciasSection.jsx
│   ├── SectoresSection.jsx
│   ├── PorQueSection.jsx
│   ├── ProcesoSection.jsx
│   ├── ContactSection.jsx
│   └── index.js               # Barrel export
├── data/                       # Datos puros (separation of concerns)
│   ├── experiencias.js
│   ├── servicios.js
│   ├── sectores.js
│   ├── razones.js
│   ├── proceso.js
│   └── index.js
├── pages/                      # Páginas (composición de secciones)
│   └── Home.jsx
├── test/
│   └── setup.js               # Config global de tests (jest-dom, mocks)
├── App.jsx                     # Raíz: renderiza <Home />
├── main.jsx                    # Entry point
├── App.css                     # Estilos globales
└── index.css                   # Reset + variables CSS (legacy)

scripts/
├── lint.js                     # ESLint programático (workaround CLI v10)
├── optimize-images.js          # Sharp: redimensiona + WebP (max 1200px, q75)
└── lint.js                     # Test runner personalizado

.github/
├── workflows/
│   ├── ci.yml                  # Lint + Test + Build + Verificación dist
│   └── deploy.yml              # Deploy a Cloudflare Pages
└── dependabot.yml              # Updates semanales automáticos
```

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Servidor de desarrollo (Vite HMR)

# Calidad de código
npm run lint             # ESLint (config flat, ignora test files)
npm run test             # Vitest run (50 tests)
npm run test:watch       # Vitest watch mode
npm run test:coverage    # Vitest + coverage v8 (html/json/text)

# Build & Preview
npm run build            # Build producción (dist/)
npm run preview          # Preview build local

# Optimización de imágenes (manual, cuando se agregan nuevas)
node scripts/optimize-images.js
```

## ✅ Pipeline CI (`.github/workflows/ci.yml`)

| Job | Qué hace |
|-----|----------|
| `lint` | `npm run lint` — ESLint flat config |
| `test` | `npm run test` — 50 tests Vitest + upload coverage |
| `build` | `npm run build` — Genera `dist/` + upload artifact |
| `check-dist` | Verifica: HTML metadata (lang=es, OG, Twitter, JSON-LD), assets JS/CSS, imágenes WebP ≤200KB |

## 🚀 Deploy a Cloudflare Pages (`.github/workflows/deploy.yml`)

**Requisitos previos** (configurar en GitHub Settings → Secrets):
- `CLOUDFLARE_API_TOKEN` — Token con permisos Pages
- `CLOUDFLARE_ACCOUNT_ID` — Account ID de Cloudflare

**Trigger**: Push a `master`/`main` o `workflow_dispatch` manual.

**Pasos**: lint → test → build → `cloudflare/pages-action@v1` deploya `dist/` al proyecto `ar360-web`.

## 🖼️ Optimización de Imágenes

```bash
# Agregar imágenes originales a src/assets/portfolio/ (PNG/JPG)
# Ejecutar:
node scripts/optimize-images.js

# Genera en src/assets/portfolio/optimized/:
# - WebP, max 1200x900, quality 75
# - Reducción típica: 95%+ (ej. 3.1MB → 142KB)
# Actualiza imports en data/experiencias.js si son nuevas experiencias
```

## 🧪 Testing

```bash
# Ejecutar todos los tests
npm run test

# Coverage report (abrir coverage/index.html)
npm run test:coverage
```

**Cobertura actual (50 tests)**:
- `Button`: 8 tests (variants, href, onClick, className, children, type)
- `Data exports`: 18 tests (experiencias, servicios, sectores, razones, proceso)
- `ServicesSection`: 7 tests
- `ExperienciasSection`: 8 tests
- `ContactSection`: 9 tests (formulario, validación, WhatsApp URL, éxito, reset)

## 🌐 SEO & Metadata (Build Verificado)

`dist/index.html` incluye:
- `<html lang="es">`
- Title: `AR360° | Marketing Visual, Recorridos 360° y Producción Audiovisual`
- Meta description
- **Open Graph**: og:title, og:description, og:image, og:url
- **Twitter Card**: summary_large_image
- **JSON-LD**: ProfessionalService (Schema.org) con teléfono, dirección, servicios

## 📦 Dependabot

Updates semanales (lunes 9am ART):
- `development-dependencies`: @types, @vitejs, eslint, vitest, testing-library, jsdom, sharp (minor/patch)
- `react-ecosystem`: react, react-dom (minor/patch)
- PRs agrupados, límite 5 abiertos, reviewers automáticos

## 💰 Costos Estimados (Mensual)

| Concepto | Costo |
|----------|-------|
| Cloudflare Pages | Gratis (hasta 500 builds/mes, bandwidth ilimitado) |
| Dominio `ar360.com.ar` | ~ARS 3.000/año (NIC.AR) |
| GitHub Actions | Gratis (repos públicos) |
| **Total** | **~ARS 250/mes** (bien bajo presupuesto ARS 10.000) |

## 📝 Convenciones

- **Commits**: Conventional Commits (`feat:`, `fix:`, `perf:`, `refactor:`, `chore:`, `test:`, `docs:`)
- **Branches**: `feature/<nombre>`, `fix/<nombre>`, `chore/<nombre>`
- **Imports**: Barrel exports desde `components/index.js` y `data/index.js`
- **CSS**: BEM-like, mobile-first, variables CSS para theming
- **Tests**: Co-locados (`*.test.jsx` junto al componente),命名 `describe` + `test`

## 🔗 Enlaces de Producción

- **Sitio**: https://ar360.com.ar (tras deploy)
- **Repo**: https://github.com/maxi-chascomus/ar360-web
- **Cloudflare Pages**: Dashboard → Pages → ar360-web

---

## 📋 Roadmap Próximos Pasos

- [ ] Páginas de detalle por servicio (`/servicios/recorridos-360`)
- [ ] Página de detalle de experiencia (`/experiencia/:id`)
- [ ] Blog/Recursos (`/recursos`)
- [ ] Lazy loading secciones below-the-fold (`React.lazy` + `Suspense`)
- [ ] Imagen OG real (`public/og-image.jpg` 1200x630)
- [ ] Migración gradual a TypeScript (empezar por `data/` y `components/`)
- [ ] E2E tests con Playwright (flujo formulario → WhatsApp)