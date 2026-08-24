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
        <Link href="/services/">Services</Link>
        <Link href="/why-us/">Why Us</Link>
        <Link href="/contact/">Contact</Link>
      </nav>
      <a className="header-cta" href="/open/?role=customer">Find workers <span aria-hidden="true">→</span></a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <DailyWalaWordmark className="inline-wordmark" />
        <p>Hyperlocal workers, on demand.</p>
      </div>
      <div className="footer-links" aria-label="Footer navigation">
        <Link href="/services/">Services</Link>
        <Link href="/why-us/">Why DailyWala</Link>
        <Link href="/contact/">Contact</Link>
        <a href="/open/?role=worker">Find work</a>
      </div>
      <p className="footer-legal">© 2026 DailyWala. All rights reserved.</p>
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
        <p className="eyebrow">Start with your requirement</p>
        <h2 id="contact-band-title">Need one worker—or an entire workforce?</h2>
        <p>Share the service, work location, date, shift, and worker count. DailyWala can help you take the right next step.</p>
      </div>
      <div className="contact-actions">
        <Link className="primary-action" href="/contact/">Post your requirement</Link>
        <a className="secondary-action" href={siteConfig.phoneHref}>Call {siteConfig.phoneDisplay}</a>
      </div>
    </section>
  );
}
