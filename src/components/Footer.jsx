import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Unified slug link utility matching your internal path logic
  const formatSlug = (item) => {
    let slug = item.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-');
    if (slug.endsWith('-')) slug = slug.slice(0, -1);
    if (slug.startsWith('-')) slug = slug.slice(1);
    if (slug === "business-process") slug = "business-process-bpos";
    return slug;
  };

  return (
    <footer className="w-full bg-[#111111] text-gray-400 font-sans border-t border-[#2A2A2A] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-8">
        
        {/* Brand Block Column */}
        <div className="col-span-2 space-y-5">
          <span className="font-black text-2xl tracking-tight text-white uppercase">
            Hivictus
            <span className="text-[#86BC25] font-black inline-block ml-px">.</span>
          </span>
          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            Engineering robust commercial paths and intelligent technological architecture designed to accelerate scalable operations for global enterprises.
          </p>
          <div className="pt-2">
            <span className="text-xs uppercase font-bold tracking-wider text-[#86BC25]">Operational HQ:</span>
            <p className="text-xs text-gray-500 mt-1">Chennimalai, Erode, Tamil Nadu, India</p>
          </div>
        </div>

        {/* Growth Engine Segment Column */}
        <div className="space-y-4">
          <h4 className="text-xs uppercase font-bold tracking-widest text-white">Commercial</h4>
          <ul className="space-y-2.5 text-sm">
            {["Sales", "Business Development", "Lead Generation", "Demand Generation", "Growth Marketing"].map((item) => (
              <li key={item}>
                <Link to={`/services/${formatSlug(item)}`} className="hover:text-white transition-colors hover:underline decoration-[#86BC25] underline-offset-4">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Advanced Systems Column */}
        <div className="space-y-4">
          <h4 className="text-xs uppercase font-bold tracking-widest text-white">Architecture</h4>
          <ul className="space-y-2.5 text-sm">
            {["Cognitive Business Solutions", "Technology Consulting", "Fractional Executive Services", "Human Capital"].map((item) => (
              <li key={item}>
                <Link to={`/services/${formatSlug(item)}`} className="hover:text-white transition-colors hover:underline decoration-[#86BC25] underline-offset-4">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Corporate Profile Column */}
        <div className="space-y-4">
          <h4 className="text-xs uppercase font-bold tracking-widest text-white">Corporate</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link to="/about" className="hover:text-white transition-colors hover:underline decoration-[#86BC25] underline-offset-4">About Us</Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-white transition-colors hover:underline decoration-[#86BC25] underline-offset-4">Careers</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition-colors hover:underline decoration-[#86BC25] underline-offset-4">Contact Desk</Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Lower Copyright Panel Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-[#2A2A2A] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium tracking-wide">
        <div>
          © {currentYear} Hivictus Private Limited. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <a href="#privacy" className="hover:text-white transition-colors">Privacy Charter</a>
          <a href="#terms" className="hover:text-white transition-colors">Terms of Operations</a>
        </div>
      </div>
    </footer>
  );
}