'use client';

import { useEffect, useMemo } from 'react';
import { DailywalaWordmark } from '../components';
import { appLinks, type AppRole } from '../siteConfig';

function roleFromSearch(): AppRole {
  if (typeof window === 'undefined') return 'customer';
  const role = new URLSearchParams(window.location.search).get('role');
  return role === 'worker' ? 'worker' : 'customer';
}

export function DeepLinkRedirect() {
  const role = useMemo(roleFromSearch, []);
  const links = appLinks[role];

  useEffect(() => {
    const ua = navigator.userAgent || '';
    const isAndroid = /Android/i.test(ua);
    const isIos = /iPhone|iPad|iPod/i.test(ua);
    const target = isAndroid ? links.androidIntent : isIos ? links.deepLink : links.webFallback;
    const fallback = isAndroid ? links.androidStore || links.webFallback : links.iosStore || links.webFallback;

    window.location.href = target;
    const timer = window.setTimeout(() => {
      window.location.href = fallback;
    }, 1400);

    return () => window.clearTimeout(timer);
  }, [links]);

  return (
    <div className="open-panel">
      <img src="/images/dailywala-app-icon.png" alt="" width="72" height="72" />
      <h1>Opening <DailywalaWordmark className="inline-wordmark" /></h1>
      <p>If the app does not open automatically, use the button below.</p>
      <div className="app-actions centered">
        <a className="primary-action" href={links.deepLink}>Open app</a>
      </div>
    </div>
  );
}
