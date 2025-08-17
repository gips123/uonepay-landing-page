'use client';

import { motion } from 'framer-motion';
import UOnePayMobile from '@/components/ui/UOnePayMobile';

interface HeroContentProps {
  introComplete: boolean;
}

export function HeroContent({ introComplete }: HeroContentProps) {
  return (
    <>
      {/* Mobile UOnePayMobile Component - Only shown on mobile, positioned at top */}
      <div className='w-full flex justify-center relative md:hidden mb-8'>
        <div className='transform scale-90'>
          <UOnePayMobile />
        </div>
      </div>

      <div className='flex-1 mb-8 md:mb-0 text-center md:text-left'>
        <motion.h1
          className='text-3xl md:text-4xl lg:text-[43px] font-extrabold text-white drop-shadow-lg leading-tight'
          initial={{ opacity: 0, y: 50 }}
          animate={introComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Solusi Disbursement yang Cepat, Aman & Terpercaya
        </motion.h1>

        <motion.p
          className='mt-4 text-base md:text-lg text-white/90 drop-shadow leading-relaxed'
          initial={{ opacity: 0, y: 30 }}
          animate={introComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          UONE PAY menyediakan layanan disbursement terpercaya untuk membantu
          perusahaan Anda melakukan pencairan dana dengan mudah, cepat, dan aman
          ke berbagai channel pembayaran.
        </motion.p>

        <motion.div
          className='mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start'
          initial={{ opacity: 0, y: 20 }}
          animate={introComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.button
            onClick={() => {
              const element = document.getElementById('pricing');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className='bg-brand text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-600 transition-colors duration-200 shadow-lg text-base'
            whileHover={{
              scale: 1.05,
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Pelajari Lebih Lanjut
          </motion.button>
        </motion.div>

        {/* Key Features Pills */}
        <motion.div
          className='mt-8 flex flex-wrap gap-3 justify-center md:justify-start'
          initial={{ opacity: 0 }}
          animate={introComplete ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {['✓ Pencairan Instan', '✓ Multi Channel', '✓ Bulk Processing'].map(
            (feature, index) => (
              <motion.div
                key={feature}
                className='bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm font-medium'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  introComplete
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(255,255,255,0.3)',
                }}
              >
                {feature}
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </>
  );
}
