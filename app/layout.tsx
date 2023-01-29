import './globals.css';
import AnalyticsProvider from './analytics-provider';
// import { GTM_ID } from '../lib/gtm';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {/* <noscript>
          <iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height='0' width='0' title='google-tag-manager' className='google-iframe' />
        </noscript> */}
        <AnalyticsProvider>{children}</AnalyticsProvider>
      </body>
    </html>
  );
}
