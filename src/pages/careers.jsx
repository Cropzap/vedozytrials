import React, { useState } from 'react';

// ==========================================
// CONFIGURATION: PASTE YOUR GOOGLE FORM LINK HERE
// ==========================================
const GOOGLE_FORM_URL = "https://forms.gle/9hR28XJpUnnScJCx9";

// Inline Data Matrix containing all 12 job profiles from the structural requirements document
const staticHivictusJobs = [
  {
    id: "human-resource-talent-acquisition",
    title: "Human Resource - Talent Acquisition (Fresher)",
    location: "Erode HQ, Tamil Nadu, India",
    experience: "Freshers / 0-2 Years Experience",
    workMode: "Hybrid Mode",
    isInternship: true,
    department: "Human Resources"
  },
  {
    id: "business-development-executive",
    title: "Business Development Executive (BDE)",
    location: "Erode HQ, Tamil Nadu, India",
    experience: "Freshers / 0-2 Years Experience",
    workMode: "Hybrid Mode",
    isInternship: false,
    department: "Business Development"
  },
  {
    id: "seo-analyst",
    title: "SEO Analyst",
    location: "Erode HQ, Tamil Nadu, India",
    experience: "Freshers / 0-2 Years Experience",
    workMode: "Hybrid Mode",
    isInternship: false,
    department: "Marketing & Content"
  },
  {
    id: "content-writer",
    title: "Content Writer",
    location: "Erode HQ, Tamil Nadu, India",
    experience: "Freshers / 0-2 Years Experience",
    workMode: "Hybrid Mode",
    isInternship: false,
    department: "Marketing & Content"
  },
  {
    id: "social-media-handler",
    title: "Social Media Handler",
    location: "Erode HQ, Tamil Nadu, India",
    experience: "Freshers / 0-2 Years Experience",
    workMode: "Hybrid Mode",
    isInternship: false,
    department: "Marketing & Content"
  },
  {
    id: "graphic-designer",
    title: "Graphic Designer",
    location: "Erode HQ, Tamil Nadu, India",
    experience: "Freshers / 0-2 Years Experience",
    workMode: "Hybrid Mode",
    isInternship: false,
    department: "Design & Tech"
  },
  {
    id: "ui-ux-developer",
    title: "UI/UX Developer",
    location: "Erode HQ, Tamil Nadu, India",
    experience: "Freshers / 0-2 Years Experience",
    workMode: "Hybrid Mode",
    isInternship: false,
    department: "Design & Tech"
  },
  {
    id: "telecalling-executive",
    title: "Telecalling Executive",
    location: "Erode HQ, Tamil Nadu, India",
    experience: "Freshers / 0-2 Years Experience",
    workMode: "Hybrid Mode",
    isInternship: false,
    department: "Operations"
  },
  {
    id: "voice-process-executive",
    title: "Voice Process Executive",
    location: "Erode HQ, Tamil Nadu, India",
    experience: "Freshers / 0-2 Years Experience",
    workMode: "Hybrid Mode",
    isInternship: false,
    department: "Operations"
  },
  {
    id: "non-voice-process-executive",
    title: "Non-Voice Process Executive",
    location: "Erode HQ, Tamil Nadu, India",
    experience: "Freshers / 0-2 Years Experience",
    workMode: "Hybrid Mode",
    isInternship: false,
    department: "Operations"
  },
  {
    id: "hr-trainer",
    title: "HR Trainer",
    location: "Erode HQ, Tamil Nadu, India",
    experience: "Freshers / 0-2 Years Experience",
    workMode: "Hybrid Mode",
    isInternship: false,
    department: "Human Resources"
  },
  {
    id: "hr-generalist",
    title: "HR Generalist",
    location: "Erode HQ, Tamil Nadu, India",
    experience: "Freshers / 0-2 Years Experience",
    workMode: "Hybrid Mode",
    isInternship: false,
    department: "Human Resources"
  }
];

