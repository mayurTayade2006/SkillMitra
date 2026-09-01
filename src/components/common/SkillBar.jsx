import React from 'react';
import { CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';

export default function SkillBar({ 
  name, 
  score = 80, 
  required = 85, 
  status = "Proficient", 
  showBenchmark = true 
}) {
  const isGap = score < required;
  const gapDiff = required - score;

  return (
    <div className="p-4 rounded-lg bg-[#FFFFFF] border border-[#E5E2DA] shadow-subtle hover:border-[#789184] transition-colors">
      <div className="flex items-center justify-between gap-2 mb-2.5">
        <span className="text-xs sm:text-sm font-bold text-[#1D2421]">{name}</span>
        
        <div>
          {!isGap ? (
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#164B36] bg-[#EBF2EE] border border-[#D1E0D7] px-2.5 py-0.5 rounded">
              <CheckCircle2 className="w-3 h-3" /> Met Benchmark ({score}%)
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#E28A3B] bg-[#FDF4EC] border border-[#F8DCBE] px-2.5 py-0.5 rounded">
              <AlertCircle className="w-3 h-3" /> Gap: -{gapDiff}% ({score}% / {required}%)
            </span>
          )}
        </div>
      </div>

      {/* Dual Horizontal Comparison Bars */}
      <div className="space-y-1.5 pt-1">
        {/* Candidate Bar */}
        <div className="flex items-center gap-2 text-xs">
          <span className="w-12 text-[10px] font-bold uppercase text-[#789184] shrink-0">YOU</span>
          <div className="flex-1 h-2 bg-[#F3F0E8] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${Math.min(score, 100)}%`,
                backgroundColor: isGap ? '#E28A3B' : '#164B36',
              }}
            />
          </div>
          <span className="w-10 text-right font-mono font-bold text-[#1D2421] text-xs">
            {score}%
          </span>
        </div>

        {/* Target Benchmark Bar */}
        {showBenchmark && (
          <div className="flex items-center gap-2 text-xs">
            <span className="w-12 text-[10px] font-bold uppercase text-[#789184] shrink-0">ROLE</span>
            <div className="flex-1 h-2 bg-[#F3F0E8] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#789184] rounded-full transition-all duration-500 ease-out"
                style={{ width: `${Math.min(required, 100)}%` }}
              />
            </div>
            <span className="w-10 text-right font-mono text-[#789184] text-xs">
              {required}%
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
