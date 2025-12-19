import EducationSection from '@/components/sections/EducationSection';
import WorkExperienceSection from '@/components/sections/WorkExperienceSection';
import LanguageSkillsSection from '@/components/sections/LanguageSkillsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import OtherSkillsSection from '@/components/sections/OtherSkillsSection';

export default function CVPage() {
  return (
    <>
      <WorkExperienceSection />
      <EducationSection />
      <LanguageSkillsSection />
      <SkillsSection />
      <OtherSkillsSection />
    </>
  );
}
