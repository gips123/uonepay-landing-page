'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function AboutHeader() {
  return (
    <motion.div
      className='text-center mb-8 sm:mb-12 lg:mb-16'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        className='inline-flex items-center px-3 sm:px-4 lg:px-6 py-2 lg:py-3 bg-white/90 backdrop-blur-sm text-orange-600 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 lg:mb-10 shadow-lg border border-white/20'
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
            d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
        Tentang Kami
      </motion.div>

      <motion.div
        className='bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 border border-white/20 shadow-xl mb-6 sm:mb-8 lg:mb-12'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className='flex flex-col items-center mb-3 sm:mb-4 lg:mb-6'>
          <motion.div
            className='mb-3 sm:mb-4 lg:mb-6'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src='/images/Logo.png'
              alt='UONE PAY Logo'
              width={300}
              height={120}
              className='w-auto h-12 sm:h-16 md:h-20 lg:h-24 drop-shadow-lg'
            />
          </motion.div>
        </div>

        <motion.div
          className='text-center max-w-6xl mx-auto'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className='text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed'>
            UOnePay adalah penyedia layanan pembayaran digital yang menghadirkan
            solusi lengkap untuk kebutuhan penerimaan dan pengeluaran dana,
            termasuk layanan disbursement yang aman, cepat, dan terintegrasi.
            Melalui platform UOnePay, perusahaan dapat melakukan transfer dana
            ke berbagai tujuan—mulai dari rekening bank hingga dompet
            digital—secara massal maupun individual, hanya dengan sekali proses
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
