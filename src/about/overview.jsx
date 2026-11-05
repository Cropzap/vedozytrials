import React from "react";
import { Link } from "react-router-dom";

export default function Overview() {
  const stats = [
    { label: "Partner Institutions", value: "25+" },
    { label: "MSMEs & Enterprises Onboarded", value: "10,000+" },
    { label: "Capital Facilitated", value: "₹500+ Cr" },
    { label: "Turnaround Time", value: "< 48 Hrs" },
  ];

  const pillars = [
    {
      title: "Democratic Capital Access",
      description:
        "Bridging the credit gap for underserved MSMEs, startups, and enterprise supply chains through tech-enabled underwriting and data integration.",
      icon: (
        <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "LSP Tech Architecture",
      description:
        "Operating as a secure Lending Service Provider (LSP) interface connecting borrowers directly to regulated Banks and NBFCs.",
      icon: (
        <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "End-to-End Digitization",
      description:
        "From digital application parsing to automated credit evaluation and instantaneous partner matching, we eliminate friction in B2B credit.",
      icon: (
        <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full font-sans bg-slate-50 text-slate-800">
      
      {/* ================= HERO SECTION ================= */}
      <section className="bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            About Vedozy
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-tight">
            Architecting Next-Generation Corporate & MSME Financial Infrastructure
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            Vedozy is a technology-driven Lending Service Provider (LSP) empowering enterprises, small businesses, and supply chains across India with seamless access to formal credit.
          </p>
        </div>
      </section>

      {/* ================= METRICS BAR ================= */}
      <section className="max-w-7xl mx-auto -mt-10 px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-slate-100 p-6 sm:p-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-4 text-center">
              <p className="text-3xl sm:text-4xl font-extrabold text-blue-600">{stat.value}</p>
              <p className="text-sm font-medium text-slate-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Transforming B2B Financing Through Transparency & Tech
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Traditional credit assessment models often overlook dynamic growth metrics, leaving emerging businesses underfunded. At Vedozy, we streamline credit evaluation by aggregating real-time corporate health indicators, inventory data, and trade records.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              By bridging borrowers and regulated financial institutions (NBFCs & Banks), we ensure enterprise borrowers receive competitive interest rates, transparent terms, and rapid disbursement schedules.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-900 to-slate-900 text-white p-8 sm:p-10 rounded-3xl shadow-xl space-y-8">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-blue-400">Our Mission</h3>
              <p className="text-slate-200 text-base leading-relaxed">
                To democratize capital access for micro, small, and medium enterprises by building transparent, digital-first credit distribution pathways.
              </p>
            </div>
            <div className="border-t border-slate-700/80 pt-6 space-y-3">
              <h3 className="text-xl font-bold text-blue-400">Our Vision</h3>
              <p className="text-slate-200 text-base leading-relaxed">
                To become India's premier enterprise enablement and lending ecosystem, unlocking growth capital for millions of businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE PILLARS ================= */}
      <section className="bg-white py-20 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">Why Businesses Trust Vedozy</h2>
            <p className="text-base text-slate-600">
              Built on a foundation of regulatory compliance, secure data architecture, and borrower-centric financial tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-8 hover:shadow-md transition">
                <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{pillar.title}</h3>
                <p className="text-base text-slate-600 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-blue-600 rounded-3xl p-10 sm:p-14 text-white shadow-xl space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Ready to Accelerate Your Business Growth?</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Explore customized financing options tailored for your business model or join our platform early.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center bg-white text-blue-600 font-bold px-8 py-3.5 rounded-none uppercase text-sm tracking-wider hover:bg-slate-100 transition shadow-md"
            >
              Join Wishlist
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-blue-700 text-white font-bold px-8 py-3.5 rounded-none uppercase text-sm tracking-wider border border-blue-500 hover:bg-blue-800 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}