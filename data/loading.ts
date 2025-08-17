export interface LoadingFeature {
  icon: string;
  text: string;
}

export const loadingFeatures: LoadingFeature[] = [
  { icon: '⚡', text: 'Cepat' },
  { icon: '🔒', text: 'Aman' },
  { icon: '💰', text: 'Terpercaya' },
  { icon: '📊', text: 'Real-time' },
];

export const brandedLoadingFeatures: LoadingFeature[] = [
  { icon: '⚡', text: 'Instant' },
  { icon: '🔒', text: 'Secure' },
  { icon: '💰', text: 'Reliable' },
];

export interface LoadingMessage {
  text: string;
  delay?: number;
}

export const loadingMessages: LoadingMessage[] = [
  { text: 'Menyiapkan dashboard...', delay: 0 },
  { text: 'Memuat data transaksi...', delay: 1.5 },
  { text: 'Verifikasi keamanan...', delay: 3 },
  { text: 'Hampir selesai...', delay: 4.5 },
];
