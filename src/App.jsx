import './App.css'

function App() {
  return (
    <>
      <header className="site-header">
        <div className="container header-content">
          <a href="#inicio" className="brand">
            Ar360<span>°</span>
          </a>

          <nav className="main-nav">
            <a href="#servicios">Servicios</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#sectores">Sectores</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero-section">
          <div className="container hero-content">
            <div className="hero-text">
              <p className="eyebrow">MARKETING VISUAL · DIGITALIZACIÓN · AUDIOVISUAL</p>

              <h1>
                Convertimos espacios
                <span> en experiencias digitales.</span>
              </h1>

              <p className="hero-description">
                Recorridos virtuales 360°, fotografía profesional, video
                promocional y contenido digital para empresas, comercios y
                emprendimientos.
              </p>

              <div className="hero-actions">
                <a href="#portfolio" className="button button-primary">
                  Ver recorridos
                </a>

                <a href="#contacto" className="button button-secondary">
                  Contactar
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-card">
                <div className="visual-card-content">
                  <span>EXPERIENCIA</span>
                  <strong>360°</strong>
                  <p>Explorá. Descubrí. Decidí.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">SERVICIOS</p>
              <h2>Contenido que muestra lo que tu negocio tiene para ofrecer.</h2>
              <p>
                Creamos herramientas visuales pensadas para mejorar la
                presentación, comunicación y comercialización de cada espacio.
              </p>
            </div>

            <div className="services-grid">
              <article className="service-card">
                <span className="service-number">01</span>
                <h3>Recorridos virtuales 360°</h3>
                <p>
                  Permití que tus clientes recorran un espacio antes de
                  visitarlo físicamente.
                </p>
              </article>

              <article className="service-card">
                <span className="service-number">02</span>
                <h3>Fotografía profesional HDR</h3>
                <p>
                  Imágenes de alta calidad para mostrar ambientes, productos,
                  propiedades y experiencias.
                </p>
              </article>

              <article className="service-card">
                <span className="service-number">03</span>
                <h3>Producción audiovisual</h3>
                <p>
                  Videos promocionales diseñados para comunicar una propuesta
                  de manera clara y atractiva.
                </p>
              </article>

              <article className="service-card">
                <span className="service-number">04</span>
                <h3>Contenido para redes</h3>
                <p>
                  Material visual preparado para fortalecer la presencia
                  digital de empresas y emprendimientos.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="sectores" className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">SECTORES</p>
              <h2>Soluciones visuales para distintos tipos de negocios.</h2>
            </div>

            <div className="sectors-grid">
              <div className="sector-item">Turismo y alojamiento</div>
              <div className="sector-item">Inmobiliarias</div>
              <div className="sector-item">Gastronomía</div>
              <div className="sector-item">Hoteles y cabañas</div>
              <div className="sector-item">Eventos</div>
              <div className="sector-item">Comercios</div>
              <div className="sector-item">Arquitectura</div>
              <div className="sector-item">Instituciones</div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">PORTFOLIO</p>
              <h2>Experiencias que podés explorar.</h2>
              <p>
                Una selección inicial de recorridos virtuales producidos por
                Ar360°.
              </p>
            </div>

            <div className="portfolio-grid">
              <article className="portfolio-card">
                <div className="portfolio-placeholder">360°</div>
                <div className="portfolio-info">
                  <span>ALOJAMIENTO</span>
                  <h3>Posada El Tordillo</h3>
                  <a href="#contacto">Ver experiencia →</a>
                </div>
              </article>

              <article className="portfolio-card">
                <div className="portfolio-placeholder">360°</div>
                <div className="portfolio-info">
                  <span>GASTRONOMÍA</span>
                  <h3>El Bodegón de la Laguna</h3>
                  <a href="#contacto">Ver experiencia →</a>
                </div>
              </article>

              <article className="portfolio-card">
                <div className="portfolio-placeholder">360°</div>
                <div className="portfolio-info">
                  <span>CULTURA</span>
                  <h3>Centro Cultural Vieja Estación</h3>
                  <a href="#contacto">Ver experiencia →</a>
                </div>
              </article>

              <article className="portfolio-card">
                <div className="portfolio-placeholder">360°</div>
                <div className="portfolio-info">
                  <span>PROPIEDAD</span>
                  <h3>Casa de Casco</h3>
                  <a href="#contacto">Ver experiencia →</a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section process-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">CÓMO TRABAJAMOS</p>
              <h2>Del espacio físico a una experiencia digital.</h2>
            </div>

            <div className="process-grid">
              <div className="process-item">
                <span>01</span>
                <h3>Analizamos</h3>
                <p>Definimos qué querés mostrar y qué necesita tu público.</p>
              </div>

              <div className="process-item">
                <span>02</span>
                <h3>Producimos</h3>
                <p>Capturamos fotografías, imágenes 360° y material audiovisual.</p>
              </div>

              <div className="process-item">
                <span>03</span>
                <h3>Digitalizamos</h3>
                <p>Transformamos el material en una experiencia lista para compartir.</p>
              </div>

              <div className="process-item">
                <span>04</span>
                <h3>Publicamos</h3>
                <p>Te entregamos herramientas para presentar y promocionar tu espacio.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="contact-section">
          <div className="container contact-content">
            <div>
              <p className="eyebrow">CONTACTO</p>
              <h2>¿Querés mostrar tu espacio de otra manera?</h2>
              <p>
                Contanos qué necesitás y evaluamos la mejor solución visual
                para tu proyecto.
              </p>
            </div>

            <a href="https://wa.me/" className="button button-primary">
              Contactar por WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <strong>Ar360°</strong>
          <span>Marketing Visual · Digitalización Comercial · Producción Audiovisual</span>
          <span>© 2026 Ar360°</span>
        </div>
      </footer>
    </>
  )
}

export default App