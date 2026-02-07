"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Droplets, Facebook, Instagram, Twitter, ShieldCheck } from "lucide-react";

const Footer = () => {
  const phoneNumber = "(555) 123-4567";
  const phoneLink = "tel:5551234567";

  return (
    <footer className="bg-[#0a192f] border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full -mr-48 -mb-48"></div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-xl shadow-lg shadow-blue-600/20">
                <Droplets className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-black text-white tracking-tighter uppercase">
                PRO<span className="text-blue-500">PLUMB</span>
              </span>
            </div>
            <p className="text-slate-400 font-medium leading-relaxed">
              Professional plumbing services you can trust. Available 24/7 for all your emergency needs and residential repairs.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="text-white font-black text-lg uppercase tracking-wider mb-8">Navigation</h4>
            <ul className="space-y-4">
              {["Services", "About Us", "Reviews", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-slate-400 hover:text-blue-400 font-bold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Services */}
          <div>
            <h4 className="text-white font-black text-lg uppercase tracking-wider mb-8">Services</h4>
            <ul className="space-y-4">
              {["Emergency Repairs", "Drain Cleaning", "Water Heaters", "Leak Detection"].map((item) => (
                <li key={item} className="text-slate-400 font-bold">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact Info */}
          <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 relative overflow-hidden group">
            <h4 className="text-white font-black text-lg uppercase tracking-wider mb-6 relative z-10">Contact Us</h4>
            <div className="space-y-6 relative z-10">
              <a href={phoneLink} className="flex items-center gap-4 text-blue-400 hover:text-blue-300 transition-colors">
                <Phone size={20} className="text-blue-500" />
                <span className="font-black text-xl tracking-tight">{phoneNumber}</span>
              </a>
              <div className="flex items-center gap-4 text-slate-400">
                <Mail size={20} className="text-blue-500" />
                <span className="font-bold">help@proplumb.com</span>
              </div>
              <div className="flex items-center gap-4 text-slate-400">
                <MapPin size={20} className="text-blue-500" />
                <span className="font-bold">Your City Area</span>
              </div>
            </div>
            {/* Background Icon Decoration */}
            <ShieldCheck className="absolute -bottom-4 -right-4 text-white/5 h-24 w-24 transform group-hover:scale-110 transition-transform duration-700" />
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 font-bold text-sm text-center md:text-left">
            © {new Date().getFullYear()} PROPLUMB. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-slate-500 hover:text-slate-300 text-xs font-bold uppercase tracking-widest">Privacy Policy</Link>
            <Link href="/terms" className="text-slate-500 hover:text-slate-300 text-xs font-bold uppercase tracking-widest">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;