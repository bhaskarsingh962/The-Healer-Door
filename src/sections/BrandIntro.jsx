import { motion, useScroll, useTransform } from "framer-motion";
import { images } from "../data/images";
import ImageReveal from "../components/ImageReveal";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

export default function BrandIntro() {
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 110]);

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="section-pad relative overflow-hidden bg-paper"
    >
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/30 to-transparent" />
      <div className="container-wide grid items-center gap-14 lg:grid-cols-[.82fr_1.18fr]">
        <motion.div style={{ y: imageY }} className="perspective-3d">
          <ImageReveal
            src={images.meditation}
            alt="Mindful meditation practice in warm natural light"
            className="aspect-[4/5] max-w-lg"
          />
        </motion.div>

        <div className="lg:pl-10">
          <SectionHeading
            eyebrow="Step inside"
            title={<>Your body <span className="italic">knows</span> the way.</>}
            text="The Healer Door is a space to slow down, move with intention and return to what feels present."
          />

          <Reveal className="mt-10 border-t border-deep/10 pt-7">
            <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3">
              {["Movement", "Strength", "Flexibility", "Mindfulness", "Connection", "Self-awareness"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="glass-card group rounded-2xl p-4"
                >
                  <span className="text-[10px] text-clay">0{i + 1}</span>
                  <p className="mt-1 text-sm font-medium transition group-hover:translate-x-1">{item}</p>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </motion.section>
  );
}