export default function Careers() {
  const [openFilter, setOpenFilter] = useState("Department");
  const [minExp, setMinExp] = useState(0);
  const [maxExp, setMaxExp] = useState(2);
  const totalMax = 5;

  const toggleFilter = (filterName) => {
    setOpenFilter(openFilter === filterName ? null : filterName);
  };

  const minPercent = (minExp / totalMax) * 100;
  const maxPercent = (maxExp / totalMax) * 100;

  const filterGroupData = [
    { 
      name: "Department", 
      type: "checkbox", 
      options: ["Human Resources", "Business Development", "Marketing & Content", "Design & Tech", "Operations"] 
    },
    { 
      name: "Location", 
      type: "checkbox", 
      options: ["Erode HQ", "Chennai Office", "Coimbatore Hub", "Remote Global"] 
    },
    { 
      name: "Experience", 
      type: "custom_range" 
    },
    { 
      name: "Work Type", 
      type: "checkbox", 
      options: ["Permanent", "Internship", "Contract", "Part Time"] 
    }
  ];

  return (
    <div className="bg-[#FCFDFE] min-h-screen font-sans text-gray-750 antialiased">
      {/* Banner Jumbotron Row */}
      <section className="relative w-full bg-linear-to-b from-[#EFF4FF] via-[#F4F7FF] to-[#FCFDFE] py-16 px-6 text-center">
        <h1 className="text-2xl md:text-3xl font-normal tracking-tight text-[#1E293B]">
          Explore Opportunities with Us!
        </h1>
      </section>

      {/* Primary Workspace Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-6">
        
        {/* Search Input Bar Field */}
        <div className="w-full relative max-w-7xl mx-auto bg-white rounded-md border border-gray-200 shadow-2xs transition-all focus-within:border-gray-300">
          <input 
            type="text" 
            placeholder="Search by role, department or location"
            className="w-full pl-5 pr-12 py-3 bg-transparent rounded-md text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Quantified Count Line Block */}
        <div className="flex justify-between items-center pb-1">
          <h2 className="text-base font-medium text-gray-800">
            {staticHivictusJobs.length} <span className="text-gray-500 font-normal">Open jobs available</span>
          </h2>
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-200 text-xs text-gray-600 rounded-md py-1.5 pl-3 pr-8 focus:outline-none focus:border-gray-300 cursor-pointer shadow-2xs">
              <option>Newest First</option>
              <option>Oldest First</option>
            </select>
            <div className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-[10px]">▼</div>
          </div>
        </div>

        {/* Left Filters and Right Workspace Grid Divider */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          
          {/* Side Accordion Parameter Filter Column */}
          <aside className="space-y-4 lg:sticky lg:top-6">
            <div className="text-xs font-medium text-gray-500 px-1">Filters</div>
            <div className="space-y-2.5">
              {filterGroupData.map((group, index) => {
                const isOpen = openFilter === group.name;
                return (
                  <div key={index} className="bg-white border border-gray-200 rounded-md overflow-hidden shadow-2xs">
                    <button 
                      onClick={() => toggleFilter(group.name)}
                      className="w-full py-2.5 px-4 flex items-center justify-between text-left focus:outline-none bg-white hover:bg-gray-50/50"
                    >
                      <span className="text-l font-normal text-gray-700">{group.name}</span>
                      <svg className={`w-3 h-3 text-gray-400 transition-transform duration-150 ${isOpen ? 'rotate-45' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 pt-1.5 border-t border-gray-50 bg-white">
                        {group.type === "custom_range" ? (
                          <div className="space-y-4 pt-1">
                            <div className="grid grid-cols-2 gap-3">
                              <div>
                                <label className="text-[14px] font-normal text-gray-400 block mb-1">Min Exp</label>
                                <input type="number" value={minExp} className="w-full text-s font-normal px-2 py-1 border border-gray-200 rounded-md text-gray-800 bg-gray-50 focus:outline-none" />
                              </div>
                              <div>
                                <label className="text-[14px] font-normal text-gray-400 block mb-1">Max Exp</label>
                                <input type="number" value={maxExp} className="w-full text-s font-normal px-2 py-1 border border-gray-200 rounded-md text-gray-800 bg-gray-50 focus:outline-none" />
                              </div>
                            </div>
                            <div className="relative w-full pt-1 pb-3 px-1">
                              <div className="absolute left-1 right-1 top-2.5 h-1.5 bg-gray-100 rounded-sm" />
                              <div className="absolute h-1.5 bg-[#86BC25] rounded-sm top-2.5" style={{ left: `${minPercent}%`, width: `${maxPercent - minPercent}%` }} />
                              <input type="range" min="0" max={totalMax} value={minExp} onChange={(e) => setMinExp(Math.min(Number(e.target.value), maxExp - 1))} className="absolute w-full h-1.5 left-0 top-2.5 pointer-events-none appearance-none bg-transparent cursor-pointer accent-[#86BC25]" />
                              <input type="range" min="0" max={totalMax} value={maxExp} onChange={(e) => setMaxExp(Math.max(Number(e.target.value), minExp + 1))} className="absolute w-full h-1.5 left-0 top-2.5 pointer-events-none appearance-none bg-transparent cursor-pointer accent-[#86BC25]" />
                              <div className="absolute left-0 right-0 top-7 flex justify-between text-[10px] text-gray-400">
                                <span>0 Yrs</span>
                                <span className="text-[#86BC25] bg-[#86BC25]/5 px-1.5 py-0.5 rounded-xs">{minExp} - {maxExp} Yrs</span>
                                <span>{totalMax}+ Yrs</span>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-3 max-h-48 overflow-y-auto pr-1 pt-1.5">
                            {group.options?.map((option, optIdx) => (
                              <label key={optIdx} className="flex items-center gap-3 cursor-pointer select-none group/item">
                                <input type="checkbox" className="w-3.5 h-3.5 rounded-xs border-gray-300 text-[#86BC25] focus:ring-0 accent-[#86BC25]" />
                                <span className="text-xs font-normal text-gray-500 group-hover/item:text-gray-800 transition-colors">{option}</span>
                              </label>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Sidebar General Drop-in Resume Form Card */}
              <div className="bg-[#F8FAFC] border border-dashed border-gray-200 rounded-md p-4 text-center space-y-3 shadow-2xs">
                <div className="text-xs font-medium text-gray-800">Can't find the right job?</div>
                <p className="text-[11px] text-gray-400 leading-normal px-1">
                  Drop in your resume and we'll get back to you when we have suitable openings that match your profile!
                </p>
                <a 
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center border border-[#86BC25] text-[#86BC25] bg-white hover:bg-[#86BC25] hover:text-white transition-all duration-150 text-xs font-normal py-1.5 rounded-md cursor-pointer no-underline"
                >
                  Apply Here
                </a>
              </div>
            </div>
          </aside>

          {/* Jobs Listing Grid Container */}
          <main className="lg:col-span-3 space-y-3.5">
            {staticHivictusJobs.map((job) => (
              <div key={job.id} className="bg-white border border-gray-200 rounded-md p-5 shadow-2xs hover:border-gray-300 transition-all space-y-3">
                <div>
                  <h3 className="text-sm md:text-[15px] font-normal text-gray-900 tracking-tight">{job.title}</h3>
                </div>
                
                {/* Horizontal Metadata Layout */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-gray-500 font-normal">
                  {/* Location */}
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span>{job.location}</span>
                  </div>

                  {/* Experience */}
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .621-.504 1.125-1.125 1.125H4.875A1.125 1.125 0 013.75 18.4V14.15m16.5 0c0-1.22-.88-2.25-2.07-2.41a4.478 4.478 0 00-11.86 0C5.12 11.9 4.24 12.93 4.24 14.15m16.5 0a4.5 4.5 0 00-16.5 0M6 8.25h12M6 5.25h12" />
                    </svg>
                    <span>{job.experience}</span>
                  </div>

                  {/* Work Mode */}
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                    </svg>
                    <span>{job.workMode}</span>
                  </div>

                  {/* Work Type */}
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{job.isInternship ? "Internship" : "Permanent"}</span>
                  </div>
                </div>

                {/* View and Apply Redirect Trigger Box */}
                <div className="pt-1">
                  <a 
                    href={GOOGLE_FORM_URL}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block border border-[#86BC25] text-[#86BC25] hover:bg-[#86BC25] hover:text-white transition-all duration-150 text-xs font-normal py-1 px-4 rounded-md cursor-pointer no-underline"
                  >
                    View and Apply
                  </a>
                </div>
              </div>
            ))}
          </main>

        </div>
      </section>
    </div>
  );
}