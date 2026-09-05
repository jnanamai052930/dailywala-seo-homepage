import Link from 'next/link';
import { DailywalaWordmark } from '../components';

type AppRole = 'customer' | 'worker';

export function DeepLinkRedirect({ role }: { role: AppRole }) {
  const audienceMessage = role === 'worker'
    ? 'Soon, workers will be able to discover nearby opportunities and manage work from one simple app.'
    : 'Soon, customers will be able to find and connect with trusted nearby workers from one simple app.';

  return (
    <div className="open-panel">
      <img src="/images/dailywala-app-icon.png" alt="" width="72" height="72" />
      <span className="launch-status">Android &amp; iOS apps</span>
      <h1><DailywalaWordmark className="inline-wordmark" /> is coming soon</h1>
      <p>{audienceMessage}</p>
      <p className="launch-note">We’re putting the finishing touches on a reliable, secure experience. Thank you for your patience.</p>
      <div className="app-actions centered">
        <Link className="primary-action" href="/contact/">
          {role === 'worker' ? 'Contact Dailywala' : 'Post your requirement'}
        </Link>
        <Link className="secondary-action" href="/">Back to home</Link>
      </div>
    </div>
  );
}
