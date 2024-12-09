export function formatPhoneNumber(phone: string): string {
  // Remove all non-digit characters
  return phone.replace(/\D/g, '');
}

export function createWhatsAppLink(phone: string, message: string = ''): string {
  const formattedPhone = formatPhoneNumber(phone);
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${formattedPhone}${message ? `?text=${encodedMessage}` : ''}`;
}