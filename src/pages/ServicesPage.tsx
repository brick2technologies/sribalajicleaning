import React, { useState, useMemo, lazy, Suspense } from 'react';
import SEO from '../comnponents/SEO';

// Performance: LeadModal is likely heavy; lazy load it to improve initial page load speed
const LeadModal = lazy(() => import('../pages/LeadModal'));

// SEO & Performance: Define data outside to prevent re-allocation
// Added 'id' to each service to support hash-link navigation from other pages
const SERVICE_CATEGORIES = [
  {
    category: "Residential Excellence",
    description: "Premium care for your living spaces, from independent villas in Jubilee Hills to high-rise apartments in Gachibowli.",
    services: [
      { id: "tank-cleaning", title: "Water Tank & Sump", desc: "6-step mechanized sanitization process ensuring 100% bacteria-free water.", icon: "💧", ariaLabel: "Mechanized water tank and sump cleaning Hyderabad" },
      { id: "villa-cleaning", title: "Villa Deep Cleaning", desc: "Comprehensive detailing for luxury homes and independent villas.", icon: "🏡", ariaLabel: "Luxury villa deep cleaning services Hyderabad" },
      { id: "apartment-cleaning", title: "Apartment Cleaning", desc: "Move-in/Move-out and periodic deep cleans for gated communities.", icon: "🏢", ariaLabel: "Flat and apartment deep cleaning services" },
      { id: "upholstery-cleaning", title: "Sofa & Upholstery", desc: "Stain removal and fabric revitalization using eco-friendly chemicals.", icon: "🛋️", ariaLabel: "Sofa and carpet shampooing services" }
    ]
  },
  {
    category: "Commercial & Industrial",
    description: "Professional hygiene standards for high-traffic business environments in Hitech City and Madhapur.",
    services: [
      { id: "office-cleaning", title: "Office Sanitization", desc: "Dust-free workstations and sterile cabins for healthy workplaces.", icon: "💻", ariaLabel: "Corporate office deep cleaning Hyderabad" },
      { id: "floor-polishing", title: "Commercial Floor", desc: "Industrial scrubbing and Italian marble polishing.", icon: "✨", ariaLabel: "Industrial floor scrubbing and polishing" },
      { id: "retail-cleaning", title: "Retail & Shops", desc: "Showroom-grade cleaning for luxury retail outlets.", icon: "🛍️", ariaLabel: "Retail store and showroom cleaning" },
      { id: "carpet-cleaning", title: "Commercial Carpet", desc: "Deep extraction for heavy-duty carpets in office spaces.", icon: "🧵", ariaLabel: "Industrial carpet cleaning services" }
    ]
  },
  {
    category: "Specialized Institutions",
    description: "Industry-specific cleaning meeting FSSAI and educational health codes.",
    services: [
      { id: "restaurant-cleaning", title: "Restaurant & Kitchen", desc: "FSSAI-grade degreasing and sanitization.", icon: "🍳", ariaLabel: "Kitchen degreasing and FSSAI cleaning" },
      { id: "hotel-cleaning", title: "Hotels & Hospitality", desc: "Room detailing and lobby maintenance.", icon: "🏨", ariaLabel: "Hotel and hospitality deep cleaning" },
      { id: "school-cleaning", title: "Schools & Colleges", desc: "Safe, non-toxic cleaning for student areas.", icon: "🎓", ariaLabel: "Educational institute cleaning" },
      { id: "chemical-cleaning", title: "Chemical Cleaning", desc: "Heavy-duty treatment for stubborn grime.", icon: "🧪", ariaLabel: "Industrial chemical cleaning services" }
    ]
  }
];

const ServicesPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Performance: Memoize the categories so the list isn't recalculated on re-renders
  const memoizedCategories = useMemo(() => SERVICE_CATEGORIES, []);

  return (
    <>
      {/* 1. SEO TAGS: Optimized for Category and Service Indexing */}
      <SEO 
        title="Full Cleaning Services Catalog | Residential & Commercial"
        description="Explore our complete range of hygiene services in Hyderabad. From mechanized water tank cleaning to FSSAI-standard kitchen degreasing and villa deep cleans."
        path="/services"
      />

      <main className="pt-24 md:pt-32 pb-16 md:pb-24 bg-surface min-h-screen">
        <div className="container mx-auto px-6">

          {/* Page Header */}
          <header className="max-w-4xl mb-16 md:mb-24">
            <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] md:tracking-[0.4em] text-accent uppercase mb-4 md:mb-6">
              Our Expertise
            </h2>
            <h1 className="text-4xl md:text-8xl font-black text-primary tracking-tighter leading-[1.1] md:leading-[0.9] mb-6 md:mb-8">
              Precision Cleaning <br />
              <span className="text-accent text-2xl md:text-7xl">
                For Every Environment.
              </span>
            </h1>
            <p className="text-slate-500 text-base md:text-xl max-w-2xl leading-relaxed">
              From 100,000L commercial sumps to delicate villa upholstery, 
              <strong className="text-primary font-bold"> Sri Balaji </strong> provides the gold standard in <span className="text-accent font-semibold">mechanized hygiene</span> for Hyderabad.
            </p>
          </header>

          {/* 2. VISUAL GUIDE: Vital for the 'Service' SEO Schema */}
          <section className="mb-20" aria-labelledby="process-heading">
            <h3 id="process-heading" className="sr-only">Our Cleaning Process</h3>
            
          </section>

          {/* 3. CATEGORIES LOOP: Semantic sections for search engines */}
          <div className="space-y-20 md:space-y-32">
            {memoizedCategories.map((group, i) => (
              <section key={i} className="relative" aria-labelledby={`category-title-${i}`}>
                <div className="grid lg:grid-cols-12 gap-8 md:gap-12">

                  {/* Category Sidebar */}
                  <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit mb-8 lg:mb-0">
                    <div className="flex items-center gap-4 mb-4 md:mb-6">
                      <div className="h-px w-6 md:w-8 bg-accent" aria-hidden="true"></div>
                      <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-accent">
                        Category 0{i + 1}
                      </span>
                    </div>
                    <h2 id={`category-title-${i}`} className="text-2xl md:text-3xl font-black text-primary mb-3 md:mb-4">
                      {group.category}
                    </h2>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                      {group.description}
                    </p>
                  </div>

                  {/* Services Grid */}
                  <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4">
                    {group.services.map((service, index) => (
                      <article
                        key={index}
                        id={service.id} // Essential for direct navigation from home page links
                        className="group bg-white p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 hover:border-accent transition-all duration-500 shadow-sm focus-within:ring-2 focus-within:ring-accent outline-none"
                      >
                        <div className="flex flex-row md:flex-col items-center md:items-start gap-5 md:gap-0 mb-4 md:mb-6">
                          <div className="text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-500 bg-slate-50 w-14 h-14 md:w-auto md:h-auto flex items-center justify-center rounded-2xl md:bg-transparent" aria-hidden="true">
                            {service.icon}
                          </div>
                          <h4 className="text-lg md:text-xl font-bold text-primary group-hover:text-accent transition-colors">
                            {service.title}
                          </h4>
                        </div>

                        <p className="text-slate-400 text-sm leading-relaxed mb-6 md:mb-0">
                          {service.desc}
                        </p>

                        <button
                          onClick={() => setIsModalOpen(true)}
                          aria-label={`Inquire about ${service.ariaLabel}`}
                          className="mt-4 md:mt-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary/30 group-hover:text-primary transition-colors focus:outline-none"
                        >
                          Book Now
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </button>
                      </article>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Footer CTA */}
          <section className="mt-24 md:mt-32 p-8 md:p-20 rounded-[2.5rem] md:rounded-[3rem] bg-primary relative overflow-hidden text-center">
            <div className="relative z-10">
              <h3 className="text-2xl md:text-5xl font-black text-white tracking-tighter mb-4 md:mb-8 leading-tight">
                Experience the <br className="md:hidden" /> Balaji Standard.
              </h3>
              <button 
                onClick={() => setIsModalOpen(true)} 
                className="w-full md:w-auto bg-accent text-primary px-10 py-5 rounded-xl md:rounded-2xl font-black uppercase text-[10px] md:text-xs tracking-widest hover:bg-white transition-all shadow-2xl active:scale-95"
              >
                Free Consultation
              </button>
            </div>
            <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-accent/10 blur-[60px] md:blur-[100px] rounded-full" aria-hidden="true"></div>
          </section>
        </div>

        <Suspense fallback={null}>
          <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </Suspense>
      </main>
    </>
  );
};

export default ServicesPage;