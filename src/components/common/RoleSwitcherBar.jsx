import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { User, Building2, Briefcase, BookOpen, ShieldCheck, Sparkles } from 'lucide-react';

export default function RoleSwitcherBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const roles = [
    { name: 'Candidate Portal', path: '/candidate', icon: User, badge: 'Job Seeker' },
    { name: 'Skill Assessment', path: '/candidate/skills', icon: Sparkles, badge: 'Analytics' },
    { name: 'Govt. Intelligence', path: '/government', icon: Building2, badge: 'Policy' },
    { name: 'District Heatmap', path: '/government/skills', icon: Building2, badge: '36 Districts' },
    { name: 'Employer Suite', path: '/employer', icon: Briefcase, badge: 'Hiring' },
    { name: 'Training Provider', path: '/training', icon: BookOpen, badge: 'Cohorts' },
    { name: 'Security & Trust', path: '/security', icon: ShieldCheck, badge: 'Governance' },
  ];

  return (
    <div className="w-full bg-[#F3F0E8] border-b border-[#E5E2DA] py-1 px-4 text-xs z-50 sticky top-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-2 shrink-0">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#FAF9F5] border border-[#E5E2DA] text-[#1D2421] font-bold text-[10px] uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#164B36]" />
            Live Portal Switcher
          </span>
        </div>

        <div className="flex items-center gap-1 shrink-0">
          {roles.map((role) => {
            const Icon = role.icon;
            const isActive = location.pathname === role.path || (role.path !== '/' && location.pathname.startsWith(role.path) && role.path !== '/candidate' && role.path !== '/government');

            return (
              <button
                key={role.name}
                onClick={() => navigate(role.path)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-semibold transition-colors border ${
                  isActive 
                    ? 'bg-[#164B36] text-[#FAF9F5] border-[#164B36] font-bold shadow-subtle' 
                    : 'text-[#4A5550] hover:text-[#1D2421] border-transparent hover:bg-[#E5E2DA]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#FAF9F5]' : 'text-[#789184]'}`} />
                <span>{role.name}</span>
                <span className={`text-[9px] px-1 py-0.2 rounded font-mono hidden md:inline ${
                  isActive ? 'bg-[#113A2A] text-[#FAF9F5]' : 'bg-[#E5E2DA] text-[#4A5550]'
                }`}>
                  {role.badge}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
