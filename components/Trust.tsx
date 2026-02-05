"use client";

import { Star, Quote, CheckCircle } from "lucide-react";

const reviews = [
  {
    name: "Michael R.",
    location: "Downtown",
    text: "Saved my basement! They arrived in 30 minutes for a burst pipe. Professional, clean, and the price was exactly what they quoted.",
  },
  {
    name: "Sarah T.",
    location: "Northside",
    text: "Best plumbing experience ever. They fixed my water heater same-day. No hidden fees and they explained everything clearly.",
  },
  {
    name: "David W.",
    location: "West End",
    text: "Extremely reliable. I've used them for both emergencies and routine maintenance. Always on time and very respectful.",
  },
];

const Trust = () => {
  return (
    <section id="reviews" className="py-24 bg-[#162e64]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">
              Customer Success
            </h2>
            <p className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              WHAT YOUR <br />
              <span className="text-blue-500">NEIGHBORS SAY.</span>
            </p>
          </div>
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-6 rounded-2xl">
            <div className="text-right">
              <p className="text-white font-black text-2xl leading-none">5.0 / 5.0</p>
              <p className="text-blue-400 text-xs font-black uppercase tracking-widest mt-1">Google Rating</p>
            </div>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div 
              key={i} 
              className="bg-white p-10 rounded-[2.5rem] shadow-xl relative flex flex-col justify-between"
            >
              <Quote className="absolute top-8 right-10 text-slate-100" size={60} />
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-slate-700 text-xl font-medium leading-relaxed mb-10 italic">
                  "{review.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 border-t border-slate-100 pt-8">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-black text-lg">
                  {review.name[0]}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-slate-900 font-black uppercase text-base">{review.name}</p>
                    <CheckCircle size={14} className="text-blue-600" />
                  </div>
                  <p className="text-slate-400 text-xs font-bold tracking-widest uppercase">{review.location} Resident</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Trust;