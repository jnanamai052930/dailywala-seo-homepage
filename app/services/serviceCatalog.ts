export type ServiceSkill = {
  title: string;
  slug: string;
  summary: string;
  keywords: string[];
};

export type ServiceGroup = {
  title: string;
  slug: string;
  summary: string;
  items: ServiceSkill[];
};

export type ServicePage = {
  kind: 'group' | 'skill';
  title: string;
  slug: string;
  summary: string;
  groupTitle?: string;
  keywords: string[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    title: 'Construction and site work',
    slug: 'construction-and-site-work',
    summary: 'Find verified workers for construction sites, masonry, carpentry, welding, scaffolding, bar bending, supervision, and helper support.',
    items: [
      skill('Masons', 'masons', 'Book verified masons for brickwork, plastering, concrete support, and site construction tasks.'),
      skill('Carpenters', 'carpenters', 'Hire carpenters for woodwork, shuttering, fit-outs, furniture support, and site carpentry jobs.'),
      skill('Welders', 'welders', 'Find welders for fabrication, repair, metal frames, gates, grills, and construction support work.'),
      skill('Scaffolding workers', 'scaffolding-workers', 'Arrange scaffolding workers for safe site access, assembly, dismantling, and support tasks.'),
      skill('Bar benders', 'bar-benders', 'Hire bar benders for reinforcement steel cutting, bending, tying, and structural site work.'),
      skill('Foremen', 'foremen', 'Find foremen for site coordination, crew supervision, progress tracking, and daily work management.'),
      skill('Helpers', 'helpers', 'Book helpers for material movement, cleaning, loading, unloading, and general site assistance.'),
    ],
  },
  {
    title: 'Repairs and maintenance',
    slug: 'repairs-and-maintenance',
    summary: 'Get skilled workers for electrical, plumbing, painting, AC service, refrigerator repair, and washing machine repair needs.',
    items: [
      skill('Electricians', 'electricians', 'Book electricians for wiring, fixtures, repairs, inspections, and electrical maintenance work.'),
      skill('Plumbers', 'plumbers', 'Hire plumbers for pipe repair, bathroom work, water lines, drainage, and maintenance jobs.'),
      skill('Painters', 'painters', 'Find painters for home painting, site painting, touch-ups, finishing, and maintenance work.'),
      skill('AC mechanics', 'ac-mechanics', 'Book AC mechanics for installation, service, gas filling, repairs, and regular maintenance.'),
      skill('Refrigerator repair', 'refrigerator-repair', 'Find refrigerator repair workers for cooling issues, service checks, and appliance maintenance.'),
      skill('Washing machine repair', 'washing-machine-repair', 'Book washing machine repair workers for installation, servicing, and fault diagnosis.'),
    ],
  },
  {
    title: 'Operations and support',
    slug: 'operations-and-support',
    summary: 'Hire workers for driving, security, stores, administration, domestic services, and daily business support.',
    items: [
      skill('Drivers', 'drivers', 'Book drivers for car driving, pickup support, local trips, and business transport needs.'),
      skill('Truck drivers', 'truck-drivers', 'Find truck drivers for goods movement, construction supply transport, and daily logistics support.'),
      skill('Tractor drivers', 'tractor-drivers', 'Hire tractor drivers for site movement, material support, agriculture, and local operations.'),
      skill('Security guards', 'security-guards', 'Book security guards for sites, homes, offices, stores, and event support.'),
      skill('Store keepers', 'store-keepers', 'Find store keepers for inventory, material records, dispatch support, and site store management.'),
      skill('Admin staff', 'admin-staff', 'Hire admin staff for office support, records, coordination, and daily operational assistance.'),
      skill('Domestic services', 'domestic-services', 'Book domestic service workers for household support, cleaning, and routine home assistance.'),
    ],
  },
];

export const serviceSkills = serviceGroups.flatMap((group) =>
  group.items.map((item) => ({ ...item, groupTitle: group.title })),
);

export const servicePages: ServicePage[] = [
  ...serviceGroups.map((group) => ({
    kind: 'group' as const,
    title: group.title,
    slug: group.slug,
    summary: group.summary,
    keywords: group.items.map((item) => item.title),
  })),
  ...serviceSkills.map((item) => ({
    kind: 'skill' as const,
    title: item.title,
    slug: item.slug,
    summary: item.summary,
    groupTitle: item.groupTitle,
    keywords: item.keywords,
  })),
];

export function serviceHref(slug: string): string {
  return `/services/${slug}/`;
}

export function findServicePage(slug: string): ServicePage | undefined {
  return servicePages.find((page) => page.slug === slug);
}

export function relatedSkillsFor(page: ServicePage): ServiceSkill[] {
  if (page.kind === 'group') {
    return serviceGroups.find((group) => group.slug === page.slug)?.items ?? [];
  }
  const group = serviceGroups.find((candidate) => candidate.title === page.groupTitle);
  return (group?.items ?? []).filter((item) => item.slug !== page.slug);
}

function skill(title: string, slug: string, summary: string): ServiceSkill {
  return {
    title,
    slug,
    summary,
    keywords: [title, `${title} near me`, `DailyWala ${title.toLowerCase()}`],
  };
}
