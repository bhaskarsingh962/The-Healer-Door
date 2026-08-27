import { Instagram as InstagramIcon, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { images } from "../data/images";
import SectionHeading from "../components/SectionHeading";

const cards = [
  { image: images.studio, title: "The studio" },
  { image: images.nature, title: "Find stillness" },
  { image: images.movement, title: "Keep moving" },
];

export default function Instagram() {
  return (
    <section className="section-pad bg-paper">
      <div className="container-wide">
        <SectionHeading eyebrow="Follow the journey" title="A little more life beyond the door." />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {cards.map((card, i) => (
            <motion.a
              key={card.title}
              href="https://www.instagram.com/thehealerdoor"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -6 }}
              className="group image-wrap relative aspect-[4/5] overflow-hidden"
            >
              <img src={card.image} alt={card.title} loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/75 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between text-white">
                <div>
                  <p className="eyebrow text-sand">Instagram</p>
                  <p className="display mt-2 text-3xl">{card.title}</p>
                </div>
                <ArrowUpRight size={20} className="transition group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-deep/10 pt-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <InstagramIcon size={18} />
            <span className="text-sm">@thehealerdoor</span>
          </div>
          <div className="flex flex-wrap gap-5 text-[10px] font-bold uppercase tracking-[.14em]">
            <a href="https://www.instagram.com/thehealerdoor" target="_blank" rel="noreferrer" className="hover:text-clay">The Healer Door</a>
            <a href="https://www.instagram.com/kanishka_solankii" target="_blank" rel="noreferrer" className="hover:text-clay">Kanishka Solanki</a>
          </div>
        </div>
      </div>
    </section>
  );
}
