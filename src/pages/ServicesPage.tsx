import React, { useState } from 'react';
import LeadModal from './LeadModal';

const serviceCategories = [
  {
    category: "Residential Excellence",
    description: "Premium care for your living spaces, from independent villas to high-rise apartments.",
    services: [
      { title: "Water Tank & Sump", desc: "6-step mechanized sanitization process.", icon: "💧" },
      { title: "Villa Deep Cleaning", desc: "Comprehensive detailing for luxury homes.", icon: "🏡" },
      { title: "Apartment Cleaning", desc: "Move-in/Move-out and periodic deep cleans.", icon: "🏢" },
      { title: "Sofa & Upholstery", desc: "Stain removal and fabric revitalization.", icon: "🛋️" }
    ]
  },
  {
    category: "Commercial & Industrial",
    description: "Professional hygiene standards for high-traffic business environments.",
    services: [
      { title: "Office Sanitization", desc: "Dust-free workstations and sterile cabins.", icon: "💻" },
      { title: "Commercial Floor", desc: "Industrial scrubbing and marble polishing.", icon: "✨" },
      { title: "Retail & Shops", desc: "Showroom-grade cleaning for retail outlets.", icon: "🛍️" },
      { title: "Commercial Carpet", desc: "Deep extraction for heavy-duty carpets.", icon: "🧵" }
    ]
  },
  {
    category: "Specialized Institutions",
    description: "Industry-specific cleaning meeting FSSAI and educational health codes.",
    services: [
      { title: "Restaurant & Kitchen", desc: "FSSAI-grade degreasing and sanitization.", icon: "🍳" },
      { title: "Hotels & Hospitality", desc: "Room detailing and lobby maintenance.", icon: "🏨" },
      { title: "Schools & Colleges", desc: "Safe, non-toxic cleaning for student areas.", icon: "🎓" },
      { title: "Chemical Cleaning", desc: "Heavy-duty treatment for stubborn grime.", icon: "🧪" }
    ]
  }
];


const ServicesPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <main className="pt-24 md:pt-32 pb-16 md:pb-24 bg-surface min-h-screen">
        <div className="container mx-auto px-6">

          {/* Page Header - Responsive Sizing */}
          <div className="max-w-4xl mb-16 md:mb-24">
            <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] md:tracking-[0.4em] text-accent uppercase mb-4 md:mb-6">
              Our Expertise
            </h2>
            <h1 className="text-4xl md:text-8xl font-black text-primary tracking-tighter leading-[1.1] md:leading-[0.9] mb-6 md:mb-8">
              Precision Cleaning <br />
              <span className=" text-accent text-2xl md:text-7xl">
                For Every Environment.
              </span>
            </h1>
            <p className="text-slate-500 text-base md:text-xl max-w-2xl leading-relaxed">
              From 100,000L commercial sumps to delicate villa upholstery,
              <span className="text-primary font-bold"> Sri Balaji </span> provides the gold standard in Hyderabad's hygiene sector.
            </p>
          </div>

          {/* Categories Loop */}
          <div className="space-y-20 md:space-y-32">
            {serviceCategories.map((group, i) => (
              <section key={i} className="relative">
                <div className="grid lg:grid-cols-12 gap-8 md:gap-12">

                  {/* Category Sidebar - Mobile Centered, Desktop Sticky */}
                  <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit mb-8 lg:mb-0">
                    <div className="flex items-center gap-4 mb-4 md:mb-6">
                      <div className="h-px w-6 md:w-8 bg-accent"></div>
                      <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-accent">
                        Category 0{i + 1}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-primary mb-3 md:mb-4">
                      {group.category}
                    </h2>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                      {group.description}
                    </p>
                  </div>

                  {/* Services Grid - Mobile List, Tablet/Desktop Bento */}
                  <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4">
                    {group.services.map((service, index) => (
                      <div
                        key={index}
                        className="group bg-white p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 hover:border-accent transition-all duration-500 shadow-sm active:scale-[0.98] md:active:scale-100"
                      >
                        {/* Mobile Layout: Icon and Title on same line for better space usage */}
                        <div className="flex flex-row md:flex-col items-center md:items-start gap-5 md:gap-0 mb-4 md:mb-6">
                          <div className="text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-500 bg-slate-50 w-14 h-14 md:w-auto md:h-auto flex items-center justify-center rounded-2xl md:bg-transparent">
                            {service.icon}
                          </div>
                          <h4 className="text-lg md:text-xl font-bold text-primary group-hover:text-accent transition-colors">
                            {service.title}
                          </h4>
                        </div>

                        <p className="text-slate-400 text-sm leading-relaxed mb-6 md:mb-0">
                          {service.desc}
                        </p>

                        {/* Mobile-Only CTA Arrow */}
                        <button
                          onClick={() => setIsModalOpen(true)}
                          className="mt-4 md:mt-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary/30 group-hover:text-primary transition-colors"
                        >
                          Book <span className="hidden md:inline">Now</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Floating Bottom CTA - Mobile Optimized */}
          <div className="mt-24 md:mt-32 p-8 md:p-20 rounded-[2.5rem] md:rounded-[3rem] bg-primary relative overflow-hidden text-center">
            <div className="relative z-10">
              <h3 className="text-2xl md:text-5xl font-black text-white tracking-tighter mb-4 md:mb-8 leading-tight">
                Not sure which <br className="md:hidden" /> service you need?
              </h3>
              <p className="text-white/60 text-sm md:text-base mb-8 md:mb-12 max-w-xl mx-auto">
                Our experts provide a custom hygiene roadmap for your property after a site inspection.
              </p>
              <button onClick={() => setIsModalOpen(true)} className="w-full md:w-auto bg-accent text-primary px-10 py-5 rounded-xl md:rounded-2xl font-black uppercase text-[10px] md:text-xs tracking-widest hover:bg-white transition-all shadow-2xl">
                Free Consultation
              </button>
            </div>

            {/* Decorative Elements - Simpler for Mobile Performance */}
            <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-accent/10 blur-[60px] md:blur-[100px] rounded-full"></div>
          </div>

        </div>


      </main>
      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default ServicesPage;