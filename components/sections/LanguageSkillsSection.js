'use client';

import { motion } from 'framer-motion';
import { Globe2 } from 'react-bootstrap-icons';
import Card from '../ui/Card';
import { languages } from '@/data/skills';

export default function LanguageSkillsSection() {
  const levelColors = {
    native: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    fluent: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    satisfactory: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    basic: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
  };

  const FlagIcon = ({ code }) => {
    // Using flagcdn.com for SVG flags
    const flagUrl = `https://flagcdn.com/${code}.svg`;

    return (
      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-600 flex-shrink-0">
        <img
          src={flagUrl}
          alt={`${code} flag`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    );
  };

  return (
    <section id="language-skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-primary-100 dark:bg-primary-900 rounded-full mb-4">
              <Globe2 className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Language Skills
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Communication across cultures
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {languages.map((language, index) => (
                  <motion.div
                    key={language.code}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <FlagIcon code={language.code} />
                      <span className="text-lg font-medium text-gray-900 dark:text-white">
                        {language.lang}
                      </span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${levelColors[language.level]}`}>
                      {language.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
