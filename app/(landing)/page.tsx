import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Pricing from '@/components/sections/pricing';
import Features from '@/components/sections/features';
import Contact from '@/components/sections/contact';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Features />
      <Pricing />
      <Contact />
    </main>
  );
}
