import { servicios } from "../data/servicios";
import { SectionHeader } from "./SectionHeader";

export function ServicesSection() {
  return (
    <section className="section" id="servicios">
      <div className="container">
        <SectionHeader
          kicker="SERVICIOS"
          title="Soluciones visuales para mostrar, comunicar y promocionar."
          description="Combinamos tecnología, producción audiovisual y comunicación digital para transformar espacios y proyectos en experiencias que puedan ser descubiertas y compartidas."
        />

        <div className="services-grid">
          {servicios.map((servicio) => (
            <article className="service-card" key={servicio.id}>
              <span className="service-number">{servicio.number}</span>
              <h3>{servicio.title}</h3>
              <p>{servicio.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}