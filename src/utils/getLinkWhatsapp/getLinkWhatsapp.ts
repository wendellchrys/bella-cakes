export const getLinkWhatsapp = (text: string) => {
  const whatsappBaseURL = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}?text=`;
  const encodedText = encodeURIComponent(text);
  return `${whatsappBaseURL}${encodedText}`;
}
