import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from './servicesData';

const ServiceDetails = () => {
  // Grab the service slug directly from the URL parameter
  const { serviceSlug } = useParams();
  
  // Lookup data, fallback gracefully if slug doesn't exist
  const service = servicesData[serviceSlug];

  if (!service) {
    return (
      <div className="max-w-6xl mx-auto py-20 px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Service Not Found</h2>
        <p className="text-gray-500 mt-2">Please select a valid service from the menu above.</p>
        <Link to="/" className="inline-block mt-6 text-indigo-600 font-semibold hover:underline">
          Return to Home Page
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen font-sans transition-all duration-300">
      
      {/* 1. Overview Split Section */}
      <section className="max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-md tracking-wider uppercase">
            {service.badge}
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            {service.title}
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            {service.desc}
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
            {service.longDesc}
          </p>
          <div className="pt-2">
            <button className="bg-indigo-600 text-white font-medium px-6 py-3 rounded-xl hover:bg-indigo-700 shadow-sm transition-colors duration-200">
              Speak with a Specialist
            </button>
          </div>
        </div>
        <div className="w-full h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-lg">
          {/* Custom image scales dynamically per service category context */}
          <img 
            src={service.image} 
            alt={`${service.title} illustration`} 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 2. Key Advantages / Benefits Matrix */}
      <section className="bg-white py-16 px-4 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-950 tracking-tight">Key Advantages</h2>
            <p className="text-gray-500 mt-2 text-sm max-w-xl">
              How our tailored frameworks deliver tangible operational results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-indigo-100 transition-colors duration-300">
                <h3 className="text-xl font-bold text-gray-950 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Custom Implementation Process */}
      <section className="max-w-6xl mx-auto py-20 px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Execution Strategy</h2>
          <p className="text-gray-600">A rigorous, step-by-step framework ensuring optimal operational handoff.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {service.steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-4 hover:shadow-md transition-shadow duration-300">
              <div className="text-3xl font-black text-indigo-200 tracking-wider">
                {step.phase}
              </div>
              <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default ServiceDetails;