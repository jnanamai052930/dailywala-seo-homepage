import type { Metadata, Viewport } from 'next';
import './globals.css';
import { PageTransition } from './PageTransition';
import { siteConfig } from './siteConfig';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: 'Find & Hire Workers Near You | DailyWala',
    template: '%s | DailyWala',
  },
  description: siteConfig.description,
  keywords: [
    'DailyWala',
    'workers near me',
    'labour near me',
    'daily wage workers near me',
    'construction workers near me',
    'maid near me',
    'cook near me',
    'electrician near me',
    'hire workers near me',
    'manpower near me',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: siteConfig.name,
    title: 'DailyWala — Hyperlocal Workers, On Demand',
    description: siteConfig.description,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'DailyWala — Find and hire workers near you' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DailyWala — Hyperlocal Workers, On Demand',
    description: siteConfig.description,
    images: ['/og.png'],
  },
  icons: {
    icon: '/images/dailywala-favicon.png',
    apple: '/images/dailywala-app-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#12211b',
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
