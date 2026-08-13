import Link from 'next/link';
import { ContactBand, DailyWalaWordmark, JsonLd, SiteFooter, SiteHeader } from './components';
import { siteConfig } from './siteConfig';
import { serviceHref, serviceSkills } from './services/serviceCatalog';

export default function HomePage() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.domain,
    email: siteConfig.email,
    telephone: siteConfig.phoneDisplay,
    description: siteConfig.description,
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
  };

  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero home-hero">
          <div className="hero-copy">
            <p className="eyebrow">Verified daily-wage workforce</p>
            <h1>
              <DailyWalaWordmark className="hero-wordmark on-dark-wordmark" />
            </h1>
            <p>
              Hire skilled, semi-skilled, and support workers through a simple platform built for transparent wages,
              verified profiles, and faster workforce coordination.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="/open/">Open DailyWala</a>
              <Link className="secondary-action on-dark" href="/services/">View services</Link>
            </div>
          </div>
        </section>

        <section className="metrics-strip" aria-label="DailyWala highlights">
          <div><strong>Identity verified</strong><span>Worker profiles</span></div>
          <div><strong>Skilled crews</strong><span>Construction and facility needs</span></div>
          <div><strong>Transparent wages</strong><span>Clear daily-rate selection</span></div>
        </section>

        <section className="section two-column">
          <div>
            <p className="eyebrow">Workers for construction, sites, homes, and businesses</p>
            <h2 className="home-intro-heading"><DailyWalaWordmark className="inline-wordmark" /> brings hiring and work discovery into one flow</h2>
            <p>
              From site crews to home repairs and support staff, <DailyWalaWordmark className="inline-wordmark" /> keeps worker requests, availability,
              assignment, and follow-up in a single, clear experience.
            </p>
          </div>
          <div className="app-grid role-grid">
            <article className="app-card role-card customer-card">
              <h3>For customers</h3>
              <p>Book verified workers for home, repair, site, and support needs with clear wages and request tracking.</p>
            </article>
            <article className="app-card role-card contractor-card">
              <h3>For contractor hirers</h3>
              <p>Organize crew requirements by trade, date, location, worker count, and fulfilment status for site work.</p>
            </article>
            <article className="app-card role-card worker-card">
              <h3>For workers</h3>
              <p>Register skills, show availability, receive job notifications, and build earning opportunities through verified work.</p>
            </article>
          </div>
        </section>

        <section className="section services-preview" aria-labelledby="services-title">
          <div className="section-heading">
            <p className="eyebrow">Services offered</p>
            <h2 id="services-title">Workers for daily site and home needs</h2>
            <Link href="/services/">See all services</Link>
          </div>
          <div className="service-list">
            {serviceSkills.slice(0, 8).map((service) => (
              <Link key={service.slug} href={serviceHref(service.slug)}>{service.title}</Link>
            ))}
          </div>
        </section>

        <section className="section vision-section">
          <div className="vision-image">
            <img src="/images/landing-mason-bricks.png" alt="Construction worker using DailyWala services" />
          </div>
          <div>
            <p className="eyebrow">Our vision</p>
            <h2>Bridging the workforce gap</h2>
            <p>
              <DailyWalaWordmark className="inline-wordmark" /> is designed to improve access to consistent work opportunities, predictable wages, and
              transparent hiring for daily-wage workers and the businesses that depend on them.
            </p>
          </div>
        </section>

        <ContactBand />
      </main>
      <SiteFooter />
      <JsonLd data={organization} />
    </>
  );
}
