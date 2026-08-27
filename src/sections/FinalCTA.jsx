import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { images } from "../data/images";
import { getWhatsAppUrl } from "../utils/whatsapp";

export default function FinalCTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  return (
    <section ref={ref} className="relative min-h-[80svh] overflow-hidden bg-deep text-white">
      <motion.img
        style={{ scale }}
        src={images.closing}
        alt="Quiet mindful moment in nature"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-deep/65" />
      <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/30 to-transparent" />
      <div className="container-wide relative z-10 flex min-h-[80svh] flex-col justify-end pb-14 pt-20 sm:pb-20">
        <p className="eyebrow text-sand">Beyond the door</p>
        <h2 className="display mt-5 max-w-4xl text-7xl leading-[.82] sm:text-8xl lg:text-[9.5rem]">
          Your body has been <span className="italic text-sand">waiting.</span>
        </h2>
        <div className="mt-8 flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
          <p className="max-w-md text-sm leading-7 text-white/65">
            Step into The Healer Door. Begin with a conversation, then let the practice unfold.
          </p>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex w-fit items-center gap-3 bg-cream px-6 py-4 text-[10px] font-bold uppercase tracking-[.15em] text-deep"
          >
            Begin your practice
            <ArrowUpRight size={15} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
