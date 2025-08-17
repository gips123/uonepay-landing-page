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

      {/* Desktop Background Layers - Hidden on mobile */}
      <div className='hidden md:block'>
        {/* Background Layer 2 - Diagonal Orange Shape */}
        <Image
          src='/images/layer1.png'
          alt='Diagonal Shape'
          width={1920}
          height={800}
          className='absolute top-0 left-0 w-full h-auto object-cover translate-y-[70px]'
          style={{ zIndex: 10 }}
        />

        {/* Background Layer 3 - Cream Bottom */}
        <Image
          src='/images/layer2.png'
          alt='Cream Background'
          width={1920}
          height={600}
          className='absolute top-0 left-0 w-full h-auto object-cover translate-y-[70px]'
          style={{ zIndex: 20 }}
        />
      </div>

      {/* Diagonal Stripes Overlay */}
      <DiagonalStripes opacity={0.1} />
    </>
  );
}
