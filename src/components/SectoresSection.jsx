import { sectores } from "../data/sectores";
import { SectionHeader } from "./SectionHeader";
import centroCulturalViejaEstacion from "../assets/portfolio/optimized/centro-cultural-vieja-estacion.webp";

export function SectoresSection() {
  return (
    <section
      className="section section-experiencias"
      id="sectores"
      style={{ "--section-bg-image": `url(${centroCulturalViejaEstacion})` }}
    >
      <div className="container">
        <SectionHeader
          kicker="SECTORES"
          title="Soluciones adaptadas a diferentes tipos de espacios y organizaciones."
        />

        <div className="sectors-grid">
          {sectores.map((sector) => (
            <div className="sector-item" key={sector.id}>
              <span>{sector.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}