'use client';

import { motion } from 'framer-motion';

export function PricingHeader() {
  return (
    <motion.div
      className='text-center mb-6 sm:mb-8 lg:mb-10'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        className='inline-flex items-center px-3 sm:px-4 lg:px-6 py-2 lg:py-3 bg-white/90 backdrop-blur-sm text-orange-600 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 lg:mb-6 shadow-lg border border-white/20'
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <svg
          className='w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mr-1 sm:mr-2'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1'
          />
        </svg>
        Layanan & Channel
      </motion.div>

      <motion.h2
        className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Disbursement & <br />
        <span className='bg-gradient-to-r from-yell to-orange bg-clip-text text-transparent'>
          Channel Pencairan
        </span>
      </motion.h2>

      <motion.p
        className='text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        Solusi disbursement terlengkap untuk semua kebutuhan transaksi dana
        perusahaan melalui berbagai bank dengan sistem yang aman, cepat, dan
        terpercaya.
        <span className='hidden lg:inline'>
          {' '}
          Dukungan multi-bank dan jaringan luas memungkinkan Anda memproses
          pembayaran ke seluruh Indonesia dengan mudah, efisien, dan tanpa
          hambatan.
        </span>
      </motion.p>
    </motion.div>
  );
}
