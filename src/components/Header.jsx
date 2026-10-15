const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#experiencias", label: "Experiencias AR360°" },
  { href: "#sectores", label: "Sectores" },
  { href: "#por-que", label: "Por qué elegir AR360°" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a className="logo" href="#inicio">
          AR360<span>°</span>
        </a>

        <nav className="nav" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}