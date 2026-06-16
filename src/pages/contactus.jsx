import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

export default function ContactUs() {
  const [formStatus, setFormState] = useState('IDLE'); // 'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    engagement: '',
    context: ''
  });

  const handleInputChange = (e, field) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.engagement) {
      alert("Please populate all vital identity fields before submitting.");
      return;
    }

    setFormState('SENDING');

    // Building clean FormData structure compliant with Web3Forms standard processing engine
    const submissionBody = new FormData();
    submissionBody.append("access_key", "80a7ed10-ec8b-4ab2-b544-32492a2f3819");
    submissionBody.append("subject", `New HIVICTUS Engagement Blueprint from ${formData.name}`);
    
    // Core payload mappings
    submissionBody.append("name", formData.name);
    submissionBody.append("email", formData.email);
    submissionBody.append("mobile_number", formData.phone);
    submissionBody.append("area_of_engagement", formData.engagement);
    submissionBody.append("operational_context", formData.context);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionBody
      });
      
      const resData = await response.json();
      if (resData.success) {
        setFormState('SUCCESS');
        setFormData({ name: '', email: '', phone: '', engagement: '', context: '' });
      } else {
        setFormState('ERROR');
      }
    } catch (error) {
      setFormState('ERROR');
    }
  };

  return (
    <div className="bg-victus-light min-h-screen text-victus-navy font-sans antialiased overflow-x-hidden relative">
      <Helmet>
        <title>Contact Our Advisory Desk | HIVICTUS</title>
        <meta name="description" content="Reach out to the HIVICTUS corporate team to deploy scalable business platform architectures, cognitive systems, or strategic consulting frameworks." />
      </Helmet>

      {/* Decorative backdrop mesh elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-victus-navy/5 to-transparent blur-3xl rounded-full pointer-events-none -mr-20" />
      <div className="absolute bottom-20 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-victus-green/5 to-transparent blur-3xl rounded-full pointer-events-none -ml-20" />

      <section className="relative z-10 max-w-7xl mx-auto py-20 lg:py-28 px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Info Column (Left) */}
        <div className="space-y-8 lg:col-span-5 lg:sticky lg:top-28">
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-1.5 rounded-xl bg-white border border-gray-100 shadow-xs text-victus-navy text-xs font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-victus-green mr-2 animate-pulse" />
              Advisory Desk
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-victus-navy tracking-tight leading-tight">
              Let's Build Something <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-victus-navy via-slate-800 to-victus-green">
                Meaningful
              </span>
            </h1>
            <p className="text-gray-500 font-medium text-base sm:text-lg leading-relaxed">
              Have an operational challenge or system transformation goal? Drop our advisory desk a brief message and let's structure an architecture built for long-term leverage.
            </p>
          </div>

          <div className="space-y-6 pt-6 border-t border-gray-100 max-w-md">
            
            {/* Corporate Location Details Block */}
            <div className="flex gap-4 items-start group">
              <div className="w-11 h-11 bg-white border border-gray-100 rounded-xl flex items-center justify-center shadow-xs shrink-0 group-hover:border-slate-200 transition-colors">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-victus-navy transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs uppercase font-black tracking-widest text-gray-400">Corporate HQ</h4>
                <p className="text-victus-navy font-bold text-sm sm:text-base">Chennimalai, Erode, Tamil Nadu, India</p>
              </div>
            </div>

            {/* Email Communication Block */}
            <div className="flex gap-4 items-start group">
              <div className="w-11 h-11 bg-white border border-gray-100 rounded-xl flex items-center justify-center shadow-xs shrink-0 group-hover:border-slate-200 transition-colors">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-victus-green transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs uppercase font-black tracking-widest text-gray-400">Electronic Correspondence</h4>
                <p className="text-victus-navy font-bold text-sm sm:text-base hover:text-victus-green transition-colors cursor-pointer break-all">
                  solutions@hivictus.com
                </p>
              </div>
            </div>

            {/* Mobile Contact Block */}
            <div className="flex gap-4 items-start group">
              <div className="w-11 h-11 bg-white border border-gray-100 rounded-xl flex items-center justify-center shadow-xs shrink-0 group-hover:border-slate-200 transition-colors">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-victus-navy transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs uppercase font-black tracking-widest text-gray-400">Direct Telephony</h4>
                <p className="text-victus-navy font-bold text-sm sm:text-base hover:text-victus-green transition-colors cursor-pointer">
                  contact@hivictus.com
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Input Form Column (Right) */}
        <div className="lg:col-span-7 bg-white/80 border border-gray-100 backdrop-blur-xl p-6 sm:p-10 rounded-[2.5rem] shadow-2xl shadow-gray-200/40">
          
          {formStatus === 'SUCCESS' ? (
            /* Premium Success Feedback Component */
            <div className="py-12 text-center space-y-5 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-victus-green/10 text-victus-green flex items-center justify-center text-2xl mx-auto font-bold">✓</div>
              <h3 className="text-2xl font-black text-victus-navy tracking-tight">Blueprint Submitted</h3>
              <p className="text-gray-500 font-medium text-sm sm:text-base max-w-sm mx-auto leading-relaxed">
                Your parameters have been logged successfully. An integration expert from our advisory desk will follow up shortly at your specified corporate endpoint.
              </p>
              <button 
                onClick={() => setFormState('IDLE')}
                className="mt-4 text-xs font-black uppercase tracking-widest text-victus-navy bg-gray-50 px-5 py-2.5 rounded-xl border border-gray-100 transition-colors hover:bg-gray-100"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleFormSubmit}>
              
              {/* Input Row - Name, Email & Mobile Number Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                <div className="space-y-2">
                  <label className="block text-xs font-black text-gray-400 uppercase tracking-widest">Your Name</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => handleInputChange(e, 'name')}
                    className="w-full px-4 py-3.5 bg-gray-50/50 border border-gray-100 rounded-xl focus:bg-white focus:outline-none focus:border-victus-navy font-medium text-[14px] text-victus-navy transition-all" 
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-black text-gray-400 uppercase tracking-widest">Corporate Email</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => handleInputChange(e, 'email')}
                    className="w-full px-4 py-3.5 bg-gray-50/50 border border-gray-100 rounded-xl focus:bg-white focus:outline-none focus:border-victus-navy font-medium text-[14px] text-victus-navy transition-all" 
                    placeholder="name@gmail.com"
                    required
                  />
                </div>
                <div className="space-y-2 sm:col-span-2 md:col-span-1">
                  <label className="block text-xs font-black text-gray-400 uppercase tracking-widest">Mobile Number</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => handleInputChange(e, 'phone')}
                    className="w-full px-4 py-3.5 bg-gray-50/50 border border-gray-100 rounded-xl focus:bg-white focus:outline-none focus:border-victus-navy font-medium text-[14px] text-victus-navy transition-all" 
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>
              </div>

              {/* Updated Area of Engagement - Freeform Text Input Box */}
              <div className="space-y-2">
                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest">Area of Engagement</label>
                <input 
                  type="text" 
                  value={formData.engagement}
                  onChange={(e) => handleInputChange(e, 'engagement')}
                  className="w-full px-5 py-3.5 bg-gray-50/50 border border-gray-100 rounded-xl focus:bg-white focus:outline-none focus:border-victus-navy font-medium text-[14px] text-victus-navy transition-all" 
                  placeholder="e.g. Sales Optimization, Technology Consulting, AI Automation"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest">Operational Context</label>
                <textarea 
                  rows="4" 
                  value={formData.context}
                  onChange={(e) => handleInputChange(e, 'context')}
                  className="w-full px-5 py-3.5 bg-gray-50/50 border border-gray-100 rounded-xl focus:bg-white focus:outline-none focus:border-victus-navy font-medium text-[14px] text-victus-navy transition-all resize-none" 
                  placeholder="Tell us briefly about your architecture scope..."
                />
              </div>

              {formStatus === 'ERROR' && (
                <p className="text-xs font-bold text-red-500 animate-pulse">
                  ✕ Delivery failed due to structural network issues. Please try again.
                </p>
              )}

              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={formStatus === 'SENDING'}
                  className={`w-full text-white font-black text-xs uppercase tracking-widest py-4 rounded-xl shadow-lg transition-all duration-300 transform active:scale-95 ${
                    formStatus === 'SENDING' 
                      ? 'bg-gray-400 cursor-not-allowed shadow-none hover:translate-y-0' 
                      : 'bg-victus-navy shadow-victus-navy/10 hover:bg-slate-900 hover:-translate-y-0.5'
                  }`}
                >
                  {formStatus === 'SENDING' ? 'Routing Blueprint...' : 'Submit Engagement Blueprint'}
                </button>
              </div>
            </form>
          )}
        </div>

      </section>
    </div>
  );
}