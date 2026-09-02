import React from 'react';

export default function CircularProgress({ 
  percentage = 78, 
  size = 96, 
  strokeWidth = 8, 
  color = "emerald",
  label = "Readiness",
  sublabel = "",
  showPercentage = true,
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const colorMap = {
    emerald: { stroke: "#16A36F", gradient: ["#16A36F", "#18B8A2"], text: "text-[#A7F3D0]" },
    teal: { stroke: "#18B8A2", gradient: ["#18B8A2", "#5EEAD4"], text: "text-[#5EEAD4]" },
    saffron: { stroke: "#E5A34A", gradient: ["#E5A34A", "#FBBF24"], text: "text-[#FDE68A]" },
    mint: { stroke: "#A7F3D0", gradient: ["#A7F3D0", "#6EE7B7"], text: "text-[#A7F3D0]" },
    forest: { stroke: "#16A36F", gradient: ["#16A36F", "#18B8A2"], text: "text-[#A7F3D0]" },
  };

  const selected = colorMap[color] || colorMap.emerald;
  const gradientId = `circ-grad-${color}-${size}`;

  return (
    <div className="relative flex flex-col items-center justify-center shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={selected.gradient[0]} />
            <stop offset="100%" stopColor={selected.gradient[1]} />
          </linearGradient>
        </defs>

        {/* Background Track Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255, 255, 255, 0.08)"
          strokeWidth={strokeWidth}
          fill="transparent"
        />

        {/* Glowing Progress Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out drop-shadow-[0_0_8px_rgba(22,163,111,0.5)]"
        />
      </svg>
      
      {/* Center Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-1">
        {showPercentage && (
          <span className="font-sans font-black text-lg sm:text-xl tracking-tight text-[#F5F7F4] font-mono">
            {percentage}%
          </span>
        )}
        {label && (
          <span className="text-[9px] text-[#94A3B8] font-bold uppercase tracking-wider font-mono">
            {label}
          </span>
        )}
        {sublabel && (
          <span className="text-[8px] text-[#64748B]">
            {sublabel}
          </span>
        )}
      </div>
    </div>
  );
}
