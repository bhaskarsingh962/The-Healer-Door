import { motion } from "framer-motion";

export default function ImageReveal({ src, alt, className = "", imgClassName = "" }) {
  return (
    <motion.div
      initial={{ clipPath: "inset(14% 0 14% 0)", opacity: 0 }}
      whileInView={{ clipPath: "inset(0% 0 0% 0)", opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
      className={`image-wrap ${className}`}
    >
      <img src={src} alt={alt} loading="lazy" className={`h-full w-full object-cover ${imgClassName}`} />
    </motion.div>
  );
}
