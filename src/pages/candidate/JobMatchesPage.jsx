import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import JobApplyModal from '../../components/common/JobApplyModal';
import { JOB_MATCHES } from '../../data/mockData';
import { 
  Briefcase, 
  MapPin, 
  DollarSign, 
  Search, 
  Send, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  Filter 
} from 'lucide-react';

export default function JobMatchesPage() {
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedJobForApply, setSelectedJobForApply] = useState(null);
  const [appliedJobIds, setAppliedJobIds] = useState([]);

  const locations = ["All", "Pune", "Mumbai", "Nagpur", "Nashik", "Kolhapur"];

  const filteredJobs = JOB_MATCHES.filter((job) => {
    const matchesLoc = selectedLocation === "All" || job.location.toLowerCase().includes(selectedLocation.toLowerCase());
    const matchesSearch = 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skillsRequired.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesLoc && matchesSearch;
  });

  const handleApplied = (jobId) => {
    setAppliedJobIds((prev) => [...prev, jobId]);
  };

  return (
    <DashboardLayout role="candidate">
      <div className="space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22D3EE]/10 border border-[#22D3EE]/25 text-[#22D3EE] text-xs font-semibold mb-2 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
              <span>REGIONAL TALENT PIPELINE</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#F5F7FA] tracking-tight">
              Verified Job Opportunities
            </h1>
            <p className="text-xs sm:text-sm text-[#94A3B8] mt-1 font-mono">
              Live vacancies from Maharashtra employers matching your assessed neural skill graph.
            </p>
          </div>

          <span className="px-3 py-1.5 rounded-lg bg-[#22D3EE]/10 border border-[#22D3EE]/30 text-[#22D3EE] text-xs font-bold font-mono">
            24 Active Openings
          </span>
        </div>

        {/* Search & Location Filter Bar */}
        <div className="surface-card rounded-2xl p-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by job role, employer, or skill..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#0D141B] border border-white/[0.08] text-xs text-[#F5F7FA] placeholder-[#64748B] focus:outline-none focus:border-[#22D3EE]/50 transition-all font-mono"
            />
          </div>

          {/* Location Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            <span className="text-xs text-[#64748B] font-bold font-mono px-1">
              Hub:
            </span>
            {locations.map((loc) => (
              <button
                key={loc}
                onClick={() => setSelectedLocation(loc)}
                className={`px-3 py-1 rounded-md text-xs font-bold transition-all font-mono ${
                  selectedLocation === loc
                    ? 'bg-[#22D3EE] text-[#070B10]'
                    : 'bg-[#0D141B] text-[#94A3B8] hover:text-[#F5F7FA] border border-white/[0.06]'
                }`}
              >
                {loc}
              </button>
            ))}
          </div>

        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => {
            const hasApplied = appliedJobIds.includes(job.id);

            return (
              <div
                key={job.id}
                className="surface-card rounded-2xl p-5 flex flex-col justify-between space-y-4 group"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="w-10 h-10 rounded-xl object-cover border border-white/[0.08]"
                    />
                    <span className="px-2.5 py-0.5 rounded-full bg-[#22D3EE]/10 text-[#22D3EE] border border-[#22D3EE]/30 text-xs font-bold font-mono">
                      {job.matchScore}% Match
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#F5F7FA] group-hover:text-[#22D3EE] transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-xs text-[#64748B] font-mono">{job.company}</p>

                  <div className="mt-3 space-y-1 text-xs text-[#94A3B8] font-mono">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#22D3EE]" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#4ADE80] font-bold">{job.salary}</span>
                      <span className="text-white/20">·</span>
                      <span className="text-[#64748B]">{job.postedDays}</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#94A3B8] mt-3 line-clamp-2 leading-relaxed bg-[#0D141B] p-3 rounded-xl border border-white/[0.04]">
                    {job.description}
                  </p>

                  {/* Skills tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {job.skillsRequired.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-[#0D141B] border border-white/[0.06] text-[#94A3B8] text-[10px] font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3.5 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[11px] text-[#64748B] font-mono">
                    {job.applicants} applied
                  </span>

                  <button
                    onClick={() => setSelectedJobForApply(job)}
                    disabled={hasApplied}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                      hasApplied
                        ? 'bg-[#4ADE80]/15 text-[#4ADE80] border border-[#4ADE80]/30'
                        : 'bg-gradient-to-r from-[#22D3EE] to-[#A78BFA] text-[#070B10] hover:opacity-90 shadow-glow-teal'
                    }`}
                  >
                    {hasApplied ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Applied</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Fast Apply</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Apply Modal */}
      <JobApplyModal
        job={selectedJobForApply}
        isOpen={Boolean(selectedJobForApply)}
        onClose={() => setSelectedJobForApply(null)}
        onApplied={handleApplied}
      />
    </DashboardLayout>
  );
}
