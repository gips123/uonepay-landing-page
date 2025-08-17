'use client';

import { motion } from 'framer-motion';
import { useLoading } from '@/hooks/useLoading';

export default function LoadingController() {
  const { showLoading, hideLoading, setLoadingType } = useLoading();

  const handleShowLoading = (type: 'default' | 'minimal' | 'progress') => {
    showLoading(type);

    // Auto hide after 3 seconds (for demo purposes)
    setTimeout(() => {
      hideLoading();
    }, 3000);
  };

  return (
    <motion.div
      className='fixed bottom-4 right-4 z-40'
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <div className='bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20'>
        <h3 className='text-sm font-semibold text-gray-800 mb-3'>
          Demo Loading
        </h3>
        <div className='space-y-2'>
          <button
            onClick={() => handleShowLoading('progress')}
            className='w-full bg-orange-500 hover:bg-orange-600 text-white text-xs py-2 px-3 rounded-lg transition-colors'
          >
            Progress Loading
          </button>
          <button
            onClick={() => handleShowLoading('default')}
            className='w-full bg-blue-500 hover:bg-blue-600 text-white text-xs py-2 px-3 rounded-lg transition-colors'
          >
            Default Loading
          </button>
          <button
            onClick={() => handleShowLoading('minimal')}
            className='w-full bg-gray-500 hover:bg-gray-600 text-white text-xs py-2 px-3 rounded-lg transition-colors'
          >
            Minimal Loading
          </button>
        </div>
      </div>
    </motion.div>
  );
}
