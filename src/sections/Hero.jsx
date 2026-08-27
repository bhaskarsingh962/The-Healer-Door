import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { images } from "../data/images";
import { getWhatsAppUrl } from "../utils/whatsapp";
import MagneticButton from "../components/MagneticButton";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.25]);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - bounds.left) / bounds.width;
    const py = (event.clientY - bounds.top) / bounds.height;

    setTilt({
      x: (0.5 - py) * 12,
      y: (px - 0.5) * 16,
    });
  };

  return (
    <section id="home" className="grain relative min-h-[100svh] overflow-hidden bg-deep text-white">
      <motion.div
        onMouseMove={handlePointerMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        style={{ y, rotateX: tilt.x + 5, rotateY: tilt.y - 8 }}
        className="perspective-3d absolute inset-0"
      >
        <img
          src={images.hero}
          alt="Woman practicing yoga in a calm natural setting"
          className="h-full w-full scale-[1.08] object-cover object-center opacity-75"
          style={{ transform: "translateZ(0) scale(1.08)" }}
        />
      </motion.div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(183,140,90,0.22),transparent_25%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.1),transparent_20%),linear-gradient(90deg,rgba(18,28,22,.78),rgba(18,28,22,.34)_55%,rgba(18,28,22,.2))]" />
      <div className="absolute inset-0 bg-gradient-to-t from-deep via-transparent to-deep/15" />

      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-sand/20 blur-3xl" />
      <div className="absolute right-10 top-24 h-80 w-80 rounded-full bg-cream/10 blur-3xl" />
      <div className="absolute left-1/2 top-1/3 h-px w-[60vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent blur-sm" />

      <motion.div
        animate={{ x: [0, 10, 0], y: [0, -12, 0] }}
        transition={{ duration: 9, ease: "easeInOut", repeat: Infinity }}
        className="float-orb left-[10%] top-[18%] h-40 w-40 opacity-60"
      />
      <motion.div
        animate={{ x: [0, -12, 0], y: [0, 12, 0] }}
        transition={{ duration: 11, ease: "easeInOut", repeat: Infinity }}
        className="float-orb right-[12%] top-[26%] h-52 w-52 opacity-40"
      />

      <div className="particle-layer z-0" aria-hidden="true">
        {[...Array(18)].map((_, index) => (
          <span
            key={index}
            className="particle"
            style={{
              left: `${(index * 17) % 100}%`,
              top: `${(index * 23) % 100}%`,
              width: `${8 + (index % 5) * 4}px`,
              height: `${8 + (index % 5) * 4}px`,
              animationDelay: `${index * 0.8}s`,
              animationDuration: `${12 + (index % 6) * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container-wide relative z-10 flex min-h-[100svh] items-end pb-16 pt-36 sm:pb-20 lg:pb-24">
        <motion.div style={{ opacity }} className="max-w-5xl">
          <p className="eyebrow mb-7 text-sand">
            The Healer Door · Yoga + Mat Pilates
          </p>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.95, duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="display max-w-4xl text-7xl leading-[.78] tracking-[-.045em] sm:text-8xl lg:text-[10rem]"
            >
              Come back
              <br />
              <span className="ml-[9vw] italic text-sand">to yourself.</span>
            </motion.h1>
          </div>

          <div className="mt-9 flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.35, duration: 0.7 }}
              className="max-w-md text-sm leading-7 text-white/70"
            >
              Yoga & Mat Pilates for movement, balance and a deeper connection with yourself.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.45, duration: 0.7 }}
              className="perspective-3d flex flex-wrap gap-3"
            >
              <motion.div
                whileHover={{ rotateX: 8, rotateY: -10, translateY: -4 }}
                transition={{ type: "spring", stiffness: 180, damping: 14 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <MagneticButton
                  onClick={() => window.open(getWhatsAppUrl(), "_blank", "noopener,noreferrer")}
                  className="inline-flex items-center gap-3 bg-white px-5 py-3 text-[10px] font-bold uppercase tracking-[.14em] text-deep shadow-[0_18px_40px_rgba(255,255,255,0.18)]"
                >
                  Begin your practice <ArrowUpRight size={14} />
                </MagneticButton>
              </motion.div>

              <motion.a
                href="#classes"
                whileHover={{ rotateX: 8, rotateY: 10, translateY: -4 }}
                transition={{ type: "spring", stiffness: 180, damping: 14 }}
                className="inline-flex items-center gap-3 border border-white/35 px-5 py-3 text-[10px] font-bold uppercase tracking-[.14em] text-white transition hover:bg-white hover:text-deep"
              >
                Explore classes
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.7 }}
        className="absolute bottom-7 right-6 z-10 flex items-center gap-3 text-[9px] uppercase tracking-[.18em] text-white/60 sm:right-10"
      >
        Scroll to enter
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/5 transition hover:bg-white/10">
          <ArrowDown size={14} className="animate-bounce" />
        </span>
      </motion.a>
    </section>
  );
}
