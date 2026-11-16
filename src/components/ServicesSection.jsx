import { lineas } from "../data/lineas";
import { SectionHeader } from "./SectionHeader";

export function ServicesSection() {
  return (
    <section className="section section-dark" id="servicios">
      <div className="container">
        <SectionHeader
          kicker="LÍNEAS DE NEGOCIO"
          title="Tres líneas que se complementan."
          description="Mostramos el negocio, lo llevamos a canales digitales propios y ordenamos la estrategia para que ese esfuerzo se convierta en crecimiento."
        />

        <div className="lineas-grid">
          {lineas.map((linea) => (
            <article className="linea-card" key={linea.id}>
              <span className="linea-number">{linea.number}</span>
              <h3>{linea.title}</h3>
              <p className="linea-description">{linea.description}</p>

              <ul className="linea-list">
                {linea.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              {linea.note && <p className="linea-note">{linea.note}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
