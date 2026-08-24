import type { MetadataRoute } from 'next';
import { siteConfig } from './siteConfig';
import { serviceHref, servicePages } from './services/serviceCatalog';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticPages: MetadataRoute.Sitemap = ['/', '/services/', '/why-us/', '/contact/'].map((path) => ({
    url: `${siteConfig.domain}${path}`,
    lastModified,
    changeFrequency: path === '/' ? 'weekly' as const : 'monthly' as const,
    priority: path === '/' ? 1 : 0.8,
  }));
  const serviceEntries = servicePages.map((page) => ({
    url: `${siteConfig.domain}${serviceHref(page.slug)}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: page.kind === 'group' ? 0.75 : 0.7,
  }));
  return [...staticPages, ...serviceEntries];
}
