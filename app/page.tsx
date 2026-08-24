import Link from 'next/link';
import { ContactBand, JsonLd, SiteFooter, SiteHeader } from './components';
import { siteConfig } from './siteConfig';
import { featuredServices, serviceGroups, serviceHref } from './services/serviceCatalog';

const workforceBreadth = [
  ['Construction', 'construction-and-skilled-trades'],
  ['Home Help', 'household-and-care-services'],
  ['Cooks & Hospitality', 'hospitality-and-food-workforce'],
  ['Drivers', 'drivers-and-machine-operators'],
  ['Technical & Repair', 'repair-and-technical-services'],
  ['Cleaning & Security', 'facility-and-business-workforce'],
] as const;

const useCases = [
  { label: 'Home', need: 'Need a maid near me', detail: 'One-time or recurring household help' },
  { label: 'Repair', need: 'Need an AC technician today', detail: 'Nearby technical and maintenance support' },
  { label: 'Restaurant', need: 'Need a cook/master', detail: 'Kitchen and hospitality workforce' },
  { label: 'Construction', need: 'Need 15 workers tomorrow', detail: 'Site crews and skilled trades' },
  { label: 'Business', need: 'Need 10 facility cleaners', detail: 'Individual or bulk workforce supply' },
  { label: 'Logistics', need: 'Need drivers and loaders', detail: 'Transport and material movement support' },
];

const differentiators = [
  ['Hyperlocal discovery', 'Start with the work location and discover workers relevant to the requirement nearby.'],
  ['Broad workforce marketplace', 'Construction, household, hospitality, technical, facility, logistics, and business workforce in one place.'],
  ['Availability-led matching', 'See availability and fulfilment signals where supported, so a promising profile can become a confirmed assignment.'],
  ['One worker or a full crew', 'Book for one job, a recurring requirement, or a bulk workforce need across sites and operations.'],
  ['Structured worker discovery', 'Evaluate available profile details such as skills, sub-skills, experience, rating, and rate where provided.'],
  ['Assisted matching', 'Describe the requirement in plain language and let DailyWala help narrow suitable nearby worker options.'],
];

