import { serviceSkills } from './services/serviceCatalog';

export const siteConfig = {
  name: 'Dailywala',
  domain: 'https://www.dailywala.in',
  phoneDisplay: '+91 74166 79509',
  phoneHref: 'tel:+917416679509',
  whatsappHref: 'https://wa.me/917416679509?text=Hi',
  email: 'contact@dailywala.in',
  supportEmail: 'support@dailywala.in',
  socialLinks: {
    facebook: 'https://www.facebook.com/dailywala/',
    x: 'https://x.com/dailywala_in',
    instagram: 'https://www.instagram.com/dailywalaofficial/',
  },
  description:
    'Dailywala is a hyperlocal workforce marketplace helping homes and businesses find nearby workers for individual service needs or complete workforce requirements.',
  addressLocality: 'Tirupati',
  addressCountry: 'IN',
};

export const services = serviceSkills.map((service) => service.title);
