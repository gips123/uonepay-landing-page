'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { brandedLoadingFeatures } from '@/data/loading';

export default function LoadingBranded() {
  const [loadingText, setLoadingText] = useState(0);

  const loadingMessages = [
    'Memuat platform disbursement terbaik...',
    'Menyiapkan solusi pembayaran digital...',
    'Mengoptimalkan keamanan transaksi...',
    'Siap melayani kebutuhan bisnis Anda!',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText(prev => (prev + 1) % loadingMessages.length);
    }, 800);

    return () => clearInterval(interval);
  }, [loadingMessages.length]);

  return (
    <div className='fixed inset-0 bg-gradient-to-br from-brand-light via-brand to-burnt flex items-center justify-center z-[9999] overflow-hidden'>
      {/* Solid background overlay to ensure full coverage */}
      <div className='absolute inset-0 bg-gradient-to-br from-brand-light via-brand to-burnt'></div>
      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        {/* Floating circles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute bg-white/10 rounded-full'
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Diagonal lines */}
        <div className='absolute inset-0 opacity-5'>
          <div className='absolute top-0 left-0 w-full h-px bg-sun transform -rotate-12 translate-y-20'></div>
          <div className='absolute top-0 left-0 w-full h-px bg-sun transform -rotate-12 translate-y-40'></div>
          <div className='absolute top-0 left-0 w-full h-px bg-sun transform -rotate-12 translate-y-60'></div>
        </div>
      </div>

      <div className='relative z-10 text-center max-w-lg mx-auto px-6'>
        {/* Logo with Glow Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className='mb-12'
        >
          <div className='relative'>
            {/* Glow background */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className='absolute inset-0 bg-sun/60 blur-2xl rounded-full'
            />

            {/* Logo */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotateY: [0, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className='relative bg-white rounded-2xl p-6 shadow-2xl'
            >
              <Image
                src='/images/Logo.png'
                alt='UONE PAY'
                width={200}
                height={80}
                className='mx-auto'
                priority
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Main Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className='mb-8'
        >
          <h1 className='text-3xl md:text-4xl font-bold text-creamy mb-4'>
            UONE PAY
          </h1>
          <p className='text-xl text-cream/90 font-medium'>
            Platform Disbursement Terdepan
          </p>
        </motion.div>

        {/* Dynamic Loading Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className='mb-10'
        >
          <motion.p
            key={loadingText}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className='text-cream/80 text-lg'
          >
            {loadingMessages[loadingText]}
          </motion.p>
        </motion.div>

        {/* Advanced Loading Spinner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.4 }}
          className='relative w-20 h-20 mx-auto mb-8'
        >
          {/* Outer ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
            className='absolute inset-0 border-4 border-sun/20 border-t-sun rounded-full'
          />

          {/* Middle ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'linear',
            }}
            className='absolute inset-2 border-3 border-sun/30 border-r-sun rounded-full'
          />

          {/* Inner ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'linear',
            }}
            className='absolute inset-4 border-2 border-sun/40 border-b-sun rounded-full'
          />

          {/* Center dot */}
          <motion.div
            animate={{
              scale: [1, 0.8, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className='absolute inset-7 bg-sun rounded-full'
          />
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className='flex justify-center space-x-8 text-cream/70'
        >
          {brandedLoadingFeatures.map((feature, index) => (
            <motion.div
              key={feature.text}
              animate={{
                y: [0, -5, 0],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3,
                ease: 'easeInOut',
              }}
              className='text-center'
            >
              <div className='text-2xl mb-1'>{feature.icon}</div>
              <div className='text-sm font-medium'>{feature.text}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Progress Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.4 }}
          className='flex justify-center space-x-2 mt-8'
        >
          {[0, 1, 2, 3].map(index => (
            <motion.div
              key={index}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: index * 0.15,
                ease: 'easeInOut',
              }}
              className='w-2 h-2 bg-sun rounded-full'
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
