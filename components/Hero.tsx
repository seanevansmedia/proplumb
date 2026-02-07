"use client";

import { useState, useEffect } from "react";
import { Phone, ShieldCheck, Clock, Award, CheckCircle2, Send } from "lucide-react";

const Hero = () => {
  const [city, setCity] = useState("your area");
  const phoneNumber = "(555) 123-4567";
  const phoneLink = "tel:5551234567";

  useEffect(() => {
    const getCity = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        if (data.city) setCity(data.city);
      } catch (error) {
        console.log("Location fetch failed");
      }
    };
    getCity();
  }, []);

  return (
    <section className="relative bg-[#0a192f] overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 flex items-center min-h-[85vh]">
      
      {/* BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=2000&auto=format&fit=crop" 
          alt="Plumbing Work" 
          className="w-full h-full object-cover opacity-40" 
        />
        {/* Dark Blue Faded Overlay - This makes the image visible but keeps text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#162e64] via-[#162e64]/80 to-[#162e64]/40"></div>
      </div>

      {/* Decorative Dot Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.1]" 
           style={{ backgroundImage: `radial-gradient(#2563eb 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }}>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Side Content */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-600/30 border border-blue-400/30 px-4 py-2 rounded-full mb-6 backdrop-blur-md">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              <span className="text-blue-100 font-bold text-sm tracking-wide uppercase">Available Now: 24/7 Emergency Service</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1] tracking-tighter mb-6">
              PLUMBING PROBLEMS? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500 uppercase">We Fix Them Fast.</span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100/90 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Don't let a leak turn into a disaster. Our expert plumbers are stationed in{" "}
              <span className="text-white font-bold underline decoration-blue-500 underline-offset-4 capitalize">
                {city}
              </span>{" "}
              for 60-minute arrival times.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5 mb-12">
              <a href={phoneLink} className="w-full sm:w-auto flex items-center justify-center gap-4 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black text-2xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 cursor-pointer">
                <Phone size={28} fill="currentColor" />
                {phoneNumber}
              </a>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto flex items-center justify-center px-10 py-5 rounded-2xl font-black text-2xl text-white border-2 border-white/20 hover:bg-white/10 transition-all backdrop-blur-sm cursor-pointer"
              >
                Our Services
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2 group">
                <ShieldCheck className="text-blue-400 h-5 w-5" />
                <span className="text-white font-bold text-sm">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 group">
                <Clock className="text-blue-400 h-5 w-5" />
                <span className="text-white font-bold text-sm">60 Min Arrival</span>
              </div>
              <div className="flex items-center gap-2 group">
                <Award className="text-blue-400 h-5 w-5" />
                <span className="text-white font-bold text-sm">5-Star Rated</span>
              </div>
              <div className="flex items-center gap-2 group">
                <CheckCircle2 className="text-blue-400 h-5 w-5" />
                <span className="text-white font-bold text-sm">Upfront Pricing</span>
              </div>
            </div>
          </div>

          {/* Form Side with Centered Header */}
          <div className="w-full lg:w-[460px]">
            <div className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-2xl relative overflow-hidden">
              <div className="relative z-10 mb-8 text-center">
                <h3 className="text-2xl font-black text-slate-900 leading-none mb-2 uppercase">Get a Free Quote</h3>
                <p className="text-slate-500 font-medium text-sm">Response in 15 minutes or less.</p>
              </div>
              <form className="space-y-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-5 py-4 text-slate-900 font-bold outline-none focus:border-blue-600 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Phone Number</label>
                  <input type="tel" placeholder="(555) 000-0000" className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-5 py-4 text-slate-900 font-bold outline-none focus:border-blue-600 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Service Needed</label>
                  <select className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-5 py-4 text-slate-900 font-bold outline-none focus:border-blue-600 transition-colors appearance-none cursor-pointer">
                    <option>Emergency Repair</option>
                    <option>Drain Cleaning</option>
                    <option>Water Heater</option>
                    <option>Other</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black text-xl py-5 rounded-xl shadow-xl flex items-center justify-center gap-3 mt-4 transform hover:-translate-y-1 active:scale-95 transition-all cursor-pointer">
                  <Send size={20} /> SEND REQUEST
                </button>
              </form>
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 z-0"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;