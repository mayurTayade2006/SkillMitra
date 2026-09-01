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
  Building2 
} from 'lucide-react';

export default function EmployerDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCandidate, setSelectedCandidate] = useState(null);
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
      <div className="space-y-7">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#E5E2DA]">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1D2421] tracking-tight">
              Corporate Employer Suite
            </h1>
            <p className="text-xs sm:text-sm text-[#4A5550] mt-1">
              Search and hire pre-assessed talent with cryptographically verified credentials in Maharashtra.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button className="px-4 py-2 rounded-md bg-[#164B36] hover:bg-[#113A2A] text-[#FAF9F5] text-xs font-bold transition-colors flex items-center gap-1.5 shadow-subtle self-start sm:self-auto">
              <Plus className="w-3.5 h-3.5" />
              <span>Post Vacancy</span>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E5E2DA] shadow-subtle flex items-center gap-3">
          <Search className="w-4 h-4 text-[#789184]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search candidates by skill (e.g. SQL, Power BI, Python), location, or degree..."
            className="flex-1 bg-transparent text-xs text-[#1D2421] placeholder-[#789184] focus:outline-none"
          />
        </div>

        {/* Responsive Candidate Table */}
        <div className="rounded-xl bg-[#FFFFFF] border border-[#E5E2DA] shadow-card overflow-hidden">
          <div className="p-4 sm:p-5 border-b border-[#ECE9E1] bg-[#FAF9F5] flex items-center justify-between">
            <h3 className="text-sm font-bold text-[#1D2421]">
              Assessed Candidate Matches (Target: Junior Data Analyst)
            </h3>
            <span className="text-xs text-[#164B36] font-bold">
              {filteredCandidates.length} Matched Profiles
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] text-left text-xs">
              <thead className="bg-[#F3F0E8] text-[#789184] uppercase text-[10px] font-bold border-b border-[#E5E2DA]">
                <tr>
                  <th className="py-3 px-4">Candidate</th>
                  <th className="py-3 px-4">Match</th>
                  <th className="py-3 px-4">Skills</th>
                  <th className="py-3 px-4">Location</th>
                  <th className="py-3 px-4">Experience</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ECE9E1]">
                {filteredCandidates.map((cand) => {
                  const isShortlisted = shortlisted.includes(cand.id);

                  return (
                    <tr key={cand.id} className="hover:bg-[#FAF9F5] transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-2.5">
                          <img
                            src={cand.avatar}
                            alt={cand.name}
                            className="w-8 h-8 rounded-full object-cover border border-[#E5E2DA]"
                          />
                          <div>
                            <div className="font-bold text-[#1D2421]">{cand.name}</div>
                            <div className="text-[10px] text-[#789184]">{cand.education}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="px-2 py-0.5 rounded bg-[#EBF2EE] text-[#164B36] border border-[#D1E0D7] font-bold font-mono text-xs">
                          {cand.matchScore}% Match
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex flex-wrap gap-1 max-w-xs">
                          {cand.skills.map((s, idx) => (
                            <span key={idx} className="px-1.5 py-0.2 rounded bg-[#FAF9F5] border border-[#E5E2DA] text-[10px] text-[#4A5550]">
                              {s}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-[#4A5550]">
                        {cand.location}
                      </td>
                      <td className="py-3.5 px-4 text-[#789184]">
                        {cand.experience}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => toggleShortlist(cand.id)}
                          className={`px-3 py-1 rounded text-xs font-bold transition-colors ${
                            isShortlisted
                              ? 'bg-[#EBF2EE] text-[#164B36] border border-[#D1E0D7]'
                              : 'bg-[#FAF9F5] hover:bg-[#F3F0E8] border border-[#E5E2DA] text-[#1D2421]'
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
