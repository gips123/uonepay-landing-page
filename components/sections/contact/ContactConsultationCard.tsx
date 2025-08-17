'use client';

import { motion } from 'framer-motion';

interface ContactConsultationCardProps {
  onConsultationClick: () => void;
}

export function ContactConsultationCard({
  onConsultationClick,
}: ContactConsultationCardProps) {
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
              d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
            />
          </svg>
        </div>
        <div>
          <h3 className='text-lg sm:text-xl font-bold text-ink'>
            Konsultasi Gratis
          </h3>
          <p className='text-gray-500 text-sm'>Solusi terbaik untuk bisnis</p>
        </div>
      </div>

      {/* Content */}
      <div className='space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-1'>
        <p className='text-gray-600 leading-relaxed text-sm sm:text-base'>
          Sistem kami memproses disbursement secara real-time 24/7, memastikan
          dana sampai ke tujuan dengan cepat dan akurat.
        </p>
        <p className='text-gray-600 leading-relaxed text-sm sm:text-base'>
          Keamanan data dan transaksi terjamin dengan sertifikasi ISO 27001 dan
          enkripsi tingkat bank.
        </p>
      </div>

      {/* Security Badge */}
      <div className='flex items-center justify-center mb-6 sm:mb-8 p-3 sm:p-4 bg-green-50 rounded-lg sm:rounded-xl border border-green-200'>
        <div className='flex items-center space-x-2'>
          <div className='w-6 h-6 bg-green-500 rounded-full flex items-center justify-center'>
            <svg
              className='w-3 h-3 text-white'
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
          <span className='text-green-700 font-medium text-sm'>
            ISO 27001 Certified
          </span>
        </div>
      </div>

      {/* CTA Button */}
      <motion.button
        onClick={onConsultationClick}
        className='w-full bg-brand-gradient text-white font-semibold px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl hover:bg-orange-600 transition-all duration-300 transform hover:scale-[1.02] text-sm sm:text-base shadow-lg hover:shadow-xl'
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Hubungi Tim Kami
      </motion.button>

      {/* Footer */}
      <p className='text-center text-gray-500 text-xs sm:text-sm mt-3 sm:mt-4'>
        Tim ahli siap membantu 24 jam
      </p>
    </motion.div>
  );
}
