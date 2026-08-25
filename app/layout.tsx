import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import { PageTransition } from './PageTransition';
import { siteConfig } from './siteConfig';

const googleAnalyticsId = 'G-N8EX6V6HZ9';
const googleTagManagerId = 'GTM-PFBTHP6M';

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
    title: 'DailyWala - Hyperlocal Workforce Marketplace',
    description: siteConfig.description,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'DailyWala - Find and hire workers near you' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DailyWala - Hyperlocal Workforce Marketplace',
    description: siteConfig.description,
    images: ['/og.png'],
  },
  icons: {
    icon: '/images/dailywala-favicon.png',
    apple: '/images/dailywala-app-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#2d1b12',
  colorScheme: 'light',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="describedby" href={`${siteConfig.domain}/llms.txt`} type="text/markdown" />
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${googleTagManagerId}');
          `}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        <PageTransition>{children}</PageTransition>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}
        </Script>
      </body>
    </html>
  );
}
