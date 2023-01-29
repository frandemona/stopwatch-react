'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { PropsWithChildren, useEffect } from 'react';
import * as gtag from '../lib/gtag';
// import { pageview } from '../lib/gtm';

export default function AnalyticsProvider({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };

    const url = pathname + searchParams.toString();

    // GTAG
    // router.events.on('routeChangeComplete', handleRouteChange);
    // router.events.on('hashChangeComplete', handleRouteChange);
    handleRouteChange(url);
    // GTM
    // router.events.on('routeChangeComplete', pageview);
    return () => {
      // GTAG
      // router.events.off('routeChangeComplete', handleRouteChange);
      // router.events.off('hashChangeComplete', handleRouteChange);
      // GTM
      // router.events.off('routeChangeComplete', pageview);
    };
  }, [pathname, searchParams]);

  return <>{children}</>;
}
