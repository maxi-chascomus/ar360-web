import {
  Header,
  Footer,
  HeroSection,
  ServicesSection,
  CasosSection,
  ExperienciasSection,
  SectoresSection,
  PorQueSection,
  ProcesoSection,
  ContactSection,
} from "../components";

export function Home() {
  return (
    <div className="site">
      <Header />

      <main>
        <HeroSection />
        <ServicesSection />
        <CasosSection />
        <ExperienciasSection />
        <SectoresSection />
        <PorQueSection />
        <ProcesoSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}