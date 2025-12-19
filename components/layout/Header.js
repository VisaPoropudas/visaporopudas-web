'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { List, X, PersonCircle } from 'react-bootstrap-icons';
import ThemeToggle from '../ThemeToggle';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations('nav');

  const navItems = [
    { href: `/`, label: t('home') },
    { href: `/introduction`, label: t('introduction') },
    { href: `/cv`, label: t('cv') },
    { href: `/skills`, label: t('skills') },
    { href: `/projects`, label: t('projects') },
    { href: `/contact`, label: t('contact') },
    
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo with Profile Photo */}
            <Link href="/" className="flex items-center space-x-3">
              {/* Profile Photo Circle */}
              <div className="relative w-30 h-30 mt-15 rounded-full overflow-hidden border-2 border-primary-500 dark:border-primary-400 flex-shrink-0">
                <img
                  src="/images/profile-photo.jpg"
                  alt="Visa Poropudas"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    // Fallback to icon if image doesn't exist
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="absolute inset-0 bg-primary-100 dark:bg-primary-900 hidden items-center justify-center">
                  <PersonCircle className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                {/*<div className="text-xl font-bold text-primary-600 dark:text-primary-400">
                  VP
                </div>*/}
                <span className="hidden sm:block text-lg font-semibold text-gray-900 dark:text-white">
                  Visa Poropudas
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-3">
              <ThemeToggle />

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <List className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} navItems={navItems} />
    </>
  );
}
