export const SITE_CONFIG = {
  name: 'RECUPERATECH',
  group: 'Grupo INTERATECH',
  fullTitle: 'RECUPERATECH — Grupo INTERATECH',
  segment: 'Montagem, manutenção, upgrade e assistência técnica de computadores e notebooks.',
  description:
    'Montagem, manutenção, upgrades e soluções em tecnologia para computadores e notebooks em Volta Redonda - RJ.',
  url: 'https://recuperatech.com.br',
  locale: 'pt_BR',
  address: {
    street: 'Rua 16, 65',
    neighborhood: 'Vila Santa Cecília',
    city: 'Volta Redonda',
    state: 'RJ',
    postalCode: '27260-110',
    country: 'BR',
    full: 'Rua 16, 65 - Vila Santa Cecília, Volta Redonda - RJ, 27260-110',
  },
  phone: {
    display: '(24) 99243-3013',
    href: 'tel:+5524992433013',
  },
  whatsapp: {
    number: '5524992433013',
    display: '(24) 99243-3013',
    defaultMessage:
      'Olá! Vim pelo site da RECUPERATECH e gostaria de solicitar um orçamento.',
  },
  social: {
    instagram: 'https://www.instagram.com/recuperatech.vr/',
    facebook: 'https://www.facebook.com/p/Recupera-Tech-61593123167359/',
  },
  maps: {
    queryUrl:
      'https://www.google.com/maps/search/?api=1&query=Rua+16%2C+65+-+Vila+Santa+Cec%C3%ADlia%2C+Volta+Redonda+-+RJ%2C+27260-110',
    embedUrl:
      'https://maps.google.com/maps?q=Rua+16,+65,+Vila+Santa+Cecilia,+Volta+Redonda,+RJ,+27260-110&t=&z=16&ie=UTF8&iwloc=&output=embed',
  },
  // URL opcional de endpoint de formulário (ex: Formspree/API própria).
  // Deixar vazio enquanto não houver serviço de recebimento conectado para evitar envios simulados.
  contactFormEndpoint: '',
} as const;

export function buildWhatsAppUrl(message?: string): string {
  const text = encodeURIComponent(message || SITE_CONFIG.whatsapp.defaultMessage);
  return `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${text}`;
}

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Sobre nós', href: '/sobre-nos/' },
  { label: 'Serviços', href: '/servicos/' },
  { label: 'Contato', href: '/contato/' },
  { label: 'Políticas de privacidade', href: '/politica-de-privacidade/' },
] as const;
