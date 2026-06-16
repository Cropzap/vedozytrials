import React, { useState, useMemo } from 'react';
import JobDetails from './Jobdetails.jsx';

const GOOGLE_FORM_URL = "https://forms.gle/9hR28XJpUnnScJCx9";

const staticHivictusJobs = [
  {
    id: "human-resource-talent-acquisition",
    title: "Human Resource - Talent Acquisition",
    location: "Erode HQ, Tamil Nadu, India",
    experience: "Freshers / 0-2 Years",
    workMode: "Hybrid Mode",
    isInternship: true,
    department: "Human Resources",
    description: "We are seeking a motivated HR Talent Acquisition professional to join our core team. In this role, you will assist in managing the end-to-end recruitment lifecycle, from initial sourcing strategy to final onboarding execution.",
    responsibilities: [
      "Source and screen potential candidates through active digital talent channels and job portals.",
      "Coordinate interview timelines across technical hiring teams and engineering managers.",
      "Manage candidate pipeline updates and feedback tracking matrices within the internal ecosystem."
    ],
    qualifications: ["MBA in Human Resources", "BBA", "Any Bachelor Graduate with exceptional soft skills"],
    skills: ["Talent Sourcing", "Screening", "Interpersonal Communication", "Applicant Tracking Systems"]
  },
  {
    id: "business-development-executive",
    title: "Business Development Executive (BDE)",
    location: "Erode HQ, Tamil Nadu, India",
    experience: "Freshers / 0-2 Years",
    workMode: "Hybrid Mode",
    isInternship: false,
    department: "Business Development",
    description: "Join our high-energy sales wing as a Business Development Executive. You will play a pivotal role in accelerating enterprise customer acquisition, nurturing lead pipelines, and driving long-term strategic revenue vectors.",
    responsibilities: [
      "Identify emerging market niches, build continuous B2B lead generation lists, and initiate contact loops.",
      "Deliver high-impact digital product demonstrations to enterprise clients and prospective leads.",
      "Collaborate with internal marketing leads to optimize custom structural pricing models."
    ],
    qualifications: ["BBA", "MBA in Marketing", "B.Tech / BE with cross-functional corporate sales aptitude"],
    skills: ["B2B Sales", "Lead Generation", "Corporate Communication", "Negotiation", "CRM Tools"]
  },
  {
    id: "seo-analyst",
    title: "SEO Analyst",
    location: "Erode HQ, Tamil Nadu, India",
    experience: "Freshers / 0-2 Years",
    workMode: "Hybrid Mode",
    isInternship: false,
    department: "Marketing & Content",
    description: "We are hunting for an analytical SEO Specialist to manage search engine optimization and organic digital marketing campaigns. You will analyze traffic patterns and configure metadata schemes to maximize crawl parameters.",
    responsibilities: [
      "Perform high-intent keyword discovery loops and map strategic themes across technical silos.",
      "Execute on-page optimization scripts, structured schema maps, and continuous backlink indexing.",
      "Monitor daily performance indices using Google Search Console and custom reporting software."
    ],
    qualifications: ["B.Sc Computer Science", "BCA", "BE / B.Tech", "Digital Marketing Certifications"],
    skills: ["Google Analytics", "On-Page SEO", "Technical Auditing", "Ahrefs / Semrush", "Link Building"]
  },
  {
    id: "content-writer",
    title: "Content Writer",
    location: "Erode HQ, Tamil Nadu, India",
    experience: "Freshers / 0-2 Years",
    workMode: "Hybrid Mode",
    isInternship: false,
    department: "Marketing & Content",
    description: "Are you passionate about turning complex technical concepts into accessible copy? As a Content Writer at HIVICTUS, you will design copy architectures, structural whitepapers, and targeted growth narratives.",
    responsibilities: [
      "Draft conversion-ready website copy, professional enterprise insights, and product documentation.",
      "Coordinate directly with SEO specialists to seed contextual tracking phrases organically into layouts.",
      "Audit existing landing assets to keep global brand communications sharp and cohesive."
    ],
    qualifications: ["BA / MA English Literature", "Journalism", "Any graduate with supreme copywriting skills"],
    skills: ["Technical Copywriting", "Content Strategy", "Proofreading", "Creative Writing", "Research"]
  },
  {
    id: "social-media-handler",
    title: "Social Media Handler",
    location: "Erode HQ, Tamil Nadu, India",
    experience: "Freshers / 0-2 Years",
    workMode: "Hybrid Mode",
    isInternship: false,
    department: "Marketing & Content",
    description: "We are looking for a creative, platform-native Social Media Specialist to manage our public networks, design cross-channel marketing calendars, and build authentic customer engagement loops.",
    responsibilities: [
      "Curate monthly multi-platform editorial blueprints tracking modern interactive tech developments.",
      "Monitor public mentions, drive immediate customer support loops, and synthesize engagement reports.",
      "Interface with internal graphic designers to deliver pristine visual assets across distribution nodes."
    ],
    qualifications: ["Visual Communication", "Marketing", "Mass Media Graduate", "Portfolio of active social campaigns"],
    skills: ["Content Scheduling", "Community Management", "Platform Analytics", "Brand Management"]
  },
  {
    id: "graphic-designer",
    title: "Graphic Designer",
    location: "Erode HQ, Tamil Nadu, India",
    experience: "Freshers / 0-2 Years",
    workMode: "Hybrid Mode",
    isInternship: false,
    department: "Design & Tech",
    description: "Bring your visual aesthetics into production. We need a core Graphic Designer to construct branding frameworks, interactive corporate visual collaterals, and vectors for our software products.",
    responsibilities: [
      "Produce modern vector layouts, high-conversion ad creatives, and enterprise presentation decks.",
      "Translate conceptual marketing goals into crisp, well-proportioned visual vector grids.",
      "Ensure color consistency aligns exactly across physical prints and multi-resolution web layouts."
    ],
    qualifications: ["B.Sc Visual Communication", "Fine Arts Graduate", "Certified Expert in Professional Design Suites"],
    skills: ["Adobe Illustrator", "Photoshop", "Typography Matrix", "Vector Arts", "Branding Design"]
  },
  {
    id: "ui-ux-developer",
    title: "UI/UX Developer",
    location: "Erode HQ, Tamil Nadu, India",
    experience: "Freshers / 0-2 Years",
    workMode: "Hybrid Mode",
    isInternship: false,
    department: "Design & Tech",
    description: "We are seeking a technical UI/UX Developer who sits safely at the intersection of aesthetic system layout mechanics and fluid software implementation layers to deploy clean web products.",
    responsibilities: [
      "Construct interactive wireframe workflows and modern interactive design component prototypes.",
      "Build modular layouts using structural styling patterns like utility-first Tailwind configuration files.",
      "Audit desktop and smartphone app user interface views to remove interface click friction."
    ],
    qualifications: ["B.E / B.Tech Computer Science", "BCA", "B.Sc UI Architecture", "Portfolio in Figma and CSS Frameworks"],
    skills: ["Figma Design Systems", "Tailwind CSS Architecture", "Responsive Layouts", "JavaScript", "User Flow Mapping"]
  },
  {
    id: "telecalling-executive",
    title: "Telecalling Executive",
    location: "Erode HQ, Tamil Nadu, India",
    experience: "Freshers / 0-2 Years",
    workMode: "Hybrid Mode",
    isInternship: false,
    department: "Operations",
    description: "We are hiring client-focused Telecalling Executives to bridge outbound call inquiries, qualify early leads, and map inbound requests to our senior solution architects.",
    responsibilities: [
      "Execute structured outreach call cycles using database arrays to establish business contact loops.",
      "Log conversation indices accurately within the operational tracking database.",
      "Follow up with enterprise leads to solidify demonstration appointments."
    ],
    qualifications: ["Any Graduate Degree", "Excellent linguistic articulation capability in English and Regional Dialects"],
    skills: ["Customer Care Operations", "Outbound Outreach", "Active Listening", "Database Data-Entry"]
  },
  {
    id: "voice-process-executive",
    title: "Voice Process Executive",
    location: "Erode HQ, Tamil Nadu, India",
    experience: "Freshers / 0-2 Years",
    workMode: "Hybrid Mode",
    isInternship: false,
    department: "Operations",
    description: "Join our active support infrastructure team as a Voice Process Specialist to manage direct client communication channels and maintain top-tier resolution delivery indicators.",
    responsibilities: [
      "Resolve incoming system inquiries, service tickets, and feature configurations over direct calls.",
      "De-escalate complex operational errors while coordinating answers with engineering managers.",
      "Maintain precise compliance reporting documentation benchmarks across all resolved call records."
    ],
    qualifications: ["Any Graduate Profile", "Prior call support experience or exceptional vocal troubleshooting communication skills"],
    skills: ["Vocal Problem Solving", "Customer Relations Management", "Crisis Management", "Service Documentation"]
  },
  {
    id: "non-voice-process-executive",
    title: "Non-Voice Process Executive",
    location: "Erode HQ, Tamil Nadu, India",
    experience: "Freshers / 0-2 Years",
    workMode: "Hybrid Mode",
    isInternship: false,
    department: "Operations",
    description: "Seeking a detail-driven Operations Analyst to manage internal text queues, email validation workflows, and system backend content compliance arrays.",
    responsibilities: [
      "Process platform transactions, system verification tokens, and user documentation logs.",
      "Deliver chat-based technical troubleshooting support with structural resolution parameters.",
      "Perform internal auditing cycles to flag data anomalies in account system directories."
    ],
    qualifications: ["B.Com", "BSc Computer Science", "BBA", "Any graduate with quick typing and analytical data skill"],
    skills: ["Data Verification", "Email Support Ticketing", "Keyboard Speed Precision", "Logical Processing"]
  },
  {
    id: "hr-trainer",
    title: "HR Trainer",
    location: "Erode HQ, Tamil Nadu, India",
    experience: "Freshers / 0-2 Years",
    workMode: "Hybrid Mode",
    isInternship: false,
    department: "Human Resources",
    description: "We are opening a position for a structured HR Trainer to build company training courses, manage early employee onboarding, and continuously upscale junior operational teams.",
    responsibilities: [
      "Formulate corporate training material covering technology platforms, soft skills, and workflow compliance.",
      "Conduct evaluation benchmarks to identify performance gaps across operational teams.",
      "Deliver performance metrics to human resource directors to optimize resource assignments."
    ],
    qualifications: ["MBA in HR / Core Management", "Extensive coaching credentials or public presentation portfolio"],
    skills: ["Curriculum Structuring", "Corporate Presenting", "Skill Assessment Matrix", "Employee Onboarding"]
  },
  {
    id: "hr-generalist",
    title: "HR Generalist",
    location: "Erode HQ, Tamil Nadu, India",
    experience: "Freshers / 0-2 Years",
    workMode: "Hybrid Mode",
    isInternship: false,
    department: "Human Resources",
    description: "We are seeking an HR Generalist to direct internal company policies, manage monthly payroll calculations, organize welfare projects, and secure standard administrative regulatory checks.",
    responsibilities: [
      "Supervise daily operational workspace parameters, employee attendance tracking, and leave allocations.",
      "Execute payroll variables calculation processing in conjunction with external finance auditors.",
      "Resolve internal grievance tickets while ensuring corporate code guidelines are met securely."
    ],
    qualifications: ["MBA in Human Resource Management", "B.Com with specialized employee relations training"],
    skills: ["Employment Law Compliance", "Payroll Verification", "Conflict Mitigation", "HR Information Systems"]
  }
];

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [selectedWorkTypes, setSelectedWorkTypes] = useState([]);
  const [openFilter, setOpenFilter] = useState("Department");

  const filterGroupData = [
    { 
      name: "Department", 
      type: "checkbox", 
      options: ["Human Resources", "Business Development", "Marketing & Content", "Design & Tech", "Operations"] 
    },
    { 
      name: "Work Type", 
      type: "checkbox", 
      options: ["Permanent", "Internship"] 
    }
  ];

  const handleDepartmentChange = (dept) => {
    setSelectedDepartments(prev => 
      prev.includes(dept) ? prev.filter(d => d !== dept) : [...prev, dept]
    );
  };

  const handleWorkTypeChange = (type) => {
    setSelectedWorkTypes(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  // Memoized Search & Filter Engine
  const filteredJobs = useMemo(() => {
    return staticHivictusJobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            job.department.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesDept = selectedDepartments.length === 0 || selectedDepartments.includes(job.department);
      
      const jobType = job.isInternship ? "Internship" : "Permanent";
      const matchesWorkType = selectedWorkTypes.length === 0 || selectedWorkTypes.includes(jobType);
      
      return matchesSearch && matchesDept && matchesWorkType;
    });
  }, [searchQuery, selectedDepartments, selectedWorkTypes]);

  if (selectedJob) {
    return <JobDetails job={selectedJob} onBack={() => setSelectedJob(null)} googleFormUrl={GOOGLE_FORM_URL} />;
  }

  return (
    <div className="bg-[#f8f9ff] min-h-screen font-sans text-victus-navy antialiased">
      
      {/* Banner Header Row */}
      <section className="relative w-full bg-gradient-to-b from-white via-gray-50/50 to-[#f8f9ff] py-16 sm:py-20 px-4 text-center border-b border-gray-100">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-victus-navy/5 text-victus-navy text-xs font-bold uppercase tracking-wider border border-victus-navy/10">
            Join the Ecosystem
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-victus-navy">
            Explore Opportunities with <span className="text-transparent bg-clip-text bg-gradient-to-r from-victus-navy to-victus-green">Us</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto font-medium leading-relaxed">
            Build enterprise tools, solve real business execution workflows, and launch your career track with the HIVICTUS corporate team.
          </p>
        </div>
      </section>

      {/* Primary Workspace Workspace Workspace Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        {/* Attractively Restricted & Centered Search Bar */}
        <div className="max-w-2xl mx-auto w-full relative bg-white rounded-2xl border border-gray-200/70 shadow-xl shadow-gray-100/50 transition-all focus-within:border-victus-green focus-within:shadow-2xl focus-within:shadow-victus-navy/5">
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search open positions by role title or department keyword..."
            className="w-full pl-6 pr-14 py-4 bg-transparent rounded-2xl text-[15px] text-victus-navy placeholder-gray-400 focus:outline-none font-medium"
          />
          <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-5 h-5 text-victus-navy opacity-70 group-focus-within:text-victus-green" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Quantified Count Indicator */}
        <div className="flex justify-between items-center pb-2 border-b border-gray-100 max-w-7xl mx-auto">
          <h2 className="text-xs font-black uppercase tracking-widest text-gray-400">
            Open Slates: <span className="text-victus-green">{filteredJobs.length}</span> out of {staticHivictusJobs.length} Tracks
          </h2>
        </div>

        {/* Split Content Column Grid Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-7xl mx-auto">
          
          {/* Side Filter Deck Sidebar Panel */}
          <aside className="lg:col-span-4 space-y-4 lg:sticky lg:top-28">
            <div className="text-xs font-black uppercase tracking-widest text-gray-400 px-1">Filter Infrastructure</div>
            
            <div className="space-y-3">
              {filterGroupData.map((group, index) => {
                const isOpen = openFilter === group.name;
                return (
                  <div key={index} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                    <button 
                      onClick={() => setOpenFilter(isOpen ? null : group.name)}
                      className="w-full py-4 px-5 flex items-center justify-between text-left focus:outline-none bg-white hover:bg-gray-50/50 transition-colors"
                    >
                      <span className="text-[14px] font-black text-victus-navy tracking-tight">{group.name}</span>
                      <svg className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-victus-green' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-2 border-t border-gray-50 bg-white">
                        <div className="space-y-3 max-h-48 overflow-y-auto pr-1 pt-1.5">
                          {group.options?.map((option, optIdx) => {
                            const isChecked = group.name === "Department" 
                              ? selectedDepartments.includes(option) 
                              : selectedWorkTypes.includes(option);
                            return (
                              <label key={optIdx} className="flex items-center gap-3 cursor-pointer select-none group/item">
                                <input 
                                  type="checkbox" 
                                  checked={isChecked}
                                  onChange={() => group.name === "Department" ? handleDepartmentChange(option) : handleWorkTypeChange(option)}
                                  className="w-4 h-4 rounded-md border-gray-200 text-victus-green focus:ring-0 accent-victus-green transition-all cursor-pointer"
                                />
                                <span className={`text-xs font-semibold transition-colors ${isChecked ? 'text-victus-green font-bold' : 'text-gray-500 group-hover/item:text-victus-navy'}`}>{option}</span>
                              </label>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* General Resume Drop Box Panel Card */}
              <div className="bg-gradient-to-br from-victus-navy to-[#0d2e4d] rounded-2xl p-6 text-center space-y-4 shadow-xl text-white relative overflow-hidden border border-gray-800">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none -mr-10" />
                <div className="w-10 h-10 bg-white/5 border border-white/10 text-victus-green rounded-xl flex items-center justify-center mx-auto text-base">💼</div>
                <div className="space-y-1">
                  <div className="text-xs font-black uppercase tracking-widest text-white">Speculative Inquiries</div>
                  <p className="text-[11px] text-gray-300 leading-relaxed font-medium pt-1">
                    Can't find a direct slot? Deposit your credentials into our pipeline registry for custom evaluations.
                  </p>
                </div>
                <a 
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-white text-victus-navy font-black hover:bg-victus-green hover:text-white transition-all duration-300 text-xs py-3 rounded-xl cursor-pointer no-underline shadow-md"
                >
                  Drop Resume Here
                </a>
              </div>
            </div>
          </aside>

          {/* Jobs Listing Grid Output Column */}
          <main className="lg:col-span-8 space-y-4">
            {filteredJobs.length === 0 ? (
              <div className="bg-white border border-gray-100 rounded-2xl p-12 text-center text-gray-400 font-bold text-sm">
                No matching open career tracks found. Try broadening your filter parameters.
              </div>
            ) : (
              filteredJobs.map((job) => (
                <div 
                  key={job.id} 
                  onClick={() => setSelectedJob(job)}
                  className="group bg-white border border-gray-100 rounded-[2rem] p-6 shadow-sm hover:shadow-xl hover:border-gray-200 border-l-4 border-l-transparent hover:border-l-victus-green transition-all duration-300 cursor-pointer space-y-4 flex flex-col sm:flex-row justify-between sm:items-center gap-4 relative overflow-hidden"
                >
                  <div className="space-y-2.5 max-w-xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[9px] font-black uppercase tracking-widest bg-victus-navy/5 text-victus-navy px-2.5 py-1 rounded-md border border-victus-navy/5">
                        {job.department}
                      </span>
                      <span className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md ${job.isInternship ? 'bg-amber-500/10 text-amber-600' : 'bg-victus-green/10 text-victus-green'}`}>
                        {job.isInternship ? "Internship" : "Permanent"}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-victus-navy group-hover:text-victus-green transition-colors duration-200 tracking-tight">
                      {job.title}
                    </h3>
                    
                    {/* Horizontal Metadata Layout Strip */}
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-gray-400 font-semibold">
                      <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <span className="text-gray-500">{job.location}</span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .621-.504 1.125-1.125 1.125H4.875A1.125 1.125 0 013.75 18.4V14.15m16.5 0c0-1.22-.88-2.25-2.07-2.41a4.478 4.478 0 00-11.86 0C5.12 11.9 4.24 12.93 4.24 14.15m16.5 0a4.5 4.5 0 00-16.5 0M6 8.25h12M6 5.25h12" />
                        </svg>
                        <span className="text-gray-500">{job.experience}</span>
                      </div>
                    </div>
                  </div>

                  {/* Trigger Call To Action Action Box */}
                  <div className="sm:shrink-0 pt-1 sm:pt-0">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedJob(job);
                      }}
                      className="w-full sm:w-auto text-center bg-gray-50 text-victus-navy font-black text-xs py-2.5 px-5 rounded-xl border border-gray-100 group-hover:bg-victus-navy group-hover:text-white group-hover:border-transparent transition-all duration-300"
                    >
                      View Position
                    </button>
                  </div>
                </div>
              ))
            )}
          </main>

        </div>
      </section>
    </div>
  );
}