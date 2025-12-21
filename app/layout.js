import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import ThemeProvider from '@/components/ThemeProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/CookieConsent';
import './globals.css';
import './cookieconsent.css';

export const metadata = {
  title: 'Visa Poropudas',
  description: 'Software business professional with expertise in modern web technologies and artificial intelligence.',

  // Open Graph meta tags (Facebook, LinkedIn, etc.)
  openGraph: {
    title: 'Visa Poropudas',
    description: 'Software business professional with expertise in modern web technologies and artificial intelligence.',
    url: 'https://visa-poropudas.web.app',
    siteName: 'Visa Poropudas',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Visa Poropudas - Software Business Professional',
      },
    ],
  },

  // Twitter Card meta tags
  twitter: {
    card: 'summary_large_image',
    title: 'Visa Poropudas',
    description: 'Software business professional with expertise in modern web technologies and artificial intelligence.',
    images: ['/og-image.jpg'],
  },

  // Additional meta tags
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verification tags (optional - add your own tokens)
  // verification: {
  //   google: 'your-google-verification-code',
  //   yandex: 'your-yandex-verification-code',
  // },
};

export default async function RootLayout({ children }) {
  const messages = await getMessages();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
              <Header />
              <main className="flex-1 bg-white dark:bg-gray-900">{children}</main>
              <Footer />
            </div>
            <CookieConsent />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
