import React from "react";
import { Link } from "react-router-dom";

export default function Overview() {
  /* ================= TEMPORARILY COMMENTED OUT: LENDING PARTNERS DATA =================
  const lendingPartners = [
    {
      name: "Gromor Finance",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg",
    },
    {
      name: "Glaas",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg",
    },
    {
      name: "Credable",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Axis_Bank_logo.svg",
    },
    {
      name: "ESAF Small Finance Bank",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/SBI-Logo.svg",
    },
    {
      name: "FIDC",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Kotak_Mahindra_Bank_logo.svg",
    },
    {
      name: "Gawa Capital",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Bajaj_Finserv_Logo.svg",
    },
    {
      name: "Yes Bank",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg",
    },
  ];
  ==================================================================================== */

  const pillars = [
    {
      title: "Democratic Capital Access",
      description:
        "Bridging the structural credit gap for underserved MSMEs, emerging startups, and enterprise supply chains through data-driven digital underwriting.",
      badge: "Inclusion",
      icon: (
        <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Regulated LSP Architecture",
      description:
        "Operating as a secure, compliant Lending Service Provider (LSP) interface linking enterprise borrowers seamlessly to tier-one financial partners.",
      badge: "Compliance",
      icon: (
        <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Zero-Friction Technology",
      description:
        "From digital document parsing to automated risk scoring and direct lender matching, we eliminate manual bottlenecks in corporate credit.",
      badge: "Velocity",
      icon: (
        <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full font-sans bg-slate-50 text-slate-800 antialiased selection:bg-blue-600 selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-slate-950 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-1/4 h-96 w-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 h-80 w-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.1]">
            Architecting Next-Gen Financial Infrastructure for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-400">Indian Business</span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-slate-300 max-w-3xl font-normal leading-relaxed">
            Vedozy is a tech-first Lending Service Provider (LSP) empowering enterprises, mid-market businesses, and agricultural supply chains across India with institutional-grade credit solutions.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link
              to="/partnerwithus"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl transition duration-150 shadow-lg shadow-blue-600/20"
            >
              Partner With Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-200 font-semibold px-7 py-3.5 rounded-xl transition duration-150 backdrop-blur-sm"
            >
              Contact Advisory Team
            </Link>
          </div>
        </div>
      </section>

      {/* ================= BASIC ABOUT CONTENTS (LEFT TEXT, RIGHT IMAGE) ================= */}
      <section className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side Content */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Our Strategic Purpose</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Re-engineering Credit Access through Real-Time Enterprise Intelligence
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Traditional credit assessment models rely heavily on historic balance sheets, often failing to account for forward cash flows, order books, and real-time operational momentum. 
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              At Vedozy, we bridge this structural divide by integrating real-time trade signals, procurement activity, and corporate data directly with regulated financial partners (Banks & NBFCs)—ensuring fast, transparent, and fair capital allocation.
            </p>
          </div>

          {/* Right Side Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
                alt="FinTech Digital Infrastructure"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none" />
            </div>
          </div>

        </div>

        {/* ================= MISSION & VISION CARDS (FLAT PAGE-ALIGNED STYLING) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 pt-12 border-t border-slate-200">
          
          {/* Vision Card */}
          <div className="bg-slate-50 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-blue-100 text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-slate-900">Vision</span>
            </div>
            <p className="text-slate-600 text-base leading-relaxed pl-1">
              To build the unified digital financial backbone connecting corporate supply chains, MSMEs, and top-tier institutional lenders seamlessly across India.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-slate-50 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-indigo-100 text-indigo-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-slate-900">Mission</span>
            </div>
            <ul className="space-y-2.5 text-slate-600 text-base leading-relaxed pl-1">
              <li className="flex items-start gap-2.5">
                <span className="h-2 w-2 rounded-full bg-indigo-500 mt-2 shrink-0" />
                <span>Democratize corporate capital access by engineering secure, transparent, and digital-first lending gateways.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-2 w-2 rounded-full bg-indigo-500 mt-2 shrink-0" />
                <span>Eliminate underwriting friction for underserved MSMEs and high-growth commercial enterprises.</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* ================= OUR LENDING PARTNERS SECTION (TEMPORARILY COMMENTED OUT) =================
      <section className="bg-white py-20 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Partners
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Our collaboration with strategic partners, lending partners, and industry associations, accelerate growth for India’s entrepreneurs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lendingPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-white border border-slate-300 rounded-none p-8 flex flex-col items-center justify-center h-40"
              >
                <div className="h-16 w-full flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-12 max-w-[85%] object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      ================================================================================================= */}

      {/* ================= CORE PILLARS / FEATURES ================= */}
      <section className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">The Vedozy Advantage</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Built for Operational Excellence</h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Designed from the ground up to serve both ambitious enterprise borrowers and regulated financial institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div 
                key={index} 
                className="bg-white border border-slate-200/90 rounded-2xl p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-12 w-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                      {pillar.icon}
                    </div>
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full uppercase tracking-wider">
                      {pillar.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{pillar.title}</h3>
                  <p className="text-slate-600 text-base leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 sm:p-16 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="space-y-4 text-center lg:text-left max-w-2xl relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Ready to Empower Your Capital Pipeline?</h2>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
              Whether you are an enterprise seeking customized credit lines or an institutional lender exploring partner integration, let's talk.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto relative z-10">
            <Link
              to="/partnerwithus"
              className="inline-flex items-center justify-center bg-white text-blue-700 font-bold px-8 py-4 rounded-xl text-sm uppercase tracking-wider hover:bg-slate-50 transition shadow-lg text-center"
            >
              Partner With Us
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center border border-blue-400/50 bg-blue-700/50 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-xl text-sm uppercase tracking-wider transition text-center"
            >
              Contact Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}