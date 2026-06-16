import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

export default function BlogMoreData({ blog, onBack }) {
  
  // Instantly lock screen scroll focus to the absolute top anchor on page initialization
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [blog]);

  if (!blog) return null;

  return (
    <div className="bg-[#f8f9ff] min-h-screen font-sans text-victus-charcoal antialiased py-6 sm:py-16 px-4">
      <Helmet>
        <title>{blog.title} | HIVICTUS Insights</title>
        <meta name="description" content={blog.excerpt} />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        
        {/* Sleek Floating Navigation Bar */}
        <div className="mb-8 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="px-5 py-2.5 bg-white text-victus-charcoal font-bold text-xs rounded-xl shadow-sm border border-gray-100 hover:text-victus-blue hover:shadow-md transition-all duration-300 cursor-pointer group flex items-center gap-2"
          >
            <span className="transform group-hover:-translate-x-1 inline-block transition-transform duration-200">←</span> 
            Back to Insights Directory
          </button>
          
          <span className="hidden sm:inline-block text-xs font-bold text-gray-400 uppercase tracking-widest">
            HIVICTUS Executive Briefing
          </span>
        </div>

        {/* Primary Modern Split Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Dynamic Sticky Meta & Anchor Dashboard */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <div className="bg-white rounded-[2rem] border border-gray-100 p-6 sm:p-8 shadow-xs space-y-6">
              
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-black uppercase tracking-widest bg-victus-blue/10 text-victus-blue px-3 py-1 rounded-md">
                  {blog.category}
                </span>
                <span className="text-xs font-bold text-gray-400">
                  {blog.readTime}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-victus-charcoal leading-tight tracking-tight">
                {blog.title}
              </h1>

              <div className="text-xs font-bold text-gray-400 border-t border-gray-50 pt-4 flex items-center justify-between">
                <span>Published</span>
                <span className="text-victus-charcoal">{blog.date}</span>
              </div>

              {/* In-Sidebar Static Micro Form Card */}
              <div className="bg-[#f8f9ff] rounded-2xl p-5 border border-gray-100 text-center space-y-3">
                <div className="text-xs font-black uppercase tracking-wider text-victus-charcoal">Subscribe to Insights</div>
                <p className="text-[11px] text-gray-500 leading-relaxed">
                  Receive our latest technical whitepapers and growth framework diagnostics direct to your enterprise mailbox.
                </p>
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="w-full bg-white border border-gray-200 text-xs px-3 py-2 rounded-lg focus:outline-none focus:border-victus-blue text-center font-medium" 
                />
                <button className="w-full bg-victus-charcoal hover:bg-victus-blue text-white text-xs font-bold py-2 rounded-lg transition-colors duration-200">
                  Join Newsletter
                </button>
              </div>

            </div>
          </aside>

          {/* RIGHT COLUMN: Asymmetric Editorial Content Grid Layout */}
          <main className="lg:col-span-8 space-y-8">
            
            {/* Massive Hero Presentation Splash Card */}
            <div className="w-full h-64 sm:h-[400px] overflow-hidden rounded-[2rem] border border-gray-100 shadow-sm relative">
              <img 
                src={blog.img} 
                alt={blog.title} 
                className="w-full h-full object-cover transform hover:scale-[1.01] transition-transform duration-700 ease-out" 
              />
            </div>

            {/* Content Pipeline Engine */}
            <div className="bg-white rounded-[2rem] border border-gray-100 p-6 sm:p-12 shadow-sm space-y-8 text-[16px] sm:text-[18px] text-gray-600 leading-relaxed font-medium">
              
              {blog.content?.map((paragraph, idx) => {
                
                // Configured Image Alternating Layout Blocks
                const hasInlineLayout = idx % 2 === 1; // Fires on paragraph 2, 4, 6 etc.
                const imgIndex = Math.floor(idx / 2) + 1;
                const activeImage = blog.images && blog.images[imgIndex];

                if (hasInlineLayout && activeImage) {
                  return (
                    <ScrollFadeIn key={idx}>
                      {/* Left Image & Right Content Split Showcase Section */}
                      <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 my-10 items-center border-y border-gray-50 py-8 ${
                        idx % 4 === 3 ? 'md:direction-rtl' : '' // Swaps positions naturally to balance grid aesthetics
                      }`}>
                        
                        {/* LEFT ELEMENT: Image Frame Container */}
                        <div className={`w-full h-56 sm:h-64 overflow-hidden rounded-2xl border border-gray-100 shadow-xs ${
                          idx % 4 === 3 ? 'md:order-last' : ''
                        }`}>
                          <img 
                            src={activeImage} 
                            alt={`Contextual blueprint support visual node ${idx}`} 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out"
                            loading="lazy"
                          />
                        </div>

                        {/* RIGHT ELEMENT: Context Text Wrap */}
                        <div className="space-y-3">
                          <div className="w-6 h-1 bg-victus-blue rounded-full" />
                          <p className="text-[15px] sm:text-[16px] text-gray-700 font-semibold italic whitespace-pre-line leading-relaxed">
                            {paragraph}
                          </p>
                        </div>

                      </div>
                    </ScrollFadeIn>
                  );
                }

                // Default Clean Content Row
                return (
                  <p 
                    key={idx} 
                    className={`whitespace-pre-line text-gray-600 ${
                      idx === 0 ? "first-letter:text-4xl sm:first-letter:text-5xl first-letter:font-black first-letter:text-victus-blue first-letter:mr-2 first-letter:float-left first-letter:leading-none" : ""
                    }`}
                  >
                    {paragraph}
                  </p>
                );
              })}

            </div>

            {/* Bottom Panel Branding Stamp Card */}
            <div className="bg-gradient-to-r from-victus-charcoal to-[#1C1C1C] text-white rounded-[2rem] p-6 sm:p-10 shadow-xl flex flex-col sm:flex-row justify-between items-center gap-6 relative overflow-hidden border border-gray-800">
              <div className="absolute top-0 right-0 w-64 h-64 bg-victus-blue/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="text-center sm:text-left space-y-1 relative z-10">
                <h4 className="text-sm font-black uppercase tracking-widest text-victus-yellow">HIVICTUS Executive Summary</h4>
                <p className="text-xs text-gray-400 max-w-md leading-relaxed">
                  Thought leadership positioning engineered for continuous digital acceleration and corporate talent output readiness.
                </p>
              </div>
              
              <button 
                onClick={onBack}
                className="px-6 py-3 bg-white text-victus-charcoal hover:bg-victus-blue hover:text-white font-bold text-xs rounded-xl transition-all duration-300 shadow-md transform active:scale-95 shrink-0 relative z-10"
              >
                Return to Insights Hub
              </button>
            </div>

          </main>

        </div>
      </div>
    </div>
  );
}

// Internal scroll alignment animation helper function
function ScrollFadeIn({ children }) {
  const [isVisible, setIsVisible] = React.useState(false);
  const domRef = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setIsVisible(true); });
    }, { threshold: 0.1 });
    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[0.98]"
      }`}
    >
      {children}
    </div>
  );
}