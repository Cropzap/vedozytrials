import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoBrand from '../assets/logo.png';

// External Google Form Anchors Matrix
const FORMS = {
  partnership: "https://forms.gle/Xc2Bj9ouVtPBXTmW9",
  programRegistration: "https://forms.gle/brfLmM7eFX4AdcLF7",
  careersRegistration: "https://forms.gle/Na4UnEEawLe7KtQP6",
  getStarted: "https://forms.gle/89mT6Vs8CX99UkU48"
};

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
    setTimeout(() => setMobileView('main'), 300);
  };

  return (
    <header className="w-full bg-white text-victus-navy sticky top-0 z-50 border-b border-gray-100 backdrop-blur-md font-sans transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          
          {/* Logo Brand Panel - Substantially Increased Proportions */}
          <Link to="/" className="flex items-center cursor-pointer flex-shrink-0 h-[64px] sm:h-[76px] md:h-[86px] lg:h-[92px] transition-all duration-300" onClick={() => setMegaMenuOpen(false)}>
            <img 
              src={logoBrand} 
              alt="Hivictus Corporate Brand Logo" 
              className="h-full w-auto object-contain object-left scale-100 hover:scale-[1.02] transition-transform duration-200"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center space-x-10 h-full text-[14px] font-bold text-gray-500 tracking-wide">
            <Link to="/" className="h-full flex items-center hover:text-victus-navy transition-colors duration-200">
              Home
            </Link>
            <Link to="/about" className="h-full flex items-center hover:text-victus-navy transition-colors duration-200">
              About us
            </Link>

            {/* Core Mega Dropdown Trigger */}
            <button 
              onClick={() => setMegaMenuOpen(!megaMenuOpen)}
              className={`h-full flex items-center gap-1.5 focus:outline-none hover:text-victus-navy transition-colors border-b-4 ${
                megaMenuOpen ? 'border-b-text-victus-navy border-victus-navy text-victus-navy' : 'border-transparent'
              }`}
            >
              What we do
              <svg className={`w-3 h-3 transform transition-transform duration-300 ${megaMenuOpen ? 'rotate-180 text-victus-navy' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <Link to="/blog" className="h-full flex items-center hover:text-victus-navy transition-colors duration-200">
              Blog
            </Link>
            <Link to="/careers" className="h-full flex items-center hover:text-victus-navy transition-colors duration-200">
              Careers
            </Link>
            <Link to="/contact" className="h-full flex items-center hover:text-victus-navy transition-colors duration-200">
              Contact
            </Link>
          </div>

          {/* Right Action Button */}
          <div className="hidden xl:flex items-center">
            <a 
              href={FORMS.getStarted}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMegaMenuOpen(false)}
              className="relative px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white bg-victus-navy rounded-xl transition-all duration-300 hover:bg-victus-navy/90 hover:shadow-lg hover:shadow-victus-navy/10 active:scale-95 no-underline block"
            >
              Get started
            </a>
          </div>

          {/* Mobile Menu Toggle Trigger */}
          <div className="flex xl:hidden items-center">
            <button 
              onClick={() => mobileMenuOpen ? closeMobileDrawer() : setMobileMenuOpen(true)} 
              className="text-victus-navy hover:text-victus-green focus:outline-none p-2 transition-colors z-[70]" 
              aria-label="Toggle navigation menu"
            >
              <svg className="w-7 h-7 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* DESKTOP MEGA DROPDOWN MENU */}
      {megaMenuOpen && (
        <div 
          className="absolute left-0 w-full bg-white text-victus-navy hidden xl:block z-40 border-b border-gray-100 shadow-xl shadow-gray-200/40"
          onMouseLeave={() => setMegaMenuOpen(false)}
        >
          <div className="w-full flex min-h-[440px]">
            
            {/* Left Tab Sub-panels */}
            <div className="w-1/5 bg-gray-50/60 py-8 flex flex-col font-sans border-r border-gray-100">
              {['Services', 'Industry', 'Alliances'].map((tab) => (
                <div 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full px-8 py-4 flex items-center justify-between text-base font-bold cursor-pointer transition-all duration-200 ${
                    activeTab === tab ? 'bg-white text-victus-navy border-l-4 border-victus-navy' : 'text-gray-400 hover:text-victus-navy hover:bg-gray-50 border-l-4 border-transparent'
                  }`}
                >
                  <span>{tab}</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${activeTab === tab ? 'text-victus-navy translate-x-1' : 'text-gray-300'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              ))}
            </div>

            {/* Right Tab Active Columns View Matrix */}
            <div className="w-4/5 flex flex-col bg-white">
              <div className="px-16 py-12 flex-grow">
                <div className="grid grid-cols-3 gap-x-12 gap-y-2 w-full">
                  {menuData[activeTab]?.map((column, columnIndex) => (
                    <div key={columnIndex} className="flex flex-col space-y-4">
                      {column.map((linkText, linkIndex) => (
                        <Link 
                          key={linkIndex} 
                          to={`/${activeTab.toLowerCase()}/${linkText.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                          onClick={() => setMegaMenuOpen(false)}
                          className="text-gray-500 hover:text-victus-navy hover:underline decoration-victus-green decoration-2 underline-offset-4 text-[15px] font-medium leading-snug transition-all"
                        >
                          {linkText}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Dynamic Bottom Row Footer Panel */}
              {activeTab === 'Alliances' && (
                <div className="mt-auto px-16 py-6 border-t border-gray-50 flex justify-between items-center bg-gray-50/20">
                  <span className="text-xs font-bold tracking-wider text-gray-400 uppercase max-w-xl text-left">
                    Interested in alliances? <span className="text-victus-navy ml-1">Let's coordinate paths.</span>
                  </span>
                  <a 
                    href={FORMS.partnership}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMegaMenuOpen(false)}
                    className="border border-victus-navy text-victus-navy hover:bg-victus-navy hover:text-white text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded-xl transition-all duration-300 no-underline block text-center shadow-xs"
                  >
                    Partner with us
                  </a>
                </div>
              )}
            </div>

          </div>
        </div>
      )}

      {/* FULL SCREEN IMMERSIVE MOBILE VIEW OVERLAY CONTAINER */}
      <div className={`fixed inset-0 w-screen h-screen z-[9999] xl:hidden ${mobileMenuOpen ? 'visible' : 'invisible pointer-events-none'}`}>
        
        {/* Backdrop Curtain Layer */}
        <div 
          className={`absolute inset-0 bg-white transition-opacity duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} 
          onClick={closeMobileDrawer} 
        />
        
        {/* Full-Screen Menu Content Sheet */}
        <div 
          className={`absolute inset-0 w-full h-full bg-white flex flex-col transition-all duration-400 ease-in-out transform ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } overflow-hidden`}
        >
          
          {/* Header Action Navigation Row */}
          <div className="flex items-center justify-between h-20 md:h-24 px-6 sm:px-8 border-b border-gray-100 bg-white shrink-0 z-10">
            <span className="font-bold text-xs uppercase tracking-[0.25em] text-gray-400">
              {mobileView === 'main' ? 'Menu Directory' : mobileView}
            </span>
            {mobileView !== 'main' ? (
              <button 
                onClick={() => setMobileView(mobileView === 'services' || mobileView === 'industry' || mobileView === 'alliances' ? 'what we do' : 'main')} 
                className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-white bg-victus-navy px-3 py-2 rounded-none active:scale-95 transition-transform duration-200 shadow-sm"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                Back
              </button>
            ) : (
              <button 
                onClick={closeMobileDrawer}
                className="text-gray-400 hover:text-victus-navy text-xs font-semibold uppercase tracking-wider flex items-center gap-1 py-1.5 px-3 bg-gray-100/70 rounded-none"
              >
                Close ✕
              </button>
            )}
          </div>

          {/* Sliding Track Viewport Matrix */}
          <div className="flex-grow relative overflow-hidden bg-white">
            
            {/* VIEW 1: MAIN NAVIGATION LEVEL */}
            <div 
              className={`absolute inset-0 px-6 sm:px-8 py-6 flex flex-col space-y-6 bg-white overflow-y-auto transition-transform duration-300 ease-in-out ${
                mobileView === 'main' ? 'translate-x-0' : '-translate-x-full'
              }`}
            >
              <Link to="/" onClick={closeMobileDrawer} className="flex items-center justify-between bg-gray-50/50 border border-gray-100 p-5 rounded-none text-victus-navy font-bold tracking-wide text-[16px] transition-all active:scale-[0.99]">
                <span>Home Portal</span>
                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </Link>

              <Link to="/about" onClick={closeMobileDrawer} className="flex items-center justify-between bg-gray-50/50 border border-gray-100 p-5 rounded-none text-victus-navy font-bold tracking-wide text-[16px] transition-all active:scale-[0.99]">
                <span>About Corporate</span>
                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </Link>

              <button onClick={() => setMobileView('what we do')} className="w-full flex items-center justify-between bg-gradient-to-r from-gray-50 to-white border border-gray-100 p-5 rounded-none text-victus-navy text-left transition-all active:scale-[0.99] shadow-sm">
                <div>
                  <span className="text-[17px] font-bold block text-victus-navy tracking-tight">What We Do</span>
                  <span className="text-[12px] text-gray-400 block font-medium mt-0.5">Explore capability indexes</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-victus-green px-2 py-0.5 rounded-none">View</span>
                  <svg className="w-5 h-5 text-victus-navy" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </div>
              </button>

              <Link to="/blog" onClick={closeMobileDrawer} className="flex items-center justify-between bg-gray-50/50 border border-gray-100 p-5 rounded-none text-victus-navy font-bold tracking-wide text-[16px] transition-all active:scale-[0.99]">
                <span>Knowledge Base</span>
                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </Link>

              <Link to="/careers" onClick={closeMobileDrawer} className="flex items-center justify-between bg-gray-50/50 border border-gray-100 p-5 rounded-none text-victus-navy font-bold tracking-wide text-[16px] transition-all active:scale-[0.99]">
                <span>Careers Desk</span>
                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </Link>

              <Link to="/contact" onClick={closeMobileDrawer} className="flex items-center justify-between bg-gray-50/50 border border-gray-100 p-5 rounded-none text-victus-navy font-bold tracking-wide text-[16px] transition-all active:scale-[0.99]">
                <span>Contact Hub</span>
                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            {/* VIEW 2: WHAT WE DO SELECTION LAYER */}
            <div 
              className={`absolute inset-0 px-6 sm:px-8 py-6 flex flex-col space-y-4 bg-white overflow-y-auto transition-transform duration-300 ease-in-out ${
                mobileView === 'what we do' ? 'translate-x-0' : mobileView === 'main' ? 'translate-x-full' : '-translate-x-full'
              }`}
            >
              {['services', 'industry', 'alliances'].map((type) => (
                <button 
                  key={type} 
                  onClick={() => setMobileView(type)} 
                  className="w-full flex items-center justify-between bg-gray-50/50 border border-gray-100 p-5 rounded-none text-victus-navy font-bold capitalize transition-all active:scale-[0.98]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-6 bg-victus-green" />
                    <span className="text-[16px] tracking-wide font-bold">{type}</span>
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </button>
              ))}
            </div>

            {/* VIEW 3: SUB-CATEGORY DIRECTORY DEEP LINK PANEL */}
            <div 
              className={`absolute inset-0 px-6 sm:px-8 py-6 flex flex-col space-y-6 bg-white overflow-y-auto transition-transform duration-300 ease-in-out ${
                ['services', 'industry', 'alliances'].includes(mobileView) ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              {['services', 'industry', 'alliances'].includes(mobileView) && (
                <>
                  <div className="bg-white border border-gray-100 rounded-none flex flex-col divide-y divide-gray-50 overflow-hidden shadow-sm">
                    {menuData[mobileView.charAt(0).toUpperCase() + mobileView.slice(1)]?.flat().map((link, idx) => (
                      <Link 
                        key={idx} 
                        to={`/${mobileView}/${link.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                        onClick={closeMobileDrawer} 
                        className="text-gray-500 hover:text-victus-navy hover:bg-gray-50/50 text-[15px] font-semibold py-4 px-5 flex justify-between items-center transition-colors duration-150"
                      >
                        <span className="max-w-[85%] text-left leading-normal">{link}</span>
                        <svg className="w-4 h-4 text-gray-300 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                      </Link>
                    ))}
                  </div>

                  {mobileView === 'alliances' && (
                    <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-none border border-gray-100 flex flex-col items-center text-center space-y-4 shadow-xs">
                      <p className="text-xs font-bold tracking-wider text-gray-400 uppercase leading-normal">
                        Interested in alliances? <br/> <span className="text-victus-navy">Let's coordinate paths.</span>
                      </p>
                      <a 
                        href={FORMS.partnership}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMobileDrawer}
                        className="w-full bg-white border border-gray-200 text-victus-navy text-xs font-bold uppercase tracking-widest py-4 rounded-none transition-all duration-200 text-center no-underline block shadow-xs active:scale-[0.98]"
                      >
                        Partner with us
                      </a>
                    </div>
                  )}
                </>
              )}
            </div>

          </div>

          {/* Sticky Full-Width Footer Action Row */}
          <div className="p-6 sm:p-8 border-t border-gray-100 bg-white shrink-0 z-10">
            <a 
              href={FORMS.getStarted}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileDrawer}
              className="w-full bg-victus-navy text-white text-center text-xs font-bold uppercase tracking-widest py-3.5 rounded-none shadow-lg shadow-victus-navy/10 active:scale-95 transition-all duration-150 block no-underline"
            >
              Get started today
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}