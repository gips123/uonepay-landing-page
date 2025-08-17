import { PropsWithChildren, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Table({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <table className={cn('min-w-full text-left text-gray-800', className)}>
      {children}
    </table>
  );
}

export function THead({
  children,
  className,
  ...props
}: PropsWithChildren<
  { className?: string } & HTMLAttributes<HTMLTableSectionElement>
>) {
  return (
    <thead className={cn('text-white', className)} {...props}>
      {children}
    </thead>
  );
}

export function TR({
  children,
  className,
  ...props
}: PropsWithChildren<
  { className?: string } & HTMLAttributes<HTMLTableRowElement>
>) {
  return (
    <tr className={cn('', className)} {...props}>
      {children}
    </tr>
  );
}

export function TH({
  children,
  className,
  ...props
}: PropsWithChildren<
  { className?: string } & HTMLAttributes<HTMLTableCellElement>
>) {
  return (
    <th className={cn('py-4 px-6 font-semibold', className)} {...props}>
      {children}
    </th>
  );
}

export function TD({
  children,
  className,
  ...props
}: PropsWithChildren<
  { className?: string } & HTMLAttributes<HTMLTableCellElement>
>) {
  return (
    <td className={cn('py-4 px-6', className)} {...props}>
      {children}
    </td>
  );
}
