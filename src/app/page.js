"use client"
import HeroSection from '@/components/UI/HomePage/HeroSection/HeroSection';
import Gallery from '@/components/UI/HomePage/Gallery/Gallery';
import ScrollAnimation from '@/components/UI/HomePage/ScrollParallax/ScrollAnimation';
import AboutUs from '@/components/UI/HomePage/AboutUs/AboutUs';
import Pricing from '@/components/UI/HomePage/Pricing/Pricing';
import ZoomParallax from '@/components/UI/HomePage/ZoomParallax/ZoomParallax';
import Team from '@/components/UI/HomePage/Team/Team';
import Review from '@/components/UI/HomePage/Review/Review';

const HomePage = () => {

  return (
    <div>
      <HeroSection />
      <ScrollAnimation />
      <Pricing />
      <AboutUs />
      <ZoomParallax />
      <Team />
      <Review />
      {/* <Gallery /> */}
    </div>
  );
};

export default HomePage;