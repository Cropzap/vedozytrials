import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Services');
  const [mobileView, setMobileView] = useState('main');
  
  const navigate = useNavigate();

  const menuData = {
    Services: [
      ["Sales", "Business Development", "Lead Generation", "Sales Strategy Development", "New Business Development", "Consultation"],
      ["Demand Generation", "Growth Marketing", "Digital Marketing", "Branding & Promotion", "Go-to-Market Development"],
      ["Business Process", "Human Capital", "Fractional Executive Services", "Cognitive Business Solutions", "Technology Consulting"]
    ],
    Industry: [
      ["Consumer", "Energy, Resources & Industrials", "Financial Services", "Life Sciences & Health Care"],
      ["Government & Public Services", "Technology, Media & Telecommunications", "Automotive", "Aerospace & Defense"],
      ["Real Estate & Construction", "Transportation & Hospitality"]
    ],
    Alliances: [
      ["Tactos Strategic Solutions", "FIRST Foundation", "Karun Foundation"],
      ["Magic Bus Foundation", "Emerging Educational Institutions"]
    ]
  };

  const closeMobileDrawer = () => {
    setMobileMenuOpen(false);
    setMobileView('main');
  };

  // Helper function to build dynamic routing paths cleanly matching slug structures
  const buildSlugPath = (category, item) => {
    let slug = item.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-');
    if (slug.endsWith('-')) slug = slug.slice(0, -1);
    if (slug.startsWith('-')) slug = slug.slice(1);
    
    // Quick adjustment for mapping variations like "Business Process" to BPO slug configuration if required
    if (slug === "business-process") slug = "business-process-bpos";
    
    return `/${category.toLowerCase()}/${slug}`;
  };

  return (
    <header className="w-full bg-[#111111] text-white sticky top-0 z-50 border-b border-[#2A2A2A] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand Panel */}
          <Link to="/" className="flex items-center cursor-pointer flex-shrink-0" onClick={() => setMegaMenuOpen(false)}>
            <span className="font-black text-2xl tracking-tight text-white uppercase">
              Hivictus
              <span className="text-[#86BC25] font-black inline-block ml-px">.</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden xl:flex items-center space-x-10 h-full text-sm font-bold text-gray-300 tracking-wide">
            <Link to="/" className="h-full flex items-center text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/about" className="h-full flex items-center text-gray-300 hover:text-white transition-colors">
              About us
            </Link>

            {/* Core Mega Dropdown Trigger */}
            <button 
              onClick={() => setMegaMenuOpen(!megaMenuOpen)}
              className={`h-full flex items-center gap-1.5 focus:outline-none hover:text-white transition-colors border-b-4 ${
                megaMenuOpen ? 'border-[#86BC25] text-white' : 'border-transparent'
              }`}
            >
              What we do
              <svg className={`w-3 h-3 transform transition-transform duration-300 ${megaMenuOpen ? 'rotate-180 text-[#86BC25]' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <Link to="/careers" className="h-full flex items-center text-gray-300 hover:text-white transition-colors">
              Careers
            </Link>
            <Link to="/contact" className="h-full flex items-center text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* Right Action Button */}
          <div className="hidden xl:flex items-center">
            <button onClick={() => { setMegaMenuOpen(false); navigate('/contact'); }} className="bg-white text-black hover:bg-[#86BC25] hover:text-black text-xs font-bold uppercase tracking-widest px-6 py-3 transition-all duration-200">
              Get started
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex xl:hidden items-center">
            <button onClick={() => mobileMenuOpen ? closeMobileDrawer() : setMobileMenuOpen(true)} className="text-white hover:text-[#86BC25] focus:outline-none p-2 transition-colors z-[60]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M6 18L18 6" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* DESKTOP MEGA MENU */}
      {megaMenuOpen && (
        <div 
          className="absolute left-0 w-full bg-[#111111] text-white hidden xl:block z-40 border-b border-[#2A2A2A] shadow-2xl"
          onMouseLeave={() => setMegaMenuOpen(false)}
        >
          <div className="w-full flex min-h-[440px]">
            
            <div className="w-1/5 bg-[#1C1C1C] py-8 flex flex-col font-sans border-r border-[#2A2A2A]">
              {['Services', 'Industry', 'Alliances'].map((tab) => (
                <div 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full px-6 py-4 flex items-center justify-between text-base font-bold cursor-pointer transition-all duration-200 ${
                    activeTab === tab ? 'bg-[#111111] text-[#86BC25] border-l-4 border-[#86BC25]' : 'text-gray-400 hover:text-white border-l-4 border-transparent'
                  }`}
                >
                  <span>{tab}</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${activeTab === tab ? 'text-[#86BC25] translate-x-1' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              ))}
            </div>

            <div className="w-4/5 flex flex-col bg-[#111111]">
              {/* Content Grid Container */}
              <div className="px-16 py-12 flex-grow">
                <div className="grid grid-cols-3 gap-x-12 gap-y-1 w-full">
                  {menuData[activeTab]?.map((column, columnIndex) => (
                    <div key={columnIndex} className="flex flex-col space-y-4">
                      {column.map((linkText, linkIndex) => (
                        <Link 
                          key={linkIndex} 
                          to={buildSlugPath(activeTab, linkText)}
                          onClick={() => setMegaMenuOpen(false)}
                          className="text-gray-400 hover:text-white hover:underline decoration-[#86BC25] decoration-2 underline-offset-4 text-[15px] font-normal leading-snug transition-all"
                        >
                          {linkText}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Dynamic Bottom Footer Segment */}
              {activeTab === 'Alliances' && (
                <div className="mt-auto px-16 py-6 border-t border-[#1C1C1C] flex justify-between items-center bg-[#141414]">
                  {/* Left Side: CTA Text Info Block */}
                  <span className="text-xs font-bold tracking-wider text-gray-400 uppercase max-w-xl text-left">
                    Interested in collaborative ventures? <span className="text-white ml-1">Let's coordinate paths.</span>
                  </span>

                  {/* Right Side: Dynamic action call button */}
                  <button 
                    onClick={() => { setMegaMenuOpen(false); navigate('/partner'); }}
                    className="border border-[#86BC25] text-[#86BC25] hover:bg-[#86BC25] hover:text-black text-xs font-bold uppercase tracking-widest px-6 py-3.5 transition-all duration-200"
                  >
                    Partner with us
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      )}

      {/* MOBILE LEFT DRAWER */}
      <div className={`fixed inset-0 z-50 xl:hidden transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" onClick={closeMobileDrawer} />
        <div className={`absolute top-0 left-0 w-full max-w-sm h-screen bg-[#111111] border-r border-[#2A2A2A] flex flex-col transition-transform duration-300 transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          
          <div className="flex items-center justify-between h-20 px-6 border-b border-[#2A2A2A] shrink-0">
            <span className="font-black text-xl tracking-tight text-white uppercase">
              {mobileView.toUpperCase()}
            </span>
          </div>

          <div className="flex-grow overflow-y-auto px-6 py-6 font-sans">
            {mobileView === 'main' && (
              <div className="flex flex-col space-y-5">
                <Link to="/" onClick={closeMobileDrawer} className="text-white text-base font-extrabold uppercase pb-3.5 border-b border-[#1C1C1C] block">Home</Link>
                <Link to="/about" onClick={closeMobileDrawer} className="text-white text-base font-extrabold uppercase pb-3.5 border-b border-[#1C1C1C] block">About us</Link>
                <button onClick={() => setMobileView('what-we-do')} className="w-full text-white text-base font-extrabold uppercase pb-3.5 border-b border-[#1C1C1C] flex justify-between items-center">
                  <span>What we do</span>
                  <svg className="w-5 h-5 text-[#86BC25]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </button>
                <Link to="/careers" onClick={closeMobileDrawer} className="text-white text-base font-extrabold uppercase pb-3.5 border-b border-[#1C1C1C] block">Careers</Link>
                <Link to="/contact" onClick={closeMobileDrawer} className="text-white text-base font-extrabold uppercase pb-3.5 border-b border-[#1C1C1C] block">Contact</Link>
              </div>
            )}

            {mobileView === 'what-we-do' && (
              <div className="flex flex-col space-y-4">
                <button onClick={() => setMobileView('main')} className="text-xs font-bold uppercase text-[#86BC25] flex items-center gap-2 mb-4">← Back</button>
                {['services', 'industry', 'alliances'].map((type) => (
                  <button key={type} onClick={() => setMobileView(type)} className="w-full text-left text-gray-300 text-base font-bold py-3 border-b border-[#1C1C1C] flex justify-between items-center capitalize">
                    <span>{type}</span>
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </button>
                ))}
              </div>
            )}

            {['services', 'industry', 'alliances'].includes(mobileView) && (
              <div className="flex flex-col space-y-4">
                <button onClick={() => setMobileView('what-we-do')} className="text-xs font-bold uppercase text-[#86BC25] flex items-center gap-2 mb-4">← Back</button>
                <div className="flex flex-col space-y-3 pt-2">
                  {menuData[mobileView.charAt(0).toUpperCase() + mobileView.slice(1)]?.flat().map((link, idx) => (
                    <Link 
                      key={idx} 
                      to={buildSlugPath(mobileView, link)} 
                      onClick={closeMobileDrawer} 
                      className="text-gray-400 hover:text-white text-sm font-semibold py-1.5 block"
                    >
                      {link}
                    </Link>
                  ))}

                  {/* Mobile Footer Block for Alliances View */}
                  {mobileView === 'alliances' && (
                    <div className="mt-8 pt-6 border-t border-[#1C1C1C] flex flex-col space-y-4">
                      <p className="text-[11px] font-bold tracking-wider text-gray-400 text-center uppercase leading-normal">
                        Interested in collaborative ventures? <br/> <span className="text-white">Let's coordinate paths.</span>
                      </p>
                      <button 
                        onClick={() => { closeMobileDrawer(); navigate('/partner'); }}
                        className="w-full border border-[#86BC25] text-[#86BC25] hover:bg-[#86BC25] hover:text-black text-xs font-bold uppercase tracking-widest py-3.5 transition-colors duration-200"
                      >
                        Partner with us
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="p-6 border-t border-[#2A2A2A] bg-[#111111] shrink-0">
            <button onClick={() => { closeMobileDrawer(); navigate('/contact'); }} className="w-full bg-white text-black text-center text-xs font-bold uppercase tracking-widest py-4 hover:bg-[#86BC25]">
              Get started
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}