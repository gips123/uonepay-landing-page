import { forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        'w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand',
        className
      )}
      {...props}
    />
  )
);

Input.displayName = 'Input';
