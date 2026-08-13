import type { Metadata, Viewport } from 'next';
import './globals.css';
import { PageTransition } from './PageTransition';
import { siteConfig } from './siteConfig';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: 'DailyWala | Verified Daily-Wage Workers',
    template: '%s | DailyWala',
  },
  description: siteConfig.description,
  keywords: [
    'DailyWala',
    'daily wage workers',
    'verified workers',
    'hire electrician',
    'hire plumber',
    'construction workers',
    'worker app India',
    'Tirupati labour services',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: siteConfig.name,
    title: 'DailyWala | Workforce Simplified',
    description: siteConfig.description,
    images: [{ url: '/images/landing-labour-worker.png', width: 1200, height: 630, alt: 'DailyWala verified workforce platform' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DailyWala | Workforce Simplified',
    description: siteConfig.description,
    images: ['/images/landing-labour-worker.png'],
  },
  icons: {
    icon: '/images/dailywala-favicon.png',
    apple: '/images/dailywala-app-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#0f766e',
  colorScheme: 'light',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
