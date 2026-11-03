// src/pages/PartnerWithUs.jsx

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Building, 
  FileText, 
  ShieldCheck, 
  Mail, 
  Phone, 
  User, 
  CheckCircle, 
  Loader2, 
  ArrowRight, 
  Landmark, 
  Zap, 
  Lock, 
  PieChart, 
  Layers, 
  Upload, 
  FileCheck 
} from "lucide-react";

export default function PartnerWithUs() {
  const navigate = useNavigate();

  // ---------------------------------------------------------------------------
  // 1. HERO SLIDESHOW STATE
  // ---------------------------------------------------------------------------
  const heroImages = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1600&auto=format&fit=crop"
  ];
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  // ---------------------------------------------------------------------------
  // 2. ABOUT US DYNAMIC TABS STATE
  // ---------------------------------------------------------------------------
  const aboutTabs = [
    {
      id: "mission",
      tabTitle: "Institutional Mission",
      heading: "Bridging Capital with High-Growth Enterprises",
      description: "Vedozy operates as an authorized Lending Service Provider (LSP) under Hivictus Private Limited. We build digital rails that connect RBI-regulated Banks and NBFCs directly to verified commercial borrowers, replacing fragmented legacy sourcing with automated digital underwriting.",
      stat: "100% Digital",
      statLabel: "Automated Origination Workflow"
    },
    {
      id: "underwriting",
      tabTitle: "Smart Underwriting",
      heading: "Alternative Data & GST Cash-Flow Analytics",
      description: "Our proprietary credit evaluation engine ingests GST returns, banking statements, and trade velocity metrics in real time. Institutional partners receive pre-verified credit files matched precisely to their risk appetite before disbursal.",
      stat: "< 24 Hrs",
      statLabel: "Lead Verification Turnaround"
    },
    {
      id: "governance",
      tabTitle: "RBI Governance",
      heading: "Compliant & Transparent Co-Lending Architecture",
      description: "We enforce strict compliance with RBI Digital Lending Directions. All transactions maintain direct bank-to-bank disbursals, standardized Key Fact Statements (KFS), zero upfront fees for borrowers, and encrypted data privacy.",
      stat: "Zero Upfront",
      statLabel: "Transparent Fee Structure"
    }
  ];
  const [activeAboutIndex, setActiveAboutIndex] = useState(0);

  // ---------------------------------------------------------------------------
  // 3. REGISTRATION FORM STATE
  // ---------------------------------------------------------------------------
  const [form, setForm] = useState({
    institutionName: "",
    nbfcRegistrationNo: "",
    gstNo: "",
    contactPerson: "",
    email: "",
    phone: "",
    creditRange: "₹1 Cr – ₹10 Cr",
    loanCategories: [],
    documentFile: null,
    agreeCompliance: false,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const categories = [
    "MSME Business Loans", 
    "Startup Growth Capital", 
    "Working Capital Credit", 
    "Machinery Asset Finance", 
    "Supply Chain Discounting"
  ];

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      if (name === "agreeCompliance") {
        setForm({ ...form, agreeCompliance: checked });
      } else {
        const updatedCategories = checked
          ? [...form.loanCategories, value]
          : form.loanCategories.filter((cat) => cat !== value);
        setForm({ ...form, loanCategories: updatedCategories });
      }
    } else if (type === "file") {
      setForm({ ...form, documentFile: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!form.agreeCompliance) {
      setError("Please confirm compliance with RBI guidelines & LSP frameworks to proceed.");
      return;
    }

    if (form.loanCategories.length === 0) {
      setError("Please select at least one target loan category.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true); // ✅ Hides form completely

      // ✅ Automatically scrolls user view smoothly back up to the form container section
      const formSection = document.getElementById("registration-form");
      if (formSection) {
        formSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 800);
  };

  // ---------------------------------------------------------------------------
  // 4. DATA CONFIGURATIONS FOR FEATURES & VALUE PROPOSITIONS
  // ---------------------------------------------------------------------------
  const nbfcFeatures = [
    {
      icon: <Layers className="w-6 h-6 text-blue-600" />,
      title: "Co-Lending & Lead Engines",
      desc: "Deploy balance-sheet capital seamlessly through automated direct sourcing pipelines or structured co-lending arrangements.",
      badge: "Automation"
    },
    {
      icon: <Lock className="w-6 h-6 text-blue-600" />,
      title: "RBI Guidelines Standard",
      desc: "Strict adherence to digital lending norms: zero upfront borrower fees, direct bank disbursals, and automated KFS generation.",
      badge: "Regulatory"
    },
    {
      icon: <PieChart className="w-6 h-6 text-blue-600" />,
      title: "Granular Risk Analytics",
      desc: "Receive pre-screened borrower packages supported by GST filings, banking telemetry, and digital cash-flow scoring models.",
      badge: "Data-Driven"
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      title: "RESTful API Integration",
      desc: "Connect your Loan Origination System (LOS) and credit engines via secure, encrypted REST APIs for automated webhooks.",
      badge: "Tech First"
    }
  ];

  const valueProps = [
    {
      number: "01",
      title: "60% Lower Sourcing Costs",
      desc: "Bypass legacy DSA commission structures and reduce Customer Acquisition Cost (CAC) through direct digital borrower matching.",
      metric: "60% CAC Savings"
    },
    {
      number: "02",
      title: "Pre-Underwritten Credit Leads",
      desc: "Every commercial borrower application is digitally filtered against your institution's specific underwriting benchmarks.",
      metric: "Pre-Verified"
    },
    {
      number: "03",
      title: "Transparent LSP Governance",
      desc: "Vedozy functions under strict SLA obligations as an authorized Lending Service Provider under Hivictus Private Limited.",
      metric: "SLA Guaranteed"
    },
    {
      number: "04",
      title: "Accelerated Priority Sector Lending",
      desc: "Seamlessly expand your Priority Sector Lending (PSL) portfolio across micro, small, and medium enterprise segments nationwide.",
      metric: "Nationwide Reach"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans">
      
      {/* ================================================================
                          1. HERO SECTION
      ================================================================ */}
      <section className="relative min-h-[500px] sm:min-h-[560px] flex items-center bg-slate-950 overflow-hidden">
        
        {heroImages.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentHeroSlide ? "opacity-45 scale-105" : "opacity-0 scale-100"
            } transition-transform duration-[7000ms]`}
          >
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent z-10" />

        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-16 relative z-20 w-full">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Scale Your Commercial Lending Portfolio
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              Partner with Vedozy — an authorized Lending Service Provider under <strong>Hivictus Private Limited</strong>. Connect directly with creditworthy MSMEs and enterprise borrowers via a secure, RBI-compliant digital co-lending ecosystem.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <a
                href="#registration-form"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl inline-flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-blue-600/30 text-sm"
              >
                Become a Lending Partner <ArrowRight size={18} />
              </a>
              <a
                href="#about-section"
                className="bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold px-6 py-4 rounded-xl text-sm transition-all backdrop-blur-md"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
                          2. ABOUT US SECTION
      ================================================================ */}
      <section id="about-section" className="py-24 px-6 sm:px-12 lg:px-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-12">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              About The Alliance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4">
              Empowering Lenders with Digital Infrastructure
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6">
              <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 p-8 sm:p-10 rounded-3xl text-white shadow-xl relative overflow-hidden space-y-6">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-500/30">
                  <ShieldCheck size={14} /> Institutional Framework
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-white">
                  {aboutTabs[activeAboutIndex].heading}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {aboutTabs[activeAboutIndex].description}
                </p>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-extrabold text-blue-400">{aboutTabs[activeAboutIndex].stat}</div>
                    <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">{aboutTabs[activeAboutIndex].statLabel}</div>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-300">
                    <Landmark size={22} />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-4">
                {aboutTabs.map((tab, idx) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveAboutIndex(idx)}
                    className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      idx === activeAboutIndex
                        ? "bg-slate-900 text-white shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {tab.tabTitle}
                  </button>
                ))}
              </div>

              <div className="space-y-4 pt-2">
                <h4 className="text-xl font-bold text-slate-900">
                  Core Pillar: {aboutTabs[activeAboutIndex].tabTitle}
                </h4>
                <p className="text-slate-600 text-base leading-relaxed">
                  {aboutTabs[activeAboutIndex].description}
                </p>

                <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                    <div className="text-xs font-bold text-slate-900 uppercase tracking-wide">Regulatory Alignment</div>
                    <p className="text-xs text-slate-500">Fully compliant with RBI Digital Lending Directives.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                    <div className="text-xs font-bold text-slate-900 uppercase tracking-wide">Secure Integration</div>
                    <p className="text-xs text-slate-500">Encrypted LOS data handshakes and automated KFS.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================================================================
              3. FEATURES SECTION
      ================================================================ */}
      <section className="py-24 px-6 sm:px-12 lg:px-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              Institutional Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Features Engineered for NBFCs & Banks
            </h2>
            <p className="text-slate-600 text-base">
              Enterprise-grade tooling designed to optimize loan origination, credit scoring, and regulatory alignment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {nbfcFeatures.map((feat, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      {feat.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-600">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================================================================
                          4. VALUE PROPOSITION SECTION
      ================================================================ */}
      <section className="py-24 px-6 sm:px-12 lg:px-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              The Partner Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Quantifiable Value for Lenders
            </h2>
            <p className="text-slate-600 text-base">
              Accelerate asset deployment while minimizing sourcing friction and compliance overhead.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((val, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 border border-slate-200/80 p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="text-blue-600 font-mono text-3xl font-extrabold mb-4">{val.number}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{val.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-slate-800">
                  <span>Impact:</span>
                  <span className="text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">{val.metric}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================================================================
                          5. REGISTRATION FORM SECTION
      ================================================================ */}
      <section id="registration-form" className="py-24 px-6 sm:px-12 lg:px-20 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              Institutional Onboarding
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              NBFC & Banking Registration
            </h2>
            <p className="text-slate-600 text-base">
              Submit your institutional credentials, GST details, and registration files to initiate co-lending onboarding.
            </p>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-xl shadow-slate-200/60">
            
            {/* ✅ SUCCESS STATE (FORM IS HIDDEN, AUTO-SCROLLED, PLAIN TICK, CUSTOM MESSAGE) */}
            {submitted ? (
              <div className="py-16 text-center space-y-8 animate-fadeIn max-w-2xl mx-auto">
                
                {/* Plain Outline Round Tick Icon (No fill) */}
                <div className="w-24 h-24 mx-auto flex items-center justify-center text-emerald-600">
                  <CheckCircle size={80} strokeWidth={1.75} />
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                    Registration Submitted Successfully!
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    Thank you for applying to partner with <strong>Vedozy & Hivictus Private Limited</strong>. Your institutional registration details, GST credentials, and verification files have been securely logged.
                  </p>
                </div>

                {/* Supporting Content Box */}
                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 text-center">
                  <p className="text-base sm:text-lg font-semibold text-slate-800 leading-relaxed">
                    Our Representative will getback within 24 hours for further onboarding and integration process.
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => navigate("/")}
                    className="bg-slate-900 hover:bg-blue-600 text-white font-bold px-10 py-4 rounded-xl transition-all shadow-md cursor-pointer text-base"
                  >
                    Return to Home
                  </button>
                </div>

              </div>
            ) : (
              /* ✅ FORM DISPLAY STATE */
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {error && (
                  <div className="p-4 bg-red-50 border border-red-100 rounded-2xl text-red-600 text-sm font-semibold">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Institution Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Institution / NBFC Name *</label>
                    <div className="relative">
                      <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input 
                        type="text"
                        name="institutionName"
                        placeholder="e.g. Apex Capital Finance"
                        value={form.institutionName}
                        onChange={handleChange}
                        required
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/15 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* RBI Registration Number */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">RBI License / Registration No. *</label>
                    <div className="relative">
                      <FileText className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input 
                        type="text"
                        name="nbfcRegistrationNo"
                        placeholder="e.g. B-07.00421"
                        value={form.nbfcRegistrationNo}
                        onChange={handleChange}
                        required
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/15 outline-none transition-all font-mono"
                      />
                    </div>
                  </div>

                  {/* GST Registration Number */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">GST Registration Number *</label>
                    <div className="relative">
                      <FileCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input 
                        type="text"
                        name="gstNo"
                        placeholder="e.g. 33AAAAA0000A1Z5"
                        value={form.gstNo}
                        onChange={handleChange}
                        required
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/15 outline-none transition-all font-mono uppercase"
                      />
                    </div>
                  </div>

                  {/* Contact Executive */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Primary Executive Contact *</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input 
                        type="text"
                        name="contactPerson"
                        placeholder="e.g. Rajesh Kumar"
                        value={form.contactPerson}
                        onChange={handleChange}
                        required
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/15 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Corporate Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Corporate Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input 
                        type="email"
                        name="email"
                        placeholder="partnerships@nbfc.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/15 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Direct Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Direct Phone Number *</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input 
                        type="tel"
                        name="phone"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/15 outline-none transition-all"
                      />
                    </div>
                  </div>

                </div>

                {/* Monthly Credit Allocation Capacity */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Monthly Disbursement Capacity *</label>
                  <select
                    name="creditRange"
                    value={form.creditRange}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/15 outline-none transition-all cursor-pointer font-semibold text-slate-800"
                  >
                    <option value="₹1 Cr – ₹10 Cr">₹1 Crore – ₹10 Crores</option>
                    <option value="₹10 Cr – ₹50 Cr">₹10 Crores – ₹50 Crores</option>
                    <option value="₹50 Cr+">₹50 Crores+</option>
                  </select>
                </div>

                {/* Target Loan Categories Selection */}
                <div className="space-y-3 pt-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Target Loan Categories of Interest *</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {categories.map((cat, idx) => (
                      <label key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer hover:bg-blue-50/50 hover:border-blue-200 transition-all text-xs font-semibold text-slate-800 select-none">
                        <input 
                          type="checkbox"
                          value={cat}
                          onChange={handleChange}
                          className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer"
                        />
                        <span>{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Institutional Verification Documents File Upload */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Verification Documents (RBI License / Certificate / PAN) *</label>
                  <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 bg-slate-50 hover:bg-slate-100/60 transition-colors text-center cursor-pointer relative">
                    <input 
                      type="file"
                      onChange={handleChange}
                      required
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                        <Upload size={20} />
                      </div>
                      <div className="text-xs font-bold text-slate-800">
                        {form.documentFile ? form.documentFile.name : "Click to upload verification PDF or ZIP file"}
                      </div>
                      <p className="text-[11px] text-slate-400">PDF, JPG, PNG or ZIP up to 15MB</p>
                    </div>
                  </div>
                </div>

                {/* Compliance Box */}
                <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-start gap-3">
                  <ShieldCheck size={22} className="text-blue-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">RBI Digital Lending Regulatory Acknowledgment</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      By submitting, your institution confirms it holds a valid RBI license, enforces zero upfront fees for borrowers, and adheres to direct bank-to-bank disbursals under Vedozy partnership guidelines.
                    </p>
                  </div>
                </div>

                {/* Agreement Checkbox */}
                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox"
                    name="agreeCompliance"
                    id="agreeCompliance"
                    checked={form.agreeCompliance}
                    onChange={handleChange}
                    className="mt-0.5 w-4 h-4 text-blue-600 border-slate-300 rounded cursor-pointer shrink-0"
                  />
                  <label htmlFor="agreeCompliance" className="text-xs text-slate-700 font-semibold cursor-pointer select-none leading-relaxed">
                    We confirm our NBFC/Banking institution complies with RBI Digital Lending Frameworks and authorizes Vedozy to review our onboarding details.
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-slate-900 hover:bg-blue-600 text-white font-bold py-4 rounded-2xl text-base flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer shadow-lg shadow-slate-900/10 hover:shadow-xl hover:shadow-blue-600/20 active:scale-[0.99] disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={20} className="animate-spin text-blue-300" />
                        <span>Submitting Application...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit</span>
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}