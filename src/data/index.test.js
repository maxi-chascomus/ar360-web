import { describe, test, expect } from 'vitest';
import { experiencias } from '../data/experiencias';
import { servicios } from '../data/servicios';
import { sectores } from '../data/sectores';
import { razones } from '../data/razones';
import { proceso } from '../data/proceso';

describe('Data exports', () => {
  describe('experiencias', () => {
    test('exporta 5 experiencias', () => {
      expect(experiencias).toHaveLength(5);
    });

    test('cada experiencia tiene campos requeridos', () => {
      experiencias.forEach((exp) => {
        expect(exp).toHaveProperty('id');
        expect(exp).toHaveProperty('category');
        expect(exp).toHaveProperty('title');
        expect(exp).toHaveProperty('description');
        expect(exp).toHaveProperty('image');
        expect(exp).toHaveProperty('link');
        expect(typeof exp.id).toBe('string');
        expect(exp.id.length).toBeGreaterThan(0);
        expect(exp.link).toMatch(/^https?:\/\//);
      });
    });

    test('IDs son únicos', () => {
      const ids = experiencias.map((e) => e.id);
      expect(new Set(ids).size).toBe(ids.length);
    });

    test('incluye experiencias conocidas', () => {
      const titles = experiencias.map((e) => e.title);
      expect(titles).toContain('Posada El Tordillo');
      expect(titles).toContain('El Bodegón de la Laguna');
      expect(titles).toContain('Centro Cultural Vieja Estación');
      expect(titles).toContain('Casa de Casco');
      expect(titles).toContain('Propiedades en Venta o Alquiler');
    });

    test('categorías son consistentes', () => {
      const categories = experiencias.map((e) => e.category);
      expect(categories).toContain('HOTELES Y CABAÑAS');
      expect(categories).toContain('GASTRONOMÍA');
      expect(categories).toContain('PATRIMONIO HISTORICO');
      expect(categories).toContain('REAL STATE');
    });
  });

  describe('servicios', () => {
    test('exporta 4 servicios', () => {
      expect(servicios).toHaveLength(4);
    });

    test('cada servicio tiene campos requeridos', () => {
      servicios.forEach((s) => {
        expect(s).toHaveProperty('id');
        expect(s).toHaveProperty('number');
        expect(s).toHaveProperty('title');
        expect(s).toHaveProperty('description');
      });
    });

    test('números son secuenciales 01-04', () => {
      const numbers = servicios.map((s) => s.number);
      expect(numbers).toEqual(['01', '02', '03', '04']);
    });

    test('títulos esperados', () => {
      const titles = servicios.map((s) => s.title);
      expect(titles).toContain('Recorridos virtuales 360°');
      expect(titles).toContain('Fotografía profesional HDR');
      expect(titles).toContain('Producción audiovisual');
      expect(titles).toContain('Contenido para redes');
    });
  });

  describe('sectores', () => {
    test('exporta 8 sectores', () => {
      expect(sectores).toHaveLength(8);
    });

    test('cada sector tiene id y title', () => {
      sectores.forEach((s) => {
        expect(s).toHaveProperty('id');
        expect(s).toHaveProperty('title');
        expect(typeof s.id).toBe('string');
        expect(typeof s.title).toBe('string');
      });
    });

    test('títulos esperados', () => {
      const titles = sectores.map((s) => s.title);
      expect(titles).toContain('Inmobiliarias y propiedades');
      expect(titles).toContain('Turismo, hoteles y cabañas');
      expect(titles).toContain('Gastronomía y eventos');
      expect(titles).toContain('Comercios y empresas');
      expect(titles).toContain('Arquitectura y construcción');
      expect(titles).toContain('Instituciones y organismos públicos');
      expect(titles).toContain('Automotores');
      expect(titles).toContain('Alquileres temporarios');
    });
  });

  describe('razones', () => {
    test('exporta 4 razones', () => {
      expect(razones).toHaveLength(4);
    });

    test('números son secuenciales 01-04', () => {
      const numbers = razones.map((r) => r.number);
      expect(numbers).toEqual(['01', '02', '03', '04']);
    });

    test('títulos esperados', () => {
      const titles = razones.map((r) => r.title);
      expect(titles).toContain('Experiencia');
      expect(titles).toContain('Visibilidad');
      expect(titles).toContain('Diferenciación');
      expect(titles).toContain('Digitalización');
    });
  });

  describe('proceso', () => {
    test('exporta 4 pasos', () => {
      expect(proceso).toHaveLength(4);
    });

    test('números son secuenciales 01-04', () => {
      const numbers = proceso.map((p) => p.number);
      expect(numbers).toEqual(['01', '02', '03', '04']);
    });

    test('títulos esperados', () => {
      const titles = proceso.map((p) => p.title);
      expect(titles).toContain('Analizamos');
      expect(titles).toContain('Producimos');
      expect(titles).toContain('Digitalizamos');
      expect(titles).toContain('Publicamos');
    });
  });
});