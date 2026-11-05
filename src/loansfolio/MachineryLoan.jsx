// src/loansfolio/MachineryLoan.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Wrench,
  ShieldCheck,
  Percent,
  Clock,
  CheckCircle2,
  ArrowRight,
  Calculator,
  TrendingUp,
  UserCheck,
  Factory,
  Cog,
  Cpu,
  Truck,
  Zap,
} from "lucide-react";

export default function MachineryLoan() {
  const navigate = useNavigate();

  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState(2000000); // ₹20 Lakhs default
  const [tenureYears, setTenureYears] = useState(4); // 4 Years default
  const interestRate = 11.8; // Baseline rate for equipment & machinery financing

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
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Wrench size={14} /> Equipment Financing & Industrial Automation Upgrade
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Machinery & Equipment Loan
            </h1>

            <p className="text-slate-300 text-base leading-relaxed">
              Upgrade your plant capacity, purchase heavy industrial tools, or acquire automated manufacturing lines with specialized equipment? Get credit up to ₹15 Crore.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => navigate("/register")}
              className="bg-amber-600 hover:bg-amber-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-amber-600/30 flex items-center gap-2 transition-all cursor-pointer text-sm"
            >
              <span>Apply for Machinery Loan</span>
              <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </section>

      {/* ================================================================
                   2. ABOUT MACHINERY LOAN SECTION
      ================================================================ */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Industrial Asset Acquisition</span>
          <h2 className="text-3xl font-extrabold text-slate-900">What is a Machinery Loan?</h2>
          <p className="text-slate-500 text-sm">
            Targeted term loans enabling manufacturers and processing units to purchase new or used commercial equipment without depleting cash reserves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Cog size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Up to 90% Funding</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Finance up to 90% of the equipment invoice value including import duty, shipping, and installation costs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <TrendingUp size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Asset-Backed Security</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              The machinery being purchased serves as the primary collateral, minimizing the need for heavy additional property guarantees.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Clock size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Extended Tenures</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Repayment schedules stretching from 1 to 7 years, aligned with the operational lifespan of your asset.
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
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Eligibility Sectors</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Who Can Avail This Loan?</h2>
            <p className="text-slate-500 text-sm">
              Tailored for enterprises across manufacturing, engineering, healthcare, and industrial processing.
            </p>
          </div>

          {/* Business Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-600 text-white flex items-center justify-center">
                  <Factory size={20} />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Manufacturing Plants</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Automotive, textile mills, CNC machine operators, and heavy fabrication shops.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                  <Cpu size={20} />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Tech & Assembly Units</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Electronics component makers, packaging lines, and automated assembly line operators.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                  <Truck size={20} />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Agri-Processing & Logistics</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Cold storage builders, milling plants, sorting machinery, and fleet equipment holders.
              </p>
            </div>
          </div>

          {/* Basic Prerequisites Checklist */}
          <div className="bg-slate-900 text-white p-8 rounded-3xl space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <UserCheck className="text-amber-400" size={22} />
              Key Qualification Prerequisites
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Business Vintage:</strong> Minimum 2 years active operations</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Vendor Invoice:</strong> Proforma invoice from verified equipment dealer</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Financial Records:</strong> Audited balance sheets for last 2 years</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Credit Score:</strong> Promoter CIBIL score of 700+</span>
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
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Seamless Processing</span>
          <h2 className="text-3xl font-extrabold text-slate-900">4-Step Equipment Financing Journey</h2>
          <p className="text-slate-500 text-sm">From equipment quotation to direct vendor disbursement</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 relative">
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 font-extrabold text-sm flex items-center justify-center">
              01
            </div>
            <h4 className="font-bold text-slate-900 text-base">Submit Quotation</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Upload equipment proforma invoice along with basic enterprise loan specifications.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 relative">
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 font-extrabold text-sm flex items-center justify-center">
              02
            </div>
            <h4 className="font-bold text-slate-900 text-base">Financial Verification</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Submit GST returns, bank statements, and company balance sheets for quick audit.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 relative">
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 font-extrabold text-sm flex items-center justify-center">
              03
            </div>
            <h4 className="font-bold text-slate-900 text-base">Asset Inspection & Sanction</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Technical feasibility check of machinery and formal loan agreement execution.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 relative">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 font-extrabold text-sm flex items-center justify-center">
              04
            </div>
            <h4 className="font-bold text-slate-900 text-base">Vendor Disbursement</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Funds transferred directly to equipment supplier for immediate delivery and setup.
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
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Financial Planning</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Machinery Loan EMI Calculator</h2>
            <p className="text-slate-500 text-sm">Estimate monthly repayment obligations for your equipment purchase</p>
          </div>

          <div className="bg-slate-50 rounded-3xl border border-slate-200/80 p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Slider Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Loan Amount Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-slate-700">Equipment Value / Loan Amount</span>
                  <span className="text-amber-600 text-lg">₹{(loanAmount / 100000).toFixed(1)} Lakhs</span>
                </div>
                <input
                  type="range"
                  min={500000}
                  max={50000000}
                  step={100000}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full accent-amber-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
                <div className="flex justify-between text-xs text-slate-400 font-medium">
                  <span>₹5 Lakhs</span>
                  <span>₹5 Crore</span>
                </div>
              </div>

              {/* Loan Tenure Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-slate-700">Tenure (Years)</span>
                  <span className="text-amber-600 text-lg">{tenureYears} Years</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={7}
                  step={1}
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full accent-amber-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
                <div className="flex justify-between text-xs text-slate-400 font-medium">
                  <span>1 Year</span>
                  <span>7 Years</span>
                </div>
              </div>

              <p className="text-xs text-slate-400 italic">
                *Calculated at an indicative baseline interest rate of {interestRate}% p.a.
              </p>
            </div>

            {/* Display Output Card */}
            <div className="lg:col-span-5 bg-slate-900 text-white p-8 rounded-2xl space-y-5 shadow-lg">
              <div>
                <p className="text-xs text-slate-400 uppercase font-semibold tracking-wider">Estimated Monthly EMI</p>
                <p className="text-3xl font-black text-amber-400 mt-1">₹{monthlyEMI.toLocaleString("en-IN")}</p>
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
      <section className="py-20 px-6 bg-gradient-to-r from-amber-700 to-orange-800 text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Upgrade Your Industrial Capacity Today
          </h2>
          <p className="text-amber-100 text-base max-w-xl mx-auto leading-relaxed">
            Acquire cutting-edge machinery with flexible financing terms and quick vendor disbursement.
          </p>

          <div className="pt-2">
            <button
              onClick={() => navigate("/register")}
              className="bg-white hover:bg-slate-100 text-amber-900 font-extrabold px-10 py-4 rounded-xl shadow-xl transition-all cursor-pointer inline-flex items-center gap-2 text-base"
            >
              <span>Apply for Machinery Loan</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}