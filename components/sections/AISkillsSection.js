'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Card from '../ui/Card';
import { aiSkills } from '@/data/skills';
import { CheckCircleFill } from 'react-bootstrap-icons';

export default function AISkillsSection() {
  const t = useTranslations('aiSkills');

  const levelColors = {
    beginner: 'text-blue-600 dark:text-blue-400',
    intermediate: 'text-green-600 dark:text-green-400',
    advanced: 'text-purple-600 dark:text-purple-400',
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {t('subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {aiSkills.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="p-6 h-full">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {category.category}
                  </h3>
                  <ul className="space-y-3">
                    {category.skills.map((skill) => (
                      <li key={skill.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircleFill className={`w-5 h-5 ${levelColors[skill.level]}`} />
                          <span className="text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                        </div>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${levelColors[skill.level]} bg-opacity-10`}>
                          {skill.level}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>

          {aiSkills.length === 0 && (
            <Card className="p-12">
              <p className="text-center text-gray-500 dark:text-gray-400 italic">
                {t('skillsPlaceholder')}
              </p>
            </Card>
          )}
        </motion.div>
      </div>
    </section>
  );
}
