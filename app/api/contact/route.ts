import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import {
  isValidEmail,
  isValidPhoneNumber,
  sanitizeInput,
  emailRateLimiter,
  validateEnvVars,
} from '@/lib/utils';

interface ContactData {
  name: string;
  email: string;
  country: string;
  type: string;
  phone: string;
  company?: string;
  position?: string;
  volume?: string;
  needs?: string;
}

function parseForm(body: URLSearchParams): ContactData {
  return {
    name: body.get('name') || '',
    email: body.get('email') || '',
    country: body.get('country') || '',
    type: body.get('type') || '',
    phone: body.get('phone') || '',
    company: body.get('company') || '',
    position: body.get('position') || '',
    volume: body.get('volume') || '',
    needs: body.get('needs') || '',
  };
}

function validateContactData(data: ContactData): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  // Required fields validation
  if (!data.name.trim()) {
    errors.push('Nama wajib diisi');
  } else if (data.name.length < 2) {
    errors.push('Nama minimal 2 karakter');
  }

  if (!data.email.trim()) {
    errors.push('Email wajib diisi');
  } else if (!isValidEmail(data.email)) {
    errors.push('Format email tidak valid');
  }

  // Optional fields validation
  if (data.phone && !isValidPhoneNumber(data.phone)) {
    errors.push('Format nomor telepon tidak valid');
  }

  if (data.name.length > 100) {
    errors.push('Nama terlalu panjang (maksimal 100 karakter)');
  }

  if (data.email.length > 254) {
    errors.push('Email terlalu panjang');
  }

  if (data.needs && data.needs.length > 2000) {
    errors.push('Pesan terlalu panjang (maksimal 2000 karakter)');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

export async function POST(req: Request) {
  try {
    // Validate environment variables
    validateEnvVars();

    // Rate limiting
    const clientIP =
      req.headers.get('x-forwarded-for') ||
      req.headers.get('x-real-ip') ||
      'unknown';

    if (!emailRateLimiter.isAllowed(clientIP)) {
      return NextResponse.json(
        {
          error: 'Terlalu banyak permintaan. Silakan coba lagi dalam 1 menit.',
        },
        { status: 429 }
      );
    }

    // Parse request data
    const contentType = req.headers.get('content-type') || '';
    let data: ContactData;

    if (contentType.includes('application/json')) {
      data = await req.json();
    } else if (contentType.includes('application/x-www-form-urlencoded')) {
      const form = await req.text();
      data = parseForm(new URLSearchParams(form));
    } else {
      return NextResponse.json(
        { error: 'Content type tidak didukung' },
        { status: 400 }
      );
    }

    // Sanitize input data
    data = {
      name: sanitizeInput(data.name),
      email: sanitizeInput(data.email).toLowerCase(),
      country: sanitizeInput(data.country),
      type: sanitizeInput(data.type),
      phone: sanitizeInput(data.phone),
      company: sanitizeInput(data.company || ''),
      position: sanitizeInput(data.position || ''),
      volume: sanitizeInput(data.volume || ''),
      needs: sanitizeInput(data.needs || ''),
    };

    // Validate data
    const validation = validateContactData(data);
    if (!validation.isValid) {
      return NextResponse.json(
        { error: 'Data tidak valid', details: validation.errors },
        { status: 400 }
      );
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // Add timeout and connection settings
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
    } catch (error) {
      console.error('SMTP verification failed:', error);
      return NextResponse.json(
        { error: 'Konfigurasi email server tidak valid' },
        { status: 500 }
      );
    }

    // Prepare email content
    const emailSubject = `[UONE PAY] Kontak Baru - ${data.name}`;
    const emailText = `
Kontak Baru dari Website UONE PAY

Nama: ${data.name}
Email: ${data.email}
Negara: ${data.country}
Tipe: ${data.type}
Telepon: ${data.phone}
Perusahaan: ${data.company || 'Tidak diisi'}
Jabatan: ${data.position || 'Tidak diisi'}
Volume: ${data.volume || 'Tidak diisi'}
Kebutuhan: ${data.needs || 'Tidak diisi'}

Waktu: ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}
IP Address: ${clientIP}
    `;

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #e4572e; border-bottom: 2px solid #e4572e; padding-bottom: 10px;">
          Kontak Baru dari Website UONE PAY
        </h2>
        
        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Informasi Kontak</h3>
          <p><strong>Nama:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Negara:</strong> ${data.country}</p>
          <p><strong>Tipe:</strong> ${data.type}</p>
          <p><strong>Telepon:</strong> ${data.phone}</p>
          <p><strong>Perusahaan:</strong> ${data.company || 'Tidak diisi'}</p>
          <p><strong>Jabatan:</strong> ${data.position || 'Tidak diisi'}</p>
          <p><strong>Volume:</strong> ${data.volume || 'Tidak diisi'}</p>
        </div>

        ${
          data.needs
            ? `
        <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ffc107;">
          <h3 style="color: #856404; margin-top: 0;">Kebutuhan Khusus</h3>
          <p style="color: #856404; margin: 0;">${data.needs}</p>
        </div>
        `
            : ''
        }

        <div style="background: #e9ecef; padding: 15px; border-radius: 8px; margin: 20px 0; font-size: 12px; color: #6c757d;">
          <p style="margin: 0;"><strong>Waktu:</strong> ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}</p>
          <p style="margin: 5px 0 0 0;"><strong>IP Address:</strong> ${clientIP}</p>
        </div>

        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6;">
          <p style="color: #6c757d; font-size: 12px; margin: 0;">
            Email ini dikirim otomatis dari website UONE PAY
          </p>
        </div>
      </div>
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.SMTP_TO || process.env.SMTP_USER,
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
      // Add headers for better deliverability
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        Importance: 'high',
      },
    });

    // Log successful submission
    console.log(
      `Contact form submitted successfully: ${data.email} - ${new Date().toISOString()}`
    );

    return NextResponse.json({
      success: true,
      message: 'Pesan berhasil dikirim. Kami akan menghubungi Anda segera.',
    });
  } catch (error) {
    console.error('Contact form error:', error);

    // Don't expose internal errors to client
    return NextResponse.json(
      {
        error:
          'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi nanti.',
      },
      { status: 500 }
    );
  }
}
