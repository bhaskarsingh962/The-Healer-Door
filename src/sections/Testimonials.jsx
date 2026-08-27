import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "../data/testimonials";
import SectionHeading from "../components/SectionHeading";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const item = testimonials[active];

  const prev = () => setActive((active - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((active + 1) % testimonials.length);

  return (
    <section id="testimonials" className="section-pad bg-sand/35">
      <div className="container-wide">
        <SectionHeading eyebrow="Words from the room" title="A space worth returning to." />
        <div className="mt-12 grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
          <div className="display text-8xl text-clay/50">“</div>
          <div>
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .45 }}
              className="max-w-3xl"
            >
              <Quote size={20} className="mb-6 text-gold" />
              <p className="display text-4xl leading-[1.05] text-deep sm:text-5xl lg:text-6xl">
                {item.review}
              </p>
              <div className="mt-8">
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[.14em] text-clay">{item.className}</p>
              </div>
            </motion.div>

            <div className="mt-10 flex items-center gap-3">
              <button onClick={prev} className="focus-ring flex h-11 w-11 items-center justify-center border border-deep/20 hover:bg-deep hover:text-white" aria-label="Previous testimonial">
                <ChevronLeft size={17} />
              </button>
              <button onClick={next} className="focus-ring flex h-11 w-11 items-center justify-center border border-deep/20 hover:bg-deep hover:text-white" aria-label="Next testimonial">
                <ChevronRight size={17} />
              </button>
              <div className="ml-2 flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-1.5 transition-all ${i === active ? "w-8 bg-deep" : "w-2 bg-deep/20"}`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
            <p className="mt-6 text-[10px] uppercase tracking-[.12em] text-ink/40">
              Demo testimonials — replace with real client reviews.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
