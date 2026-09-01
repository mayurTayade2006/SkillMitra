import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { TRAINING_PROVIDER_STATS } from '../../data/mockData';
import { BookOpen, Users, Award, CheckCircle2, Plus, Download } from 'lucide-react';

export default function TrainingProviderDashboard() {
  const stats = TRAINING_PROVIDER_STATS;

  return (
    <DashboardLayout role="training">
      <div className="space-y-7">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#E5E2DA]">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1D2421] tracking-tight">
              Training Provider (VTP) Portal
            </h1>
            <p className="text-xs sm:text-sm text-[#4A5550] mt-1">
              {stats.providerName} · Cohort lifecycle and outcome management.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button className="px-4 py-2 rounded-md bg-[#164B36] hover:bg-[#113A2A] text-[#FAF9F5] text-xs font-bold transition-colors flex items-center gap-1.5 shadow-subtle self-start sm:self-auto">
              <Plus className="w-3.5 h-3.5" />
              <span>Create New Cohort</span>
            </button>
          </div>
        </div>

        {/* 4 Metric Blocks */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E5E2DA] shadow-subtle space-y-1">
            <div className="text-[10px] font-bold text-[#789184] uppercase tracking-wider">Enrolled Trainees</div>
            <div className="text-2xl sm:text-3xl font-black text-[#1D2421] font-sans">{stats.studentsEnrolled.toLocaleString()}</div>
            <div className="text-[11px] text-[#789184]">Across 8 active batches</div>
          </div>

          <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E5E2DA] shadow-subtle space-y-1">
            <div className="text-[10px] font-bold text-[#789184] uppercase tracking-wider">Certified Passed</div>
            <div className="text-2xl sm:text-3xl font-black text-[#164B36] font-sans">{stats.studentsCompleted.toLocaleString()}</div>
            <div className="text-[11px] text-[#164B36] font-bold">NCVET Accredited</div>
          </div>

          <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E5E2DA] shadow-subtle space-y-1">
            <div className="text-[10px] font-bold text-[#789184] uppercase tracking-wider">Placed in Jobs</div>
            <div className="text-2xl sm:text-3xl font-black text-[#164B36] font-sans">{stats.studentsEmployed.toLocaleString()}</div>
            <div className="text-[11px] text-[#789184]">Avg {stats.averageSalary}</div>
          </div>

          <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E5E2DA] shadow-subtle space-y-1">
            <div className="text-[10px] font-bold text-[#789184] uppercase tracking-wider">Placement Rate</div>
            <div className="text-2xl sm:text-3xl font-black text-[#E28A3B] font-sans">{stats.employmentRate}%</div>
            <div className="text-[11px] text-[#E28A3B] font-bold">State Rank #4</div>
          </div>
        </div>

        {/* Cohorts Table */}
        <div className="rounded-xl bg-[#FFFFFF] border border-[#E5E2DA] shadow-card overflow-hidden">
          <div className="p-4 sm:p-5 border-b border-[#ECE9E1] bg-[#FAF9F5] flex items-center justify-between">
            <h3 className="text-sm font-bold text-[#1D2421]">
              Active Batches & Placement Outcomes
            </h3>
            <span className="text-xs text-[#789184]">
              {stats.batches.length} Active Cohorts
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] text-left text-xs">
              <thead className="bg-[#F3F0E8] text-[#789184] uppercase text-[10px] font-bold border-b border-[#E5E2DA]">
                <tr>
                  <th className="py-3 px-4">Cohort Program</th>
                  <th className="py-3 px-4">Students</th>
                  <th className="py-3 px-4">Completed</th>
                  <th className="py-3 px-4">Placed</th>
                  <th className="py-3 px-4">Placement Rate</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ECE9E1]">
                {stats.batches.map((batch, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF9F5] transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-[#1D2421]">{batch.name}</div>
                    </td>
                    <td className="py-3.5 px-4 font-mono text-[#1D2421] font-semibold">
                      {batch.students} Trainees
                    </td>
                    <td className="py-3.5 px-4 font-mono text-[#1D2421]">
                      {batch.completed}
                    </td>
                    <td className="py-3.5 px-4 text-[#164B36] font-bold font-mono">
                      {batch.placed}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="px-2 py-0.5 rounded bg-[#EBF2EE] text-[#164B36] border border-[#D1E0D7] font-bold text-xs font-mono">
                        {batch.rate}%
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="px-2 py-0.5 rounded bg-[#FAF9F5] text-[#4A5550] border border-[#E5E2DA] text-[11px] font-semibold">
                        {batch.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button className="px-2.5 py-1 rounded bg-[#FAF9F5] hover:bg-[#F3F0E8] border border-[#E5E2DA] text-[#1D2421] font-bold text-xs transition-colors">
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
