import React, { useMemo } from 'react';

// 1. PERFORMANCE: Define data outside or useMemo to prevent re-allocation
// 2. SEO: Include specific Hyderabad locations in descriptions
const SERVICE_DATA = [
  {
    title: "Water Tank & Sump Cleaning",
    description: "Mechanized 6-step cleaning process to eliminate sludge, algae, and bacteria from residential tanks in Hyderabad.",
    tag: "Most Popular",
    ariaLabel: "Mechanized Water Tank Cleaning Services in Hyderabad"
  },
  {
    title: "Villas & House Deep Cleaning",
    description: "Premium care for high-end villas in Jubilee Hills and Gachibowli, focusing on marble, chandeliers, and upholstery.",
    tag: "Premium",
    ariaLabel: "Premium House and Villa Cleaning Hyderabad"
  },
  {
    title: "Restaurant & Hotel Hygiene",
    description: "FSSAI-standard deep degreasing and sanitization for commercial kitchens, chimneys, and dining areas.",
    tag: "Commercial",
    ariaLabel: "Commercial Kitchen and Restaurant Cleaning Hyderabad"
  },
  {
    title: "Corporate Office Sanitization",
    description: "Systematic deep cleaning for Hitech City workplaces to ensure a dust-free, healthy corporate environment.",
    tag: "Business",
    ariaLabel: "Office Deep Cleaning Services Hitech City Hyderabad"
  }
];

const Services: React.FC = () => {
  // 3. PERFORMANCE: Memoize the list to avoid overhead during parent re-renders
  const memoizedServices = useMemo(() => SERVICE_DATA, []);

  return (
    <section 
      id="services" 
      className="py-24 bg-surface"
      aria-labelledby="services-title"
    >
      <div className="container mx-auto px-6">
        
        {/* HEADER: SEO optimized with H2 and descriptive spans */}
        <header className="grid lg:grid-cols-12 gap-8 mb-20 items-end">
          <div className="lg:col-span-8">
            <h2 className="text-sm font-bold tracking-[0.3em] text-accent uppercase mb-4">
              Our Expertise
            </h2>
            <p id="services-title" className="text-4xl md:text-6xl font-black text-primary leading-[1.1] tracking-tighter">
              Specialized Hygiene Solutions for <br /> 
              <span className="text-accent">Modern Hyderabad.</span>
            </p>
          </div>
          
          <div className="lg:col-span-4 border-l border-slate-200 pl-8 pb-2">
            <p className="text-slate-500 text-base leading-relaxed max-w-sm">
              From essential water safety to premium villa maintenance, 
              we deliver sanitation standards that exceed global expectations.
            </p>
          </div>
        </header>

        {/* SERVICES GRID: Using <article> for better SEO indexing per service */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200 overflow-hidden rounded-4xl shadow-sm">
          {memoizedServices.map((service, index) => (
            <article 
              key={index} 
              className="bg-surface p-10 group hover:bg-primary transition-all duration-500 cursor-default focus-within:ring-2 focus-within:ring-accent outline-none"
            >
              <div className="h-full flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-accent group-hover:text-white/60 transition-colors">
                    {service.tag}
                  </span>
                  <h3 className="text-2xl font-bold mt-5 mb-4 text-primary group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                    {service.description}
                  </p>
                </div>
                
                <div className="mt-16">
                  <a 
                    href="/services" 
                    aria-label={`View more details about ${service.ariaLabel}`}
                    className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-primary group-hover:text-accent transition-all focus:outline-none"
                  >
                    View Details
                    <svg 
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;