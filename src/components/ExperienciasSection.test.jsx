import { render, screen } from '@testing-library/react';
import { ExperienciasSection } from './ExperienciasSection';

describe('ExperienciasSection', () => {
  test('renderiza sección con id experiencias', () => {
    render(<ExperienciasSection />);
    const section = document.getElementById('experiencias');
    expect(section).toBeInTheDocument();
  });

  test('renderiza kicker EXPERIENCIAS AR360°', () => {
    render(<ExperienciasSection />);
    expect(screen.getByText(/experiencias ar360°/i)).toBeInTheDocument();
  });

  test('renderiza título y descripción', () => {
    render(<ExperienciasSection />);
    expect(screen.getByText(/espacios que se convierten en experiencias/i)).toBeInTheDocument();
    expect(screen.getByText(/descubrí cómo presentamos propiedades/i)).toBeInTheDocument();
  });

  test('renderiza 5 tarjetas de experiencias', () => {
    render(<ExperienciasSection />);
    const cards = screen.getAllByRole('article');
    expect(cards).toHaveLength(5);
  });

  test('cada experiencia muestra categoría, título, descripción y link', () => {
    render(<ExperienciasSection />);

    expect(screen.getByText('HOTELES Y CABAÑAS')).toBeInTheDocument();
    expect(screen.getByText('Posada El Tordillo')).toBeInTheDocument();
    expect(screen.getByText(/experiencia visual para descubrir un espacio turístico/i)).toBeInTheDocument();
    const links = screen.getAllByRole('link', { name: /ver experiencia/i });
    expect(links).toHaveLength(5);
    expect(links[0]).toHaveAttribute('href', 'https://kuula.co/share/collection/7Tj36?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1&inst=es');

    expect(screen.getByText('GASTRONOMÍA')).toBeInTheDocument();
    expect(screen.getByText('El Bodegón de la Laguna')).toBeInTheDocument();

    const patrimonioCategories = screen.getAllByText('PATRIMONIO HISTORICO');
    expect(patrimonioCategories).toHaveLength(2);
    expect(screen.getByText('Centro Cultural Vieja Estación')).toBeInTheDocument();
    expect(screen.getByText('Casa de Casco')).toBeInTheDocument();

    expect(screen.getByText('REAL STATE')).toBeInTheDocument();
    expect(screen.getByText('Propiedades en Venta o Alquiler')).toBeInTheDocument();
  });

  test('links de experiencias abren en nueva pestaña con noreferrer', () => {
    render(<ExperienciasSection />);
    const links = screen.getAllByRole('link', { name: /ver experiencia/i });
    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noreferrer');
      expect(link).toHaveAttribute('href');
      expect(link.href).toMatch(/^https:\/\/kuula\.co/);
    });
  });

  test('imágenes tienen alt text y loading lazy', () => {
    render(<ExperienciasSection />);
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(5);
    images.forEach((img) => {
      expect(img).toHaveAttribute('alt');
      expect(img.alt.length).toBeGreaterThan(0);
      expect(img).toHaveAttribute('loading', 'lazy');
    });
  });

  test('aplica fondo con imagen de Posada El Tordillo via CSS variable', () => {
    render(<ExperienciasSection />);
    const section = document.getElementById('experiencias');
    expect(section).toHaveClass('section-experiencias');
    // Verificar que la CSS variable --section-bg-image está presente en el style attribute
    expect(section).toHaveAttribute('style');
    const styleAttr = section.getAttribute('style');
    expect(styleAttr).toContain('posada-el-tordillo');
  });
});