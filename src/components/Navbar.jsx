import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logoBrand from "../assets/vedozylogo.png"; // Replace with your logo path

// 1. Loans Menu Data with Plain Single-Color SVG Icons
const LOANS_MENU = [
  {
    label: "MSME Business Loan",
    path: "/loans/msme-business-loan",
    svg: (
      <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V10h4v11M9 7h1m-1 4h1m4-4h1m-1 4h1" />
      </svg>
    ),
  },
  {
    label: "Startup Loan",
    path: "/loans/startup-loan",
    svg: (
      <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    label: "Working Capital Loan",
    path: "/loans/working-capital-loan",
    svg: (
      <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "Machinery Loan",
    path: "/loans/machinery-loan",
    svg: (
      <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Supply Chain Financing",
    path: "/loans/supplychain-financing",
    svg: (
      <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

// 2. About Us Menu Data with Plain Single-Color SVG Icons
const ABOUT_MENU = [
  {
    label: "About Us",
    path: "/about/overview",
    svg: (
      <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "Our Approach",
    path: "/about/our-approach",
    svg: (
      <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    label: "Team",
    path: "/about/team",
    svg: (
      <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    label: "Investor Relations",
    path: "/about/investor-relations",
    svg: (
      <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    label: "CSR",
    path: "/about/csr",
    svg: (
      <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 002.5-2.5V11a2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
  },
  {
    label: "ESG",
    path: "/about/esg",
    svg: (
      <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

const RESOURCE_TOOLS = [
  { label: "Business Loan Eligibility Criteria", path: "/resources/eligibility-criteria" },
  { label: "Business Loan EMI Calculator", path: "/resources/emi-calculator" },
  { label: "Business Loan Interest Rate", path: "/resources/interest-rate" },
  { label: "GST Calculator", path: "/resources/gst-calculator" },
];

const RESOURCE_SERVICES = [
  { label: "Trading", path: "/services/trading" },
  { label: "Manufacturing", path: "/services/manufacturing" },
  { label: "Services", path: "/services/services-sector" },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null); // 'loans' | 'about' | 'resources' | null
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);

  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    closeAll();
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        closeAll();
      }
    };
    const handleEscape = (e) => {
      if (e.key === "Escape") closeAll();
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeAll = () => {
    setActiveMenu(null);
    setMobileOpen(false);
    setMobileSection(null);
  };

  const toggleMenu = (menuName) => {
    setActiveMenu((prev) => (prev === menuName ? null : menuName));
  };

  return (
    <div ref={navRef} className="w-full font-sans text-slate-800">
      
      {/* ================= TOPBAR ================= */}
      <div className="bg-white text-slate-300 text-xs py-2.5 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Left Tagline */}
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 inline-block"></span>
            <span className="font-medium tracking-wide text-black text-xs sm:text-sm">
              Making Capital Accessible for All
            </span>
          </div>

          {/* Right Links */}
          <div className="flex items-center gap-3 sm:gap-6">
            <Link to="/careers" className="text-xs sm:text-sm text-black hover:text-blue-600 transition">
              Careers
            </Link>
            <span className="text-slate-400">|</span>
            <Link to="/support" className="text-xs sm:text-sm text-black hover:text-blue-600 transition">
              Support
            </Link>
            <span className="text-slate-400">|</span>
            <Link to="/login" className="text-xs sm:text-sm text-black hover:text-blue-600 transition flex items-center gap-1 font-semibold">
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVIGATION HEADER ================= */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white shadow-sm font-sans text-slate-800">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Brand Logo */}
          <Link to="/" onClick={closeAll} className="flex items-center group py-1" aria-label="Vedozy Home">
            <img
              src={logoBrand}
              alt="Vedozy LSP Logo"
              className="h-5 w-auto object-contain transform scale-150 origin-left transition-transform duration-200 group-hover:scale-165"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-2 lg:flex">
            
            {/* Loans Mega Menu Trigger */}
            <button
              onClick={() => toggleMenu("loans")}
              aria-expanded={activeMenu === "loans"}
              className={`flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-base font-medium transition ${
                activeMenu === "loans" ? "text-blue-600 bg-blue-50/50" : "text-slate-700 hover:text-blue-600"
              }`}
            >
              Loans
              <svg
                className={`h-4 w-4 transition-transform duration-200 ${activeMenu === "loans" ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* About Us Mega Menu Trigger */}
            <button
              onClick={() => toggleMenu("about")}
              aria-expanded={activeMenu === "about"}
              className={`flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-base font-medium transition ${
                activeMenu === "about" ? "text-blue-600 bg-blue-50/50" : "text-slate-700 hover:text-blue-600"
              }`}
            >
              About Us
              <svg
                className={`h-4 w-4 transition-transform duration-200 ${activeMenu === "about" ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Resources Mega Menu Trigger */}
            <button
              onClick={() => toggleMenu("resources")}
              aria-expanded={activeMenu === "resources"}
              className={`flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-base font-medium transition ${
                activeMenu === "resources" ? "text-blue-600 bg-blue-50/50" : "text-slate-700 hover:text-blue-600"
              }`}
            >
              Resources
              <svg
                className={`h-4 w-4 transition-transform duration-200 ${activeMenu === "resources" ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Partner With Us Direct Link */}
            <Link
              to="/partnerwithus"
              onClick={closeAll}
              className="rounded-xl px-4 py-2.5 text-base font-medium text-slate-700 transition hover:text-blue-600"
            >
              Partner With Us
            </Link>

            {/* Contact Direct Link */}
            <Link
              to="/contact"
              onClick={closeAll}
              className="rounded-xl px-4 py-2.5 text-base font-medium text-slate-700 transition hover:text-blue-600"
            >
              Contact
            </Link>
          </nav>

          {/* Right CTA */}
          <div className="flex items-center gap-4">
            <Link
              to="/signup"
              onClick={closeAll}
              className="inline-flex items-center justify-center bg-white text-black font-semibold text-sm uppercase tracking-wider px-6 py-3 rounded-none border border-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors duration-150"
            >
              Apply Now
            </Link>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle Menu"
              className="rounded-xl p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
            >
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* ================= MEGA MENU 1: LOANS ================= */}
        {activeMenu === "loans" && (
          <div className="hidden lg:block absolute left-0 top-full w-full border-b border-slate-200 bg-white shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="max-w-7xl mx-auto px-8 py-8">
              <div className="flex items-center justify-between pb-6 border-b border-slate-200 mb-8">
                <div className="flex items-center gap-3">
                  <span className="shrink-0">
                    <svg className="h-7 w-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </span>
                  <span className="text-xl font-bold text-slate-900">Loans Overview</span>
                </div>
                <Link
                  to="/loans"
                  onClick={closeAll}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold text-sm uppercase tracking-wider px-6 py-3 rounded-none border border-blue-600 hover:bg-blue-700 hover:border-blue-700 transition-colors duration-150 group"
                >
                  All Loans
                  <svg
                    className="h-4 w-4 text-current transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-8 pb-4">
                {LOANS_MENU.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeAll}
                    className="group flex items-center gap-4 p-3 rounded-xl transition hover:bg-slate-50"
                  >
                    <div className="shrink-0">{item.svg}</div>
                    <span className="text-base font-semibold text-slate-800 group-hover:text-blue-600 transition">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ================= MEGA MENU 2: ABOUT US ================= */}
        {activeMenu === "about" && (
          <div className="hidden lg:block absolute left-0 top-full w-full border-b border-slate-200 bg-white shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="max-w-7xl mx-auto px-8 py-10">
              <div className="grid grid-cols-12 gap-8 items-center">
                
                {/* Single-Color Icons Grid */}
                <div className="col-span-8 grid grid-cols-2 gap-y-6 gap-x-12">
                  {ABOUT_MENU.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={closeAll}
                      className="group flex items-center gap-4 p-3 rounded-xl transition hover:bg-slate-50"
                    >
                      <div className="shrink-0">{item.svg}</div>
                      <span className="text-base font-semibold text-slate-800 group-hover:text-blue-600 transition">
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>

                {/* Right Callout Card */}
                <div className="col-span-4 bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-xl p-6 flex flex-col justify-between relative overflow-hidden">
                  <div className="relative z-10 space-y-2">
                    <h4 className="text-xl font-bold leading-tight">Best Place to Work in India</h4>
                    <p className="text-base text-slate-300 leading-relaxed">
                      Best Mid-Sized Internet Company
                    </p>
                  </div>
                  <div className="pt-6 relative z-10">
                    <Link
                      to="/careers"
                      onClick={closeAll}
                      className="inline-flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-none text-sm tracking-wider transition shadow-md group"
                    >
                      <span>Careers</span>
                      <svg
                        className="h-4 w-4 text-current transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* ================= MEGA MENU 3: RESOURCES ================= */}
        {activeMenu === "resources" && (
          <div className="hidden lg:block absolute left-0 top-full w-full border-b border-slate-200 bg-white shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="max-w-7xl mx-auto px-8 py-10">
              <div className="grid grid-cols-12 gap-8 items-center">
                
                {/* Calculators & Tools Column */}
                <div className="col-span-4 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 pb-2 border-b border-slate-100">
                    Calculators & Tools
                  </h4>
                  <div className="space-y-1">
                    {RESOURCE_TOOLS.map((tool) => (
                      <Link
                        key={tool.path}
                        to={tool.path}
                        onClick={closeAll}
                        className="block rounded-xl px-4 py-3 text-base font-semibold text-slate-800 transition hover:bg-blue-50/70 hover:text-blue-600"
                      >
                        {tool.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Sectors We Serve Column */}
                <div className="col-span-4 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 pb-2 border-b border-slate-100">
                    Sectors We Serve
                  </h4>
                  <div className="space-y-1">
                    {RESOURCE_SERVICES.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        onClick={closeAll}
                        className="block rounded-xl px-4 py-3 text-base font-semibold text-slate-800 transition hover:bg-blue-50/70 hover:text-blue-600"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Calculator Visual Card */}
                <div className="col-span-4 bg-blue-50 rounded-3xl p-6 border border-blue-100 flex flex-col justify-between">
                  <div>
                    <div className="mb-2">
                      <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Calculate Your Loan EMI</h4>
                    <p className="text-base text-slate-600 leading-relaxed mb-4">
                      Estimate monthly repayments and evaluate interest rates before submitting your loan application.
                    </p>
                  </div>
                  <Link
                    to="/resources/emi-calculator"
                    onClick={closeAll}
                    className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition shadow-sm"
                  >
                    Open EMI Calculator
                  </Link>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* ================= MOBILE NAVIGATION DRAWER ================= */}
        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white px-4 py-6 lg:hidden max-h-[82vh] overflow-y-auto space-y-3 shadow-xl">
            
            {/* Mobile Loans Accordion */}
            <div className="border border-slate-100 rounded-xl p-2 bg-slate-50/50">
              <button
                onClick={() => setMobileSection((v) => (v === "loans" ? null : "loans"))}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 font-bold text-slate-800"
              >
                <span>Loans</span>
                <svg className={`h-4 w-4 transition-transform ${mobileSection === "loans" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileSection === "loans" && (
                <div className="mt-2 space-y-1 pl-2 border-l-2 border-blue-200">
                  {LOANS_MENU.map((item) => (
                    <Link key={item.path} to={item.path} onClick={closeAll} className="block rounded-lg px-3 py-2 text-sm text-slate-600 font-medium">
                      {item.label}
                    </Link>
                  ))}
                  <Link to="/loans" onClick={closeAll} className="block rounded-lg px-3 py-2 text-sm font-bold text-blue-600">
                    All Loans ↗
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile About Us Accordion */}
            <div className="border border-slate-100 rounded-xl p-2 bg-slate-50/50">
              <button
                onClick={() => setMobileSection((v) => (v === "about" ? null : "about"))}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 font-bold text-slate-800"
              >
                <span>About Us</span>
                <svg className={`h-4 w-4 transition-transform ${mobileSection === "about" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileSection === "about" && (
                <div className="mt-2 space-y-1 pl-2 border-l-2 border-blue-200">
                  {ABOUT_MENU.map((item) => (
                    <Link key={item.path} to={item.path} onClick={closeAll} className="block rounded-lg px-3 py-2 text-sm text-slate-600 font-medium">
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Resources Accordion */}
            <div className="border border-slate-100 rounded-xl p-2 bg-slate-50/50">
              <button
                onClick={() => setMobileSection((v) => (v === "resources" ? null : "resources"))}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 font-bold text-slate-800"
              >
                <span>Resources</span>
                <svg className={`h-4 w-4 transition-transform ${mobileSection === "resources" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileSection === "resources" && (
                <div className="mt-2 space-y-1 pl-2 border-l-2 border-blue-200">
                  <span className="block px-3 pt-2 text-xs font-bold uppercase tracking-wider text-blue-600">Calculators & Tools</span>
                  {RESOURCE_TOOLS.map((item) => (
                    <Link key={item.path} to={item.path} onClick={closeAll} className="block rounded-lg px-3 py-1.5 text-sm text-slate-600 font-medium">
                      {item.label}
                    </Link>
                  ))}
                  <span className="block px-3 pt-3 text-xs font-bold uppercase tracking-wider text-blue-600">Sectors We Serve</span>
                  {RESOURCE_SERVICES.map((item) => (
                    <Link key={item.path} to={item.path} onClick={closeAll} className="block rounded-lg px-3 py-1.5 text-sm text-slate-600 font-medium">
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Standalone Links */}
            <div className="space-y-1 pt-2">
              <Link to="/partnerwithus" onClick={closeAll} className="block rounded-xl px-4 py-2.5 text-base font-semibold text-slate-800 hover:bg-slate-50">
                Partner With Us
              </Link>
              <Link to="/contact" onClick={closeAll} className="block rounded-xl px-4 py-2.5 text-base font-semibold text-slate-800 hover:bg-slate-50">
                Contact
              </Link>
              <Link to="/careers" onClick={closeAll} className="block rounded-xl px-4 py-2.5 text-base font-semibold text-slate-800 hover:bg-slate-50">
                Careers
              </Link>
              <Link to="/support" onClick={closeAll} className="block rounded-xl px-4 py-2.5 text-base font-semibold text-slate-800 hover:bg-slate-50">
                Support
              </Link>
              <Link to="/login" onClick={closeAll} className="block rounded-xl px-4 py-2.5 text-base font-semibold text-slate-800 hover:bg-slate-50">
                Login
              </Link>
            </div>

            {/* Mobile CTA */}
            <div className="pt-4">
              <Link
                to="/signup"
                onClick={closeAll}
                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-none text-sm uppercase tracking-wider transition"
              >
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}