export function SectionHeader({ kicker, title, description, className = "" }) {
  return (
    <div className={`section-header ${className}`}>
      {kicker && <p className="section-kicker">{kicker}</p>}
      {title && <h2 className="section-title">{title}</h2>}
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}