import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import {
  isValidEmail,
  isValidPhoneNumber,
  sanitizeInput,
  emailRateLimiter,
  validateEnvVars,
} from '@/lib/utils';

interface RegisterData {
  name: string;
  email: string;
  country: string;
  phone: string;
  password?: string;
  confirm_password?: string;
}

function validateRegisterData(data: RegisterData): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  // Required fields validation
  if (!data.name.trim()) {
    errors.push('Nama wajib diisi');
  } else if (data.name.length < 2) {
    errors.push('Nama minimal 2 karakter');
  } else if (data.name.length > 100) {
    errors.push('Nama terlalu panjang (maksimal 100 karakter)');
  }

  if (!data.email.trim()) {
    errors.push('Email wajib diisi');
  } else if (!isValidEmail(data.email)) {
    errors.push('Format email tidak valid');
  } else if (data.email.length > 254) {
    errors.push('Email terlalu panjang');
  }

  if (!data.country.trim()) {
    errors.push('Negara wajib diisi');
  }

  // Optional phone validation
  if (data.phone && !isValidPhoneNumber(data.phone)) {
    errors.push('Format nomor telepon tidak valid');
  }

  // Password validation if provided
  if (data.password) {
    if (data.password.length < 8) {
      errors.push('Password minimal 8 karakter');
    } else if (data.password.length > 128) {
      errors.push('Password terlalu panjang (maksimal 128 karakter)');
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(data.password)) {
      errors.push(
        'Password harus mengandung huruf besar, huruf kecil, dan angka'
      );
    }
  }

  if (
    data.password &&
    data.confirm_password &&
    data.password !== data.confirm_password
  ) {
    errors.push('Konfirmasi password tidak cocok');
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
    const data: RegisterData = await req.json();

    // Sanitize input data
    const sanitizedData = {
      name: sanitizeInput(data.name),
      email: sanitizeInput(data.email).toLowerCase(),
      country: sanitizeInput(data.country),
      phone: sanitizeInput(data.phone),
      password: data.password ? sanitizeInput(data.password) : undefined,
      confirm_password: data.confirm_password
        ? sanitizeInput(data.confirm_password)
        : undefined,
    };

    // Validate data
    const validation = validateRegisterData(sanitizedData);
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
    const emailSubject = `[UONE PAY] Registrasi Baru - ${sanitizedData.name}`;
    const emailText = `
Registrasi Baru dari Website UONE PAY

Nama: ${sanitizedData.name}
Email: ${sanitizedData.email}
Negara: ${sanitizedData.country}
Telepon: ${sanitizedData.phone || 'Tidak diisi'}

Waktu: ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}
IP Address: ${clientIP}
    `;

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #e4572e; border-bottom: 2px solid #e4572e; padding-bottom: 10px;">
          Registrasi Baru dari Website UONE PAY
        </h2>
        
        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Informasi Registrasi</h3>
          <p><strong>Nama:</strong> ${sanitizedData.name}</p>
          <p><strong>Email:</strong> ${sanitizedData.email}</p>
          <p><strong>Negara:</strong> ${sanitizedData.country}</p>
          <p><strong>Telepon:</strong> ${sanitizedData.phone || 'Tidak diisi'}</p>
        </div>

        <div style="background: #d4edda; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #28a745;">
          <h3 style="color: #155724; margin-top: 0;">Selamat Datang!</h3>
          <p style="color: #155724; margin: 0;">
            Terima kasih telah mendaftar di UONE PAY. Tim kami akan segera menghubungi Anda untuk proses selanjutnya.
          </p>
        </div>

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

    // Log successful registration
    console.log(
      `Registration submitted successfully: ${sanitizedData.email} - ${new Date().toISOString()}`
    );

    return NextResponse.json({
      success: true,
      message: 'Registrasi berhasil! Tim kami akan menghubungi Anda segera.',
    });
  } catch (error) {
    console.error('Registration error:', error);

    // Don't expose internal errors to client
    return NextResponse.json(
      {
        error:
          'Terjadi kesalahan saat memproses registrasi. Silakan coba lagi nanti.',
      },
      { status: 500 }
    );
  }
}
