import React from 'react';

const row1 = [
  "Jubilee Hills", "Banjara Hills", "Hitech City", "Gachibowli", 
  "Madhapur", "Kondapur", "Manikonda", "Tellapur"
];

const row2 = [
  "Water Tank Sanitization", "Sump Deep Clean", "Villa Maintenance", 
  "Kitchen Degreasing", "Office Hygiene", "Hospital Grade Cleaning"
];

const ScrollingRow = ({ items, direction }: { items: string[], direction: 'left' | 'right' }) => {
  const animationClass = direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right';
  
  // Triplicate for a perfect loop even on wide tablets
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="flex overflow-hidden select-none py-2 md:py-4 bg-surface">
      <div className={`flex flex-nowrap min-w-full gap-4 md:gap-8 ${animationClass} hover:[animation-play-state:paused] cursor-pointer`}>
        {duplicatedItems.map((item, index) => (
          <div 
            key={index} 
            className="whitespace-nowrap px-5 py-2 md:px-8 md:py-3 rounded-full border border-slate-200 text-[10px] md:text-sm font-bold uppercase tracking-widest text-primary bg-surface shadow-sm hover:border-accent hover:text-accent transition-colors"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

const InfinityFlow: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-surface border-none overflow-hidden">
      <div className="container mx-auto px-6 mb-8 md:mb-10 text-center">
        <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-accent">
          Serving All Major Localities & Specialized Services
        </h2>
      </div>

      <div className="flex flex-col gap-1 md:gap-2">
        <ScrollingRow items={row1} direction="left" />
        <ScrollingRow items={row2} direction="right" />
      </div>
    </section>
  );
};

export default InfinityFlow;