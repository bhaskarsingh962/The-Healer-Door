import { Instagram, Mail, MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { getWhatsAppUrl } from "../utils/whatsapp";

const contacts = [
  { icon: MessageCircle, label: "WhatsApp", value: "+91 6376 964 628", href: getWhatsAppUrl() },
  { icon: Mail, label: "Email", value: "thehealerdoor@gmail.com", href: "mailto:thehealerdoor@gmail.com" },
  { icon: Instagram, label: "Instagram", value: "@thehealerdoor", href: "https://www.instagram.com/thehealerdoor" },
  { icon: Phone, label: "Owner", value: "@kanishka_solankii", href: "https://www.instagram.com/kanishka_solankii" },
];

export default function Contact() {
  return (
    <section id="contact" className="section-pad bg-paper">
      <div className="container-wide">
        <SectionHeading eyebrow="Stay connected" title={<>Come through the <span className="italic">door.</span></>} text="Reach Kanishka directly for classes, private sessions and general enquiries." />
        <div className="mt-12 grid gap-px bg-deep/10 sm:grid-cols-2 lg:grid-cols-4">
          {contacts.map(({ icon: Icon, label, value, href }) => (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="group bg-paper p-7 transition hover:bg-deep hover:text-white">
              <Icon size={19} className="text-gold" />
              <p className="eyebrow mt-9 text-clay group-hover:text-sand">{label}</p>
              <p className="mt-2 break-words text-sm">{value}</p>
              <ArrowUpRight size={15} className="mt-7 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
