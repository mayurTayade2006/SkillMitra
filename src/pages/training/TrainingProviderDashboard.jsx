import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { TRAINING_PROVIDER_STATS } from '../../data/mockData';
import { BookOpen, Users, Award, CheckCircle2, Plus, Download, Sparkles } from 'lucide-react';

export default function TrainingProviderDashboard() {
  const stats = TRAINING_PROVIDER_STATS;

  return (
    <DashboardLayout role="training">
      <div className="space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4ADE80]/10 border border-[#4ADE80]/25 text-[#4ADE80] text-xs font-semibold mb-2 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
              <span>ACCREDITED VOCATIONAL TRAINING PARTNER (VTP)</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#F5F7FA] tracking-tight">
              {stats.providerName}
            </h1>
            <p className="text-xs sm:text-sm text-[#94A3B8] mt-1 font-mono">
              Cohort lifecycle management, skill credentialing, and placement analytics.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#4ADE80] to-[#22D3EE] text-[#070B10] text-xs font-bold transition-all shadow-glow-teal flex items-center gap-2 hover:opacity-90 self-start sm:self-auto">
              <Plus className="w-3.5 h-3.5" />
              <span>Create New Cohort</span>
            </button>
          </div>
        </div>

        {/* 4 Metric Blocks */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="surface-card rounded-xl p-4 space-y-1 border-t-2 border-t-[#22D3EE]">
            <div className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider font-mono">Enrolled Trainees</div>
            <div className="text-2xl sm:text-3xl font-black text-[#F5F7FA] font-mono">{stats.studentsEnrolled.toLocaleString()}</div>
            <div className="text-[10px] text-[#64748B] font-mono">Across 8 active batches</div>
          </div>

          <div className="surface-card rounded-xl p-4 space-y-1 border-t-2 border-t-[#4ADE80]">
            <div className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider font-mono">Certified Passed</div>
            <div className="text-2xl sm:text-3xl font-black text-[#4ADE80] font-mono">{stats.studentsCompleted.toLocaleString()}</div>
            <div className="text-[10px] text-[#4ADE80] font-mono font-bold">NCVET Accredited</div>
          </div>

          <div className="surface-card rounded-xl p-4 space-y-1 border-t-2 border-t-[#A78BFA]">
            <div className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider font-mono">Placed in Jobs</div>
            <div className="text-2xl sm:text-3xl font-black text-[#A78BFA] font-mono">{stats.studentsEmployed.toLocaleString()}</div>
            <div className="text-[10px] text-[#64748B] font-mono">Avg {stats.averageSalary}</div>
          </div>

          <div className="surface-card rounded-xl p-4 space-y-1 border-t-2 border-t-[#F59E0B]">
            <div className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider font-mono">Placement Rate</div>
            <div className="text-2xl sm:text-3xl font-black text-[#F59E0B] font-mono">{stats.employmentRate}%</div>
            <div className="text-[10px] text-[#F59E0B] font-mono font-bold">State Rank #4</div>
          </div>
        </div>

        {/* Cohorts Table */}
        <div className="rounded-2xl bg-[#121B23] border border-white/[0.08] overflow-hidden">
          <div className="p-4 sm:p-5 border-b border-white/[0.06] flex items-center justify-between">
            <h3 className="text-xs font-bold text-[#F5F7FA] font-mono">
              Active Batches & Placement Outcomes
            </h3>
            <span className="text-xs text-[#4ADE80] font-mono font-bold">
              {stats.batches.length} Active Cohorts
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] text-left text-xs font-mono">
              <thead className="bg-[#0D141B] text-[#64748B] uppercase text-[10px] font-bold border-b border-white/[0.08]">
                <tr>
                  <th className="py-3.5 px-5">Cohort Program</th>
                  <th className="py-3.5 px-5">Students</th>
                  <th className="py-3.5 px-5">Completed</th>
                  <th className="py-3.5 px-5">Placed</th>
                  <th className="py-3.5 px-5">Placement Rate</th>
                  <th className="py-3.5 px-5">Status</th>
                  <th className="py-3.5 px-5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {stats.batches.map((batch, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-5">
                      <div className="font-bold text-[#F5F7FA]">{batch.name}</div>
                    </td>
                    <td className="py-3.5 px-5 text-[#94A3B8]">
                      {batch.students} Trainees
                    </td>
                    <td className="py-3.5 px-5 text-[#94A3B8]">
                      {batch.completed}
                    </td>
                    <td className="py-3.5 px-5 text-[#4ADE80] font-bold">
                      {batch.placed}
                    </td>
                    <td className="py-3.5 px-5">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#4ADE80]/10 text-[#4ADE80] border border-[#4ADE80]/30 font-bold text-xs">
                        {batch.rate}%
                      </span>
                    </td>
                    <td className="py-3.5 px-5">
                      <span className="px-2 py-0.2 rounded bg-[#0D141B] text-[#94A3B8] border border-white/[0.06] text-[10px]">
                        {batch.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-5 text-right">
                      <button className="px-3 py-1 rounded-md bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-[#F5F7FA] font-bold text-xs transition-all">
                        Manage
                      </button>
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
