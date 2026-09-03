import type { Metadata } from 'next';
import { ContactBand, JsonLd, SiteFooter, SiteHeader } from '../components';
import { siteConfig } from '../siteConfig';

export const metadata: Metadata = {
  title: 'Why Choose DailyWala',
  description:
    'Why choose DailyWala for hyperlocal worker discovery, individual and bulk hiring, structured worker information, and workforce fulfilment.',
  alternates: { canonical: '/why-us/' },
  openGraph: {
    title: 'Why Choose DailyWala',
    description:
      'DailyWala helps homes, contractors, and businesses find suitable nearby workers for individual and bulk requirements.',
    url: '/why-us/',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'DailyWala hyperlocal worker discovery and hiring platform' }],
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
        <section className="services-new-hero why-new-hero">
          <div className="hero-copy">
            <p className="hero-kicker"><span aria-hidden="true" /> Why DailyWala</p>
            <h1>A faster path to the right worker nearby</h1>
            <p className="hero-lede">
              DailyWala organizes discovery around the requirement, work location, worker skill, and availability - not
              around posting a job and waiting for applications.
            </p>
          </div>
        </section>

        <section className="section service-groups why-card-grid" aria-label="Why choose DailyWala">
          <article className="service-card why-card why-card-verified">
            <h2>Hyperlocal by design</h2>
            <p>Begin with the work location so discovery can focus on relevant workers nearby without publicly exposing precise private location details.</p>
          </article>
          <article className="service-card why-card why-card-wages">
            <h2>Structured worker information</h2>
            <p>Where supported by application data, compare skill, sub-skill, experience, rating, availability, and rate before selecting.</p>
          </article>
          <article className="service-card why-card why-card-work">
            <h2>One worker or many</h2>
            <p>Handle a home requirement, a recurring shift, a construction crew, or an ongoing facility workforce through the appropriate flow.</p>
          </article>
        </section>

        <section className="section process-section sketch-process-band">
          <div>
            <p className="eyebrow">Reliable coordination</p>
            <h2>From requirement to confirmation</h2>
          </div>
          <ol className="process-list">
            <li><strong>Describe the requirement.</strong><span>Select service, sub-skill, work location, date, shift, and worker count.</span></li>
            <li><strong>Review suitable workers.</strong><span>Use the available profile and fulfilment information to narrow the right options.</span></li>
            <li><strong>Book and track.</strong><span>Follow assignment and confirmation in a structured DailyWala flow.</span></li>
          </ol>
        </section>

        <ContactBand />
      </main>
      <SiteFooter />
      <JsonLd data={whyUsPage} />
    </>
  );
}
