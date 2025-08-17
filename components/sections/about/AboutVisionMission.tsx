'use client';

import { motion } from 'framer-motion';

export function AboutVisionMission() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 text-left mb-8 sm:mb-12 lg:mb-16'>
      {/* Vision Card */}
      <motion.div
        className='bg-white/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 shadow-lg h-full flex flex-col'
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02, y: -5 }}
      >
        <h3 className='text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4 flex items-center'>
          <svg
            className='w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-orange-500 mr-2 lg:mr-3 flex-shrink-0'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          Visi Kami
        </h3>
        <p className='text-gray-600 leading-relaxed flex-1 text-xs sm:text-sm lg:text-base'>
          Menjadi platform disbursement nomor satu di Indonesia yang
          memungkinkan setiap perusahaan, dari startup hingga enterprise,
          melakukan pencairan dana dengan mudah, aman, dan efisien. Kami
          berkomitmen menciptakan ekosistem finansial digital yang inklusif dan
          terpercaya.
        </p>
      </motion.div>

      {/* Mission Card */}
      <motion.div
        className='bg-white/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 shadow-lg h-full flex flex-col'
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02, y: -5 }}
      >
        <h3 className='text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4 flex items-center'>
          <svg
            className='w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-orange-500 mr-2 lg:mr-3 flex-shrink-0'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M13 10V3L4 14h7v7l9-11h-7z'
            />
          </svg>
          Misi Kami
        </h3>
        <p className='text-gray-600 leading-relaxed flex-1 text-xs sm:text-sm lg:text-base'>
          Menyediakan solusi disbursement yang revolusioner melalui teknologi
          terdepan, infrastruktur yang solid, dan layanan pelanggan yang
          exceptional. Kami mengutamakan keamanan, kecepatan, dan kemudahan
          dalam setiap transaksi disbursement.
        </p>
      </motion.div>
    </div>
  );
}
