import { render, screen } from '@testing-library/react';
import { ServicesSection } from './ServicesSection';

describe('ServicesSection', () => {
  test('renderiza sección con id servicios', () => {
    render(<ServicesSection />);
    const section = document.getElementById('servicios');
    expect(section).toBeInTheDocument();
  });

  test('renderiza kicker SERVICIOS', () => {
    render(<ServicesSection />);
    expect(screen.getByText(/servicios/i)).toBeInTheDocument();
  });

  test('renderiza título de la sección', () => {
    render(<ServicesSection />);
    expect(screen.getByText(/soluciones visuales para mostrar, comunicar y promocionar/i)).toBeInTheDocument();
  });

  test('renderiza descripción de la sección', () => {
    render(<ServicesSection />);
    expect(screen.getByText(/combinamos tecnología, producción audiovisual y comunicación digital/i)).toBeInTheDocument();
  });

  test('renderiza 4 tarjetas de servicios', () => {
    render(<ServicesSection />);
    const serviceCards = screen.getAllByRole('article');
    expect(serviceCards).toHaveLength(4);
  });

  test('cada servicio muestra número, título y descripción', () => {
    render(<ServicesSection />);

    expect(screen.getByText('01')).toBeInTheDocument();
    expect(screen.getByText('Recorridos virtuales 360°')).toBeInTheDocument();
    expect(screen.getByText(/convertimos espacios físicos en experiencias digitales/i)).toBeInTheDocument();

    expect(screen.getByText('02')).toBeInTheDocument();
    expect(screen.getByText('Fotografía profesional HDR')).toBeInTheDocument();
    expect(screen.getByText(/imágenes de alta calidad/i)).toBeInTheDocument();

    expect(screen.getByText('03')).toBeInTheDocument();
    expect(screen.getByText('Producción audiovisual')).toBeInTheDocument();
    expect(screen.getByText(/fotografías y videos pensados para comunicar/i)).toBeInTheDocument();

    expect(screen.getByText('04')).toBeInTheDocument();
    expect(screen.getByText('Contenido para redes')).toBeInTheDocument();
    expect(screen.getByText(/material visual adaptable/i)).toBeInTheDocument();
  });

  test('aplica clases CSS esperadas', () => {
    render(<ServicesSection />);
    const section = document.getElementById('servicios');
    expect(section).toHaveClass('section');

    const container = section.querySelector('.container');
    expect(container).toBeInTheDocument();

    const grid = container.querySelector('.services-grid');
    expect(grid).toBeInTheDocument();
  });
});