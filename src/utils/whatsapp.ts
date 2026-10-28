// Replace with the boutique's WhatsApp Business number.
// Use country code without +, spaces, or dashes.
const WHATSAPP_NUMBER = '+919845996077';

export function getWhatsAppEnquiryLink(productName: string): string {
  const message = `Hello JYOTHI JAIN Boutique! I'm interested in ${productName}. Could you please share more details?`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}