import React, { useState } from 'react';
import LeadModal from '../pages/LeadModal';

const steps = [
  {
    num: "01",
    title: "Dewatering",
    desc: "We use high-capacity submersible pumps to empty the tank quickly without wasting time."
  },
  {
    num: "02",
    title: "Sludge Removal",
    desc: "Specialized sludge pumps remove the thick layers of mud and silt settled at the bottom."
  },
  {
    num: "03",
    title: "High-Pressure Jetting",
    desc: "Walls and ceilings are blasted with high-pressure jets to peel off algae and biofilm."
  },
  {
    num: "04",
    title: "Vacuum Cleaning",
    desc: "An industrial vacuum removes every last speck of dirt and contaminated water particles."
  },
  {
    num: "05",
    title: "Antibacterial Spray",
    desc: "Application of a 100% safe, food-grade antibacterial agent to sterilize all surfaces."
  },
  {
    num: "06",
    title: "UV Radiation",
    desc: "A final pass with a UV Germicidal lamp kills 99.9% of remaining bacteria and viruses."
  }
];

const WaterTankProcess: React.FC = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Updated Section Header - Matching your Services style */}
        <div className="grid lg:grid-cols-12 gap-8 mb-24 items-end">
          <div className="lg:col-span-8">
            <h2 className="text-sm font-bold tracking-[0.3em] text-accent uppercase mb-4">
              The Standard of Purity
            </h2>
            <h3 className="text-4xl md:text-6xl font-black text-primary leading-[1.1] tracking-tighter">
              Our 6-Step <span className=" text-accent">Scientific</span> <br /> 
              Sanitization Process
            </h3>
          </div>
          <div className="lg:col-span-4 border-l border-slate-200 pl-8 pb-2">
            <p className="text-slate-500 text-base leading-relaxed max-w-sm">
              Manual cleaning often leaves 40% of bacteria behind. Our mechanized process ensures 100% hygiene for your family.
            </p>
          </div>
        </div>

        {/* Steps Grid - Modern List Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-1">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="group flex gap-8 p-10 border-b border-slate-100 hover:bg-slate-50 transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <span className="text-5xl font-black text-slate-200 group-hover:text-accent transition-colors duration-500 leading-none">
                  {step.num}
                </span>
              </div>
              
              <div className="pt-2">
                <h4 className="text-xl font-bold text-primary mb-3 group-hover:translate-x-1 transition-transform">
                  {step.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed max-w-md">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 relative overflow-hidden rounded-[2.5rem] bg-primary p-12 md:p-16">
          {/* Subtle Background Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-20 -mt-20 blur-3xl" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-6">
                 <div className="h-[2px] w-8 bg-accent"></div>
                 <span className="text-accent text-xs font-bold uppercase tracking-widest">HydClean Promise</span>
              </div>
              <h4 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                "We clean your tank like we're cleaning our own."
              </h4>
              <p className="text-white/60 text-lg italic">
                Transparent pricing. Certified professionals. No hidden mess.
              </p>
            </div>
            
            <button onClick={() => setIsModalOpen(true)} className="group relative bg-accent text-primary px-10 py-2 sm:py-6 rounded-2xl font-black text-[12px] sm:text-sm  tracking-widest hover:bg-white transition-all shadow-xl hover:-translate-y-1">
              Book Free Inspection
              <span className="ml-3 inline-block transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>

      </div>
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default WaterTankProcess;