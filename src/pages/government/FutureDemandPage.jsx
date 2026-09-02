import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { FUTURE_SKILL_DEMAND_DATA } from '../../data/mockData';
import { TrendingUp, ArrowUpRight, Sparkles, Building2, Zap, Layers } from 'lucide-react';
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
      <div className="space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22D3EE]/10 border border-[#22D3EE]/25 text-[#22D3EE] text-xs font-semibold mb-2 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
              <span>PREDICTIVE WORKFORCE FORECAST</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#F5F7FA] tracking-tight">
              Future Skill Demand Forecast (2025–2028)
            </h1>
            <p className="text-xs sm:text-sm text-[#94A3B8] mt-1 font-mono">
              Predictive growth trajectories modeling industrial transformation and hiring forecasts across Maharashtra.
            </p>
          </div>

          <span className="px-3.5 py-1.5 rounded-lg bg-[#0D141B] border border-white/[0.08] text-[#22D3EE] text-xs font-bold font-mono self-start md:self-auto">
            Neural Forecast Model v2.4
          </span>
        </div>

        {/* Projection Chart */}
        <div className="surface-card rounded-2xl p-6 sm:p-7 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-[#F5F7FA] font-mono">
              Projected Workforce Demand Index vs Current Baseline
            </h3>
            <span className="text-[11px] text-[#64748B] font-mono">Source: Maharashtra Industrial Survey</span>
          </div>

          <div className="h-72 w-full pt-3">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.04)" vertical={false} />
                <XAxis dataKey="name" stroke="#64748B" fontSize={10} tickLine={false} />
                <YAxis stroke="#64748B" fontSize={11} tickLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#121B23', borderColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px', fontSize: '11px', color: '#F5F7FA' }}
                />
                <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                <Bar dataKey="current" name="Current Baseline Index" fill="#64748B" radius={[4, 4, 0, 0]} />
                <Bar dataKey="projected" name="Projected 2026+ Index" fill="#22D3EE" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Structured List of Skill Trends */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FUTURE_SKILL_DEMAND_DATA.map((item, idx) => (
            <div key={idx} className="surface-card rounded-xl p-5 space-y-2.5 group">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-[#F5F7FA] group-hover:text-[#22D3EE] transition-colors">{item.skill}</span>
                <span className="inline-flex items-center text-xs font-bold text-[#4ADE80] bg-[#4ADE80]/10 px-2.5 py-0.5 rounded-full border border-[#4ADE80]/30 font-mono">
                  <ArrowUpRight className="w-3 h-3" /> {item.growth}
                </span>
              </div>
              <div className="text-xs text-[#94A3B8] font-mono">
                Priority Urgency: <span className="text-[#F59E0B] font-bold">{item.urgency}</span>
              </div>
              <div className="text-xs text-[#64748B] font-mono">
                Demand Index: <span className="text-[#22D3EE] font-bold">{item.currentDemand}% → {item.projected2026}%</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </DashboardLayout>
  );
}
