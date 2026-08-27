export const WHATSAPP_NUMBER = "916376964628";

export const defaultWhatsAppMessage =
  "Hi Kanishka, I'm interested in The Healer Door's yoga and mat Pilates. I'd like to know more about the classes and booking process.";

export function getWhatsAppUrl(message = defaultWhatsAppMessage) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getBookingMessage(form) {
  return [
    "Hi Kanishka, I'd like to enquire about a session at The Healer Door.",
    "",
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    `Email: ${form.email || "Not provided"}`,
    `Interested in: ${form.interestedIn}`,
    `Preferred date: ${form.date || "Not provided"}`,
    `Preferred time: ${form.time || "Not provided"}`,
    `Message: ${form.message || "No additional message"}`,
  ].join("\n");
}
