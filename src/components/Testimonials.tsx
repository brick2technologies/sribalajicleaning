import React from 'react';

const testimonials = [
  {
    name: "Kiran Chennupati",
    role: "Resident, My Home Abhra",
    text: "With the high TDS levels in Madhapur, our overhead tanks were full of red silt. Sri Balaji's vacuum process removed everything without us having to step inside."
  },
  {
    name: "Ayesha Ahmed",
    role: "Owner, Paradise Biryani",
    text: "Kitchen hygiene is non-negotiable. The Sri Balaji team handled heavy-duty degreasing during the night shift. Professional and efficient."
  },
  {
    name: "Srinivas Rao",
    role: "Admin, Raheja Mindspace",
    text: "Managing a 100,000-liter sump is a nightmare, but Sri Balaji's mechanized dewatering is fast. They provided a full digital report."
  },
  {
    name: "Meera Deshpande",
    role: "Villa Owner, Lanco Hills",
    text: "I was worried about chemicals, but they used food-grade sprays safe for kids. Our water finally tastes clean again."
  },
  {
    name: "Rahul Varma",
    role: "Manager, ITC Kohenur",
    text: "Reliable partners for specialized deep cleaning. Their attention to detail on Italian marble matches international standards."
  }
];

const TestimonialCard = ({ item }: { item: typeof testimonials[0] }) => (
  /* Adjusted width: 280px on mobile, 400px on desktop */
  <div className="w-[280px] md:w-[400px] flex-shrink-0 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
    <div className="flex text-accent gap-1 mb-4 md:mb-6">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-3 h-3 md:w-4  fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    
    {/* Responsive text size: text-base on mobile, text-lg on desktop */}
    <p className="text-base md:text-lg text-primary font-medium leading-relaxed mb-6 md:mb-8 italic">
      "{item.text}"
    </p>
    
    <div className="flex items-center gap-3 md:gap-4">
      <div className="w-8 h-8 md:w-10  rounded-full bg-slate-100 flex items-center justify-center font-bold text-primary text-xs md:text-sm">
        {item.name[0]}
      </div>
      <div>
        <h4 className="font-bold text-xs md:text-sm text-primary">{item.name}</h4>
        <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-accent font-bold">{item.role}</p>
      </div>
    </div>
  </div>
);

const AutoTestimonials: React.FC = () => {
  const duplicatedList = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-16 md:py-24 bg-surface overflow-hidden">
      <div className="container mx-auto px-6 mb-12 md:mb-20">
        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 items-end">
          <div className="lg:col-span-8">
            <h2 className="text-xs md:text-sm font-bold tracking-[0.2em] md:tracking-[0.3em] text-accent uppercase mb-3 md:mb-4">Testimonials</h2>
            <h3 className="text-3xl md:text-6xl font-black text-primary leading-tight md:leading-none tracking-tighter">
              Hyderabad’s First Choice <br />
              <span className="text-accent">For Deep Cleaning.</span>
            </h3>
          </div>
          <div className="lg:col-span-4 lg:border-l lg:border-slate-200 lg:pl-8 pb-2">
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Sri Balaji Services: trusted hygiene partner across the Twin Cities.
            </p>
          </div>
        </div>
      </div>

      <div className="relative flex">
        {/* Adjusted padding for mobile */}
        <div className="flex gap-6 md:gap-10 animate-testimonial-flow hover:[animation-play-state:paused] py-4 md:py-10 px-6">
          {duplicatedList.map((item, index) => (
            <TestimonialCard key={index} item={item} />
          ))}
        </div>

        {/* Edge blurs - hidden on very small screens or narrowed */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-surface to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-surface to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default AutoTestimonials;