import { motion } from 'framer-motion';
import { pageTransition } from '../../animations/variants';
import HeroSection from '../../components/sections/HeroSection';
import TrustBar from '../../components/sections/TrustBar';
import ServicesSection from '../../components/sections/ServicesSection';
import WhyNexora from '../../components/sections/WhyNexora';
import ProjectsSection from '../../components/sections/ProjectsSection';
import ProcessSection from '../../components/sections/ProcessSection';
import TeamSection from '../../components/sections/TeamSection';
import ClientsSection from '../../components/sections/ClientsSection';
import CTASection from '../../components/sections/CTASection';
import FAQSection from '../../components/sections/FAQSection';

export default function Home() {
  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <WhyNexora />
      <ProjectsSection />
      <ProcessSection />
      <TeamSection />
      <ClientsSection />
      <CTASection />
      <FAQSection />
    </motion.div>
  );
}
