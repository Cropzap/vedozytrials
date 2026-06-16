import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';

// Premium Reusable Scroll Animation Component
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
    <div
      ref={domRef}
      className={`transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) transform ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-[0.99]"
      } ${delay}`}
    >
      {children}
    </div>
  );
}

const AboutUs = () => {
  const cards = [
    { title: 'Innovation First', desc: 'Developing forward-thinking architectures to keep your operations ahead of evolving digital transformations.' },
    { title: 'Client Centric', desc: 'We strip away complexity, making enterprise-grade digital solutions accessible so you can focus on direct growth.' },
    { title: 'Quality Driven', desc: 'From campus-integrated learning frameworks to final product deployment, we secure strict excellence parameters.' }
  ];

  const stats = [
    { label: 'Corporate Tracks Offered', value: '4' },
    { label: 'Ecosystem Success Rate', value: '95%' },
    { label: 'Excellence Centers Active', value: 'Strategic' },
    { label: 'Barriers Eliminated', value: 'Zero' }
  ];

const teamMembers = [
    {
      name: 'Dharunkumar T',
      role: 'Founder & CEO',
      bio: 'Strategizing the future of SMB ecosystems through talent and technology enablement.'
    },
    {
      name: 'Ponkavin R',
      role: 'Co-Founder & COO',
      bio: 'Directing global enterprise infrastructure operations, cross-platform technical workflows, and continuous pipeline automation systems.'
    },
    {
      name: 'Manoth Singh',
      role: 'Board Advisor & CSO',
      bio: 'Architecting market expansion roadmaps, sustainable commercial strategies, and corporate development frameworks.'
    }
  ];

  return (
    <div className="bg-victus-light text-victus-navy min-h-screen font-sans antialiased overflow-x-hidden">
      <Helmet>
        <title>About Us | HIVICTUS Ecosystem & Executive Leadership</title>
        <meta name="description" content="Discover the philosophy driving HIVICTUS. We democratize technology and design, streamlining operations and bridging academic gaps through continuous talent development." />
      </Helmet>

      {/* 1. Our Story Section */}
      <section className="max-w-7xl mx-auto py-20 lg:py-28 px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-12 lg:gap-16 items-center relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-victus-navy/5 to-transparent blur-3xl rounded-full pointer-events-none -mr-20" />
        
        <div className="space-y-6 md:col-span-7">
          <div className="inline-flex items-center px-4 py-1.5 rounded-xl bg-white border border-gray-100 shadow-xs text-victus-navy text-xs font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-victus-green mr-2" />
            Ecosystem Strategy
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-victus-navy tracking-tight leading-tight">
            Our Story & Operational Motive
          </h1>
          <div className="space-y-4 text-gray-500 font-medium text-base sm:text-lg leading-relaxed">
            <p>
              At Hivictus, we believe that technology should serve people seamlessly. Our vision is to build a highly connected world where great business ideas face zero technological barriers to success, allowing true creativity to thrive alongside powerful, clean automation frameworks.
            </p>
            <p>
              We work directly to democratize enterprise-grade digital solutions, making them accessible to businesses of all sizes while bridging the widening gap between traditional academic education models and strict real-world industry expectations.
            </p>
          </div>
        </div>
        
        {/* Right Side Glass Frame Presentation Block */}
        <div className="md:col-span-5 w-full aspect-[4/3] md:h-[420px] rounded-[2.5rem] bg-white p-3 shadow-2xl border border-gray-100/70 shadow-gray-200/50 relative transform hover:scale-[1.01] transition-transform duration-500">
          <div className="absolute inset-3 bg-gradient-to-tr from-victus-navy/10 to-transparent mix-blend-multiply rounded-[1.8rem] z-10 pointer-events-none" />
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
            alt="HIVICTUS collaborative engineering and strategic operational team briefing" 
            className="w-full h-full object-cover rounded-[1.8rem]"
          />
        </div>
      </section>

      {/* 2. Core Values / Content Cards Section */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 space-y-16">
          <div className="text-center sm:text-left space-y-3">
            <div className="text-victus-green font-black uppercase tracking-[0.2em] text-xs sm:text-sm">Pillars of Action</div>
            <h2 className="text-3xl sm:text-4xl font-black text-victus-navy tracking-tight">What Drives Our Workflows</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {cards.map((card, index) => (
              <ScrollFadeIn key={index} delay={`delay-${index * 100}`}>
                <div className="group h-full p-8 rounded-[2rem] bg-white border border-gray-100/70 hover:border-slate-200 hover:shadow-2xl hover:shadow-victus-navy/5 transition-all duration-500 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-gray-50/40 to-transparent rounded-br-[2rem] -z-10" />
                  <div>
                    <div className="w-2 h-6 rounded-full bg-victus-green mb-8 group-hover:h-8 transition-all duration-300" />
                    <h3 className="text-xl font-black text-victus-navy mb-3 tracking-tight">{card.title}</h3>
                    <p className="text-gray-500 font-medium leading-relaxed text-sm sm:text-base">{card.desc}</p>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. High-Contrast Corporate Metric Stats Bar */}
      <section className="bg-gradient-to-r from-victus-navy via-[#0d2e4d] to-victus-navy py-16 px-4 text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:16px_24px] pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-1">
              <div className="text-4xl sm:text-5xl font-black text-victus-green tracking-tight tabular-nums">{stat.value}</div>
              <div className="text-xs font-bold uppercase tracking-[0.15em] text-gray-300 pt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Vision & Mission Side-by-Side Content Matrix */}
      <section className="max-w-7xl mx-auto py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Vision Block */}
          <ScrollFadeIn delay="delay-0">
            <div className="group h-full flex flex-col sm:flex-row gap-6 items-start bg-white p-6 sm:p-8 rounded-[2.5rem] border border-gray-100 shadow-sm shadow-gray-100/40 hover:shadow-xl hover:border-gray-200/60 transition-all duration-500">
              <div className="flex-1 space-y-3">
                <div className="text-victus-green font-black uppercase tracking-wider text-xs">Future Outlook</div>
                <h2 className="text-2xl font-black text-victus-navy tracking-tight">Our Vision</h2>
                <p className="text-gray-500 font-medium text-sm sm:text-base leading-relaxed">
                  To build a connected world where great ideas face zero technological barriers to success. We visualize a landscape where creativity thrives seamlessly alongside powerful, clean automation.
                </p>
              </div>
              <div className="w-full sm:w-36 h-36 shrink-0 rounded-2xl overflow-hidden border border-gray-100 shadow-inner bg-gray-50">
                <img 
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80" 
                  alt="Vision strategy parameters layout interface" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </ScrollFadeIn>

          {/* Mission Block */}
          <ScrollFadeIn delay="delay-150">
            <div className="group h-full flex flex-col sm:flex-row gap-6 items-start bg-white p-6 sm:p-8 rounded-[2.5rem] border border-gray-100 shadow-sm shadow-gray-100/40 hover:shadow-xl hover:border-gray-200/60 transition-all duration-500">
              <div className="flex-1 space-y-3">
                <div className="text-victus-green font-black uppercase tracking-wider text-xs">Core Assignment</div>
                <h2 className="text-2xl font-black text-victus-navy tracking-tight">Our Mission</h2>
                <p className="text-gray-500 font-medium text-sm sm:text-base leading-relaxed">
                  To democratize technology and design, making enterprise-grade digital solutions accessible to businesses of all sizes. We strip away complexity so you can focus on your direct growth.
                </p>
              </div>
              <div className="w-full sm:w-36 h-36 shrink-0 rounded-2xl overflow-hidden border border-gray-100 shadow-inner bg-gray-50">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80" 
                  alt="Corporate implementation execution roadmap workflow documentation" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </ScrollFadeIn>

        </div>
      </section>

      {/* 5. Executive Board Thought Leadership - Clean Typography Board Layout */}
      <section className="bg-white border-t border-gray-100 py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-victus-green/5 to-transparent blur-3xl rounded-full pointer-events-none -ml-20" />
        
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-victus-green font-black uppercase tracking-widest text-xs sm:text-sm">Governance Board</div>
            <h2 className="text-3xl sm:text-4xl font-black text-victus-navy tracking-tight">Meet Our Leaders</h2>
            <p className="text-sm sm:text-base text-gray-500 font-medium leading-relaxed">The expert steering architects directing our foundational ecosystems and digital delivery grids.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <ScrollFadeIn key={index} delay={`delay-${index * 100}`}>
                <div className="group bg-[#f8f9ff] rounded-[2rem] border border-gray-100/70 p-6 sm:p-8 hover:bg-white hover:border-gray-200 hover:shadow-2xl hover:shadow-victus-navy/5 transition-all duration-500 h-full flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gray-50 via-transparent to-transparent -z-10 rounded-bl-[2rem]" />
                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <h3 className="text-lg sm:text-xl font-black text-victus-navy tracking-tight group-hover:text-victus-green transition-colors">{member.name}</h3>
                      <p className="inline-block text-[10px] font-black uppercase tracking-widest bg-white border border-gray-100 text-victus-green px-2.5 py-1 rounded-md shadow-xs">{member.role}</p>
                    </div>
                    <p className="text-gray-500 font-medium text-sm sm:text-base leading-relaxed">{member.bio}</p>
                  </div>
                  
                  <div className="pt-4 mt-6 border-t border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                    Verified Executive Profile
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;