import type { Metadata } from 'next';
import { DeepLinkRedirect } from './DeepLinkRedirect';

export const metadata: Metadata = {
  title: 'Open Dailywala App',
  description: 'Open the Dailywala customer or worker app.',
  robots: { index: false, follow: true },
};

export default function OpenAppPage() {
  return (
    <main className="open-page">
      <DeepLinkRedirect />
    </main>
  );
}
