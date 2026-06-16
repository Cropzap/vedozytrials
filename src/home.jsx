import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import heroImage from './components/images/hero.png';
import { staticBlogs } from "./data/blogsData";

const GET_STARTED_FORM = "https://forms.gle/89mT6Vs8CX99UkU48";
const CAREERS_REGISTRATION_FORM = "https://forms.gle/brfLmM7eFX4AdcLF7";

function AnimatedCounter({ targetValue, duration = 2000, trigger }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * targetValue));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [targetValue, duration, trigger]);
  return <>{count}</>;
}

function ScrollFadeIn({ children, delay = "delay-0" }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) setIsVisible(true);
    }, { threshold: 0.05 });
    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, []);
  return (
    <div ref={domRef} className={`transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) transform ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[0.98]"} ${delay}`}>
      {children}
    </div>
  );
}

export default function Home() {
  const [statsTriggered, setStatsTriggered] = useState(false);
  const statsRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) setStatsTriggered(true);
    }, { threshold: 0.2 });
    const currentStatsRef = statsRef.current;
    if (currentStatsRef) observer.observe(currentStatsRef);
    return () => { if (currentStatsRef) observer.unobserve(currentStatsRef); };
  }, []);

  const solutions = [
    { 
      title: "Business Commerce Platform", 
      desc: "Connecting businesses, customers, and commerce workflows through intelligent infrastructure.",
      icon: <svg className="w-5 h-5 text-victus-navy" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
    },
    { 
      title: "AI-Powered Solutions", 
      desc: "Advanced AI capabilities to automate operations and optimize business execution.",
      icon: <svg className="w-5 h-5 text-victus-green" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
    },
    { 
      title: "Digital Transformation", 
      desc: "Modernizing enterprise operations with scalable digital infrastructure.",
      icon: <svg className="w-5 h-5 text-victus-navy" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
    },
    { 
      title: "Customer Success Development", 
      desc: "Helping businesses improve customer engagement and growth performance.",
      icon: <svg className="w-5 h-5 text-victus-green" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
    }
  ];

  const careerPrograms = [
    {
      id: "reignite",
      title: "Hivictus Reignite",
      subtitle: "Restart Your Career with Confidence",
      desc: "A specialized career returnship program engineered for experienced women professionals transitioning back into the workspace after personal commitments or personal breaks.",
      bullets: ["Re-entry positions across multiple functions", "Structured upskilling & curriculum tracking", "Direct mentorship from business leaders", "Potential for full-time corporate integration"]
    },
    {
      id: "fizzystart",
      title: "Hivictus Fizzystart",
      subtitle: "Your Journey Begins Before Day One",
      desc: "An innovative post-offer engagement ecosystem designed to align future team members with organizational workflows, values, and company culture prior to onboarding.",
      bullets: ["Pre-joining structured learning tracks", "Leadership interactions & specialized webinars", "Accelerated workplace readiness training", "Early team bonding loops & peer networking"]
    },
    {
      id: "nextleap",
      title: "Hivictus NextLeap",
      subtitle: "Building Tomorrow's Workforce Today",
      desc: "A career acceleration framework built specifically for pre-final and final-year students looking to anchor high-performance tracks in technology, sales, and operations.",
      bullets: ["Industry-oriented practical learning paths", "Live client projects & case study sprints", "Fast-tracked corporate placement hiring", "Institutional placement optimization loops"]
    },
    {
      id: "foundational",
      title: "Hivictus Foundational Learning",
      subtitle: "Campus-Integrated Industry Excellence",
      desc: "A campus-integrated deployment blueprint delivered through co-established Department of Excellence centers to complement traditional academic parameters.",
      bullets: ["Industry-aligned core competency tracks", "Digital and technology awareness tools", "Project-based experiential training loops", "Sustainable talent development networks"]
    }
  ];

  const advantageItems = [
    { 
      title: "Scalable Infrastructure", 
      desc: "Cloud-native, highly available system architectures optimized to scale along with growing enterprise workloads effortlessly.", 
      colorClass: "hover:border-slate-200 hover:shadow-xl hover:shadow-victus-navy/5", 
      badgeClass: "bg-victus-navy/5 text-victus-navy border border-victus-navy/10", 
      iconPath: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" 
    },
    { 
      title: "Customer-Centric Approach", 
      desc: "Tailored UI/UX journeys engineering empathetic visual touchpoints to maximize client conversion and user execution parameters.", 
      colorClass: "hover:border-slate-200 hover:shadow-xl hover:shadow-victus-green/5", 
      badgeClass: "bg-victus-green/5 text-victus-green border border-victus-green/20", 
      iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" 
    },
    { 
      title: "Innovation & AI", 
      desc: "Deep integration of proprietary algorithmic modeling tools, transforming standard workflows into continuous automated loops.", 
      colorClass: "hover:border-slate-200 hover:shadow-xl hover:shadow-victus-navy/5", 
      badgeClass: "bg-victus-navy/5 text-victus-navy border border-victus-navy/10", 
      iconPath: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" 
    },
    { 
      title: "Dedicated Support", 
      desc: "Proactive infrastructure monitoring arrays ensuring constant operational stability and zero runtime friction, 24/7.", 
      colorClass: "hover:border-slate-200 hover:shadow-xl hover:shadow-victus-green/5", 
      badgeClass: "bg-victus-green/5 text-victus-green border border-victus-green/20", 
      iconPath: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M5.636 18.364l3.536-3.536m0-5.656L5.636 5.636M12 12m-9 0a9 9 0 1118 0 9 9 0 01-18 0z" 
    }
  ];

  return (
    <div className="w-full bg-[#fcfdfe] overflow-x-hidden text-victus-navy antialiased">
      <Helmet>
        <title>HIVICTUS | AI-Powered Digital Commerce & Enterprise Solutions</title>
        <meta name="description" content="Transform enterprise business operations with HIVICTUS. Scalable digital commerce platforms driven by analytics and automation." />
      </Helmet>

      {/* HERO SECTION - REFINED PREMIUM VISUAL ARCHITECTURE */}
      <section className="relative overflow-hidden px-4 sm:px-6 md:px-12 pt-24 pb-20 lg:pt-36 lg:pb-32 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-50/50 via-white to-[#f8f9ff]">
        <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-gradient-to-br from-victus-navy/10 to-transparent blur-3xl rounded-full pointer-events-none -mr-20" />
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-tr from-victus-green/10 to-transparent blur-3xl rounded-full pointer-events-none -ml-20" />

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Hero Left Content Area */}
          <div className="text-left lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-xl bg-white border border-gray-100 shadow-sm shadow-gray-100/50 text-victus-navy text-xs sm:text-sm font-bold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-victus-green mr-2.5 animate-pulse" />
              AI-Powered Commerce Platform
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-[54px] font-black text-victus-navy leading-[1.12] tracking-tight">
              Empowering Businesses Through{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-victus-navy via-slate-800 to-victus-green">
                AI-Driven Commerce Solutions
              </span>
            </h1>
            
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl font-medium">
              HIVICTUS helps businesses connect, grow, and transform operations through intelligent digital platforms, AI-powered systems, and scalable business infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <a href={GET_STARTED_FORM} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-center px-8 py-4 rounded-xl bg-victus-navy text-white font-bold shadow-lg shadow-victus-navy/20 hover:bg-slate-900 hover:shadow-xl hover:shadow-victus-navy/30 transform hover:-translate-y-0.5 transition-all duration-300 no-underline block">
                Get Started
              </a>
            </div>
          </div>

          {/* Hero Right Media Deck */}
          <div className="relative w-full lg:col-span-5">
            <div className="absolute inset-0 bg-gradient-to-tr from-victus-navy/5 to-victus-green/5 blur-3xl rounded-3xl -z-10 transform scale-110" />
            <div className="rounded-[2.5rem] bg-white p-3 sm:p-4 shadow-2xl border border-gray-100/70 shadow-gray-200/60 transition-transform duration-700 ease-out hover:scale-[1.01]">
              <img src={heroImage} alt="Dashboard Preview Canvas" className="w-full h-auto max-h-[460px] object-cover rounded-[1.8rem]" loading="eager" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION - RE-ENGINEERED COMPONENT HIERARCHY */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-12 bg-white border-t border-b border-gray-100 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-12 gap-14 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="text-victus-green font-black uppercase tracking-[0.2em] text-xs sm:text-sm">About Us</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-victus-navy leading-tight tracking-tight">
              Building the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-victus-navy to-victus-green">Digital Commerce</span>
            </h2>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed font-medium">
              At HIVICTUS, we empower businesses with modern technology solutions that streamline operations, connect ecosystems, and drive sustainable growth.
            </p>
            
            {/* Embedded Counter Dashboard Grid */}
            <div ref={statsRef} className="grid grid-cols-2 gap-8 pt-6 border-t border-gray-100 max-w-md">
              <div className="space-y-1">
                <div className="text-4xl sm:text-5xl font-black text-victus-navy tracking-tight tabular-nums">
                  <AnimatedCounter targetValue={100} trigger={statsTriggered} />+
                </div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-snug">Businesses Supported</div>
              </div>
              <div className="space-y-1">
                <div className="text-4xl sm:text-5xl font-black text-victus-green tracking-tight tabular-nums">
                  <AnimatedCounter targetValue={95} trigger={statsTriggered} />%
                </div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-snug">Success Metrics Rate</div>
              </div>
            </div>
          </div>

          {/* Right Features Column Strip */}
          <div className="lg:col-span-6 space-y-4">
            {[
              { title: "Innovation First", desc: "Developing future-ready architectures to keep your operations ahead of evolving disruptions.", accent: "border-l-victus-navy", bg: "from-victus-navy/5 to-transparent" },
              { title: "Business Growth", desc: "Accelerating your core pipeline channels through optimized strategic market integration hooks.", accent: "border-l-victus-green", bg: "from-victus-green/5 to-transparent" },
              { title: "Customer Success", desc: "Engineering customer care tracking arrays that deliver consistent user retention indices.", accent: "border-l-victus-navy", bg: "from-victus-navy/5 to-transparent" }
            ].map((item, index) => (
              <ScrollFadeIn key={index} delay={`delay-${index * 150}`}>
                <div className={`bg-gradient-to-r ${item.bg} bg-white rounded-2xl border border-gray-100 border-l-4 ${item.accent} p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-l-8 transition-all duration-300`}>
                  <h3 className="text-lg font-black text-victus-navy">{item.title}</h3>
                  <p className="mt-2 text-sm sm:text-base text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS SECTION - MODERN FLOATING CARD MATRIX */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-12 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-victus-navy uppercase text-xs sm:text-sm font-black tracking-[0.2em]">Solutions</div>
            <h2 className="text-3xl sm:text-4xl font-black text-victus-navy tracking-tight">Comprehensive Digital Solutions</h2>
            <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">Powerful digital infrastructure built to accelerate modern business transformation.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {solutions.map((item, index) => (
              <ScrollFadeIn key={index} delay={`delay-${index * 100}`}>
                <div className="group h-full bg-white rounded-[2rem] border border-gray-100/70 p-6 sm:p-8 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-start relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-gray-50/50 to-transparent rounded-br-[2rem] -z-10" />
                  
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center border border-gray-100 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:border-slate-200">
                    {item.icon}
                  </div>
                  <h3 className="mt-6 text-lg sm:text-xl font-black text-victus-navy tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-sm sm:text-base text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* HIGH-IMPACT CORPORATE MOTIVE & CAREER PROGRAMS SECTION - ROUTED TO EXTERNAL GOOGLE FORM */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-12 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-victus-green/5 to-transparent blur-3xl rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-3">
            <div className="text-victus-navy uppercase text-xs sm:text-sm font-black tracking-[0.2em]">Talent Hub</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-victus-navy tracking-tight leading-tight">Hivictus Career Accelerators</h2>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-medium">Optimizing technical capability blueprints and bridging institutional academic paradigms to cultivate business readiness from day one.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {careerPrograms.map((prog, index) => (
              <ScrollFadeIn key={prog.id} delay={`delay-${index * 100}`}>
                <div className="bg-white/70 border border-gray-100 rounded-[2.5rem] p-6 sm:p-10 h-full backdrop-blur-xl shadow-xs hover:shadow-2xl hover:border-gray-200/60 transition-all duration-500 flex flex-col justify-between group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gray-50 via-transparent to-transparent -z-10 rounded-bl-[2.5rem]" />
                  
                  <div className="space-y-6">
                    <span className="inline-block text-[10px] font-black uppercase tracking-[0.15em] bg-white border border-gray-100 text-victus-navy px-3 py-1.5 rounded-xl shadow-xs">
                      Corporate Track 0{index + 1}
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-victus-navy tracking-tight group-hover:text-victus-green transition-colors">{prog.title}</h3>
                      <p className="text-xs font-black text-victus-green mt-1.5 uppercase tracking-widest">{prog.subtitle}</p>
                    </div>
                    <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-medium">{prog.desc}</p>
                    
                    <div className="pt-2 space-y-3">
                      <div className="text-xs font-black uppercase text-gray-400 tracking-wider">Program Benchmarks</div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
                        {prog.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-[13px] font-semibold text-gray-600">
                            <span className="text-victus-green font-black mt-0.5 shrink-0">✓</span>
                            <span className="leading-snug text-gray-500">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-50/60 mt-8 flex justify-end">
                    <a 
                      href={CAREERS_REGISTRATION_FORM} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs font-black uppercase tracking-widest text-victus-navy group-hover:text-victus-green transition-all flex items-center gap-1.5 bg-gray-50 group-hover:bg-victus-navy group-hover:text-white px-4 py-2.5 rounded-xl border border-gray-100 group-hover:border-transparent no-underline"
                    >
                      Register For Track <span>→</span>
                    </a>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGE SECTION - HIGH END GRID CARDS */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-12 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-3">
            <div className="text-victus-navy uppercase text-xs sm:text-sm font-black tracking-[0.2em]">Why Choose Us</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-victus-navy tracking-tight leading-tight">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-victus-navy to-victus-green">HIVICTUS</span> Advantage
            </h2>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-medium">We combine enterprise-tier engineering standards with beautiful, forward-thinking execution strategy to anchor your business development goals.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {advantageItems.map((item, index) => (
              <ScrollFadeIn key={index} delay={`delay-${index * 100}`}>
                <div className={`group relative bg-white rounded-[2rem] border border-gray-100 p-8 h-full transition-all duration-500 ${item.colorClass} hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${item.badgeClass} bg-white shadow-xs`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} /></svg>
                      </div>
                      <span className="text-xs font-black tracking-widest text-gray-300 group-hover:text-gray-400 uppercase transition-colors">0{index + 1}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-victus-navy tracking-tight transition-colors">{item.title}</h3>
                    <p className="mt-3 text-sm text-gray-500 leading-relaxed font-medium transition-colors">{item.desc}</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-gray-50/60 relative z-10 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Enterprise Ready</span>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* DYNAMIC BLOGS PREVIEW SECTION */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-12 bg-[#f8f9ff] border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-gray-100 pb-6">
            <div className="space-y-2">
              <div className="text-victus-navy uppercase text-xs sm:text-sm font-black tracking-widest">Blog Dynamics</div>
              <h2 className="text-3xl sm:text-4xl font-black text-victus-navy tracking-tight">Latest Corporate Insights</h2>
            </div>
            <button onClick={() => navigate('/blog')} className="text-xs sm:text-sm font-black uppercase tracking-wider text-victus-navy hover:text-victus-green transition-colors flex items-center gap-1.5 px-4 py-2 bg-white rounded-xl border border-gray-100 shadow-xs">
              View All Insights <span>→</span>
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {staticBlogs.slice(0, 3).map((item, index) => (
              <ScrollFadeIn key={item.id} delay={`delay-${index * 100}`}>
                <div className="group h-full rounded-3xl bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="h-48 overflow-hidden relative bg-gray-100">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" loading="lazy" />
                      <span className="absolute top-4 left-4 text-[10px] font-black uppercase tracking-wider bg-white/90 text-victus-navy backdrop-blur-xs px-2.5 py-1 rounded-md shadow-xs">
                        {item.category}
                      </span>
                    </div>
                    <div className="p-6 space-y-3">
                      <span className="text-[11px] font-bold text-gray-400">{item.date} • {item.readTime}</span>
                      <h3 className="text-lg font-black text-victus-navy group-hover:text-victus-green transition-colors line-clamp-2 leading-snug tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed font-medium">{item.excerpt}</p>
                    </div>
                  </div>
                  
                  <div className="p-6 pt-0">
                    <button onClick={() => navigate(`/blog?item=${item.id}`)} className="w-full text-center py-3 bg-gray-50 border border-gray-100 rounded-xl font-bold text-xs text-victus-navy group-hover:bg-victus-navy group-hover:text-white group-hover:border-transparent transition-all duration-300">
                      Read Blueprint →
                    </button>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION - ULTRA MODERN DARK PANEL */}
      <section className="relative overflow-hidden py-28 px-4 sm:px-6 md:px-12 text-center bg-gradient-to-br from-victus-navy via-[#0d2e4d] to-victus-navy text-white">
        <div className="absolute top-0 left-0 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-white/5 rounded-full blur-3xl pointer-events-none -mt-20" />
        <div className="absolute bottom-0 right-0 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-victus-green/10 rounded-full blur-3xl pointer-events-none -mb-20" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <div className="inline-flex px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-black uppercase tracking-widest text-gray-300">
            Get Started Today
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">Ready to Transform Your <br className="hidden sm:inline" />Business Commerce?</h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed font-medium">Let’s build smarter, faster, and more connected business experiences together.</p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <a href={GET_STARTED_FORM} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-victus-navy font-black shadow-xl hover:bg-gray-50 transition-all duration-200 block no-underline text-center transform hover:-translate-y-0.5">
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}