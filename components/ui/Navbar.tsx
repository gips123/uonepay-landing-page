'use client';

import Link from 'next/link';
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Logo } from './Logo';
import { navItems, NavItem } from '../../data/navigation';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');
  const navRef = useRef<HTMLElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  // Optimized scroll handler for real-time menu updates
  const handleScroll = useCallback(() => {
    const sections = ['beranda', 'tentang', 'keunggulan', 'pricing', 'kontak'];
    const scrollPosition = window.scrollY + window.innerHeight * 0.3;
    let newActiveSection = activeSection;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop } = element;
        if (scrollPosition >= offsetTop - 100) {
          newActiveSection = section;
          break;
        }
      }
    }

    // Langsung update activeSection tanpa kondisi isScrolling
    if (newActiveSection !== activeSection) {
      setActiveSection(newActiveSection);
    }
  }, [activeSection]);

  useEffect(() => {
    const throttledScrollHandler = () => {
      // Langsung panggil handleScroll tanpa throttling untuk responsivitas real-time
      handleScroll();
    };

    window.addEventListener('scroll', throttledScrollHandler, {
      passive: true,
    });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
    };
  }, [handleScroll]);

  const scrollToSection = (sectionId: string) => {
    // Langsung update activeSection untuk feedback visual yang instant
    setActiveSection(sectionId);

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    setOpen(false);
  };

  // Update indicator position for pill design
  useEffect(() => {
    if (!navRef.current) return;

    const activeButton = navRef.current.querySelector(
      `[data-section="${activeSection}"]`
    ) as HTMLButtonElement;
    if (activeButton) {
      const pillContainer = navRef.current.querySelector('div') as HTMLElement;
      const buttonRect = activeButton.getBoundingClientRect();
      const containerRect = pillContainer?.getBoundingClientRect();

      if (containerRect) {
        setIndicatorStyle({
          width: buttonRect.width,
          left: buttonRect.left - containerRect.left,
        });
      }
    }
  }, [activeSection]);

  return (
    <div className='fixed top-2 sm:top-4 left-0 right-0 z-50 flex justify-center px-2 sm:px-4'>
      <motion.nav
        className='w-full max-w-6xl'
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Main Navbar Container - Pill Shaped */}
        <div className='bg-white/70 backdrop-blur-lg rounded-full shadow-2xl border border-white/20 px-3 sm:px-6 py-2'>
          <div className='relative flex items-center'>
            {/* Logo Section - Responsive positioning */}
            <motion.div
              className='flex items-center space-x-3'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Logo />
            </motion.div>

            {/* Desktop Navigation - Centered */}
            <div className='hidden lg:flex flex-1 justify-center'>
              <nav ref={navRef} className='relative'>
                <div className='flex items-center space-x-1 rounded-full p-1'>
                  {/* Animated Pill Indicator */}
                  <motion.div
                    className='absolute bg-brand rounded-full h-10'
                    style={{
                      width: `${indicatorStyle.width}px`,
                      left: `${indicatorStyle.left}px`,
                    }}
                    initial={false}
                    animate={{
                      width: indicatorStyle.width,
                      left: indicatorStyle.left,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 35,
                      mass: 0.8,
                    }}
                  />

                  {/* Navigation Items */}
                  <div className='relative z-10 flex items-center space-x-1'>
                    {navItems.map(item => (
                      <motion.button
                        key={item.id}
                        data-section={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`relative px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                          activeSection === item.id
                            ? 'text-white'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.label}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </nav>
            </div>

            {/* Right Section - Auth Buttons - Responsive spacing */}
            <div className='flex items-center space-x-2 sm:space-x-4 ml-auto'>
              {/* Sign Up Button - Responsive sizing */}
              <motion.button
                onClick={() => scrollToSection('kontak')}
                className='bg-brand hover:bg-brand-dark text-white font-semibold px-3 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-xs sm:text-sm'
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className='hidden sm:inline'>Mulai Sekarang</span>
                <span className='sm:hidden'>Mulai</span>
              </motion.button>

              {/* Mobile menu button - Fixed positioning */}
              <motion.div
                className='lg:hidden'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => setOpen(!open)}
                  className='inline-flex items-center justify-center w-10 h-10 rounded-full text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200 border border-gray-200 hover:border-orange-200 shadow-sm'
                >
                  <span className='sr-only'>Open main menu</span>
                  <div className='w-5 h-5 relative flex items-center justify-center'>
                    <motion.span
                      className='block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out'
                      animate={{
                        rotate: open ? 45 : 0,
                        y: open ? 0 : -4,
                      }}
                    />
                    <motion.span
                      className='block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out'
                      animate={{
                        opacity: open ? 0 : 1,
                      }}
                    />
                    <motion.span
                      className='block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out'
                      animate={{
                        rotate: open ? -45 : 0,
                        y: open ? 0 : 4,
                      }}
                    />
                  </div>
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile menu - Improved positioning and sizing */}
        <motion.div
          className='lg:hidden absolute top-16 sm:top-20 left-2 right-2 sm:left-4 sm:right-4 mx-auto max-w-sm'
          initial={false}
          animate={{
            opacity: open ? 1 : 0,
            y: open ? 0 : -20,
            scale: open ? 1 : 0.95,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          style={{ pointerEvents: open ? 'auto' : 'none' }}
        >
          <div className='bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-4'>
            <div className='space-y-2'>
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-orange-600 bg-orange-50 border border-orange-200'
                      : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50 border border-transparent hover:border-orange-200'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: open ? 1 : 0,
                    x: open ? 0 : -20,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: open ? index * 0.1 : 0,
                  }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className='ml-2 inline-block w-2 h-2 bg-orange-500 rounded-full'
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}

              {/* Mobile CTA */}
              <motion.button
                onClick={() => {
                  scrollToSection('kontak');
                  setOpen(false);
                }}
                className='w-full mt-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Mulai Sekarang
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.nav>
    </div>
  );
}
