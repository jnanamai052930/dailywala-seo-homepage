import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ContactBand, JsonLd, SiteFooter, SiteHeader } from '../../components';
import { siteConfig } from '../../siteConfig';
import { findServicePage, relatedSkillsFor, serviceHref, servicePages } from '../serviceCatalog';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = findServicePage(slug);
  if (!page) return {};
  const title = page.kind === 'group' ? `${page.title} Near You` : `Find ${page.title} Near You`;
  return {
    title,
    description: `${page.summary} Share the work location, date, and worker count with DailyWala.`,
    keywords: ['DailyWala', 'workers near me', page.title, ...page.keywords],
    alternates: { canonical: serviceHref(page.slug) },
    openGraph: {
      title: `${title} | DailyWala`,
      description: `${page.summary} Individual and bulk requirements supported.`,
      url: serviceHref(page.slug),
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = findServicePage(slug);
  if (!page) notFound();
  const related = relatedSkillsFor(page);
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${page.title} - DailyWala`,
    description: page.summary,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.domain,
    },
    url: `${siteConfig.domain}${serviceHref(page.slug)}`,
    audience: [
      { '@type': 'Audience', audienceType: 'Households' },
      { '@type': 'Audience', audienceType: 'Contractors and businesses' },
    ],
  };

  return (
    <>
      <SiteHeader />
      <main>
        <section className="service-page-hero">
          <div className="hero-copy">
            <p className="hero-kicker"><span aria-hidden="true" /> {page.kind === 'group' ? 'Workforce category' : page.groupTitle}</p>
            <h1>{page.kind === 'group' ? page.title : `Find ${page.title} Near You`}</h1>
            <p>{page.summary}</p>
            <div className="hero-actions">
              <a className="primary-action" href="/open/?role=customer">Check nearby workers <span aria-hidden="true">→</span></a>
              <Link className="secondary-action on-dark" href="/contact/">Post requirement</Link>
            </div>
          </div>
        </section>

        <section className="section service-detail-layout">
          <article className="service-detail-copy">
            <p className="eyebrow">Location-first worker discovery</p>
            <h2>
              Hire {page.title.toLowerCase()} for one job, recurring work, or a crew
            </h2>
            <p>
              Share the work location, preferred date or shift, worker count, and task details. DailyWala helps narrow
              suitable nearby workers using available skill, sub-skill, experience, rating, rate, and availability
              information where supported by worker profiles and application data.
            </p>
            <div className="service-assurance">
              <strong>Private by design</strong>
              <span>Worker residential addresses, phone numbers, and precise private locations are not presented as public discovery data.</span>
            </div>
            <div className="service-keywords" aria-label="Related search terms">
              {page.keywords.map((keyword) => (
                <span key={keyword}>{keyword}</span>
              ))}
            </div>
          </article>

          <aside className="service-detail-card" aria-labelledby="related-services-title">
            <p className="eyebrow">Book by service</p>
            <h2 id="related-services-title">{page.kind === 'group' ? 'Workers in this category' : 'Related nearby workers'}</h2>
            <ul>
              {related.map((item) => (
                <li key={item.slug}>
                  <Link href={serviceHref(item.slug)}>{item.title}</Link>
                </li>
              ))}
            </ul>
            <Link className="secondary-action" href="/services/">View all services</Link>
            <a className="primary-action" href="/open/?role=customer">Find workers near me</a>
          </aside>
        </section>

        <ContactBand />
      </main>
      <SiteFooter />
      <JsonLd data={serviceJsonLd} />
    </>
  );
}
