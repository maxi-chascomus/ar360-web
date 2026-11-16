import { casos } from "../data/casos";
import { SectionHeader } from "./SectionHeader";

export function CasosSection() {
  return (
    <section className="section section-dark" id="casos">
      <div className="container">
        <SectionHeader
          kicker="CASOS DE ESTUDIO"
          title="Cómo abordamos cada tipo de negocio."
          description="Modelos de intervención por rubro: qué investigamos, qué hacemos y qué buscamos lograr."
        />

        <p className="section-notice">
          Son <strong>modelos de intervención</strong>, no casos de clientes reales
          ni resultados medidos. Los casos concretos se publican cuando se concreten
          los proyectos y contemos con autorización para mostrarlos.
        </p>

        <div className="casos-grid">
          {casos.map((caso) => (
            <article className="case-card" key={caso.id}>
              <header className="case-head">
                <span className="case-index">{caso.number}</span>
                <div>
                  <span className="case-sector">{caso.sector}</span>
                  <h3>{caso.title}</h3>
                </div>
              </header>

              <dl className="case-detail">
                <dt>Contexto</dt>
                <dd>{caso.context}</dd>

                <dt>Desafío</dt>
                <dd>{caso.challenge}</dd>

                <dt>Solución</dt>
                <dd>{caso.solution}</dd>

                <dt>Resultado esperado</dt>
                <dd>{caso.expectedResult}</dd>
              </dl>

              <a className="case-related" href={caso.relatedWork.href}>
                {caso.relatedWork.label} →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
