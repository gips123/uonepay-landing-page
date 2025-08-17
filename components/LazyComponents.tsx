import dynamic from 'next/dynamic';

// Hero Section
export const HeroLazy = dynamic(() => import('@/components/sections/hero'), {
  ssr: true,
  loading: () => (
    <div className='pt-24 min-h-screen relative flex items-center w-full bg-gradient-to-br from-orange-400 to-orange-600'>
      <div className='animate-pulse'>
        <div className='h-96 bg-white/20 rounded-lg'></div>
      </div>
    </div>
  ),
});

// About Section
export const AboutLazy = dynamic(() => import('@/components/sections/about'), {
  ssr: true,
  loading: () => (
    <div className='py-12 sm:py-16 md:py-24 lg:py-32 xl:py-[200px] relative overflow-hidden bg-sun'>
      <div className='animate-pulse'>
        <div className='h-96 bg-white/20 rounded-lg'></div>
      </div>
    </div>
  ),
});

// Contact Section
export const ContactLazy = dynamic(
  () => import('@/components/sections/contact'),
  {
    ssr: true,
    loading: () => (
      <div className='py-16 sm:py-24 md:py-32 lg:py-[150px] bg-sun relative overflow-hidden'>
        <div className='animate-pulse'>
          <div className='h-96 bg-white/20 rounded-lg'></div>
        </div>
      </div>
    ),
  }
);

// Features Section
export const FeaturesLazy = dynamic(
  () => import('@/components/sections/features'),
  {
    ssr: true,
    loading: () => (
      <div className='py-12 md:py-16 lg:py-20 relative bg-sun overflow-hidden'>
        <div className='animate-pulse'>
          <div className='h-96 bg-white/20 rounded-lg'></div>
        </div>
      </div>
    ),
  }
);

// Pricing Section
export const PricingLazy = dynamic(
  () => import('@/components/sections/pricing'),
  {
    ssr: true,
    loading: () => (
      <div className='py-16 sm:py-24 md:py-32 lg:py-[150px] bg-creamy relative overflow-hidden'>
        <div className='animate-pulse'>
          <div className='h-96 bg-white/20 rounded-lg'></div>
        </div>
      </div>
    ),
  }
);
