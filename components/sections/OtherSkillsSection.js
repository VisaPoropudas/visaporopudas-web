'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Code, Hammer } from 'react-bootstrap-icons';
import Card from '../ui/Card';
import { webSkills, otherSkills } from '@/data/skills';

export default function OtherSkillsSection() {
  const t = useTranslations('skills');

  return (
    <>
    <section id="web-skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-primary-100 dark:bg-primary-900 rounded-full mb-4">
              <Code className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('webSkills.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {t('webSkills.subtitle')}
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="p-8">
              <div className="flex flex-wrap gap-3 justify-center">
                {webSkills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-shadow cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
    <section id="other-skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-primary-100 dark:bg-primary-900 rounded-full mb-4">
              <Hammer className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('otherSkills.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {t('otherSkills.subtitle')}
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="p-8">
              <div className="flex flex-wrap gap-3 justify-center">
                {otherSkills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-shadow cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
}
