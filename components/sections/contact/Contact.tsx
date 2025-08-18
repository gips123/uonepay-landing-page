'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ContactRegisterCard } from './ContactRegisterCard';
import { ContactInfoCard } from './ContactInfoCard';
import { ContactConsultationCard } from './ContactConsultationCard';
import { ContactPopup } from './ContactPopup';

export default function Contact() {
  const [showConsultationPopup, setShowConsultationPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <section
      id='kontak'
      className='py-16 sm:py-24 md:py-32 lg:py-[150px] bg-yell relative overflow-hidden'
    >
      {/* Background decorative elements */}
      <div className='absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-300/30 to-transparent rounded-full -translate-y-48 -translate-x-48'></div>
      <div className='absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-orange-300/20 to-transparent rounded-full translate-y-40 translate-x-40'></div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 relative z-10'>
        {/* Header Section */}
        <motion.div
          className='text-center mb-12 sm:mb-16 lg:mb-20'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className='inline-flex items-center px-3 sm:px-4 lg:px-6 py-2 lg:py-3 bg-white/90 backdrop-blur-sm text-orange-600 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 lg:mb-10 shadow-lg border border-white/20'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <svg
              className='w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mr-1 sm:mr-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
              />
            </svg>
            Hubungi Kami
          </motion.div>
          <motion.h2
            className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 leading-tight'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Mari Berdiskusi <br />
            <span className='bg-gradient-to-r from-brand to-orange bg-clip-text text-transparent'>
              Tentang Proyek Anda
            </span>
          </motion.h2>
          <motion.p
            className='text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Tim kami siap membantu Anda mengimplementasikan solusi disbursement
            yang tepat untuk bisnis Anda. Hubungi kami untuk konsultasi gratis
            dan demo produk.
          </motion.p>
        </motion.div>

        {/* Three Cards Layout */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10'>
          {/* Register Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ContactRegisterCard
              onRegisterClick={() => {
                // Trigger the register modal by clicking the hidden button
                const registerTrigger = document.getElementById('register-trigger');
                if (registerTrigger) {
                  registerTrigger.click();
                }
              }}
            />
          </motion.div>

          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ContactInfoCard />
          </motion.div>

          {/* Consultation Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <ContactConsultationCard
              onConsultationClick={() => setShowConsultationPopup(true)}
            />
          </motion.div>
        </div>
      </div>

      {/* Register Modal is handled by the global RegisterModal component */}

      {/* Consultation Popup */}
      {showConsultationPopup && (
        <ContactPopup
          onClose={() => setShowConsultationPopup(false)}
          onSubmit={async e => {
            e.preventDefault();
            setLoading(true);

            const formData = new FormData(e.target as HTMLFormElement);

            try {
              const response = await fetch('/api/contact', {
                method: 'POST',
                body: formData,
              });

              const result = await response.json();

              if (response.ok) {
                alert(
                  'Pesan berhasil dikirim! Kami akan menghubungi Anda segera.'
                );
                setShowConsultationPopup(false);
              } else {
                alert(result.error || 'Terjadi kesalahan saat mengirim pesan.');
              }
            } catch (error) {
              console.error('Contact error:', error);
              alert('Terjadi kesalahan saat mengirim pesan.');
            } finally {
              setLoading(false);
            }
          }}
          loading={loading}
          title='Konsultasi Gratis'
          description='Tim ahli kami siap membantu Anda menemukan solusi disbursement yang tepat untuk bisnis Anda.'
        />
      )}
    </section>
  );
}
