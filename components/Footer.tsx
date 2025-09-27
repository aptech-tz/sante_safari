import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="footer" className="bg-white py-8 mt-12 shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 px-8">
        {/* Logo + Name (inline) */}
        <div className="flex flex-col md:items-start">
          <div className="flex items-center gap-2 mb-2">
            <Image
              src="/logo/sante--safaris-logo.png"
              alt="Sante Safaris Logo"
              width={40}
              height={40}
              className="rounded-full aspect-square object-cover bg-sky-200"
              priority
            />
            <span className="font-bold text-xl text-[#532e11]">
              Santé Safaris
            </span>
          </div>
          <span className="text-gray-700 text-sm">
            © {new Date().getFullYear()} Santé Safaris. All rights reserved.
          </span>
        </div>

        {/* Address */}
        <div className="text-gray-700">
          <p className="text-[#532e11] uppercase font-semibold mb-1">Address</p>
          <p>Arusha</p>
          {/* WhatsApp link */}
  <a 
    href="https://wa.me/255767921035" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:text-green-600 transition"
  >
    Phone: +255 767 921 035
  </a>
  <br />
  {/* Email link */}
  <a 
    href="mailto:info@santesafari.com" 
    className="hover:text-blue-600 transition"
  >
    Email: info@santesafari.com
  </a>
        </div>

        {/* Special Links */}
        <div className="text-gray-700">
          <h2 className="text-[#532e11] uppercase font-semibold mb-1">Explore</h2>
          <Link className="block" href="#about">About us</Link>
          <Link className="block" href="#footer">Contacts</Link>
          <Link className="block" href="#gallery">Gallery</Link>
          <Link className="block" href="#why-us">Why choose us</Link>
        </div>

        {/* Social Media */}
        <div className="flex flex-col md:items-end">
          <span className="text-[#532e11] uppercase font-semibold mb-2">Follow Us</span>
          <div className="flex items-center gap-2">
            <a
              href="https://facebook.com/santésafaris"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-[#532e11] bg-transparent hover:text-[#472009] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#532e11] rounded p-1"
            >
              {/* Facebook SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.463h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.987C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com/santesafaris"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#532e11] bg-transparent hover:text-[#472009] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#532e11] rounded p-1"
            >
              {/* Instagram SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm6.5-.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"/>
              </svg>
            </a>
            <a
              href="https://x.com/santesafaris"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="text-[#532e11] bg-transparent hover:text-[#472009] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#532e11] rounded p-1"
            >
              {/* X SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 0 0 1.88-2.37c-.83.5-1.75.85-2.72 1.05A4.26 4.26 0 0 0 12 8.26c0 .33.04.65.1.96A12.1 12.1 0 0 1 3.15 4.86a4.26 4.26 0 0 0 1.32 5.68 4.23 4.23 0 0 1-1.93-.53v.05a4.26 4.26 0 0 0 3.42 4.18c-.47.13-.97.2-1.48.08a4.27 4.27 0 0 0 3.98 2.96A8.54 8.54 0 0 1 2 19.54a12.06 12.06 0 0 0 6.54 1.92c7.85 0 12.15-6.5 12.15-12.13 0-.18 0-.36-.01-.54A8.6 8.6 0 0 0 24 5.12c-.86.38-1.78.64-2.74.88z"/>
              </svg>
            </a>
            <a
              href="https://youtube.com/@santesafaris"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-[#532e11] bg-transparent hover:text-[#472009] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#532e11] rounded p-1"
            >
              {/* YouTube SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
              </svg>
            </a>
            <a
              href="https://wa.me/255742664878"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-[#532e11] bg-transparent hover:text-[#472009] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#532e11] rounded p-1"
            >
              {/* WhatsApp SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M20.52 3.48A11.8 11.8 0 0 0 12.05 0C5.44 0 0.06 5.38 0.06 11.99c0 2.11.55 4.07 1.52 5.77L0 24l6.4-1.66a11.92 11.92 0 0 0 5.65 1.44h.01c6.61 0 11.99-5.38 11.99-11.99 0-3.2-1.28-6.2-3.53-8.31zM12.07 21.3h-.01a9.3 9.3 0 0 1-4.76-1.31l-.34-.2-3.8.99 1.02-3.7-.22-.38a9.25 9.25 0 1 1 8.11 4.6zM17 14.56c-.27-.14-1.57-.77-1.82-.85-.24-.09-.42-.14-.6.14-.18.27-.69.85-.85 1.02-.16.18-.31.2-.58.07-1.57-.77-2.6-1.38-3.62-3.12-.27-.46.27-.43.77-1.43.09-.18.05-.34-.02-.48-.07-.14-.6-1.45-.82-1.99-.22-.53-.44-.46-.6-.46-.16 0-.34 0-.52 0-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.28 0 1.34.98 2.64 1.12 2.82.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.55.58.65.2 1.24.17 1.7.1.52-.08 1.57-.64 1.8-1.27.22-.63.22-1.17.15-1.28-.07-.11-.25-.18-.52-.31z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}