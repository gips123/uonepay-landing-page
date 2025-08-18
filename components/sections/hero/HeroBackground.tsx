'use client';

import Image from 'next/image';
import DiagonalStripes from '@/components/particles/DiagonalStripes';

export function HeroBackground() {
  return (
    <>
      {/* Background Layer 1 - Orange Background */}
      <Image
        src='/images/bg1.png'
        alt='Orange Background'
        fill
        className='object-cover'
        style={{ zIndex: -30 }}
        priority
      />

      {/* Desktop XL Layout (Laptop) */}
      <div className='hidden xl:block 2xl:hidden'>
        {/* Layer 2 - Diagonal Shape */}
        <Image
          src='/images/layer1.png'
          alt='Diagonal Shape'
          fill
          className='absolute top-0 left-0 w-screen h-screen object-cover translate-y-[2vh]'
          style={{ zIndex: 10 }}
        />

        {/* Layer 3 - Cream Bottom */}
        <Image
          src='/images/layer21.png'
          alt='Cream Background'
          fill
          className='absolute top-0 left-0 w-screen h-screen object-cover translate-y-[35vh]'
          style={{ zIndex: 20 }}
        />
      </div>

      {/* Desktop 2XL Layout (Monitor Besar) */}
      <div className='hidden 2xl:block'>
        {/* Layer 2 - Diagonal Shape */}
        <Image
          src='/images/layer1.png'
          alt='Diagonal Shape'
          fill
          className='absolute top-0 left-0 w-screen h-screen object-cover translate-y-[1vh]'
          style={{ zIndex: 10 }}
        />

        {/* Layer 3 - Cream Bottom */}
        <Image
          src='/images/layer21.png'
          alt='Cream Background'
          fill
          className='absolute top-0 left-0 w-screen h-screen object-cover translate-y-[40vh]'
          style={{ zIndex: 20 }}
        />
      </div>

      {/* Diagonal Stripes Overlay */}
      <DiagonalStripes opacity={0.1} />
    </>
  );
}
