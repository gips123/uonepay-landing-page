import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import RegisterModal from '@/components/RegisterModal';

export const metadata: Metadata = {
  title: {
    default: 'UONE PAY - Disbursement',
    template: '%s | UONE PAY',
  },
  description: 'Solusi disbursement cepat dan aman.',
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <RegisterModal />
      <button id='register-trigger' className='hidden' aria-hidden />
    </>
  );
}
