'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { EnvelopeFill } from 'react-bootstrap-icons';
import Card from '../ui/Card';
import Button from '../ui/Button';
import SocialLinks from '../ui/SocialLinks';
import { socialLinks } from '@/data/content';

export default function ContactSection() {
  const t = useTranslations('contact');

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {t('subtitle')}
            </p>
          </div>

          <Card className="p-8">
            {/* Email */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <EnvelopeFill className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                {t('email')}
              </h3>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <p className="text-gray-600 dark:text-gray-300">
                  {socialLinks.email}
                </p>
                <a href={`mailto:${socialLinks.email}`}>
                  <Button>
                    {t('sendEmail')}
                  </Button>
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('social')}
              </h3>
              <SocialLinks iconSize={28} />
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
