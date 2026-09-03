import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import SkillBar from '../../components/common/SkillBar';
import { TARGET_ROLES } from '../../data/mockData';
import { 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  BookOpen, 
  Sparkles, 
  Activity, 
  Layers, 
  Zap, 
  TrendingUp,
  Target
} from 'lucide-react';

export default function SkillIntelligencePage() {
  const [selectedRoleKey, setSelectedRoleKey] = useState("Data Analyst");

  const roleData = TARGET_ROLES[selectedRoleKey] || TARGET_ROLES["Data Analyst"];

  return (
    <DashboardLayout role="candidate">
      <div className="space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-cyan-50 dark:bg-[#22D3EE]/10 text-cyan-800 dark:text-[#22D3EE] border border-cyan-200 dark:border-[#22D3EE]/25 font-mono uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-[#22D3EE] inline-block mr-1.5 animate-pulse" />
                Live Competency Diagnostics
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-[#F5F7FA] tracking-tight mt-2">
              Where Your Skills Stand
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-[#94A3B8] mt-1 font-mono">
              Comparing your verified capabilities against current industry hiring criteria across Maharashtra.
            </p>
          </div>

          <Link
            to="/candidate/learning"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#0284C7] to-[#7C3AED] dark:from-[#22D3EE] dark:to-[#A78BFA] text-white dark:text-[#070B10] text-xs font-bold transition-all shadow-md dark:shadow-glow-teal flex items-center gap-2 hover:opacity-90 self-start md:self-auto"
          >
            <span>View Adaptive Roadmap</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Target Role Selector Tabs */}
        <div className="space-y-2.5">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-[#64748B] font-mono">
            Target Career Benchmark Profile
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            {Object.keys(TARGET_ROLES).map((roleKey) => {
              const item = TARGET_ROLES[roleKey];
              const isSelected = selectedRoleKey === roleKey;

              return (
                <button
                  key={roleKey}
                  onClick={() => setSelectedRoleKey(roleKey)}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'bg-white dark:bg-[#121B23] border-sky-300 dark:border-[#22D3EE]/40 text-slate-900 dark:text-[#F5F7FA] shadow-sm dark:shadow-surface border-l-4 border-l-sky-600 dark:border-l-[#22D3EE]'
                      : 'bg-slate-50/80 dark:bg-[#0D141B]/60 border-slate-200 dark:border-white/[0.06] hover:border-slate-300 dark:hover:border-white/[0.15] text-slate-600 dark:text-[#94A3B8]'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] text-slate-400 dark:text-[#64748B] mb-1 font-mono">
                    <span>{item.category}</span>
                    <span className="font-bold text-emerald-600 dark:text-[#4ADE80]">{item.overallMatch}% fit</span>
                  </div>
                  <div className="text-xs font-bold truncate text-slate-900 dark:text-[#F5F7FA]">
                    {item.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Grid: Left = Skills Comparison, Right = Recommendations & AI Insight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Horizontal Comparison Bars (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            <div className="surface-card rounded-2xl p-6 sm:p-7 space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/[0.06]">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-[#F5F7FA]">
                    Competency Matrix Comparison
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-[#64748B] font-mono">Your score vs role benchmark threshold in Maharashtra</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 dark:text-[#64748B] uppercase block font-mono">Market Package</span>
                  <span className="text-xs font-bold text-emerald-600 dark:text-[#4ADE80] font-mono">{roleData.salaryRange}</span>
                </div>
              </div>

              {/* Animated Horizontal Skill Bars List */}
              <div className="space-y-3">
                {roleData.currentSkills.map((skill, idx) => (
                  <SkillBar
                    key={idx}
                    name={skill.name}
                    score={skill.score}
                    required={skill.required}
                    status={skill.status}
                  />
                ))}
              </div>
            </div>

            {/* "Where to focus next" 3 Recommendations */}
            <div className="surface-card rounded-2xl p-6 space-y-4">
              <div className="text-xs font-bold text-slate-900 dark:text-[#F5F7FA] flex items-center gap-2 font-mono">
                <Zap className="w-4 h-4 text-amber-500 dark:text-[#F59E0B]" />
                <span>Priority Action Plan (3 High-Impact Skill Interventions):</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1 text-xs">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0D141B] border border-slate-200 dark:border-white/[0.06] hover:border-amber-400 dark:hover:border-[#F59E0B]/30 transition-all border-t-2 border-t-amber-500">
                  <span className="text-[10px] font-bold text-amber-700 dark:text-[#F59E0B] uppercase block font-mono">1. Priority Skill</span>
                  <div className="font-bold text-slate-900 dark:text-[#F5F7FA] mt-1">Advanced Power BI</div>
                  <div className="text-[10px] text-slate-500 dark:text-[#94A3B8] mt-0.5">DAX measures & dimensional modeling</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0D141B] border border-slate-200 dark:border-white/[0.06] hover:border-emerald-400 dark:hover:border-[#4ADE80]/30 transition-all border-t-2 border-t-emerald-500">
                  <span className="text-[10px] font-bold text-emerald-700 dark:text-[#4ADE80] uppercase block font-mono">2. Mathematical Core</span>
                  <div className="font-bold text-slate-900 dark:text-[#F5F7FA] mt-1">Applied Statistics</div>
                  <div className="text-[10px] text-slate-500 dark:text-[#94A3B8] mt-0.5">Hypothesis testing & regression</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0D141B] border border-slate-200 dark:border-white/[0.06] hover:border-sky-400 dark:hover:border-[#22D3EE]/30 transition-all border-t-2 border-t-sky-500">
                  <span className="text-[10px] font-bold text-sky-700 dark:text-[#22D3EE] uppercase block font-mono">3. Data Pipelines</span>
                  <div className="font-bold text-slate-900 dark:text-[#F5F7FA] mt-1">Python Pandas & ETL</div>
                  <div className="text-[10px] text-slate-500 dark:text-[#94A3B8] mt-0.5">Data wrangling & API ingest</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Overall Readiness & SkillMitra Insight Block (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Overall Fit Card */}
            <div className="surface-card rounded-2xl p-6 text-center space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-[#64748B] font-mono">
                Overall Role Readiness
              </span>
              
              <div className="text-5xl font-black font-mono text-emerald-600 dark:text-[#4ADE80]">
                {roleData.overallMatch}%
              </div>

              <div className="text-xs text-slate-600 dark:text-[#94A3B8]">
                Target: <strong className="text-slate-900 dark:text-[#F5F7FA]">{roleData.title}</strong>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-white/[0.06] text-xs text-slate-600 dark:text-[#94A3B8] flex justify-between font-mono">
                <span>With Gaps Bridged:</span>
                <strong className="text-emerald-600 dark:text-[#4ADE80]">94% Projected</strong>
              </div>
            </div>

            {/* SkillMitra Neural Insight Block */}
            <div className="surface-card rounded-2xl p-6 space-y-4 border-l-4 border-l-sky-600 dark:border-l-[#22D3EE]">
              <div className="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-[#22D3EE] flex items-center gap-2 font-mono">
                <Sparkles className="w-4 h-4 text-sky-600 dark:text-[#22D3EE]" />
                <span>SKILLMITRA AI REASONING</span>
              </div>

              {/* Animated AI Data Pulse Line */}
              <div className="h-0.5 w-full bg-gradient-to-r from-[#0284C7] via-[#7C3AED] to-[#16A36F] dark:from-[#22D3EE] dark:via-[#A78BFA] dark:to-[#4ADE80] animate-data-pulse rounded-full" />

              <p className="text-xs text-slate-800 dark:text-[#F5F7FA] leading-relaxed bg-slate-50 dark:bg-[#0D141B] p-4 rounded-xl border border-slate-200 dark:border-white/[0.06]">
                "{roleData.aiExplanation}"
              </p>

              <Link
                to="/candidate/learning"
                className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#0284C7] to-[#7C3AED] dark:from-[#22D3EE] dark:to-[#A78BFA] text-white dark:text-[#070B10] text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-md dark:shadow-glow-teal hover:opacity-90"
              >
                <BookOpen className="w-4 h-4" />
                <span>Launch Adaptive Pathway</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}
