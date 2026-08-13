import type { Metadata } from 'next';
import { DeepLinkRedirect } from './DeepLinkRedirect';

export const metadata: Metadata = {
  title: 'Open DailyWala App',
  description: 'Open the DailyWala customer or worker app.',
  robots: { index: false, follow: true },
};

export default function OpenAppPage() {
  return (
    <main className="open-page">
      <DeepLinkRedirect />
    </main>
  );
}
