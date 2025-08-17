'use client';

import { useDarkMode } from '@/hooks/useDarkMode';

export default function ThemeToggle() {
  const { enabled, setEnabled } = useDarkMode();
  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className='px-3 py-1 rounded border'
    >
      {enabled ? 'Dark' : 'Light'}
    </button>
  );
}
