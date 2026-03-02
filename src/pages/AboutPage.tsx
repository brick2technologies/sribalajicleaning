import React, { useState } from 'react';
import LeadModal from './LeadModal';
import SEO from '../components/SEO';

const AboutPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <SEO
        title="Vision, Mission & Our Cleaning Standards"
        description="Discover the mission behind Sri Balaji Deep Cleaning Services. We aim to redefine hygiene in Hyderabad through mechanized technology and 100% bacteria-free water solutions."
        path="/about"
      />

      <main className="pt-24 md:pt-32 pb-16 md:pb-24 bg-surface min-h-screen">
        <div className="container mx-auto px-6">

          {/* 1. HERO: MISSION STATEMENT */}
          <header className="max-w-5xl mb-16 md:mb-32">
            <h2 className="text-[10px] md:text-sm font-bold tracking-[0.3em] md:tracking-[0.4em] text-accent uppercase mb-4 md:mb-6">Established 2019</h2>
            <h1 className="text-4xl md:text-8xl font-black text-primary tracking-tighter leading-[1.1] md:leading-[0.9] mb-8 md:mb-10">
              The Science of <br />
              <span className="text-accent text-2xl md:text-7xl">Pure Living.</span>
            </h1>
          </header>

          {/* 2. THE FOUNDER: PERSONAL TOUCH */}
          <section className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center mb-24 md:mb-48" aria-labelledby="founder-heading">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative aspect-[4/5] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden bg-slate-100 shadow-xl md:shadow-2xl">
                <img
                  src='/founder.png'
                  alt="D. Shivaji Naik - Founder of Sri Balaji Deep Cleaning Services"
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
                "I started <span className='text-accent text-3xl md:text-4xl'>Sri Balaji Deep Cleaning Services</span> because I saw how traditional manual cleaning was failing Hyderabad's households."
              </p>
              <div className="text-slate-500 text-base md:text-lg leading-relaxed space-y-4">
                <p>
                  Depavath Shivaji Naik founded this company with a single specialized machine and a stubborn commitment to quality. He realized that water-borne diseases were often traced back to poorly maintained sumps and tanks that manual labor simply couldn't scrub clean.
                </p>
                <p>
                  By integrating <strong>German high-pressure technology</strong> and <strong>UV-C sterilization</strong>, Shivaji transformed cleaning from a chore into a science. Today, he personally oversees the training of every technician across Hyderabad.
                </p>
              </div>
            </div>
          </section>

          {/* 3. NEW: VISION & MISSION SECTION */}
          <section className="mb-24 md:mb-48">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20">
              <div className="p-8 md:p-12 bg-white rounded-[3rem] shadow-sm border border-slate-50">
                {/* <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 font-black text-xl">V</div> */}
                <h3 className="text-2xl md:text-4xl font-black text-primary mb-6 tracking-tighter">Our Vision</h3>
                <p className="text-slate-500 leading-relaxed md:text-lg font-medium">
                  To become the definitive benchmark for hygiene in India by replacing outdated manual cleaning methods with scientific, mechanized, and eco-friendly technology that guarantees a disease-free environment.
                </p>
              </div>
              <div className="p-8 md:p-12 bg-primary text-white rounded-[3rem] shadow-xl">
                {/* <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-primary mb-6 font-black text-xl">M</div> */}
                <h3 className="text-2xl md:text-4xl font-black mb-6 tracking-tighter">Our Mission</h3>
                <ul className="space-y-4 text-white/80 md:text-lg font-medium">
                  <li className="flex gap-3">
                    <span className="text-accent">✓</span>
                    To deliver 100% bacteria-free water storage solutions to 10,000+ Hyderabad homes by 2027.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent">✓</span>
                    To utilize FSSAI-approved, non-toxic chemicals for the safety of children and pets.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 4. NEW: CORE VALUES GRID */}
          <section className="mb-24 md:mb-48">
            <div className="text-center mb-16">
              <h2 className="text-[10px] md:text-xs font-black text-accent uppercase tracking-widest mb-4">Why Trust Us</h2>
              <h3 className="text-3xl md:text-6xl font-black text-primary tracking-tighter">Core Values</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Transparency", desc: "Before and after footage for every single job." },
                { title: "Precision", desc: "No corner left untouched with German machinery." },
                { title: "Hygiene", desc: "UV-C Sterilization as a standard protocol." },
                { title: "Integrity", desc: "No hidden costs. Just pure, clean results." }
              ].map((val, idx) => (
                <div key={idx} className="bg-slate-50/50 p-8 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-500">
                  <p className="text-accent font-black text-sm mb-2">0{idx + 1}</p>
                  <h4 className="text-xl font-black text-primary mb-3 uppercase tracking-tighter">{val.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 5. CALL TO ACTION */}
          <footer className="bg-primary p-10 md:p-24 rounded-[2.5rem] md:rounded-[3rem] text-center relative overflow-hidden mt-20 md:mt-32">
            <h4 className="text-2xl md:text-6xl font-black text-white tracking-tighter mb-8 md:mb-10 leading-tight">Experience the <br /><span className="text-accent">Balaji Standard.</span></h4>
            <button
              onClick={() => setIsModalOpen(true)}
              aria-label="Open booking modal to schedule a deep cleaning"
              className="w-full md:w-auto bg-accent text-primary px-10 py-5 rounded-xl md:rounded-2xl font-black uppercase text-[10px] md:text-xs tracking-widest hover:bg-white transition-all shadow-xl active:scale-95"
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