import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { PROGRAM_IMPACT_DATA } from '../../data/mockData';
import { Award, CheckCircle2, TrendingUp, DollarSign, ArrowRight, Sparkles } from 'lucide-react';

export default function TrainingProgramsImpactPage() {
  return (
    <DashboardLayout role="government">
      <div className="space-y-7">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-[#E5E2DA]">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1D2421] tracking-tight">
              Training program efficacy & ROI
            </h1>
            <p className="text-xs sm:text-sm text-[#4A5550] mt-1">
              Comparative outcome auditing across central and state skilling initiatives in Maharashtra.
            </p>
          </div>

          <span className="px-3 py-1.5 rounded-md bg-[#FAF9F5] border border-[#E5E2DA] text-[#1D2421] text-xs font-bold self-start md:self-auto">
            Cabinet Review
          </span>
        </div>

        {/* Major Callout Banner: Program A generates 1.7x stronger outcomes than Program C */}
        <div className="p-6 rounded-2xl bg-[#FDF4EC] border border-[#F8DCBE] shadow-subtle flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#E28A3B] text-white flex items-center justify-center shrink-0 font-bold">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-[#1D2421]">
              Scheme Performance Multiplier
            </h3>
            <p className="text-xs sm:text-sm text-[#4A5550] leading-relaxed">
              "Pramod Mahajan Kaushalya Vikas (PMKVY-MH) generates <strong>1.7× stronger employment outcomes</strong> than general rural skilling schemes, driven by active corporate co-design."
            </p>
          </div>
        </div>

        {/* Large Comparison Horizontal Bar Matrix */}
        <div className="p-6 sm:p-7 rounded-2xl bg-[#FFFFFF] border border-[#E5E2DA] shadow-card space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-[#ECE9E1]">
            <h3 className="text-sm font-bold text-[#1D2421]">
              Flagship Skilling Schemes Ranked by Placement Outcome
            </h3>
            <span className="text-xs text-[#789184]">Statewide Pass Benchmarks</span>
          </div>

          <div className="space-y-4">
            {PROGRAM_IMPACT_DATA.map((prog, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E5E2DA] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-[#1D2421] text-sm">{prog.name}</span>
                    <span className="text-[11px] text-[#789184] block">Focus: {prog.topDomain} · Avg Package: {prog.avgSalary}</span>
                  </div>
                  <span className="font-bold font-mono text-sm text-[#164B36]">
                    {prog.placementRate}% Placed
                  </span>
                </div>

                <div className="w-full h-3 bg-[#E5E2DA] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#164B36] transition-all duration-500"
                    style={{ width: `${prog.placementRate}%` }}
                  />
                </div>

                <div className="flex justify-between text-[10px] text-[#789184] font-mono">
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
