import React, { useState, useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Water Tank Cleaning'
  });
  // 2. Add this Effect Hook
  useEffect(() => {
    if (isOpen) {
      // Disable scrolling
      document.body.style.overflow = 'hidden';
    } else {
      // Enable scrolling
      document.body.style.overflow = 'unset';
    }

    // Cleanup function: ensures scroll is restored if component unmounts unexpectedly
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);


  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "918074844043"; 
    const message = `Hello Sri Balaji Services, %0A%0A*New Booking Request*%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Service:* ${formData.service}%0A%0APlease contact me for an inspection.`;
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    onClose();
  };

  // Realistic User Avatars for Hyderabad Clients
  const avatars = [
    "https://i.pravatar.cc/150?u=hyderabad1",
    "https://i.pravatar.cc/150?u=hyderabad2",
    "https://i.pravatar.cc/150?u=hyderabad3"
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-primary/60 backdrop-blur-md animate-in fade-in duration-500"
        onClick={onClose}
      />
      
      {/* Modal Card */}
      <div className="relative bg-white w-full max-w-[380px] rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-10 duration-500">
        
        {/* Top Branding Strip */}
        <div className="h-1.5 bg-accent w-full" />
        
        <div className="p-7 md:p-9">
          {/* Compact Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-xl font-black text-primary tracking-tighter">Instant Quote</h3>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="flex h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest">Available in Hyderabad</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-2 bg-slate-50 hover:bg-slate-100 rounded-full transition-all active:scale-90"
            >
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Input Group */}
            <div className="space-y-3">
              <input 
                required
                type="text"
                placeholder="Your Full Name"
                className="w-full bg-slate-50 border-2 border-transparent focus:border-accent/20 focus:bg-white rounded-xl py-3.5 px-5 outline-none transition-all font-bold text-primary text-sm placeholder:text-slate-300"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />

              <input 
                required
                type="tel"
                placeholder="WhatsApp Number"
                className="w-full bg-slate-50 border-2 border-transparent focus:border-accent/20 focus:bg-white rounded-xl py-3.5 px-5 outline-none transition-all font-bold text-primary text-sm placeholder:text-slate-300"
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />

              <div className="relative">
                <select 
                  className="w-full bg-slate-50 border-2 border-transparent focus:border-accent/20 focus:bg-white rounded-xl py-3.5 px-5 outline-none transition-all font-bold text-primary text-sm appearance-none cursor-pointer"
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option>Water Tank Cleaning</option>
                  <option>Sump Deep Cleaning</option>
                  <option>Villa Cleaning</option>
                  <option>Kitchen Degreasing</option>
                  <option>Sofa/Carpet Cleaning</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-300">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <button 
              type="submit"
              className="w-full bg-primary hover:bg-accent text-white hover:text-primary py-4 rounded-xl font-black uppercase text-[10px] tracking-[0.2em] transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/10 active:scale-95 mt-2"
            >
              Send on WhatsApp
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
          
          {/* Realistic Trust Bar */}
          <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
            <div className="flex -space-x-2.5">
              {avatars.map((url, i) => (
                <div key={i} className="relative">
                  <img 
                    src={url} 
                    alt="client" 
                    className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                  {i === 2 && (
                    <div className="absolute inset-0 bg-accent/80 rounded-full flex items-center justify-center border-2 border-white">
                      <span className="text-[7px] font-black text-primary">+</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p className="text-[9px] font-black text-primary/40 uppercase tracking-widest">
              Join <span className="text-accent font-black">450+</span> Happy Clients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadModal;