import "./App.css";

import posadaElTordillo from "./assets/portfolio/posada-el-tordillo.png";
import elBodegonDeLaLaguna from "./assets/portfolio/el-bodegon-de-la-laguna.png";
import centroCulturalViejaEstacion from "./assets/portfolio/centro-cultural-vieja-estacion.jpg";
import casaDeCasco from "./assets/portfolio/casa-de-casco.png";
import mazzini2591roA from "./assets/portfolio/mazzini-259-1ro-a.png";

const experiencias = [
  {
    category: "TURISMO",
    title: "Posada El Tordillo",
    description:
      "Una experiencia visual para descubrir un espacio turístico de Chascomús.",
    image: posadaElTordillo,
    link: "https://kuula.co/share/collection/7Tj36?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1&inst=es",
  },
  {
    category: "GASTRONOMÍA",
    title: "El Bodegón de la Laguna",
    description:
      "Presentación inmersiva de un espacio gastronómico y su entorno.",
    image: elBodegonDeLaLaguna,
    link: "https://kuula.co/share/collection/7Tysw?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1&inst=es",
  },
  {
    category: "CULTURA",
    title: "Centro Cultural Vieja Estación",
    description:
      "Digitalización de un espacio cultural para facilitar su descubrimiento.",
    image: centroCulturalViejaEstacion,
    link: "https://kuula.co/share/collection/7Ts3x?logo=1&info=1&fs=1&vr=0&thumbs=1&inst=es",
  },
  {
    category: "PATRIMONIO",
    title: "Casa de Casco",
    description:
      "Una forma diferente de recorrer y conocer un espacio histórico.",
    image: casaDeCasco,
    link: "https://kuula.co/share/collection/7Twhb?logo=1&info=1&fs=1&vr=0&thumbs=1&inst=es",
  },
  {
    category: "REAL STATE",
    title: "Departamentos en Alquiler",
    description:
      "Presentación visual de una propiedad para facilitar su promoción.",
    image: mazzini2591roA,
    link: "https://kuula.co/share/collection/7TgJT?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1&inst=es",
  },
];

const servicios = [
  {
    number: "01",
    title: "Recorridos virtuales 360°",
    description:
      "Convertimos espacios físicos en experiencias digitales inmersivas y compartibles.",
  },
  {
    number: "02",
    title: "Fotografía profesional HDR",
    description:
      "Creamos imágenes de alta calidad para mostrar espacios, productos y proyectos.",
  },
  {
    number: "03",
    title: "Producción audiovisual",
    description:
      "Desarrollamos fotografías y videos pensados para comunicar y promocionar.",
  },
  {
    number: "04",
    title: "Contenido para redes",
    description:
      "Generamos material visual adaptable a Instagram, Facebook, TikTok y otros canales.",
  },
];

const sectores = [
  "Turismo",
  "Inmobiliarias",
  "Gastronomía",
  "Hoteles y cabañas",
  "Eventos",
  "Comercios",
  "Arquitectura",
  "Instituciones",
];

const razones = [
  {
    number: "01",
    title: "Experiencia",
    description:
      "Presentamos espacios de manera inmersiva y atractiva.",
  },
  {
    number: "02",
    title: "Visibilidad",
    description:
      "Creamos material utilizable en web, redes y canales comerciales.",
  },
  {
    number: "03",
    title: "Diferenciación",
    description:
      "Cada proyecto recibe una presentación visual propia.",
  },
  {
    number: "04",
    title: "Digitalización",
    description:
      "Convertimos espacios físicos en recursos digitales compartibles.",
  },
];

const proceso = [
  {
    number: "01",
    title: "Analizamos",
    description:
      "Entendemos el espacio, el objetivo comercial y el público.",
  },
  {
    number: "02",
    title: "Producimos",
    description:
      "Planificamos y realizamos la captura del material visual.",
  },
  {
    number: "03",
    title: "Digitalizamos",
    description:
      "Editamos y convertimos el contenido en recursos digitales.",
  },
  {
    number: "04",
    title: "Publicamos",
    description:
      "Preparamos las experiencias para compartirlas y promocionarlas.",
  },
];

