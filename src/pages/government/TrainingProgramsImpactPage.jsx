import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { PROGRAM_IMPACT_DATA } from '../../data/mockData';
import { Award, CheckCircle2, TrendingUp, DollarSign, ArrowRight, Sparkles, Layers, Activity } from 'lucide-react';

export default function TrainingProgramsImpactPage() {
  const funnelSteps = [
    { label: "TRAINED", value: "50,000", sub: "100% Intake", color: "#0284C7" },
    { label: "CERTIFIED", value: "38,420", sub: "76.8% Pass Rate", color: "#16A36F" },
    { label: "JOB SEEKING", value: "32,100", sub: "Active on Portal", color: "#7C3AED" },
    { label: "INTERVIEWED", value: "28,400", sub: "Shortlisted", color: "#D97706" },
    { label: "EMPLOYED", value: "24,680", sub: "64.3% Absorption", color: "#16A36F" },
  ];

  return (
    <DashboardLayout role="government">
      <div className="space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 dark:bg-[#A78BFA]/10 border border-violet-200 dark:border-[#A78BFA]/25 text-violet-800 dark:text-[#A78BFA] text-xs font-semibold mb-2 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500 dark:bg-[#A78BFA] animate-pulse" />
              <span>SCHEME OUTCOME AUDITING</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-[#F5F7FA] tracking-tight">
              Training Program Efficacy & ROI
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-[#94A3B8] mt-1 font-mono">
              Comparative outcome auditing across central and state skilling initiatives in Maharashtra.
            </p>
          </div>

          <span className="px-3.5 py-1.5 rounded-lg bg-slate-100 dark:bg-[#0D141B] border border-slate-200 dark:border-white/[0.08] text-violet-800 dark:text-[#A78BFA] text-xs font-bold font-mono self-start md:self-auto shadow-sm">
            Cabinet Review Q3
          </span>
        </div>

        {/* 5-Stage Animated Funnel Flow */}
        <div className="surface-card rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-slate-900 dark:text-[#F5F7FA] font-mono flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-sky-600 dark:text-[#22D3EE]" />
              <span>Statewide Employment Absorption Funnel</span>
            </h3>
            <span className="text-xs text-emerald-700 dark:text-[#4ADE80] font-mono font-bold">Closed-Loop Metric</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-1">
            {funnelSteps.map((step, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-slate-50 dark:bg-[#0D141B] border border-slate-200 dark:border-white/[0.06] text-center transition-all border-t-2"
                style={{ borderTopColor: step.color }}
              >
                <div className="text-[10px] text-slate-500 dark:text-[#64748B] uppercase font-mono font-bold">{step.label}</div>
                <div className="text-2xl font-black font-mono mt-1" style={{ color: step.color }}>{step.value}</div>
                <div className="text-[10px] text-slate-600 dark:text-[#94A3B8] font-mono mt-0.5">{step.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Major Callout Banner */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-white to-sky-500/10 dark:from-[#F59E0B]/10 dark:via-[#121B23] dark:to-[#22D3EE]/10 border border-amber-300 dark:border-[#F59E0B]/30 shadow-sm dark:shadow-surface flex items-start gap-4 transition-colors">
          <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-[#F59E0B]/15 border border-amber-300 dark:border-[#F59E0B]/30 text-amber-800 dark:text-[#F59E0B] flex items-center justify-center shrink-0 font-bold">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-slate-900 dark:text-[#F5F7FA]">
              Scheme Performance Multiplier
            </h3>
            <p className="text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
              "Pramod Mahajan Kaushalya Vikas (PMKVY-MH) generates <strong className="text-emerald-700 dark:text-[#4ADE80]">1.7× stronger employment outcomes</strong> than general rural skilling schemes, driven by active corporate co-design and regional hiring hubs in Pune and Mumbai."
            </p>
          </div>
        </div>

        {/* Large Comparison Horizontal Bar Matrix */}
        <div className="surface-card rounded-2xl p-6 sm:p-7 space-y-4">
          <div className="flex items-center justify-between pb-3.5 border-b border-slate-200 dark:border-white/[0.06]">
            <h3 className="text-sm font-bold text-slate-900 dark:text-[#F5F7FA]">
              Flagship Skilling Schemes Ranked by Placement Outcome
            </h3>
            <span className="text-[11px] text-slate-400 dark:text-[#64748B] font-mono">Statewide Pass Benchmarks</span>
          </div>

          <div className="space-y-3.5">
            {PROGRAM_IMPACT_DATA.map((prog, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-[#0D141B] border border-slate-200 dark:border-white/[0.06] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-[#F5F7FA] text-sm">{prog.name}</span>
                    <span className="text-[11px] text-slate-500 dark:text-[#64748B] block font-mono mt-0.5">Focus: {prog.topDomain} · Avg Package: {prog.avgSalary}</span>
                  </div>
                  <span className="font-bold font-mono text-sm text-emerald-700 dark:text-[#4ADE80] px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-[#4ADE80]/10 border border-emerald-200 dark:border-[#4ADE80]/30">
                    {prog.placementRate}% Placed
                  </span>
                </div>

                <div className="w-full h-2 bg-slate-200 dark:bg-[#121B23] rounded-full overflow-hidden p-0.5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#0284C7] to-[#16A36F] dark:from-[#22D3EE] dark:to-[#4ADE80] transition-all duration-700"
                    style={{ width: `${prog.placementRate}%` }}
                  />
                </div>

                <div className="flex justify-between text-[10px] text-slate-500 dark:text-[#64748B] font-mono pt-0.5">
                  <span>Enrolled: {prog.enrolled.toLocaleString()}</span>
                  <span>Certified: {prog.certified.toLocaleString()}</span>
                  <span>Employed: {prog.employed.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
