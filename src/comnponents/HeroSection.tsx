import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero: React.FC = () => {
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const leftImgRef = useRef<HTMLDivElement>(null);
  const rightImgRef = useRef<HTMLDivElement>(null);
  const mobileImgRef = useRef<HTMLDivElement>(null);

  const categories = [
    "Water Tank & Sump",
    "Houses & Villas",
    "Offices & Commercial",
    "Restaurant & Hotel",
  ];

  const heroCooldown = 5.0;
  const regularCooldown = 2.5;

  useEffect(() => {
    const words = wordsRef.current.filter((el): el is HTMLSpanElement => el !== null);
    if (!words.length) return;

    // --- INITIAL STATE ---
    gsap.set(words, { opacity: 0, filter: "blur(20px)", scale: 0.9, pointerEvents: "none" });
    gsap.set([leftImgRef.current, rightImgRef.current, mobileImgRef.current], { y: 60, opacity: 0 });

    const introTl = gsap.timeline();

    // 1. Reveal First Word
    introTl.to(words[0], {
      opacity: 1, filter: "blur(0px)", scale: 1, duration: 1.2, ease: "expo.out", delay: 0.5, pointerEvents: "auto",
    });

    // 2. Reveal Images (Desktop Pillars & Mobile Center Image)
    introTl.to([leftImgRef.current, rightImgRef.current, mobileImgRef.current], {
      y: 0, opacity: 1, duration: 1.5, ease: "power3.out", stagger: 0.2
    }, "-=0.8");

    // --- INFINITE LOOP ---
    const loopTl = gsap.timeline({ repeat: -1, delay: heroCooldown });
    words.forEach((word, index) => {
      const nextIndex = (index + 1) % words.length;
      loopTl
        .to(word, { opacity: 0, filter: "blur(15px)", scale: 1.05, duration: 1, ease: "power2.inOut", pointerEvents: "none" })
        .fromTo(words[nextIndex],
          { opacity: 0, filter: "blur(15px)", scale: 0.95 },
          { opacity: 1, filter: "blur(0px)", scale: 1, duration: 1, ease: "power2.out", pointerEvents: "auto" },
          "-=1.0"
        )
        .to({}, { duration: nextIndex === 0 ? heroCooldown : regularCooldown });
    });

    return () => { introTl.kill(); loopTl.kill(); };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col mt-20 items-center bg-gradient-to-t from-accent via-transparent to-transparent e font-sans overflow-hidden rounded-b-[40px] md:rounded-b-[120px]">

      {/* 1. LAYER: Background Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%">
          <rect width="100%" height="100%" fill="url(#grid)" />
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#05AC5F" strokeWidth="0.5" />
            </pattern>
          </defs>
        </svg>
      </div>

      {/* 2. LAYER: Accent Background Glow */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-accent/20 via-accent/5 to-transparent z-10 pointer-events-none"></div>

      {/* 3. LAYER: Thin Glowing Line at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-[2px] z-20 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #05AC5F 50%, transparent 100%)',
          boxShadow: '0 -10px 40px rgba(5,172,95,0.4)'
        }}>
      </div>

      <div className="container mx-auto min-h-screen flex flex-col relative z-40 px-6 py-12 md:py-20">

        {/* Part 1: Badge */}
        <div className="flex-none flex flex-col justify-end pb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-[10px] md:text-[11px] font-black tracking-[0.15em] uppercase self-center border border-accent/20">
            Available Now in Hyderabad
          </div>
        </div>

        {/* Part 2: Headline Area */}
        <div className="flex-none flex items-center justify-center">
          <div className="flex flex-col items-center w-full">
            <div className="relative w-full h-[60px] sm:h-[100px] md:h-[140px] lg:h-[160px] flex items-center justify-center mb-6 md:mb-10">
              <h1 className="text-[32px] sm:text-[52px] md:text-[80px] lg:text-[100px] font-black text-primary tracking-tighter leading-none text-center px-2">
                {categories.map((text, i) => (
                  <span
                    key={i}
                    ref={(el) => { wordsRef.current[i] = el; }}
                    className="absolute inset-0 flex items-center justify-center whitespace-nowrap"
                  >
                    {text.split(" & ").map((part, index, arr) => (
                      <React.Fragment key={index}>
                        {part}
                        {index < arr.length - 1 && <span className="text-accent mx-2 md:mx-4">&</span>}
                      </React.Fragment>
                    ))}
                  </span>
                ))}
              </h1>
            </div>

            <div className="flex items-center gap-3 md:gap-4 relative z-30">
              <div className="hidden sm:block w-8 md:w-16 h-[1px] bg-accent/40 rounded-full"></div>
              <span className="px-6 py-2 md:px-10 md:py-4 bg-accent text-white rounded-full text-[16px] sm:text-[24px] md:text-[42px] font-bold tracking-tight shadow-xl shadow-accent/20">
                Deep Clean Services
              </span>
              <div className="hidden sm:block w-8 md:w-16 h-[1px] bg-accent/40 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Part 3: Description */}
        <div className="flex-none flex items-center justify-center py-8 md:py-10">
          <p className="text-[14px] sm:text-[18px] md:text-[22px] text-slate-500 max-w-[280px] sm:max-w-md md:max-w-3xl leading-relaxed font-normal text-center">
            Hyderabad’s most trusted deep cleaning service. Specialized in <span className="text-accent font-semibold">6-stage mechanized cleaning</span> and premium standards.
          </p>
        </div>

        {/* --- PREMIUM MOBILE IMAGE (Visible ONLY on Mobile) --- */}
        <div ref={mobileImgRef} className="md:hidden flex justify-center mb-0">
          <div className="relative w-full max-w-[320px] aspect-[2/3] rounded-3xl overflow-hidden">
            <img src="/Men1.webp" alt="Service" className="w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-accent via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Part 4: CTA & Stats */}
        <div className="flex-none flex flex-col items-center justify-start gap-8 md:gap-12 pt-4">
          <div className="flex flex-col sm:flex-row gap-3 md:gap-6 w-full sm:w-auto justify-center">
            <button className="bg-accent text-white px-10 py-4 rounded-xl font-bold shadow-lg active:scale-95 transition-transform">GET A FREE QUOTE</button>
            <button className="border-2 border-slate-100 bg-white px-10 py-4 rounded-xl font-bold text-primary">+91 80748 44043</button>
          </div>

          <div className="flex items-center gap-10 md:gap-16 pb-6">
            <div className="text-center">
              <p className="text-2xl md:text-4xl font-black text-primary">500+</p>
              <p className="text-[10px] text-black font-black uppercase tracking-widest">Jobs Done</p>
            </div>
            <div className="w-px h-8 md:h-12 bg-slate-200"></div>
            <div className="text-center">
              <p className="text-2xl md:text-4xl font-black text-primary">4.9/5</p>
              <p className="text-[10px] text-black font-black uppercase tracking-widest">Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- DESKTOP PILLARS (Hidden on Mobile) --- */}
      <div ref={leftImgRef} className="hidden md:block absolute bottom-0 -left-10 lg:left-0 w-[35vw] lg:w-[28vw] h-[50vh] lg:h-[65vh] z-30 pointer-events-none">
        <img src="/Men1.webp" alt="Professional" className="w-full h-full object-contain object-bottom" />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60"></div> */}
      </div>

      <div ref={rightImgRef} className="hidden md:block absolute bottom-0 -right-10 lg:right-0 w-[35vw] lg:w-[28vw] h-[50vh] lg:h-[65vh] z-30 pointer-events-none">
        <img src="/Men2.webp" alt="Professional" className="w-full h-full object-contain object-bottom" />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60"></div> */}
      </div>

    </section>
  );
};

export default Hero;