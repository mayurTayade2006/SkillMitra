import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { CAREER_RECOMMENDATIONS } from '../../data/mockData';
import { 
  ArrowRight, 
  Compass, 
  MapPin, 
  DollarSign, 
  Briefcase,
  Star
} from 'lucide-react';

export default function CareerRecommendationsPage() {
  return (
    <DashboardLayout role="candidate">
      <div className="space-y-7">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#E5E2DA]">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1D2421] tracking-tight">
              Career recommendations
            </h1>
            <p className="text-xs sm:text-sm text-[#4A5550] mt-1">
              Personalized career trajectories ranked by capability fit and regional vacancy demand in Maharashtra.
            </p>
          </div>

          <Link
            to="/candidate/jobs"
            className="px-4 py-2 rounded-md bg-[#164B36] hover:bg-[#113A2A] text-[#FAF9F5] text-xs font-bold transition-colors flex items-center gap-1.5 shadow-subtle shrink-0 self-start sm:self-auto"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Browse Job Directory</span>
          </Link>
        </div>

        {/* Premium Table / List of Recommendations */}
        <div className="rounded-xl border border-[#E5E2DA] bg-[#FFFFFF] shadow-card overflow-hidden">
          <div className="p-4 sm:p-5 border-b border-[#ECE9E1] bg-[#FAF9F5] flex items-center justify-between">
            <h3 className="text-sm font-bold text-[#1D2421]">
              Ranked Career Matches
            </h3>
            <span className="text-xs text-[#789184]">
              4 Assessed Pathways
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-xs">
              <thead className="bg-[#F3F0E8] text-[#789184] uppercase text-[10px] font-bold border-b border-[#E5E2DA]">
                <tr>
                  <th className="py-3 px-4">Role & Domain</th>
                  <th className="py-3 px-4">Match</th>
                  <th className="py-3 px-4">Strengths</th>
                  <th className="py-3 px-4">Skill Gap</th>
                  <th className="py-3 px-4">Location</th>
                  <th className="py-3 px-4">Avg Salary</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ECE9E1]">
                {CAREER_RECOMMENDATIONS.map((career, idx) => {
                  const isTop = idx === 0;

                  return (
                    <tr 
                      key={career.id} 
                      className={`transition-colors ${
                        isTop ? 'bg-[#FDF4EC]/40 hover:bg-[#FDF4EC]/70' : 'hover:bg-[#FAF9F5]'
                      }`}
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          {isTop && (
                            <span className="p-1 rounded bg-[#E28A3B] text-white" title="Top Recommended Fit">
                              <Star className="w-3 h-3 fill-white" />
                            </span>
                          )}
                          <div>
                            <div className="font-extrabold text-[#1D2421] text-xs sm:text-sm">{career.role}</div>
                            <div className="text-[11px] text-[#789184]">{career.category}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`px-2.5 py-0.5 rounded font-bold text-xs font-mono border ${
                          isTop 
                            ? 'bg-[#EBF2EE] text-[#164B36] border-[#D1E0D7]'
                            : 'bg-[#F3F0E8] text-[#1D2421] border-[#E5E2DA]'
                        }`}>
                          {career.matchScore}%
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-[#4A5550]">{career.requiredSkills.slice(0, 2).join(' · ')}</span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-[#E28A3B] font-bold">{career.missingSkills[0]}</span>
                      </td>
                      <td className="py-4 px-4 text-[#4A5550]">
                        {career.topLocations[0]}
                      </td>
                      <td className="py-4 px-4 font-bold text-[#164B36]">
                        {career.avgSalary}
                      </td>
                      <td className="py-4 px-4 text-right">
                        <Link
                          to="/candidate/learning"
                          className="px-3.5 py-1.5 rounded bg-[#FAF9F5] hover:bg-[#F3F0E8] border border-[#E5E2DA] text-[#1D2421] font-bold text-xs transition-colors inline-flex items-center gap-1 shadow-subtle"
                        >
                          <span>View pathway</span>
                          <ArrowRight className="w-3 h-3 text-[#164B36]" />
                        </Link>
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
