import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { classes } from "../data/classes";
import { getWhatsAppUrl } from "../utils/whatsapp";
import SectionHeading from "../components/SectionHeading";

export default function Classes() {
  return (
    <section id="classes" className="section-pad bg-deep text-white">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Move"
          title={<>Practices for the <span className="italic text-sand">whole</span> you.</>}
          text="Choose a way into the practice. Each offering can be explored at your own pace and discussed directly with Kanishka."
          dark
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {classes.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 35, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: .7, delay: index * .08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -12, rotateX: 8, rotateY: -8, scale: 1.01 }}
              style={{ transformStyle: "preserve-3d" }}
              className="tilt-card group border border-white/12 bg-white/[.035]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={item.image} alt={`${item.title} practice`} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" style={{ transform: "translateZ(18px)" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-deep via-transparent to-transparent opacity-80" />
                <span className="absolute left-5 top-5 text-[10px] font-bold tracking-[.16em] text-sand">{item.number}</span>
                <div className="absolute inset-x-5 bottom-5">
                  <p className="eyebrow text-white/60">{item.subtitle}</p>
                  <h3 className="display mt-2 text-4xl">{item.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm leading-7 text-white/60">{item.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.benefits.map((benefit) => (
                    <span key={benefit} className="border border-white/12 px-2.5 py-1.5 text-[9px] uppercase tracking-[.12em] text-white/55">
                      {benefit}
                    </span>
                  ))}
                </div>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="group/link mt-7 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.15em] text-sand"
                >
                  Enquire on WhatsApp
                  <ArrowUpRight size={14} className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
