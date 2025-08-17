import { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Radio({ label, className, ...props }: RadioProps) {
  return (
    <label className={cn('inline-flex items-center gap-2', className)}>
      <input type='radio' className='text-burnt' {...props} />
      <span>{label}</span>
    </label>
  );
}
