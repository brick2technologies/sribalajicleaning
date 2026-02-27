import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Water Tank', 'Villas', 'Commercial', 'About'];

  return (
    <div className={`fixed top-0 w-full z-50 transition-all duration-500 px-4 md:px-10 ${isScrolled ? 'pt-4' : 'pt-6'}`}>

      <header
        className={`max-w-7xl mx-auto transition-all duration-500 rounded-[22px] md:rounded-full font-sans overflow-hidden
        ${isScrolled || isMobileMenuOpen
            ? 'bg-white/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-white/20 py-2.5'
            : 'bg-transparent py-2'}`}
      >
        <div className="px-4 md:px-8 flex justify-between items-center relative">

          {/* MOBILE: LEFT MENU / DESKTOP: LEFT LOGO */}
          <div className="flex-1 md:flex-none">
            {/* Hamburger (Mobile Only) */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-primary/5 text-primary active:scale-90 transition-transform"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-5 h-3.5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-primary rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`w-3/4 h-0.5 bg-primary rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`w-full h-0.5 bg-primary rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>

            {/* Desktop Logo (Hidden on Mobile) */}
            <div className="hidden md:block">
              {/* Update 'src' with the actual path to your logo image file (e.g., logo.svg, logo.png) */}
              <img
                src="/logo.webp"
                alt="Sri Balaji Deep Cleaning Services Logo"
                className="h-10 w-auto object-contain" // Set height to 40px, let width adjust automatically
              />
            </div>
          </div>

          {/* MOBILE: CENTER LOGO / DESKTOP: CENTER NAV */}
          <div className="flex-none md:flex-1 flex justify-center">
            {/* Mobile Logo (Absolute Center on small screens) */}
            <div className="md:hidden">
              <img
                src="/logo.webp"
                alt="Sri Balaji Deep Cleaning Services Logo"
                className="h-10 w-auto object-contain" // Set height to 40px, let width adjust automatically
              />
            </div>

            {/* Desktop Nav (Hidden on Mobile) */}
            <nav className="hidden md:flex items-center gap-8 text-[15px] font-bold text-primary/60">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="hover:text-accent transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
                </a>
              ))}
            </nav>
          </div>

          {/* RIGHT ACTION: Always Right */}
          <div className="flex-1 md:flex-none flex justify-end items-center gap-4">
            <a href="tel:+918074844043" className="hidden lg:flex items-center gap-2 text-xs font-black text-primary/80 hover:text-accent transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
              +91 80748 44043
            </a>

            <button className="bg-primary text-white px-5 md:px-8 py-2.5 md:py-3.5 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-widest hover:bg-accent transition-all shadow-lg active:scale-95">
              <span className="md:inline hidden">BOOK SERVICE</span>
              <span className="md:hidden inline">BOOK</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Content */}
        <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-8 pt-4 pb-8 flex flex-col gap-6 border-t border-primary/5 mt-4">
            {navItems.map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-bold text-primary transition-all duration-300 transform ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {item}
              </a>
            ))}
            <a href="tel:+918074844043" className="flex items-center gap-3 text-accent font-black pt-2">
              <span className="w-8 h-8 flex items-center justify-center bg-accent/10 rounded-full text-[10px]">📞</span>
              +91 80748 44043
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;