'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { Github } from 'react-bootstrap-icons';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { projects } from '@/data/projects';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

export default function ProjectsCarousel() {
  const t = useTranslations('projects');

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
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

          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="max-w-5xl"
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="pb-12">
                <Card className="overflow-hidden h-full">
                  {/* Project Image Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 dark:from-gray-700 dark:to-gray-600" style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}/>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {project.name}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        {t('techStack')}:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* GitHub Link */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <Button size="sm">
                        <Github className="w-4 h-4 mr-2" />
                        {t('viewGithub')}
                      </Button>
                    </a>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
