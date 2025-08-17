'use client';

import React from 'react';

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
    className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 cursor-pointer ${
      isActive
        ? 'bg-orange-100 text-orange-600'
        : 'text-gray-700 hover:bg-gray-50 hover:text-orange-500'
    }`}
  >
    <div
      className={`w-6 h-6 ${isActive ? 'text-orange-600' : 'text-gray-600'}`}
    >
      {icon}
    </div>
    <span className='font-medium text-lg'>{title}</span>
  </div>
);

export const MobileApp: React.FC = () => {
  const menuItems = [
    {
      title: 'Users Fund',
      isActive: true,
      icon: (
        <svg
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
          />
        </svg>
      ),
    },
    {
      title: 'Transfer',
      icon: (
        <svg
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
          />
        </svg>
      ),
    },
    {
      title: 'Refund',
      icon: (
        <svg
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
          />
        </svg>
      ),
    },
    {
      title: 'Check User Fund',
      icon: (
        <svg
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
          />
        </svg>
      ),
    },
    {
      title: 'Transaction History',
      icon: (
        <svg
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      ),
    },
  ];

  return (
    <div className='relative bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-500 p-8 rounded-3xl overflow-hidden min-h-[600px]'>
      {/* Background decorative elements */}
      <div className='absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32'></div>
      <div className='absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24'></div>

      <div className='relative z-10 flex items-start space-x-8'>
        {/* Mobile App Interface */}
        <div className='bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-2xl min-w-[320px] border border-white/20'>
          {/* Header */}
          <div className='mb-8'>
            <h1 className='text-2xl font-bold text-gray-800 mb-2'>
              <span className='text-orange-600'>U</span>
              <span className='text-red-500'>ONE PAY</span>
            </h1>
            <p className='text-gray-600 text-sm font-medium'>MENU</p>
          </div>

          {/* Menu Items */}
          <div className='space-y-2'>
            {menuItems.map((item, index) => (
              <MenuItem
                key={index}
                icon={item.icon}
                title={item.title}
                isActive={item.isActive}
              />
            ))}
          </div>
        </div>

        {/* User Profile Section */}
        <div className='flex-1 flex items-center justify-center'>
          <div className='text-center'>
            {/* Profile Image Placeholder */}
            <div className='w-48 h-48 bg-white/20 backdrop-blur-sm rounded-full mb-6 flex items-center justify-center border-4 border-white/30 shadow-xl'>
              <div className='w-40 h-40 bg-gradient-to-br from-white/40 to-white/20 rounded-full flex items-center justify-center'>
                <svg
                  className='w-20 h-20 text-white/80'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                  />
                </svg>
              </div>
            </div>

            <div className='text-white'>
              <h3 className='text-2xl font-bold mb-2'>Welcome to UOne Pay</h3>
              <p className='text-white/90 text-lg'>
                Your Digital Payment Solution
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative elements */}
      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2'>
        <div className='flex space-x-2'>
          <div className='w-2 h-2 bg-white/40 rounded-full'></div>
          <div className='w-2 h-2 bg-white/60 rounded-full'></div>
          <div className='w-2 h-2 bg-white/40 rounded-full'></div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
