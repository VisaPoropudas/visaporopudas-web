'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Card from '../ui/Card';
import { Award, BookHalf } from 'react-bootstrap-icons';
import { education, certificates } from '@/data/content';

export default function IntroductionSection() {
  const t = useTranslations('introduction');

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* About */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t('aboutTitle')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('aboutText')}
            </p>
          </div>

 
        </motion.div>
      </div>
    </section>
  );
}
