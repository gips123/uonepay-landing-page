'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface FeaturesImageProps {
  isInView: boolean;
}

export function FeaturesImage({ isInView }: FeaturesImageProps) {
  return (
    <motion.div
      className='relative flex items-center justify-center'
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, delay: 0.7 }}
    >
      <motion.div
        className='relative w-full max-w-md'
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src='/images/feature1.png'
          alt='UONE PAY Features Dashboard'
          width={500}
          height={400}
          className='w-full h-auto '
          priority
        />

        {/* Minimal floating elements */}
        <motion.div
          className='absolute -top-3 -right-3 w-6 h-6 bg-yellow-400 rounded-full shadow-lg'
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  );
}
