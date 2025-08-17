'use client';

import Image from 'next/image';
import UOnePayMobile from '@/components/ui/UOnePayMobile';

export function HeroAssets() {
  return (
    <div className='hidden md:block'>
      {/* Main Hero Image - Business Woman */}
      <Image
        src='/images/women.png'
        alt='Business Woman'
        width={550}
        height={400}
        className='absolute right-[40px] transform -translate-y-1/2 drop-shadow-lg'
        style={{ zIndex: 15 }}
      />

      {/* Floating Asset 1 - UONE PAY Mobile Component */}
      <div
        className='absolute right-[250px] top-[280px] transform -translate-y-1/2 w-[400px] h-[320px]'
        style={{ zIndex: 11 }}
      >
        <UOnePayMobile />
      </div>

      {/* Floating Asset 2 - Chart */}
      <Image
        src='/images/grafik.png'
        alt='Chart Widget'
        width={200}
        height={90}
        className='absolute top-[180px] right-[90px] drop-shadow-lg'
        style={{ zIndex: 15 }}
      />

      {/* Floating Asset 3 - Payment Success */}
      <Image
        src='/images/succes.png'
        alt='Payment Success'
        width={280}
        height={120}
        className='absolute right-[350px] top-[460px] drop-shadow-lg'
        style={{ zIndex: 20 }}
      />
    </div>
  );
}
