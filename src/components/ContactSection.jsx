import { useState } from "react";
import { Button } from "./Button";

const servicioOptions = [
  { value: "", label: "Seleccioná una opción", disabled: true },
  { value: "Recorrido virtual 360°", label: "Recorrido virtual 360°" },
  { value: "Fotografía profesional HDR", label: "Fotografía profesional HDR" },
  { value: "Producción audiovisual", label: "Producción audiovisual" },
  { value: "Contenido para redes", label: "Contenido para redes" },
  { value: "Solución personalizada", label: "Solución personalizada" },
];

export function ContactSection() {
  const [consultaEnviada, setConsultaEnviada] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const nombre = formData.get("nombre")?.toString().trim();
    const empresa = formData.get("empresa")?.toString().trim();
    const localidad = formData.get("localidad")?.toString().trim();
    const whatsapp = formData.get("whatsapp")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const servicio = formData.get("servicio")?.toString().trim();
    const mensaje = formData.get("mensaje")?.toString().trim();

    const textoWhatsApp = [
      "Hola AR360°, quiero realizar una consulta.",
      "",
      `Nombre: ${nombre}`,
      empresa ? `Empresa / emprendimiento: ${empresa}` : "",
      localidad ? `Localidad: ${localidad}` : "",
      `WhatsApp: ${whatsapp}`,
      email ? `Email: ${email}` : "",
      `Servicio: ${servicio}`,
      mensaje ? "" : "",
      mensaje ? `Mensaje:\n${mensaje}` : "",
    ]
      .filter((linea) => linea !== "")
      .join("\n");

    const urlWhatsApp = `https://wa.me/5492241570216?text=${encodeURIComponent(textoWhatsApp)}`;

    form.reset();
    setConsultaEnviada(true);
    window.open(urlWhatsApp, "_blank");

    setTimeout(() => setConsultaEnviada(false), 5000);
  };

  return (
    <section className="contact-section" id="contacto">
      <div className="container">
        <div className="contact-inner">
          <div className="contact-copy">
            <h2>¿Querés convertir tu espacio en una experiencia?</h2>
            <p>
              Contanos qué necesitás y analizamos juntos la mejor forma de
              mostrar, comunicar y promocionar tu proyecto.
            </p>

            <Button
              variant="primary"
              href="https://wa.me/5492241570216"
              target="_blank"
              rel="noreferrer"
            >
              Contactar por WhatsApp
            </Button>

            {consultaEnviada && (
              <p className="contact-success">
                Consulta preparada correctamente. Se abrió WhatsApp para que puedas
                revisar y enviar el mensaje.
              </p>
            )}
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="nombre">Nombre</label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Tu nombre"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="empresa">Empresa / emprendimiento</label>
              <input
                id="empresa"
                name="empresa"
                type="text"
                placeholder="Nombre de tu empresa o emprendimiento"
              />
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="localidad">Localidad</label>
                <input
                  id="localidad"
                  name="localidad"
                  type="text"
                  placeholder="Chascomús"
                />
              </div>

              <div className="form-field">
                <label htmlFor="whatsapp">WhatsApp</label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  placeholder="11 1234 5678"
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="tu@email.com"
              />
            </div>

            <div className="form-field">
              <label htmlFor="servicio">Servicio que te interesa</label>
              <select
                id="servicio"
                name="servicio"
                defaultValue=""
                required
              >
                {servicioOptions.map((opt) => (
                  <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="5"
                placeholder="Contanos brevemente qué necesitás..."
              ></textarea>
            </div>

            <Button type="submit" variant="primary" className="contact-submit">
              Enviar consulta
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}