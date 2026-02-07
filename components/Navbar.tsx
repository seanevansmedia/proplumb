"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, Droplets } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const phoneNumber = "(555) 123-4567";
  const phoneLink = "tel:5551234567";

  // Change background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link 
      href={href} 
      className={`relative text-lg font-bold transition-all duration-300 group ${
        scrolled ? "text-slate-700 hover:text-blue-600" : "text-white/90 hover:text-white"
      }`}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
    </Link>
  );

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-lg py-3 shadow-xl border-b border-slate-200/50" 
          : "bg-transparent py-5"
      }`}
    >
      {/* Subtle Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 opacity-80"></div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-16 lg:h-20">
          
          {/* 1. Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 w-1/4">
            <div className="bg-blue-600 p-2 rounded-xl shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
              <Droplets className="h-6 w-6 lg:h-7 lg:w-7 text-white" />
            </div>
            <Link 
              href="/" 
              className={`text-2xl lg:text-3xl font-black tracking-tighter uppercase transition-colors duration-300 ${
                scrolled ? "text-slate-900" : "text-white"
              }`}
            >
              PRO<span className="text-blue-500">PLUMB</span>
            </Link>
          </div>

          {/* 2. Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-10">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#reviews">Reviews</NavLink>
          </div>

          {/* 3. Desktop CTA */}
          <div className="hidden md:flex justify-end items-center w-1/4">
            <a 
              href={phoneLink}
              className={`flex items-center gap-3 px-7 py-3.5 rounded-xl font-black text-lg transition-all duration-300 transform hover:-translate-y-1 active:scale-95 shadow-lg ${
                scrolled 
                  ? "bg-blue-600 text-white shadow-blue-200 hover:bg-blue-700" 
                  : "bg-white text-blue-600 hover:bg-blue-50 shadow-black/10"
              }`}
            >
              <Phone size={20} fill="currentColor" />
              {phoneNumber}
            </a>
          </div>

          {/* Mobile UI */}
          <div className="flex md:hidden items-center gap-4">
            <a 
              href={phoneLink} 
              className="p-3 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-600/30"
            >
              <Phone size={22} fill="currentColor" />
            </a>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-2 transition-colors ${scrolled ? "text-slate-900" : "text-white"}`}
            >
              {isOpen ? <X size={36} /> : <Menu size={36} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay - Modern Glass Blur */}
      <div className={`md:hidden fixed inset-0 top-0 z-[-1] bg-white transition-all duration-500 ease-in-out transform ${
        isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}>
        <div className="h-full pt-32 px-8 flex flex-col space-y-8">
          {["Services", "About", "Reviews"].map((item) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase()}`} 
              onClick={() => setIsOpen(false)} 
              className="text-4xl font-black text-slate-900 flex justify-between items-center group"
            >
              {item}
              <span className="h-2 w-2 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </Link>
          ))}
          
          <div className="mt-auto pb-16">
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 text-center">
              <p className="text-blue-600 font-black text-sm mb-4 tracking-[0.2em] uppercase">Emergency 24/7 Service</p>
              <a 
                href={phoneLink} 
                className="w-full flex justify-center items-center gap-4 bg-blue-600 text-white py-6 rounded-2xl font-black text-2xl shadow-xl shadow-blue-600/20 active:scale-95 transition-transform"
              >
                <Phone size={24} fill="currentColor" />
                {phoneNumber}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;