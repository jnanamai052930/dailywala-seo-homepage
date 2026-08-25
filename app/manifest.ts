import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'DailyWala',
    short_name: 'DailyWala',
    description: 'Find and hire nearby workers by skill, location, availability, and requirement.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fffdf7',
    theme_color: '#2d1b12',
    icons: [
      {
        src: '/images/dailywala-app-icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
