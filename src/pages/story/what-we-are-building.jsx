import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

// Relative imports based on file structure
import visionImg from '../../components/images/vision.png';
import missionImg from '../../components/images/Mission.png';

export default function AboutUs() {
  const ninjaCode = [
    {
      letter: "C",
      subtitle: "Customer Obsession",
      description: "Customer centricity is at the heart of all our endeavours. We strive for customer delight and loyalty.",
      bgCircle: "bg-[#86efac]/30",
      letterColor: "text-[#22c55e]"
    },
    {
      letter: "O",
      subtitle: "Owner Mindset",
      description: "We embrace responsibility and never say \"that's not my job\". We only think for the long run.",
      bgCircle: "bg-[#fef08a]/40",
      letterColor: "text-[#eab308]"
    },
    {
      letter: "D",
      subtitle: "Dream Big, Act Bold",
      description: "We aim high and seize bold new challenges. We are fueled by curiosity and innovation.",
      bgCircle: "bg-[#93c5fd]/30",
      letterColor: "text-[#3b82f6]"
    },
    {
      letter: "E",
      subtitle: "Energy & Speed",
      description: "We chase our goals with passion and are forever focused on action. We get things done.",
      bgCircle: "bg-[#f472b6]/30",
      letterColor: "text-[#ec4899]"
    }
  ];

  const points = [
    { title: "Farmer Upskill", text: "Empowering farmers with technology, market access, and direct trade capability." },
    { title: "Fair Pricing", text: "Removing unnecessary intermediaries to ensure transparent, equitable returns." },
    { title: "Wastage Reduction", text: "Optimizing supply chain routes to drastically reduce post-harvest losses." },
    { title: "Speed & Scale", text: "Building reliable logistics infrastructure for fast, fresh delivery networks." }
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans selection:bg-emerald-500 selection:text-white">

      {/* Hero Header Section */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12 md:px-12 md:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Building better lives <br className="hidden sm:inline" />
              for every agri-citizen
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-lg">
              Since 2015, we have been reshaping the agri-supply chain through tech-driven solutions, connecting farmers directly with businesses to transform fresh produce logistics.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img 
              src="/ninjacart-logo.png" 
              alt="Ninjacart Supply Chain & Agri-Tech" 
              className="h-24 md:h-28 w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Banner / Media Section */}
      <section className="relative overflow-hidden w-full my-12">
        <div className="relative h-80 md:h-[420px] w-full bg-slate-800 flex items-center justify-center">
          <img 
            src="/hero-farm-bg.jpg" 
            alt="Fresh Produce Farm" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply"
          />
          <h2 className="relative z-10 text-3xl md:text-5xl font-black text-white text-center px-4 tracking-tight drop-shadow-md">
            A fresh perspective to fresh produce
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 -mt-12 z-20">
          <div className="bg-[#f59e0b] text-slate-950 font-bold text-sm md:text-base text-center py-5 px-8 rounded-2xl shadow-xl">
            We are leveraging innovation and technology to build dynamic supply chains, ensuring direct linkages for all key stakeholders.
          </div>
        </div>
      </section>

      {/* Vision & Mission Section with Relative Image Imports */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Vision */}
          <div className="relative flex items-center justify-between">
            <div className="space-y-4 max-w-[200px] sm:max-w-xs z-10">
              <h2 className="text-6xl sm:text-7xl md:text-8xl font-black text-[#a3e635]/60 tracking-tight leading-none">
                Vision
              </h2>
              <p className="text-gray-500 text-base sm:text-lg leading-snug">
                Better lives for every agri citizen
              </p>
            </div>

            <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0">
              <img 
                src={visionImg} 
                alt="Vision Illustration" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Mission */}
          <div className="relative flex items-center justify-between">
            <div className="space-y-4 max-w-[220px] sm:max-w-xs z-10">
              <h2 className="text-6xl sm:text-7xl md:text-8xl font-black text-[#a3e635]/60 tracking-tight leading-none">
                Mission
              </h2>
              <p className="text-gray-500 text-base sm:text-lg leading-snug">
                Build the most trusted, efficient, and inclusive agri trade network
              </p>
            </div>

            <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0">
              <img 
                src={missionImg} 
                alt="Mission Illustration" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

        </div>
      </section>

      {/* The Ninja CODE Section */}
      <section className="bg-[#dcfce7]/60 py-20 border-y border-emerald-100/40">
        <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-16 text-center">
          
          {/* Section Header */}
          <div className="space-y-4 inline-block">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              The Ninja CODE
            </h2>
            <div className="h-1.5 w-48 mx-auto rounded-full bg-gradient-to-r from-emerald-500 via-amber-500 via-blue-500 to-pink-500" />
          </div>

          {/* CODE Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
            {ninjaCode.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-6 group">
                
                {/* Visual Graphic Representation */}
                <div className="relative w-44 h-44 flex items-center justify-center">
                  <div className={`absolute inset-0 rounded-full ${item.bgCircle} transition-transform duration-300 group-hover:scale-105`} />
                  
                  <div className="absolute -top-1 w-full text-center px-2">
                    <span className="text-xs font-bold text-gray-800 uppercase tracking-wide block">
                      {item.subtitle}
                    </span>
                  </div>

                  <div className={`text-8xl font-black ${item.letterColor} drop-shadow-sm select-none`}>
                    {item.letter}
                  </div>
                </div>

                {/* Description Body Text */}
                <p className="text-gray-600 text-sm leading-relaxed px-2 font-normal">
                  {item.description}
                </p>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Why We're Hungry for Change */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-8">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Why we're hungry for change</h2>
            <div className="space-y-6">
              {points.map((pt, idx) => (
                <div key={idx} className="border-l-4 border-emerald-500 pl-4 space-y-1">
                  <h3 className="text-lg font-bold text-gray-900">{pt.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{pt.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden rounded-3xl bg-blue-900 text-white p-8 md:p-12 shadow-2xl">
              <div className="relative z-10 space-y-6">
                <span className="text-blue-300 font-bold text-xs uppercase tracking-widest block">Impact First</span>
                <p className="text-xl md:text-2xl font-bold leading-relaxed">
                  "Our goal is to build technology that simplifies trade, increases transparency, and brings economic growth directly to grassroot producers."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Card Section */}
      <section className="max-w-6xl mx-auto px-6 pb-24 md:px-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-800 text-white p-8 md:p-16 shadow-xl">
          {/* Decorative Glow Elements */}
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-48 h-48 bg-teal-300/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Ready to transform the agri-supply chain?
              </h2>
              <p className="text-emerald-100 text-base md:text-lg max-w-2xl leading-relaxed">
                Partner with us to build a more efficient, transparent, and sustainable ecosystem for farmers and businesses alike.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-center items-center lg:items-end">
              <a
                href="#partner"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-emerald-900 font-bold rounded-2xl shadow-lg hover:bg-emerald-50 transition-all duration-200 group"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-emerald-700/60 hover:bg-emerald-700 text-white font-semibold rounded-2xl border border-emerald-400/30 transition-all duration-200"
              >
                <Mail className="w-5 h-5" />
                <span>Contact Sales</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}