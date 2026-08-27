import { Instagram, Mail, MessageCircle, ArrowUp } from "lucide-react";
import { navigation } from "../data/navigation";
import { getWhatsAppUrl } from "../utils/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-deep text-white">
      <div className="container-wide py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_.7fr_.7fr]">
          <div>
            <a href="#home" className="display text-4xl">
              The Healer <span className="italic">Door</span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
              A mindful movement space for yoga, mat Pilates and a deeper connection with yourself.
            </p>
          </div>

          <div>
            <p className="eyebrow text-sand">Explore</p>
            <div className="mt-5 grid gap-3">
              {navigation.slice(0, 6).map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-white/60 transition hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow text-sand">Connect</p>
            <div className="mt-5 grid gap-3 text-sm text-white/60">
              <a href="mailto:thehealerdoor@gmail.com" className="flex items-center gap-2 hover:text-white">
                <Mail size={15} /> thehealerdoor@gmail.com
              </a>
              <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white">
                <MessageCircle size={15} /> +91 6376 964 628
              </a>
              <a href="https://www.instagram.com/thehealerdoor" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white">
                <Instagram size={15} /> @thehealerdoor
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-5 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.14em] text-white/40 sm:flex-row">
          <p>© 2026 The Healer Door. All rights reserved.</p>
          <a href="#home" className="inline-flex items-center gap-2 hover:text-white">
            Back to top <ArrowUp size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}
