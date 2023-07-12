'use client'

import Script from "next/script"

const GoogleAnalytics = ({GA_TRAKING_ID}) => {
  return (
    <>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRAKING_ID}`} />
      <Script id="google-analytics">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${GA_TRAKING_ID}');
        `}
      </Script>
    </>
    )
};

export default GoogleAnalytics;