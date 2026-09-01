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
  CheckCircle2
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
      <div className="space-y-7">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#E5E2DA]">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1D2421] tracking-tight">
              Job opportunities
            </h1>
            <p className="text-xs sm:text-sm text-[#4A5550] mt-1">
              Verified vacancies from Maharashtra employers matching your assessed skill graph.
            </p>
          </div>

          <span className="px-3 py-1.5 rounded-md bg-[#EBF2EE] border border-[#D1E0D7] text-[#164B36] text-xs font-bold font-mono">
            24 Active Matches
          </span>
        </div>

        {/* Search & Location Filter Bar */}
        <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E5E2DA] shadow-card flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3.5">
          
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#789184] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by job title, company, or skill..."
              className="w-full pl-10 pr-4 py-2 rounded-md bg-[#FAF9F5] border border-[#E5E2DA] text-xs text-[#1D2421] placeholder-[#789184] focus:outline-none focus:border-[#164B36]"
            />
          </div>

          {/* Location Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            <span className="text-xs text-[#789184] font-bold px-1">
              Location:
            </span>
            {locations.map((loc) => (
              <button
                key={loc}
                onClick={() => setSelectedLocation(loc)}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors ${
                  selectedLocation === loc
                    ? 'bg-[#164B36] text-[#FAF9F5]'
                    : 'bg-[#FAF9F5] text-[#4A5550] hover:bg-[#F3F0E8] border border-[#E5E2DA]'
                }`}
              >
                {loc}
              </button>
            ))}
          </div>

        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredJobs.map((job) => {
            const hasApplied = appliedJobIds.includes(job.id);

            return (
              <div
                key={job.id}
                className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E5E2DA] hover:border-[#789184] transition-colors shadow-card flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2.5">
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="w-10 h-10 rounded object-cover border border-[#E5E2DA]"
                    />
                    <span className="px-2.5 py-0.5 rounded bg-[#EBF2EE] text-[#164B36] border border-[#D1E0D7] text-xs font-bold font-mono">
                      {job.matchScore}% Match
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-[#1D2421]">
                    {job.title}
                  </h3>
                  <p className="text-xs text-[#789184]">{job.company}</p>

                  <div className="mt-2.5 space-y-1 text-xs text-[#789184]">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#789184]" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#164B36] font-bold">{job.salary}</span>
                      <span>·</span>
                      <span>{job.postedDays}</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#4A5550] mt-3 line-clamp-2 leading-relaxed bg-[#FAF9F5] p-2.5 rounded-lg border border-[#E5E2DA]">
                    {job.description}
                  </p>

                  {/* Skills tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {job.skillsRequired.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-[#FAF9F5] border border-[#E5E2DA] text-[#1D2421] text-[11px]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3.5 border-t border-[#ECE9E1] flex items-center justify-between">
                  <span className="text-[11px] text-[#789184]">
                    {job.applicants} applied
                  </span>

                  <button
                    onClick={() => setSelectedJobForApply(job)}
                    disabled={hasApplied}
                    className={`px-3.5 py-1.5 rounded-md text-xs font-bold transition-colors flex items-center gap-1.5 ${
                      hasApplied
                        ? 'bg-[#EBF2EE] text-[#164B36] border border-[#D1E0D7]'
                        : 'bg-[#164B36] hover:bg-[#113A2A] text-white shadow-subtle'
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
                        <span>Apply</span>
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
