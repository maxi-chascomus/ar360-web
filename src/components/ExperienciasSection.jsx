import { experiencias } from "../data/experiencias";
import { SectionHeader } from "./SectionHeader";
import posadaElTordillo from "../assets/portfolio/optimized/posada-el-tordillo.webp";

export function ExperienciasSection() {
  return (
    <section
      className="section section-experiencias"
      id="experiencias"
      style={{ "--section-bg-image": `url(${posadaElTordillo})` }}
    >
      <div className="container">
        <SectionHeader
          kicker="EXPERIENCIAS AR360°"
          title="Espacios que se convierten en experiencias."
          description="Descubrí cómo presentamos propiedades, destinos, comercios y espacios a través de soluciones visuales."
        />

        <div className="portfolio-grid">
          {experiencias.map((experiencia) => (
            <article className="portfolio-card" key={experiencia.id}>
              <div className="portfolio-image-wrapper">
                <img
                  className="portfolio-image"
                  src={experiencia.image}
                  alt={experiencia.title}
                  loading="lazy"
                />
              </div>

              <div className="portfolio-content">
                <p className="portfolio-category">{experiencia.category}</p>
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
  );
}