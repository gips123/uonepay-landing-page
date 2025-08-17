'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Floating particle component
const FloatingParticle = ({ delay = 0, duration = 4 }) => (
  <motion.div
    className='absolute w-2 h-2 bg-white/20 rounded-full'
    initial={{
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + 50,
      opacity: 0,
    }}
    animate={{
      y: -50,
      opacity: [0, 1, 0],
      scale: [0.5, 1, 0.5],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'linear',
    }}
  />
);

export default function IntroTransition() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Hide intro after animation completes
    const hideTimer = setTimeout(() => {
      setShowIntro(false);
    }, 3000); // Reduced to 3 seconds since no loading

    return () => {
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence mode='wait'>
      {showIntro && (
        <motion.div
          className='fixed inset-0 z-[9999] overflow-hidden'
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.1,
          }}
          transition={{
            duration: 0.8,
            ease: 'easeInOut',
          }}
        >
          {/* Dynamic Gradient Background */}
          <motion.div
            className='absolute inset-0'
            initial={{
              background:
                'linear-gradient(135deg, #F18F01 0%, #E4572E 50%, #F2C14E 100%)',
            }}
            animate={{
              background: [
                'linear-gradient(135deg, #F18F01 0%, #E4572E 50%, #F2C14E 100%)',
                'linear-gradient(225deg, #E4572E 0%, #F2C14E 50%, #F18F01 100%)',
                'linear-gradient(315deg, #F2C14E 0%, #F18F01 50%, #E4572E 100%)',
                'linear-gradient(45deg, #F18F01 0%, #E4572E 50%, #F2C14E 100%)',
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Floating Particles */}
          <div className='absolute inset-0'>
            {[...Array(20)].map((_, i) => (
              <FloatingParticle
                key={i}
                delay={i * 0.2}
                duration={3 + Math.random() * 2}
              />
            ))}
          </div>

          {/* Radial Glow Effect */}
          <motion.div
            className='absolute inset-0 flex items-center justify-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className='w-[600px] h-[600px] bg-white/20 rounded-full blur-3xl'
            />
          </motion.div>

          {/* Main Content Container */}
          <div className='relative h-full flex flex-col items-center justify-center'>
            {/* Logo Section */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.3,
                rotateY: 180,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateY: 0,
              }}
              transition={{
                duration: 1.2,
                ease: 'easeOut',
                type: 'spring',
                bounce: 0.4,
              }}
              className='text-center mb-8'
            >
              {/* Logo Glow Container */}
              <motion.div className='relative'>
                {/* Multiple Glow Layers */}
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className='absolute inset-0 bg-white/40 blur-2xl rounded-3xl transform scale-110'
                />

                <motion.div
                  animate={{
                    scale: [1.1, 1.4, 1.1],
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5,
                  }}
                  className='absolute inset-0 bg-sun/60 blur-3xl rounded-full transform scale-125'
                />

                {/* Logo Container */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    rotateZ: [0, 1, -1, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className='relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20'
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <Image
                      src='/images/u.png'
                      alt='UONE PAY'
                      width={180}
                      height={72}
                      className='mx-auto filter drop-shadow-lg'
                      priority
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Corner Decorations */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className='absolute top-8 left-8 w-16 h-16 border-l-4 border-t-4 border-white/40 rounded-tl-2xl'
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className='absolute top-8 right-8 w-16 h-16 border-r-4 border-t-4 border-white/40 rounded-tr-2xl'
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className='absolute bottom-8 left-8 w-16 h-16 border-l-4 border-b-4 border-white/40 rounded-bl-2xl'
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className='absolute bottom-8 right-8 w-16 h-16 border-r-4 border-b-4 border-white/40 rounded-br-2xl'
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
