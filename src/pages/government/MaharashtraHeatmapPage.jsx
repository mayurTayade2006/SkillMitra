import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import MaharashtraMapSVG from '../../components/common/MaharashtraMapSVG';
import { MAHARASHTRA_DISTRICTS } from '../../data/mockData';
import { 
  MapPin, 
  TrendingUp, 
  Users, 
  AlertCircle, 
  Building2, 
  ArrowRight, 
  Download, 
  Sparkles, 
  Layers, 
  Activity 
} from 'lucide-react';

export default function MaharashtraHeatmapPage() {
  const [selectedDistrict, setSelectedDistrict] = useState("Pune");
  const district = MAHARASHTRA_DISTRICTS[selectedDistrict] || MAHARASHTRA_DISTRICTS["Pune"];

  return (
    <DashboardLayout role="government">
      <div className="space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22D3EE]/10 border border-[#22D3EE]/25 text-[#22D3EE] text-xs font-semibold mb-2 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
              <span>GIS WORKFORCE INTELLIGENCE</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#F5F7FA] tracking-tight">
              Maharashtra District Skill Demand Heatmap
            </h1>
            <p className="text-xs sm:text-sm text-[#94A3B8] mt-1 font-mono">
              Geospatial intelligence analyzing regional workforce supply, talent deficits, and industrial absorption.
            </p>
          </div>

          <button className="px-4 py-2 rounded-lg border border-white/[0.08] bg-[#0D141B] hover:bg-white/[0.06] text-xs font-bold text-[#F5F7FA] transition-all flex items-center gap-2 font-mono self-start md:self-auto">
            <Download className="w-3.5 h-3.5 text-[#22D3EE]" />
            <span>Export Matrix (CSV)</span>
          </button>
        </div>

        {/* Map & Deep-Dive Drawer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Map (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            <MaharashtraMapSVG
              selectedDistrict={selectedDistrict}
              onSelectDistrict={setSelectedDistrict}
            />

            {/* Quick District Selector Chips */}
            <div className="surface-card rounded-2xl p-5">
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] mb-3 font-mono">
                Select District Hub (36 Total):
              </div>
              <div className="flex flex-wrap gap-1.5">
                {Object.keys(MAHARASHTRA_DISTRICTS).map((dKey) => (
                  <button
                    key={dKey}
                    onClick={() => setSelectedDistrict(dKey)}
                    className={`px-3 py-1 rounded-md text-xs font-bold transition-all font-mono ${
                      selectedDistrict === dKey
                        ? 'bg-[#22D3EE] text-[#070B10]'
                        : 'bg-[#0D141B] text-[#94A3B8] hover:text-[#F5F7FA] border border-white/[0.06]'
                    }`}
                  >
                    {dKey}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* District Deep-Dive Drawer (4 Cols) */}
          <div className="lg:col-span-4 surface-card rounded-2xl p-6 space-y-6 flex flex-col justify-between">
            <div>
              
              {/* Top Title */}
              <div className="pb-4 border-b border-white/[0.06]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#22D3EE]/10 text-[#22D3EE] border border-[#22D3EE]/30 flex items-center justify-center">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg font-black text-[#F5F7FA]">{district.name} Hub</h3>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#4ADE80]/10 text-[#4ADE80] border border-[#4ADE80]/30 text-xs font-bold font-mono">
                    {district.demandIndex}% Demand
                  </span>
                </div>
                <p className="text-xs text-[#64748B] mt-1.5 font-mono">{district.zone} Region · {district.status}</p>
              </div>

              {/* Numerical Metrics */}
              <div className="py-3.5 space-y-2.5 text-xs font-mono">
                <div className="p-3 rounded-xl bg-[#0D141B] border border-white/[0.06] flex justify-between items-center">
                  <span className="text-[#94A3B8]">Trained Candidates:</span>
                  <span className="font-extrabold text-sm text-[#F5F7FA]">{district.availableCandidates.toLocaleString()}</span>
                </div>

                <div className="p-3 rounded-xl bg-[#0D141B] border border-white/[0.06] flex justify-between items-center">
                  <span className="text-[#94A3B8]">Skill Deficit Gap:</span>
                  <span className="font-extrabold text-sm text-[#F59E0B]">{district.skillGap}%</span>
                </div>

                <div className="p-3 rounded-xl bg-[#0D141B] border border-white/[0.06] flex justify-between items-center">
                  <span className="text-[#94A3B8]">Placement Rate:</span>
                  <span className="font-extrabold text-sm text-[#4ADE80]">{district.employmentRate}%</span>
                </div>

                <div className="p-3 rounded-xl bg-[#0D141B] border border-white/[0.06] flex justify-between items-center">
                  <span className="text-[#94A3B8]">Avg Securing Package:</span>
                  <span className="font-bold text-[#F5F7FA]">{district.avgLPA}</span>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] font-mono">
                  Highest Demand Competencies
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {district.topSkills.map((s, idx) => (
                    <span key={idx} className="px-2.5 py-0.5 rounded-md bg-[#0D141B] border border-white/[0.06] text-[#22D3EE] text-xs font-mono font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            <div className="p-4 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/25 text-xs text-[#94A3B8] space-y-1">
              <span className="font-bold text-[#F59E0B] block font-mono">Policy Recommendation:</span>
              <p className="leading-relaxed">
                Deploy targeted PMKVY 4.0 cohort in {district.name} for <strong className="text-[#F5F7FA]">{district.topSkills[0]}</strong> to absorb local manufacturing and IT demand.
              </p>
            </div>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}
