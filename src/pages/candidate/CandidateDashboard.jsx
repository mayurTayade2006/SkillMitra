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
  TrendingUp, 
  Award, 
  ShieldCheck,
  Zap,
  Target
} from 'lucide-react';

export default function CandidateDashboard() {
  const currentLearningStep = LEARNING_ROADMAP.find(s => s.status === "in-progress") || LEARNING_ROADMAP[1];
  const topJobs = JOB_MATCHES.slice(0, 3);

  return (
    <DashboardLayout role="candidate">
      <div className="space-y-8">
        
        {/* Top Welcome Greeting & Subtext */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-[#22D3EE]/10 border border-cyan-200 dark:border-[#22D3EE]/25 text-cyan-800 dark:text-[#22D3EE] text-xs font-semibold mb-2 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-[#22D3EE] animate-pulse" />
              <span>CANDIDATE INTELLIGENCE RADAR</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-[#F5F7FA] tracking-tight">
              Good morning, {CURRENT_USER.name.split(' ')[0]}.
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-[#94A3B8] mt-1 font-mono">
              You're <strong className="text-emerald-600 dark:text-[#4ADE80]">78% ready</strong> for your target role: <span className="text-slate-900 dark:text-[#F5F7FA] font-bold">{CURRENT_USER.targetRole}</span>. <span className="text-amber-600 dark:text-[#F59E0B] font-bold">3 skills</span> are holding you back.
            </p>
          </div>

          <Link
            to="/candidate/skills"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#0284C7] to-[#7C3AED] dark:from-[#22D3EE] dark:to-[#A78BFA] text-white dark:text-[#070B10] text-xs font-bold transition-all shadow-md dark:shadow-glow-teal flex items-center gap-2 hover:opacity-90 self-start sm:self-auto"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open Skill Diagnostics</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Asymmetrical Metric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Large Primary Readiness Block (7 Cols) */}
          <div className="lg:col-span-7 surface-card rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-center gap-6 justify-between relative overflow-hidden">
            <div className="space-y-3 text-center sm:text-left relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-[#64748B] block font-mono">
                Target Role Benchmark
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-[#F5F7FA]">
                {CURRENT_USER.targetRole}
              </h2>
              <p className="text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed max-w-sm">
                Benchmarked against live industrial criteria across Pune and Mumbai technology corridors.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 justify-center sm:justify-start">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-[#4ADE80]/10 text-emerald-800 dark:text-[#4ADE80] text-xs font-bold border border-emerald-200 dark:border-[#4ADE80]/30 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-[#4ADE80]" /> SQL & Schema Mastered
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-[#F59E0B]/10 text-amber-800 dark:text-[#F59E0B] text-xs font-bold border border-amber-200 dark:border-[#F59E0B]/30 font-mono">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-600 dark:text-[#F59E0B]" /> Power BI Critical Gap
                </span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col items-center relative z-10">
              <CircularProgress
                percentage={78}
                size={110}
                strokeWidth={9}
                color="emerald"
                label="Readiness"
                showPercentage={true}
              />
            </div>
          </div>

          {/* Grouped Stats Column (5 Cols) with Multi-Tone Functional Accents */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3.5">
            
            {/* Skill Gaps (Amber - Attention) */}
            <div className="surface-card rounded-xl p-4 flex items-center justify-between border-l-4 border-l-[#F59E0B]">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-[#64748B] font-mono">Skill Gaps</div>
                <div className="text-xs text-amber-600 dark:text-[#F59E0B] mt-0.5 font-medium font-mono">Power BI, Stats, Python</div>
              </div>
              <div className="text-2xl font-black font-mono text-amber-600 dark:text-[#F59E0B]">3</div>
            </div>

            {/* Job Matches (Teal - Opportunities) */}
            <div className="surface-card rounded-xl p-4 flex items-center justify-between border-l-4 border-l-[#0284C7] dark:border-l-[#22D3EE]">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-[#64748B] font-mono">Job Matches</div>
                <div className="text-xs text-sky-600 dark:text-[#22D3EE] mt-0.5 font-medium font-mono">94% Max Match in Pune</div>
              </div>
              <div className="text-2xl font-black font-mono text-sky-600 dark:text-[#22D3EE]">24</div>
            </div>

            {/* Learning Progress (Violet - Growth) */}
            <div className="surface-card rounded-xl p-4 flex items-center justify-between border-l-4 border-l-[#7C3AED] dark:border-l-[#A78BFA]">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-[#64748B] font-mono">Learning Progress</div>
                <div className="text-xs text-violet-600 dark:text-[#A78BFA] mt-0.5 font-mono">Stage 2 of 6 Active</div>
              </div>
              <div className="text-2xl font-black font-mono text-violet-600 dark:text-[#A78BFA]">64%</div>
            </div>

          </div>

        </div>

        {/* Personalized "Your Next Best Move" AI Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-white to-sky-500/10 dark:from-[#F59E0B]/10 dark:via-[#121B23] dark:to-[#22D3EE]/10 border border-amber-300 dark:border-[#F59E0B]/30 shadow-sm dark:shadow-surface flex flex-col md:flex-row items-start md:items-center justify-between gap-5 transition-colors">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-[#F59E0B] px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-[#F59E0B]/15 border border-amber-300 dark:border-[#F59E0B]/30 font-mono">
                AI Next Best Move
              </span>
              <span className="text-xs text-emerald-700 dark:text-[#4ADE80] font-mono font-bold">+12% Projected Readiness</span>
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-[#F5F7FA]">
              Complete Advanced Power BI DAX Modeling Track
            </h3>
            <p className="text-xs text-slate-600 dark:text-[#94A3B8] max-w-2xl leading-relaxed">
              "3 skills are holding you back. You're closer than you think — bridging Power BI DAX will unlock 14 more high-match opportunities in Pune and Mumbai."
            </p>
          </div>

          <Link
            to="/candidate/learning"
            className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs transition-colors flex items-center gap-2 shrink-0 shadow-sm"
          >
            <span>Resume Module</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Open Recommended Jobs Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-[#F5F7FA]">
                Recommended Job Matches in Maharashtra
              </h3>
              <p className="text-xs text-slate-500 dark:text-[#64748B] font-mono">Verified positions matching your assessed skill graph</p>
            </div>

            <Link to="/candidate/jobs" className="text-xs font-bold text-sky-600 dark:text-[#22D3EE] hover:underline flex items-center gap-1 font-mono">
              View all 24 openings <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#121B23] shadow-sm transition-colors">
            <table className="w-full min-w-[580px] text-left text-xs font-mono">
              <thead className="bg-slate-50 dark:bg-[#0D141B] text-slate-500 dark:text-[#64748B] uppercase text-[10px] font-bold border-b border-slate-200 dark:border-white/[0.08]">
                <tr>
                  <th className="py-3.5 px-5">Role & Company</th>
                  <th className="py-3.5 px-5">Location</th>
                  <th className="py-3.5 px-5">Compensation</th>
                  <th className="py-3.5 px-5">Match Index</th>
                  <th className="py-3.5 px-5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/[0.04]">
                {topJobs.map((job) => (
                  <tr key={job.id} className="hover:bg-slate-50/80 dark:hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-5">
                      <div className="font-bold text-slate-900 dark:text-[#F5F7FA] text-xs">{job.title}</div>
                      <div className="text-[11px] text-slate-500 dark:text-[#94A3B8]">{job.company}</div>
                    </td>
                    <td className="py-3.5 px-5 text-slate-600 dark:text-[#94A3B8]">{job.location}</td>
                    <td className="py-3.5 px-5 font-bold text-emerald-600 dark:text-[#4ADE80]">{job.salary}</td>
                    <td className="py-3.5 px-5">
                      <span className="px-2.5 py-0.5 rounded-full bg-sky-50 dark:bg-[#22D3EE]/10 text-sky-800 dark:text-[#22D3EE] border border-sky-200 dark:border-[#22D3EE]/30 font-bold text-[11px]">
                        {job.matchScore}% Fit
                      </span>
                    </td>
                    <td className="py-3.5 px-5 text-right">
                      <Link
                        to="/candidate/jobs"
                        className="px-3 py-1 rounded-md bg-slate-100 hover:bg-sky-50 dark:bg-white/[0.05] dark:hover:bg-[#22D3EE]/20 border border-slate-200 dark:border-white/[0.08] hover:border-sky-300 dark:hover:border-[#22D3EE]/30 text-slate-800 hover:text-sky-800 dark:text-[#F5F7FA] dark:hover:text-[#22D3EE] font-bold text-xs transition-all shadow-sm"
                      >
                        Apply Now
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
