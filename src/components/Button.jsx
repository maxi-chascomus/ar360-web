export function Button({ children, variant = "primary", href, onClick, type = "button", className = "", ...props }) {
  const baseClasses = "button";
  const variantClasses = variant === "primary" ? "button-primary" : "button-secondary";

  if (href) {
    return (
      <a
        className={`${baseClasses} ${variantClasses} ${className}`}
        href={href}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      type={type}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}