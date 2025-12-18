'use client';

import { useTranslations } from 'next-intl';
import SocialLinks from '../ui/SocialLinks';

export default function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Visa Poropudas. {t('rights')}.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              {t('builtWith')}
            </p>
          </div>

          {/* Social Links */}
          <SocialLinks iconSize={20} />
        </div>
      </div>
    </footer>
  );
}
