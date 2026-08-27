import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { images } from "../data/images";
import Reveal from "../components/Reveal";

const steps = ["Arrive", "Breathe", "Move", "Strengthen", "Reconnect", "Leave lighter"];

export default function Journey() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="experience" ref={ref} className="relative overflow-hidden bg-paper">
      <div className="container-wide py-24 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr]">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <p className="eyebrow text-clay">The experience</p>
            <h2 className="display mt-5 text-6xl leading-[.9] text-deep sm:text-7xl">
              Before the door.
              <br />
              <span className="italic">Beyond it.</span>
            </h2>
            <p className="mt-7 max-w-sm text-sm leading-7 text-ink/60">
              A simple ritual of arriving, listening, moving and reconnecting — one step at a time.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-[25px] top-4 bottom-4 w-px bg-deep/12 sm:left-[31px]" />
            {steps.map((step, index) => (
              <Reveal key={step} delay={index * .04} className="relative mb-12 pl-16 sm:pl-20">
                <span className="absolute left-0 top-0 flex h-[52px] w-[52px] items-center justify-center rounded-full border border-deep/15 bg-paper text-[10px] font-bold sm:h-[62px] sm:w-[62px]">
                  0{index + 1}
                </span>
                <p className="eyebrow text-clay">Step 0{index + 1}</p>
                <h3 className="display mt-2 text-5xl text-deep sm:text-6xl">{step}</h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-ink/55">
                  A quiet invitation to become more present in your body and your practice.
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="door-frame relative mt-12 h-[48vh] min-h-[360px] overflow-hidden bg-deep">
          <motion.img
            style={{ y: imageY }}
            src={images.outdoor}
            alt="Outdoor movement and nature"
            loading="lazy"
            className="absolute -inset-[10%] h-[120%] w-[120%] object-cover"
          />
          <div className="absolute inset-0 bg-deep/25" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="display max-w-xl px-6 text-center text-5xl leading-[.9] text-white sm:text-7xl">
              Move through the door.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
