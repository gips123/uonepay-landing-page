'use client';

import { motion } from 'framer-motion';

interface ContactRegisterCardProps {
  onRegisterClick: () => void;
}

export function ContactRegisterCard({
  onRegisterClick,
}: ContactRegisterCardProps) {
  return (
    <motion.div
      className='bg-white/80 backdrop-blur-sm shadow-xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/20 hover:shadow-2xl transition-all duration-300 h-full flex flex-col'
      whileHover={{ scale: 1.02, y: -5 }}
    >
      {/* Header */}
      <div className='flex items-center mb-4 sm:mb-6'>
        <div className='w-10 h-10 sm:w-12 sm:h-12 bg-brand rounded-xl flex items-center justify-center mr-3 sm:mr-4'>
          <svg
            className='w-5 h-5 sm:w-6 sm:h-6 text-white'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 4v16m8-8H4'
            />
          </svg>
        </div>
        <div>
          <h3 className='text-lg sm:text-xl font-bold text-ink'>
            Daftar Sekarang
          </h3>
          <p className='text-gray-500 text-sm'>Mulai perjalanan Anda</p>
        </div>
      </div>

      {/* Content */}
      <p className='text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base flex-1'>
        Bergabunglah dengan ribuan perusahaan yang telah mempercayakan
        disbursement mereka kepada UONE PAY.
      </p>

      {/* Features List */}
      <div className='space-y-2 sm:space-y-3 mb-6 sm:mb-8'>
        {[
          'Setup gratis tanpa biaya tersembunyi',
          'API integration dalam 1 hari',
          'Dedicated account manager',
          'Dashboard analytics lengkap',
        ].map((feature, index) => (
          <motion.div
            key={index}
            className='flex items-center space-x-2'
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className='w-4 h-4 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0'>
              <svg
                className='w-2.5 h-2.5 text-white'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <span className='text-gray-700 text-sm'>{feature}</span>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.button
        onClick={onRegisterClick}
        className='w-full bg-brand-gradient text-white font-semibold px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl hover:bg-orange-600 transition-all duration-300 transform hover:scale-[1.02] text-sm sm:text-base shadow-lg hover:shadow-xl'
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Daftar Sekarang
      </motion.button>

      {/* Footer */}
      <p className='text-center text-gray-500 text-xs sm:text-sm mt-3 sm:mt-4'>
        Gratis untuk 1000 transaksi pertama
      </p>
    </motion.div>
  );
}
