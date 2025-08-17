'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { HeroBackground } from './HeroBackground';
import { HeroContent } from './HeroContent';
import { HeroAssets } from './HeroAssets';
import { useIntro } from '@/hooks/useIntro';

export default function Hero() {
  const { introComplete } = useIntro();

  // Use key to force re-render when intro finishes
  const animationKey = introComplete ? 'loaded' : 'intro';

  return (
    <section
      id='beranda'
      className='pt-24 min-h-screen relative flex items-center w-full'
    >
      {/* Background Layers */}
      <HeroBackground />

      {/* Desktop Assets */}
      <HeroAssets />

      <Container
        className='relative z-10 flex flex-col md:flex-row items-center px-4 sm:px-6'
        key={animationKey}
      >
        {/* Hero Content */}
        <HeroContent introComplete={introComplete} />

        {/* Desktop spacing */}
        <div className='hidden md:block flex-1'>
          {/* Content area for text alignment on desktop */}
        </div>
      </Container>
    </section>
  );
}
