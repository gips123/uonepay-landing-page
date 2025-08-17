import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href='/' className='flex items-center gap-2'>
      <Image src='/images/Logo.png' alt='UONE PAY' width={120} height={32} />
    </Link>
  );
}
