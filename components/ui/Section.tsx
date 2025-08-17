import { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

export function Section({
  id,
  className,
  children,
}: PropsWithChildren<{ id?: string; className?: string }>) {
  return (
    <section id={id} className={cn('py-16', className)}>
      {children}
    </section>
  );
}
