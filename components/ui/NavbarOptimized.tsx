'use client';

import Link from 'next/link';
import { useState, useEffect, useRef, useCallback } from 'react';
import { Logo } from './Logo';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');
  const navRef = useRef<HTMLElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  // Optimized scroll handler with throttling
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

    if (newActiveSection !== activeSection) {
      setActiveSection(newActiveSection);
    }
  }, [activeSection]);

  useEffect(() => {
    let ticking = false;

    const throttledScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!isScrolling) {
            handleScroll();
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScrollHandler, {
      passive: true,
    });
    handleScroll(); // Set initial active section

    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
    };
  }, [handleScroll, isScrolling]);

  const scrollToSection = (sectionId: string) => {
    setIsScrolling(true);
    setActiveSection(sectionId);

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);

    setOpen(false);
  };

  // Update indicator position
  useEffect(() => {
    if (!navRef.current) return;

    const activeButton = navRef.current.querySelector(
      `[data-section="${activeSection}"]`
    ) as HTMLButtonElement;
    if (activeButton) {
      const navRect = navRef.current.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();

      setIndicatorStyle({
        width: buttonRect.width,
        left: buttonRect.left - navRect.left,
      });
    }
  }, [activeSection]);

  const navItems = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'tentang', label: 'Tentang' },
    { id: 'keunggulan', label: 'Keunggulan' },
    { id: 'pricing', label: 'Layanan' },
    { id: 'kontak', label: 'Kontak' },
  ];

  return (
    <nav className='fixed top-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav
            ref={navRef}
            className='hidden md:flex relative bg-gray-50 rounded-full p-2 shadow-inner'
          >
            {/* Animated indicator */}
            <div
              className='absolute bg-white rounded-full shadow-md transition-all duration-300 ease-out h-10 top-1'
              style={{
                width: `${indicatorStyle.width}px`,
                left: `${indicatorStyle.left}px`,
              }}
            />

            {navItems.map(item => (
              <button
                key={item.id}
                data-section={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative z-10 px-6 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-orange-600'
                    : 'text-gray-600 hover:text-orange-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={() => setOpen(!open)}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-orange-600 hover:bg-gray-100 transition-colors duration-200'
            >
              <span className='sr-only'>Open main menu</span>
              <div className='w-6 h-6 relative'>
                <span
                  className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    open ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
                  }`}
                />
                <span
                  className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    open ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    open ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white border-t border-gray-100`}
      >
        <div className='px-4 pt-2 pb-3 space-y-1'>
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                activeSection === item.id
                  ? 'text-orange-600 bg-orange-50'
                  : 'text-gray-600 hover:text-orange-600 hover:bg-gray-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
