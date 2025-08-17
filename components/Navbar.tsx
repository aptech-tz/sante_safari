"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Who We Are", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contacts", href: "#footer" },
];

const MOBILE_LINKS = [
  { label: "About", href: "#about" },
  { label: "Contact Us", href: "#footer" },
  { label: "What We Offer", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Gallery", href: "#gallery" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll to section
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Close mobile menu after navigation
  };
  
  const handleBookNow = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const el = document.querySelector("#booking");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false)
  };

  return (
    <header className="sticky top-0 z-30 bg-blue-400 shadow px-2 sm:px-6 py-2 font-sans">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left: Logo + Brand */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo/sante--safaris-logo.png"
            alt="Sante Safaris Logo"
            width={40}
            height={40}
            className="rounded-full aspect-square object-cover bg-sky-200"
            priority
          />
          <span className="font-bold tracking-wider text-lg md:text-xl text-[#532e11]">Santé Safaris</span>
        </div>
        
        {/* Center: Nav Links (Desktop) */}
        <ul className="hidden md:flex gap-8 text-[#532e11] font-semibold text-base">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={e => handleNav(e, link.href)}
                className="hover:text-orange-800 transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        
        {/* Right: Book Now Button (Desktop) */}
        <button
          onClick={handleBookNow}
          className="hidden md:block bg-[#532e11] hover:bg-[#472009] text-white font-bold px-5 py-2 cursor-pointer rounded-xl shadow transition-colors duration-200"
        >
          Book Now
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-[#532e11] transition-colors duration-200 bg-transparent"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-sky-50 shadow-lg border-t transition-all duration-300 ease-in-out transform ${
        isMenuOpen 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}>
        <ul className="py-4 px-6 space-y-3">
          {MOBILE_LINKS.map((link, index) => (
            <li key={link.href} className={`transition-all duration-300 ease-in-out transform ${
              isMenuOpen 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 -translate-x-4"
            }`} style={{ transitionDelay: `${index * 50}ms` }}>
              <Link
          onClick={() => (setIsMenuOpen(false))}
          href={link.href}
                className="block text-gray-700 font-semibold py-2 hover:text-[#532e11] transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={`px-6 pb-4 pt-16 border-t border-gray-100 transition-all duration-300 ease-in-out transform ${
          isMenuOpen 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-2"
        }`} style={{ transitionDelay: "200ms" }}>
          <button
          onClick={() => (setIsMenuOpen(false))}
            className="w-full bg-[#532e11] hover:bg-[#472009] cursor-pointer text-white font-bold px-5 py-3 rounded-xl shadow transition-colors duration-200"
          >
            <Link href='#booking'>
            Book Now
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
}