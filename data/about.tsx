import React from 'react';

export interface Achievement {
  number: string;
  label: string;
  description: string;
  color: string;
  icon: React.ReactNode;
}

export interface AboutFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

export const achievements: Achievement[] = [
  {
    number: '500+',
    label: 'Multi Sektor Partner',
    description: 'Solusi pembayaran untuk berbagai jenis industri',
    color: 'from-orange-500 to-red-500',
    icon: (
      <svg
        className='w-8 h-8'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
        />
      </svg>
    ),
  },
  {
    number: '1M+',
    label: 'Kapasitas Transaksi',
    description: 'Dirancang untuk tumbuh sesuai perkembangan bisnis Anda',
    color: 'from-amber-500 to-orange-500',
    icon: (
      <svg
        className='w-8 h-8'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
        />
      </svg>
    ),
  },
  {
    number: '99.9%',
    label: 'Success Rate',
    description: 'Tingkat keberhasilan transaksi yang sangat tinggi',
    color: 'from-yellow-500 to-amber-500',
    icon: (
      <svg
        className='w-8 h-8'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    ),
  },
  {
    number: '24/7',
    label: 'Customer Support',
    description: 'Tim support yang siap membantu kapan saja',
    color: 'from-orange-600 to-red-600',
    icon: (
      <svg
        className='w-8 h-8'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z'
        />
      </svg>
    ),
  },
];

export const aboutFeatures: AboutFeature[] = [
  {
    icon: (
      <svg
        className='w-8 h-8'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M13 10V3L4 14h7v7l9-11h-7z'
        />
      </svg>
    ),
    title: 'Pencairan Real-Time',
    description:
      'Dana cair dalam hitungan detik ke berbagai channel pembayaran dengan teknologi terdepan',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: (
      <svg
        className='w-8 h-8'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
        />
      </svg>
    ),
    title: 'Keamanan Enterprise',
    description:
      'Sistem keamanan berlapis dengan compliance Bank Indonesia dan sertifikasi internasional',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: (
      <svg
        className='w-8 h-8'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
        />
      </svg>
    ),
    title: 'Dashboard Analytics',
    description:
      'Monitoring real-time dengan insights mendalam untuk optimasi bisnis Anda',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: (
      <svg
        className='w-8 h-8'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
        />
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
        />
      </svg>
    ),
    title: 'API Integration',
    description:
      'Mudah diintegrasikan dengan sistem existing menggunakan RESTful API yang comprehensive',
    color: 'from-orange-600 to-red-600',
  },
];
