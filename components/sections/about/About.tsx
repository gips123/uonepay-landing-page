'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { AboutHeader } from './AboutHeader';
import { AboutStats } from './AboutStats';
import { AboutVisionMission } from './AboutVisionMission';

export default function About() {
  return (
    <section
      id='tentang'
      className='py-12 sm:py-16 md:py-24 lg:py-32 xl:py-[200px] relative overflow-hidden'
      style={{ backgroundColor: '#FBF2E0' }}
    >
      {/* Background decorative elements */}
      <div className='absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-transparent rounded-full -translate-y-48 -translate-x-48'></div>
      <div className='absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-orange-200/20 to-transparent rounded-full translate-y-40 translate-x-40'></div>

      <Container>
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
          {/* Header Section */}
          <AboutHeader />

          {/* Vision Mission Section */}
          <AboutVisionMission />

          {/* Stats Section */}
          <AboutStats />
        </div>
      </Container>
    </section>
  );
}
