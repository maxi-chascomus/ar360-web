import { proceso } from "../data/proceso";
import { SectionHeader } from "./SectionHeader";

export function ProcesoSection() {
  return (
    <section className="section" id="proceso">
      <div className="container">
        <SectionHeader
          kicker="CÓMO TRABAJAMOS"
          title="Del espacio físico a la experiencia digital."
        />

        <div className="process-grid">
          {proceso.map((paso) => (
            <article className="process-step" key={paso.id}>
              <span className="process-number">{paso.number}</span>
              <h3>{paso.title}</h3>
              <p>{paso.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}