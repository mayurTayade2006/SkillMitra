import React, { useState } from 'react';
import { MAHARASHTRA_DISTRICTS } from '../../data/mockData';
import { MapPin, Activity, Sparkles } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function MaharashtraMapSVG({ selectedDistrict, onSelectDistrict }) {
  const [hoveredDistrict, setHoveredDistrict] = useState(null);
  const { isDark } = useTheme();

  const districtNodes = [
    { key: "Mumbai", x: 120, y: 270, r: 24, label: "Mumbai MMR", color: "#16A36F", fill: "rgba(74, 222, 128, 0.2)" },
    { key: "Thane", x: 160, y: 235, r: 18, label: "Thane", color: "#0284C7", fill: "rgba(34, 211, 238, 0.2)" },
    { key: "Pune", x: 230, y: 320, r: 26, label: "Pune Hub", color: "#16A36F", fill: "rgba(74, 222, 128, 0.2)" },
    { key: "Nashik", x: 210, y: 190, r: 20, label: "Nashik", color: "#D97706", fill: "rgba(245, 158, 11, 0.2)" },
    { key: "Kolhapur", x: 220, y: 430, r: 18, label: "Kolhapur", color: "#D97706", fill: "rgba(245, 158, 11, 0.2)" },
    { key: "Chhatrapati Sambhajinagar", x: 330, y: 220, r: 22, label: "Sambhajinagar", color: "#0284C7", fill: "rgba(34, 211, 238, 0.2)" },
    { key: "Solapur", x: 350, y: 380, r: 18, label: "Solapur", color: "#7C3AED", fill: "rgba(167, 139, 250, 0.2)" },
    { key: "Amravati", x: 490, y: 140, r: 18, label: "Amravati", color: "#64748B", fill: "rgba(148, 163, 184, 0.2)" },
    { key: "Nagpur", x: 620, y: 120, r: 24, label: "Nagpur Hub", color: "#16A36F", fill: "rgba(74, 222, 128, 0.2)" },
  ];

  return (
    <div className="surface-card rounded-2xl p-5 relative w-full transition-colors">
      
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-[#F5F7FA]">
              Maharashtra Geospatial Skill Demand Heatmap
            </h3>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-50 dark:bg-white/[0.04] text-sky-700 dark:text-[#22D3EE] border border-sky-200 dark:border-white/[0.08] font-mono">
              36 Districts
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-[#94A3B8] mt-0.5 font-mono">
            Click any regional cluster node to inspect live workforce supply and open industrial vacancies
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono">
          <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-[#4ADE80]/10 text-emerald-800 dark:text-[#4ADE80] border border-emerald-200 dark:border-[#4ADE80]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-[#4ADE80]" /> High Demand (85%+)
          </span>
          <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-[#F59E0B]/10 text-amber-800 dark:text-[#F59E0B] border border-amber-200 dark:border-[#F59E0B]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-[#F59E0B]" /> Moderate (70-84%)
          </span>
          <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-violet-50 dark:bg-[#A78BFA]/10 text-violet-800 dark:text-[#A78BFA] border border-violet-200 dark:border-[#A78BFA]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 dark:bg-[#A78BFA]" /> Emerging Hub
          </span>
        </div>
      </div>

      {/* SVG Canvas Map */}
      <div className="relative w-full aspect-[16/10] max-h-[440px] flex items-center justify-center bg-slate-50 dark:bg-[#0D141B] rounded-xl border border-slate-200 dark:border-white/[0.06] p-3 overflow-hidden shadow-inner transition-colors">
        <svg
          viewBox="0 0 760 520"
          className="w-full h-full select-none"
        >
          {/* Subtle Grid Pattern */}
          <defs>
            <pattern id="gisMapGrid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke={isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(15, 23, 42, 0.05)"} strokeWidth="1" />
            </pattern>
          </defs>

          <rect width="760" height="520" fill="url(#gisMapGrid)" />

          {/* Maharashtra State Boundary Polygon Outline */}
          <path
            d="M 80,240 
               Q 100,170 180,150 
               Q 270,120 400,100 
               Q 520,70 650,80 
               Q 730,90 740,140 
               Q 720,200 660,230 
               Q 580,270 500,290 
               Q 430,340 380,410 
               Q 300,490 230,500 
               Q 180,480 170,410 
               Q 150,370 120,330 
               Q 70,300 80,240 Z"
            fill={isDark ? "rgba(18, 27, 35, 0.85)" : "rgba(241, 245, 249, 0.95)"}
            stroke={isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(15, 23, 42, 0.15)"}
            strokeWidth="1.5"
          />

          {/* Regional connecting network arcs */}
          <path d="M 120,270 Q 175,295 230,320" stroke={isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(15, 23, 42, 0.1)"} strokeWidth="1.2" strokeDasharray="3 3" fill="none" />
          <path d="M 230,320 Q 220,255 210,190" stroke={isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(15, 23, 42, 0.1)"} strokeWidth="1.2" strokeDasharray="3 3" fill="none" />
          <path d="M 210,190 Q 270,205 330,220" stroke={isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(15, 23, 42, 0.1)"} strokeWidth="1.2" strokeDasharray="3 3" fill="none" />
          <path d="M 230,320 Q 225,375 220,430" stroke={isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(15, 23, 42, 0.1)"} strokeWidth="1.2" strokeDasharray="3 3" fill="none" />
          <path d="M 330,220 Q 410,180 490,140" stroke={isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(15, 23, 42, 0.1)"} strokeWidth="1.2" strokeDasharray="3 3" fill="none" />
          <path d="M 490,140 Q 555,130 620,120" stroke={isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(15, 23, 42, 0.1)"} strokeWidth="1.2" strokeDasharray="3 3" fill="none" />
          <path d="M 330,220 Q 340,300 350,380" stroke={isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(15, 23, 42, 0.1)"} strokeWidth="1.2" strokeDasharray="3 3" fill="none" />

          {/* District Interactive Nodes */}
          {districtNodes.map((node) => {
            const isSelected = selectedDistrict === node.key;
            const isHovered = hoveredDistrict === node.key;
            const data = MAHARASHTRA_DISTRICTS[node.key] || {};

            return (
              <g
                key={node.key}
                className="cursor-pointer transition-all duration-200"
                onClick={() => onSelectDistrict(node.key)}
                onMouseEnter={() => setHoveredDistrict(node.key)}
                onMouseLeave={() => setHoveredDistrict(null)}
              >
                {/* Outer Ring on Selection */}
                {isSelected && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={node.r + 6}
                    fill="none"
                    stroke={isDark ? "#22D3EE" : "#0284C7"}
                    strokeWidth="1.5"
                    strokeDasharray="4 2"
                  />
                )}

                {/* Main Node */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={isSelected ? node.r + 2 : isHovered ? node.r + 1 : node.r}
                  fill={isSelected ? node.color : isDark ? "#121B23" : "#FFFFFF"}
                  stroke={isSelected ? (isDark ? "#F5F7FA" : "#0F172A") : node.color}
                  strokeWidth={isSelected ? "2" : "1.5"}
                />

                {/* Center Core Indicator */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="3.5"
                  fill={isSelected ? (isDark ? "#070B10" : "#FFFFFF") : node.color}
                />

                {/* District Label Text */}
                <text
                  x={node.x}
                  y={node.y + node.r + 14}
                  textAnchor="middle"
                  fill={isSelected ? (isDark ? "#22D3EE" : "#0284C7") : (isDark ? "#F5F7FA" : "#0F172A")}
                  fontSize={isSelected ? "11.5" : "11"}
                  fontWeight={isSelected ? "800" : "600"}
                  fontFamily="Inter, sans-serif"
                  className="pointer-events-none"
                >
                  {node.label}
                </text>

                {/* Score badge under label */}
                <text
                  x={node.x}
                  y={node.y + node.r + 26}
                  textAnchor="middle"
                  fill={isDark ? "#94A3B8" : "#64748B"}
                  fontSize="9.5"
                  fontWeight="600"
                  fontFamily="JetBrains Mono, monospace"
                  className="pointer-events-none"
                >
                  {data.demandIndex || 75}% Demand
                </text>
              </g>
            );
          })}
        </svg>

        {/* Hover Tooltip */}
        {hoveredDistrict && MAHARASHTRA_DISTRICTS[hoveredDistrict] && (
          <div className="absolute top-3 left-3 z-20 p-3.5 rounded-xl bg-white dark:bg-[#17232C] border border-slate-200 dark:border-white/[0.12] shadow-xl text-xs pointer-events-none animate-in fade-in duration-150">
            <div className="font-bold text-slate-900 dark:text-[#F5F7FA] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-sky-600 dark:text-[#22D3EE]" />
              {MAHARASHTRA_DISTRICTS[hoveredDistrict].name} Hub
            </div>
            <div className="text-[11px] text-slate-600 dark:text-[#94A3B8] mt-1 font-mono">
              Demand: <strong className="text-emerald-700 dark:text-[#4ADE80]">{MAHARASHTRA_DISTRICTS[hoveredDistrict].demandIndex}%</strong> · {MAHARASHTRA_DISTRICTS[hoveredDistrict].status}
            </div>
            <div className="text-[10px] text-slate-400 dark:text-[#64748B] mt-0.5 font-mono">
              Available: {MAHARASHTRA_DISTRICTS[hoveredDistrict].availableCandidates.toLocaleString()} | Gap: {MAHARASHTRA_DISTRICTS[hoveredDistrict].skillGap}%
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
