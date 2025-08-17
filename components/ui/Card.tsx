import { cn } from '@/lib/utils';

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('rounded-xl border bg-white shadow-sm', className)}
      {...props}
    />
  );
}
