import React, { useState, useEffect } from 'react';
import { CheckCircle2, AlertCircle, Sparkles, TrendingUp } from 'lucide-react';

export default function SkillBar({ 
  name, 
  score = 80, 
  required = 85, 
  status = "Proficient", 
  showBenchmark = true 
}) {
  const [animatedScore, setAnimatedScore] = useState(0);
  const [animatedRequired, setAnimatedRequired] = useState(0);

  const isGap = score < required;
  const gapDiff = required - score;
  const isCritical = gapDiff > 20;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedScore(score);
      setAnimatedRequired(required);
    }, 100);
    return () => clearTimeout(timer);
  }, [score, required]);

  return (
    <div className="surface-card rounded-xl p-4 sm:p-4.5 transition-all">
      <div className="flex items-center justify-between gap-2 mb-2.5">
        <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-[#F5F7FA]">
          {name}
        </span>
        
        <div>
          {!isGap ? (
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 dark:text-[#4ADE80] bg-emerald-50 dark:bg-[#4ADE80]/10 border border-emerald-300 dark:border-[#4ADE80]/30 px-2.5 py-0.5 rounded-full font-mono">
              <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-[#4ADE80]" /> Met Benchmark ({score}%)
            </span>
          ) : isCritical ? (
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-rose-700 dark:text-[#FB7185] bg-rose-50 dark:bg-[#FB7185]/10 border border-rose-300 dark:border-[#FB7185]/30 px-2.5 py-0.5 rounded-full font-mono">
              <AlertCircle className="w-3 h-3 text-rose-600 dark:text-[#FB7185]" /> Critical Gap: -{gapDiff}% ({score}% / {required}%)
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-800 dark:text-[#F59E0B] bg-amber-50 dark:bg-[#F59E0B]/10 border border-amber-300 dark:border-[#F59E0B]/30 px-2.5 py-0.5 rounded-full font-mono">
              <AlertCircle className="w-3 h-3 text-amber-600 dark:text-[#F59E0B]" /> Deficit: -{gapDiff}% ({score}% / {required}%)
            </span>
          )}
        </div>
      </div>

      {/* Dual Horizontal Comparison Bars */}
      <div className="space-y-1.5 pt-1">
        {/* Candidate Bar */}
        <div className="flex items-center gap-3 text-xs">
          <span className="w-10 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-[#94A3B8] shrink-0 font-mono">YOU</span>
          <div className="flex-1 h-2 bg-slate-100 dark:bg-[#0D141B] rounded-full overflow-hidden p-0.5 border border-slate-200 dark:border-white/[0.04]">
            <div
              className={`h-full rounded-full transition-all duration-1000 ease-out ${
                !isGap 
                  ? 'bg-emerald-500 dark:bg-[#4ADE80]' 
                  : isCritical 
                  ? 'bg-rose-500 dark:bg-[#FB7185]' 
                  : 'bg-amber-500 dark:bg-[#F59E0B]'
              }`}
              style={{
                width: `${Math.min(animatedScore, 100)}%`,
              }}
            />
          </div>
          <span className="w-10 text-right font-mono font-bold text-slate-900 dark:text-[#F5F7FA] text-xs">
            {score}%
          </span>
        </div>

        {/* Target Benchmark Bar */}
        {showBenchmark && (
          <div className="flex items-center gap-3 text-xs">
            <span className="w-10 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-[#64748B] shrink-0 font-mono">ROLE</span>
            <div className="flex-1 h-1.5 bg-slate-100 dark:bg-[#0D141B] rounded-full overflow-hidden">
              <div
                className="h-full bg-slate-400 dark:bg-slate-600 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${Math.min(animatedRequired, 100)}%` }}
              />
            </div>
            <span className="w-10 text-right font-mono text-slate-400 dark:text-[#64748B] text-xs">
              {required}%
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
