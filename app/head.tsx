import Script from 'next/script';
// import { GTM_ID, pageview } from '../lib/gtm';
import * as gtag from '../lib/gtag';

export default function Head() {
  return (
    <>
      <title>Online Stopwatch App</title>
      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <meta name='description' content='A Free online stopwatch Easy to use and accurate stopwatch. Optional split intervals and alarm sound.' />
      <link rel='icon' href='/favicon.ico' />
      <Script async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4276728692976809' crossOrigin='anonymous' strategy='afterInteractive' />
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script strategy='afterInteractive' src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`} />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      {/* Google Tag Manager - Global base code */}
      {/* <Script
        id='gtag-base'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
        }}
      /> */}
    </>
  );
}
