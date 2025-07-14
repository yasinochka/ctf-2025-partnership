import AboutSection from './AboutSection';
import HeroSection from './HeroSection';
import FormatSection from './FormatSection';
import WhyParticipateSection from './WhyParticipateSection';
import PartnersSection from './PartnersSection';
import OrganisersSection from './OrganisersSection';
import StatsSection from './StatsSection';
import SwiperSection from './SwiperSection';
import PortraitSection from './PortraitSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <div
        className="fullBackground"
        style={{
          backgroundImage: "url('/images/backgroundFormat.png')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto 215vh', 
          backgroundPosition: 'right -400px',
          position: 'relative',
          width: '100%',
          minHeight: '150vh', 
          zIndex: 0,
        }}
      >
        <FormatSection />
        <WhyParticipateSection />
      </div>
      <StatsSection/>
      <SwiperSection/>
      <PortraitSection/>
      <PartnersSection/>
      <OrganisersSection/>
    </>
  );
}