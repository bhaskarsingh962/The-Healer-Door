import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navigation } from "../data/navigation";
import Button from "./Button";
import { getWhatsAppUrl } from "../utils/whatsapp";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-cream/90 py-3 shadow-sm backdrop-blur-md" : "bg-transparent py-5"}`}>
      <div className="container-wide flex items-center justify-between">
        <a href="#home" onClick={close} className={`display text-2xl font-semibold tracking-tight ${scrolled ? "text-deep" : "text-white"}`}>
          The Healer <span className="italic">Door</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`focus-ring text-[10px] font-bold uppercase tracking-[0.12em] transition-colors ${scrolled ? "text-ink/70 hover:text-deep" : "text-white/80 hover:text-white"}`}
            >
              {item.label}
            </a>
          ))}
          <Button href="#booking" variant="light" className="ml-1 !px-4 !py-2.5 shadow-[0_12px_28px_rgba(38,50,43,0.08)]">
            Book a Session
          </Button>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`focus-ring flex h-10 w-10 items-center justify-center lg:hidden ${scrolled ? "text-deep" : "text-white"}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="absolute inset-x-0 top-full border-t border-deep/10 bg-cream px-5 pb-7 pt-4 shadow-lg lg:hidden"
          >
            <nav className="flex flex-col">
              {navigation.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.035 }}
                  className="border-b border-deep/10 py-3.5 text-sm font-medium"
                >
                  {item.label}
                </motion.a>
              ))}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                onClick={close}
                className="mt-4 inline-flex justify-center bg-deep px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-white"
              >
                WhatsApp Kanishka
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
