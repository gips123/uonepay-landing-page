'use client';

import { motion } from 'framer-motion';

export function PricingImage() {
  return (
    <motion.div
      className='lg:col-span-5 order-first lg:order-last'
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <div className='relative w-full max-w-md mx-auto lg:max-w-none'>
        {/* Simple image without background effects */}
        <motion.img
          src='/images/pricing2.png'
          alt='Pricing Overview'
          className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}
