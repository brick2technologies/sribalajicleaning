import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LeadModal from '../pages/LeadModal';


const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {name: 'Home', path: '/'},
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-700 
        ${isScrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-slate-100 py-4 shadow-sm'
            : 'bg-transparent py-6 md:py-8'}`}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center">

            {/* 1. BRAND IDENTITY */}
            <div className="flex items-center gap-12">
              <Link to="/" className="block group">
                <img
                  src="/logo.webp"
                  alt="Sri Balaji Deep Cleaning Services"
                  className={`transition-all duration-500 object-contain 
                  ${isScrolled ? 'h-10 md:h-12' : 'h-10 md:h-14'}`}
                />
              </Link>

              {/* Status Dot */}
              <div className={`hidden lg:flex items-center gap-3 border-l border-slate-200 pl-8 transition-opacity duration-500 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/40">
                  Operating in Hyderabad
                </span>
              </div>
            </div>

            {/* 2. CENTER NAVIGATION */}
            <div className="hidden lg:flex items-center bg-slate-50/50 rounded-2xl px-2 py-1 border border-slate-100">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-8 py-3 text-[11px] font-black uppercase tracking-[0.2em] rounded-xl transition-all duration-300 
                  ${location.pathname === item.path
                      ? 'bg-accent text-primary shadow-sm'
                      : 'text-primary/60 hover:text-primary hover:bg-slate-100'}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* 3. CONVERSION HUB & MOBILE TOGGLE */}
            <div className="flex items-center gap-4 md:gap-8">
              <div className={`hidden xl:flex flex-col items-end transition-all ${isScrolled ? 'translate-x-0 opacity-100' : 'opacity-100'}`}>
                <span className="text-[9px] font-black text-accent uppercase tracking-widest mb-1">
                  Schedule an Inspection
                </span>
                <a href="tel:+918074844043" className="text-sm font-bold text-primary">
                  +91 80748 44043
                </a>
              </div>

              {/* Desktop Button */}
              <button 
                onClick={() => setIsModalOpen(true)} 
                className="hidden sm:block group relative overflow-hidden bg-primary text-white px-6 md:px-10 py-3 md:py-4 rounded-xl md:rounded-2xl text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:bg-accent hover:text-primary active:scale-95 shadow-lg shadow-primary/10"
              >
                <span className="relative z-10">Book Now</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-3 rounded-xl bg-primary text-white active:scale-90 transition-transform"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 8h16M4 16h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER OVERLAY */}
      <div
        className={`fixed inset-0 z-[100] bg-primary/20 backdrop-blur-sm transition-opacity duration-500 lg:hidden
        ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* MOBILE DRAWER CONTENT */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm z-[101] bg-white shadow-2xl transition-transform duration-500 ease-out lg:hidden
        ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-12">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <img src="/logo.webp" alt="Logo" className="h-8" />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-primary/40 hover:text-primary transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-6">
            {navItems.map((item, i) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-3xl font-black tracking-tighter transition-colors 
                ${location.pathname === item.path ? 'text-accent' : 'text-primary hover:text-accent'}`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-4">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <p className="text-[10px] font-black text-accent uppercase tracking-normal mb-2">Immediate Booking</p>
              <a href="tel:+918074844043" className="text-sm font-black text-primary leading-none">
                +91 80748 44043
              </a>
            </div>

            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsModalOpen(true);
              }} 
              className="w-full py-5 bg-primary text-white rounded-2xl font-black uppercase text-xs tracking-[0.2em] shadow-xl shadow-primary/20 active:scale-95"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* MODAL MOVED OUTSIDE NAV FOR BETTER PORTAL-LIKE BEHAVIOR */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Header;