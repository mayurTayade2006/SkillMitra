import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import MaharashtraMapSVG from '../../components/common/MaharashtraMapSVG';
import { useTheme } from '../../context/ThemeContext';
import { 
  GOV_METRICS, 
  PROGRAM_IMPACT_DATA, 
  EMPLOYMENT_TIMELINE_DATA,
  MAHARASHTRA_DISTRICTS 
} from '../../data/mockData';
import { 
  Building2, 
  Users, 
  Award, 
  Briefcase, 
  TrendingUp, 
  MapPin, 
  ArrowRight, 
  Download, 
  CheckCircle2, 
  Sparkles, 
  Activity 
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  Legend 
} from 'recharts';

export default function GovernmentDashboard() {
  const [selectedDistrict, setSelectedDistrict] = useState("Pune");
  const { isDark } = useTheme();
  const currentDistrictData = MAHARASHTRA_DISTRICTS[selectedDistrict] || MAHARASHTRA_DISTRICTS["Pune"];

  const tooltipStyle = isDark ? {
    backgroundColor: '#121B23',
    borderColor: 'rgba(255, 255, 255, 0.12)',
    color: '#F5F7FA',
    borderRadius: '10px',
    fontSize: '11px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.5)'
  } : {
    backgroundColor: '#FFFFFF',
    borderColor: '#E2E8F0',
    color: '#0F172A',
    borderRadius: '10px',
    fontSize: '11px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
  };

  const gridStroke = isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(15, 23, 42, 0.06)";

  return (
    <DashboardLayout role="government">
      <div className="space-y-8">
        
        {/* EXECUTIVE HERO SECTION */}
        <div className="surface-card rounded-2xl p-6 sm:p-8 space-y-6 border-t-4 border-t-sky-500 dark:border-t-[#22D3EE]">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-200 dark:border-white/[0.06]">
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-[#F59E0B] px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-[#F59E0B]/10 border border-amber-300 dark:border-[#F59E0B]/30 font-mono">
                State Skilling Mission · Maharashtra GovTech
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-[#F5F7FA] tracking-tight">
                Statewide Skill & Employment Intelligence
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-[#94A3B8] max-w-2xl font-mono">
                Real-time tracking of skilling cohorts, industrial absorption, and employment placement across all 36 districts.
              </p>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <button className="px-3.5 py-1.5 rounded-lg bg-slate-100 dark:bg-[#0D141B] hover:bg-slate-200 dark:hover:bg-white/[0.06] border border-slate-200 dark:border-white/[0.08] text-xs font-bold text-slate-800 dark:text-[#F5F7FA] transition-all flex items-center gap-1.5 font-mono shadow-sm">
                <Download className="w-3.5 h-3.5 text-sky-600 dark:text-[#22D3EE]" />
                <span>Export Brief</span>
              </button>
              <Link
                to="/government/skills"
                className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-[#0284C7] to-[#7C3AED] dark:from-[#22D3EE] dark:to-[#A78BFA] text-white dark:text-[#070B10] text-xs font-bold transition-all shadow-md dark:shadow-glow-teal flex items-center gap-1.5 hover:opacity-90"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>District Map</span>
              </Link>
            </div>
          </div>

          {/* Top 4 Key Numerical Metrics (Multi-Tone) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0D141B] border border-slate-200 dark:border-white/[0.06] space-y-1 border-t-2 border-t-sky-500 dark:border-t-[#22D3EE]">
              <div className="text-3xl sm:text-4xl font-black font-mono text-slate-900 dark:text-[#F5F7FA]">
                50,000
              </div>
              <div className="text-xs font-bold text-sky-700 dark:text-[#22D3EE] uppercase tracking-wider font-mono">Candidates Trained</div>
              <div className="text-[10px] text-slate-400 dark:text-[#64748B] font-mono">Across 36 Districts</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0D141B] border border-slate-200 dark:border-white/[0.06] space-y-1 border-t-2 border-t-emerald-500 dark:border-t-[#4ADE80]">
              <div className="text-3xl sm:text-4xl font-black font-mono text-emerald-600 dark:text-[#4ADE80]">
                38,420
              </div>
              <div className="text-xs font-bold text-emerald-700 dark:text-[#4ADE80] uppercase tracking-wider font-mono">Certified Passed</div>
              <div className="text-[10px] text-slate-400 dark:text-[#64748B] font-mono">76.8% Pass Rate</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0D141B] border border-slate-200 dark:border-white/[0.06] space-y-1 border-t-2 border-t-violet-500 dark:border-t-[#A78BFA]">
              <div className="text-3xl sm:text-4xl font-black font-mono text-violet-600 dark:text-[#A78BFA]">
                24,680
              </div>
              <div className="text-xs font-bold text-violet-700 dark:text-[#A78BFA] uppercase tracking-wider font-mono">Employed in Industry</div>
              <div className="text-[10px] text-slate-400 dark:text-[#64748B] font-mono">Avg ₹4.85 LPA Package</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0D141B] border border-slate-200 dark:border-white/[0.06] space-y-1 border-t-2 border-t-amber-500 dark:border-t-[#F59E0B]">
              <div className="text-3xl sm:text-4xl font-black font-mono text-amber-600 dark:text-[#F59E0B]">
                64.3%
              </div>
              <div className="text-xs font-bold text-amber-700 dark:text-[#F59E0B] uppercase tracking-wider font-mono">Employment Rate</div>
              <div className="text-[10px] text-slate-400 dark:text-[#64748B] font-mono">+8.4% YoY Gain</div>
            </div>
          </div>

          {/* Charts Embedded on Surface */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 border-t border-slate-200 dark:border-white/[0.06]">
            
            {/* Chart 1: Placement Outcome Progression */}
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-[#0D141B] border border-slate-200 dark:border-white/[0.06] space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="text-xs font-bold text-slate-900 dark:text-[#F5F7FA] font-mono">Quarterly Outcome Trajectory</h3>
                <span className="text-[11px] text-slate-400 dark:text-[#64748B] font-mono">2024–2025</span>
              </div>

              <div className="h-60 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={EMPLOYMENT_TIMELINE_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorTrained" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={isDark ? "#22D3EE" : "#0284C7"} stopOpacity={0.4}/>
                        <stop offset="95%" stopColor={isDark ? "#22D3EE" : "#0284C7"} stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorPlaced" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={isDark ? "#4ADE80" : "#059669"} stopOpacity={0.6}/>
                        <stop offset="95%" stopColor={isDark ? "#4ADE80" : "#059669"} stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} vertical={false} />
                    <XAxis dataKey="quarter" stroke={isDark ? "#64748B" : "#94A3B8"} fontSize={10} tickLine={false} />
                    <YAxis stroke={isDark ? "#64748B" : "#94A3B8"} fontSize={10} tickLine={false} />
                    <Tooltip contentStyle={tooltipStyle} />
                    <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
                    <Area type="monotone" dataKey="candidatesTrained" name="Trained" stroke={isDark ? "#22D3EE" : "#0284C7"} fill="url(#colorTrained)" strokeWidth={2} />
                    <Area type="monotone" dataKey="placed" name="Placed" stroke={isDark ? "#4ADE80" : "#059669"} fill="url(#colorPlaced)" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Chart 2: Scheme ROI Comparison */}
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-[#0D141B] border border-slate-200 dark:border-white/[0.06] space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="text-xs font-bold text-slate-900 dark:text-[#F5F7FA] font-mono">Scheme Placement Conversion (%)</h3>
                <span className="text-[11px] text-slate-400 dark:text-[#64748B] font-mono">Comparative ROI</span>
              </div>

              <div className="h-60 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={PROGRAM_IMPACT_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} vertical={false} />
                    <XAxis dataKey="name" stroke={isDark ? "#64748B" : "#94A3B8"} fontSize={9} tickLine={false} />
                    <YAxis stroke={isDark ? "#64748B" : "#94A3B8"} fontSize={10} tickLine={false} />
                    <Tooltip contentStyle={tooltipStyle} />
                    <Bar dataKey="placementRate" name="Placement Rate (%)" fill={isDark ? "#A78BFA" : "#7C3AED"} radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>

        </div>

        {/* SECTION 2: MAP & DISTRICT INTELLIGENCE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Map (8 Cols) */}
          <div className="lg:col-span-8">
            <MaharashtraMapSVG
              selectedDistrict={selectedDistrict}
              onSelectDistrict={setSelectedDistrict}
            />
          </div>

          {/* Selected District Snapshot (4 Cols) */}
          <div className="lg:col-span-4 surface-card rounded-2xl p-6 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-sky-600 dark:text-[#22D3EE]" />
                  <h3 className="text-base font-bold text-slate-900 dark:text-[#F5F7FA]">{currentDistrictData.name} Hub</h3>
                </div>
                <span className="px-2.5 py-0.5 rounded bg-emerald-50 dark:bg-[#4ADE80]/10 text-emerald-800 dark:text-[#4ADE80] border border-emerald-200 dark:border-[#4ADE80]/30 text-xs font-bold font-mono">
                  {currentDistrictData.status}
                </span>
              </div>

              <div className="mt-4 space-y-2.5 text-xs font-mono">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0D141B] border border-slate-200 dark:border-white/[0.06] flex justify-between items-center">
                  <span className="text-slate-500 dark:text-[#94A3B8]">Trained Youth:</span>
                  <span className="font-extrabold text-sm text-slate-900 dark:text-[#F5F7FA]">{currentDistrictData.availableCandidates.toLocaleString()}</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0D141B] border border-slate-200 dark:border-white/[0.06] flex justify-between items-center">
                  <span className="text-slate-500 dark:text-[#94A3B8]">Skill Deficit:</span>
                  <span className="font-extrabold text-sm text-amber-600 dark:text-[#F59E0B]">{currentDistrictData.skillGap}%</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0D141B] border border-slate-200 dark:border-white/[0.06] flex justify-between items-center">
                  <span className="text-slate-500 dark:text-[#94A3B8]">Placement Rate:</span>
                  <span className="font-extrabold text-sm text-emerald-600 dark:text-[#4ADE80]">{currentDistrictData.employmentRate}%</span>
                </div>

                <div className="pt-2.5 border-t border-slate-200 dark:border-white/[0.06]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-[#64748B] block mb-2 font-mono">
                    Top High-Demand Skills
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentDistrictData.topSkills.map((s, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded-md bg-sky-50 dark:bg-[#0D141B] border border-sky-200 dark:border-white/[0.06] text-sky-800 dark:text-[#22D3EE] text-xs font-mono">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/government/skills"
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#0284C7] to-[#7C3AED] dark:from-[#22D3EE] dark:to-[#A78BFA] text-white dark:text-[#070B10] text-xs font-bold text-center transition-all flex items-center justify-center gap-1.5 shadow-md dark:shadow-glow-teal hover:opacity-90"
            >
              <span>Full 36-District Matrix</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}
