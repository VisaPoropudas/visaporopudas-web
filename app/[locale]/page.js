import HeroSection from '@/components/sections/HeroSection';
import IntroductionSection from '@/components/sections/IntroductionSection';
import AISkillsSection from '@/components/sections/AISkillsSection';
import ProjectsCarousel from '@/components/sections/ProjectsCarousel';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroductionSection />
      <AISkillsSection />
      <ProjectsCarousel />
      <ContactSection />
    </>
  );
}
