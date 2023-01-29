'use client';

import { useRouter } from 'next/router';
import { PropsWithChildren, useEffect } from 'react';
import * as gtag from '../lib/gtag';
// import { pageview } from '../lib/gtm';

export default function AnalyticsProvider({ children }: PropsWithChildren) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    // GTAG
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
    // GTM
    // router.events.on('routeChangeComplete', pageview);
    return () => {
      // GTAG
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
      // GTM
      // router.events.off('routeChangeComplete', pageview);
    };
  }, [router.events]);

  return <>{children}</>;
}