export default function HomePage() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.domain,
    email: siteConfig.email,
    telephone: siteConfig.phoneDisplay,
    description: siteConfig.description,
    knowsAbout: serviceGroups.map((group) => group.title),
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.domain,
    description: siteConfig.description,
  };

  return (
    <>
      <SiteHeader />
      <main>
        <section className="new-hero">
          <div className="new-hero-copy">
            <p className="hero-kicker"><span aria-hidden="true" /> Hyperlocal workers · On demand</p>
            <h1>Find &amp; Hire Workers <em>Near You</em></h1>
            <p className="hero-lede">
              From construction workers and maids to cooks, drivers, electricians, technicians, cleaners, and security
              staff - DailyWala helps homes, contractors, and businesses discover the right workers nearby.
            </p>
            <nav className="hero-breadth" aria-label="DailyWala workforce categories">
              {workforceBreadth.map(([label, slug]) => (
                <Link href={serviceHref(slug)} key={slug}>{label}</Link>
              ))}
            </nav>
            <p className="hero-scale">
              <strong>Hire one worker or an entire workforce.</strong>
              <span>For homes, construction sites, hotels, restaurants, facilities, and businesses.</span>
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="/open/?role=customer">Find Workers Near Me <span aria-hidden="true">→</span></a>
              <Link className="secondary-action" href="/contact/">Post Your Requirement</Link>
              <a className="text-action" href="/open/?role=worker">Find Work Near You</a>
            </div>
            <div className="hero-proof" aria-label="DailyWala capabilities">
              <span>Nearby workers</span><span>Multiple skills</span><span>Individual &amp; bulk hiring</span><span>Assisted matching</span>
            </div>
          </div>

          <aside className="finder-card" aria-label="Find workers by location and service">
            <div className="finder-card-head">
              <div>
                <p>Book by service</p>
                <h2>What do you need?</h2>
              </div>
              <span className="availability-pill">Location first</span>
            </div>
            <div className="location-field">
              <span className="location-mark" aria-hidden="true">⌖</span>
              <div><small>WORK LOCATION</small><strong>Use my area or enter a locality</strong></div>
            </div>
            <div className="quick-services">
              {featuredServices.slice(0, 8).map((service) => (
                <Link href={serviceHref(service.slug)} key={service.slug}>{service.title}</Link>
              ))}
            </div>
            <a className="finder-submit" href="/open/?role=customer">View workers near me <span aria-hidden="true">→</span></a>
            <p className="privacy-note">Your precise private location and worker residential details are not shown publicly.</p>
          </aside>
        </section>

        <section className="confidence-strip" aria-label="Structured DailyWala hiring">
          <div><strong>Skill-led</strong><span>Choose a service and sub-skill</span></div>
          <div><strong>Location-led</strong><span>Search around the work location</span></div>
          <div><strong>Requirement-led</strong><span>One worker, recurring help, or a crew</span></div>
          <div><strong>Confirmation-led</strong><span>Track matching and assignment in the app</span></div>
        </section>

        <section className="section service-marketplace" id="services" aria-labelledby="service-marketplace-title">
          <div className="section-intro wide-intro">
            <p className="eyebrow">A workforce marketplace, not a job board</p>
            <h2 id="service-marketplace-title">Book workers by service. Build a workforce by requirement.</h2>
            <p>
              DailyWala brings home services and business workforce supply into one structured discovery flow. Start
              with what needs to get done, where the work is, and how many people you need.
            </p>
          </div>
          <div className="marketplace-grid">
            {serviceGroups.map((group) => (
              <article className="marketplace-card" key={group.slug}>
                <h3><Link href={serviceHref(group.slug)}>{group.title}</Link></h3>
                <p>{group.summary}</p>
                <div className="service-tags">
                  {group.items.slice(0, 4).map((item) => <Link href={serviceHref(item.slug)} key={item.slug}>{item.title}</Link>)}
                </div>
                <Link className="card-link" href={serviceHref(group.slug)}>Explore workforce <span aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
          <div className="center-action"><Link className="secondary-action" href="/services/">See all DailyWala services</Link></div>
        </section>

        <section className="section real-needs-section" aria-labelledby="real-needs-title">
          <div className="section-intro">
            <p className="eyebrow">Built around real requirements</p>
            <h2 id="real-needs-title">Urgent help today. Planned workforce tomorrow.</h2>
            <p>DailyWala is designed around the outcome you need - not around waiting for job applications.</p>
          </div>
          <div className="use-case-grid">
            {useCases.map((item) => (
              <article className="use-case-card" key={item.label}>
                <span>{item.label}</span>
                <h3>“{item.need}.”</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section flow-section" aria-labelledby="flow-title">
          <div className="flow-heading">
            <p className="eyebrow">A structured fulfilment flow</p>
            <h2 id="flow-title">From work location to confirmed booking</h2>
            <p>Find workers by the skill needed at the location where the work will happen.</p>
          </div>
          <ol className="fulfilment-flow">
            {['Work location', 'Required skill', 'Nearby workers', 'Availability', 'Selection / booking'].map((step, index) => (
              <li key={step}><span>{index + 1}</span><strong>{step}</strong></li>
            ))}
          </ol>
        </section>

        <section className="section difference-section" aria-labelledby="difference-title">
          <div className="difference-heading">
            <p className="eyebrow">The DailyWala difference</p>
            <h2 id="difference-title">Right worker. Nearby. When you need them.</h2>
            <p>
              A hyperlocal workforce marketplace for households, contractors, restaurants, facilities, and businesses.
              Coverage and worker information shown in the app vary by location and available data.
            </p>
          </div>
          <div className="difference-grid">
            {differentiators.map(([title, description]) => (
              <article key={title}><div><h3>{title}</h3><p>{description}</p></div></article>
            ))}
          </div>
        </section>

        <section className="section bulk-section" aria-labelledby="bulk-title">
          <div className="bulk-art"><img src="/images/services-line-sketch.png" alt="DailyWala workers across electrical, plumbing, carpentry, repair, driving, security, cleaning, and facility services" /></div>
          <div className="bulk-copy">
            <p className="eyebrow">One worker to an entire workforce</p>
            <h2 id="bulk-title">Hiring that scales with the requirement</h2>
            <p>
              Book a maid for recurring home help, an electrician for a repair, or a complete construction, cleaning,
              hospitality, or facility crew. Share the service, work location, date, shift, and worker count.
            </p>
            <ul>
              <li><strong>Individual booking</strong><span>For home, repair, and one-off requirements</span></li>
              <li><strong>Recurring workforce</strong><span>For ongoing household or business operations</span></li>
              <li><strong>Bulk hiring</strong><span>For sites, facilities, hotels, restaurants, and projects</span></li>
            </ul>
            <Link className="primary-action" href="/contact/">Discuss a workforce requirement</Link>
          </div>
        </section>

        <section className="section search-intent-section" aria-labelledby="search-intent-title">
          <div>
            <p className="eyebrow">Workers near you</p>
            <h2 id="search-intent-title">Find local workers by skill and requirement</h2>
          </div>
          <p>
            Looking for labour near you, a mason near your site, a maid in your area, or technicians available nearby?
            DailyWala helps you begin with the work location and service needed. Genuine location coverage - not thin or
            invented locality pages - determines what can be discovered in the platform.
          </p>
        </section>

        <ContactBand />
      </main>
      <SiteFooter />
      <JsonLd data={organization} />
      <JsonLd data={website} />
    </>
  );
}
