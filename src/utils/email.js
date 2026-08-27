export function getBookingMailto(form) {
  const subject = `The Healer Door enquiry — ${form.interestedIn}`;
  const body = [
    "Hi Kanishka,",
    "",
    "I'd like to enquire about a session at The Healer Door.",
    "",
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    `Email: ${form.email || "Not provided"}`,
    `Interested in: ${form.interestedIn}`,
    `Preferred date: ${form.date || "Not provided"}`,
    `Preferred time: ${form.time || "Not provided"}`,
    `Message: ${form.message || "No additional message"}`,
    "",
    "Please confirm the session personally.",
  ].join("\n");

  return `mailto:thehealerdoor@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
