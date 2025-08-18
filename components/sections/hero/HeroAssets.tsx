'use client';

import Image from 'next/image';
import UOnePayMobile from '@/components/ui/UOnePayMobile';

export function HeroAssets() {
  return (
    <div className=''>
      <div className='hidden 2xl:hidden xl:block '>
      {/* Main Hero Image - Business Woman */}
      <Image
        src='/images/women.png'
        alt='Business Woman'
        width={550}
        height={400}
        className='absolute right-[50px] top-[] transform -translate-y-1/2 drop-shadow-lg'
        style={{ zIndex: 15 }}
      />

      

      {/* Floating Asset 1 - UONE PAY Mobile Component */}
      <div
        className='absolute right-[400px] transform -translate-y-[300px] scale-120'
        style={{ zIndex: 11 }}
      >
        <UOnePayMobile />
      </div>

      {/* Floating Asset 2 - Chart */}
      <Image
        src='/images/grafik.png'
        alt='Chart Widget'
        width={200}
        height={100}
        className='absolute right-[100px] transform -translate-y-[250px] scale-120'
        style={{ zIndex: 15 }}
      />

      {/* Floating Asset 3 - Payment Success */}
      <Image
        src='/images/succes.png'
        alt='Payment Success'
        width={280}
        height={120}
        className='absolute right-[360px] transform translate-y-[50px] scale-120'
        style={{ zIndex: 20 }}
      />
    </div>
    <div className='hidden 2xl:block'>
      {/* Main Hero Image - Business Woman */}
      <Image
        src='/images/women.png'
        alt='Business Woman'
        width={650}
        height={400}
        className='absolute right-[220px] transform -translate-y-1/2 drop-shadow-lg'
        style={{ zIndex: 15 }}
      />

      {/* Floating Asset 1 - UONE PAY Mobile Component */}
      <div
        className='absolute right-[660px] transform -translate-y-[300px] scale-120'
        style={{ zIndex: 11 }}
      >
        <UOnePayMobile />
      </div>

      {/* Floating Asset 2 - Chart */}
      <Image
        src='/images/grafik.png'
        alt='Chart Widget'
        width={250}
        height={90}
        className='absolute right-[260px] transform -translate-y-[300px] drop-shadow-lg'
        style={{ zIndex: 15 }}
      />

      {/* Floating Asset 3 - Payment Success */}
      <Image
        src='/images/succes.png'
        alt='Payment Success'
        width={330}
        height={120}
        className='absolute right-[600px] transform translate-y-[60px] drop-shadow-lg'
        style={{ zIndex: 20 }}
      />
    </div>
    </div>
    

    
  );
}
