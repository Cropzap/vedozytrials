// src/loansfolio/workingcapitalloan.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  RefreshCw,
  ShieldCheck,
  Percent,
  Clock,
  CheckCircle2,
  ArrowRight,
  Calculator,
  TrendingUp,
  UserCheck,
  Building2,
  Store,
  Factory,
  Layers,
  Coins,
  Wallet,
} from "lucide-react";

export default function WorkingCapitalLoan() {
  const navigate = useNavigate();

  // EMI / Cash Outflow Calculator State
  const [loanAmount, setLoanAmount] = useState(2500000); // ₹25 Lakhs default
  const [tenureYears, setTenureYears] = useState(2); // 2 Years default
  const interestRate = 11.0; // Baseline rate for Working Capital credit lines

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
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <RefreshCw size={14} /> Short-Term Liquidity & Cash Flow Optimization
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Working Capital Loan
            </h1>

            <p className="text-slate-300 text-base leading-relaxed">
              Maintain seamless daily operations, bridge receivable gaps, pay supplier invoices on time, and handle seasonal demand spikes with credit up to ₹10 Crore.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => navigate("/register")}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-emerald-600/30 flex items-center gap-2 transition-all cursor-pointer text-sm"
            >
              <span>Apply for Working Capital</span>
              <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </section>

      {/* ================================================================
                   2. ABOUT WORKING CAPITAL LOAN SECTION
      ================================================================ */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Operational Cash Liquidity</span>
          <h2 className="text-3xl font-extrabold text-slate-900">What is a Working Capital Loan?</h2>
          <p className="text-slate-500 text-sm">
            Credit facilities structured specifically to finance everyday business operations, inventory cycles, and short-term liabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Wallet size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Multiple Credit Formats</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Available as Cash Credit (CC), Overdraft (OD) limit, term credit, or invoice discounting.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Coins size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Pay Interest Only on Usage</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              For revolving overdraft facilities, pay interest exclusively on the amount drawn, not the full limit.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center">
              <Clock size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Flexible Renewal Terms</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Tenures ranging from 12 to 36 months with hassle-free annual credit limit renewals.
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
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Target Sectors</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Who Can Avail This Loan?</h2>
            <p className="text-slate-500 text-sm">
              Designed for operating businesses with active sales cycles requiring smooth cash flow management.
            </p>
          </div>

          {/* Business Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                  <Factory size={20} />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Manufacturers & Processors</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Purchase raw materials in bulk, fund WIP inventory, and cover labor & utility bills.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                  <Store size={20} />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Wholesalers & Distributors</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Stock seasonal inventory, offer trade credit terms to retailers, and scale order fulfillment.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-violet-600 text-white flex items-center justify-center">
                  <Layers size={20} />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Agri & FMCG Traders</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Bridge 30-90 day credit gaps between procurement cycles and customer payment settlements.
              </p>
            </div>
          </div>

          {/* Basic Prerequisites Checklist */}
          <div className="bg-slate-900 text-white p-8 rounded-3xl space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <UserCheck className="text-emerald-400" size={22} />
              Key Qualification Prerequisites
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Business Vintage:</strong> Minimum 1.5 to 2 years active operations</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Annual Turnover:</strong> Min. ₹30 Lakhs audited turnover</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Bank Conduct:</strong> Healthy bank cash flows without cheque bounces</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>GST Status:</strong> Active GST registration and regular filing</span>
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
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Streamlined Onboarding</span>
          <h2 className="text-3xl font-extrabold text-slate-900">Simple 4-Step Application</h2>
          <p className="text-slate-500 text-sm">Rapid evaluation to get your operational capital moving</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 relative">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 font-extrabold text-sm flex items-center justify-center">
              01
            </div>
            <h4 className="font-bold text-slate-900 text-base">Submit Credit Request</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Provide required working capital limit and basic business credentials online.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 relative">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 font-extrabold text-sm flex items-center justify-center">
              02
            </div>
            <h4 className="font-bold text-slate-900 text-base">Upload Financials</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Attach 12-month bank statements, GST returns, and latest audited ITR balance sheet.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 relative">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 font-extrabold text-sm flex items-center justify-center">
              03
            </div>
            <h4 className="font-bold text-slate-900 text-base">Limit Underwriting</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Automated evaluation of banking turnover and debtor-creditor operational cycles.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 relative">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 font-extrabold text-sm flex items-center justify-center">
              04
            </div>
            <h4 className="font-bold text-slate-900 text-base">Limit Activation</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Sanction letter issued and credit limit set up for instant drawdowns.
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
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Financial Planning</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Working Capital Estimator</h2>
            <p className="text-slate-500 text-sm">Calculate estimated monthly obligations and total borrowing cost</p>
          </div>

          <div className="bg-slate-50 rounded-3xl border border-slate-200/80 p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Slider Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Loan Amount Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-slate-700">Required Limit / Capital</span>
                  <span className="text-emerald-600 text-lg">₹{(loanAmount / 100000).toFixed(1)} Lakhs</span>
                </div>
                <input
                  type="range"
                  min={100000}
                  max={100000000}
                  step={100000}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
                <div className="flex justify-between text-xs text-slate-400 font-medium">
                  <span>₹1 Lakh</span>
                  <span>₹10 Crore</span>
                </div>
              </div>

              {/* Loan Tenure Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-slate-700">Tenure (Years)</span>
                  <span className="text-emerald-600 text-lg">{tenureYears} Years</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={3}
                  step={1}
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
                <div className="flex justify-between text-xs text-slate-400 font-medium">
                  <span>1 Year</span>
                  <span>3 Years</span>
                </div>
              </div>

              <p className="text-xs text-slate-400 italic">
                *Calculated at an indicative baseline interest rate of {interestRate}% p.a.
              </p>
            </div>

            {/* Display Output Card */}
            <div className="lg:col-span-5 bg-slate-900 text-white p-8 rounded-2xl space-y-5 shadow-lg">
              <div>
                <p className="text-xs text-slate-400 uppercase font-semibold tracking-wider">Estimated Monthly Outflow</p>
                <p className="text-3xl font-black text-emerald-400 mt-1">₹{monthlyEMI.toLocaleString("en-IN")}</p>
              </div>

              <div className="space-y-2.5 border-t border-slate-800 pt-4 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Principal Amount</span>
                  <span className="font-semibold text-white">₹{loanAmount.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Total Interest Cost</span>
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
      <section className="py-20 px-6 bg-gradient-to-r from-emerald-700 to-teal-800 text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Optimize Your Working Capital Today
          </h2>
          <p className="text-emerald-100 text-base max-w-xl mx-auto leading-relaxed">
            Never let cash flow bottlenecks delay your business growth. Get quick approval on customized credit lines.
          </p>

          <div className="pt-2">
            <button
              onClick={() => navigate("/register")}
              className="bg-white hover:bg-slate-100 text-emerald-900 font-extrabold px-10 py-4 rounded-xl shadow-xl transition-all cursor-pointer inline-flex items-center gap-2 text-base"
            >
              <span>Apply for Working Capital Loan</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}