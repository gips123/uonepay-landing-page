import Link, { LinkProps } from 'next/link';
import { AnchorHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

const base =
  'inline-flex items-center justify-center rounded-lg font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

const variantStyles: Record<Variant, string> = {
  primary:
    'text-white bg-brand-gradient hover:opacity-90 focus-visible:ring-burnt',
  secondary:
    'text-ink bg-cream hover:bg-sun/20 border border-cream focus-visible:ring-brand',
  ghost: 'text-ink hover:bg-mist',
};

const sizeStyles: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2',
  lg: 'px-6 py-3 text-lg',
};

type Props = LinkProps<string> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: Variant;
    size?: Size;
    fullWidth?: boolean;
    className?: string;
  };

export default function LinkButton({
  href,
  children,
  className,
  variant = 'primary',
  size = 'md',
  fullWidth,
  ...rest
}: Props) {
  return (
    <Link
      href={href}
      className={cn(
        base,
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && 'w-full',
        className
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}
