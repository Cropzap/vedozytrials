import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
  const cards = [
    { title: 'Innovation First', desc: 'We continuously push boundaries to bring the latest technological advancements to your projects.' },
    { title: 'Client Centric', desc: 'Your business goals are our goals. We build long-term relationships rooted in transparency and trust.' },
    { title: 'Quality Driven', desc: 'From the first line of code to the final deployment, we maintain the highest standards of excellence.' }
  ];

  const stats = [
    { label: 'Years of Innovation', value: '10+' },
    { label: 'Projects Completed', value: '500+' },
    { label: 'Happy Clients', value: '150+' },
    { label: 'Global Team Members', value: '50+' }
  ];

  const teamMembers = [
    {
      name: 'Sarah Jenkins',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
      bio: 'Visionary leader with 15+ years of industry experience.'
    },
    {
      name: 'Marcus Chen',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      bio: 'Passionate about building scalable architecture and clean code.'
    },
    {
      name: 'Elena Rostova',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      bio: 'Crafting beautiful, user-centric experiences is her calling.'
    }
  ];

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen font-sans">
      {/* 1. Our Story Section */}
      <section className="max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Our Story</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Founded in 2016, we started as a small team of three dreamers in a garage. Today, we’ve grown into a global agency, but our core philosophy remains unchanged: put the client first, deliver exceptional quality, and never stop learning.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            We believe that technology should serve people, not the other way around. Every line of code we write and every pixel we polish is designed to make a meaningful impact and bridge the gap between imagination and execution.
          </p>
        </div>
        <div className="w-full h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
            alt="Our team working together" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 2. Core Values / Content Cards Section */}
      <section className="bg-white py-16 px-4 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-950 tracking-tight">What Drives Us</h2>
            <p className="text-gray-500 mt-2 text-sm max-w-xl">
              Our core pillars guide how we work, collaborate, and bring complex ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div key={index} className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-indigo-100 transition-colors duration-300">
                <h3 className="text-xl font-bold text-gray-950 mb-3">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Stats Bar */}
      <section className="bg-indigo-900 py-16 px-4 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-4xl md:text-5xl font-extrabold text-indigo-300">{stat.value}</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-indigo-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Vision (Left) & Mission (Right) Side-by-Side Section */}
      <section className="max-w-6xl mx-auto py-20 px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Vision Block (Left) - Styling stripped to match the base section */}
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <div className="flex-1 space-y-3">
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Our Vision</h2>
              <p className="text-gray-600 text-base leading-relaxed">
                To build a connected world where great ideas face zero technological barriers to success. We visualize a landscape where creativity thrives seamlessly alongside powerful, clean automation.
              </p>
            </div>
            <div className="w-full sm:w-44 h-44 shrink-0 rounded-xl overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80" 
                alt="Vision conceptual graphics" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Mission Block (Right) - Styling stripped to match the base section */}
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <div className="flex-1 space-y-3">
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Our Mission</h2>
              <p className="text-gray-600 text-base leading-relaxed">
                To democratize technology and design, making enterprise-grade digital solutions accessible to businesses of all sizes. We strip away complexity so you can focus on your direct growth.
              </p>
            </div>
            <div className="w-full sm:w-44 h-44 shrink-0 rounded-xl overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80" 
                alt="Mission graphics" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 5. Team Cards */}
      <section className="bg-white border-t border-gray-100 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leaders</h2>
            <p className="text-gray-600">The passionate experts driving our vision forward every single day.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-sm font-semibold text-indigo-600 mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;