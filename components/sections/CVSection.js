'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Download, FileEarmarkText } from 'react-bootstrap-icons';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function CVSection() {
  const t = useTranslations('cv');

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
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('title')}
            </h2>
          </div>

          <Card className="p-8">
            {/* Download Section */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Button size="lg">
                <Download className="w-5 h-5 mr-2" />
                {t('download')}
              </Button>
              <Button size="lg" variant="outline">
                <FileEarmarkText className="w-5 h-5 mr-2" />
                {t('viewOnline')}
              </Button>
            </div>

            {/* CV Preview Placeholder */}
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-12 text-center">
              <FileEarmarkText className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-500 dark:text-gray-400 italic">
                {t('placeholder')}
              </p>
              <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                Upload your CV PDF to /public/cv.pdf or create an HTML version here
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
