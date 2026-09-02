import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { PROGRAM_IMPACT_DATA } from '../../data/mockData';
import { Award, CheckCircle2, TrendingUp, DollarSign, ArrowRight, Sparkles, Layers, Activity } from 'lucide-react';

export default function TrainingProgramsImpactPage() {
  const funnelSteps = [
    { label: "TRAINED", value: "50,000", sub: "100% Intake", color: "#22D3EE" },
    { label: "CERTIFIED", value: "38,420", sub: "76.8% Pass Rate", color: "#4ADE80" },
    { label: "JOB SEEKING", value: "32,100", sub: "Active on Portal", color: "#A78BFA" },
    { label: "INTERVIEWED", value: "28,400", sub: "Shortlisted", color: "#F59E0B" },
    { label: "EMPLOYED", value: "24,680", sub: "64.3% Absorption", color: "#4ADE80" },
  ];

  return (
    <DashboardLayout role="government">
      <div className="space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A78BFA]/10 border border-[#A78BFA]/25 text-[#A78BFA] text-xs font-semibold mb-2 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] animate-pulse" />
              <span>SCHEME OUTCOME AUDITING</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#F5F7FA] tracking-tight">
              Training Program Efficacy & ROI
            </h1>
            <p className="text-xs sm:text-sm text-[#94A3B8] mt-1 font-mono">
              Comparative outcome auditing across central and state skilling initiatives in Maharashtra.
            </p>
          </div>

          <span className="px-3.5 py-1.5 rounded-lg bg-[#0D141B] border border-white/[0.08] text-[#A78BFA] text-xs font-bold font-mono self-start md:self-auto">
            Cabinet Review Q3
          </span>
        </div>

        {/* 5-Stage Animated Funnel Flow */}
        <div className="surface-card rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-[#F5F7FA] font-mono flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-[#22D3EE]" />
              <span>Statewide Employment Absorption Funnel</span>
            </h3>
            <span className="text-xs text-[#4ADE80] font-mono font-bold">Closed-Loop Metric</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-1">
            {funnelSteps.map((step, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-[#0D141B] border border-white/[0.06] text-center transition-all border-t-2"
                style={{ borderTopColor: step.color }}
              >
                <div className="text-[10px] text-[#64748B] uppercase font-mono font-bold">{step.label}</div>
                <div className="text-2xl font-black font-mono mt-1" style={{ color: step.color }}>{step.value}</div>
                <div className="text-[10px] text-[#94A3B8] font-mono mt-0.5">{step.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Major Callout Banner */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-[#F59E0B]/10 via-[#121B23] to-[#22D3EE]/10 border border-[#F59E0B]/30 shadow-surface flex items-start gap-4">
          <div className="w-9 h-9 rounded-xl bg-[#F59E0B]/15 border border-[#F59E0B]/30 text-[#F59E0B] flex items-center justify-center shrink-0 font-bold">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-[#F5F7FA]">
              Scheme Performance Multiplier
            </h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              "Pramod Mahajan Kaushalya Vikas (PMKVY-MH) generates <strong className="text-[#4ADE80]">1.7× stronger employment outcomes</strong> than general rural skilling schemes, driven by active corporate co-design and regional hiring hubs in Pune and Mumbai."
            </p>
          </div>
        </div>

        {/* Large Comparison Horizontal Bar Matrix */}
        <div className="surface-card rounded-2xl p-6 sm:p-7 space-y-4">
          <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.06]">
            <h3 className="text-sm font-bold text-[#F5F7FA]">
              Flagship Skilling Schemes Ranked by Placement Outcome
            </h3>
            <span className="text-[11px] text-[#64748B] font-mono">Statewide Pass Benchmarks</span>
          </div>

          <div className="space-y-3.5">
            {PROGRAM_IMPACT_DATA.map((prog, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#0D141B] border border-white/[0.06] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-[#F5F7FA] text-sm">{prog.name}</span>
                    <span className="text-[11px] text-[#64748B] block font-mono mt-0.5">Focus: {prog.topDomain} · Avg Package: {prog.avgSalary}</span>
                  </div>
                  <span className="font-bold font-mono text-sm text-[#4ADE80] px-2.5 py-0.5 rounded-full bg-[#4ADE80]/10 border border-[#4ADE80]/30">
                    {prog.placementRate}% Placed
                  </span>
                </div>

                <div className="w-full h-2 bg-[#121B23] rounded-full overflow-hidden p-0.5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#22D3EE] to-[#4ADE80] transition-all duration-700"
                    style={{ width: `${prog.placementRate}%` }}
                  />
                </div>

                <div className="flex justify-between text-[10px] text-[#64748B] font-mono pt-0.5">
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
