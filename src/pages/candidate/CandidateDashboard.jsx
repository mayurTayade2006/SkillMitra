import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import CircularProgress from '../../components/common/CircularProgress';
import { 
  CURRENT_USER, 
  CAREER_RECOMMENDATIONS, 
  LEARNING_ROADMAP, 
  JOB_MATCHES 
} from '../../data/mockData';
import { 
  ArrowRight, 
  Briefcase, 
  BookOpen, 
  MapPin, 
  DollarSign, 
  ChevronRight,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  TrendingUp
} from 'lucide-react';

export default function CandidateDashboard() {
  const currentLearningStep = LEARNING_ROADMAP.find(s => s.status === "in-progress") || LEARNING_ROADMAP[1];
  const topJobs = JOB_MATCHES.slice(0, 3);

  return (
    <DashboardLayout role="candidate">
      <div className="space-y-7">
        
        {/* Top Welcome Greeting & Subtext */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#E5E2DA]">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1D2421] tracking-tight">
              Good morning, {CURRENT_USER.name.split(' ')[0]}.
            </h1>
            <p className="text-xs sm:text-sm text-[#4A5550] mt-1">
              You're <strong className="text-[#164B36]">78% ready</strong> for your target role — <span className="text-[#E28A3B] font-semibold">3 skills</span> are holding you back.
            </p>
          </div>

          <Link
            to="/candidate/skills"
            className="px-4 py-2 rounded-md bg-[#164B36] hover:bg-[#113A2A] text-[#FAF9F5] text-xs font-bold transition-colors flex items-center gap-1.5 shadow-subtle self-start sm:self-auto"
          >
            <span>View Skill Assessment</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Asymmetrical Metric Composition (Not four identical cards!) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Large Primary Readiness Block (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-7 rounded-2xl bg-[#FFFFFF] border border-[#E5E2DA] shadow-card flex flex-col sm:flex-row items-center gap-6 justify-between">
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#789184] block">
                Target Role Benchmark
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#1D2421]">
                {CURRENT_USER.targetRole}
              </h2>
              <p className="text-xs text-[#4A5550] leading-relaxed max-w-sm">
                Based on active industrial criteria across Pune and Mumbai tech corridors.
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF2EE] text-[#164B36] text-xs font-bold border border-[#D1E0D7]">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Core SQL & Schema Mastered
                </span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col items-center">
              <CircularProgress
                percentage={78}
                size={110}
                strokeWidth={9}
                color="forest"
                label="Readiness"
                showPercentage={true}
              />
            </div>
          </div>

          {/* Grouped Stats Column (5 Cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
            
            {/* Skill Gaps */}
            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E5E2DA] shadow-subtle flex items-center justify-between">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#789184]">Skill Gaps</div>
                <div className="text-xs text-[#4A5550] mt-0.5">Power BI, Stats, Python</div>
              </div>
              <div className="text-2xl font-black font-sans text-[#E28A3B]">3</div>
            </div>

            {/* Job Matches */}
            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E5E2DA] shadow-subtle flex items-center justify-between">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#789184]">Job Matches</div>
                <div className="text-xs text-[#4A5550] mt-0.5">Highest match: 94% in Pune</div>
              </div>
              <div className="text-2xl font-black font-sans text-[#164B36]">24</div>
            </div>

            {/* Learning Progress */}
            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E5E2DA] shadow-subtle flex items-center justify-between">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#789184]">Learning Progress</div>
                <div className="text-xs text-[#4A5550] mt-0.5">Stage 2 of 6 in progress</div>
              </div>
              <div className="text-2xl font-black font-sans text-[#1D2421]">64%</div>
            </div>

          </div>

        </div>

        {/* Personalized "Your Next Best Move" Action Banner */}
        <div className="p-5 sm:p-6 rounded-xl bg-[#FDF4EC] border border-[#F8DCBE] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-subtle">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#E28A3B] block">
              Personalized Career Recommendation
            </span>
            <h3 className="text-base font-bold text-[#1D2421]">
              Your next best move: Complete Advanced Power BI (+12% readiness)
            </h3>
            <p className="text-xs text-[#4A5550] max-w-2xl leading-relaxed">
              "3 skills are holding you back. You're closer than you think — bridging Power BI DAX will unlock 14 more high-match opportunities."
            </p>
          </div>

          <Link
            to="/candidate/learning"
            className="px-4 py-2 rounded-md bg-[#E28A3B] hover:bg-[#CD782B] text-white font-bold text-xs transition-colors flex items-center gap-1.5 shadow-subtle shrink-0"
          >
            <span>Resume Module</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Open Recommended Jobs Section */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-[#1D2421]">
                Recommended Job Matches in Maharashtra
              </h3>
              <p className="text-xs text-[#789184]">Verified positions matching your assessed skill graph</p>
            </div>

            <Link to="/candidate/jobs" className="text-xs font-bold text-[#164B36] hover:underline flex items-center gap-1">
              View all 24 openings <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#E5E2DA] bg-[#FFFFFF] shadow-subtle">
            <table className="w-full min-w-[580px] text-left text-xs">
              <thead className="bg-[#F3F0E8] text-[#789184] uppercase text-[10px] font-bold border-b border-[#E5E2DA]">
                <tr>
                  <th className="py-3 px-4">Role & Company</th>
                  <th className="py-3 px-4">Location</th>
                  <th className="py-3 px-4">Package</th>
                  <th className="py-3 px-4">Match</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ECE9E1]">
                {topJobs.map((job) => (
                  <tr key={job.id} className="hover:bg-[#FAF9F5] transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-[#1D2421] text-xs">{job.title}</div>
                      <div className="text-[11px] text-[#789184]">{job.company}</div>
                    </td>
                    <td className="py-3.5 px-4 text-[#4A5550]">{job.location}</td>
                    <td className="py-3.5 px-4 font-bold text-[#164B36]">{job.salary}</td>
                    <td className="py-3.5 px-4">
                      <span className="px-2 py-0.5 rounded bg-[#EBF2EE] text-[#164B36] border border-[#D1E0D7] font-bold text-[11px] font-mono">
                        {job.matchScore}% Match
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <Link
                        to="/candidate/jobs"
                        className="px-3 py-1 rounded bg-[#FAF9F5] hover:bg-[#F3F0E8] border border-[#E5E2DA] text-[#1D2421] font-bold text-xs transition-colors"
                      >
                        Apply
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
