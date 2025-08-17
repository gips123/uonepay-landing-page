'use client';

import { motion } from 'framer-motion';
import { features, Feature } from '@/data/features';

interface FeaturesGridProps {
  isInView: boolean;
}

export function FeaturesGrid({ isInView }: FeaturesGridProps) {
  return (
    <motion.div
      className='grid grid-cols-1 sm:grid-cols-2 gap-4'
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      {features.map((feature: Feature, index: number) => (
        <motion.div
          key={index}
          className='group relative bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300 cursor-pointer'
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 20, scale: 0.95 }
          }
          transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
          whileHover={{
            scale: 1.03,
            y: -3,
            transition: { duration: 0.2 },
          }}
        >
          {/* Compact Content */}
          <div className='flex items-start space-x-3'>
            {/* Smaller Icon */}
            <motion.div
              className={`w-10 h-10 ${feature.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className='w-5 h-5 text-black'
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
              >
                {feature.icon}
              </motion.div>
            </motion.div>

            {/* Compact Text */}
            <div className='flex-1 min-w-0'>
              <motion.h3
                className='text-base font-bold text-gray-900 mb-1 group-hover:text-brand transition-colors duration-300'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              >
                {feature.title}
              </motion.h3>
              <motion.p
                className='text-gray-600 text-xs leading-relaxed'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
              >
                {feature.description}
              </motion.p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
