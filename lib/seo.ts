import type { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  title: {
    default: 'UONE PAY - Payment Gateway & Disbursement Solution Terpercaya',
    template: '%s | UONE PAY',
  },
  description:
    'UONE PAY adalah platform payment gateway dan disbursement terdepan di Indonesia. Solusi pembayaran digital cepat, aman, dan terpercaya untuk bisnis Anda dengan integrasi lengkap berbagai metode pembayaran seperti Virtual Account, E-Wallet, QRIS, dan Credit Card.',
  keywords: [
    'payment gateway',
    'payment processor',
    'digital payment',
    'online payment',
    'e-commerce payment',
    'virtual account',
    'credit card payment',
    'disbursement',
    'e-wallet',
    'QRIS',
    'UONE PAY',
    'Indonesia payment',
    'business payment solution',
    'disbursement',
    'pencairan dana',
    'payment gateway Indonesia',
    'fintech Indonesia',
    'digital banking',
    'online transaction',
    'secure payment',
    'instant payment',
  ],
  authors: [{ name: 'UONE PAY Team', url: 'https://uonepay.id' }],
  creator: 'UONE PAY',
  publisher: 'UONE PAY',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://uonepay.id'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://uonepay.id',
    siteName: 'UONE PAY',
    title: 'UONE PAY - Payment Gateway & Disbursement Solution Terpercaya',
    description:
      'Platform payment gateway dan disbursement terdepan di Indonesia. Solusi pembayaran digital cepat, aman, dan terpercaya untuk bisnis Anda.',
    images: [
      {
        url: '/images/Logo.png',
        width: 1200,
        height: 630,
        alt: 'UONE PAY - Payment Gateway Indonesia',
        type: 'image/png',
      },
      {
        url: '/images/hero.png',
        width: 1200,
        height: 630,
        alt: 'UONE PAY Disbursement Solution',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UONE PAY - Payment Gateway & Disbursement Solution',
    description:
      'Platform payment gateway dan disbursement terdepan di Indonesia. Solusi pembayaran digital cepat, aman, dan terpercaya.',
    images: ['/images/Logo.png'],
    creator: '@uonepay',
    site: '@uonepay',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google:
      process.env.GOOGLE_VERIFICATION_CODE || 'your-google-verification-code',
    yandex:
      process.env.YANDEX_VERIFICATION_CODE || 'your-yandex-verification-code',
    yahoo:
      process.env.YAHOO_VERIFICATION_CODE || 'your-yahoo-verification-code',
  },
  category: 'Finance',
  classification: 'Payment Gateway',
  other: {
    'geo.region': 'ID',
    'geo.placename': 'Jakarta',
    'geo.position': '-6.2088;106.8456',
    ICBM: '-6.2088, 106.8456',
    'DC.title': 'UONE PAY - Payment Gateway Indonesia',
    'DC.creator': 'UONE PAY Team',
    'DC.subject': 'Payment Gateway, Disbursement, Digital Payment',
    'DC.description':
      'Platform payment gateway dan disbursement terdepan di Indonesia',
    'DC.publisher': 'UONE PAY',
    'DC.contributor': 'UONE PAY Team',
    'DC.date': new Date().toISOString(),
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://uonepay.id',
    'DC.language': 'id',
    'DC.coverage': 'Indonesia',
    'DC.rights': 'Copyright 2024 UONE PAY',
  },
};

// Structured Data for Organization
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'UONE PAY',
  url: 'https://uonepay.id',
  logo: '/images/u.png',
  description:
    'Platform disbursement terdepan di Indonesia',
  foundingDate: '2020',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ruko Harlin Nusukan Blok B12',
    addressLocality: 'Surakarta',
    addressRegion: 'Jawa Tengah',
    postalCode: '57135',
    addressCountry: 'ID',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+62812-9397-1987',
    contactType: 'customer service',
    availableLanguage: 'Indonesian',
  },
  sameAs: [
    'https://www.linkedin.com/company/uonepay',
    'https://twitter.com/uonepay',
    'https://www.facebook.com/uonepay',
  ],
};

// Structured Data for Service
export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'UONE PAY Payment Gateway',
  description:
    'Solusi payment gateway dan disbursement terpercaya untuk bisnis Indonesia',
  provider: {
    '@type': 'Organization',
    name: 'UONE PAY',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Indonesia',
  },
  serviceType: 'Payment Gateway',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'IDR',
    description: 'Gratis setup dan integrasi',
  },
};

// Structured Data for WebSite
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'UONE PAY',
  url: 'https://uonepay.id',
  description:
    'Platform payment gateway dan disbursement terdepan di Indonesia',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://uonepay.id/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};
