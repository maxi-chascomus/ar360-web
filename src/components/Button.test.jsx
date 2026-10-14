import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  test('renderiza botón primario por defecto', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveClass('button-primary');
    expect(button).not.toHaveClass('button-secondary');
  });

  test('renderiza botón secundario cuando variant="secondary"', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByRole('button', { name: /secondary/i });
    expect(button).toHaveClass('button-secondary');
    expect(button).not.toHaveClass('button-primary');
  });

  test('renderiza como enlace cuando se pasa href', () => {
    render(<Button href="/contacto">Contactar</Button>);
    const link = screen.getByRole('link', { name: /contactar/i });
    expect(link).toHaveAttribute('href', '/contacto');
    expect(link).toHaveClass('button-primary');
  });

  test('renderiza como enlace secundario con href y variant secondary', () => {
    render(<Button href="#experiencias" variant="secondary">Explorar</Button>);
    const link = screen.getByRole('link', { name: /explorar/i });
    expect(link).toHaveAttribute('href', '#experiencias');
    expect(link).toHaveClass('button-secondary');
  });

  test('llama onClick cuando se hace click', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('aplica className personalizado', () => {
    render(<Button className="custom-class">Custom</Button>);
    const button = screen.getByRole('button', { name: /custom/i });
    expect(button).toHaveClass('custom-class');
  });

  test('renderiza children correctamente', () => {
    render(<Button><span>Inner</span> Content</Button>);
    expect(screen.getByText('Inner')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  test('usa type="submit" cuando se especifica', () => {
    render(<Button type="submit">Enviar</Button>);
    const button = screen.getByRole('button', { name: /enviar/i });
    expect(button).toHaveAttribute('type', 'submit');
  });
});