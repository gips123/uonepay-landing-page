'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface MenuItemProps {
  icon: React.ReactNode;
  title: string;
  isActive?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  title,
  isActive = false,
}) => (
  <div
    className={`flex items-center space-x-2 sm:space-x-3 p-1.5 sm:p-2 rounded-lg transition-all duration-200 cursor-pointer relative ${
      isActive
        ? 'bg-creamy text-brand shadow-sm'
        : 'text-gray-700 hover:bg-gray-50 hover:text-orange-500'
    }`}
  >
    {/* Simple active indicator */}
    {isActive && (
      <div className='absolute left-0 top-0 bottom-0 w-1 bg-brand rounded-r-full transition-all duration-200' />
    )}

    {/* Simplified Icon */}
    <div
      className={`w-3 h-3 sm:w-4 sm:h-4 transition-colors duration-200 ${isActive ? 'text-brand' : 'text-gray-600'}`}
    >
      {icon}
    </div>

    {/* Title */}
    <span
      className={`font-medium text-xs sm:text-sm transition-colors duration-200 ${isActive ? 'text-brand font-semibold' : ''}`}
    >
      {title}
    </span>
  </div>
);

export const UOnePayMobile: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    {
      title: 'Users Fund',
      icon: (
        <svg fill='currentColor' viewBox='0 0 24 24' className='w-4 h-4'>
          <path d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l7-3 7 3z' />
        </svg>
      ),
    },
    {
      title: 'Transfer',
      icon: (
        <svg fill='currentColor' viewBox='0 0 24 24' className='w-4 h-4'>
          <path d='M2.01 21L23 12 2.01 3 2 10l15 2-15 2z' />
        </svg>
      ),
    },
    {
      title: 'Refund',
      icon: (
        <svg fill='currentColor' viewBox='0 0 24 24' className='w-4 h-4'>
          <path d='M7.11 8.53L5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z' />
        </svg>
      ),
    },
    {
      title: 'Check User Fund',
      icon: (
        <svg fill='currentColor' viewBox='0 0 24 24' className='w-4 h-4'>
          <path d='M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z' />
        </svg>
      ),
    },
    {
      title: 'Transaction History',
      icon: (
        <svg fill='currentColor' viewBox='0 0 24 24' className='w-4 h-4'>
          <path d='M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z' />
        </svg>
      ),
    },
  ];

  // Auto rotate every 2 seconds for faster animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % menuItems.length);
    }, 2000); // Reduced from 5000ms to 2000ms (2 seconds)

    return () => clearInterval(interval);
  }, [menuItems.length]);

  return (
    <motion.div
      className='bg-white/95 backdrop-blur-sm rounded-2xl p-3 sm:p-4 shadow-xl w-[220px] sm:w-[260px] border border-white/20 relative overflow-hidden'
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{
        scale: 1.02,
        boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* Background animated gradient */}
      <motion.div
        className='absolute inset-0 bg-gradient-to-br from-orange-50/50 to-yellow-50/30 rounded-2xl'
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Header */}
      <motion.div
        className='mb-3 sm:mb-4 relative z-10'
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.div
          className='flex items-center gap-2'
          animate={{
            filter:
              activeIndex % 2 === 0
                ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                : 'none',
          }}
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Image
              src='/images/Logo.png'
              alt='UONE PAY Logo'
              width={100}
              height={24}
              className='object-contain w-[80px] sm:w-[100px] h-auto'
              priority
            />
          </motion.div>
        </motion.div>
        <motion.p
          className='text-gray-500 text-xs font-semibold tracking-wider mt-3 sm:mt-5'
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          MENU
        </motion.p>
      </motion.div>

      {/* Menu Items */}
      <motion.div
        className='space-y-1 relative z-10'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <AnimatePresence mode='wait'>
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.3,
              }}
            >
              <MenuItem
                icon={item.icon}
                title={item.title}
                isActive={index === activeIndex}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Active indicator dots */}
      <motion.div
        className='flex justify-center mt-2 sm:mt-3 space-x-1'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        {menuItems.map((_, index) => (
          <motion.div
            key={index}
            className={`w-1.5 h-1.5 rounded-full ${
              index === activeIndex ? 'bg-brand' : 'bg-gray-300'
            }`}
            animate={{
              scale: index === activeIndex ? [1, 1.3, 1] : 1,
              backgroundColor: index === activeIndex ? '#F18F01' : '#D1D5DB',
            }}
            transition={{ duration: 0.2 }} // Faster transition for dots
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default UOnePayMobile;
