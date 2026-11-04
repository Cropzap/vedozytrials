// src/pages/Loans.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  CheckCircle2
} from "lucide-react";

export default function Loans() {
  const navigate = useNavigate();

  const loanProducts = [
    {
      id: "msme-business-loan",
      category: "Business",
      image: "https://images.unsplash.com/photo-1556742049-0a67d553c2a8?q=80&w=800&auto=format&fit=crop",
      title: "MSME Business Loan",
      description: "Flexible, collateral-free financing designed to help established micro, small, and medium enterprises expand operations, buy inventory, or scale outlets.",
      amount: "₹1 Lakh – ₹50 Lakhs",
      tenure: "12 – 60 Months",
      targetAudience: "Established MSMEs & Manufacturers",
    },
    {
      id: "startup-loan",
      category: "Startup",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
      title: "Startup Loan",
      description: "Tailored financial backing to fuel early-stage growth, product development, technology upgrades, and initial market entry for new founders.",
      amount: "₹5 Lakhs – ₹25 Lakhs",
      tenure: "6 – 36 Months",
      targetAudience: "Early-stage & Day-1 Startups",
    },
    {
      id: "working-capital-loan",
      category: "Working Capital",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
      title: "Working Capital Loan",
      description: "Instant liquidity solutions to manage day-to-day operational expenses, payroll, seasonal spikes, and inventory purchasing cycles smoothly.",
      amount: "₹2 Lakhs – ₹1 Crore",
      tenure: "3 – 24 Months",
      targetAudience: "Businesses with active inventory cycles",
    },
    {
      id: "machinery-loan",
      category: "Asset Finance",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
      title: "Machinery Loan",
      description: "Affordable asset-backed financing to procure high-performance equipment, factory tools, and industrial machinery to boost manufacturing capacity.",
      amount: "₹5 Lakhs – ₹2 Crores",
      tenure: "12 – 84 Months",
      targetAudience: "Manufacturing & Production Units",
    },
    {
      id: "supply-chain-financing",
      category: "Supply Chain",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
      title: "Supply Chain Financing",
      description: "Optimized credit lines bridging cash flow gaps across your vendors, distributors, and buyers with automated invoice discounting.",
      amount: "₹10 Lakhs – ₹5 Crores",
      tenure: "30 – 180 Days",
      targetAudience: "Vendors, Distributors & Channel Partners",
    }
  ];

  const steps = [
    { number: "01", title: "Apply Online", desc: "Fill out our quick, secure digital application form with basic business details." },
    { number: "02", title: "Document Verification", desc: "Submit minimal paperwork digitally; our underwriting engine processes data securely." },
    { number: "03", title: "Offer Matching", desc: "Get matched with top RBI-regulated banking and NBFC partners for the best rates." },
    { number: "04", title: "Quick Disbursal", desc: "Funds are directly credited to your business bank account within 24 to 48 hours." }
  ];

  const benefits = [
    { title: "Zero Upfront Hidden Fees", desc: "Transparent Lending Service Provider framework with absolute clarity on all costs." },
    { title: "Collateral-Free Options", desc: "Unsecured business and startup loans designed to scale your operations without asset blocks." },
    { title: "Tailored Repayment Schedules", desc: "Flexible credit terms aligned closely with your business sales and cash flow cycles." },
    { title: "Dedicated Support Advisors", desc: "Expert guidance from application to disbursal and throughout your loan lifecycle." }
  ];

  

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white py-20 px-6 sm:px-12 lg:px-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-blue-500/15 text-blue-300 border border-blue-500/30 shadow-sm backdrop-blur-md">
            <Sparkles size={16} /> Comprehensive Credit Portfolio
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Explore Our Business Loan Solutions
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Transparent, digital-first financing products engineered to fuel growth for MSMEs, startups, and expanding enterprises.
          </p>
        </div>
      </section>

      {/* Loan Products Grid */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {loanProducts.map((loan) => (
            <div 
              key={loan.id}
              className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 min-h-[580px]"
            >
              <div>
                <div className="relative h-60 w-full overflow-hidden">
                  <img 
                    src={loan.image} 
                    alt={loan.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-slate-900/85 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
                    {loan.category}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {loan.title}
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed mb-6">
                    {loan.description}
                  </p>

                  <hr className="border-slate-100 my-6" />

                  <div className="space-y-3.5 mb-6">
                    <div className="flex items-center gap-3 text-sm sm:text-base text-slate-800 font-semibold">
                      <CheckCircle2 size={18} className="text-blue-600 shrink-0" />
                      <span>{loan.amount}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm sm:text-base text-slate-800 font-semibold">
                      <CheckCircle2 size={18} className="text-blue-600 shrink-0" />
                      <span>{loan.tenure}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm sm:text-base text-slate-800 font-semibold">
                      <CheckCircle2 size={18} className="text-blue-600 shrink-0" />
                      <span>{loan.targetAudience}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0">
                <button
                  onClick={() => navigate("/register", { state: { selectedLoan: loan.title } })}
                  className="w-full bg-slate-900 hover:bg-blue-600 text-white font-bold py-4 rounded-2xl text-base flex items-center justify-center gap-2.5 transition-all duration-200 cursor-pointer shadow-md group-hover:shadow-lg"
                >
                  Apply for {loan.title} <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Easy Process: How to Apply for a Loan */}
      <section className="py-20 px-6 sm:px-12 lg:px-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              Seamless Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-3">
              How to Apply for a Loan
            </h2>
            <p className="text-slate-600 text-base">
              Get your business funded in 4 quick, digital-first, and transparent steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-blue-600 font-mono text-3xl font-extrabold mb-4 block">{item.number}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Vedozy */}
      <section className="py-20 px-6 sm:px-12 lg:px-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              The Vedozy Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-3">
              Why Choose Vedozy
            </h2>
            <p className="text-slate-600 text-base">
              We empower modern business founders with dependable liquidity, security, and partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((b, idx) => (
              <div key={idx} className="bg-white border border-slate-200/80 p-8 rounded-2xl shadow-sm flex items-start gap-4">
                <div className="bg-blue-50 text-blue-600 p-3 rounded-xl shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{b.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* Final CTA: Free Consultation */}
      <section className="py-20 px-6 sm:px-12 lg:px-20 bg-slate-50 border-t border-slate-200 text-center">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100/50 border border-blue-100 rounded-3xl p-10 sm:p-16 shadow-lg">
          <div className="max-w-2xl mx-auto space-y-5">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 border border-blue-200 inline-block">
              Expert Guidance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Ready to Accelerate Your Business Growth?
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Book a free consultation session with our expert credit advisors today and discover the right financing option tailored for your enterprise.
            </p>
            <div className="pt-4">
              <button
                onClick={() => navigate("/register")}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-9 py-4 rounded-full inline-flex items-center gap-2.5 transition-all cursor-pointer shadow-lg shadow-blue-600/30 text-base"
              >
                Free Consultation <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}