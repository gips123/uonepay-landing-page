'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LoadingMinimal() {
  return (
    <div className='fixed inset-0 bg-white flex items-center justify-center z-[9999] overflow-hidden'>
      {/* Solid background overlay */}
      <div className='absolute inset-0 bg-white'></div>
      <div className='text-center'>
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='mb-6'
        >
          <Image
            src='/images/Logo.png'
            alt='UONE PAY'
            width={150}
            height={60}
            className='mx-auto'
            priority
          />
        </motion.div>

        {/* Simple Spinner */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'linear',
          }}
          className='w-8 h-8 border-2 border-orange-200 border-t-orange-500 rounded-full mx-auto mb-4'
        />

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='text-gray-600 text-sm'
        >
          Memuat...
        </motion.p>
      </div>
    </div>
  );
}
