'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className='fixed inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center z-[9999] overflow-hidden'>
      {/* Solid background overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-100'></div>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-300 to-transparent rounded-full -translate-y-48 -translate-x-48'></div>
        <div className='absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-orange-300 to-transparent rounded-full translate-y-40 translate-x-40'></div>
        <div className='absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-orange-200 to-transparent rounded-full transform -translate-x-1/2 -translate-y-1/2'></div>
      </div>

      <div className='relative z-10 text-center'>
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='mb-8'
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotateY: [0, 5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className='relative'
          >
            <Image
              src='/images/Logo.png'
              alt='UONE PAY'
              width={200}
              height={80}
              className='mx-auto drop-shadow-lg'
              priority
            />

            {/* Glow effect behind logo */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className='absolute inset-0 bg-orange-400 blur-xl rounded-full -z-10'
            />
          </motion.div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className='mb-8'
        >
          <motion.h2
            className='text-2xl md:text-3xl font-bold text-gray-800 mb-2'
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            UONE PAY
          </motion.h2>
          <motion.p
            className='text-gray-600 text-lg'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Memuat Solusi Disbursement Terbaik...
          </motion.p>
        </motion.div>

        {/* Loading Spinner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className='relative w-16 h-16 mx-auto mb-8'
        >
          {/* Outer Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'linear',
            }}
            className='absolute inset-0 border-4 border-orange-200 border-t-orange-500 rounded-full'
          />

          {/* Inner Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'linear',
            }}
            className='absolute inset-2 border-2 border-orange-100 border-b-orange-400 rounded-full'
          />

          {/* Center Dot */}
          <motion.div
            animate={{
              scale: [1, 0.8, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className='absolute inset-6 bg-orange-500 rounded-full'
          />
        </motion.div>

        {/* Progress Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.4 }}
          className='flex justify-center space-x-2'
        >
          {[0, 1, 2].map(index => (
            <motion.div
              key={index}
              animate={{
                y: [0, -8, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: index * 0.2,
                ease: 'easeInOut',
              }}
              className='w-2 h-2 bg-orange-500 rounded-full'
            />
          ))}
        </motion.div>

        {/* Loading Progress Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.4 }}
          className='mt-6'
        >
          <motion.p
            className='text-sm text-gray-500'
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            Menyiapkan dashboard disbursement Anda
          </motion.p>
        </motion.div>

        {/* Floating Elements */}
        <div className='absolute inset-0 pointer-events-none'>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0, 0.3, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: 'easeInOut',
              }}
              className='absolute w-2 h-2 bg-orange-300 rounded-full'
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
