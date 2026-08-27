import { useState } from "react";
import { Check, Mail, MessageCircle, Send } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { getBookingMessage, getWhatsAppUrl } from "../utils/whatsapp";
import { getBookingMailto } from "../utils/email";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  interestedIn: "Yoga",
  date: "",
  time: "",
  message: "",
};

export default function Booking() {
  const [form, setForm] = useState(initialForm);
  const [ready, setReady] = useState(false);

  const update = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
    setReady(false);
  };

  const valid = form.name.trim() && form.phone.trim();

  const prepare = (event) => {
    event.preventDefault();
    if (!valid) return;
    setReady(true);
  };

  const sendWhatsApp = () => {
    window.open(getWhatsAppUrl(getBookingMessage(form)), "_blank", "noopener,noreferrer");
  };

  const sendEmail = () => {
    window.location.href = getBookingMailto(form);
  };

  return (
    <section id="booking" className="section-pad bg-deep text-white">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <SectionHeading
              eyebrow="Book / enquire"
              title={<>Open the <span className="italic text-sand">door.</span></>}
              text="Tell Kanishka what you are looking for. Your enquiry is prepared in the browser and sent directly through WhatsApp or email."
              dark
            />
            <div className="mt-8 flex items-start gap-3 border-l border-gold/50 pl-4 text-xs leading-6 text-white/55">
              <Send size={15} className="mt-1 shrink-0 text-gold" />
              <p>There is no automatic booking or database. Kanishka will confirm your session personally.</p>
            </div>
          </div>

          <motion.form
            onSubmit={prepare}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .1 }}
            className="border border-white/12 bg-white/[.035] p-5 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full name" name="name" value={form.name} onChange={update} required />
              <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={update} required />
              <Field label="Email" name="email" type="email" value={form.email} onChange={update} />
              <label className="grid gap-2">
                <span className="text-[9px] font-bold uppercase tracking-[.15em] text-sand">Interested in</span>
                <select name="interestedIn" value={form.interestedIn} onChange={update} className="border-b border-white/20 bg-transparent px-0 py-3 text-sm text-white outline-none focus:border-gold">
                  <option className="text-deep">Yoga</option>
                  <option className="text-deep">Mat Pilates</option>
                  <option className="text-deep">Private Session</option>
                  <option className="text-deep">General Enquiry</option>
                </select>
              </label>
              <Field label="Preferred date" name="date" type="date" value={form.date} onChange={update} />
              <Field label="Preferred time" name="time" type="time" value={form.time} onChange={update} />
              <label className="grid gap-2 sm:col-span-2">
                <span className="text-[9px] font-bold uppercase tracking-[.15em] text-sand">Message</span>
                <textarea name="message" rows="4" value={form.message} onChange={update} placeholder="Tell us a little about what you'd like to explore..." className="resize-none border-b border-white/20 bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-gold" />
              </label>
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex items-center gap-3 bg-cream px-5 py-3 text-[10px] font-bold uppercase tracking-[.15em] text-deep transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
              disabled={!valid}
            >
              Prepare my enquiry <Send size={14} />
            </button>

            {ready && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-7 border border-gold/40 bg-gold/10 p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-white"><Check size={15} /></span>
                  <div>
                    <p className="font-medium">Your enquiry is ready to send.</p>
                    <p className="mt-1 text-xs leading-6 text-white/55">Kanishka will confirm your session personally.</p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <button type="button" onClick={sendWhatsApp} className="inline-flex items-center gap-2 bg-[#285c43] px-4 py-3 text-[10px] font-bold uppercase tracking-[.12em] text-white hover:brightness-110">
                    <MessageCircle size={15} /> Send via WhatsApp
                  </button>
                  <button type="button" onClick={sendEmail} className="inline-flex items-center gap-2 border border-white/20 px-4 py-3 text-[10px] font-bold uppercase tracking-[.12em] hover:bg-white hover:text-deep">
                    <Mail size={15} /> Send via Email
                  </button>
                </div>
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", value, onChange, required = false }) {
  return (
    <label className="grid gap-2">
      <span className="text-[9px] font-bold uppercase tracking-[.15em] text-sand">
        {label}{required ? " *" : ""}
      </span>
      <input
        required={required}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="border-b border-white/20 bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-gold"
      />
    </label>
  );
}
