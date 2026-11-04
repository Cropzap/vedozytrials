// src/pages/Home.jsx

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Check, 
  Briefcase, 
  Rocket, 
  Wallet, 
  Cog, 
  Link, 
  ArrowRight, 
  Building2, 
  TrendingUp,
  ShieldCheck,
  Target,
  Users
} from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  // Hero section images carousel
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideImages = [
    "https://media.istockphoto.com/id/1279988363/photo/female-textile-workers-standing-together-in-solidarity-at-factory.jpg?s=612x612&w=0&k=20&c=owiqqVaRxO6xaQVASeS7dCNXMLqI3_CaCSojMApMOVY=",
    "https://www.entrepreneurindia.co/blogs/wp-content/uploads/2026/09/Manufacturing-Empire.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmxiPU9rO2hmyaOu6UIO09XHQjAhagdGcABovA1ZNq8sW00YKnrqOQBZ-K&s=10",
    "https://cdn.shopify.com/s/files/1/1006/4494/6286/files/71c154fc-da80-4280-a7f6-8114e07ea1b0-99kb.jpg?v=1793102973"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slideImages.length]); 

  const coreServices = [
    {
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      title: "MSME Business Loan",
      desc: "Flexible, collateral-free financing designed to help established micro, small, and medium enterprises expand operations."
    },
    {
      icon: <Rocket className="w-8 h-8 text-blue-600" />,
      title: "Startup Loan",
      desc: "Tailored financial backing to fuel early-stage growth, product development, and initial market entry."
    },
    {
      icon: <Wallet className="w-8 h-8 text-blue-600" />,
      title: "Working Capital Loan",
      desc: "Instant liquidity solutions to manage day-to-day operational expenses, payroll, and inventory cycles smoothly."
    },
    {
      icon: <Cog className="w-8 h-8 text-blue-600" />,
      title: "Machinery Loan",
      desc: "Affordable asset-backed financing to procure high-performance equipment, tools, and industrial machinery."
    },
    {
      icon: <Link className="w-8 h-8 text-blue-600" />,
      title: "Supply Chain Financing",
      desc: "Optimized credit lines bridging cash flow gaps across your vendors, buyers, and distribution networks."
    }
  ];

  const steps = [
    { step: "01", title: "Check Eligibility", desc: "Fill out our quick digital application form with basic business and personal details." },
    { step: "02", title: "Instant Offer & KYC", desc: "Get real-time loan offers matched with top lending partners and complete fast digital KYC." },
    { step: "03", title: "Quick Verification", desc: "Our automated underwriting engine verifies business data seamlessly with zero hassle." },
    { step: "04", title: "Disbursal", desc: "Funds are directly credited to your registered business account within 24–48 hours." }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans overflow-hidden">
      
      {/* 1. Hero Banner Section */}
      <section className="relative w-full min-h-screen flex items-center bg-slate-900 overflow-hidden">
        
        {/* Background Image Slider */}
        {slideImages.map((imgUrl, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10'
            }`}
          >
            <img
              src={imgUrl}
              alt="Vedozy LSP Background"
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}

        {/* Solid Light-compatible Dark Gradient Overlay on the Left Side */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent z-10 w-full lg:w-3/5 pointer-events-none" />

        {/* Content Container positioned to the left */}
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-12 lg:px-20 relative z-20 py-20 flex flex-col justify-center text-white">
          <div className="max-w-xl text-left">
            
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-8 leading-[1.1]">
              Dreams Deserve<br />
              <span className="text-blue-400">Financial Wings</span>
            </h1>

            {/* Public Notice / Subtext block */}
            <div className="mb-8 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              <span className="text-amber-400 font-semibold">Public Notice:</span> Vedozy will not charge any fee through UPI and all the transactions will take care only in the approved current account of vedozy or its parent entity Hivictus Private Limited. Do not share OTPs or sensitive credentials with unverified contacts. For official support or inquiries, email us at{" "}
              <a href="mailto:help@vedozy.com" className="text-blue-400 underline hover:text-blue-300">
                help@vedozy.com
              </a>
            </div>

            {/* Trust / Verification Badge */}
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0 text-slate-900 shadow-md">
                <Check size={16} strokeWidth={3} />
              </div>
              <span className="text-sm font-medium text-slate-200 tracking-wide">
                Verified Lending Service Provider
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 2. About Section (Positioned directly after Hero) */}
      <section className="py-20 px-6 sm:px-12 lg:px-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            <Building2 size={14} /> About Vedozy
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            Empowering Indian Businesses with Compliant & Seamless Credit Access
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Vedozy is a premier Lending Service Provider (LSP) platform powered by <strong className="text-slate-900">Hivictus Private Limited</strong>. We serve as a digital bridge connecting Indian MSMEs, manufacturers, and growing enterprises with RBI-regulated Banks and NBFCs.
          </p>
          
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Our mission is to eliminate capital bottlenecks through technological innovation, transparent underwriting, and fair financial practices—enabling business owners to secure timely credit without predatory fees or complex bureau procedures.
          </p>

          {/* Key Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <ShieldCheck className="w-6 h-6 text-blue-600 mb-2" />
              <h4 className="font-bold text-slate-900 text-sm mb-1">RBI Compliant</h4>
              <p className="text-xs text-slate-500">Fully transparent, regulated digital lending ecosystem.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <Target className="w-6 h-6 text-blue-600 mb-2" />
              <h4 className="font-bold text-slate-900 text-sm mb-1">Tailored Credit</h4>
              <p className="text-xs text-slate-500">Customized loan structures aligned with your cash flow.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <Users className="w-6 h-6 text-blue-600 mb-2" />
              <h4 className="font-bold text-slate-900 text-sm mb-1">Trusted Partner</h4>
              <p className="text-xs text-slate-500">Backing entrepreneurs across manufacturing & services.</p>
            </div>
          </div>

          {/* About Us Button */}
          <div className="pt-4">
            <button
              onClick={() => navigate("/about/overview")}
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-3.5 rounded-full inline-flex items-center gap-2 transition-all cursor-pointer shadow-md"
            >
              Know More About Us <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 3. Features / Core Services Grid */}
      <section className="py-24 px-6 sm:px-12 lg:px-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">Our Core Credit Solutions</h2>
            <p className="text-slate-600 text-sm sm:text-base">Comprehensive financing products tailored to scale your business at every stage.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-8 rounded-2xl hover:border-blue-500 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
                <div>
                  <div className="mb-6 bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.desc}</p>
                </div>
                <button 
                  onClick={() => navigate("/register")}
                  className="text-blue-600 text-sm font-semibold flex items-center gap-2 hover:text-blue-700 cursor-pointer"
                >
                  Join in Wishlist<ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Smart Digital Credit Management & Flexible Repayment */}
      <section className="py-20 px-6 sm:px-12 lg:px-20 bg-gradient-to-br from-blue-50 via-slate-50 to-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 border border-blue-200 mb-6">
              <TrendingUp size={14} /> Designed for Growth
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-6">Built Around Your Business Cash Flow Cycles</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              Manage your business credit seamlessly through advanced digital dashboards. We align repayment schedules with your business receivables and revenue cycles, ensuring your cash flow remains uninterrupted while you scale.
            </p>
            <ul className="space-y-3 mb-8 text-sm text-slate-700">
              <li className="flex items-center gap-2"><Check size={16} className="text-blue-600" /> Flexible repayment structures mapped to sales cycles</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-blue-600" /> Real-time tracking of active loan usage and balances</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-blue-600" /> Fully transparent terms with zero hidden processing costs</li>
            </ul>
            <button
              onClick={() => navigate("/register")}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3.5 rounded-full inline-flex items-center gap-2 transition-all cursor-pointer shadow-md shadow-blue-600/20"
            >
              Check Your Credit Limit <ArrowRight size={16} />
            </button>
          </div>
          <div className="bg-white border border-slate-200 p-8 rounded-2xl relative overflow-hidden shadow-md">
            <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-48 h-48 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
            <h3 className="text-xl font-bold text-slate-900 mb-4">Transparent Lending Framework</h3>
            <p className="text-slate-600 text-sm mb-6">Clear financial metrics designed to empower MSMEs with total clarity and control.</p>
            <div className="space-y-4 font-mono text-xs text-slate-700">
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex justify-between items-center">
                <span>Interest Rate Transparency</span>
                <span className="text-blue-600 font-bold">100% Clear & Fixed</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex justify-between items-center">
                <span>Prepayment Penalties</span>
                <span className="text-blue-600 font-bold">Zero Charges</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex justify-between items-center">
                <span>Dashboard Access</span>
                <span className="text-blue-600 font-bold">24/7 Real-Time View</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. How It Works Section */}
      <section className="py-24 px-6 sm:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">How Vedozy Works</h2>
            <p className="text-slate-600 text-sm sm:text-base">Get funded in four transparent, digital-first steps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((item, idx) => (
              <div key={idx} className="relative p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-blue-600 font-mono text-2xl font-bold mb-4 block">{item.step}</span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Call To Action CTA - Apply Now */}
      <section className="py-20 px-6 sm:px-12 lg:px-20 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Ready to Accelerate Your Business Growth?</h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Apply today to get instant capital offers from verified lending partners with zero hidden fees.
          </p>
          <div className="pt-4">
            <button
              onClick={() => navigate("/register")}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-full inline-flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-blue-600/30"
            >
              Join in Wishlist <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 7. Partner With Us - NBFC Registration */}
      <section className="py-20 px-6 sm:px-12 lg:px-20 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 mb-4">
              <Building2 size={14} /> Lending Partners Network
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3">Partner With Us for NBFC Registration & Co-Lending</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Are you an NBFC, Bank, or financial institution looking to expand your digital lending footprint? Join forces with Vedozy to leverage our advanced tech stack, secure compliance frameworks, and deep borrower reach.
            </p>
          </div>
          <div>
            <button
              onClick={() => navigate("/partnerwithus")}
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-full inline-flex items-center gap-2 transition-all cursor-pointer shrink-0 shadow-md"
            >
              Partner With Us <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}