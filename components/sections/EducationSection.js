'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Card from '../ui/Card';
import { Award, BookHalf } from 'react-bootstrap-icons';
import { education, certificates } from '@/data/content';

export default function EducationSection() {
  const t = useTranslations('introduction');

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Education */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <BookHalf className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                {t('educationTitle')}
              </h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {edu.year}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {edu.description}
                  </p>
                </Card>
              ))}
              {education.length === 0 && (
                <Card className="p-6">
                  <p className="text-gray-500 dark:text-gray-400 italic">
                    {t('educationPlaceholder')}
                  </p>
                </Card>
              )}
            </div>
          </div>

          {/* Certificates */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                {t('certificatesTitle')}
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {certificates.map((cert, index) => (
                <Card key={index} className="p-6" hover>
                  <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-primary-600 dark:text-primary-400 text-sm mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {cert.year}
                  </p>
                </Card>
              ))}
              {certificates.length === 0 && (
                <Card className="p-6 col-span-2">
                  <p className="text-gray-500 dark:text-gray-400 italic">
                    {t('certificatesPlaceholder')}
                  </p>
                </Card>
              )}
            </div>
          </div>
        </motion.div>
    </section>
  );
}
