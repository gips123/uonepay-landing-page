'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';

interface IntroContextType {
  showIntro: boolean;
  introComplete: boolean;
}

const IntroContext = createContext<IntroContextType | undefined>(undefined);

export function IntroProvider({ children }: { children: ReactNode }) {
  const [showIntro, setShowIntro] = useState(true);
  const [introComplete, setIntroComplete] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Complete intro after animation
    const timer = setTimeout(() => {
      setShowIntro(false);
      // Even faster transition
      setTimeout(() => {
        setIntroComplete(true);
      }, 50);
    }, 2500); // Match intro component timing (2.5 seconds)

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <IntroContext.Provider value={{ showIntro, introComplete }}>
      {children}
    </IntroContext.Provider>
  );
}

export function useIntro() {
  const context = useContext(IntroContext);
  if (context === undefined) {
    throw new Error('useIntro must be used within an IntroProvider');
  }
  return context;
}
