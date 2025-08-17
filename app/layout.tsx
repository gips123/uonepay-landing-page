import type { Metadata } from 'next';
import './globals.css';
import {
  defaultMetadata,
  organizationSchema,
  serviceSchema,
  websiteSchema,
} from '@/lib/seo';
import { IntroProvider } from '@/hooks/useIntro';
import IntroTransition from '@/components/ui/IntroTransition';
import PageTransition from '@/components/ui/PageTransition';

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='id' className='scroll-smooth'>
      <head>
        <link rel='manifest' href='/manifest.json' />
        <link rel='icon' href='/images/u.png' />
        <link rel='apple-touch-icon' href='/images/u.png' />
        <meta name='theme-color' content='#e4572e' />
        <meta name='msapplication-TileColor' content='#e4572e' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=5'
        />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='UONE PAY' />

        {/* Additional SEO Meta Tags */}
        <meta name='author' content='UONE PAY Team' />
        <meta name='copyright' content='Copyright 2024 UONE PAY' />
        <meta name='language' content='Indonesian' />
        <meta name='coverage' content='Indonesia' />
        <meta name='distribution' content='Global' />
        <meta name='rating' content='General' />
        <meta name='revisit-after' content='7 days' />

        {/* Preconnect to external domains for performance */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />

        {/* Structured Data */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className='bg-white text-gray-900 antialiased'>
        <IntroProvider>
          <IntroTransition />
          <PageTransition>{children}</PageTransition>
        </IntroProvider>
      </body>
    </html>
  );
}
