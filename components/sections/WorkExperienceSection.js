'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Briefcase } from 'react-bootstrap-icons';
import Card from '../ui/Card';
import { workExperience } from '@/data/content';

export default function WorkExperienceSection() {
  const t = useTranslations('workExperience');

  return (
    <section id="work-experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {t('subtitle')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800 hidden md:block" />

              {workExperience.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-8 relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 top-6 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full border-4 border-white dark:border-gray-800 hidden md:block -ml-[7px]" />

                  <div className="md:ml-20">
                    <Card className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg flex-shrink-0">
                          <Briefcase className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                              {experience.title}
                            </h3>
                            <span className="text-sm font-medium text-primary-600 dark:text-primary-400 mt-1 sm:mt-0">
                              {experience.year}
                            </span>
                          </div>
                          <p className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            {experience.company}
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            {experience.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
