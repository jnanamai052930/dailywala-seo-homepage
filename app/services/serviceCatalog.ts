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
    title: 'Construction & skilled trades',
    slug: 'construction-and-skilled-trades',
    summary: 'Find nearby construction workers and skilled trades for one task, a site crew, or a planned workforce requirement.',
    items: [
      skill('Masons', 'masons', 'Find nearby masons for brick laying, plastering, tile work, concrete support, and construction jobs.', ['mason near me']),
      skill('Construction labour', 'construction-labour', 'Hire nearby labour for material movement, mixing, site cleaning, demolition, and general construction support.', ['labour near me', 'daily wage workers near me']),
      skill('Carpenters', 'carpenters', 'Find carpenters for shuttering, furniture work, doors, windows, fit-outs, and site carpentry.', ['carpenter near me']),
      skill('Painters', 'painters', 'Hire painters for interior, exterior, touch-up, polishing, and site finishing work.', ['painter near me']),
      skill('Welders & steel fixers', 'welders-and-steel-fixers', 'Find welders, fabricators, bar benders, and steel fixers for structural and repair work.', ['welder near me', 'bar bender near me']),
      skill('Scaffolding workers', 'scaffolding-workers', 'Arrange scaffolding workers for assembly, dismantling, access, and site support.', ['scaffolding workers near me']),
      skill('Foremen & site supervisors', 'foremen-and-site-supervisors', 'Find foremen, site engineers, and construction supervisors for crew coordination and execution.', ['construction supervisor near me']),
    ],
  },
  {
    title: 'Household & care services',
    slug: 'household-and-care-services',
    summary: 'Discover nearby household workers for daily chores, cooking, cleaning, care, and recurring home requirements.',
    items: [
      skill('House help & maids', 'house-help-and-maids', 'Find part-time, full-time, or live-in house help for routine household work.', ['maid near me', 'house help near me']),
      skill('Cooks & chef/masters', 'cooks-and-chef-masters', 'Find cooks for homes or chef/masters for kitchens, restaurants, and hospitality teams.', ['cook near me', 'chef near me']),
      skill('Cleaning & housekeeping', 'cleaning-and-housekeeping', 'Hire cleaners and housekeeping workers for homes, offices, facilities, and commercial spaces.', ['cleaning workers near me', 'housekeeping workers near me']),
      skill('Patient & elder care attendants', 'patient-and-elder-care-attendants', 'Find attendants for non-clinical patient support, elder assistance, and daily care requirements.', ['patient care attendant near me']),
      skill('Gardening & general help', 'gardening-and-general-help', 'Find nearby workers for gardening, chores, and general household assistance.', ['gardener near me']),
    ],
  },
  {
    title: 'Repair & technical services',
    slug: 'repair-and-technical-services',
    summary: 'Find nearby technicians for electrical, plumbing, appliance, installation, and maintenance work.',
    items: [
      skill('Electricians', 'electricians', 'Find electricians for wiring, fixtures, panels, power faults, pumps, and maintenance work.', ['electrician near me']),
      skill('Plumbers', 'plumbers', 'Hire plumbers for pipe fitting, leaks, bathrooms, drainage, water lines, and repairs.', ['plumber near me']),
      skill('AC technicians', 'ac-technicians', 'Find AC technicians for installation, service, gas filling, repairs, and maintenance.', ['AC technician near me']),
      skill('Refrigerator technicians', 'refrigerator-technicians', 'Find refrigerator technicians for cooling faults, service checks, and appliance repairs.', ['refrigerator technician near me']),
      skill('Washing machine technicians', 'washing-machine-technicians', 'Find washing machine technicians for installation, servicing, and fault diagnosis.', ['washing machine repair technician near me']),
      skill('ITI & maintenance technicians', 'iti-and-maintenance-technicians', 'Find ITI-trained and multi-skilled technicians for equipment, electrical, and maintenance requirements.', ['ITI technician near me']),
    ],
  },
  {
    title: 'Hospitality & food workforce',
    slug: 'hospitality-and-food-workforce',
    summary: 'Build nearby restaurant, hotel, kitchen, and service teams for a shift, recurring work, or ongoing operations.',
    items: [
      skill('Restaurant cooks & masters', 'restaurant-cooks-and-masters', 'Find cooks, chef/masters, and kitchen workers for restaurants, hotels, and catering operations.', ['restaurant cook near me']),
      skill('Kitchen helpers', 'kitchen-helpers', 'Hire nearby kitchen helpers for preparation, cleaning, storage, and service support.', ['kitchen helper near me']),
      skill('Hospitality workers', 'hospitality-workers', 'Find support workers for hotels, restaurants, events, and guest-service operations.', ['hospitality workers near me']),
      skill('Commercial housekeeping', 'commercial-housekeeping', 'Build housekeeping teams for hotels, restaurants, offices, and managed facilities.', ['commercial housekeeping workers near me']),
    ],
  },
  {
    title: 'Facility & business workforce',
    slug: 'facility-and-business-workforce',
    summary: 'Source nearby support workers for facilities, offices, stores, sites, and recurring business operations.',
    items: [
      skill('Security guards', 'security-guards', 'Find security guards for homes, offices, construction sites, stores, facilities, and events.', ['security guard near me']),
      skill('Facility cleaners', 'facility-cleaners', 'Hire individual cleaners or teams for offices, common areas, sites, and facilities.', ['facility cleaning workers near me']),
      skill('Store keepers', 'store-keepers', 'Find store keepers for inventory, material records, issue, receipt, and dispatch support.', ['store keeper near me']),
      skill('Admin & timekeeping staff', 'admin-and-timekeeping-staff', 'Hire admin and timekeeping staff for records, attendance, coordination, and site operations.', ['admin staff near me']),
      skill('Loading & unloading workers', 'loading-and-unloading-workers', 'Arrange workers for loading, unloading, shifting, material movement, and logistics support.', ['loading unloading workers near me']),
    ],
  },
  {
    title: 'Drivers & machine operators',
    slug: 'drivers-and-machine-operators',
    summary: 'Find nearby drivers and operators for transport, construction equipment, goods movement, and site operations.',
    items: [
      skill('Drivers', 'drivers', 'Find drivers for cars, local trips, pickups, business transport, and recurring requirements.', ['driver near me']),
      skill('Truck & tractor drivers', 'truck-and-tractor-drivers', 'Hire drivers for goods movement, site supplies, tractors, and local operations.', ['truck driver near me', 'tractor driver near me']),
      skill('Crane & excavator operators', 'crane-and-excavator-operators', 'Find trained operators for cranes, excavators, and construction machinery.', ['crane operator near me', 'excavator operator near me']),
      skill('Machine operators', 'machine-operators', 'Find machine operators for production, site equipment, and operational requirements.', ['machine operator near me']),
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
    keywords: group.items.flatMap((item) => item.keywords),
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

export const featuredServices = [
  'masons',
  'construction-labour',
  'house-help-and-maids',
  'cooks-and-chef-masters',
  'electricians',
  'plumbers',
  'ac-technicians',
  'cleaning-and-housekeeping',
  'drivers',
  'security-guards',
  'iti-and-maintenance-technicians',
  'loading-and-unloading-workers',
].map((slug) => serviceSkills.find((service) => service.slug === slug)!).filter(Boolean);

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

function skill(title: string, slug: string, summary: string, keywords: string[]): ServiceSkill {
  return {
    title,
    slug,
    summary,
    keywords: [title, ...keywords, `hire ${title.toLowerCase()}`],
  };
}
