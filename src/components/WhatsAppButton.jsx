import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { getWhatsAppUrl } from "../utils/whatsapp";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -4 }}
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-white px-4 py-3 text-deep shadow-xl shadow-deep/15 focus-ring sm:bottom-7 sm:right-7"
      aria-label="Chat with Kanishka on WhatsApp"
    >
      <span className="absolute inset-0 -z-10 rounded-full border border-gold/60 animate-ping opacity-20" />
      <MessageCircle size={18} />
      <span className="hidden text-[10px] font-bold uppercase tracking-[0.14em] sm:inline">
        Chat with Kanishka
      </span>
    </motion.a>
  );
}
