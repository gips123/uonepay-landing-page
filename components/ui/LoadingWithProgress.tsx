'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { loadingFeatures } from '@/data/loading';

export default function LoadingWithProgress() {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    'Memuat komponen...',
    'Menyiapkan data...',
    'Mengoptimalkan performa...',
    'Hampir selesai...',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }

        // Update step based on progress
        const newProgress = prev + 2;
        const stepIndex = Math.floor((newProgress / 100) * steps.length);
        setCurrentStep(Math.min(stepIndex, steps.length - 1));

        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className='fixed inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center z-[9999] overflow-hidden'>
      {/* Solid background overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-100'></div>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-300 to-transparent rounded-full -translate-y-48 -translate-x-48'></div>
        <div className='absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-orange-300 to-transparent rounded-full translate-y-40 translate-x-40'></div>
      </div>

      <div className='relative z-10 text-center max-w-md mx-auto px-6'>
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='mb-8'
        >
          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Image
              src='/images/Logo.png'
              alt='UONE PAY'
              width={180}
              height={72}
              className='mx-auto drop-shadow-lg'
              priority
            />
          </motion.div>
        </motion.div>

        {/* Welcome Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className='mb-8'
        >
          <h2 className='text-2xl md:text-3xl font-bold text-gray-800 mb-2'>
            Selamat Datang di UONE PAY
          </h2>
          <p className='text-gray-600'>
            Platform Disbursement Terdepan di Indonesia
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className='mb-6'
        >
          <div className='w-full bg-gray-200 rounded-full h-2 mb-3'>
            <motion.div
              className='bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full'
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </div>

          {/* Progress Percentage */}
          <div className='flex justify-between items-center text-sm'>
            <span className='text-gray-600'>{progress}%</span>
            <span className='text-orange-600 font-medium'>
              {steps[currentStep]}
            </span>
          </div>
        </motion.div>

        {/* Loading Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.4 }}
          className='grid grid-cols-2 gap-4 mb-6'
        >
          {loadingFeatures.map((feature, index) => (
            <motion.div
              key={feature.text}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
              className='bg-white/60 backdrop-blur-sm rounded-lg p-3 text-center border border-white/30'
            >
              <div className='text-xl mb-1'>{feature.icon}</div>
              <div className='text-xs text-gray-700 font-medium'>
                {feature.text}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Loading Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.4 }}
          className='flex justify-center space-x-1'
        >
          {[0, 1, 2].map(index => (
            <motion.div
              key={index}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: index * 0.2,
                ease: 'easeInOut',
              }}
              className='w-2 h-2 bg-orange-500 rounded-full'
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
