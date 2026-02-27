import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Water Tank Sanitization",
    "Sump Deep Cleaning",
    "Villa Deep Cleaning",
    "Kitchen Degreasing",
    "Office Sanitization",
    "Hospital Grade Cleaning"
  ];

  const localities = [
    "Jubilee Hills", "Banjara Hills", "Hitech City", "Gachibowli",
    "Manikonda", "Kondapur", "Madhapur", "Tellapur", "Kokapet", "Financial District"
  ];

  return (
    <footer className="bg-[#0a0a0a] text-white pt-16 md:pt-24 pb-10">
      <div className="container mx-auto px-6">

        {/* Top Section: Brand & Action */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-16 mb-16 md:mb-24">

          {/* Brand Info - Centered on mobile, Left on desktop */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl">
            <img
              src="/logo.webp"
              alt="Sri Balaji Deep Cleaning Services"
              className="h-12 md:h-16 w-auto mb-6 object-contain brightness-0 invert"
            />
            <div className="max-w-md">
              <p className="text-white/60 text-base md:text-lg leading-relaxed tracking-tight">
                Elevating the hygiene standards of Hyderabad through
                <span className="text-accent font-medium"> scientific mechanized cleaning</span> and certified expertise.
              </p>
            </div>
            {/* Divider - visible only when centered (mobile) */}
            <div className="w-12 h-[1px] bg-accent/30 mt-8 lg:hidden"></div>
          </div>

          {/* Contact Action - Centered on mobile, Right on desktop */}
          <div className="flex flex-col items-center lg:items-end gap-4 md:gap-6 w-full lg:w-auto">
            <span className="text-accent text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">
              Ready to sanitize?
            </span>
            <a
              href="tel:+919876543210"
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter hover:text-accent transition-colors break-words"
            >

              +91 80748 44043
            </a>
          </div>
        </div>

        <hr className="border-white/5 mb-16 md:mb-20" />

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-y-12 gap-x-8 mb-16 md:mb-20">

          {/* Services */}
          <div className="lg:col-span-4">
            <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] mb-6 md:mb-10 text-accent">
              Specialized Services
            </h4>
            <ul className="space-y-4">
              {services.map(item => (
                <li key={item} className="text-white/40 hover:text-white text-sm transition-colors cursor-pointer flex items-center gap-3 group">
                  <span className="w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="lg:col-span-5">
            <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] mb-6 md:mb-10 text-accent">
              Service Network
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-4">
              {localities.map(item => (
                <li key={item} className="text-white/40 hover:text-white text-[13px] md:text-sm transition-colors cursor-pointer flex items-center gap-2">
                  <span className="text-[8px] text-accent">●</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] mb-6 md:mb-10 text-accent">
              The Office
            </h4>
            <div className="space-y-6 md:space-y-8">
              <div className="group">
                <p className="text-white/30 text-[10px] uppercase font-bold mb-2">Location</p>
                <p className="text-white/60 text-sm group-hover:text-white transition-colors">
                  Plotno: 82 phase 2 Vinayaka Hills B N reddy <br />Hyderabad, TS 500089
                </p>
              </div>
              <div className="group">
                <p className="text-white/30 text-[10px] uppercase font-bold mb-2">Inquiries</p>
                <p className="text-white/60 text-sm group-hover:text-white transition-colors break-all">
                  support@sribalajicleaning.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">
            <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/20">
              © {currentYear} SRI BALAJI DEEP CLEANING SERVICES
            </p>
            <div className="h-4 w-px bg-white/5 hidden md:block" />
            <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/20">
              Design By <a href="https://brick2tech.com" className='text-accent'>Brick2Tech</a>
            </p>
          </div>

          <div className="flex gap-6 md:gap-10">
            {['Instagram', 'LinkedIn', 'Facebook'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 hover:text-accent transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;