function App() {
  return (
    <div className="site">
      <header className="header">
        <div className="container header-inner">
          <a className="logo" href="#inicio">
            AR360<span>°</span>
          </a>

          <nav className="nav">
            <a href="#servicios">Servicios</a>
            <a href="#experiencias">Experiencias AR360°</a>
            <a href="#sectores">Sectores</a>
            <a href="#por-que">Por qué elegir AR360°</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="container">
            <div className="hero-content">
              <p className="hero-eyebrow">
                MARKETING VISUAL · DIGITALIZACIÓN · AUDIOVISUAL
              </p>

              <h1>Convertimos espacios en experiencias digitales.</h1>

              <p className="hero-text">
                Recorridos virtuales 360°, fotografía profesional, video
                promocional y contenido digital para empresas, comercios y
                emprendimientos.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#contacto">
                  Contactar
                </a>

                <a
                  className="button button-secondary"
                  href="#experiencias"
                >
                  Explorar experiencias
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="servicios">
          <div className="container">
            <div className="section-header">
              <p className="section-kicker">SERVICIOS</p>

              <h2 className="section-title">
                Soluciones visuales para mostrar, comunicar y promocionar.
              </h2>

              <p className="section-description">
                Combinamos tecnología, producción audiovisual y comunicación
                digital para transformar espacios y proyectos en experiencias
                que puedan ser descubiertas y compartidas.
              </p>
            </div>

            <div className="services-grid">
              {servicios.map((servicio) => (
                <article className="service-card" key={servicio.number}>
                  <span className="service-number">{servicio.number}</span>

                  <h3>{servicio.title}</h3>

                  <p>{servicio.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
  className="section section-experiencias"
  id="experiencias"
  style={{
    "--section-bg-image": `url(${posadaElTordillo})`,
  }}
>
          <div className="container">
            <div className="section-header">
              <p className="section-kicker">EXPERIENCIAS AR360°</p>

              <h2 className="section-title">
                Espacios que se convierten en experiencias.
              </h2>

              <p className="section-description">
                Descubrí cómo presentamos propiedades, destinos, comercios y
                espacios a través de soluciones visuales.
              </p>
            </div>

            <div className="portfolio-grid">
              {experiencias.map((experiencia) => (
                <article className="portfolio-card" key={experiencia.title}>
                  <div className="portfolio-image-wrapper">
                    <img
                      className="portfolio-image"
                      src={experiencia.image}
                      alt={experiencia.title}
                    />
                  </div>

                  <div className="portfolio-content">
                    <p className="portfolio-category">
                      {experiencia.category}
                    </p>

                    <h3>{experiencia.title}</h3>

                    <p>{experiencia.description}</p>

                    <a
                      className="portfolio-link"
                      href={experiencia.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ver experiencia →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
  className="section section-experiencias"
  id="sectores"
  style={{
    "--section-bg-image": `url(${centroCulturalViejaEstacion})`,
  }}
>
          <div className="container">
            <div className="section-header">
              <p className="section-kicker">SECTORES</p>

              <h2 className="section-title">
                Soluciones adaptadas a diferentes tipos de espacios y
                organizaciones.
              </h2>
            </div>

            <div className="sectors-grid">
              {sectores.map((sector) => (
                <div className="sector-item" key={sector}>
                  <span>{sector}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
  className="section section-dark section-experiencias"
  id="por-que"
  style={{
    "--section-bg-image": `url(${casaDeCasco})`,
  }}
>
          <div className="container">
            <div className="section-header">
              <p className="section-kicker">POR QUÉ ELEGIR AR360°</p>

              <h2 className="section-title">
                Tecnología aplicada a la comunicación de espacios.
              </h2>

              <p className="section-description">
                No se trata solamente de producir imágenes. Se trata de
                convertirlas en herramientas de comunicación y promoción.
              </p>
            </div>

            <div className="differentiation-grid">
              {razones.map((razon) => (
                <article
                  className="differentiation-card"
                  key={razon.number}
                >
                  <span className="differentiation-number">
                    {razon.number}
                  </span>

                  <h3>{razon.title}</h3>

                  <p>{razon.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="proceso">
          <div className="container">
            <div className="section-header">
              <p className="section-kicker">CÓMO TRABAJAMOS</p>

              <h2 className="section-title">
                Del espacio físico a la experiencia digital.
              </h2>
            </div>

            <div className="process-grid">
              {proceso.map((paso) => (
                <article className="process-step" key={paso.number}>
                  <span className="process-number">{paso.number}</span>

                  <h3>{paso.title}</h3>

                  <p>{paso.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contacto">
          <div className="container">
            <div className="contact-inner">
              <div className="contact-copy">
                <h2>¿Querés convertir tu espacio en una experiencia?</h2>

                <p>
                  Contanos qué necesitás y analizamos juntos la mejor forma de
                  mostrar, comunicar y promocionar tu proyecto.
                </p>
              </div>

              <a
                className="button button-primary"
                href="https://wa.me/5492241570216"
                target="_blank"
                rel="noreferrer"
              >
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>AR360° · Marketing Visual · Digitalización · Audiovisual</p>

          <p>Chascomús · Buenos Aires · Argentina</p>
        </div>
      </footer>
    </div>
  );
}

export default App;