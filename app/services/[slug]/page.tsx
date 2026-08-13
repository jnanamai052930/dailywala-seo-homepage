import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ContactBand, DailyWalaWordmark, JsonLd, SiteFooter, SiteHeader } from '../../components';
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
  const title = page.kind === 'group' ? page.title : `${page.title} Workers`;
  return {
    title,
    description: page.summary,
    keywords: ['DailyWala', page.title, ...page.keywords],
    alternates: { canonical: serviceHref(page.slug) },
    openGraph: {
      title: `${title} | DailyWala`,
      description: page.summary,
      url: serviceHref(page.slug),
      images: [{ url: '/images/services-line-sketch.png', width: 1200, height: 630, alt: `${page.title} workers` }],
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
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    url: `${siteConfig.domain}${serviceHref(page.slug)}`,
  };

  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero compact-hero service-detail-hero">
          <div className="hero-copy">
            <p className="eyebrow">{page.kind === 'group' ? 'Service category' : page.groupTitle}</p>
            <h1>{page.title}</h1>
            <p>{page.summary}</p>
          </div>
        </section>

        <section className="section service-detail-layout">
          <article className="service-detail-copy">
            <p className="eyebrow">{page.kind === 'group' ? 'DailyWala category' : 'DailyWala service'}</p>
            <h2>
              Book {page.title.toLowerCase()} through <DailyWalaWordmark className="inline-wordmark" />
            </h2>
            <p>
              Share your location, preferred date, worker count, and work details. DailyWala helps organize verified
              workers for daily-wage work with clear request tracking and follow-up.
            </p>
            <div className="service-keywords" aria-label="Related search terms">
              {page.keywords.map((keyword) => (
                <span key={keyword}>{keyword}</span>
              ))}
            </div>
          </article>

          <aside className="service-detail-card" aria-labelledby="related-services-title">
            <h2 id="related-services-title">{page.kind === 'group' ? 'Skills in this category' : 'Related services'}</h2>
            <ul>
              {related.map((item) => (
                <li key={item.slug}>
                  <Link href={serviceHref(item.slug)}>{item.title}</Link>
                </li>
              ))}
            </ul>
            <Link className="secondary-action" href="/services/">View all services</Link>
          </aside>
        </section>

        <ContactBand />
      </main>
      <SiteFooter />
      <JsonLd data={serviceJsonLd} />
    </>
  );
}
