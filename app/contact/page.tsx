import type { Metadata } from 'next';
import { DailyWalaWordmark, JsonLd, SiteFooter, SiteHeader } from '../components';
import { siteConfig } from '../siteConfig';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact DailyWala for verified daily-wage workers, worker registration, customer onboarding, and app support.',
  alternates: { canonical: '/contact/' },
};

export default function ContactPage() {
  const emailSubject = 'DailyWala enquiry';
  const emailBody = [
    'Hello DailyWala team,',
    '',
    'Name:',
    'Phone:',
    'Email (optional):',
    'Location:',
    'Work or service needed:',
    'Preferred date:',
    '',
    'Message:',
  ].join('\n');
  const encodedEmail = encodeURIComponent(siteConfig.email);
  const encodedSubject = encodeURIComponent(emailSubject);
  const encodedBody = encodeURIComponent(emailBody);
  const mailAppHref = `mailto:${siteConfig.email}?subject=${encodedSubject}&body=${encodedBody}`;
  const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodedEmail}&su=${encodedSubject}&body=${encodedBody}`;
  const outlookHref = `https://outlook.office.com/mail/deeplink/compose?to=${encodedEmail}&subject=${encodedSubject}&body=${encodedBody}`;

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
            <a href={mailAppHref}>{siteConfig.email}</a>
            <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
            <p>{siteConfig.addressLocality}, India</p>
          </div>
          <div className="contact-action-panel">
            <h2>Direct contact</h2>
            <a className="primary-action contact-action-button" href={siteConfig.phoneHref}>
              <span className="contact-action-icon" aria-hidden="true">tel</span>
              Call DailyWala
            </a>
            <details className="email-options">
              <summary className="secondary-action contact-action-button">
                <span className="contact-action-icon" aria-hidden="true">@</span>
                Email DailyWala
              </summary>
              <div className="email-choice-grid">
                <a href={gmailHref} target="_blank" rel="noreferrer">Gmail</a>
                <a href={outlookHref} target="_blank" rel="noreferrer">Outlook</a>
                <a href={mailAppHref}>Mail app</a>
              </div>
            </details>
          </div>
        </section>
      </main>
      <SiteFooter />
      <JsonLd data={contactPage} />
    </>
  );
}
