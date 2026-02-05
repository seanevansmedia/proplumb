"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X, Droplets } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "(555) 123-4567";
  const phoneLink = "tel:5551234567";

  // Navigation Link with the sliding blue underline
  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link 
      href={href} 
      className="relative text-xl text-slate-700 hover:text-blue-600 font-bold transition-colors duration-300 group"
    >
      {children}
      <span className="absolute -bottom-2 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );

  return (
    // Solid white background, no transparency, locked for scrolling
    <nav className="fixed w-full z-50 bg-white border-b-2 border-slate-100 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-24 lg:h-28">
          
          {/* 1. Logo (Left) */}
          <div className="flex-shrink-0 flex items-center gap-3 w-1/4">
            <div className="bg-blue-600 p-2.5 rounded-xl shadow-md">
              <Droplets className="h-8 w-8 text-white" />
            </div>
            <Link href="/" className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tighter uppercase">
              PRO<span className="text-blue-600">PLUMB</span>
            </Link>
          </div>

          {/* 2. Centered Desktop Navigation (Middle) */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-12">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#reviews">Reviews</NavLink>
          </div>

          {/* 3. Desktop CTA (Right) */}
          <div className="hidden md:flex justify-end items-center w-1/4">
            <a 
              href={phoneLink}
              className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-black text-xl transition-all duration-300 shadow-blue-200 shadow-lg transform hover:-translate-y-1 active:scale-95"
            >
              <Phone size={24} fill="currentColor" />
              {phoneNumber}
            </a>
          </div>

          {/* Mobile UI */}
          <div className="flex md:hidden items-center gap-5">
            <a 
              href={phoneLink} 
              className="p-4 bg-blue-600 text-white rounded-full shadow-lg"
              aria-label="Call Now"
            >
              <Phone size={24} fill="currentColor" />
            </a>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-slate-900 p-2"
            >
              {isOpen ? <X size={44} /> : <Menu size={44} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay - Clean White */}
      {isOpen && (
        <div className="md:hidden bg-white fixed inset-0 top-24 z-40 px-8 py-12 flex flex-col space-y-10 border-t border-slate-100">
          <Link 
            href="#services" 
            onClick={() => setIsOpen(false)} 
            className="text-4xl font-black text-slate-900 border-b border-slate-50 pb-6"
          >
            Our Services
          </Link>
          <Link 
            href="#about" 
            onClick={() => setIsOpen(false)} 
            className="text-4xl font-black text-slate-900 border-b border-slate-50 pb-6"
          >
            About Us
          </Link>
          <Link 
            href="#reviews" 
            onClick={() => setIsOpen(false)} 
            className="text-4xl font-black text-slate-900 border-b border-slate-50 pb-6"
          >
            Reviews
          </Link>
          
          <div className="mt-auto pb-12 text-center">
            <p className="text-blue-600 font-black text-xl mb-4 tracking-widest uppercase">Emergency 24/7</p>
            <a 
              href={phoneLink} 
              className="w-full flex justify-center items-center gap-4 bg-blue-600 text-white py-8 rounded-2xl font-black text-3xl shadow-xl active:scale-95 transition-transform"
            >
              <Phone size={32} fill="currentColor" />
              CALL NOW
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;