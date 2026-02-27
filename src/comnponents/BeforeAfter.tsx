import React from 'react';

const galleryItems = [
  {
    type: "video",
    title: "Overhead Water Tank",
    location: "Jubilee Hills",
    description: "Deep sludge removal and biofilm treatment.",
    videoUrl: "/tank-cleaning-video.mp4",
    gridClass: "lg:col-span-2 lg:row-span-2" // Large feature card
  },
  {
    type: "image",
    title: "New Flat Cleaning",
    location: "Gachibowli",
    beforeImg: "/before.jpeg",
    afterImg: "/after.jpeg",
    gridClass: "lg:col-span-1 lg:row-span-1"
  },
  {
    type: "video",
    title: "New Flat Cleaning",
    location: "Hitech City",
    videoUrl: "/housecleaning.mp4",
    gridClass: "lg:col-span-1 lg:row-span-2" // Tall card
  },
  {
    type: "video",
    title: "Villa Upholstery",
    location: "Banjara Hills",
   videoUrl: "/flat.mp4",
    gridClass: "lg:col-span-1 lg:row-span-1"
  },
  {
    type: "video",
    title: "water tank",
    location: "B.n reddy ",
   videoUrl: "/video3.mp4",
    gridClass: "lg:col-span-1 lg:row-span-1"
  }
];

const BeforeAfter: React.FC = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-6">

        {/* Consistent Header Style */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20 items-end">
          <div className="lg:col-span-8">
            <h2 className="text-sm font-bold tracking-[0.3em] text-accent uppercase mb-4">
              Visual Proof
            </h2>
            <h3 className="text-4xl md:text-6xl font-black text-primary leading-[1.1] tracking-tighter">
              Seeing is <span className=" text-accent">Believing</span>.
            </h3>
          </div>
          <div className="lg:col-span-4 border-l border-slate-200 pl-8 pb-2">
            <p className="text-slate-500 text-base leading-relaxed">
              Real results from actual service sites across Hyderabad. No stock photos, just pure hygiene.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[300px] gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-[2rem] bg-white shadow-sm hover:shadow-2xl transition-all duration-700 ${item.gridClass}`}
            >
              {/* Conditional Media Rendering */}
              {item.type === "video" ? (
                <div className="absolute inset-0 w-full h-full">
                  <video
                    autoPlay muted loop playsInline
                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                  >
                    <source src={item.videoUrl} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                </div>
              ) : (
                <div className="absolute inset-0 flex w-full h-full group">
                  {/* Before Side */}
                  <div className="relative w-1/2 overflow-hidden">
                    <img src={item.beforeImg} className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700" alt="Before" />
                    <div className="absolute top-6 left-6 bg-black/40 backdrop-blur-md text-[9px] text-white px-2 py-1 rounded font-black uppercase tracking-tighter">Before</div>
                  </div>
                  {/* After Side */}
                  <div className="relative w-1/2 overflow-hidden border-l border-white/20">
                    <img src={item.afterImg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="After" />
                    <div className="absolute top-6 right-6 bg-accent text-[9px] text-white px-2 py-1 rounded font-black uppercase tracking-tighter">After</div>
                  </div>
                </div>
              )}

              {/* Text Overlay for Bento Feel */}
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-accent text-[10px] font-black uppercase tracking-[0.2em] mb-2">{item.location}</p>
                <h4 className="text-white text-xl font-bold leading-none">{item.title}</h4>
                {item.description && (
                  <p className="text-white/60 text-xs mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-slate-400 text-[10px] font-medium tracking-widest uppercase">
          Verified Service Results • 2024-2025 • Hyderabad, TS
        </p>
      </div>
    </section>
  );
};

export default BeforeAfter;