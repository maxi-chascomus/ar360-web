import { render, screen } from '@testing-library/react';
import { ServicesSection } from './ServicesSection';

describe('ServicesSection', () => {
  test('renderiza sección con id servicios', () => {
    render(<ServicesSection />);
    expect(document.getElementById('servicios')).toBeInTheDocument();
  });

  test('renderiza kicker LÍNEAS DE NEGOCIO', () => {
    render(<ServicesSection />);
    expect(screen.getByText('LÍNEAS DE NEGOCIO')).toBeInTheDocument();
  });

  test('renderiza título y descripción de la sección', () => {
    render(<ServicesSection />);
    expect(screen.getByText(/tres líneas que se complementan/i)).toBeInTheDocument();
    expect(screen.getByText(/mostramos el negocio, lo llevamos a canales digitales propios/i)).toBeInTheDocument();
  });

  test('renderiza 3 tarjetas de líneas', () => {
    render(<ServicesSection />);
    expect(screen.getAllByRole('article')).toHaveLength(3);
  });

  test('cada línea muestra número, título y descripción', () => {
    render(<ServicesSection />);

    expect(screen.getByText('01')).toBeInTheDocument();
    expect(screen.getByText('Marketing Visual y Producción Audiovisual')).toBeInTheDocument();
    expect(screen.getByText(/recorridos 360°, fotografía y video/i)).toBeInTheDocument();

    expect(screen.getByText('02')).toBeInTheDocument();
    expect(screen.getByText('Digitalización Comercial')).toBeInTheDocument();
    expect(screen.getByText(/canales propios que trabajan por vos/i)).toBeInTheDocument();

    expect(screen.getByText('03')).toBeInTheDocument();
    expect(screen.getByText('Consultoría Estratégica y Empresarial')).toBeInTheDocument();
    expect(screen.getByText(/diagnóstico, plan y acompañamiento/i)).toBeInTheDocument();
  });

  test('la Línea 1 conserva los servicios visuales existentes', () => {
    render(<ServicesSection />);

    expect(screen.getByText('Recorridos virtuales 360°')).toBeInTheDocument();
    expect(screen.getByText('Fotografía profesional HDR')).toBeInTheDocument();
    expect(screen.getByText('Producción audiovisual')).toBeInTheDocument();
    expect(screen.getByText('Contenido para redes')).toBeInTheDocument();
  });

  test('las líneas 2 y 3 muestran sus entregables', () => {
    render(<ServicesSection />);

    expect(screen.getByText('Mantenimiento y actualización mensual')).toBeInTheDocument();
    expect(screen.getByText('Plan estratégico a 90 días')).toBeInTheDocument();
    expect(screen.getByText('Acompañamiento mensual')).toBeInTheDocument();
  });

  test('muestra la nota de integración entre consultoría y producción', () => {
    render(<ServicesSection />);
    expect(screen.getByText(/se integra con la producción/i)).toBeInTheDocument();
  });

  test('aplica clases CSS esperadas', () => {
    render(<ServicesSection />);
    const section = document.getElementById('servicios');
    expect(section).toHaveClass('section', 'section-dark');
    expect(section.querySelector('.container .lineas-grid')).toBeInTheDocument();
  });
});
