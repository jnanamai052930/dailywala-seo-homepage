import { serviceSkills } from './services/serviceCatalog';

export const siteConfig = {
  name: 'DailyWala',
  domain: 'https://www.dailywala.in',
  phoneDisplay: '+91 74166 79509',
  phoneHref: 'tel:+917416679509',
  email: 'contact@dailywala.in',
  supportEmail: 'support@dailywala.in',
  description:
    'DailyWala is a hyperlocal workforce marketplace helping homes and businesses find nearby workers for individual service needs or complete workforce requirements.',
  addressLocality: 'Tirupati',
  addressCountry: 'IN',
};

const androidFallback = encodeURIComponent('https://dailywala-customer.netlify.app/');
const workerFallback = encodeURIComponent('https://dailywala.netlify.app/');

export const appLinks = {
  customer: {
    label: 'Open DailyWala',
    webFallback: 'https://dailywala-customer.netlify.app/',
    deepLink: 'dailywala://customer',
    androidIntent: `intent://customer#Intent;scheme=dailywala;package=com.dailywalla.app;S.browser_fallback_url=${androidFallback};end`,
    androidStore: '',
    iosStore: '',
  },
  worker: {
    label: 'Open DailyWala',
    webFallback: 'https://dailywala.netlify.app/',
    deepLink: 'dailywala://worker',
    androidIntent: `intent://worker#Intent;scheme=dailywala;package=com.dailywalla.app;S.browser_fallback_url=${workerFallback};end`,
    androidStore: '',
    iosStore: '',
  },
} as const;

export type AppRole = keyof typeof appLinks;

export const services = serviceSkills.map((service) => service.title);
