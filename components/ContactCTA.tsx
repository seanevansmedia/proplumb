"use client";

import { Phone, Calendar, Clock, ShieldCheck } from "lucide-react";

const ContactCTA = () => {
  const phoneNumber = "(555) 123-4567";
  const phoneLink = "tel:5551234567";

  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="bg-[#001529] rounded-[3rem] p-8 md:p-16 shadow-2xl overflow-hidden relative text-center lg:text-left">
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div>
              <h2 className="text-blue-500 font-black uppercase tracking-widest text-sm mb-4">Ready to solve your plumbing issues?</h2>
              <p className="text-4xl md:text-6xl font-black text-white leading-[0.9] tracking-tighter mb-8">
                STOP THE LEAK. <br />
                <span className="text-blue-500">START SAVING TODAY.</span>
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                <div className="flex items-center gap-2 text-white/80 font-bold text-sm"><Clock size={18} className="text-blue-500" /> 60 Min Response</div>
                <div className="flex items-center gap-2 text-white/80 font-bold text-sm"><ShieldCheck size={18} className="text-blue-500" /> Licensed & Insured</div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex flex-col gap-4">
              <a href={phoneLink} className="flex items-center justify-center gap-4 bg-blue-600 hover:bg-blue-500 text-white px-12 py-8 rounded-[2rem] font-black text-3xl transition-all shadow-xl transform hover:-translate-y-2">
                <Phone size={32} fill="currentColor" /> {phoneNumber}
              </a>
              <button 
                onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-blue-400 font-black uppercase tracking-widest text-sm hover:text-white transition-colors"
              >
                Or Request a Free Quote Online
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;