import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { staticBlogs } from '../data/blogsData';
import BlogMoreData from '../components/BlogMoreData';

export default function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  // If a user clicks an entry, show the full content page view
  if (selectedBlog) {
    return <BlogMoreData blog={selectedBlog} onBack={() => setSelectedBlog(null)} />;
  }

  return (
    <div className="w-full bg-[#f8f9ff] min-h-screen font-sans text-victus-charcoal antialiased">
      <Helmet>
        <title>Our Blogs & Insights | HIVICTUS</title>
        <meta name="description" content="Read the latest articles, guides, and career insights from the HIVICTUS team." />
      </Helmet>

      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-[#f8f9ff] py-16 sm:py-24 px-4 text-center border-b border-gray-100">
        <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-victus-blue/5 blur-3xl rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-victus-blue/10 to-victus-green/10 text-victus-blue text-xs font-bold uppercase tracking-wider border border-victus-blue/20">
            Our Blog
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-victus-charcoal tracking-tight">
            Latest Articles & <span className="text-transparent bg-clip-text bg-gradient-to-r from-victus-blue via-victus-green to-victus-yellow">Insights</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto leading-relaxed font-medium">
            Explore our latest articles about talent development, business technology, and tips on how to prepare for today's job market.
          </p>
        </div>
      </section>

      {/* Blog Cards Grid Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {staticBlogs.map((item) => (
            <div 
              key={item.id}
              onClick={() => setSelectedBlog(item)}
              className="group bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Blog Image */}
                <div className="h-48 overflow-hidden relative bg-gray-100">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                    loading="lazy" 
                  />
                  <span className="absolute top-4 left-4 text-[10px] font-black uppercase tracking-wider bg-white/90 text-victus-charcoal backdrop-blur-xs px-2.5 py-1 rounded-md shadow-xs">
                    {item.category}
                  </span>
                </div>
                
                {/* Content Excerpt Summary Container */}
                <div className="p-6 space-y-3">
                  <div className="text-xs font-semibold text-gray-400">{item.date} • {item.readTime}</div>
                  <h3 className="text-lg font-black text-victus-charcoal group-hover:text-victus-blue transition-colors line-clamp-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed font-medium">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              {/* Simple Action Read Button */}
              <div className="p-6 pt-0">
                <button 
                  className="w-full text-center py-3 bg-gray-50 border border-gray-100 rounded-xl font-bold text-xs text-victus-charcoal group-hover:bg-victus-blue group-hover:text-white group-hover:border-transparent transition-all duration-300"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}