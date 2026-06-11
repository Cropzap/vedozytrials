import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 1. Updated Component Shell Paths
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// 2. Updated Page Asset Paths
import Home from './home'; // Moved up directly next to App.jsx
import AboutUs from './pages/aboutus';
import ServiceDetails from './pages/servicedetails';
import ContactUs from './pages/contactus';
import Careers from './pages/careers';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services/:serviceSlug" element={<ServiceDetails />} />
          <Route path="/industry/:industrySlug" element={<div className="p-20 text-center">Industry Profile Module Coming Soon</div>} />
          <Route path="/alliances/:allianceSlug" element={<div className="p-20 text-center">Alliance Portal Coming Soon</div>} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;