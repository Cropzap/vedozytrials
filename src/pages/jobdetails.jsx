import React from 'react';

export default function JobDetails({ job, onBack }) {
  if (!job) return null;

  return (
    <div className="bg-[#FCFDFE] min-h-screen font-sans text-gray-750 antialiased">
      
      {/* Structural Hero Header Section */}
      <section className="w-full bg-linear-to-b from-[#EFF4FF] via-[#F4F7FF] to-[#FCFDFE] py-12 px-6">
        <div className="max-w-6xl mx-auto space-y-4">
          <button 
            onClick={onBack}
            className="text-xs text-[#86BC25] hover:underline flex items-center gap-1 cursor-pointer bg-transparent border-none p-0 outline-none"
          >
            ← Back to all open roles
          </button>
          
          <h1 className="text-xl md:text-2xl font-normal text-gray-900 tracking-tight">
            {job.title}
          </h1>

          {/* Unified Horizontal Text Detail Elements Strip */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-gray-500 font-normal">
            <span>{job.location}</span>
            <span className="text-gray-300 pointer-events-none">•</span>
            <span>{job.experience}</span>
            <span className="text-gray-300 pointer-events-none">•</span>
            <span>{job.workMode}</span>
            <span className="text-gray-300 pointer-events-none">•</span>
            <span>{job.type}</span>
          </div>
        </div>
      </section>

      {/* Main Structural Breakdown Blocks Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Main Multi-Card Column Panel */}
          <div className="lg:col-span-2 bg-white border border-gray-200 rounded-md p-6 shadow-2xs space-y-6">
            
            {/* Conditional Fragment: Job Description Summary Overview */}
            {job.description && (
              <div className="space-y-2">
                <h2 className="text-sm font-medium text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-1.5">
                  About the Role
                </h2>
                <p className="text-xs text-gray-600 leading-relaxed whitespace-pre-line">
                  {job.description}
                </p>
              </div>
            )}

            {/* Segment: Roles & Responsibilities Bullet Array */}
            <div className="space-y-2">
              <h2 className="text-sm font-medium text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-1.5">
                Roles & Responsibilities
              </h2>
              <ul className="list-disc pl-4 text-xs text-gray-600 space-y-2.5 leading-relaxed">
                {job.responsibilities.map((resp, i) => (
                  <li key={i} className="pl-0.5">{resp}</li>
                ))}
              </ul>
            </div>

            {/* Segment: Academic Background Matrix */}
            <div className="space-y-2">
              <h2 className="text-sm font-medium text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-1.5">
                Educational Qualification
              </h2>
              <div className="flex flex-wrap gap-2 pt-1">
                {job.qualifications.map((qual, i) => (
                  <span key={i} className="text-xs bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-sm text-gray-600 font-normal">
                    {qual}
                  </span>
                ))}
              </div>
            </div>

            {/* Segment: Tagged Skill Fields Badge Canvas */}
            <div className="space-y-2">
              <h2 className="text-sm font-medium text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-1.5">
                Skills Required
              </h2>
              <div className="flex flex-wrap gap-2 pt-1">
                {job.skills.map((skill, i) => (
                  <span key={i} className="text-xs bg-[#86BC25]/5 border border-[#86BC25]/20 px-2.5 py-1 rounded-sm text-gray-700 font-normal">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sidebar Position Specifications Overview Panel */}
          <aside className="space-y-4 lg:sticky lg:top-6">
            <div className="bg-white border border-gray-200 rounded-md p-5 shadow-2xs space-y-4">
              <h3 className="text-xs font-medium text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-2">
                Job Overview
              </h3>
              
              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-0.5">
                  <span className="text-gray-400">Organization</span>
                  <span className="text-gray-800 font-normal">Hivictus Private Ltd</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-gray-400">Nature of Job</span>
                  <span className="text-gray-800 font-normal">{job.type}</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-gray-400">Required Experience</span>
                  <span className="text-gray-800 font-normal">{job.experience}</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-gray-400">Work Model</span>
                  <span className="text-gray-800 font-normal">{job.workMode}</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-gray-400">Salary Package</span>
                  <span className="text-gray-800 font-normal">As Per Discussion</span>
                </div>
              </div>

              {/* Call To Action Execution Button */}
              <div className="pt-2">
                <button className="w-full bg-[#86BC25] hover:bg-[#75A61E] text-white border border-transparent transition-all duration-150 text-xs font-normal py-2 rounded-md cursor-pointer text-center focus:outline-none">
                  Apply For This Position
                </button>
              </div>
            </div>
          </aside>

        </div>
      </section>
    </div>
  );
}