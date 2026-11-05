// src/loansfolio/SupplychainFinancing.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Truck,
  ShieldCheck,
  Percent,
  Clock,
  CheckCircle2,
  ArrowRight,
  Calculator,
  TrendingUp,
  UserCheck,
  Building2,
  Boxes,
  Receipt,
  Network,
  ArrowRightLeft,
} from "lucide-react";

export default function SupplychainFinancing() {
  const navigate = useNavigate();

  // EMI / Discounting Calculator State
  const [loanAmount, setLoanAmount] = useState(3000000); // ₹30 Lakhs default
  const [tenureMonths, setTenureMonths] = useState(3); // 3 Months default
  const interestRate = 10.2; // Baseline annual rate for invoice discounting & supply chain credit

  const calculateMonthlyCost = () => {
    // Interest for short-term invoice discounting: (Amount * Rate * Months) / (12 * 100)
    const totalInterest = (loanAmount * interestRate * tenureMonths) / (12 * 100);
    const monthlyCost = totalInterest / tenureMonths;
    return {
      monthlyCost: Math.round(monthlyCost),
      totalInterest: Math.round(totalInterest),
      totalPayable: Math.round(loanAmount + totalInterest),
    };
  };

  const { monthlyCost, totalInterest, totalPayable } = calculateMonthlyCost();

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">

      {/* ================================================================
                          1. SHORT HERO SECTION
      ================================================================ */}
      <section className="bg-slate-900 text-white py-14 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Network size={14} /> Vendor Financing, Invoice Discounting & Reverse Factoring
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Supply Chain Financing
            </h1>

            <p className="text-slate-300 text-base leading-relaxed">
              Unlock trapped capital in unpaid invoices and optimize buyer-supplier trade relationships. Access early payment liquidity and dealer trade credit up to ₹20 Crore.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => navigate("/register")}
              className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-cyan-600/30 flex items-center gap-2 transition-all cursor-pointer text-sm"
            >
              <span>Apply for Trade Credit</span>
              <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </section>

      {/* ================================================================
                   2. ABOUT SUPPLY CHAIN FINANCING SECTION
      ================================================================ */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest">Trade Liquidity Infrastructure</span>
          <h2 className="text-3xl font-extrabold text-slate-900">What is Supply Chain Financing?</h2>
          <p className="text-slate-500 text-sm">
            Tech-enabled credit solutions linking corporate buyers, suppliers, and financial institutions to optimize cash flow cycles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
              <Receipt size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Instant Invoice Discounting</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Convert raised purchase invoices into immediate cash within 24 to 48 hours instead of waiting 60–90 days.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <ArrowRightLeft size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Vendor & Dealer Credit</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Flexible pre-shipment and post-shipment credit lines structured directly around your trade counterparty score.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <TrendingUp size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Low Capital Costs</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Leverage the credit rating of your enterprise buyer to unlock lower interest rates starting from 9.5% p.a.
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
            <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest">Target Ecosystem</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Who Can Avail This Loan?</h2>
            <p className="text-slate-500 text-sm">
              Tailored for corporate suppliers, distributor networks, and trade intermediaries.
            </p>
          </div>

          {/* Business Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-600 text-white flex items-center justify-center">
                  <Boxes size={20} />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Tier 1 & Tier 2 Suppliers</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Component manufacturers and raw material vendors supplying to anchor corporates and OEMs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                  <Building2 size={20} />
                </div>
                <h3 className="font-bold text-slate-900 text-base">FMCG & Agri Distributors</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Wholesalers and stockists requiring extended inventory holding limits to service retail demand.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                  <Truck size={20} />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Logistics & Service Providers</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Freight handlers and B2B service firms operating on 30-to-120 day corporate credit terms.
              </p>
            </div>
          </div>

          {/* Basic Prerequisites Checklist */}
          <div className="bg-slate-900 text-white p-8 rounded-3xl space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <UserCheck className="text-cyan-400" size={22} />
              Key Qualification Prerequisites
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Corporate Relationship:</strong> Active supply relationship with anchor corporate</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Accepted Invoices:</strong> Verified PO / Invoice acknowledged by buyer</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Business Vintage:</strong> Minimum 1 year active trading history</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>GST Filing:</strong> Active GSTIN with clean e-invoicing compliance</span>
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
          <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest">Seamless Processing</span>
          <h2 className="text-3xl font-extrabold text-slate-900">4-Step Supply Chain Financing Flow</h2>
          <p className="text-slate-500 text-sm">Automated invoice validation and accelerated payout pipeline</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 relative">
            <div className="w-10 h-10 rounded-full bg-cyan-100 text-cyan-600 font-extrabold text-sm flex items-center justify-center">
              01
            </div>
            <h4 className="font-bold text-slate-900 text-base">Upload Invoice / PO</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Upload e-invoices or purchase orders directly to your portal account.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 relative">
            <div className="w-10 h-10 rounded-full bg-cyan-100 text-cyan-600 font-extrabold text-sm flex items-center justify-center">
              02
            </div>
            <h4 className="font-bold text-slate-900 text-base">Buyer Confirmation</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Automated digital verification and acceptance of invoice goods receipt by corporate buyer.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 relative">
            <div className="w-10 h-10 rounded-full bg-cyan-100 text-cyan-600 font-extrabold text-sm flex items-center justify-center">
              03
            </div>
            <h4 className="font-bold text-slate-900 text-base">Instant Sanction</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Automated discounting rate matching based on trade history and counterparty risk profile.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 relative">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 font-extrabold text-sm flex items-center justify-center">
              04
            </div>
            <h4 className="font-bold text-slate-900 text-base">Fund Disbursement</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Up to 90% of invoice value disbursed directly to your bank account within 24 hours.
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
            <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest">Financial Planning</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Trade Credit Cost Estimator</h2>
            <p className="text-slate-500 text-sm">Calculate short-term discounting charges and net payout values</p>
          </div>

          <div className="bg-slate-50 rounded-3xl border border-slate-200/80 p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Slider Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Invoice Value Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-slate-700">Invoice / Credit Value</span>
                  <span className="text-cyan-600 text-lg">₹{(loanAmount / 100000).toFixed(1)} Lakhs</span>
                </div>
                <input
                  type="range"
                  min={500000}
                  max={200000000}
                  step={500000}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full accent-cyan-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
                <div className="flex justify-between text-xs text-slate-400 font-medium">
                  <span>₹5 Lakhs</span>
                  <span>₹20 Crore</span>
                </div>
              </div>

              {/* Credit Period Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-slate-700">Credit Tenure (Months)</span>
                  <span className="text-cyan-600 text-lg">{tenureMonths} Months ({tenureMonths * 30} Days)</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={6}
                  step={1}
                  value={tenureMonths}
                  onChange={(e) => setTenureMonths(Number(e.target.value))}
                  className="w-full accent-cyan-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
                <div className="flex justify-between text-xs text-slate-400 font-medium">
                  <span>1 Month (30 Days)</span>
                  <span>6 Months (180 Days)</span>
                </div>
              </div>

              <p className="text-xs text-slate-400 italic">
                *Calculated at an indicative annual discounting rate of {interestRate}% p.a.
              </p>
            </div>

            {/* Display Output Card */}
            <div className="lg:col-span-5 bg-slate-900 text-white p-8 rounded-2xl space-y-5 shadow-lg">
              <div>
                <p className="text-xs text-slate-400 uppercase font-semibold tracking-wider">Total Discounting Fee</p>
                <p className="text-3xl font-black text-cyan-400 mt-1">₹{totalInterest.toLocaleString("en-IN")}</p>
              </div>

              <div className="space-y-2.5 border-t border-slate-800 pt-4 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Invoice Gross Value</span>
                  <span className="font-semibold text-white">₹{loanAmount.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Average Monthly Cost</span>
                  <span className="font-semibold text-white">₹{monthlyCost.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-slate-300 border-t border-slate-800 pt-2.5 font-bold text-white text-sm">
                  <span>Total Repayment / Settlement</span>
                  <span>₹{totalPayable.toLocaleString("en-IN")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
                          6. FINAL CTA SECTION
      ================================================================ */}
      <section className="py-20 px-6 bg-gradient-to-r from-cyan-700 to-blue-800 text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Accelerate Your Supply Chain Cash Flow Today with Vedozy
          </h2>
          <p className="text-cyan-100 text-base max-w-xl mx-auto leading-relaxed">
            Eliminate working capital bottlenecks and turn unpaid vendor invoices into instant operating cash.
          </p>

          <div className="pt-2">
            <button
              onClick={() => navigate("/register")}
              className="bg-white hover:bg-slate-100 text-cyan-900 font-extrabold px-10 py-4 rounded-xl shadow-xl transition-all cursor-pointer inline-flex items-center gap-2 text-base"
            >
              <span>Apply for Supply Chain Financing</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}