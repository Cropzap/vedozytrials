import React from 'react';

export default function ContactUs() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 font-sans">
      <section className="max-w-6xl mx-auto py-20 px-4 grid md:grid-cols-2 gap-16 items-start">
        
        {/* Info Column */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold text-gray-950 tracking-tight">Let's Build Something Meaningful</h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Have an operational challenge or system transformation goal? Drop our advisory desk a brief message and let's structure an architecture built for long-term leverage.
            </p>
          </div>

          <div className="space-y-6 pt-4 border-t border-gray-200">
            <div>
              <h4 className="text-xs uppercase font-bold tracking-widest text-indigo-600 mb-1">Corporate HQ</h4>
              <p className="text-gray-900 font-medium">Chennimalai, Erode, Tamil Nadu, India</p>
            </div>
            <div>
              <h4 className="text-xs uppercase font-bold tracking-widest text-indigo-600 mb-1">Electronic Correspondence</h4>
              <p className="text-gray-900 font-medium hover:underline cursor-pointer">solutions@hivictus.com</p>
            </div>
          </div>
        </div>

        {/* Input Form Column */}
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/50">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Your Name</label>
                <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 text-sm transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Corporate Email</label>
                <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 text-sm transition-colors" placeholder="john@enterprise.com" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Area of Engagement</label>
              <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 text-sm transition-colors text-gray-600">
                <option>Sales & Demand Optimization</option>
                <option>Cognitive Business Solutions</option>
                <option>Technology Consulting</option>
                <option>Fractional C-Suite Support</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Operational Context</label>
              <textarea rows="4" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 text-sm transition-colors" placeholder="Tell us briefly about your architecture scope..."></textarea>
            </div>

            <button type="submit" className="w-full bg-indigo-600 text-white font-bold text-xs uppercase tracking-widest py-4 rounded-xl hover:bg-indigo-700 shadow-md transition-colors">
              Submit Engagement Blueprint
            </button>
          </form>
        </div>

      </section>
    </div>
  );
}