import type { Metadata } from 'next';
import { DailyWalaWordmark, JsonLd, SiteFooter, SiteHeader } from '../components';
import { siteConfig } from '../siteConfig';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact DailyWala for verified daily-wage workers, worker registration, customer onboarding, and app support.',
  alternates: { canonical: '/contact/' },
};

export default function ContactPage() {
  const contactPage = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact DailyWala',
    url: `${siteConfig.domain}/contact/`,
    mainEntity: {
      '@type': 'Organization',
      name: siteConfig.name,
      telephone: siteConfig.phoneDisplay,
      email: siteConfig.email,
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'general enquiries',
          email: siteConfig.email,
          telephone: siteConfig.phoneDisplay,
        },
        {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          email: siteConfig.supportEmail,
        },
      ],
    },
  };

  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero compact-hero contact-hero">
          <div className="hero-copy">
            <p className="eyebrow">Contact us</p>
            <h1>Talk to <DailyWalaWordmark className="inline-wordmark on-dark-wordmark" /></h1>
            <p>For worker hiring, partner registration, support, or business enquiries, reach the team directly.</p>
          </div>
        </section>

        <section className="section contact-layout">
          <div className="contact-details">
            <h2><DailyWalaWordmark className="inline-wordmark" /> support</h2>
            <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
            <p>{siteConfig.addressLocality}, India</p>
          </div>
          <form className="contact-form" action={`mailto:${siteConfig.email}`} method="post" encType="text/plain">
            <label>
              Full name
              <input name="name" autoComplete="name" required />
            </label>
            <label>
              Phone
              <input name="phone" autoComplete="tel" inputMode="tel" required />
            </label>
            <label>
              Message
              <textarea name="message" rows={5} />
            </label>
            <button type="submit">Send enquiry</button>
          </form>
        </section>
      </main>
      <SiteFooter />
      <JsonLd data={contactPage} />
    </>
  );
}
