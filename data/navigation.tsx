export interface NavItem {
  id: string;
  label: string;
}

export const navItems: NavItem[] = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'tentang', label: 'Tentang' },
  { id: 'keunggulan', label: 'Keunggulan' },
  { id: 'pricing', label: 'Layanan' },
  { id: 'kontak', label: 'Kontak' },
];

export interface CompanyInfo {
  name: string;
  description: string;
  tagline: string;
  email: string;
  phone: string;
  address: string;
}

export const companyInfo: CompanyInfo = {
  name: 'UOnePay',
  description:
    'Platform disbursement terpercaya untuk solusi pembayaran digital Indonesia',
  tagline: 'Mudah, Cepat, Terpercaya',
  email: 'support@uonepay.com',
  phone: '+62 21 1234 5678',
  address: 'Jakarta, Indonesia',
};
