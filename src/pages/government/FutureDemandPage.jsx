import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { FUTURE_SKILL_DEMAND_DATA } from '../../data/mockData';
import { TrendingUp, ArrowUpRight, Sparkles, Building2 } from 'lucide-react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  Legend 
} from 'recharts';

export default function FutureDemandPage() {
  const chartData = FUTURE_SKILL_DEMAND_DATA.map((s) => ({
    name: s.skill,
    current: s.currentDemand,
    projected: s.projected2026,
  }));

  return (
    <DashboardLayout role="government">
      <div className="space-y-7">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-[#E5E2DA]">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1D2421] tracking-tight">
                What should Maharashtra train for next?
              </h1>
              <span className="text-[10px] font-bold px-2 py-0.2 rounded bg-[#EBF2EE] text-[#164B36] border border-[#D1E0D7]">
                2025–2028 Projection
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#4A5550] mt-1">
              Predictive growth trajectories modeling industrial transformation and hiring forecasts across Maharashtra.
            </p>
          </div>

          <span className="px-3 py-1.5 rounded-md bg-[#FAF9F5] border border-[#E5E2DA] text-[#1D2421] text-xs font-bold self-start md:self-auto">
            Macro Model v2.4
          </span>
        </div>

        {/* Projection Chart */}
        <div className="p-6 sm:p-7 rounded-2xl bg-[#FFFFFF] border border-[#E5E2DA] shadow-card space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-[#1D2421]">
              Projected Workforce Demand Index vs Current Baseline
            </h3>
            <span className="text-xs text-[#789184]">Source: Maharashtra Industrial Hiring Survey</span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ECE9E1" vertical={false} />
                <XAxis dataKey="name" stroke="#789184" fontSize={9} tickLine={false} />
                <YAxis stroke="#789184" fontSize={11} tickLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#FFFFFF', borderColor: '#E5E2DA', borderRadius: '8px', fontSize: '11px' }}
                />
                <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                <Bar dataKey="current" name="Current Baseline Index" fill="#789184" radius={[4, 4, 0, 0]} />
                <Bar dataKey="projected" name="Projected 2026 Index" fill="#164B36" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Structured List of Skill Trends */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FUTURE_SKILL_DEMAND_DATA.map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E5E2DA] shadow-subtle space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-[#1D2421]">{item.skill}</span>
                <span className="inline-flex items-center text-xs font-bold text-[#164B36] bg-[#EBF2EE] px-2.5 py-0.5 rounded border border-[#D1E0D7]">
                  <ArrowUpRight className="w-3.5 h-3.5" /> {item.growth}
                </span>
              </div>
              <div className="text-xs text-[#789184]">
                Priority Urgency: <span className="text-[#E28A3B] font-bold">{item.urgency}</span>
              </div>
              <div className="text-xs text-[#4A5550]">
                Demand Index: <span className="text-[#164B36] font-bold font-mono">{item.currentDemand}% → {item.projected2026}%</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </DashboardLayout>
  );
}
