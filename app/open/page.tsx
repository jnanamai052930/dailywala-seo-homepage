import type { Metadata } from 'next';
import { DeepLinkRedirect } from './DeepLinkRedirect';

export const metadata: Metadata = {
  title: 'Dailywala App Coming Soon',
  description: 'The Dailywala Android and iOS apps are coming soon.',
  robots: { index: false, follow: true },
};

export default async function OpenAppPage({
  searchParams,
}: {
  searchParams: Promise<{ role?: string }>;
}) {
  const params = await searchParams;
  const role = params.role === 'worker' ? 'worker' : 'customer';

  return (
    <main className="open-page">
      <DeepLinkRedirect role={role} />
    </main>
  );
}
