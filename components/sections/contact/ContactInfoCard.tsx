'use client';

import { motion } from 'framer-motion';

export function ContactInfoCard() {
  const contactInfo = [
    {
      icon: (
        <svg
          className='w-4 h-4 sm:w-5 sm:h-5 text-brand'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
          />
        </svg>
      ),
      title: '+62812-9397-1987',
      subtitle: '24/7 Support',
    },
    {
      icon: (
        <svg
          className='w-4 h-4 sm:w-5 sm:h-5 text-brand'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
          />
        </svg>
      ),
      title: 'info@uonepay.id',
      subtitle: 'Respon dalam 1 jam',
    },
    {
      icon: (
        <svg
          className='w-4 h-4 sm:w-5 sm:h-5 text-brand'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
          />
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
          />
        </svg>
      ),
      title: 'Our Headquarters',
      subtitle:
        'Ruko Harlin Nusukan Blok B12 Kota Surakarta, Jawa Tengah 57135',
    },
  ];

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
              d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
            />
          </svg>
        </div>
        <div>
          <h3 className='text-lg sm:text-xl font-bold text-ink'>
            Informasi Kontak
          </h3>
          <p className='text-gray-500 text-sm'>24/7 Support untuk Anda</p>
        </div>
      </div>

      {/* Contact Details */}
      <div className='space-y-3 sm:space-y-4 flex-1'>
        {contactInfo.map((info, index) => (
          <motion.div
            key={index}
            className='flex items-start p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl hover:bg-orange-50 transition-colors duration-200'
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className='w-8 h-8 sm:w-10 sm:h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0'>
              {info.icon}
            </div>
            <div className='flex-1 min-w-0'>
              <p className='font-semibold text-ink text-sm sm:text-base'>
                {info.title}
              </p>
              <p className='text-gray-500 text-xs sm:text-sm'>
                {info.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className='mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200/50'>
        <p className='text-center text-gray-500 text-xs sm:text-sm'>
          Tim kami siap membantu Anda 24/7
        </p>
      </div>
    </motion.div>
  );
}
