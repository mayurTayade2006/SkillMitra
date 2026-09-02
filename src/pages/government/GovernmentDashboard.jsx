import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import MaharashtraMapSVG from '../../components/common/MaharashtraMapSVG';
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
  const currentDistrictData = MAHARASHTRA_DISTRICTS[selectedDistrict] || MAHARASHTRA_DISTRICTS["Pune"];

  return (
    <DashboardLayout role="government">
      <div className="space-y-8">
        
        {/* EXECUTIVE HERO SECTION */}
        <div className="surface-card rounded-2xl p-6 sm:p-8 space-y-6 border-t-4 border-t-[#22D3EE]">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-white/[0.06]">
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#F59E0B] px-2.5 py-0.5 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 font-mono">
                State Skilling Mission · SIH26135
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-[#F5F7FA] tracking-tight">
                Statewide Skill & Employment Intelligence
              </h1>
              <p className="text-xs sm:text-sm text-[#94A3B8] max-w-2xl font-mono">
                Real-time tracking of skilling cohorts, industrial absorption, and employment placement across all 36 districts.
              </p>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <button className="px-3.5 py-1.5 rounded-lg bg-[#0D141B] hover:bg-white/[0.06] border border-white/[0.08] text-xs font-bold text-[#F5F7FA] transition-all flex items-center gap-1.5 font-mono">
                <Download className="w-3.5 h-3.5 text-[#22D3EE]" />
                <span>Export Brief</span>
              </button>
              <Link
                to="/government/skills"
                className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-[#22D3EE] to-[#A78BFA] text-[#070B10] text-xs font-bold transition-all shadow-glow-teal flex items-center gap-1.5 hover:opacity-90"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>District Map</span>
              </Link>
            </div>
          </div>

          {/* Top 4 Key Numerical Metrics (Multi-Tone) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-[#0D141B] border border-white/[0.06] space-y-1 border-t-2 border-t-[#22D3EE]">
              <div className="text-3xl sm:text-4xl font-black font-mono text-[#F5F7FA]">
                50,000
              </div>
              <div className="text-xs font-bold text-[#22D3EE] uppercase tracking-wider font-mono">Candidates Trained</div>
              <div className="text-[10px] text-[#64748B] font-mono">Across 36 Districts</div>
            </div>

            <div className="p-4 rounded-xl bg-[#0D141B] border border-white/[0.06] space-y-1 border-t-2 border-t-[#4ADE80]">
              <div className="text-3xl sm:text-4xl font-black font-mono text-[#4ADE80]">
                38,420
              </div>
              <div className="text-xs font-bold text-[#4ADE80] uppercase tracking-wider font-mono">Certified Passed</div>
              <div className="text-[10px] text-[#64748B] font-mono">76.8% Pass Rate</div>
            </div>

            <div className="p-4 rounded-xl bg-[#0D141B] border border-white/[0.06] space-y-1 border-t-2 border-t-[#A78BFA]">
              <div className="text-3xl sm:text-4xl font-black font-mono text-[#A78BFA]">
                24,680
              </div>
              <div className="text-xs font-bold text-[#A78BFA] uppercase tracking-wider font-mono">Employed in Industry</div>
              <div className="text-[10px] text-[#64748B] font-mono">Avg ₹4.85 LPA Package</div>
            </div>

            <div className="p-4 rounded-xl bg-[#0D141B] border border-white/[0.06] space-y-1 border-t-2 border-t-[#F59E0B]">
              <div className="text-3xl sm:text-4xl font-black font-mono text-[#F59E0B]">
                64.3%
              </div>
              <div className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider font-mono">Employment Rate</div>
              <div className="text-[10px] text-[#64748B] font-mono">+8.4% YoY Gain</div>
            </div>
          </div>

          {/* Charts Embedded on Surface */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 border-t border-white/[0.06]">
            
            {/* Chart 1: Placement Outcome Progression */}
            <div className="p-5 rounded-xl bg-[#0D141B] border border-white/[0.06] space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="text-xs font-bold text-[#F5F7FA] font-mono">Quarterly Outcome Trajectory</h3>
                <span className="text-[11px] text-[#64748B] font-mono">2024–2025</span>
              </div>

              <div className="h-60 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={EMPLOYMENT_TIMELINE_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorTrained" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#22D3EE" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#22D3EE" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorPlaced" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4ADE80" stopOpacity={0.6}/>
                        <stop offset="95%" stopColor="#4ADE80" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.04)" vertical={false} />
                    <XAxis dataKey="quarter" stroke="#64748B" fontSize={10} tickLine={false} />
                    <YAxis stroke="#64748B" fontSize={10} tickLine={false} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#121B23', borderColor: 'rgba(255, 255, 255, 0.1)', color: '#F5F7FA', borderRadius: '8px', fontSize: '11px' }}
                    />
                    <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
                    <Area type="monotone" dataKey="candidatesTrained" name="Trained" stroke="#22D3EE" fill="url(#colorTrained)" strokeWidth={2} />
                    <Area type="monotone" dataKey="placed" name="Placed" stroke="#4ADE80" fill="url(#colorPlaced)" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Chart 2: Scheme ROI Comparison */}
            <div className="p-5 rounded-xl bg-[#0D141B] border border-white/[0.06] space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="text-xs font-bold text-[#F5F7FA] font-mono">Scheme Placement Conversion (%)</h3>
                <span className="text-[11px] text-[#64748B] font-mono">Comparative ROI</span>
              </div>

              <div className="h-60 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={PROGRAM_IMPACT_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.04)" vertical={false} />
                    <XAxis dataKey="name" stroke="#64748B" fontSize={9} tickLine={false} />
                    <YAxis stroke="#64748B" fontSize={10} tickLine={false} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#121B23', borderColor: 'rgba(255, 255, 255, 0.1)', color: '#F5F7FA', borderRadius: '8px', fontSize: '11px' }}
                    />
                    <Bar dataKey="placementRate" name="Placement Rate (%)" fill="#A78BFA" radius={[4, 4, 0, 0]} />
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
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#22D3EE]" />
                  <h3 className="text-base font-bold text-[#F5F7FA]">{currentDistrictData.name} Hub</h3>
                </div>
                <span className="px-2.5 py-0.5 rounded bg-[#4ADE80]/10 text-[#4ADE80] border border-[#4ADE80]/30 text-xs font-bold font-mono">
                  {currentDistrictData.status}
                </span>
              </div>

              <div className="mt-4 space-y-2.5 text-xs font-mono">
                <div className="p-3 rounded-xl bg-[#0D141B] border border-white/[0.06] flex justify-between items-center">
                  <span className="text-[#94A3B8]">Trained Youth:</span>
                  <span className="font-extrabold text-sm text-[#F5F7FA]">{currentDistrictData.availableCandidates.toLocaleString()}</span>
                </div>

                <div className="p-3 rounded-xl bg-[#0D141B] border border-white/[0.06] flex justify-between items-center">
                  <span className="text-[#94A3B8]">Skill Deficit:</span>
                  <span className="font-extrabold text-sm text-[#F59E0B]">{currentDistrictData.skillGap}%</span>
                </div>

                <div className="p-3 rounded-xl bg-[#0D141B] border border-white/[0.06] flex justify-between items-center">
                  <span className="text-[#94A3B8]">Placement Rate:</span>
                  <span className="font-extrabold text-sm text-[#4ADE80]">{currentDistrictData.employmentRate}%</span>
                </div>

                <div className="pt-2.5 border-t border-white/[0.06]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] block mb-2 font-mono">
                    Top High-Demand Skills
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentDistrictData.topSkills.map((s, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded-md bg-[#0D141B] border border-white/[0.06] text-[#22D3EE] text-xs font-mono">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/government/skills"
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#22D3EE] to-[#A78BFA] text-[#070B10] text-xs font-bold text-center transition-all flex items-center justify-center gap-1.5 shadow-glow-teal hover:opacity-90"
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
