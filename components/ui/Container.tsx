import { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

export function Container({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn('max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 ' , className)}>
      {children}
    </div>
  );
}
