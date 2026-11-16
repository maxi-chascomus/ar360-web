import { render, screen } from '@testing-library/react';
import { CasosSection } from './CasosSection';

describe('CasosSection', () => {
  test('renderiza sección con id casos', () => {
    render(<CasosSection />);
    expect(document.getElementById('casos')).toBeInTheDocument();
  });

  test('renderiza kicker y título', () => {
    render(<CasosSection />);
    expect(screen.getByText('CASOS DE ESTUDIO')).toBeInTheDocument();
    expect(screen.getByText(/cómo abordamos cada tipo de negocio/i)).toBeInTheDocument();
  });

  test('aclara que son modelos y no casos reales', () => {
    render(<CasosSection />);
    expect(screen.getAllByText(/modelos de intervención/i)).toHaveLength(2);
    expect(screen.getByText(/no casos de clientes reales/i)).toBeInTheDocument();
  });

  test('renderiza 3 casos', () => {
    render(<CasosSection />);
    expect(screen.getAllByRole('article')).toHaveLength(3);
  });

  test('muestra los sectores de los casos', () => {
    render(<CasosSection />);
    expect(screen.getByText('Alojamientos turísticos')).toBeInTheDocument();
    expect(screen.getByText('Gastronomía')).toBeInTheDocument();
    expect(screen.getByText('Inmobiliarias')).toBeInTheDocument();
  });

  test('cada caso muestra contexto, desafío, solución y resultado esperado', () => {
    render(<CasosSection />);

    expect(screen.getAllByText('Contexto')).toHaveLength(3);
    expect(screen.getAllByText('Desafío')).toHaveLength(3);
    expect(screen.getAllByText('Solución')).toHaveLength(3);
    expect(screen.getAllByText('Resultado esperado')).toHaveLength(3);
  });

  test('vincula cada modelo con un trabajo real del portfolio', () => {
    render(<CasosSection />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3);
    links.forEach((link) => expect(link).toHaveAttribute('href', '#experiencias'));
  });

  test('aplica clases CSS esperadas', () => {
    render(<CasosSection />);
    const section = document.getElementById('casos');
    expect(section).toHaveClass('section', 'section-dark');
    expect(section.querySelector('.container .casos-grid')).toBeInTheDocument();
  });
});
