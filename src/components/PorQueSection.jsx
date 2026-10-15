import { razones } from "../data/razones";
import { SectionHeader } from "./SectionHeader";
import casaDeCasco from "../assets/portfolio/optimized/casa-de-casco.webp";

export function PorQueSection() {
  return (
    <section
      className="section section-dark section-experiencias"
      id="por-que"
      style={{ "--section-bg-image": `url(${casaDeCasco})` }}
    >
      <div className="container">
        <SectionHeader
          kicker="POR QUÉ ELEGIR AR360°"
          title="Tecnología aplicada a la comunicación de espacios."
          description="No se trata solamente de producir imágenes. Se trata de convertirlas en herramientas de comunicación y promoción."
        />

        <div className="differentiation-grid">
          {razones.map((razon) => (
            <article className="differentiation-card" key={razon.id}>
              <span className="differentiation-number">{razon.number}</span>
              <h3>{razon.title}</h3>
              <p>{razon.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}