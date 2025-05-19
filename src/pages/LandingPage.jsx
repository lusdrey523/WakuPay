import React from 'react';
    import HeroSection from '@/components/sections/HeroSection';
    import FeaturesSection from '@/components/sections/FeaturesSection';
    import MascotsSection from '@/components/sections/MascotsSection';
    import CTASection from '@/components/sections/CTASection';
    

    const LandingPage = () => {
      return (
        <div className="overflow-x-hidden">
          <HeroSection />
          <FeaturesSection />
          <MascotsSection />
          <CTASection />
        </div>
      );
    };

    export default LandingPage;