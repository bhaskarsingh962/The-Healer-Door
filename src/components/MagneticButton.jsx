import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MagneticButton({ children, className = "", onClick }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 18 });
  const springY = useSpring(y, { stiffness: 260, damping: 18 });

  const move = (event) => {
    if (window.matchMedia("(max-width: 767px)").matches) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((event.clientX - (rect.left + rect.width / 2)) * 0.12);
    y.set((event.clientY - (rect.top + rect.height / 2)) * 0.12);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      type="button"
      style={{ x: springX, y: springY }}
      onMouseMove={move}
      onMouseLeave={reset}
      onClick={onClick}
      className={`group focus-ring ${className}`}
    >
      {children}
    </motion.button>
  );
}
