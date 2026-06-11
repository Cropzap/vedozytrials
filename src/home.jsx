import React from "react";
import heroImage from './components/images/hero.png';
import Navbar from './components/navbar';
import Footer from './components/Footer';

export default function Home() {
  const solutions = [
    {
      title: "Business Commerce Platform",
      desc: "Connecting businesses, customers, and commerce workflows through intelligent infrastructure.",
    },
    {
      title: "AI-Powered Solutions",
      desc: "Advanced AI capabilities to automate operations and optimize business execution.",
    },
    {
      title: "Digital Transformation",
      desc: "Modernizing enterprise operations with scalable digital infrastructure.",
    },
    {
      title: "Customer Success Development",
      desc: "Helping businesses improve customer engagement and growth performance.",
    },
  ];

  const intelligenceCards = [
    "Smart Recommendation",
    "Predictive Analytics",
    "Automated Workflows",
    "Business Intelligence",
    "Customer Insights",
    "Performance Monitoring",
  ];

  const processSteps = [
    "Consultation",
    "Strategic Planning",
    "Platform Development",
    "Integration",
    "Deployment",
    "Continuous Support",
  ];

  const blogs = [
    "AI in Business Operations",
    "Future of Digital Commerce",
    "Scaling Business Infrastructure",
    "Customer-Centric Growth",
  ];

  return (

    
    <div className="w-full bg-[#f8f9ff] overflow-hidden text-[#111827]">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden px-6 md:px-12 pt-28 pb-20">
        
        {/* Background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-300/30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-200/40 blur-3xl rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div>

            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
              AI-Powered Commerce Platform
            </div>

            <h1 className="mt-8 text-5xl md:text-6xl font-extrabold leading-tight">
              Empowering Businesses Through
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                AI-Driven Commerce Solutions
              </span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
              HIVICTUS helps businesses connect, grow, and transform
              operations through intelligent digital platforms, AI-powered
              systems, and scalable business infrastructure.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition">
                Get Started
              </button>

              <button className="px-8 py-4 rounded-xl border border-gray-300 bg-white font-semibold hover:bg-gray-50 transition">
                Schedule Demo
              </button>
            </div>
          </div>

          {/* RIGHT DASHBOARD */}
          <div className="relative">
  <div className="rounded-3xl bg-white p-5 shadow-2xl border border-gray-200">
    
     {/* Image Section */}
      <img
       src={heroImage}
       alt="Card Visual"
       className="w-full h-100 object-cover rounded-xl"
     />
  </div>
</div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-6 md:px-12 bg-white">
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          <div>
            <div className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
              About Us
            </div>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              Building the Future of
              <span className="text-blue-600"> Digital Commerce</span>
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              At HIVICTUS, we empower businesses with modern technology
              solutions that streamline operations, connect ecosystems, and
              drive sustainable growth.
            </p>

            <div className="mt-10 flex gap-10">
              
              <div>
                <div className="text-4xl font-bold text-blue-600">100+</div>
                <div className="text-gray-600 mt-2">Businesses Supported</div>
              </div>

              <div>
                <div className="text-4xl font-bold text-purple-600">95%</div>
                <div className="text-gray-600 mt-2">Success Rate</div>
              </div>
            </div>
          </div>

          {/* FEATURES */}
          <div className="space-y-5">
            
            {[
              "Innovation First",
              "Business Growth",
              "Customer Success",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#f8f9ff] rounded-2xl border border-gray-200 p-6"
              >
                <h3 className="text-xl font-bold">{item}</h3>

                <p className="mt-3 text-gray-600">
                  Scalable business infrastructure and digital systems
                  designed for sustainable growth.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-24 px-6 md:px-12 bg-[#f8f9ff]">
        
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center">
            <div className="text-blue-600 uppercase text-sm font-semibold">
              Solutions
            </div>

            <h2 className="mt-4 text-4xl font-bold">
              Comprehensive Digital Solutions
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Powerful digital infrastructure built to accelerate modern
              business transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

            {solutions.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm hover:shadow-xl transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-100 to-purple-100" />

                <h3 className="mt-6 text-xl font-bold">{item.title}</h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

                <button className="mt-6 text-blue-600 font-semibold">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

    

      

      {/* ADVANTAGE */}
      <section className="py-24 px-6 md:px-12 bg-white">
        
        <div className="max-w-7xl mx-auto text-center">
          
          <div className="text-blue-600 uppercase text-sm font-semibold">
            Why Choose Us
          </div>

          <h2 className="mt-4 text-4xl font-bold">
            The HIVICTUS Advantage
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

            {[
              "Scalable Infrastructure",
              "Customer-Centric Approach",
              "Innovation & AI",
              "Dedicated Support",
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-gray-200 bg-[#f8f9ff] p-8"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-100 to-purple-100 mx-auto" />

                <h3 className="mt-6 text-xl font-bold">{item}</h3>

                <p className="mt-4 text-gray-600">
                  Modern infrastructure and scalable systems tailored for
                  enterprise growth.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* BLOGS */}
      <section className="py-24 px-6 md:px-12 bg-[#f8f9ff]">
        
        <div className="max-w-7xl mx-auto">

          <div className="flex justify-between items-center">
            
            <div>
              <div className="text-blue-600 uppercase text-sm font-semibold">
                Blog
              </div>

              <h2 className="mt-3 text-4xl font-bold">
                Latest Insights
              </h2>
            </div>

            <button className="text-blue-600 font-semibold">
              View All Articles →
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

            {blogs.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition"
              >
                
                <div className="h-48 bg-gradient-to-r from-blue-200 to-purple-200" />

                <div className="p-6">
                  
                  <div className="text-sm text-blue-600 font-medium">
                    Technology
                  </div>

                  <h3 className="mt-3 text-xl font-bold">
                    {item}
                  </h3>

                  <p className="mt-4 text-gray-600">
                    Insights and strategies helping businesses scale
                    through intelligent commerce solutions.
                  </p>

                  <button className="mt-6 text-blue-600 font-semibold">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-28 px-6 md:px-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto">

          <div className="inline-flex px-4 py-2 rounded-full bg-white/10 text-sm">
            Get Started Today
          </div>

          <h2 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            Ready to Transform Your Business Commerce?
          </h2>

          <p className="mt-6 text-lg text-blue-100">
            Let’s build smarter, faster, and more connected business
            experiences together.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            
            <button className="px-8 py-4 rounded-xl bg-white text-blue-700 font-bold hover:scale-105 transition">
              Get Started
            </button>

            <button className="px-8 py-4 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}