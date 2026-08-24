import type { Metadata } from 'next';
import Link from 'next/link';
import { ContactBand, JsonLd, SiteFooter, SiteHeader } from '../components';
import { siteConfig } from '../siteConfig';
import { serviceGroups, serviceHref, serviceSkills } from './serviceCatalog';

export const metadata: Metadata = {
  title: 'Workers & Services Near You',
  description:
    'Find nearby construction workers, maids, cooks, electricians, plumbers, technicians, cleaners, drivers, security staff, hospitality workers, and business workforce with DailyWala.',
  keywords: [
    'workers near me', 'labour near me', 'hire workers near me', 'manpower near me',
    'construction workers near me', 'maid near me', 'technician near me',
  ],
  alternates: { canonical: '/services/' },
  openGraph: {
    title: 'Find Workers & Services Near You | DailyWala',
    description: 'Book one nearby worker, recurring help, or a complete workforce by service and work location.',
    url: '/services/',
  },
};

export default function ServicesPage() {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'DailyWala nearby worker services',
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
        <section className="services-new-hero">
          <div>
            <p className="hero-kicker"><span aria-hidden="true" /> Book by service</p>
            <h1>Find Workers &amp; Services Near You</h1>
            <p>
              Choose a workforce category, share the work location and requirement, then discover suitable nearby
              workers - from one person to a complete crew.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="/open/?role=customer">Find workers near me <span aria-hidden="true">→</span></a>
              <Link className="secondary-action on-dark" href="/contact/">Request a workforce</Link>
            </div>
          </div>
          <div className="services-hero-note">
            <span>Location</span><strong>→</strong><span>Service</span><strong>→</strong><span>Worker match</span>
          </div>
        </section>

        <section className="section service-directory" aria-labelledby="service-directory-title">
          <div className="section-intro wide-intro">
            <p className="eyebrow">Structured by the work to be done</p>
            <h2 id="service-directory-title">Explore the DailyWala workforce marketplace</h2>
            <p>
              These services reflect the DailyWala customer experience and worker skill structure. Availability and
              fulfilment depend on the selected location, date, requirement, and active worker supply.
            </p>
          </div>

          <div className="directory-grid">
            {serviceGroups.map((group) => (
              <article className="directory-card" key={group.slug}>
                <header>
                  <div>
                    <h2><Link href={serviceHref(group.slug)}>{group.title}</Link></h2>
                    <p>{group.summary}</p>
                  </div>
                </header>
                <div className="directory-services">
                  {group.items.map((item) => (
                    <Link href={serviceHref(item.slug)} key={item.slug}>
                      <span>{item.title}</span><small>View service →</small>
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section hiring-modes" aria-labelledby="hiring-modes-title">
          <div>
            <p className="eyebrow">Flexible workforce fulfilment</p>
            <h2 id="hiring-modes-title">Choose the hiring mode that fits the requirement</h2>
          </div>
          <div className="hiring-mode-grid">
            <article><span>Individual</span><h3>Book one worker</h3><p>For home services, repairs, driving, or a defined task.</p></article>
            <article><span>Recurring</span><h3>Set a recurring need</h3><p>For household help, hospitality, cleaning, security, or facility operations.</p></article>
            <article><span>Workforce</span><h3>Build your crew</h3><p>For construction sites, projects, restaurants, facilities, and bulk requirements.</p></article>
          </div>
        </section>

        <section className="section privacy-section">
          <div><p className="eyebrow">Location with privacy</p><h2>Nearby does not mean exposed</h2></div>
          <p>
            DailyWala uses the work location to make discovery relevant. Precise worker residential addresses, phone
            numbers, and private location details should not be displayed publicly. Enter a locality or use your area
            in the app to check genuine coverage and services.
          </p>
        </section>

        <ContactBand />
      </main>
      <SiteFooter />
      <JsonLd data={itemList} />
    </>
  );
}
