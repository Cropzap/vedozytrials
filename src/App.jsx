// src/App.jsx

import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// 1. Component Shell Paths
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// 2. Page Asset Paths
import Home from './home'; 
import Loans from './loans'; // Core Loans Directory Hub

// 3. Integrated Loansfolio Modules
import MSMEBusinessLoan from './loansfolio/MSMEBusinessLoan'; 
import StartupLoan from './loansfolio/StartupLoan'; 
import WorkingCapitalLoan from './loansfolio/workingcapitalloan'; 
import MachineryLoan from './loansfolio/MachineryLoan'; 
import SupplychainFinancing from './loansfolio/SupplychainFinancing'; 

// 4. Auxiliary Pages
import AboutUs from './pages/aboutus';
import Overview from './pages/about/overview'; // Added Overview page import
import ServiceDetails from './pages/servicedetails';
import ContactUs from './pages/contactus';
import Careers from './pages/careers';
import Blogs from './pages/blogs'; 
import Login from './pages/Login'; 
import Signup from './pages/Signup'; 
import PartnerWithUs from './pages/PartnerWithUs'; 
import WhatWeAreBuilding from './pages/story/what-we-are-building'; 


// Reusable Ultra-Attractive Coming Soon Component
function ComingSoonPage({ categoryName }) {
  return (
    <div className="w-full min-h-[75vh] flex items-center justify-center px-4 relative overflow-hidden bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_24px] opacity-95">
      {/* Soft Background Blurred Focus Dots */}
      <div className="absolute top-12 left-1/4 w-72 h-72 bg-victus-navy/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-12 right-1/4 w-64 h-64 bg-victus-green/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-xl w-full text-center space-y-8 bg-white/70 backdrop-blur-xl border border-gray-100 p-8 sm:p-12 rounded-[2.5rem] shadow-2xl shadow-gray-200/40 relative z-10">
        
        {/* Animated Status Pulse Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-victus-navy/5 border border-victus-navy/10 text-victus-navy text-xs font-black uppercase tracking-widest">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-victus-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-victus-green"></span>
          </span>
          Ecosystem Pipeline Module
        </div>

        {/* Dynamic Title Core */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-black text-victus-navy tracking-tight leading-tight">
            {categoryName} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-victus-navy to-victus-green">
              Coming Soon
            </span>
          </h1>
          <p className="text-sm sm:text-base text-gray-500 font-medium leading-relaxed max-w-sm mx-auto">
            Our solution architects are compiling targeted industrial benchmarks and strategic capability models for this slot.
          </p>
        </div>

        {/* Sleek Progress Indicator Graphics Element */}
        <div className="space-y-2 max-w-xs mx-auto">
          <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden relative">
            <div className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-victus-navy to-victus-green w-3/4 rounded-full animate-pulse" />
          </div>
          <div className="flex justify-between items-center text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">
            <span>Framework Syncing</span>
            <span className="text-victus-green">75% Complete</span>
          </div>
        </div>

        {/* Back Link Anchor Interaction */}
        <div className="pt-4 border-t border-gray-50/80">
          <Link 
            to="/" 
            className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-gray-50 hover:bg-victus-navy text-victus-navy hover:text-white font-black text-xs uppercase tracking-widest rounded-xl border border-gray-100 hover:border-transparent shadow-xs hover:shadow-lg transition-all duration-300"
          >
            ← Return to Hub Portal
          </Link>
        </div>

      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="min-h-screen bg-[#f8f9ff]">
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Core Loan Directory Hub & Specialized Product Routes */}
          <Route path="/loans" element={<Loans />} />
          <Route path="/loans/msme-business-loan" element={<MSMEBusinessLoan />} />
          <Route path="/loans/startup-loan" element={<StartupLoan />} />
          <Route path="/loans/working-capital-loan" element={<WorkingCapitalLoan />} />
          <Route path="/loans/machinery-loan" element={<MachineryLoan />} />
          <Route path="/loans/supplychain-financing" element={<SupplychainFinancing />} />

          {/* About Routes */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/about/overview" element={<Overview />} />

          <Route path="/services/:serviceSlug" element={<ServiceDetails />} />
          
          {/* Enhanced Story Route */}
          <Route path="/story/what-we-are-building" element={<WhatWeAreBuilding />} />
          
          {/* Enhanced Attractive Coming Soon Route Targets */}
          <Route path="/industry/:industrySlug" element={<ComingSoonPage categoryName="Industry Profile" />} />
          <Route path="/alliances/:allianceSlug" element={<ComingSoonPage categoryName="Alliance Portal" />} />
          
          <Route path="/blog" element={<Blogs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/careers" element={<Careers />} />
          
          {/* Authentication & Onboarding Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          
          {/* Partner with us route variations to prevent 404s */}
          <Route path="/partnerwithus" element={<PartnerWithUs />} />
          <Route path="/partner-with-us" element={<PartnerWithUs />} />

          <Route path="/signup" element={<Signup />} /> {/* Alias route for registration */}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;