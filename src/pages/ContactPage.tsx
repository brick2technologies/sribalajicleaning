import React from 'react';
import SEO from '../comnponents/SEO'; // Importing the SEO engine

const ContactPage: React.FC = () => {
  const localities = [
    "Jubilee Hills", "Banjara Hills", "Hitech City", "Gachibowli", 
    "Kondapur", "Madhapur", "Manikonda", "Tellapur", "Kokapet", "Other"
  ];

  const services = [
    "Water Tank / Sump", "Villa Deep Clean", "Office Sanitization", 
    "Kitchen Degreasing", "Sofa / Carpet", "Other"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Your submission logic here
  };

  return (
    <>
      {/* 1. SEO ENGINE: Optimized for Local Hyderabad Intent */}
      <SEO 
        title="Contact Us & Get a Quote"
        description="Book a professional deep cleaning inspection in Hyderabad. Serving Jubilee Hills, Gachibowli, Hitech City, and Manikonda. Response within 15 minutes."
        path="/contact"
      />

      <main className="pt-24 md:pt-40 pb-16 md:pb-32 bg-surface min-h-screen overflow-hidden">
        <div className="container mx-auto px-6">
          
          {/* 2. HEADER: Optimized for Search Engine Reading */}
          <header className="max-w-4xl mb-12 md:mb-24">
            <h2 className="text-[10px] md:text-sm font-bold tracking-[0.3em] md:tracking-[0.4em] text-accent uppercase mb-4 md:mb-6">
              Get a Free Inspection Quote
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-black text-primary tracking-tighter leading-[1.1] md:leading-[0.9] mb-6 md:mb-10">
              Let’s Restore <br />
              <span className="text-accent text-2xl sm:text-3xl md:text-7xl">Your Space in Hyderabad.</span>
            </h1>
            <p className="text-slate-500 text-base md:text-xl max-w-xl leading-relaxed">
              From high-rise apartments in Hitech City to independent villas in Jubilee Hills, we provide 24-hour turnaround on all cleaning inspections.
            </p>
          </header>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* 3. THE BOOKING FORM: Accessible & Performance-Minded */}
            <section className="lg:col-span-7 order-2 lg:order-1" aria-labelledby="form-title">
              <h3 id="form-title" className="sr-only">Service Inquiry Form</h3>
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                  <div className="group">
                    <label htmlFor="full-name" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 group-focus-within:text-accent transition-colors">Full Name</label>
                    <input 
                      id="full-name"
                      name="name"
                      type="text" 
                      required
                      autoComplete="name"
                      placeholder="Enter your name"
                      className="w-full bg-slate-50 border-b-2 border-slate-100 py-3 md:py-4 px-2 focus:border-accent outline-none text-primary font-bold transition-all placeholder:text-slate-300 text-sm md:text-base"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="phone" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 group-focus-within:text-accent transition-colors">Phone Number</label>
                    <input 
                      id="phone"
                      name="phone"
                      type="tel" 
                      required
                      autoComplete="tel"
                      placeholder="+91 00000 00000"
                      className="w-full bg-slate-50 border-b-2 border-slate-100 py-3 md:py-4 px-2 focus:border-accent outline-none text-primary font-bold transition-all placeholder:text-slate-300 text-sm md:text-base"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                  <div className="group relative">
                    <label htmlFor="locality" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 group-focus-within:text-accent transition-colors">Your Locality</label>
                    <select id="locality" name="locality" required className="w-full bg-slate-50 border-b-2 border-slate-100 py-3 md:py-4 px-2 focus:border-accent outline-none text-primary font-bold appearance-none transition-all cursor-pointer text-sm md:text-base">
                      <option value="">Select Location</option>
                      {localities.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                    </select>
                    <div className="absolute right-2 bottom-4 pointer-events-none text-slate-300 group-focus-within:text-accent">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                  <div className="group relative">
                    <label htmlFor="service" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 group-focus-within:text-accent transition-colors">Required Service</label>
                    <select id="service" name="service" required className="w-full bg-slate-50 border-b-2 border-slate-100 py-3 md:py-4 px-2 focus:border-accent outline-none text-primary font-bold appearance-none transition-all cursor-pointer text-sm md:text-base">
                      <option value="">Select Service</option>
                      {services.map(ser => <option key={ser} value={ser}>{ser}</option>)}
                    </select>
                    <div className="absolute right-2 bottom-4 pointer-events-none text-slate-300 group-focus-within:text-accent">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="details" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 group-focus-within:text-accent transition-colors">Additional Details</label>
                  <textarea 
                    id="details"
                    name="details"
                    rows={4} 
                    placeholder="Tell us about the size of the tank or type of property..."
                    className="w-full bg-slate-50 border-b-2 border-slate-100 py-3 md:py-4 px-2 focus:border-accent outline-none text-primary font-bold transition-all placeholder:text-slate-300 resize-none text-sm md:text-base"
                  ></textarea>
                </div>

                <button type="submit" className="w-full py-5 md:py-6 bg-primary text-white rounded-xl md:rounded-2xl font-black uppercase text-[10px] md:text-xs tracking-[0.3em] hover:bg-accent hover:text-primary transition-all shadow-xl shadow-primary/20 active:scale-[0.98]">
                  Submit Inquiry
                </button>
              </form>
            </section>

            {/* 4. CONTACT SIDEBAR: Local SEO Anchors */}
            <aside className="lg:col-span-5 order-1 lg:order-2 space-y-6 md:space-y-16" aria-label="Direct Contact Details">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 md:gap-4">
                <a href="tel:+918074844043" className="flex items-center lg:items-start gap-5 p-3 rounded-3xl bg-slate-50 border border-slate-100 group hover:border-accent transition-colors">
                  <div className="w-12 h-12 flex-shrink-0 bg-accent/10 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Call Support</p>
                    <p className="text-lg md:text-xl font-black text-primary">+91 80748 44043</p>
                  </div>
                </a>

                <a href="mailto:support@sribalajicleaning.com" className="flex items-center lg:items-start gap-5 p-3 rounded-3xl bg-slate-50 border border-slate-100 group hover:border-accent transition-colors">
                  <div className="w-12 h-12 flex-shrink-0 bg-accent/10 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Email Us</p>
                    <p className="text-base md:text-xl font-black text-primary truncate">support@sribalajicleaning.com</p>
                  </div>
                </a>
              </div>

              {/* Map Section */}
              <section className="rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-slate-100 aspect-[16/9] md:aspect-[21/9] lg:aspect-[21/10] relative group border border-slate-200 shadow-inner" aria-label="Our Hyderabad Location">
                
                <iframe
                  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_LINK_HERE"
                  width="100%"
                  height="100%"
                  title="Sri Balaji Deep Cleaning Services Headquarters Location"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-accent/5 mix-blend-multiply group-hover:opacity-0 pointer-events-none transition-opacity duration-500"></div>

                <div className="absolute bottom-3 left-3 right-3 md:bottom-6 md:left-6 md:w-fit p-3 md:p-5 bg-white/90 backdrop-blur-md rounded-xl md:rounded-2xl shadow-xl border border-white/20 transition-transform duration-500 group-hover:translate-y-[-5px]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-widest text-accent mb-0.5">Corporate HQs</p>
                      <address className="text-[11px] md:text-xs font-bold text-primary leading-tight not-italic">
                        Plot 82, Phase 2, Vinayaka Hills, <br /> B N Reddy, Hyderabad - 500078
                      </address>
                    </div>
                  </div>
                </div>
              </section>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactPage;