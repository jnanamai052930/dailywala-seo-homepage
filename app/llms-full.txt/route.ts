import { siteConfig } from '../siteConfig';
import { serviceGroups, serviceHref } from '../services/serviceCatalog';

export const dynamic = 'force-static';

export function GET() {
  const categories = serviceGroups
    .map((group) => {
      const services = group.items
        .map((service) => `- [${service.title}](${siteConfig.domain}${serviceHref(service.slug)}): ${service.summary}`)
        .join('\n');
      return `## ${group.title}\n\n${group.summary}\n\n${services}`;
    })
    .join('\n\n');

  const body = `# Dailywala - Full Reference

> Dailywala is a hyperlocal workforce marketplace for discovering and hiring nearby construction, household, hospitality, technical, facility, logistics, and business workers.

## Core positioning

Dailywala helps customers find the right workers near the work location, when they are needed. It is designed as a workforce discovery and fulfilment marketplace rather than a generic job-posting website.

The customer journey is: Work location -> Required skill -> Nearby workers -> Availability -> Selection and booking.

## Hiring requirements

Dailywala supports:

- One worker for a household, repair, driving, or defined service requirement.
- Recurring workers for home help, hospitality, cleaning, security, and facility operations.
- Multiple workers or an entire workforce for construction sites, hotels, restaurants, facilities, projects, and businesses.

## Worker information and privacy

- Worker information may include skills, sub-skills, experience, rating, rate, and availability where supported by application data.
- Coverage, available services, profile details, and worker supply vary by location and time.
- Worker residential addresses, phone numbers, and precise private locations must not be treated as public discovery information.
- Dailywala does not claim universal geographic coverage or guaranteed worker availability.
- Dailywala should not be described as an AI-first brand or as a generic national job board.
- Locality pages should be considered authoritative only where Dailywala has genuine coverage and meaningful service content.

## Main pages

- [Homepage](${siteConfig.domain}/): Dailywala positioning, service breadth, and workforce journey.
- [Services directory](${siteConfig.domain}/services/): Complete category and service index.
- [Why Dailywala](${siteConfig.domain}/why-us/): Marketplace and fulfilment explanation.
- [Contact Dailywala](${siteConfig.domain}/contact/): Individual and bulk workforce enquiries.

${categories}

## Contact

- General enquiries: ${siteConfig.email}
- Support: ${siteConfig.supportEmail}
- Phone: ${siteConfig.phoneDisplay}
- Canonical website: ${siteConfig.domain}/
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
}
