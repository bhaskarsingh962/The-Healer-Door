import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [point, setPoint] = useState({ x: -50, y: -50 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    const update = () => setEnabled(media.matches);
    update();
    media.addEventListener?.("change", update);

    const move = (e) => setPoint({ x: e.clientX, y: e.clientY });
    const overInteractive = (e) => {
      const target = e.target;
      setActive(Boolean(target.closest("a,button,img")));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", overInteractive);
    return () => {
      media.removeEventListener?.("change", update);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", overInteractive);
    };
  }, []);

  if (!enabled) return null;

  return (
    <motion.div
      animate={{ x: point.x - 7, y: point.y - 7, scale: active ? 2.3 : 1 }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.25 }}
      className="pointer-events-none fixed left-0 top-0 z-[90] h-3.5 w-3.5 rounded-full border border-deep bg-cream/10 mix-blend-difference"
      aria-hidden="true"
    />
  );
}
