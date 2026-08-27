import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "../data/faqs";
import SectionHeading from "../components/SectionHeading";

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section id="faq" className="section-pad bg-cream">
      <div className="container-wide grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
        <SectionHeading eyebrow="Questions, gently answered" title={<>Before you <span className="italic">arrive.</span></>} text="Everything here is intentionally editable as the studio grows." />
        <div className="border-t border-deep/15">
          {faqs.map((faq, index) => {
            const isOpen = active === index;
            return (
              <div key={faq.question} className="border-b border-deep/15">
                <button
                  type="button"
                  onClick={() => setActive(isOpen ? -1 : index)}
                  className="focus-ring flex w-full items-center justify-between gap-5 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="display text-2xl sm:text-3xl">{faq.question}</span>
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-deep/15 transition ${isOpen ? "rotate-180 bg-deep text-white" : ""}`}>
                    <ChevronDown size={15} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <p className="max-w-2xl pb-6 pr-12 text-sm leading-7 text-ink/60">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
