'use client';

import { useIntro } from '@/hooks/useIntro';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const { introComplete } = useIntro();

  return <>{introComplete && <div className='min-h-screen w-full'>{children}</div>}</>;
}
