import React from 'react';

export interface Partner {
  name: string;
  logo: string;
}

export interface DisbursementChannel {
  category: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
  partners: Partner[];
}

export const disbursementChannels: DisbursementChannel[] = [
  {
    category: 'Bank Transfer',
    description:
      'Transfer dana langsung ke rekening bank nasional dan internasional',
    icon: (
      <svg
        className='w-8 h-8 text-white'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z'
        />
      </svg>
    ),
    color: 'from-amber-500 to-orange-500',
    bgColor: 'from-amber-50 to-orange-50',
    borderColor: 'border-amber-200',
    partners: [
      { name: 'Bank Central Asia (BCA)', logo: '/bank/bca.png' },
      { name: 'Bank Mandiri', logo: '/bank/mandiri.png' },
      { name: 'Bank Negara Indonesia (BNI)', logo: '/bank/bni.png' },
      { name: 'Bank Rakyat Indonesia (BRI)', logo: '/bank/bri.png' },
      { name: 'Bank CIMB Niaga', logo: '/bank/cimb.png' },
      { name: 'Bank BTPN', logo: '/bank/btpn.png' },
      { name: 'Bank Mega', logo: '/bank/mega.png' },
      { name: 'Bank Panin', logo: '/bank/panin.png' },
    ],
  },
  {
    category: 'E-Wallet',
    description:
      'Pencairan dana langsung ke dompet digital untuk kemudahan akses',
    icon: (
      <svg
        className='w-8 h-8 text-white'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
        />
      </svg>
    ),
    color: 'from-amber-500 to-orange-500',
    bgColor: 'from-amber-50 to-orange-50',
    borderColor: 'border-amber-200',
    partners: [
      { name: 'GoPay', logo: '/ewallet/gopay.png' },
      { name: 'OVO', logo: '/ewallet/ovo.png' },
      { name: 'DANA', logo: '/ewallet/dana.png' },
      { name: 'LinkAja', logo: '/ewallet/linkaja.png' },
      { name: 'ShopeePay', logo: '/ewallet/shopeepay.png' },
      { name: 'Jenius Pay', logo: '/ewallet/jeniuspay.png' },
    ],
  },
  {
    category: 'Kartu Kredit/Debit',
    description:
      'Disbursement langsung ke kartu kredit dan debit dengan keamanan tinggi',
    icon: (
      <svg
        className='w-8 h-8 text-white'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
        />
      </svg>
    ),
    color: 'from-amber-500 to-orange-500',
    bgColor: 'from-amber-50 to-orange-50',
    borderColor: 'border-amber-200',
    partners: [
      { name: 'Visa Indonesia', logo: '/kredit/visa.png' },
      { name: 'Mastercard Indonesia', logo: '/kredit/mastercard.png' },
    ],
  },
];
