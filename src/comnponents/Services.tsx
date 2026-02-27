import React from 'react';

const services = [
  {
    title: "Water Tank & Sump",
    description: "6-step mechanized cleaning process to eliminate sludge, algae, and bacteria from your drinking water storage.",
    tag: "Most Popular",
    link: "#tank-cleaning"
  },
  {
    title: "Houses & Villas Cleaning",
    description: "Specialized care for high-end homes, focusing on Italian marble, chandeliers, and premium upholstery.",
    tag: "Premium",
    link: "#villa-cleaning"
  },
  {
    title: "Restaurant & Hotel",
    description: "FSSAI-standard deep degreasing and sanitization for chimneys, fryers, and dining areas.",
    tag: "Commercial",
    link: "#restaurant-cleaning"
  },
  {
    title: "Corporate Offices",
    description: "Systematic sanitization for Hitech City workplaces to ensure a dust-free, healthy environment.",
    tag: "Business",
    link: "#office-cleaning"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        
        {/* Updated Section Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20 items-end">
          <div className="lg:col-span-8">
            <h2 className="text-sm font-bold tracking-[0.3em] text-accent uppercase mb-4">
              Our Expertise
            </h2>
            <p className="text-4xl md:text-6xl font-black text-primary leading-[1.1] tracking-tighter">
              Specialized Hygiene Solutions for  <br /> 
              <span className="text-accent">Modern Hyderabad.</span>
            </p>
          </div>
          
          <div className="lg:col-span-4 border-l border-slate-200 pl-8 pb-2">
            <p className="text-slate-500 text-base leading-relaxed max-w-sm">
              From essential water safety to premium villa maintenance, 
              we deliver sanitation standards that exceed global expectations.
            </p>
          </div>
        </div>

        {/* Services Grid (Keeping your original slick design) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200 overflow-hidden rounded-4xl shadow-sm">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-surface p-10 group hover:bg-primary transition-all duration-500 cursor-default"
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
                    href={service.link} 
                    className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-primary group-hover:text-accent transition-all"
                  >
                    View Details
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;