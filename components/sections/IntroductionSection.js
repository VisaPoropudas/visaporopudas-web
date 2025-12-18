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
            <p className="text-lg text-gray-600 dark:text-gray-300  mb-6">
              With over 20 years of experience in system development and SaaS business, I've built my career on transforming complex business challenges into scalable software solutions. As Product Manager and Business Manager at NexGolf, I've led the development and growth of comprehensive web-based platforms that serve organizations across an entire industry.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              My expertise spans the full spectrum of software business: from leading cross-functional teams in development, testing, and customer service to driving B2B sales and marketing strategies that deliver real market impact. I understand that successful software products require more than just great code—they demand deep customer insight, strategic vision, and the ability to align technical capabilities with business goals.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Throughout my career, I've focused on building solutions that don't just meet requirements but anticipate future needs. This approach has enabled me to guide teams through complete product lifecycles, from initial concept through to market-leading implementations. Whether architecting technical solutions, developing go-to-market strategies, or fostering high-performing teams, I bring a balanced perspective that combines technical depth with business acumen.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I thrive at the intersection of technology and business, where understanding user needs, managing development processes, and delivering measurable value come together to create lasting success.
            </p>
          </div>

 
        </motion.div>
      </div>
    </section>
  );
}
