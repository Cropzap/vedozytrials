import React from 'react';

export default function JobDetails({ job, onBack, googleFormUrl }) {
  if (!job) return null;

  return (
    <div className="bg-victus-light min-h-screen font-sans text-victus-navy antialiased">
      
      {/* Structural Hero Header Section */}
      <section className="w-full bg-gradient-to-b from-white via-gray-50/50 to-victus-light py-14 px-4 border-b border-gray-100">
        <div className="max-w-5xl mx-auto space-y-6">
          
          {/* Back Button Trigger */}
          <button 
            onClick={onBack}
            className="text-xs text-victus-navy hover:text-victus-green font-bold flex items-center gap-2 transition-colors bg-transparent border-none p-0 outline-none cursor-pointer group"
          >
            <span className="transform group-hover:-translate-x-1 transition-transform inline-block duration-200">←</span> 
            Back to all open roles
          </button>
          
          <div className="space-y-3">
            <div className="inline-flex items-center px-3 py-1 rounded-md bg-victus-navy/5 text-victus-navy text-xs font-black uppercase tracking-wider border border-victus-navy/5">
              {job.department}
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-victus-navy tracking-tight leading-tight">
              {job.title}
            </h1>
          </div>

          {/* Unified Horizontal Detail Elements Strip with Premium SVG Icons */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm text-gray-500 font-semibold">
            
            {/* Location Link Indicator */}
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span>{job.location}</span>
            </div>
            
            <span className="text-gray-300 pointer-events-none hidden sm:inline">•</span>

            {/* Experience Metrics Link Indicator */}
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .621-.504 1.125-1.125 1.125H4.875A1.125 1.125 0 013.75 18.4V14.15m16.5 0c0-1.22-.88-2.25-2.07-2.41a4.478 4.478 0 00-11.86 0C5.12 11.9 4.24 12.93 4.24 14.15m16.5 0a4.5 4.5 0 00-16.5 0M6 8.25h12M6 5.25h12" />
              </svg>
              <span>{job.experience}</span>
            </div>

            <span className="text-gray-300 pointer-events-none hidden sm:inline">•</span>

            {/* Work Mode Link Indicator */}
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <span>{job.workMode}</span>
            </div>

            <span className="text-gray-300 pointer-events-none hidden sm:inline">•</span>

            {/* Contract Track Link Indicator */}
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>{job.isInternship ? "Internship Track" : "Permanent Track"}</span>
            </div>

          </div>
        </div>
      </section>

      {/* Main Structural Breakdown Blocks Section */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Main Multi-Card Column Panel */}
          <div className="lg:col-span-8 bg-white border border-gray-100 rounded-[2rem] p-6 sm:p-10 shadow-sm space-y-8">
            
            {/* Description Summary Overview */}
            {job.description && (
              <div className="space-y-3">
                <h2 className="text-xs font-black text-victus-navy uppercase tracking-widest border-b border-gray-100 pb-2.5">
                  About the Role
                </h2>
                <p className="text-[14px] sm:text-[15px] text-gray-500 leading-relaxed font-medium">
                  {job.description}
                </p>
              </div>
            )}

            {/* Roles & Responsibilities Bullet Array */}
            <div className="space-y-3">
              <h2 className="text-xs font-black text-victus-navy uppercase tracking-widest border-b border-gray-100 pb-2.5">
                Roles & Responsibilities
              </h2>
              <ul className="space-y-3 list-none pl-0 text-[14px] sm:text-[15px] text-gray-500 font-medium">
                {job.responsibilities?.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3 leading-relaxed">
                    <span className="text-victus-green font-black shrink-0 mt-0.5">✓</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Academic Background Matrix */}
            <div className="space-y-3">
              <h2 className="text-xs font-black text-victus-navy uppercase tracking-widest border-b border-gray-100 pb-2.5">
                Educational Qualification
              </h2>
              <div className="flex flex-wrap gap-2 pt-1">
                {job.qualifications?.map((qual, i) => (
                  <span key={i} className="text-xs bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-xl text-gray-600 font-bold">
                    {qual}
                  </span>
                ))}
              </div>
            </div>

            {/* Tagged Skill Fields Badge Canvas */}
            <div className="space-y-3">
              <h2 className="text-xs font-black text-victus-navy uppercase tracking-widest border-b border-gray-100 pb-2.5">
                Skills Required
              </h2>
              <div className="flex flex-wrap gap-2 pt-1">
                {job.skills?.map((skill, i) => (
                  <span key={i} className="text-xs bg-victus-navy/5 border border-victus-navy/5 px-3 py-1.5 rounded-xl text-victus-navy font-bold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sidebar Position Specifications Overview Panel */}
          <aside className="lg:col-span-4 space-y-4 lg:sticky lg:top-28">
            <div className="bg-white border border-gray-100 rounded-[2rem] p-6 shadow-sm space-y-6">
              <h3 className="text-xs font-black text-victus-navy uppercase tracking-widest border-b border-gray-50 pb-3">
                Job Overview
              </h3>
              
              <div className="space-y-3.5 text-xs sm:text-sm font-semibold">
                <div className="flex justify-between py-1 border-b border-gray-50">
                  <span className="text-gray-400">Organization</span>
                  <span className="text-victus-navy">Hivictus Private Ltd</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-50">
                  <span className="text-gray-400">Nature of Job</span>
                  <span className="text-victus-navy">{job.isInternship ? "Internship" : "Permanent"}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-50">
                  <span className="text-gray-400">Experience</span>
                  <span className="text-victus-navy">{job.experience}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-50">
                  <span className="text-gray-400">Work Model</span>
                  <span className="text-victus-navy">{job.workMode}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-400">Remuneration</span>
                  <span className="text-victus-green font-black">As Discussed</span>
                </div>
              </div>

              {/* Action Button - High Contrast Premium Solid Palette Fill */}
              <div className="pt-2">
                <a 
                  href={googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-victus-navy text-white font-bold text-xs text-center py-4 rounded-xl shadow-lg shadow-victus-navy/10 hover:bg-slate-900 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 no-underline"
                >
                  Apply For This Position
                </a>
              </div>
            </div>
          </aside>

        </div>
      </section>
    </div>
  );
}