'use client';

import { motion } from 'framer-motion';
import { disbursementChannels } from '@/data/pricing';

interface PricingChannelsProps {
  activeChannel: number | null;
  setActiveChannel: (index: number | null) => void;
}

export function PricingChannels({
  activeChannel,
  setActiveChannel,
}: PricingChannelsProps) {
  return (
    <>
      {disbursementChannels.map((channel, index) => (
        <motion.div
          key={index}
          className={`group relative rounded-2xl sm:rounded-3xl border-2 transition-all duration-700 ease-in-out overflow-hidden shadow-lg hover:shadow-2xl ${
            activeChannel === index
              ? `bg-gradient-to-br ${channel.bgColor} ${channel.borderColor} shadow-2xl scale-[1.02]`
              : 'bg-white/80 backdrop-blur-sm border-white/30 hover:scale-[1.01]'
          }`}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Gradient overlay on hover */}
          <div className='absolute inset-0 bg-gradient-to-br from-orange-400/5 to-orange-300/5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

          {/* Modern Channel Header */}
          <button
            onClick={() =>
              setActiveChannel(activeChannel === index ? null : index)
            }
            className='w-full p-4 sm:p-6 text-left transition-all duration-500 hover:bg-gradient-to-r hover:from-white/10 hover:to-transparent focus:outline-none group-hover:scale-[1.01] relative z-10'
          >
            <div className='flex items-center justify-between bg'>
              <div className='flex items-center space-x-3 sm:space-x-4 '>
                {/* Enhanced Icon - smaller size */}
                <div className='relative'>
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-brand ${channel.color} flex items-center justify-center shadow-lg transform transition-all duration-300 ${
                      activeChannel === index
                        ? 'scale-110'
                        : 'group-hover:scale-105'
                    }`}
                  >
                    <div className='text-white scale-75 sm:scale-100'>
                      {channel.icon}
                    </div>
                  </div>
                  {/* Static floating particles */}
                  <div
                    className={`absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2 h-2 sm:w-3 sm:h-3 bg-orange-400 rounded-full transition-opacity duration-300 ${
                      activeChannel === index ? 'opacity-100' : 'opacity-60'
                    }`}
                  ></div>
                  <div
                    className={`absolute -bottom-0.5 -left-0.5 sm:-bottom-1 sm:-left-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-300 rounded-full transition-opacity duration-300 ${
                      activeChannel === index ? 'opacity-100' : 'opacity-40'
                    }`}
                  ></div>
                </div>

                <div>
                  <h3
                    className={`text-lg sm:text-xl font-bold transition-all duration-300 ${
                      activeChannel === index
                        ? 'bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent'
                        : 'text-gray-900 group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-orange-500 group-hover:bg-clip-text group-hover:text-transparent'
                    }`}
                  >
                    {channel.category}
                  </h3>
                </div>
              </div>

              <div className='flex items-center space-x-2 sm:space-x-4'>
                {/* Partner count badge */}
                <div
                  className={`px-2 sm:px-4 py-1 sm:py-2 rounded-lg sm:rounded-xl font-medium transition-all duration-300 text-xs sm:text-sm ${
                    activeChannel === index
                      ? 'bg-white/90 text-orange-600 shadow-lg'
                      : 'bg-orange-100 text-orange-600 group-hover:bg-orange-200 group-hover:scale-105'
                  }`}
                >
                  {channel.partners.length} Partner
                </div>

                {/* Animated arrow */}
                <div className='relative'>
                  <svg
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-all duration-500 ${
                      activeChannel === index
                        ? 'rotate-180 text-orange-500'
                        : 'group-hover:text-orange-400 group-hover:scale-110'
                    }`}
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M19 9l-7 7-7-7'
                    />
                  </svg>
                </div>
              </div>
            </div>
          </button>

          {/* Enhanced Expanded Content with smooth slide animation */}
          <div
            className={`overflow-hidden transition-all duration-700 ease-in-out ${
              activeChannel === index
                ? 'max-h-[800px] opacity-100'
                : 'max-h-0 opacity-0'
            }`}
          >
            <div
              className={`px-4 sm:px-6 pb-4 sm:pb-6 transform transition-all duration-500 ease-out ${
                activeChannel === index
                  ? 'translate-y-0 scale-100'
                  : '-translate-y-4 scale-95'
              }`}
            >
              <div className='border-t border-gray-200/50 pt-4 sm:pt-6'>
                <div className='flex items-center justify-between mb-3 sm:mb-4'>
                  <h4 className='text-base sm:text-lg font-bold text-gray-900'>
                    Partner Tersedia:
                  </h4>
                  <div className='flex items-center space-x-1 sm:space-x-2 text-xs text-gray-500'>
                    <svg
                      className='w-2.5 h-2.5 sm:w-3 sm:h-3'
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
                    <span>Instant Settlement</span>
                  </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3'>
                  {channel.partners.map((partner, partnerIndex) => (
                    <div
                      key={partnerIndex}
                      className={`group/partner bg-white/90 backdrop-blur-sm rounded-lg p-2 sm:p-3 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-white/50 transform ${
                        activeChannel === index
                          ? 'translate-y-0 opacity-100'
                          : 'translate-y-2 opacity-0'
                      }`}
                      style={{
                        transitionDelay:
                          activeChannel === index
                            ? `${partnerIndex * 50}ms`
                            : '0ms',
                      }}
                    >
                      <div className='flex items-center space-x-2 sm:space-x-3'>
                        <div className='w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center shadow-sm border border-gray-100'>
                          <img
                            src={partner.logo}
                            alt={`${partner.name} logo`}
                            className='w-6 h-6 sm:w-8 sm:h-8 object-contain'
                          />
                        </div>
                        <div className='flex-1'>
                          <span className='text-gray-700 font-medium text-xs sm:text-sm group-hover/partner:text-gray-900 transition-colors duration-200'>
                            {partner.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Additional features for active channel */}
                <div
                  className={`mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200/50 transform transition-all duration-600 ${
                    activeChannel === index
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: activeChannel === index ? '200ms' : '0ms',
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Decorative corner elements */}
          <div className='absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-orange-300 opacity-20 group-hover:opacity-60 transition-opacity duration-300'></div>
          <div className='absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-orange-300 opacity-20 group-hover:opacity-60 transition-opacity duration-300'></div>
        </motion.div>
      ))}
    </>
  );
}
