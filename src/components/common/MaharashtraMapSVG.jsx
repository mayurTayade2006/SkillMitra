import React, { useState } from 'react';
import { MAHARASHTRA_DISTRICTS } from '../../data/mockData';
import { MapPin } from 'lucide-react';

export default function MaharashtraMapSVG({ selectedDistrict, onSelectDistrict }) {
  const [hoveredDistrict, setHoveredDistrict] = useState(null);

  const districtNodes = [
    { key: "Mumbai", x: 120, y: 270, r: 22, label: "Mumbai MMR", color: "#164B36" },
    { key: "Thane", x: 160, y: 240, r: 18, label: "Thane", color: "#164B36" },
    { key: "Pune", x: 230, y: 320, r: 24, label: "Pune Hub", color: "#164B36" },
    { key: "Nashik", x: 210, y: 190, r: 20, label: "Nashik", color: "#E28A3B" },
    { key: "Kolhapur", x: 220, y: 430, r: 18, label: "Kolhapur", color: "#C9634C" },
    { key: "Chhatrapati Sambhajinagar", x: 330, y: 220, r: 22, label: "Sambhajinagar", color: "#E28A3B" },
    { key: "Solapur", x: 350, y: 380, r: 18, label: "Solapur", color: "#C9634C" },
    { key: "Amravati", x: 490, y: 140, r: 18, label: "Amravati", color: "#789184" },
    { key: "Nagpur", x: 620, y: 120, r: 22, label: "Nagpur Hub", color: "#164B36" },
  ];

  return (
    <div className="relative w-full rounded-xl bg-[#FFFFFF] border border-[#E5E2DA] p-5 shadow-subtle">
      
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-[#1D2421]">
              Maharashtra District Skill Demand Heatmap
            </h3>
            <span className="text-[10px] font-bold px-2 py-0.2 rounded bg-[#EBF2EE] text-[#164B36] border border-[#D1E0D7]">
              Geospatial GIS
            </span>
          </div>
          <p className="text-xs text-[#789184] mt-0.5">
            Click any regional cluster node to inspect live workforce supply and open industrial vacancies
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-2 text-[10px] font-semibold">
          <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#EBF2EE] text-[#164B36] border border-[#D1E0D7]">
            <span className="w-2 h-2 rounded-full bg-[#164B36]" /> High Demand (85%+)
          </span>
          <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#FDF4EC] text-[#E28A3B] border border-[#F8DCBE]">
            <span className="w-2 h-2 rounded-full bg-[#E28A3B]" /> Moderate (70-84%)
          </span>
          <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#FAF0ED] text-[#C9634C] border border-[#F5DCD5]">
            <span className="w-2 h-2 rounded-full bg-[#C9634C]" /> Emerging (&lt;70%)
          </span>
        </div>
      </div>

      {/* SVG Canvas Map */}
      <div className="relative w-full aspect-[16/10] max-h-[440px] flex items-center justify-center bg-[#FAF9F5] rounded-lg border border-[#E5E2DA] p-3 overflow-hidden">
        <svg
          viewBox="0 0 760 520"
          className="w-full h-full select-none"
        >
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
            fill="#F3F0E8"
            stroke="#E5E2DA"
            strokeWidth="1.5"
          />

          {/* Regional connecting network arcs */}
          <path d="M 120,270 Q 175,295 230,320" stroke="#D5D1C7" strokeWidth="1" strokeDasharray="3 3" fill="none" />
          <path d="M 230,320 Q 220,255 210,190" stroke="#D5D1C7" strokeWidth="1" strokeDasharray="3 3" fill="none" />
          <path d="M 210,190 Q 270,205 330,220" stroke="#D5D1C7" strokeWidth="1" strokeDasharray="3 3" fill="none" />
          <path d="M 230,320 Q 225,375 220,430" stroke="#D5D1C7" strokeWidth="1" strokeDasharray="3 3" fill="none" />
          <path d="M 330,220 Q 410,180 490,140" stroke="#D5D1C7" strokeWidth="1" strokeDasharray="3 3" fill="none" />
          <path d="M 490,140 Q 555,130 620,120" stroke="#D5D1C7" strokeWidth="1" strokeDasharray="3 3" fill="none" />
          <path d="M 330,220 Q 340,300 350,380" stroke="#D5D1C7" strokeWidth="1" strokeDasharray="3 3" fill="none" />

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
                {/* Node Outer Ring on Select */}
                {isSelected && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={node.r + 6}
                    fill="none"
                    stroke="#164B36"
                    strokeWidth="1.5"
                    strokeDasharray="4 2"
                  />
                )}

                {/* Main Node Circle */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={isSelected ? node.r + 2 : isHovered ? node.r + 1 : node.r}
                  fill={isSelected ? "#164B36" : "#FFFFFF"}
                  stroke={isSelected ? "#0E3324" : node.color}
                  strokeWidth={isSelected ? "2.5" : "1.5"}
                  className="shadow-subtle"
                />

                {/* Center Core Indicator */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="3.5"
                  fill={isSelected ? "#FAF9F5" : node.color}
                />

                {/* District Label Text */}
                <text
                  x={node.x}
                  y={node.y + node.r + 14}
                  textAnchor="middle"
                  fill={isSelected ? "#164B36" : "#1D2421"}
                  fontSize={isSelected ? "12" : "11"}
                  fontWeight={isSelected ? "800" : "600"}
                  fontFamily="Manrope, sans-serif"
                  className="pointer-events-none"
                >
                  {node.label}
                </text>

                {/* Score badge under label */}
                <text
                  x={node.x}
                  y={node.y + node.r + 26}
                  textAnchor="middle"
                  fill="#789184"
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
          <div className="absolute top-3 left-3 z-20 p-3 rounded-lg bg-[#FFFFFF] border border-[#E5E2DA] shadow-card text-xs pointer-events-none animate-in fade-in duration-150">
            <div className="font-bold text-[#1D2421] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#164B36]" />
              {MAHARASHTRA_DISTRICTS[hoveredDistrict].name}
            </div>
            <div className="text-[11px] text-[#4A5550] mt-1">
              Demand Index: <strong className="text-[#164B36]">{MAHARASHTRA_DISTRICTS[hoveredDistrict].demandIndex}%</strong> · {MAHARASHTRA_DISTRICTS[hoveredDistrict].status}
            </div>
            <div className="text-[10px] text-[#789184] mt-0.5">
              Available: {MAHARASHTRA_DISTRICTS[hoveredDistrict].availableCandidates.toLocaleString()} | Gap: {MAHARASHTRA_DISTRICTS[hoveredDistrict].skillGap}%
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
