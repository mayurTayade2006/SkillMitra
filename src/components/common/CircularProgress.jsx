import React from 'react';

export default function CircularProgress({ 
  percentage = 78, 
  size = 90, 
  strokeWidth = 7, 
  color = "forest",
  label = "Readiness",
  sublabel = "",
  showPercentage = true,
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const colorMap = {
    forest: { stroke: "#164B36", text: "text-[#164B36]" },
    saffron: { stroke: "#E28A3B", text: "text-[#E28A3B]" },
    terracotta: { stroke: "#C9634C", text: "text-[#C9634C]" },
    sage: { stroke: "#789184", text: "text-[#789184]" },
  };

  const selectedColor = colorMap[color] || colorMap.forest;

  return (
    <div className="relative flex flex-col items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background Track Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#E5E2DA"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Progress Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={selectedColor.stroke}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-700 ease-out"
        />
      </svg>
      
      {/* Center Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        {showPercentage && (
          <span className="font-sans font-black text-base sm:text-xl tracking-tight text-[#1D2421]">
            {percentage}%
          </span>
        )}
        {label && (
          <span className="text-[9px] text-[#789184] font-bold uppercase tracking-wider">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
