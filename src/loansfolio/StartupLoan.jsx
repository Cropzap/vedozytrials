// src/loansfolio/StartupLoan.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Rocket,
  ShieldCheck,
  Percent,
  Clock,
  CheckCircle2,
  ArrowRight,
  Calculator,
  BadgeCheck,
  TrendingUp,
  UserCheck,
  Lightbulb,
  Building2,
  Sparkles,
  Briefcase,
  Target,
} from "lucide-react";

export default function StartupLoan() {
  const navigate = useNavigate();

  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState(1500000); // ₹15 Lakhs default
  const [tenureYears, setTenureYears] = useState(3); // 3 Years default
  const interestRate = 11.5; // Baseline rate for DPIIT registered startups

  const calculateEMI = () => {
    const r = interestRate / 12 / 100;
    const n = tenureYears * 12;
    const emi = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  };

  const monthlyEMI = calculateEMI();
  const totalPayment = monthlyEMI * tenureYears * 12;
  const totalInterest = totalPayment - loanAmount;

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">

      {/* ================================================================
                          1. SHORT HERO SECTION
      ================================================================ */}
      <section className="bg-slate-900 text-white py-14 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20">
              <Rocket size={14} /> Fast-Track Seed & Growth Capital Infrastructure
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Startup Credit Loan
            </h1>

            <p className="text-slate-300 text-base leading-relaxed">
              Transform early-stage innovation into commercial scale. Access growth capital, runway extension funds, and tech deployment credit up to ₹2 Crore.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => navigate("/register")}
              className="bg-violet-600 hover:bg-violet-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-violet-600/30 flex items-center gap-2 transition-all cursor-pointer text-sm"
            >
              <span>Apply for Startup Capital</span>
              <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </section>

      {/* ================================================================
                   2. ABOUT STARTUP LOAN SECTION
      ================================================================ */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-violet-600 uppercase tracking-widest">Early-Stage Enablement</span>
          <h2 className="text-3xl font-extrabold text-slate-900">What is a Startup Loan?</h2>
          <p className="text-slate-500 text-sm">
            Custom credit solutions designed for tech-driven, scalable, and high-impact early-stage business models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center">
              <Sparkles size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">No Hard Collateral Options</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Leverage government credit guarantee schemes (CGTMSE) and alternative credit evaluation metrics.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <TrendingUp size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Flexible Moratorium</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Interest-only period options during initial product deployment and revenue stabilization phases.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Clock size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Rapid Digital Processing</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Streamlined evaluation based on pitch decks, bank cash flows, and DPIIT startup recognition status.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================
                      3. WHO CAN AVAIL SECTION
      ================================================================ */}
      <section className="py-16 px-6 bg-white border-y border-slate-200/80">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-violet-600 uppercase tracking-widest">Target Categories</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Who Can Avail This Loan?</h2>
            <p className="text-slate-500 text-sm">
              Tailored for registered startups across technology, commerce, manufacturing, and agritech.
            </p>
          </div>

          {/* Business Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-violet-600 text-white flex items-center justify-center">
                  <Lightbulb size={20} />
                </div>
                <h3 className="font-bold text-slate-900 text-base">DPIIT Recognized Startups</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Entities certified under the Startup India initiative seeking non-dilutive capital.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                  <Target size={20} />
                </div>
                <h3 className="font-bold text-slate-900 text-base">SaaS & Tech Platforms</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Early revenue tech firms needing runway for engineering, cloud infra, and customer acquisition.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                  <Building2 size={20} />
                </div>
                <h3 className="font-bold text-slate-900 text-base">B2B Trade & AgriTech</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Supply chain startups, market-access platforms, and commercial venture builders.
              </p>
            </div>
          </div>

          {/* Basic Prerequisites Checklist */}
          <div className="bg-slate-900 text-white p-8 rounded-3xl space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <UserCheck className="text-violet-400" size={22} />
              Startup Prerequisites
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Incorporation:</strong> Private Limited or Registered LLP</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Entity Age:</strong> Less than 10 years from registration date</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Founder Credit:</strong> Clean promoter CIBIL score (680+)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Validation:</strong> Working prototype / MVP or early traction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
                      4. LOAN PROCESS SECTION
      ================================================================ */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-violet-600 uppercase tracking-widest">Transparent Underwriting</span>
          <h2 className="text-3xl font-extrabold text-slate-900">4-Step Application Journey</h2>
          <p className="text-slate-500 text-sm">Designed to get your startup funded without administrative delays</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 relative">
            <div className="w-10 h-10 rounded-full bg-violet-100 text-violet-600 font-extrabold text-sm flex items-center justify-center">
              01
            </div>
            <h4 className="font-bold text-slate-900 text-base">Submit Venture Deck</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Share basic entity incorporation details, business pitch deck, and traction metrics.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 relative">
            <div className="w-10 h-10 rounded-full bg-violet-100 text-violet-600 font-extrabold text-sm flex items-center justify-center">
              02
            </div>
            <h4 className="font-bold text-slate-900 text-base">Document Audit</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Upload GST filings, founder KYC, and bank statements for automated credit scoring.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 relative">
            <div className="w-10 h-10 rounded-full bg-violet-100 text-violet-600 font-extrabold text-sm flex items-center justify-center">
              03
            </div>
            <h4 className="font-bold text-slate-900 text-base">Partner Sanction</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Match with partner NBFCs and fintech lenders for optimal credit terms and rates.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 relative">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 font-extrabold text-sm flex items-center justify-center">
              04
            </div>
            <h4 className="font-bold text-slate-900 text-base">Capital Payout</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Receive digital sanction agreement followed by direct disbursement to company account.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================
                        5. EMI CALCULATOR SECTION
      ================================================================ */}
      <section className="py-16 px-6 bg-white border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-violet-600 uppercase tracking-widest">Financial Planning</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Startup Loan EMI Calculator</h2>
            <p className="text-slate-500 text-sm">Estimate capital requirements and monthly cash flow outflow</p>
          </div>

          <div className="bg-slate-50 rounded-3xl border border-slate-200/80 p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Slider Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Loan Amount Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-slate-700">Required Credit Amount</span>
                  <span className="text-violet-600 text-lg">₹{(loanAmount / 100000).toFixed(1)} Lakhs</span>
                </div>
                <input
                  type="range"
                  min={100000}
                  max={20000000}
                  step={100000}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full accent-violet-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
                <div className="flex justify-between text-xs text-slate-400 font-medium">
                  <span>₹1 Lakh</span>
                  <span>₹2 Crore</span>
                </div>
              </div>

              {/* Loan Tenure Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-slate-700">Tenure (Years)</span>
                  <span className="text-violet-600 text-lg">{tenureYears} Years</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={5}
                  step={1}
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full accent-violet-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
                <div className="flex justify-between text-xs text-slate-400 font-medium">
                  <span>1 Year</span>
                  <span>5 Years</span>
                </div>
              </div>

              <p className="text-xs text-slate-400 italic">
                *Calculated at an indicative baseline interest rate of {interestRate}% p.a.
              </p>
            </div>

            {/* Display Output Card */}
            <div className="lg:col-span-5 bg-slate-900 text-white p-8 rounded-2xl space-y-5 shadow-lg">
              <div>
                <p className="text-xs text-slate-400 uppercase font-semibold tracking-wider">Monthly Outflow (EMI)</p>
                <p className="text-3xl font-black text-violet-400 mt-1">₹{monthlyEMI.toLocaleString("en-IN")}</p>
              </div>

              <div className="space-y-2.5 border-t border-slate-800 pt-4 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Principal Amount</span>
                  <span className="font-semibold text-white">₹{loanAmount.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Total Interest Payable</span>
                  <span className="font-semibold text-white">₹{totalInterest.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-slate-300 border-t border-slate-800 pt-2.5 font-bold text-white text-sm">
                  <span>Total Amount Payable</span>
                  <span>₹{totalPayment.toLocaleString("en-IN")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
                          6. FINAL CTA SECTION
      ================================================================ */}
      <section className="py-20 px-6 bg-gradient-to-r from-violet-700 to-indigo-800 text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Accelerate Your Startup's Growth Runway
          </h2>
          <p className="text-violet-100 text-base max-w-xl mx-auto leading-relaxed">
            Apply online today and get connected with our specialized institutional lending pipeline.
          </p>

          <div className="pt-2">
            <button
              onClick={() => navigate("/register")}
              className="bg-white hover:bg-slate-100 text-violet-900 font-extrabold px-10 py-4 rounded-xl shadow-xl transition-all cursor-pointer inline-flex items-center gap-2 text-base"
            >
              <span>Apply for Startup Credit</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}