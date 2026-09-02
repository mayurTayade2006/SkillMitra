import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { EMPLOYER_CANDIDATES } from '../../data/mockData';
import { 
  Briefcase, 
  Users, 
  Search, 
  MapPin, 
  CheckCircle2, 
  Plus, 
  Eye, 
  Send, 
  Building2, 
  Sparkles, 
  Award 
} from 'lucide-react';

export default function EmployerDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [shortlisted, setShortlisted] = useState([]);

  const filteredCandidates = EMPLOYER_CANDIDATES.filter((c) => {
    return (
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      c.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const toggleShortlist = (id) => {
    setShortlisted((prev) =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  return (
    <DashboardLayout role="employer">
      <div className="space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A78BFA]/10 border border-[#A78BFA]/25 text-[#A78BFA] text-xs font-semibold mb-2 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] animate-pulse" />
              <span>CORPORATE TALENT ACQUISITION</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#F5F7FA] tracking-tight">
              Employer Hiring Suite
            </h1>
            <p className="text-xs sm:text-sm text-[#94A3B8] mt-1 font-mono">
              Search and hire pre-assessed talent with cryptographically verified credentials in Maharashtra.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#22D3EE] to-[#A78BFA] text-[#070B10] text-xs font-bold transition-all shadow-glow-teal flex items-center gap-2 hover:opacity-90 self-start sm:self-auto">
              <Plus className="w-3.5 h-3.5" />
              <span>Post New Vacancy</span>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="surface-card rounded-2xl p-3.5 flex items-center gap-3">
          <Search className="w-4 h-4 text-[#64748B]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search candidates by skill (e.g. SQL, Power BI, Python), location, or degree..."
            className="flex-1 bg-transparent text-xs text-[#F5F7FA] placeholder-[#64748B] focus:outline-none font-mono"
          />
        </div>

        {/* Candidate Table */}
        <div className="rounded-2xl bg-[#121B23] border border-white/[0.08] overflow-hidden">
          <div className="p-4 sm:p-5 border-b border-white/[0.06] flex items-center justify-between">
            <h3 className="text-xs font-bold text-[#F5F7FA] font-mono">
              Assessed Candidate Pipeline (Target: Data Analyst)
            </h3>
            <span className="text-xs text-[#4ADE80] font-mono font-bold">
              {filteredCandidates.length} Matched Profiles
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] text-left text-xs font-mono">
              <thead className="bg-[#0D141B] text-[#64748B] uppercase text-[10px] font-bold border-b border-white/[0.08]">
                <tr>
                  <th className="py-3.5 px-5">Candidate</th>
                  <th className="py-3.5 px-5">Match Index</th>
                  <th className="py-3.5 px-5">Assessed Competencies</th>
                  <th className="py-3.5 px-5">Location</th>
                  <th className="py-3.5 px-5">Experience</th>
                  <th className="py-3.5 px-5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {filteredCandidates.map((cand) => {
                  const isShortlisted = shortlisted.includes(cand.id);

                  return (
                    <tr key={cand.id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 px-5">
                        <div className="flex items-center gap-3">
                          <img
                            src={cand.avatar}
                            alt={cand.name}
                            className="w-8 h-8 rounded-lg object-cover border border-white/[0.08]"
                          />
                          <div>
                            <div className="font-bold text-[#F5F7FA]">{cand.name}</div>
                            <div className="text-[10px] text-[#64748B]">{cand.education}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-5">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#4ADE80]/10 text-[#4ADE80] border border-[#4ADE80]/30 font-bold font-mono text-xs">
                          {cand.matchScore}% Fit
                        </span>
                      </td>
                      <td className="py-3.5 px-5">
                        <div className="flex flex-wrap gap-1 max-w-xs">
                          {cand.skills.map((s, idx) => (
                            <span key={idx} className="px-2 py-0.2 rounded bg-[#0D141B] border border-white/[0.06] text-[10px] text-[#94A3B8]">
                              {s}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-3.5 px-5 text-[#94A3B8]">
                        {cand.location}
                      </td>
                      <td className="py-3.5 px-5 text-[#64748B]">
                        {cand.experience}
                      </td>
                      <td className="py-3.5 px-5 text-right">
                        <button
                          onClick={() => toggleShortlist(cand.id)}
                          className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                            isShortlisted
                              ? 'bg-[#4ADE80]/15 text-[#4ADE80] border border-[#4ADE80]/30'
                              : 'bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-[#F5F7FA]'
                          }`}
                        >
                          {isShortlisted ? '✓ Shortlisted' : 'Shortlist'}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
