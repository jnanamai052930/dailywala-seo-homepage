import type { Metadata } from 'next';
import { DailywalaWordmark, JsonLd, SiteFooter, SiteHeader } from '../components';
import { siteConfig } from '../siteConfig';
import { ContactForm } from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Dailywala for nearby worker hiring, bulk workforce requirements, worker registration, customer onboarding, and app support.',
  alternates: { canonical: '/contact/' },
};

export default function ContactPage() {
  const contactPage = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Dailywala',
    url: `${siteConfig.domain}/contact/`,
    mainEntity: {
      '@type': 'Organization',
      name: siteConfig.name,
      telephone: siteConfig.phoneDisplay,
      email: siteConfig.supportEmail,
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: siteConfig.supportEmail,
        telephone: siteConfig.phoneDisplay,
      },
    },
  };

  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero compact-hero contact-hero">
          <div className="hero-copy">
            <p className="eyebrow">Contact us</p>
            <h1>Talk to <DailywalaWordmark className="inline-wordmark on-dark-wordmark" /></h1>
            <p>For worker hiring, partner registration, support, or business enquiries, reach the team directly.</p>
          </div>
        </section>

        <section className="section contact-layout">
          <div className="contact-details">
            <h2><DailywalaWordmark className="inline-wordmark" /> support</h2>
            <a
              className="contact-icon-link whatsapp-link"
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Message Dailywala support on WhatsApp at ${siteConfig.phoneDisplay}`}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2a9.8 9.8 0 0 0-8.4 14.8L2.1 22l5.3-1.4A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3a8.2 8.2 0 1 1 7 3.8Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.5.2-.4c.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.2-.3-.3-.5-.4Z" />
              </svg>
              <span>{siteConfig.phoneDisplay}</span>
            </a>
            <a
              className="contact-icon-link email-link"
              href={`mailto:${siteConfig.supportEmail}`}
              aria-label={`Email Dailywala support at ${siteConfig.supportEmail}`}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 3.2-8 5-8-5V6l8 5 8-5v1.2Z" />
              </svg>
              <span>{siteConfig.supportEmail}</span>
            </a>
          </div>
          <ContactForm />
        </section>
      </main>
      <SiteFooter />
      <JsonLd data={contactPage} />
    </>
  );
}
