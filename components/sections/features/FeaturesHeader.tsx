'use client';

import { motion } from 'framer-motion';

interface FeaturesHeaderProps {
  isInView: boolean;
}

export function FeaturesHeader({ isInView }: FeaturesHeaderProps) {
  return (
    <motion.div 
      className="text-center mb-12 sm:mb-16 lg:mb-20"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      {/* Badge */}
      <motion.div 
        className="inline-flex items-center px-3 sm:px-4 lg:px-6 py-2 lg:py-3 bg-white/90 backdrop-blur-sm text-black rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 lg:mb-10 shadow-lg border border-white/20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Keunggulan Kami
      </motion.div>

      {/* Title */}
      <motion.h2 
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 leading-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Solusi Disbursement <br />
        <span className="bg-gradient-to-r from-brand to-orange bg-clip-text text-transparent">
          Terlengkap & Terpercaya
        </span>
      </motion.h2>

      {/* Description */}
      <motion.p 
        className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Kami menyediakan layanan disbursement yang aman, cepat, dan terpercaya dengan teknologi terkini 
        untuk memudahkan proses pencairan dana perusahaan Anda.
      </motion.p>
    </motion.div>
  );
}
