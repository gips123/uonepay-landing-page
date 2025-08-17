'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { PricingHeader } from './PricingHeader';
import { PricingChannels } from './PricingChannels';
import { PricingImage } from './PricingImage';

export default function Pricing() {
  const [activeChannel, setActiveChannel] = useState<number | null>(null);

  return (
    <section
      id='pricing'
      className='py-16 sm:py-24 md:py-32 lg:py-[150px] bg-creamy relative overflow-hidden'
    >
      {/* Background decorative elements */}
      <div className='absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-200 to-transparent rounded-full opacity-20 -translate-y-48 -translate-x-48'></div>
      <div className='absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-orange-200 to-transparent rounded-full opacity-30 translate-y-40 translate-x-40'></div>

      <Container>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 relative z-10'>
          {/* Header Section */}
          <PricingHeader />

          {/* Responsive Channels Layout */}
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center'>
            {/* Left Side - Channels */}
            <div className='lg:col-span-7 space-y-4 sm:space-y-6'>
              <PricingChannels
                activeChannel={activeChannel}
                setActiveChannel={setActiveChannel}
              />
            </div>

            {/* Right Side - Pricing Image */}
            <PricingImage />
          </div>
        </div>
      </Container>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
