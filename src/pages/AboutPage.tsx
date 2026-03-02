import React, { useState } from 'react';
import LeadModal from './LeadModal';
import SEO from '../comnponents/SEO'; // Import the SEO component

const AboutPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* 1. SEO TAGS: Tailored for Brand Authority and Founder Profile */}
      <SEO 
        title="About Our Founder & Professional Cleaning Mission"
        description="Learn about D. Shivaji Naik and the mission behind Sri Balaji Deep Cleaning Services. Hyderabad's leaders in mechanized 6-step water tank cleaning technology."
        path="/about"
      />

      <main className="pt-24 md:pt-32 pb-16 md:pb-24 bg-surface min-h-screen">
        <div className="container mx-auto px-6">

          {/* 2. HERO: MISSION STATEMENT */}
          <header className="max-w-5xl mb-16 md:mb-32">
            <h2 className="text-[10px] md:text-sm font-bold tracking-[0.3em] md:tracking-[0.4em] text-accent uppercase mb-4 md:mb-6">Established 2019</h2>
            <h1 className="text-4xl md:text-8xl font-black text-primary tracking-tighter leading-[1.1] md:leading-[0.9] mb-8 md:mb-10">
              The Science of <br />
              <span className="text-accent text-2xl md:text-7xl">Pure Living.</span>
            </h1>
          </header>

          {/* 3. THE FOUNDER: PERSONAL TOUCH */}
          <section className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center mb-24 md:mb-48" aria-labelledby="founder-heading">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative aspect-[4/5] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden bg-slate-100 shadow-xl md:shadow-2xl">
                <img 
                  src='/founder.png' 
                  alt="D. Shivaji Naik - Founder of Sri Balaji Deep Cleaning Services Hyderabad"
                  loading="eager"
                  className="absolute inset-0 w-full h-full object-cover bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" 
                />
                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white">
                  <p className="font-black text-xl md:text-2xl tracking-tighter">D. Shivaji Naik</p>
                  <p className="text-[10px] md:text-xs uppercase tracking-widest opacity-80">OWNER & VISIONARY</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 lg:pl-12 order-1 lg:order-2">
              <h3 id="founder-heading" className="text-[10px] md:text-sm font-black text-accent uppercase tracking-widest mb-4 md:mb-6 underline decoration-2 underline-offset-8">Founder's Note</h3>
              <p className="text-xl md:text-2xl font-bold text-primary tracking-tight leading-tight mb-6 md:mb-8 italic">
                "I started <span className='text-accent text-3xl md:text-4xl'>Sri Balaji Deep Cleaning Services</span> because I saw how traditional manual cleaning was failing Hyderabad's households. We didn't just need workers; we needed an industrial-grade revolution in hygiene."
              </p>
              <div className="text-slate-500 text-base md:text-lg leading-relaxed space-y-4">
                <p>
                  Depavath Shivaji Naik founded this company with a single specialized machine and a stubborn commitment to quality. He realized that water-borne diseases were often traced back to poorly maintained sumps and tanks that manual labor simply couldn't scrub clean.
                </p>
                <p>
                  By integrating <strong>German high-pressure technology</strong> and <strong>UV-C sterilization</strong>, Shivaji transformed cleaning from a chore into a science. Today, he personally oversees the training of every technician, ensuring the "Balaji Standard"—a rigorous 6-step protocol—is executed perfectly on every site across Hyderabad. Our mission remains unchanged: 100% bacteria-free living for every family.
                </p>
              </div>
            </div>
          </section>

          {/* 4. MACHINERY: THE TECH STACK */}
          <section className="mb-24 md:mb-48" aria-labelledby="machinery-heading">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-[10px] md:text-xs font-black text-accent uppercase tracking-widest mb-3 md:mb-4">
                  Our Arsenal
                </h2>
                <h3 id="machinery-heading" className="text-3xl md:text-6xl font-black text-primary tracking-tighter">
                  Precision Machinery.
                </h3>
              </div>
              <div className="hidden md:block text-slate-400 text-sm max-w-xs uppercase font-bold tracking-widest leading-loose border-l border-slate-200 pl-6">
                German Engineering • 6-Step Sanitization • Industrial Strength
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              {[
                {
                  name: "High-Pressure Jet",
                  desc: "150-bar industrial jetting system designed to remove stubborn dirt, biofilm, grease, and calcification.",
                  tag: "Jet Cleaning",
                  image: "/machine3.webp"
                },
                {
                  name: "Rotary Broom",
                  desc: "Heavy-duty rotary sweeping machine ideal for removing dust, debris, and loose particles from large surfaces.",
                  tag: "Surface Sweeping",
                  image: "/machine1.jpg"
                },
                {
                  name: "Floor Cleaning Machine",
                  desc: "Advanced floor cleaning system with water spray and suction for deep cleaning and quick drying.",
                  tag: "Floor Care",
                  image: "/machine2.jpg"
                },
                {
                  name: "Vacuum Machine",
                  desc: "High-power industrial vacuum designed to extract dust, sludge, and wastewater efficiently.",
                  tag: "Dust Extraction",
                  image: "/machine3.jpg"
                },
                {
                  name: "Scrubbing Machine",
                  desc: "Professional scrubbing equipment for deep stain removal and polished surface finishing.",
                  tag: "Deep Scrubbing",
                  image: "/machine5.webp"
                },
              ].map((machine, i) => (
                <article key={i} className="group relative bg-white rounded-[2rem] p-3 md:p-5 border border-slate-100 hover:border-accent transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl">
                  <div className="flex flex-row md:flex-col gap-4 md:gap-6 items-center md:items-start">
                    <div className="w-24 h-24 md:w-full md:h-48 bg-slate-50 rounded-2xl md:rounded-[1.5rem] overflow-hidden relative flex-shrink-0">
                      <img
                        src={machine.image}
                        alt={`${machine.name} industrial cleaning equipment`}
                        loading="lazy"
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 mix-blend-multiply grayscale hover:grayscale-0"
                      />
                      <div className="hidden md:block absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest text-accent">
                          {machine.tag}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 md:px-2 pb-2">
                      <div className="flex justify-between items-center mb-1 md:mb-3">
                        <h4 className="font-black text-sm md:text-2xl text-primary uppercase tracking-tight group-hover:text-accent transition-colors">
                          {machine.name}
                        </h4>
                        <span className="sr-only">View {machine.name} details</span>
                      </div>
                      <p className="text-slate-400 text-xs leading-relaxed hidden md:block">{machine.desc}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* 5. VIDEO GRID: STAFF IN ACTION */}
          <section className="mb-24" aria-labelledby="video-heading">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-[10px] md:text-xs font-black text-accent uppercase tracking-widest mb-3 md:mb-4">Live From The Field</h2>
              <h3 id="video-heading" className="text-2xl md:text-5xl font-black text-primary tracking-tighter">See Us In Action.</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="relative aspect-video md:aspect-auto md:h-[700px] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-primary shadow-lg md:shadow-2xl group">
                <video
                  autoPlay muted loop playsInline
                  aria-label="Video showing the 6-step deep cleaning process at a residential site"
                  className="w-full h-full object-cover opacity-60"
                >
                  <source src="/housecleaning.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 text-white bg-gradient-to-t from-primary/80 to-transparent">
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-2 md:mb-4 text-accent">Feature Film</p>
                  <h4 className="text-xl md:text-4xl font-black tracking-tighter mb-2 md:mb-4">Behind the 6-Step Process</h4>
                  <p className="text-white/60 text-xs md:text-base max-w-sm">Watch our certified technicians transform a contaminated 50,000L sump.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:gap-8">
                <div className="relative aspect-[16/7] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-slate-200 group">
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover" aria-label="Jetting power cleaning demonstration">
                    <source src="/video3.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/40 backdrop-blur-md px-3 py-1 md:px-4 md:py-2 rounded-full text-[8px] md:text-[10px] font-black uppercase text-white tracking-widest">Jetting Power</div>
                </div>
                <div className="relative aspect-[16/7] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-slate-200 group">
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover" aria-label="UV sterilization hygiene demonstration">
                    <source src="/flat.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/40 backdrop-blur-md px-3 py-1 md:px-4 md:py-2 rounded-full text-[8px] md:text-[10px] font-black uppercase text-white tracking-widest">UV Sterilization</div>
                </div>
              </div>
            </div>
          </section>

          {/* 6. CALL TO ACTION */}
          <footer className="bg-primary p-10 md:p-24 rounded-[2.5rem] md:rounded-[3rem] text-center relative overflow-hidden mt-20 md:mt-32">
            <h4 className="text-2xl md:text-6xl font-black text-white tracking-tighter mb-8 md:mb-10 leading-tight">Experience the <br /><span className="text-accent">Balaji Standard.</span></h4>
            <button 
              onClick={() => setIsModalOpen(true)} 
              aria-label="Open booking modal to schedule a deep cleaning"
              className="w-full md:w-auto bg-accent text-primary px-10 py-5 rounded-xl md:rounded-2xl font-black uppercase text-[10px] md:text-xs tracking-widest hover:bg-white transition-all shadow-xl"
            >
              Meet the team & Book
            </button>
          </footer>

        </div>
        <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </main>
    </>
  );
};

export default AboutPage;