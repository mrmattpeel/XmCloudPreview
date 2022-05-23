import React from 'react';
import Head from 'next/head';
import {
  Placeholder,
  VisitorIdentification,
  getPublicUrl,
  LayoutServiceData,
} from '@sitecore-jss/sitecore-jss-nextjs';

// Prefix public assets with a public URL to enable compatibility with Sitecore Experience Editor.
// If you're not supporting the Experience Editor, you can remove this.
const publicUrl = getPublicUrl();

interface LayoutProps {
  layoutData: LayoutServiceData;
}

const Layout = ({ layoutData }: LayoutProps): JSX.Element => {
  const { route } = layoutData.sitecore;

  return (
    <>
      <Head>
        <title>{route?.fields?.pageTitle?.value || 'Page'}</title>
        <link rel="icon" href={`${publicUrl}/favicon.ico`} />
        <link
          rel="stylesheet"
          href={`https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css`}
        />
        <link rel="preconnect" href={`https://fonts.gstatic.com`} crossOrigin={``} />
        <link
          rel="preload"
          as="style"
          href={`https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,700,700i&display=swap`}
        />
        <link
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,700,700i&display=swap`}
          media="print"
        />
        <link rel="stylesheet" href={`${publicUrl}/app.jet2.css`} />
      </Head>

      {/*
        VisitorIdentification is necessary for Sitecore Analytics to determine if the visitor is a robot.
        If Sitecore XP (with xConnect/xDB) is used, this is required or else analytics will not be collected for the JSS app.
        For XM (CMS-only) apps, this should be removed.

        VI detection only runs once for a given analytics ID, so this is not a recurring operation once cookies are established.
      */}
      <VisitorIdentification />

      {/* root placeholder for the app, which we add components to using route data */}
      <div className="outer">
        {route && <Placeholder name="jss-top" rendering={route} />}
        <div className="site-content">
          {route && <Placeholder name="jss-main" rendering={route} />}
        </div>
      </div>

      <link
        href="https://www.jet2holidays.com/dist/beach.bundle-0169071ff08050b4cdd9.css"
        rel="preload"
        as="style"
      />
      <link
        href="https://www.jet2holidays.com/dist/beach.bundle-0169071ff08050b4cdd9.css"
        rel="stylesheet"
      />
      <link
        href="https://www.jet2holidays.com/-/media/jet2holidays/stylesheets/home-v2/home-v2-internal-9.css"
        rel="stylesheet"
      ></link>
    </>
  );
};

export default Layout;
