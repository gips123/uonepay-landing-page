'use client';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

interface ContactPopupProps {
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
  loading: boolean;
  title?: string;
  description?: string;
}

export function ContactPopup({
  onClose,
  onSubmit,
  loading,
  title = 'Hubungi Tim Kami',
  description = 'Kami akan merespons dalam 24 jam',
}: ContactPopupProps) {
  return (
    <div className='fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn'>
      <div className='absolute inset-0 transition-opacity' onClick={onClose} />
      <div className='relative bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform animate-slideUp border border-brand/20'>
        {/* Modern Header with Close Button */}
        <div className='flex items-center justify-between mb-8 pb-6 border-b border-brand/20'>
          <div className='flex items-center space-x-4'>
            <div className='w-12 h-12 bg-brand rounded-2xl flex items-center justify-center shadow-lg p-3'>
              <svg
                className='w-6 h-6 text-white'
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
              <h3 className='text-2xl font-bold text-ink'>{title}</h3>
              <p className='text-ink/70 text-sm'>{description}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className='w-10 h-10 bg-white hover:bg-mist rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-md'
          >
            <svg
              className='w-5 h-5 text-ink/60'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>

        <form onSubmit={onSubmit} className='space-y-4 p-8'>
          {/* Enhanced Form Fields with Better Spacing */}
          <div className='space-y-4'>
            <div className='space-y-2'>
              <label className='block text-ink font-semibold text-sm flex items-center'>
                <svg
                  className='w-4 h-4 mr-2 text-brand'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
                  />
                </svg>
                Nama Perusahaan *
              </label>
              <div className='relative group'>
                <Input
                  name='company'
                  type='text'
                  placeholder='PT. Example Indonesia'
                  required
                  className='h-14 bg-white border-2 border-mist rounded-2xl focus:bg-white focus:border-brand focus:ring-0 transition-all duration-300 group-hover:border-brand/50 pl-4 text-ink font-medium shadow-sm'
                />
                <div className='absolute inset-0 rounded-2xl bg-brand-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none'></div>
              </div>
            </div>
            <div className='space-y-2'>
              <label className='block text-ink font-semibold text-sm flex items-center'>
                <svg
                  className='w-4 h-4 mr-2 text-brand'
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
                Nama Lengkap *
              </label>
              <div className='relative group'>
                <Input
                  name='name'
                  type='text'
                  placeholder='John Doe'
                  required
                  className='h-14 bg-white border-2 border-mist rounded-2xl focus:bg-white focus:border-brand focus:ring-0 transition-all duration-300 group-hover:border-brand/50 pl-4 text-ink font-medium shadow-sm'
                />
                <div className='absolute inset-0 rounded-2xl bg-brand-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none'></div>
              </div>
            </div>
          </div>

          <div className='space-y-4'>
            <div className='space-y-2'>
              <label className='block text-ink font-semibold text-sm flex items-center'>
                <svg
                  className='w-4 h-4 mr-2 text-brand'
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
                Email Perusahaan *
              </label>
              <div className='relative group'>
                <Input
                  name='email'
                  type='email'
                  placeholder='john@company.com'
                  required
                  className='h-14 bg-white border-2 border-mist rounded-2xl focus:bg-white focus:border-brand focus:ring-0 transition-all duration-300 group-hover:border-brand/50 pl-4 text-ink font-medium shadow-sm'
                />
                <div className='absolute inset-0 rounded-2xl bg-brand-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none'></div>
              </div>
            </div>
            <div className='space-y-2'>
              <label className='block text-ink font-semibold text-sm flex items-center'>
                <svg
                  className='w-4 h-4 mr-2 text-brand'
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
                Nomor WhatsApp
              </label>
              <div className='relative group'>
                <Input
                  name='phone'
                  type='tel'
                  placeholder='+62 812-3456-7890'
                  className='h-14 bg-white border-2 border-mist rounded-2xl focus:bg-white focus:border-brand focus:ring-0 transition-all duration-300 group-hover:border-brand/50 pl-4 text-ink font-medium shadow-sm'
                />
                <div className='absolute inset-0 rounded-2xl bg-brand-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none'></div>
              </div>
            </div>
          </div>

          <div className='space-y-2'>
            <label className='block text-ink font-semibold text-sm flex items-center'>
              <svg
                className='w-4 h-4 mr-2 text-brand'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6'
                />
              </svg>
              Jabatan
            </label>
            <div className='relative group'>
              <Input
                name='position'
                type='text'
                placeholder='CEO, CFO, Finance Manager, dll'
                className='h-14 bg-white border-2 border-mist rounded-2xl focus:bg-white focus:border-brand focus:ring-0 transition-all duration-300 group-hover:border-brand/50 pl-4 text-ink font-medium'
              />
              <div className='absolute inset-0 rounded-2xl bg-brand-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none'></div>
            </div>
          </div>

          {/* Enhanced Message Field */}
          <div className='space-y-2'>
            <label className='block text-ink font-semibold text-sm flex items-center'>
              <svg
                className='w-4 h-4 mr-2 text-brand'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
                />
              </svg>
              Kebutuhan Khusus
            </label>
            <div className='relative group'>
              <textarea
                name='needs'
                className='w-full p-4 bg-white border-2 border-mist rounded-2xl focus:bg-white focus:border-brand focus:ring-0 transition-all duration-300 group-hover:border-brand/50 resize-none text-ink font-medium'
                rows={4}
                placeholder='Jelaskan kebutuhan disbursement khusus perusahaan Anda...'
              ></textarea>
              <div className='absolute inset-0 rounded-2xl bg-brand-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none'></div>
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <div className='flex gap-4 pt-6'>
            <button
              type='button'
              onClick={onClose}
              className='flex-1 bg-white hover:bg-mist text-ink font-semibold px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-105 border-2 border-mist hover:border-brand/30 shadow-sm'
            >
              Batal
            </button>
            <Button
              type='submit'
              disabled={loading}
              className='flex-1 h-16 bg-brand hover:bg-brand-dark text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-soft hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {loading ? (
                <div className='flex items-center justify-center'>
                  <svg
                    className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <circle
                      className='opacity-25'
                      cx='12'
                      cy='12'
                      r='10'
                      stroke='currentColor'
                      strokeWidth='4'
                    ></circle>
                    <path
                      className='opacity-75'
                      fill='currentColor'
                      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                    ></path>
                  </svg>
                  Mengirim...
                </div>
              ) : (
                <div className='flex items-center justify-center'>Kirim</div>
              )}
            </Button>
          </div>

          {/* Enhanced Footer */}
          <div className='text-center pt-4 border-t border-brand/20'>
            <p className='text-sm text-ink/70 flex items-center justify-center'>
              <svg
                className='w-4 h-4 mr-1 text-sun'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                />
              </svg>
              Data Anda aman dan terlindungi
            </p>
            <p className='text-xs text-ink/50 mt-2'>
              Dengan mengirim pesan, Anda menyetujui{' '}
              <a
                href='#'
                className='text-brand hover:text-brand-dark font-medium underline'
              >
                Syarat & Ketentuan
              </a>{' '}
              dan{' '}
              <a
                href='#'
                className='text-brand hover:text-brand-dark font-medium underline'
              >
                Kebijakan Privasi
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
