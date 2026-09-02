import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, ShieldCheck, Award, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#080B0A]/90 border-t border-white/10 pt-16 pb-12 text-[#94A3B8] text-xs relative z-10 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Government Official Glass Banner */}
        <div className="mb-14 p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-glass backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-[#A7F3D0] border border-emerald-500/30 flex items-center justify-center font-bold shrink-0 shadow-emerald-glow">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[#F5F7F4] font-bold text-sm tracking-tight flex items-center gap-2">
                Government of Maharashtra State Skilling Mission
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-[#E5A34A] border border-amber-500/30 font-mono">
                  SIH26135
                </span>
              </div>
              <div className="text-[11px] text-[#94A3B8] mt-0.5">
                Skill Development, Employment & Entrepreneurship Department · Mantralaya, Mumbai
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[#A7F3D0] text-[11px] font-bold font-mono">
              <span className="w-2 h-2 rounded-full bg-[#16A36F] animate-ping" />
              Statewide Live Neural Graph
            </span>
          </div>
        </div>

        {/* 5 Column Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-14">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#16A36F] to-[#18B8A2] flex items-center justify-center text-[#080B0A] font-black text-xs shadow-emerald-glow">
                SM
              </div>
              <span className="text-[#F5F7F4] font-sans text-lg font-extrabold tracking-tight">
                SKILLMITRA
              </span>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed max-w-sm">
              <span className="text-[#F5F7F4] font-semibold">Skills are everywhere. Opportunity shouldn't be.</span> Connecting candidate competencies, verified training tracks, and real-time Maharashtra employment datasets into a unified intelligence ecosystem.
            </p>
            <div className="text-[11px] text-[#64748B] space-y-1 font-mono pt-1">
              <div>Mantralaya, Nariman Point, Mumbai - 400032</div>
              <div>Public Data & Skilling Intelligence Cell</div>
            </div>
          </div>

          {/* Col 2: Candidate Tools */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#F5F7F4] font-mono">For Candidates</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/candidate/skills" className="hover:text-[#A7F3D0] transition-colors">Skill Intelligence</Link></li>
              <li><Link to="/candidate/careers" className="hover:text-[#A7F3D0] transition-colors">Career Pathways</Link></li>
              <li><Link to="/candidate/learning" className="hover:text-[#A7F3D0] transition-colors">Adaptive Roadmap</Link></li>
              <li><Link to="/candidate/jobs" className="hover:text-[#A7F3D0] transition-colors">Job Matching</Link></li>
              <li><Link to="/candidate/certificates" className="hover:text-[#A7F3D0] transition-colors">Verified Credentials</Link></li>
            </ul>
          </div>

          {/* Col 3: Government & Analytics */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#F5F7F4] font-mono">For Government</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/government" className="hover:text-[#A7F3D0] transition-colors">Statewide Outcomes</Link></li>
              <li><Link to="/government/skills" className="hover:text-[#A7F3D0] transition-colors">District Skill Heatmap</Link></li>
              <li><Link to="/government/forecast" className="hover:text-[#A7F3D0] transition-colors">Demand Forecasting</Link></li>
              <li><Link to="/government/programs" className="hover:text-[#A7F3D0] transition-colors">Program Impact ROI</Link></li>
              <li><Link to="/security" className="hover:text-[#A7F3D0] transition-colors">Security Controls</Link></li>
            </ul>
          </div>

          {/* Col 4: Ecosystem Portals */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#F5F7F4] font-mono">Ecosystem</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/employer" className="hover:text-[#A7F3D0] transition-colors">Employer Portal</Link></li>
              <li><Link to="/training" className="hover:text-[#A7F3D0] transition-colors">Training Partner (VTP)</Link></li>
              <li><Link to="/login" className="hover:text-[#A7F3D0] transition-colors">Role Gateway</Link></li>
              <li><Link to="/security" className="hover:text-[#A7F3D0] transition-colors">Audit Ledger</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#64748B]">
          <div>
            Government of Maharashtra · Smart Education & Skilling Mission · SIH26135
          </div>

          <div className="flex items-center gap-4">
            <Link to="/security" className="hover:text-[#A7F3D0] transition-colors">Security Center (92/100)</Link>
            <span>·</span>
            <span className="hover:text-[#A7F3D0] cursor-pointer">Privacy & Governance</span>
            <span>·</span>
            <span className="hover:text-[#A7F3D0] cursor-pointer">NCVET Standards</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
