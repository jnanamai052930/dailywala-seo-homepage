import type { Metadata } from 'next';
import Link from 'next/link';
import { ContactBand, DailyWalaWordmark, JsonLd, SiteFooter, SiteHeader } from '../components';
import { siteConfig } from '../siteConfig';
import { serviceGroups, serviceHref, serviceSkills } from './serviceCatalog';

export const metadata: Metadata = {
  title: 'Services Offered',
  description:
    'DailyWala offers verified workers for electrical, plumbing, carpentry, masonry, welding, scaffolding, driving, security, domestic services, and appliance repair.',
  alternates: { canonical: '/services/' },
};

export default function ServicesPage() {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'DailyWala services',
    itemListElement: serviceSkills.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: service.title,
      url: `${siteConfig.domain}${serviceHref(service.slug)}`,
    })),
  };

  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero compact-hero services-hero">
          <div className="hero-copy">
            <p className="eyebrow">Services offered</p>
            <h1>Verified workers for everyday jobs</h1>
            <p>
              Choose the right trade, crew size, date, and wage preference for construction, maintenance, operations,
              and household support.
            </p>
          </div>
        </section>

        <section className="section service-sketch-section" aria-labelledby="other-services-title">
          <div>
            <p className="eyebrow">More than construction</p>
            <h2 id="other-services-title">Skilled help across site, repair, home, and operations work</h2>
            <p>
              <DailyWalaWordmark className="inline-wordmark" /> covers the trades around a job site and the supporting work around homes, offices, stores,
              and service locations.
            </p>
          </div>
          <img src="/images/services-line-sketch.png" alt="Line sketches of DailyWala service workers and tools" />
        </section>

        <section className="section service-groups">
          {serviceGroups.map((group) => (
            <article className={`service-card service-group-card service-group-card-${group.slug}`} key={group.title}>
              <h2><Link href={serviceHref(group.slug)}>{group.title}</Link></h2>
              <ul>
                {group.items.map((item) => (
                  <li key={item.slug}>
                    <Link href={serviceHref(item.slug)}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="section process-section">
          <div>
            <p className="eyebrow">How it works</p>
            <h2>From request to crew assignment</h2>
          </div>
          <ol className="process-list">
            <li><strong>Select work.</strong><span>Pick category, sub-category, location, date, and crew count.</span></li>
            <li><strong>Choose preference.</strong><span>Compare lowest cost, good-rated value, or high-rated workers.</span></li>
            <li><strong>Track fulfilment.</strong><span>Confirmed workers, attendance, closure, and refunds stay visible in the app.</span></li>
          </ol>
        </section>

        <ContactBand />
      </main>
      <SiteFooter />
      <JsonLd data={itemList} />
    </>
  );
}
