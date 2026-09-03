import { siteConfig } from '../siteConfig';
import { serviceGroups, serviceHref } from '../services/serviceCatalog';

export const dynamic = 'force-static';

export function GET() {
  const categories = serviceGroups
    .map((group) => `- [${group.title}](${siteConfig.domain}${serviceHref(group.slug)}): ${group.summary}`)
    .join('\n');

  const body = `# Dailywala

> Dailywala is a hyperlocal workforce marketplace helping homes, contractors, and businesses find nearby workers for individual service needs or complete workforce requirements.

Dailywala connects requirements with workers based on the work location, required skill, nearby worker supply, and availability. It supports one-time, recurring, and bulk workforce needs. Worker residential addresses, phone numbers, and precise private locations are not public discovery information. Coverage and worker availability vary by location.

## Main pages

- [Homepage](${siteConfig.domain}/): Understand Dailywala's positioning and worker-discovery journey.
- [Services](${siteConfig.domain}/services/): Browse all workforce categories and service pages.
- [Why Dailywala](${siteConfig.domain}/why-us/): Learn how location-first discovery and workforce fulfilment work.
- [Contact](${siteConfig.domain}/contact/): Submit an individual or bulk workforce requirement.
- [Full LLM reference](${siteConfig.domain}/llms-full.txt): Read the expanded Dailywala service and positioning reference.

## Workforce categories

${categories}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
}
