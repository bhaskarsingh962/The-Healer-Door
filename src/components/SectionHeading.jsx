import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  dark = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl`}
    >
      {eyebrow && (
        <p className={`eyebrow mb-5 ${dark ? "text-sand" : "text-clay"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`display text-5xl leading-[.94] sm:text-6xl lg:text-7xl ${dark ? "text-white" : "text-deep"}`}>
        {title}
      </h2>
      {text && (
        <p className={`mt-6 max-w-2xl text-sm leading-7 ${align === "center" ? "mx-auto" : ""} ${dark ? "text-white/65" : "text-ink/65"}`}>
          {text}
        </p>
      )}
    </motion.div>
  );
}
