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
  Star, 
  Sparkles, 
  TrendingUp, 
  CheckCircle2 
} from 'lucide-react';

export default function CareerRecommendationsPage() {
  return (
    <DashboardLayout role="candidate">
      <div className="space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 dark:bg-[#A78BFA]/10 border border-violet-200 dark:border-[#A78BFA]/25 text-violet-800 dark:text-[#A78BFA] text-xs font-semibold mb-2 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500 dark:bg-[#A78BFA] animate-pulse" />
              <span>CAREER TRAJECTORY INTELLIGENCE</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-[#F5F7FA] tracking-tight">
              Personalized Career Pathways
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-[#94A3B8] mt-1 font-mono">
              Personalized trajectories ranked by competency match score and live regional vacancy demand in Maharashtra.
            </p>
          </div>

          <Link
            to="/candidate/jobs"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#0284C7] to-[#7C3AED] dark:from-[#22D3EE] dark:to-[#A78BFA] text-white dark:text-[#070B10] text-xs font-bold transition-all shadow-md dark:shadow-glow-teal flex items-center gap-2 hover:opacity-90 shrink-0 self-start sm:self-auto"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Browse Matched Jobs</span>
          </Link>
        </div>

        {/* 3 Featured Career Pathway Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CAREER_RECOMMENDATIONS.map((career, idx) => {
            const isTop = idx === 0;

            return (
              <div
                key={career.id}
                className={`surface-card rounded-2xl p-6 flex flex-col justify-between group ${
                  isTop ? 'border-t-4 border-t-emerald-500 dark:border-t-[#4ADE80]' : 'border-t-4 border-t-violet-500 dark:border-t-[#A78BFA]'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 dark:bg-[#0D141B] text-slate-600 dark:text-[#94A3B8] border border-slate-200 dark:border-white/[0.06] font-mono">
                      {career.badge || career.category}
                    </span>
                    <span className={`text-2xl font-black font-mono ${isTop ? 'text-emerald-600 dark:text-[#4ADE80]' : 'text-violet-600 dark:text-[#A78BFA]'}`}>
                      {career.matchScore}%
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-[#F5F7FA] group-hover:text-sky-600 dark:group-hover:text-[#22D3EE] transition-colors">
                      {career.role}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-[#64748B] mt-1 font-mono">
                      {career.category} · {career.openingsInMH}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#0D141B] border border-slate-200 dark:border-white/[0.06] space-y-2 text-xs font-mono">
                    <div className="flex justify-between">
                      <span className="text-slate-400 dark:text-[#64748B]">Avg Package:</span>
                      <span className="text-emerald-600 dark:text-[#4ADE80] font-bold">{career.avgSalary}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 dark:text-[#64748B]">Key Hubs:</span>
                      <span className="text-slate-900 dark:text-[#F5F7FA] font-medium">{career.topLocations.join(', ')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 dark:text-[#64748B]">Primary Gap:</span>
                      <span className="text-amber-600 dark:text-[#F59E0B] font-bold">{career.missingSkills[0]}</span>
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] uppercase font-mono text-slate-400 dark:text-[#64748B] mb-2">Core Skills</div>
                    <div className="flex flex-wrap gap-1.5">
                      {career.requiredSkills.map((sk, i) => (
                        <span key={i} className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-[#0D141B] border border-slate-200 dark:border-white/[0.06] text-slate-600 dark:text-[#94A3B8]">
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between">
                  <span className="text-[10px] text-emerald-600 dark:text-[#4ADE80] font-mono font-bold flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600 dark:text-[#4ADE80]" /> {career.growthRating}
                  </span>
                  <Link
                    to="/candidate/learning"
                    className="px-3.5 py-1.5 rounded-md bg-slate-100 hover:bg-violet-50 dark:bg-white/[0.05] dark:hover:bg-[#A78BFA]/20 border border-slate-200 dark:border-white/[0.08] hover:border-violet-300 dark:hover:border-[#A78BFA]/30 text-xs font-bold text-slate-800 hover:text-violet-800 dark:text-[#F5F7FA] dark:hover:text-[#A78BFA] transition-all flex items-center gap-1.5 shadow-sm"
                  >
                    <span>View Track</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </DashboardLayout>
  );
}
