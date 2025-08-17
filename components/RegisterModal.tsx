'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Radio } from './ui/Radio';

export default function RegisterModal() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    country: '',
    account_type: 'Individual',
    phone: '',
    password: '',
    confirm_password: '',
  });

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    const btn = document.getElementById('register-trigger');
    if (!btn) return;
    const onClick = () => setOpen(true);
    btn.addEventListener('click', onClick);
    return () => btn.removeEventListener('click', onClick);
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    if (form.password !== form.confirm_password) return;
    setLoading(true);
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          country: form.country,
          account_type: form.account_type,
          phone: form.phone,
        }),
      });
      if (res.ok) setOpen(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`fixed inset-0 ${open ? '' : 'hidden'} z-50`}>
      <div
        ref={overlayRef}
        onClick={() => setOpen(false)}
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
      />
      <div className='absolute inset-0 flex items-center justify-center p-4'>
        <div
          className={`bg-white rounded-xl shadow-lg w-full max-w-lg transform transition-all duration-300 ${open ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        >
          <div className='flex justify-between items-center border-b px-6 py-4'>
            <h2 className='text-xl font-bold text-gray-900'>Registrasi</h2>
            <button
              onClick={() => setOpen(false)}
              className='text-2xl text-gray-500 hover:text-gray-800'
            >
              &times;
            </button>
          </div>
          <form className='p-6 space-y-4' onSubmit={onSubmit}>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Nama Lengkap
              </label>
              <Input
                type='text'
                className='mt-1'
                placeholder='Nama Lengkap'
                value={form.name}
                onChange={e => setForm(v => ({ ...v, name: e.target.value }))}
                required
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Email
              </label>
              <Input
                type='email'
                className='mt-1'
                placeholder='email@example.com'
                value={form.email}
                onChange={e => setForm(v => ({ ...v, email: e.target.value }))}
                required
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Negara
              </label>
              <Input
                type='text'
                className='mt-1'
                placeholder='Negara'
                value={form.country}
                onChange={e =>
                  setForm(v => ({ ...v, country: e.target.value }))
                }
              />
            </div>
            <div>
              <span className='block text-sm font-medium text-gray-700 mb-1'>
                Tipe Akun
              </span>
              <div className='flex space-x-4'>
                <Radio
                  name='account_type'
                  value='Individual'
                  label='Individual'
                  checked={form.account_type === 'Individual'}
                  onChange={() =>
                    setForm(v => ({ ...v, account_type: 'Individual' }))
                  }
                />
                <Radio
                  name='account_type'
                  value='Company'
                  label='Company'
                  checked={form.account_type === 'Company'}
                  onChange={() =>
                    setForm(v => ({ ...v, account_type: 'Company' }))
                  }
                />
              </div>
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Phone
              </label>
              <Input
                type='tel'
                className='mt-1'
                placeholder='+62'
                value={form.phone}
                onChange={e => setForm(v => ({ ...v, phone: e.target.value }))}
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Password
              </label>
              <Input
                type='password'
                className='mt-1'
                placeholder='********'
                value={form.password}
                onChange={e =>
                  setForm(v => ({ ...v, password: e.target.value }))
                }
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Confirm Password
              </label>
              <Input
                type='password'
                className='mt-1'
                placeholder='********'
                value={form.confirm_password}
                onChange={e =>
                  setForm(v => ({ ...v, confirm_password: e.target.value }))
                }
              />
            </div>
            <Button fullWidth disabled={loading}>
              {loading ? 'Memproses...' : 'Daftar'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
