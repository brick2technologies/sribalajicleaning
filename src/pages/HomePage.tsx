import React, { Suspense, lazy } from 'react';
import SEO from '../components/SEO';

// Lazy load sections for better performance
const Hero = lazy(() => import("../components/HeroSection"));
const Services = lazy(() => import("../components/Services"));
const WaterTankProcess = lazy(() => import("../components/WatertankProcess"));
const BeforeAfter = lazy(() => import("../components/BeforeAfter"));
const InfinityFlow = lazy(() => import("../components/Locations"));
const AutoTestimonials = lazy(() => import("../components/Testimonials"));
const FinalCTA = lazy(() => import("../components/FinalCTA"));

const HomePage: React.FC = () => {
  return (
    <>
      {/* 1. SEO TAGS: Critical for search ranking & WhatsApp previews */}
      <SEO 
        title="Best Water Tank & Sump Cleaning Services in Hyderabad"
        description="Professional 6-step mechanized water tank cleaning in Hyderabad. Specialized in bacteria-free sump cleaning for homes & villas in Gachibowli, Manikonda, and Hitech City."
        path="/"
      />

      <main>
        {/* 2. CORE SECTIONS: Using Suspense for code splitting */}
        <Suspense fallback={<div className="h-screen bg-surface flex items-center justify-center animate-pulse" />}>
          <Hero />
          <Services />
          
          <section id="process-flow">
            <WaterTankProcess />
            
            {/* 3. VISUAL SEO: Illustrating the scientific cleaning steps */}
            
          </section>

          <BeforeAfter />
          <InfinityFlow />
          <AutoTestimonials />
          <FinalCTA />
        </Suspense>
      </main>
    </>
  );
};

export default HomePage;