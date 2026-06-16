import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from './servicesData';

const GET_STARTED_FORM = "https://forms.gle/89mT6Vs8CX99UkU48";

const ServiceDetails = () => {
  // Grab the service slug directly from the URL parameter
  const { serviceSlug } = useParams();
  
  // Lookup data, fallback gracefully if slug doesn't exist
  const service = servicesData ? servicesData[serviceSlug] : null;

  if (!service) {
    return (
      <div className="max-w-xl mx-auto py-24 px-4 text-center space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center text-xl mx-auto font-bold">✕</div>
        <h2 className="text-2xl font-black text-victus-navy tracking-tight">Service Profile Not Found</h2>
        <p className="text-gray-500 text-sm font-medium">The selected service capability framework does not exist or has been rearranged.</p>
        <div className="pt-4">
          <Link to="/" className="inline-block px-5 py-2.5 bg-victus-navy text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-md hover:bg-slate-900 active:scale-95 no-underline">
            Return to Home Portal
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-victus-light text-victus-navy min-h-screen font-sans antialiased overflow-x-hidden">
      
      {/* 1. Overview Split Section */}
      <section className="max-w-7xl mx-auto py-16 lg:py-24 px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-12 lg:gap-16 items-center relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-victus-navy/5 to-transparent blur-3xl rounded-full pointer-events-none -mr-20" />
        
        <div className="space-y-6 md:col-span-7">
          <div className="inline-flex items-center px-4 py-1.5 rounded-xl bg-white border border-gray-100 shadow-xs text-victus-navy text-xs font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-victus-green mr-2" />
            {service.badge || "Capability Solution"}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-victus-navy tracking-tight leading-tight">
            {service.title}
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-semibold">
            {service.desc}
          </p>
          {service.longDesc && (
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-medium">
              {service.longDesc}
            </p>
          )}
          <div className="pt-4">
            <a 
              href={GET_STARTED_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-victus-navy text-white font-bold text-xs uppercase tracking-widest px-6 py-4 rounded-xl shadow-lg shadow-victus-navy/10 hover:bg-slate-900 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 no-underline"
            >
              Speak with a Specialist
            </a>
          </div>
        </div>

        {/* Right Side Adaptive Showcase Asset */}
        <div className="md:col-span-5 w-full aspect-[4/3] md:h-[420px] rounded-[2.5rem] bg-white p-3 shadow-2xl border border-gray-100/70 shadow-gray-200/50 relative transform hover:scale-[1.01] transition-transform duration-500">
          <div className="absolute inset-3 bg-gradient-to-tr from-victus-navy/10 to-transparent mix-blend-multiply rounded-[1.8rem] z-10 pointer-events-none" />
          <img 
            src={service.image || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"} 
            alt={`${service.title} architectural workflow diagram illustration`} 
            className="w-full h-full object-cover rounded-[1.8rem]"
          />
        </div>
      </section>

      {/* 2. Key Advantages / Benefits Matrix */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 space-y-16">
          <div className="text-center sm:text-left space-y-3">
            <div className="text-victus-green font-black uppercase tracking-[0.2em] text-xs sm:text-sm">Value Vector</div>
            <h2 className="text-3xl sm:text-4xl font-black text-victus-navy tracking-tight">Key Advantages</h2>
            <p className="text-sm sm:text-base text-gray-500 max-w-xl leading-relaxed font-medium">How our tailored frameworks deliver tangible operational results and maximize value metrics.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {service.benefits?.map((benefit, index) => (
              <div key={index} className="group p-8 rounded-[2rem] bg-white border border-gray-100/70 hover:border-slate-200 hover:shadow-2xl hover:shadow-victus-navy/5 transition-all duration-500 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-gray-50/40 to-transparent rounded-br-[2rem] -z-10" />
                <div>
                  <div className="w-2 h-6 rounded-full bg-victus-green mb-8 group-hover:h-8 transition-all duration-300" />
                  <h3 className="text-xl font-black text-victus-navy mb-3 tracking-tight">{benefit.title}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed text-sm sm:text-base">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Custom Implementation Process */}
      <section className="max-w-7xl mx-auto py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-victus-green/5 to-transparent blur-3xl rounded-full pointer-events-none -ml-20" />
        
        <div className="relative z-10 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-victus-green font-black uppercase tracking-widest text-xs sm:text-sm">Strategic Roadmap</div>
            <h2 className="text-3xl sm:text-4xl font-black text-victus-navy tracking-tight leading-tight">Our Execution Strategy</h2>
            <p className="text-sm sm:text-base text-gray-500 font-medium leading-relaxed">A rigorous, step-by-step framework ensuring seamless development integration and optimal handoff.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {service.steps?.map((step, index) => (
              <div key={index} className="group bg-white p-6 sm:p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:border-gray-200 transition-all duration-500 space-y-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gray-50/50 via-transparent to-transparent -z-10 rounded-bl-[2rem]" />
                
                <div className="text-3xl font-black text-victus-green/20 tracking-wider tabular-nums group-hover:text-victus-green/40 transition-colors duration-300">
                  {step.phase || `0${index + 1}`}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-black text-victus-navy tracking-tight">{step.title}</h3>
                  <p className="text-gray-500 font-medium text-xs sm:text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServiceDetails;