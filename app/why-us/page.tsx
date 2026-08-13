import type { Metadata } from 'next';
import { ContactBand, DailyWalaWordmark, JsonLd, SiteFooter, SiteHeader } from '../components';
import { siteConfig } from '../siteConfig';

export const metadata: Metadata = {
  title: 'Why Choose DailyWala',
  description:
    'Why choose DailyWala for verified daily-wage workers, transparent wage selection, request tracking, and faster workforce coordination.',
  alternates: { canonical: '/why-us/' },
  openGraph: {
    title: 'Why Choose DailyWala',
    description:
      'DailyWala helps customers hire verified workers for construction, repairs, home, business, and site support needs.',
    url: '/why-us/',
    images: [{ url: '/images/services-hero-sketch.png', width: 1200, height: 630, alt: 'DailyWala verified worker hiring platform' }],
  },
};

export default function WhyUsPage() {
  const whyUsPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Why Choose DailyWala',
    url: `${siteConfig.domain}/why-us/`,
    description: metadata.description,
    about: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.domain,
    },
  };

  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero compact-hero services-hero">
          <div className="hero-copy">
            <p className="eyebrow">Why us</p>
            <h1>Why choose <DailyWalaWordmark className="inline-wordmark on-dark-wordmark" />?</h1>
            <p>
              Hire workers for construction, sites, homes, and businesses with verified profiles, clearer wage choices,
              and request tracking from booking to closure.
            </p>
          </div>
        </section>

        <section className="section service-groups why-card-grid" aria-label="Why choose DailyWala">
          <article className="service-card why-card why-card-verified">
            <h2>Verified worker profiles</h2>
            <p>Customer requests are matched with registered workers whose skills, documents, and availability are captured in the platform.</p>
          </article>
          <article className="service-card why-card why-card-wages">
            <h2>Transparent wage choices</h2>
            <p>Customers can select workers by cost preference, rating preference, or a balanced option based on the job requirement.</p>
          </article>
          <article className="service-card why-card why-card-work">
            <h2>Built for everyday work</h2>
            <p>DailyWala supports construction trades, repair work, driving, security, store support, admin help, and domestic services.</p>
          </article>
        </section>

        <section className="section process-section sketch-process-band">
          <div>
            <p className="eyebrow">Reliable coordination</p>
            <h2>From request to worker assignment</h2>
          </div>
          <ol className="process-list">
            <li><strong>Book by need.</strong><span>Select trade, sub-category, location, date, crew size, and daily wage preference.</span></li>
            <li><strong>Track fulfilment.</strong><span>Assignments, worker attendance, closure, and partial availability are handled inside the flow.</span></li>
            <li><strong>Keep records clear.</strong><span>Customers and admins can see request choices, worker details, payment state, and follow-up status.</span></li>
          </ol>
        </section>

        <ContactBand />
      </main>
      <SiteFooter />
      <JsonLd data={whyUsPage} />
    </>
  );
}
