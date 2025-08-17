import { companyInfo } from '@/data/navigation';

export { companyInfo };

export const DISBURSEMENT_CHANNELS = [
  {
    name: 'Bank Transfer',
    partners: ['BCA', 'Mandiri', 'BRI', 'BNI', 'CIMB', 'Permata'],
    processingTime: 'Real-time',
  },
  {
    name: 'E-Wallet',
    partners: ['OVO', 'DANA', 'GoPay', 'LinkAja', 'ShopeePay'],
    processingTime: '< 5 menit',
  },
  {
    name: 'Virtual Account',
    partners: ['BCA VA', 'Mandiri VA', 'BRI VA', 'BNI VA', 'Permata VA'],
    processingTime: 'Real-time',
  },
  {
    name: 'Retail Outlet',
    partners: ['Indomaret', 'Alfamart', 'Pos Indonesia'],
    processingTime: '< 30 menit',
  },
];
