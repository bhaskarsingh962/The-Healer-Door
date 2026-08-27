import { ArrowUpRight } from "lucide-react";

export default function Button({
  children,
  href,
  onClick,
  variant = "dark",
  className = "",
  type = "button",
}) {
  const base =
    "group inline-flex items-center justify-center gap-3 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-300 focus-ring";
  const variants = {
    dark: "bg-deep text-white hover:bg-ink",
    light: "bg-white text-deep hover:bg-cream",
    outline: "border border-current text-current hover:bg-deep hover:text-white",
    gold: "bg-gold text-white hover:brightness-95",
  };

  const content = (
    <>
      <span>{children}</span>
      <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${base} ${variants[variant]} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {content}
    </button>
  );
}
