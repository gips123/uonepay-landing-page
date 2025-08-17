'use client';

import { motion } from 'framer-motion';
import { achievements } from '@/data/about';

export function AboutStats() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8'>
      {achievements.map((stat, index) => (
        <motion.div
          key={index}
          className='group relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, y: -10 }}
        >
          {/* Background gradient on hover */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl sm:rounded-3xl`}
          />

          {/* Icon */}
          <div className='w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-brand flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 shadow-lg text-white relative z-10 group-hover:scale-110 transition-transform duration-300'>
            <div className='scale-75 sm:scale-90 lg:scale-100'>{stat.icon}</div>
          </div>

          {/* Number */}
          <div className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2 relative z-10 group-hover:scale-105 transition-transform duration-200'>
            {stat.number}
          </div>

          {/* Label */}
          <div className='text-sm sm:text-base lg:text-lg font-semibold text-gray-700 mb-2 sm:mb-3 relative z-10'>
            {stat.label}
          </div>

          {/* Description */}
          <div className='text-xs sm:text-sm text-gray-600 relative z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300 flex-1'>
            {stat.description}
          </div>

          {/* Decorative corner */}
          <div className='absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-orange-300 opacity-20 group-hover:opacity-60 transition-opacity duration-300'></div>
        </motion.div>
      ))}
    </div>
  );
}
