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
  Download
} from 'lucide-react';

export default function MaharashtraHeatmapPage() {
  const [selectedDistrict, setSelectedDistrict] = useState("Pune");
  const district = MAHARASHTRA_DISTRICTS[selectedDistrict] || MAHARASHTRA_DISTRICTS["Pune"];

  return (
    <DashboardLayout role="government">
      <div className="space-y-7">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-[#E5E2DA]">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1D2421] tracking-tight">
                Maharashtra District Skill Demand Heatmap
              </h1>
              <span className="text-[10px] font-bold px-2 py-0.2 rounded bg-[#EBF2EE] text-[#164B36] border border-[#D1E0D7]">
                36 Districts Active
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#4A5550] mt-1">
              Geospatial intelligence analyzing regional workforce supply, talent deficits, and industrial absorption.
            </p>
          </div>

          <button className="px-4 py-2 rounded-md border border-[#E5E2DA] bg-[#FAF9F5] hover:bg-[#F3F0E8] text-xs font-bold text-[#1D2421] transition-colors flex items-center gap-1.5 shadow-subtle self-start md:self-auto">
            <Download className="w-3.5 h-3.5" />
            <span>Export Matrix (CSV)</span>
          </button>
        </div>

        {/* Map & Deep-Dive Drawer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Map (8 Cols) */}
          <div className="lg:col-span-8 space-y-4">
            <MaharashtraMapSVG
              selectedDistrict={selectedDistrict}
              onSelectDistrict={setSelectedDistrict}
            />

            {/* Quick District Selector Chips */}
            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E5E2DA] shadow-subtle">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#789184] mb-2">
                Quick District Selection:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {Object.keys(MAHARASHTRA_DISTRICTS).map((dKey) => (
                  <button
                    key={dKey}
                    onClick={() => setSelectedDistrict(dKey)}
                    className={`px-3 py-1 rounded text-xs font-bold transition-colors ${
                      selectedDistrict === dKey
                        ? 'bg-[#164B36] text-[#FAF9F5] shadow-subtle'
                        : 'bg-[#FAF9F5] text-[#4A5550] hover:bg-[#F3F0E8] border border-[#E5E2DA]'
                    }`}
                  >
                    {dKey}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* District Deep-Dive Drawer (4 Cols) */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-[#FFFFFF] border border-[#E5E2DA] shadow-card space-y-5 flex flex-col justify-between">
            <div>
              
              {/* Top Title */}
              <div className="pb-4 border-b border-[#ECE9E1]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#164B36]" />
                    <h3 className="text-xl font-black text-[#1D2421]">{district.name}</h3>
                  </div>
                  <span className="px-2.5 py-0.5 rounded bg-[#EBF2EE] text-[#164B36] border border-[#D1E0D7] text-xs font-bold font-mono">
                    {district.demandIndex}% Demand
                  </span>
                </div>
                <p className="text-xs text-[#789184] mt-1 font-medium">{district.zone} · {district.status}</p>
              </div>

              {/* Numerical Metrics */}
              <div className="py-4 space-y-3 text-xs">
                <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#E5E2DA] flex justify-between items-center">
                  <span className="text-[#789184]">Available Trained Youth:</span>
                  <span className="font-extrabold text-sm text-[#1D2421] font-sans">{district.availableCandidates.toLocaleString()}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#E5E2DA] flex justify-between items-center">
                  <span className="text-[#789184]">Identified Skill Deficit:</span>
                  <span className="font-extrabold text-sm text-[#E28A3B] font-sans">{district.skillGap}%</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#E5E2DA] flex justify-between items-center">
                  <span className="text-[#789184]">District Placement Rate:</span>
                  <span className="font-extrabold text-sm text-[#164B36] font-mono">{district.employmentRate}%</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#E5E2DA] flex justify-between items-center">
                  <span className="text-[#789184]">Average Securing Package:</span>
                  <span className="font-bold text-[#1D2421]">{district.avgLPA}</span>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-2 pt-2 border-t border-[#ECE9E1]">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#789184]">
                  Highest Demand Competencies
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {district.topSkills.map((s, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-[#EBF2EE] border border-[#D1E0D7] text-[#164B36] text-xs font-bold">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            <div className="p-4 rounded-xl bg-[#FDF4EC] border border-[#F8DCBE] text-xs text-[#4A5550]">
              <span className="font-bold text-[#E28A3B] block mb-1">Policy Recommendation:</span>
              Deploy targeted PMKVY cohort in {district.name} for <strong>{district.topSkills[0]}</strong> to address local hiring demand.
            </div>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}
