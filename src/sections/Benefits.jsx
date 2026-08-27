import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";

const groups = [
  {
    label: "Physical",
    items: ["Flexibility", "Mobility", "Strength", "Balance", "Body awareness"],
  },
  {
    label: "Mental",
    items: ["Mindfulness", "Relaxation", "Focus", "Presence"],
  },
  {
    label: "Lifestyle",
    items: ["Consistency", "Better movement habits", "Connection with your body"],
  },
];

export default function Benefits() {
  const [active, setActive] = useState(0);

  return (
    <section id="benefits" className="section-pad overflow-hidden bg-sand/35">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <SectionHeading
            eyebrow="Why the healer door"
            title={<>More than a <span className="italic">workout.</span></>}
            text="A practice can be strong and soft at the same time. Explore the qualities that shape the experience."
          />

          <div className="lg:pl-16">
            <div className="flex flex-wrap gap-2 border-b border-deep/15 pb-3">
              {groups.map((group, i) => (
                <button
                  key={group.label}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`focus-ring px-4 py-2 text-[10px] font-bold uppercase tracking-[.15em] transition ${active === i ? "bg-deep text-white" : "text-ink/50 hover:text-deep"}`}
                  aria-pressed={active === i}
                >
                  {group.label}
                </button>
              ))}
            </div>

            <div className="relative mt-8 min-h-64">
              <AnimatePresence mode="wait">
                <motion.div
                  key={groups[active].label}
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -18 }}
                  transition={{ duration: .35 }}
                >
                  {groups[active].items.map((item, index) => (
                    <div key={item} className="flex items-center justify-between border-b border-deep/10 py-5">
                      <span className="display text-3xl sm:text-4xl">{item}</span>
                      <span className="text-[10px] text-clay">0{index + 1}</span>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
