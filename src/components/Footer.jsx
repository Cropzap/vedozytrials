import React from 'react';
import { Link } from 'react-router-dom';

export default function VedozyFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-900 text-slate-300 font-sans border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand, Address & Socials */}
          <div className="md:col-span-1 space-y-5">
            <span className="font-bold text-3xl tracking-tight text-white uppercase flex items-center gap-1">
              Vedozy<span className="text-blue-500 font-black">.</span>
            </span>
            <p className="text-sm leading-relaxed text-slate-400">
              An authorized Lending Service Provider (LSP) facilitating RBI-compliant credit solutions for MSMEs, startups, and growing enterprises.
            </p>
            <div className="text-sm space-y-1 text-slate-400 pt-1">
              <p className="font-semibold text-slate-200">Vedozy Lending Services</p>
              <p>Chennimalai, Erode, Tamil Nadu - 638051</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4 pt-2">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-blue-600 transition-colors duration-150"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.6 1.6 0 1 0 1.6 1.6 1.6 1.6 0 0 0-1.6-1.6Z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-blue-600 transition-colors duration-150"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-blue-600 transition-colors duration-150"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-blue-600 transition-colors duration-150"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Credit Products Column */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-5">Credit Products</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/loans/msme-business-loan" className="hover:text-white transition-colors">MSME Business Loans</Link></li>
              <li><Link to="/loans/startup-loan" className="hover:text-white transition-colors">Startup Loan</Link></li>
              <li><Link to="/loans/working-capital-loan" className="hover:text-white transition-colors">Working Capital</Link></li>
              <li><Link to="/loans/machinery-loan" className="hover:text-white transition-colors">Machinery Financing</Link></li>
              <li><Link to="/loans/supplychain-financing" className="hover:text-white transition-colors">Supply Chain Finance</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-5">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about/overview" className="hover:text-white transition-colors">About Vedozy</Link></li>
              <li><Link to="/partnerwithus" className="hover:text-white transition-colors">NBFC Partners</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Compliance & Legal Column */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-5">Compliance & Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/resources/emi-calculator" className="hover:text-white transition-colors">EMI Calculator</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">LSP Code of Conduct</Link></li>
              <li><Link to="/support" className="hover:text-white transition-colors">Grievance Redressal</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Legal Strip */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-400 gap-4">
          <div>
            © {currentYear} Vedozy. All rights reserved. Operating as an authorized Lending Service Provider (LSP).
          </div>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-slate-200 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-slate-200 transition-colors">Terms</Link>
            <Link to="/support" className="hover:text-slate-200 transition-colors">Grievance</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}