import { servicios } from "./servicios.js";

export const lineas = [
  {
    id: "marketing-visual",
    number: "01",
    title: "Marketing Visual y Producción Audiovisual",
    description:
      "Recorridos 360°, fotografía y video que muestran espacios, productos y experiencias como se viven en la realidad.",
    items: servicios.map((servicio) => servicio.title),
    note: "Es el diferencial de AR360° y la línea donde se construye el portfolio.",
  },
  {
    id: "digitalizacion-comercial",
    number: "02",
    title: "Digitalización Comercial",
    description:
      "Canales propios que trabajan por vos: sitios, catálogos y formularios pensados para generar consultas y cerrar ventas.",
    items: [
      "Sitios web institucionales y de catálogo",
      "Catálogos digitales y fichas de producto",
      "Formularios y canales de contacto",
      "Mantenimiento y actualización mensual",
    ],
  },
  {
    id: "consultoria-estrategica",
    number: "03",
    title: "Consultoría Estratégica y Empresarial",
    description:
      "Diagnóstico, plan y acompañamiento para analizar el negocio, detectar oportunidades y ordenar las acciones de crecimiento.",
    items: [
      "Diagnóstico estratégico y comercial",
      "Plan estratégico a 90 días",
      "Desarrollo de nuevos negocios",
      "Marketing y posicionamiento",
      "Acompañamiento mensual",
    ],
    note: "Se integra con la producción: diagnosticamos y ejecutamos parte de las soluciones.",
  },
];
