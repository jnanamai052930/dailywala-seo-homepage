import Link from 'next/link';
import { siteConfig } from './siteConfig';

export function DailyWalaWordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`wordmark ${className}`} aria-label="DailyWala">
      <span>Daily</span><span className="wordmark-accent">Wala</span>
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="DailyWala home">
        <img src="/images/dailywala-app-icon.png" alt="" width="40" height="40" />
        <DailyWalaWordmark />
      </Link>
      <nav className="nav" aria-label="Primary navigation">
        <Link href="/">Home</Link>
        <Link href="/services/">Services</Link>
        <Link href="/why-us/">Why Us</Link>
        <Link href="/contact/">Contact</Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>© 2026 <DailyWalaWordmark className="inline-wordmark" />. All rights reserved.</p>
      <div className="footer-actions">
        <div className="store-links" aria-label="Mobile app download placeholders">
          <span className="store-link" title="Google Play link coming soon">
            <svg className="play-badge-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path className="play-blue" d="M4.1 2.9c-.3.3-.5.7-.5 1.2v15.8c0 .5.2.9.5 1.2l8.8-9.1-8.8-9.1Z" />
              <path className="play-green" d="m13.6 11.2 2.6-2.7L5.2 2.3l8.4 8.9Z" />
              <path className="play-yellow" d="m13.6 12.8-8.4 8.9 11-6.2-2.6-2.7Z" />
              <path className="play-red" d="m17.2 9.1-2.8 2.9 2.8 2.9 2.3-1.3c1.1-.6 1.1-2.2 0-2.8l-2.3-1.7Z" />
            </svg>
            <span className="store-copy">
              <span className="store-kicker">GET IT ON</span>
              <span className="store-name">Google Play</span>
            </span>
          </span>
          <span className="store-link" title="App Store link coming soon">
            <svg className="apple-badge-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M16.4 2.2c.1 1.1-.3 2.1-1 2.9-.7.8-1.8 1.4-2.8 1.3-.1-1 .3-2 1-2.8.7-.8 1.9-1.3 2.8-1.4ZM20.7 17c-.4.9-.6 1.3-1.2 2.1-.8 1.2-2 2.8-3.5 2.8-1.3 0-1.7-.8-3.5-.8s-2.2.8-3.5.8c-1.5 0-2.6-1.4-3.5-2.6-2.4-3.5-2.7-7.6-1.2-9.8 1-1.5 2.6-2.4 4.2-2.4 1.6 0 2.7.9 4 .9s2.1-.9 4-.9c1.4 0 2.9.8 3.9 2.1-3.4 1.9-2.8 6.7.3 7.8Z" />
            </svg>
            <span className="store-copy">
              <span className="store-kicker">Available on the</span>
              <span className="store-name">App Store</span>
            </span>
          </span>
        </div>
        <div className="social-links" aria-label="Social media placeholders">
          <span className="social-link" role="img" aria-label="Facebook">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14.2 8.2h2.5V4.4c-.4-.1-1.9-.2-3.5-.2-3.5 0-5.8 2.1-5.8 6v3.4H3.7V18h3.7v5.8h4.5V18h3.7l.6-4.4h-4.3v-3c0-1.3.3-2.4 2.3-2.4Z" />
            </svg>
          </span>
          <span className="social-link" role="img" aria-label="X">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14.5 10.2 22.2 1h-1.8l-6.7 8-5.3-8H2.2l8.1 12.1L2.2 23h1.8l7.1-8.5 5.7 8.5h6.2l-8.5-12.8Zm-2.5 3-1-.5L3.7 2.4h3.9l5.2 7.4 1 .5 7.7 11.3h-3.9L12 13.2Z" />
            </svg>
          </span>
          <span className="social-link" role="img" aria-label="Instagram">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm4.5 3.4A4.6 4.6 0 1 1 12 16.6a4.6 4.6 0 0 1 0-9.2Zm0 2A2.6 2.6 0 1 0 12 14.6a2.6 2.6 0 0 0 0-5.2Zm5-2.6a1.1 1.1 0 1 1-1.1 1.1A1.1 1.1 0 0 1 17 6.8Z" />
            </svg>
          </span>
        </div>
      </div>
    </footer>
  );
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}

export function ContactBand() {
  return (
    <section className="contact-band" aria-labelledby="contact-band-title">
      <div>
        <p className="eyebrow">Talk to <DailyWalaWordmark className="inline-wordmark on-dark-wordmark" /></p>
        <h2 id="contact-band-title">Need workers for an upcoming job?</h2>
        <p>Share the trade, location, date, and crew size. The team can help you choose the right <DailyWalaWordmark className="inline-wordmark on-dark-wordmark" /> flow.</p>
      </div>
      <div className="contact-actions">
        <a className="primary-action" href={siteConfig.phoneHref}>Call now</a>
        <a className="secondary-action" href={`mailto:${siteConfig.email}`}>Email us</a>
      </div>
    </section>
  );
}
