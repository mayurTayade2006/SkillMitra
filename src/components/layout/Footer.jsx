import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, ShieldCheck, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#F3F0E8] border-t border-[#E5E2DA] pt-14 pb-10 text-[#4A5550] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Government Official Banner */}
        <div className="mb-12 p-5 rounded-lg bg-[#FAF9F5] border border-[#E5E2DA] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-subtle">
          <div className="flex items-center gap-3.5">
            <div className="w-9 h-9 rounded bg-[#164B36] flex items-center justify-center text-[#FAF9F5] font-bold shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[#1D2421] font-bold text-xs sm:text-sm tracking-tight">
                Government of Maharashtra State Skilling Mission
              </div>
              <div className="text-[11px] text-[#789184]">
                Skill Development, Employment & Entrepreneurship Department · Mantralaya, Mumbai
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#EBF2EE] border border-[#D1E0D7] text-[#164B36] text-[11px] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#164B36]" />
              Statewide Civic Intelligence
            </span>
          </div>
        </div>

        {/* 4 Column Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-3.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-[#164B36] flex items-center justify-center text-white font-black text-xs">
                SM
              </div>
              <span className="text-[#1D2421] font-sans text-base font-extrabold tracking-tight">
                SKILLMITRA
              </span>
            </div>
            <p className="text-xs text-[#4A5550] leading-relaxed max-w-sm">
              "Skills are everywhere. Opportunity shouldn't be." Connecting candidate skills, training outcomes, and employment data to help people build relevant careers and help policymakers understand what actually works.
            </p>
            <div className="text-[11px] text-[#789184] space-y-0.5 pt-1">
              <div>Mantralaya, Nariman Point, Mumbai - 400032</div>
              <div>State Public Data & Skilling Intelligence Cell</div>
            </div>
          </div>

          {/* Col 2: Candidate Tools */}
          <div className="space-y-2.5">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#1D2421]">For Candidates</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/candidate/skills" className="hover:text-[#164B36] transition-colors">Skill Assessment</Link></li>
              <li><Link to="/candidate/careers" className="hover:text-[#164B36] transition-colors">Career Pathways</Link></li>
              <li><Link to="/candidate/learning" className="hover:text-[#164B36] transition-colors">Learning Roadmap</Link></li>
              <li><Link to="/candidate/jobs" className="hover:text-[#164B36] transition-colors">Job Directory</Link></li>
              <li><Link to="/candidate/certificates" className="hover:text-[#164B36] transition-colors">Verified Credentials</Link></li>
            </ul>
          </div>

          {/* Col 3: Government & Analytics */}
          <div className="space-y-2.5">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#1D2421]">For Government</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/government" className="hover:text-[#164B36] transition-colors">Statewide Outcomes</Link></li>
              <li><Link to="/government/skills" className="hover:text-[#164B36] transition-colors">District Skill Heatmap</Link></li>
              <li><Link to="/government/forecast" className="hover:text-[#164B36] transition-colors">Demand Forecasting</Link></li>
              <li><Link to="/government/programs" className="hover:text-[#164B36] transition-colors">Program Impact & ROI</Link></li>
              <li><Link to="/security" className="hover:text-[#164B36] transition-colors">Security & Trust</Link></li>
            </ul>
          </div>

          {/* Col 4: Portals & Roles */}
          <div className="space-y-2.5">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#1D2421]">Ecosystem Portals</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/employer" className="hover:text-[#164B36] transition-colors">Employer Suite</Link></li>
              <li><Link to="/training" className="hover:text-[#164B36] transition-colors">Training Provider (VTP)</Link></li>
              <li><Link to="/login" className="hover:text-[#164B36] transition-colors">Role Gateway</Link></li>
              <li><Link to="/security" className="hover:text-[#164B36] transition-colors">Audit Logs</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#E5E2DA] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#789184]">
          <div>
            Government of Maharashtra · SIH26135 · Smart Education & Skilling Platform
          </div>

          <div className="flex items-center gap-4">
            <Link to="/security" className="hover:text-[#164B36] transition-colors">Security Controls</Link>
            <span>·</span>
            <span>Privacy Policy</span>
            <span>·</span>
            <span>Accessibility Guidelines</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
