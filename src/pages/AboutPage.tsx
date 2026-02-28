import React, { useState } from 'react';
import LeadModal from './LeadModal';

const AboutPage: React.FC = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <main className="pt-24 md:pt-32 pb-16 md:pb-24 bg-surface min-h-screen">
      <div className="container mx-auto px-6">

        {/* 1. HERO: MISSION STATEMENT - Adjusted for mobile line-height */}
        <div className="max-w-5xl mb-16 md:mb-32">
          <h2 className="text-[10px] md:text-sm font-bold tracking-[0.3em] md:tracking-[0.4em] text-accent uppercase mb-4 md:mb-6">Established 2019</h2>
          <h1 className="text-4xl md:text-8xl font-black text-primary tracking-tighter leading-[1.1] md:leading-[0.9] mb-8 md:mb-10">
            The Science of <br />
            <span className="text-accent text-2xl md:text-7xl">Pure Living.</span>
          </h1>
        </div>

        {/* 2. THE FOUNDER: PERSONAL TOUCH - Swapped order for mobile context */}
        <section className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center mb-24 md:mb-48">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[4/5] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden bg-slate-100 shadow-xl md:shadow-2xl">
              {/* Founder Image */}
              <img src='/founder.png' className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"/>
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white">
                <p className="font-black text-xl md:text-2xl tracking-tighter">D. Shivaji Naik</p>
                <p className="text-[10px] md:text-xs uppercase tracking-widest opacity-80">OWNER</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 lg:pl-12 order-1 lg:order-2">
            <h3 className="text-[10px] md:text-sm font-black text-accent uppercase tracking-widest mb-4 md:mb-6 underline decoration-2 underline-offset-8">Founder's Note</h3>
            <p className="text-xl md:text-2xl font-bold text-primary tracking-tight leading-tight mb-6 md:mb-8">
              "I started <span className='text-accent text-4xl'>Sri Balaji Deep Cleaning Services</span>  because I saw how manual cleaning was failing Hyderabad's health. We brought in technology to change that."
            </p>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed">
              Depavath Shivaji Naik founded this company with a single machine and a vision: to provide 100% bacteria-free water storage. Today, he leads a team of 50+ specialists, personally overseeing the training of every technician.
            </p>
          </div>
        </section>

        {/* 3. MACHINERY: THE TECH STACK - Vertical stack for mobile */}
        <section className="mb-24 md:mb-48">


          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-[10px] md:text-xs font-black text-accent uppercase tracking-widest mb-3 md:mb-4">
                Our Arsenal
              </h2>
              <h3 className="text-3xl md:text-6xl font-black text-primary tracking-tighter">
                Precision Machinery.
              </h3>
            </div>
            <div className="hidden md:block text-slate-400 text-sm max-w-xs uppercase font-bold tracking-widest leading-loose border-l border-slate-200 pl-6">
              German Engineering • 6-Step Sanitization • Industrial Strength
            </div>
          </div>

          {/* The Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                name: "High-Pressure Jet",
                desc: "150-bar German technology to peel off stubborn biofilm and calcification.",
                tag: "Jetting",
                image: "/jet-pump.webp" // Replace with actual image path
              },
              {
                name: "Sludge Pump",
                desc: "Industrial dewatering pumps handling 200L of mud and silt per minute.",
                tag: "Extraction",
                image: "/sludge-pump.webp"
              },
              {
                name: "UV-C Sterilizer",
                desc: "Medical-grade UV radiation for 99.9% elimination of water-borne bacteria.",
                tag: "Sterilize",
                image: "/uv-sterilizer.webp"
              }
            ].map((machine, i) => (
              <div key={i} className="group relative bg-white rounded-[2rem] p-3 md:p-5 border border-slate-100 hover:border-accent transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl">

                {/* Card Layout: Row on Mobile, Column on Desktop */}
                <div className="flex flex-row md:flex-col gap-4 md:gap-6 items-center md:items-start">

                  {/* Image/Icon Container */}
                  <div className="w-24 h-24 md:w-full aspect-square bg-slate-50 rounded-2xl md:rounded-[1.5rem] overflow-hidden relative flex-shrink-0">
                    {/* Visual Background Decoration */}
                    <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                      <svg className="w-full h-full" viewBox="0 0 100 100" fill="currentColor">
                        <pattern id={`pattern-${i}`} width="10" height="10" patternUnits="userSpaceOnUse">
                          <circle cx="2" cy="2" r="1" />
                        </pattern>
                        <rect width="100" height="100" fill={`url(#pattern-${i})`} />
                      </svg>
                    </div>

                    {/* Placeholder for actual image - [Image of high pressure water jet cleaning machine] */}
                    <img
                      src={machine.image}
                      alt={machine.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 mix-blend-multiply grayscale hover:grayscale-0"
                    />

                    {/* Category Tag (Desktop Only) */}
                    <div className="hidden md:block absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest text-accent">
                        {machine.tag}
                      </span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 md:px-2 pb-2">
                    <div className="flex justify-between items-center mb-1 md:mb-3">
                      <h4 className="font-black text-sm md:text-2xl text-primary uppercase tracking-tight group-hover:text-accent transition-colors">
                        {machine.name}
                      </h4>
                      <svg className="hidden md:block w-5 h-5 text-slate-200 group-hover:text-accent group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                    <p className="text-slate-400 text-[11px] md:text-sm leading-relaxed md:leading-6">
                      {machine.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. VIDEO GRID: STAFF IN ACTION - Better mobile spacing */}
        <section className="mb-24">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[10px] md:text-xs font-black text-accent uppercase tracking-widest mb-3 md:mb-4">Live From The Field</h2>
            <h3 className="text-2xl md:text-5xl font-black text-primary tracking-tighter">See Us In Action.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Main Feature Video */}
            <div className="relative aspect-video md:aspect-auto md:h-[700px] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-primary shadow-lg md:shadow-2xl group">
              <video
                autoPlay muted loop playsInline
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

            {/* Smaller Video Clips */}
            <div className="grid grid-cols-1 gap-4 md:gap-8">
              <div className="relative aspect-[16/7] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-slate-200 group">
                <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                  <source src="/video3.mp4" type="video/mp4" />
                </video>
                <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/40 backdrop-blur-md px-3 py-1 md:px-4 md:py-2 rounded-full text-[8px] md:text-[10px] font-black uppercase text-white tracking-widest">Jetting Power</div>
              </div>
              <div className="relative aspect-[16/7] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-slate-200 group">
                <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                  <source src="/flat.mp4" type="video/mp4" />
                </video>
                <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/40 backdrop-blur-md px-3 py-1 md:px-4 md:py-2 rounded-full text-[8px] md:text-[10px] font-black uppercase text-white tracking-widest">UV Sterilization</div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. CALL TO ACTION - Mobile height adjustment */}
        <div className="bg-primary p-10 md:p-24 rounded-[2.5rem] md:rounded-[3rem] text-center relative overflow-hidden mt-20 md:mt-32">
          <h4 className="text-2xl md:text-6xl font-black text-white tracking-tighter mb-8 md:mb-10 leading-tight">Experience the <br /><span className="text-accent ">Balaji Standard.</span></h4>
          <button onClick={() => setIsModalOpen(true)} className="w-full md:w-auto bg-accent text-primary px-10 py-5 rounded-xl md:rounded-2xl font-black uppercase text-[10px] md:text-xs tracking-widest hover:bg-white transition-all shadow-xl">
            Meet the team & Book
          </button>
        </div>

      </div>
      <LeadModal  isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
};

export default AboutPage;