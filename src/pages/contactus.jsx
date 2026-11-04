import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { 
  Building2, 
  Mail, 
  PhoneCall, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Clock, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function ContactUs() {
  const [formStatus, setFormState] = useState('IDLE'); // 'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const GOOGLE_SHEET_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbwP3JTgDMIto5aqPMtQF3YNuJ47wSivnG36_IQo_dCY8UXwPpyZokIUnC3EOzMYoW3mBw/exec";

  const handleInputChange = (e, field) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      return;
    }

    setFormState('SENDING');

    // 1. Web3Forms Payload
    const submissionBody = new FormData();
    submissionBody.append("access_key", "80a7ed10-ec8b-4ab2-b544-32492a2f3819");
    submissionBody.append("subject", `New Inquiry from ${formData.name}: ${formData.subject}`);
    submissionBody.append("name", formData.name);
    submissionBody.append("email", formData.email);
    submissionBody.append("mobile_number", formData.phone);
    submissionBody.append("subject_matter", formData.subject);
    submissionBody.append("message", formData.message);

    // 2. Google Sheet Payload using URLSearchParams for reliable e.parameter mapping
    const sheetParams = new URLSearchParams();
    sheetParams.append("name", formData.name);
    sheetParams.append("email", formData.email);
    sheetParams.append("phone", formData.phone);
    sheetParams.append("subject", formData.subject);
    sheetParams.append("message", formData.message);

    try {
      const web3FormsPromise = fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionBody
      });

      const googleSheetPromise = fetch(GOOGLE_SHEET_WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: sheetParams.toString()
      });

      const [web3Res] = await Promise.all([web3FormsPromise, googleSheetPromise]);
      const resData = await web3Res.json();

      if (resData.success) {
        setFormState('SUCCESS');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setFormState('ERROR');
      }
    } catch (error) {
      setFormState('ERROR');
    }
  };

  return (
    <div className="bg-slate-50/50 min-h-screen text-slate-900 font-sans antialiased relative overflow-hidden">
      <Helmet>
        <title>Contact Us | Hivictus</title>
        <meta name="description" content="Lets connect and discuss how we can work together." />
      </Helmet>

      {/* Background Decorative Mesh Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-indigo-900/10 to-blue-500/10 blur-3xl rounded-full pointer-events-none" />

      <section className="relative z-10 max-w-7xl mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        
        {/* Enterprise Header Banner */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs text-indigo-950 text-xs font-semibold uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            Let's talk
          </div>
          <p className="text-slate-600 font-normal text-base sm:text-lg leading-relaxed max-w-2xl">
            Lets connect and talk how we can work together and be a part of a growing movement.
          </p>
        </div>

        {/* Main Interface Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Contact Details & SLA Info (Left) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Bento Box 1: Location & Communication Channels */}
            <div className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-sm space-y-6">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Meet us
              </h3>

              <div className="space-y-5">
                {/* Location */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                    <Building2 className="w-5 h-5 text-slate-600 group-hover:text-white" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">Address</span>
                    <p className="text-slate-800 font-medium text-sm sm:text-base leading-snug">
                      1/6, Velan nagar, Chennimalai to arachalur road, Chennimalai, Erode, Tamil Nadu, India
                    </p>
                  </div>
                </div>

                {/* General Inquiries */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                    <Mail className="w-5 h-5 text-slate-600 group-hover:text-white" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">General Inquiries</span>
                    <a href="mailto:info@hivictus.com" className="text-slate-800 font-semibold text-sm hover:text-indigo-600 transition-colors block">
                      info@hivictus.com
                    </a>
                  </div>
                </div>

                {/* Customer Support */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                    <Mail className="w-5 h-5 text-slate-600 group-hover:text-white" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">Customer Support</span>
                    <a href="mailto:Support@hivictus.com" className="text-slate-800 font-semibold text-sm hover:text-indigo-600 transition-colors block">
                      Support@hivictus.com
                    </a>
                  </div>
                </div>

                {/* Grievance Desk */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                    <Mail className="w-5 h-5 text-slate-600 group-hover:text-white" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">Grievance Desk</span>
                    <a href="mailto:griverance@hivictus.com" className="text-slate-800 font-semibold text-sm hover:text-indigo-600 transition-colors block">
                      griverance@hivictus.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                    <PhoneCall className="w-5 h-5 text-slate-600 group-hover:text-white" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">Direct Line</span>
                    <a href="tel:9952492456" className="text-slate-800 font-semibold text-sm sm:text-base hover:text-indigo-600 transition-colors block">
                      9952492456
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Box 2: Response SLA & Security Guarantee */}
            <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl space-y-4 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Sparkles className="w-32 h-32 text-white" />
              </div>
              
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                SLA Commitment
              </div>
              
              <h4 className="text-lg font-semibold tracking-tight text-white">
                Ensured Follow-up within 24 Business Hours
              </h4>
              
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Our team will get back within 24 business hours on standard business days. Sundays and holidays may lead to more time for reply.
              </p>

              <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-400 font-medium border-t border-slate-800">
                <ShieldCheck className="w-4 h-4 text-indigo-400" />
                Protected by privacy standards and non-disclosure protocols.
              </div>
            </div>

          </div>

          {/* Form Container (Right) */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 p-6 sm:p-10 rounded-3xl shadow-xl shadow-slate-200/50 relative">
            
            {formStatus === 'SUCCESS' ? (
              <div className="py-16 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">Message Received</h3>
                  <p className="text-slate-500 font-medium text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. We have received your inquiry and will connect with you shortly.
                  </p>
                </div>
                <button 
                  onClick={() => setFormState('IDLE')}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 hover:bg-slate-200 px-6 py-3 rounded-xl transition-all"
                >
                  Send Another Message <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleFormSubmit}>
                
                <div className="border-b border-slate-100 pb-4 mb-6">
                  <h3 className="text-lg font-bold text-slate-900">Get in Touch</h3>
                  <p className="text-slate-500 text-xs">Fill out the form below and our team will get back to you promptly.</p>
                </div>

                {/* Identity Input Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Full Name <span className="text-indigo-600">*</span>
                    </label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => handleInputChange(e, 'name')}
                      className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-slate-900 focus:border-transparent font-medium text-sm text-slate-900 transition-all outline-none" 
                      placeholder="e.g. Alex Mercer"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Email Address <span className="text-indigo-600">*</span>
                    </label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => handleInputChange(e, 'email')}
                      className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-slate-900 focus:border-transparent font-medium text-sm text-slate-900 transition-all outline-none" 
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Mobile & Subject Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Phone Number <span className="text-indigo-600">*</span>
                    </label>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => handleInputChange(e, 'phone')}
                      className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-slate-900 focus:border-transparent font-medium text-sm text-slate-900 transition-all outline-none" 
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Subject <span className="text-indigo-600">*</span>
                    </label>
                    <input 
                      type="text" 
                      value={formData.subject}
                      onChange={(e) => handleInputChange(e, 'subject')}
                      className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-slate-900 focus:border-transparent font-medium text-sm text-slate-900 transition-all outline-none" 
                      placeholder="e.g. General Inquiry, Partnership"
                      required
                    />
                  </div>
                </div>

                {/* Textarea Message */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Message <span className="text-indigo-600">*</span>
                  </label>
                  <textarea 
                    rows="4" 
                    value={formData.message}
                    onChange={(e) => handleInputChange(e, 'message')}
                    className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-slate-900 focus:border-transparent font-medium text-sm text-slate-900 transition-all outline-none resize-none" 
                    placeholder="Type your message here..."
                    required
                  />
                </div>

                {/* Error Banner */}
                {formStatus === 'ERROR' && (
                  <div className="flex items-center gap-2 p-3.5 bg-red-50 border border-red-100 rounded-xl text-red-600 text-xs font-semibold">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Submission failed due to a network error. Please check your connection and try again.</span>
                  </div>
                )}

                {/* Submit CTA */}
                <div className="pt-2">
                  <button 
                    type="submit" 
                    disabled={formStatus === 'SENDING'}
                    className={`w-full flex items-center justify-center gap-2 text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl transition-all shadow-md active:scale-[0.99] ${
                      formStatus === 'SENDING' 
                        ? 'bg-slate-400 cursor-not-allowed shadow-none' 
                        : 'bg-slate-900 hover:bg-slate-800 shadow-slate-900/10'
                    }`}
                  >
                    {formStatus === 'SENDING' ? (
                      <>Sending Message...</>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
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