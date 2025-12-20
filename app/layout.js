import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import ThemeProvider from '@/components/ThemeProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/CookieConsent';
import './globals.css';
import './cookieconsent.css';

export const metadata = {
  title: 'Visa Poropudas - Software Developer & AI Enthusiast',
  description: 'Professional software developer with expertise in modern web technologies and artificial intelligence.',
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
