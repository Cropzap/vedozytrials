// src/pages/loans/MSMEBusinessLoan.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Building2,
  ShieldCheck,
  Percent,
  Clock,
  CheckCircle2,
  ArrowRight,
  Calculator,
  FileText,
  BadgeCheck,
  TrendingUp,
  UserCheck,
  Factory,
  Store,
  Briefcase,
  Upload,
  Search,
  Banknote,
} from "lucide-react";

export default function MSMEBusinessLoan() {
  const navigate = useNavigate();

  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState(1000000); // ₹10 Lakhs default
  const [tenureYears, setTenureYears] = useState(3); // 3 Years default
  const interestRate = 12.5; // 12.5% p.a. standard baseline

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
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <ShieldCheck size={14} /> Unsecured & Collateral Options Available
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              MSME Business Loan
            </h1>

            <p className="text-slate-300 text-base leading-relaxed">
              Fuel your enterprise growth with quick working capital, equipment financing, and flexible trade credit up to ₹5 Crore with minimal documentation.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => navigate("/dashboard")}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-600/30 flex items-center gap-2 transition-all cursor-pointer text-sm"
            >
              <span>Apply for Loan</span>
              <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </section>

      {/* ================================================================
                   2. ABOUT MSME BUSINESS LOAN SECTION
      ================================================================ */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Empowering Enterprises</span>
          <h2 className="text-3xl font-extrabold text-slate-900">What is an MSME Business Loan?</h2>
          <p className="text-slate-500 text-sm">
            Designed specifically for Micro, Small, and Medium Enterprises to maintain steady cash flows and scale operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Percent size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Competitive Rates</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Interest rates starting as low as 10.5% p.a., tailored around your business credit score and transaction history.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center">
              <TrendingUp size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">High Loan Sanction</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Access credit from ₹1 Lakh up to ₹5 Crore to fund machinery purchase, inventory restocking, or business expansion.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Clock size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Flexible Repayment</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Repayment terms spanning 12 to 60 months with customized EMI schedules matching your cash flow cycles.
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
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Eligibility Criteria</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Who Can Avail This Loan?</h2>
            <p className="text-slate-500 text-sm">
              We welcome registered businesses across manufacturing, trading, and service verticals.
            </p>
          </div>

          {/* Business Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                  <Factory size={20} />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Manufacturing Units</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Producers of raw materials, auto components, textiles, FMCG goods, and industrial equipment.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-violet-600 text-white flex items-center justify-center">
                  <Store size={20} />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Traders & Wholesalers</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Wholesale distributors, retail chains, stockists, and B2B trade merchants.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                  <Briefcase size={20} />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Service Enterprises</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                IT companies, logistics agencies, healthcare providers, and professional consultancies.
              </p>
            </div>
          </div>

          {/* Basic Prerequisites Checklist */}
          <div className="bg-slate-900 text-white p-8 rounded-3xl space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <UserCheck className="text-blue-400" size={22} />
              Basic Eligibility Requirements
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Vintage:</strong> Min. 2 years of operational history</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Turnover:</strong> Min. ₹25 Lakhs annual turnover</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Credit Score:</strong> CIBIL / CMR score of 700+</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Registration:</strong> GST & Udyam certificate</span>
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
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Fast-Track Journey</span>
          <h2 className="text-3xl font-extrabold text-slate-900">Simple 4-Step Loan Process</h2>
          <p className="text-slate-500 text-sm">Clear, transparent, and completely digital underwriting pipeline</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 relative">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-extrabold text-sm flex items-center justify-center">
              01
            </div>
            <h4 className="font-bold text-slate-900 text-base">Online Application</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Fill in your basic enterprise details and required loan amount on your portal dashboard.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 relative">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-extrabold text-sm flex items-center justify-center">
              02
            </div>
            <h4 className="font-bold text-slate-900 text-base">Upload Documents</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Upload GST returns, 12-month bank statements, and business registration proof digitally.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 relative">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-extrabold text-sm flex items-center justify-center">
              03
            </div>
            <h4 className="font-bold text-slate-900 text-base">Lender Evaluation</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Automated credit assessment and matching with institutional lending partners.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 relative">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 font-extrabold text-sm flex items-center justify-center">
              04
            </div>
            <h4 className="font-bold text-slate-900 text-base">Direct Sanction</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Receive instant digital approval letter followed by direct disbursement to your account.
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
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Financial Planning</span>
            <h2 className="text-3xl font-extrabold text-slate-900">EMI Calculator</h2>
            <p className="text-slate-500 text-sm">Estimate your monthly repayment schedule instantly</p>
          </div>

          <div className="bg-slate-50 rounded-3xl border border-slate-200/80 p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Slider Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Loan Amount Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-slate-700">Loan Amount</span>
                  <span className="text-blue-600 text-lg">₹{(loanAmount / 100000).toFixed(1)} Lakhs</span>
                </div>
                <input
                  type="range"
                  min={100000}
                  max={50000000}
                  step={100000}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
                <div className="flex justify-between text-xs text-slate-400 font-medium">
                  <span>₹1 Lakh</span>
                  <span>₹5 Crore</span>
                </div>
              </div>

              {/* Loan Tenure Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-slate-700">Tenure (Years)</span>
                  <span className="text-blue-600 text-lg">{tenureYears} Years</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={5}
                  step={1}
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
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
                <p className="text-xs text-slate-400 uppercase font-semibold tracking-wider">Monthly EMI</p>
                <p className="text-3xl font-black text-blue-400 mt-1">₹{monthlyEMI.toLocaleString("en-IN")}</p>
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
      <section className="py-20 px-6 bg-gradient-to-r from-blue-700 to-indigo-800 text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Scale Your Business Capital?
          </h2>
          <p className="text-blue-100 text-base max-w-xl mx-auto leading-relaxed">
            Apply online today and get pre-approved business credit disbursed directly to your commercial bank account.
          </p>

          <div className="pt-2">
            <button
              onClick={() => navigate("/dashboard")}
              className="bg-white hover:bg-slate-100 text-blue-900 font-extrabold px-10 py-4 rounded-xl shadow-xl transition-all cursor-pointer inline-flex items-center gap-2 text-base"
            >
              <span>Get Started Now</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}