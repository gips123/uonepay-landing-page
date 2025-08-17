'use client';

import { Container } from '@/components/ui/Container';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FeaturesHeader } from './FeaturesHeader';
import { FeaturesGrid } from './FeaturesGrid';
import { FeaturesImage } from './FeaturesImage';

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      id='keunggulan'
      className='py-12 md:py-16 lg:py-20 relative bg-yell overflow-hidden'
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated Background decorative elements */}
      <motion.div
        className='absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-300/20 to-transparent rounded-full opacity-20 -translate-y-48 translate-x-48'
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className='absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-300/30 to-transparent rounded-full opacity-30 translate-y-40 -translate-x-40'
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      <Container>
        <motion.div
          className='max-w-6xl mx-auto px-4 sm:px-6 relative z-10'
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header Section */}
          <FeaturesHeader isInView={isInView} />

          {/* Minimalist Layout - Side by Side */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
            {/* Left: Features Grid */}
            <FeaturesGrid isInView={isInView} />

            {/* Right: Features Image */}
            <FeaturesImage isInView={isInView} />
          </div>
        </motion.div>
      </Container>
    </motion.section>
  );
}
