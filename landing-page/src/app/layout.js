import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'NewsletterPlatform - La mejor plataforma para tu newsletter',
  description: 'Una plataforma de boletines para la gestión y envío de correos electrónicos a suscriptores',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-screen bg-gray-50 font-sans">
        {children}
      </body>
    </html>
  );
} 