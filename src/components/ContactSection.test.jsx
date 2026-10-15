import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactSection } from './ContactSection';

const mockWindowOpen = vi.fn();

beforeEach(() => {
  vi.spyOn(window, 'open').mockImplementation(mockWindowOpen);
  mockWindowOpen.mockClear();
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('ContactSection', () => {
  test('renderiza formulario con todos los campos requeridos', () => {
    render(<ContactSection />);

    expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/whatsapp/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/servicio que te interesa/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /enviar consulta/i })).toBeInTheDocument();
  });

  test('renderiza campos opcionales', () => {
    render(<ContactSection />);

    expect(screen.getByLabelText(/empresa \/ emprendimiento/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/localidad/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/mensaje/i)).toBeInTheDocument();
  });

  test('renderiza botón de WhatsApp directo', () => {
    render(<ContactSection />);
    const whatsappButton = screen.getByRole('link', { name: /contactar por whatsapp/i });
    expect(whatsappButton).toHaveAttribute('href', 'https://wa.me/5492241570216');
    expect(whatsappButton).toHaveAttribute('target', '_blank');
  });

  test('select de servicio tiene todas las opciones', () => {
    render(<ContactSection />);
    const select = screen.getByLabelText(/servicio que te interesa/i);
    const options = select.querySelectorAll('option');
    const values = Array.from(options).map((o) => o.value);

    expect(values).toContain('Recorrido virtual 360°');
    expect(values).toContain('Fotografía profesional HDR');
    expect(values).toContain('Producción audiovisual');
    expect(values).toContain('Contenido para redes');
    expect(values).toContain('Solución personalizada');
    expect(values).toContain(''); // opción vacía por defecto
  });

  test('valida campos requeridos (nombre, whatsapp, servicio)', async () => {
    render(<ContactSection />);

    const submitButton = screen.getByRole('button', { name: /enviar consulta/i });
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByLabelText(/nombre/i)).toHaveAttribute('required');
      expect(screen.getByLabelText(/whatsapp/i)).toHaveAttribute('required');
      expect(screen.getByLabelText(/servicio que te interesa/i)).toHaveAttribute('required');
    });
  });

  test('abre WhatsApp con datos formateados al enviar formulario válido', async () => {
    render(<ContactSection />);

    await userEvent.type(screen.getByLabelText(/nombre/i), 'Juan Pérez');
    await userEvent.type(screen.getByLabelText(/empresa \/ emprendimiento/i), 'Mi Empresa');
    await userEvent.type(screen.getByLabelText(/localidad/i), 'Chascomús');
    await userEvent.type(screen.getByLabelText(/whatsapp/i), '11 1234 5678');
    await userEvent.type(screen.getByLabelText(/email/i), 'juan@email.com');
    await userEvent.selectOptions(screen.getByLabelText(/servicio que te interesa/i), 'Recorrido virtual 360°');
    await userEvent.type(screen.getByLabelText(/mensaje/i), 'Necesito un recorrido para mi hotel');

    await userEvent.click(screen.getByRole('button', { name: /enviar consulta/i }));

    await waitFor(() => {
      expect(mockWindowOpen).toHaveBeenCalledTimes(1);
    });

    const openedUrl = mockWindowOpen.mock.calls[0][0];
    expect(openedUrl).toContain('wa.me/5492241570216');
    // Verificar que los datos están en la URL (encoding puede variar)
    expect(openedUrl).toContain('Juan%20P%C3%A9rez'); // nombre codificado
    expect(openedUrl).toContain('Mi%20Empresa'); // empresa codificada
    expect(openedUrl).toContain('Chascom%C3%BAs'); // localidad codificada
    expect(openedUrl).toContain('11%201234%205678'); // whatsapp codificado
    expect(openedUrl).toContain('juan%40email.com'); // email codificado
    expect(openedUrl).toContain('Recorrido%20virtual%20360%C2%B0'); // servicio codificado
    expect(openedUrl).toContain('Necesito%20un%20recorrido'); // mensaje codificado
  });

  test('omite campos opcionales vacíos en mensaje WhatsApp', async () => {
    render(<ContactSection />);

    await userEvent.type(screen.getByLabelText(/nombre/i), 'Ana');
    await userEvent.type(screen.getByLabelText(/whatsapp/i), '11 9999 8888');
    await userEvent.selectOptions(screen.getByLabelText(/servicio que te interesa/i), 'Fotografía profesional HDR');

    await userEvent.click(screen.getByRole('button', { name: /enviar consulta/i }));

    await waitFor(() => {
      expect(mockWindowOpen).toHaveBeenCalledTimes(1);
    });

    const openedUrl = mockWindowOpen.mock.calls[0][0];
    expect(openedUrl).not.toContain('Empresa');
    expect(openedUrl).not.toContain('Localidad');
    expect(openedUrl).not.toContain('Email');
    expect(openedUrl).not.toContain('Mensaje');
  });

  test('muestra mensaje de éxito tras envío', async () => {
    render(<ContactSection />);

    await userEvent.type(screen.getByLabelText(/nombre/i), 'Test');
    await userEvent.type(screen.getByLabelText(/whatsapp/i), '11 1111 2222');
    await userEvent.selectOptions(screen.getByLabelText(/servicio que te interesa/i), 'Contenido para redes');

    await userEvent.click(screen.getByRole('button', { name: /enviar consulta/i }));

    await waitFor(() => {
      expect(screen.getByText(/consulta preparada correctamente/i)).toBeInTheDocument();
    });
  });

  test('resetea formulario tras envío exitoso', async () => {
    render(<ContactSection />);

    await userEvent.type(screen.getByLabelText(/nombre/i), 'Test User');
    await userEvent.type(screen.getByLabelText(/whatsapp/i), '11 1111 2222');
    await userEvent.selectOptions(screen.getByLabelText(/servicio que te interesa/i), 'Producción audiovisual');

    await userEvent.click(screen.getByRole('button', { name: /enviar consulta/i }));

    await waitFor(() => {
      expect(screen.getByLabelText(/nombre/i)).toHaveValue('');
      expect(screen.getByLabelText(/whatsapp/i)).toHaveValue('');
      expect(screen.getByLabelText(/servicio que te interesa/i)).toHaveValue('');
    });
  });
});