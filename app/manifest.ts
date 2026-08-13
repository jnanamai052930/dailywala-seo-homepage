import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'DailyWala',
    short_name: 'DailyWala',
    description: 'Verified daily-wage workforce platform.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f8fafc',
    theme_color: '#0f766e',
    icons: [
      {
        src: '/images/dailywala-app-icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
