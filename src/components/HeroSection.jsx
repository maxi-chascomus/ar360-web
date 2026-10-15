import { Button } from "./Button";

export function HeroSection() {
  return (
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
            <Button variant="primary" href="#contacto">
              Contactar
            </Button>

            <Button variant="secondary" href="#experiencias">
              Explorar experiencias
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}