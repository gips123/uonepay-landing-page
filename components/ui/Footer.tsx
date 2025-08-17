import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-gray-300 pt-8 sm:pt-12 pb-4 sm:pb-6'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'>
        <div>
          <Image
            src='/images/Logo.png'
            alt='UONE PAY Logo'
            width={120}
            height={32}
            className='mb-3 sm:mb-4 w-[100px] sm:w-[120px] h-auto'
          />
          <div className='space-y-2 text-sm sm:text-base'>
            <p className='mb-1 sm:mb-2'>
              📧 Email:{' '}
              <a
                href='mailto:info@uonepay.id'
                className='hover:text-white transition-colors'
              >
                info@uonepay.id
              </a>
            </p>
            <p className='mb-1 sm:mb-2'>
              📱 Phone:{' '}
              <a
                href='tel:+6281293971987'
                className='hover:text-white transition-colors'
              >
                +62812-9397-1987
              </a>
            </p>
            <p className='mb-1 sm:mb-2'>
              🏢 Alamat Operasional: <br />
              Ruko Harlin Nusukan Blok B12, Kota Surakarta, Jawa Tengah 57135
            </p>
          </div>
        </div>
        <div className='md:text-right'>
          <h4 className='text-base sm:text-lg font-semibold mb-3 sm:mb-4'>
            Menu
          </h4>
          <ul className='space-y-1 sm:space-y-2 text-sm sm:text-base'>
            <li>
              <a href='/' className='hover:text-white transition-colors'>
                Beranda
              </a>
            </li>
            <li>
              <a href='/about' className='hover:text-white transition-colors'>
                Tentang Kami
              </a>
            </li>
            <li>
              <a href='/pricing' className='hover:text-white transition-colors'>
                Produk
              </a>
            </li>
            <li>
              <a href='/contact' className='hover:text-white transition-colors'>
                Kontak
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='border-t border-gray-700 mt-6 sm:mt-8 pt-3 sm:pt-4 text-center text-xs sm:text-sm text-gray-500'>
        © {new Date().getFullYear()} UONE PAY. All rights reserved.
      </div>
    </footer>
  );
}
