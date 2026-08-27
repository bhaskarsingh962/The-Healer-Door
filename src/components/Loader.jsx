import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.55, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-deep text-cream"
      aria-label="Loading The Healer Door"
    >
      <div className="text-center">
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 150 }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          className="mx-auto mb-7 w-20 border-x border-t border-sand/60"
        />
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="eyebrow text-sand"
        >
          The Healer Door
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="mt-3 font-display text-2xl"
        >
          Step inside.
        </motion.p>
      </div>
    </motion.div>
  );
}
