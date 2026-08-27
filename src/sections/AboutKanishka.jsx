import { ArrowUpRight } from "lucide-react";
import { images } from "../data/images";
import ImageReveal from "../components/ImageReveal";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

export default function AboutKanishka() {
  return (
    <section className="section-pad bg-cream">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div className="relative order-2 lg:order-1">
            <ImageReveal
              src={images.founder}
              alt="Kanishka Solanki practicing mindful movement"
              className="aspect-[4/5] max-w-xl"
            />
            <div className="absolute -bottom-7 -right-2 hidden w-44 bg-deep p-5 text-cream sm:block">
              <p className="eyebrow text-sand">The door is open</p>
              <p className="display mt-3 text-2xl leading-none">Move at your own pace.</p>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:pl-10">
            <SectionHeading eyebrow="The person behind the practice" title="Meet Kanishka." />
            <Reveal delay={0.1} className="mt-8 space-y-5 text-sm leading-7 text-ink/70">
              <p>
                Kanishka Solanki is the founder and instructor behind The Healer Door, bringing yoga and mat Pilates together through an intentional, movement-led approach.
              </p>
              <p>
                Her practice is centered on listening to the body, building awareness and creating space to move with more ease and control.
              </p>
              <p className="text-ink">
                Master in Yoga & 200-Hour TTC Certified in Rishikesh, Uttarakhand, India.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-8">
              <a
                href="https://www.instagram.com/kanishka_solankii"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 border-b border-deep/30 pb-2 text-[10px] font-bold uppercase tracking-[.15em]"
              >
                Meet her on Instagram
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
