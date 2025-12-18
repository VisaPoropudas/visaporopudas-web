import HeroSection from '@/components/sections/HeroSection';
import IntroductionSection from '@/components/sections/IntroductionSection';
import SkillsSection from '@/components/sections/SkillsSection';
import WorkExperienceSection from '@/components/sections/WorkExperienceSection';
import OtherSkillsSection from '@/components/sections/OtherSkillsSection';
import ProjectsCarousel from '@/components/sections/ProjectsCarousel';
import ContactSection from '@/components/sections/ContactSection';
import EducationSection from '@/components/sections/EducationSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroductionSection />
      <WorkExperienceSection />
      <EducationSection />
      <SkillsSection />
      <OtherSkillsSection />
      <ProjectsCarousel />
      <ContactSection />
    </>
  );
}
