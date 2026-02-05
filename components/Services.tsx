"use client";

import { AlertCircle, Flame, Droplets, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Emergency Plumbing",
    description: "Burst pipes, major leaks, or overflowing toilets. Our team is on standby 24/7 to arrive at your door in 60 minutes or less.",
    icon: <AlertCircle className="w-10 h-10 text-red-500" />,
    tag: "Priority",
  },
  {
    title: "Water Heater Service",
    description: "Expert repair and installation for tankless and traditional units. We provide same-day service to get your hot water back on.",
    icon: <Flame className="w-10 h-10 text-orange-500" />,
    tag: "Installation",
  },
  {
    title: "Advanced Drain Cleaning",
    description: "Using professional-grade rooting and hydro-jetting technology to clear the toughest clogs and main line blockages.",
    icon: <Droplets className="w-10 h-10 text-blue-400" />,
    tag: "Maintenance",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-wider mb-2">Our Expertise</h2>
          <p className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
            How Can We Help You Today?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="group bg-[#001529] p-10 rounded-[2.5rem] border border-slate-800 hover:border-blue-500/50 shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div>
                <div className="flex items-center justify-between mb-10">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-blue-600 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-400 bg-blue-400/10 px-3 py-1 rounded">
                    {service.tag}
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-black text-white mb-4 uppercase">{service.title}</h3>
                <p className="text-slate-300 text-lg leading-relaxed font-medium mb-10">{service.description}</p>
              </div>

              <div className="flex items-center justify-between w-full group/btn border-t border-white/10 pt-8">
                <span className="text-white font-black text-base uppercase tracking-wider group-hover/btn:text-blue-400 transition-colors">
                    Get a Quote
                </span>
                <div className="bg-blue-600 p-3 rounded-full text-white transform group-hover/btn:translate-x-2 transition-all shadow-lg shadow-blue-500/20">
                  <ArrowRight size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;