import AboutSection from './AboutSection';
import HeroSection from './HeroSection';
import FormatSection from './FormatSection';
import WhyParticipateSection from './WhyParticipateSection';
import PartnersSection from './PartnersSection';
import OrganisersSection from './OrganisersSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FormatSection />
      <WhyParticipateSection/>
      <PartnersSection/>
      <OrganisersSection/>
    </>
  );
}