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
  CheckCircle2
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
        
        {/* FULL-WIDTH DARK FOREST EXECUTIVE HERO SECTION */}
        <div className="p-6 sm:p-10 rounded-2xl bg-[#164B36] text-[#FAF9F5] shadow-card space-y-8">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#0E3324]">
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#E28A3B]">
                Government of Maharashtra · Skill Analytics Cell
              </span>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                See what skills are shaping Maharashtra.
              </h1>
              <p className="text-xs sm:text-sm text-[#A4B8AD] max-w-2xl">
                Real-time tracking of skilling cohorts, industrial absorption, and employment placement across all 36 districts.
              </p>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <button className="px-3.5 py-2 rounded-md bg-[#113A2A] hover:bg-[#0D2D20] border border-[#789184]/40 text-xs font-bold text-[#FAF9F5] transition-colors flex items-center gap-1.5 shadow-subtle">
                <Download className="w-3.5 h-3.5" />
                <span>Export Brief</span>
              </button>
              <Link
                to="/government/skills"
                className="px-4 py-2 rounded-md bg-[#E28A3B] hover:bg-[#CD782B] text-white text-xs font-bold transition-colors flex items-center gap-1.5 shadow-subtle"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>District Map</span>
              </Link>
            </div>
          </div>

          {/* Top 4 Key Numerical Metrics directly on Dark Forest Surface */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-1">
              <div className="text-3xl sm:text-5xl font-black font-sans text-white">
                50,000
              </div>
              <div className="text-xs font-bold text-[#FAF9F5] uppercase tracking-wider">Candidates Trained</div>
              <div className="text-xs text-[#A4B8AD]">Across 36 Districts</div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-5xl font-black font-sans text-[#E28A3B]">
                38,420
              </div>
              <div className="text-xs font-bold text-[#FAF9F5] uppercase tracking-wider">Certified Passed</div>
              <div className="text-xs text-[#A4B8AD]">76.8% Pass Rate</div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-5xl font-black font-sans text-white">
                24,680
              </div>
              <div className="text-xs font-bold text-[#FAF9F5] uppercase tracking-wider">Employed in Industry</div>
              <div className="text-xs text-[#A4B8AD]">Avg ₹4.85 LPA Package</div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-5xl font-black font-sans text-[#E28A3B]">
                64.3%
              </div>
              <div className="text-xs font-bold text-[#FAF9F5] uppercase tracking-wider">Employment Rate</div>
              <div className="text-xs text-[#A4B8AD]">+8.4% YoY Gain</div>
            </div>
          </div>

          {/* Charts Embedded Directly on Dark Surface (No nested white cards) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-6 border-t border-[#0E3324]">
            
            {/* Chart 1: Placement Outcome Progression on Dark Background */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-bold text-white">Quarterly Outcome Trajectory</h3>
                <span className="text-[11px] text-[#A4B8AD]">2024–2025</span>
              </div>

              <div className="h-60 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={EMPLOYMENT_TIMELINE_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#0E3324" vertical={false} />
                    <XAxis dataKey="quarter" stroke="#A4B8AD" fontSize={10} tickLine={false} />
                    <YAxis stroke="#A4B8AD" fontSize={10} tickLine={false} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#0D2D20', borderColor: '#164B36', color: '#FAF9F5', borderRadius: '8px', fontSize: '11px' }}
                    />
                    <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
                    <Area type="monotone" dataKey="candidatesTrained" name="Trained" stroke="#E28A3B" fill="#E28A3B" fillOpacity={0.25} strokeWidth={2} />
                    <Area type="monotone" dataKey="placed" name="Placed" stroke="#FAF9F5" fill="#FAF9F5" fillOpacity={0.2} strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Chart 2: Scheme ROI Comparison on Dark Background */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-bold text-white">Scheme Placement Conversion (%)</h3>
                <span className="text-[11px] text-[#A4B8AD]">Comparative ROI</span>
              </div>

              <div className="h-60 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={PROGRAM_IMPACT_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#0E3324" vertical={false} />
                    <XAxis dataKey="name" stroke="#A4B8AD" fontSize={9} tickLine={false} />
                    <YAxis stroke="#A4B8AD" fontSize={10} tickLine={false} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#0D2D20', borderColor: '#164B36', color: '#FAF9F5', borderRadius: '8px', fontSize: '11px' }}
                    />
                    <Bar dataKey="placementRate" name="Placement Rate (%)" fill="#E28A3B" radius={[4, 4, 0, 0]} />
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
          <div className="lg:col-span-4 p-6 rounded-2xl bg-[#FFFFFF] border border-[#E5E2DA] shadow-card flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#ECE9E1]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#164B36]" />
                  <h3 className="text-base font-bold text-[#1D2421]">{currentDistrictData.name} Hub</h3>
                </div>
                <span className="px-2.5 py-0.5 rounded bg-[#EBF2EE] text-[#164B36] border border-[#D1E0D7] text-xs font-bold">
                  {currentDistrictData.status}
                </span>
              </div>

              <div className="mt-4 space-y-3 text-xs">
                <div className="p-3 rounded-lg bg-[#FAF9F5] border border-[#E5E2DA] flex justify-between items-center">
                  <span className="text-[#789184]">Available Trained Youth:</span>
                  <span className="font-extrabold text-sm text-[#1D2421] font-sans">{currentDistrictData.availableCandidates.toLocaleString()}</span>
                </div>

                <div className="p-3 rounded-lg bg-[#FAF9F5] border border-[#E5E2DA] flex justify-between items-center">
                  <span className="text-[#789184]">Identified Skill Deficit:</span>
                  <span className="font-extrabold text-sm text-[#E28A3B] font-sans">{currentDistrictData.skillGap}%</span>
                </div>

                <div className="p-3 rounded-lg bg-[#FAF9F5] border border-[#E5E2DA] flex justify-between items-center">
                  <span className="text-[#789184]">District Placement Rate:</span>
                  <span className="font-extrabold text-sm text-[#164B36] font-mono">{currentDistrictData.employmentRate}%</span>
                </div>

                <div className="pt-2 border-t border-[#ECE9E1]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#789184] block mb-1.5">
                    Top High-Demand Skills
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentDistrictData.topSkills.map((s, idx) => (
                      <span key={idx} className="px-2.5 py-0.5 rounded bg-[#EBF2EE] border border-[#D1E0D7] text-[#164B36] text-xs font-bold">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/government/skills"
              className="w-full py-2.5 rounded-md bg-[#164B36] hover:bg-[#113A2A] text-[#FAF9F5] text-xs font-bold text-center transition-colors flex items-center justify-center gap-1.5 shadow-subtle"
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
