import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { images } from "../data/images";
import SectionHeading from "../components/SectionHeading";

const gallery = [
  { src: images.yoga, label: "Yoga", className: "md:row-span-2" },
  { src: images.pilates, label: "Pilates", className: "" },
  { src: images.movement, label: "Movement", className: "" },
  { src: images.nature, label: "Nature", className: "md:row-span-2" },
  { src: images.studio, label: "Studio", className: "" },
  { src: images.calm, label: "Lifestyle", className: "" },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="section-pad bg-cream">
      <div className="container-wide">
        <SectionHeading eyebrow="The visual journal" title={<>A practice that <span className="italic">looks</span> like living.</>} />
        <div className="mt-12 grid auto-rows-[210px] grid-cols-2 gap-3 md:auto-rows-[260px] md:grid-cols-4">
          {gallery.map((item, index) => (
            <motion.button
              key={item.label}
              type="button"
              onClick={() => setSelected(item)}
              initial={{ opacity: 0, rotateX: 12, y: 16 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.06 }}
              whileHover={{
                y: -12,
                rotateX: 10,
                rotateY: -12,
                scale: 1.03,
                boxShadow: "0 42px 80px rgba(18, 28, 22, 0.18)",
              }}
              className={`tilt-card group image-wrap relative text-left focus-ring ${item.className} ${index === 0 ? "col-span-2" : ""}`}
            >
              <img src={item.src} alt={`${item.label} at The Healer Door`} loading="lazy" className="h-full w-full object-cover" style={{ transform: "translateZ(22px) scale(1.03)" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/55 via-deep/0 to-white/0 transition group-hover:from-deep/65" />
              <span className="absolute bottom-4 left-4 text-[10px] font-bold uppercase tracking-[.15em] text-white opacity-0 transition duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
                {item.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-deep/90 p-5 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: .94, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: .94, y: 12 }}
              className="relative max-h-[90vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selected.src} alt={selected.label} className="max-h-[86vh] w-auto max-w-full object-contain" />
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="focus-ring absolute -right-2 -top-12 flex h-9 w-9 items-center justify-center rounded-full bg-cream text-deep"
                aria-label="Close gallery"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
