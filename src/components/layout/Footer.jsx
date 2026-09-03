import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, ShieldCheck, Award, Sparkles, Compass, Briefcase, Layers } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-100/90 dark:bg-[#070B10]/95 border-t border-slate-200 dark:border-white/10 pt-16 pb-12 text-slate-600 dark:text-[#94A3B8] text-xs relative z-10 backdrop-blur-xl transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Product Mission Glass Banner */}
        <div className="mb-14 p-6 rounded-2xl bg-white/80 dark:bg-[#0D141B] border border-slate-200 dark:border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-sm dark:shadow-glass backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 dark:bg-sky-500/20 text-sky-700 dark:text-[#38BDF8] border border-sky-500/30 flex items-center justify-center font-bold shrink-0 shadow-sm">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="text-slate-900 dark:text-[#F5F7FA] font-bold text-sm tracking-tight flex items-center gap-2">
                SkillMitra Career & Skills Intelligence Platform
              </div>
              <div className="text-[11px] text-slate-500 dark:text-[#94A3B8] mt-0.5">
                Connecting talent competencies, verified training tracks, and real-time career opportunities.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 dark:bg-sky-500/10 border border-sky-300 dark:border-sky-500/30 text-sky-800 dark:text-[#38BDF8] text-[11px] font-bold font-mono">
              <span className="w-2 h-2 rounded-full bg-sky-600 dark:bg-[#22D3EE] animate-pulse" />
              Live Career Intelligence Network
            </span>
          </div>
        </div>

        {/* 4 Column Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-14">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#22D3EE] to-[#7C3AED] flex items-center justify-center text-white dark:text-[#070B10] font-black text-xs shadow-sm">
                SM
              </div>
              <span className="text-slate-900 dark:text-[#F5F7FA] font-sans text-lg font-extrabold tracking-tight">
                SKILLMITRA
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed max-w-sm">
              <span className="text-slate-900 dark:text-[#F5F7FA] font-semibold">Skills are everywhere. Opportunity shouldn't be.</span> Discover what you know, build what you need, and connect with opportunities that match your potential.
            </p>
            <div className="text-[11px] text-slate-500 dark:text-[#64748B] space-y-1 font-mono pt-1">
              <div>Skills & Employment Intelligence Ecosystem</div>
              <div>Secure, Cryptographically Verified Pathways</div>
            </div>
          </div>

          {/* Col 2: Candidate Tools */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 dark:text-[#F5F7FA] font-mono">For Candidates</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/candidate/skills" className="hover:text-sky-600 dark:hover:text-[#22D3EE] transition-colors">Skill Diagnostics</Link></li>
              <li><Link to="/candidate/careers" className="hover:text-sky-600 dark:hover:text-[#22D3EE] transition-colors">Career Pathways</Link></li>
              <li><Link to="/candidate/learning" className="hover:text-sky-600 dark:hover:text-[#22D3EE] transition-colors">Adaptive Roadmap</Link></li>
              <li><Link to="/candidate/jobs" className="hover:text-sky-600 dark:hover:text-[#22D3EE] transition-colors">Job Matching</Link></li>
              <li><Link to="/candidate/certificates" className="hover:text-sky-600 dark:hover:text-[#22D3EE] transition-colors">Verified Credentials</Link></li>
            </ul>
          </div>

          {/* Col 3: Workspaces & Intelligence */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 dark:text-[#F5F7FA] font-mono">Workspaces</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/candidate" className="hover:text-sky-600 dark:hover:text-[#22D3EE] transition-colors">Candidate Radar</Link></li>
              <li><Link to="/employer" className="hover:text-sky-600 dark:hover:text-[#22D3EE] transition-colors">Employer Suite</Link></li>
              <li><Link to="/training" className="hover:text-sky-600 dark:hover:text-[#22D3EE] transition-colors">Training Partner (VTP)</Link></li>
              <li><Link to="/government" className="hover:text-sky-600 dark:hover:text-[#22D3EE] transition-colors">Workforce Intelligence</Link></li>
              <li><Link to="/security" className="hover:text-sky-600 dark:hover:text-[#22D3EE] transition-colors">Security & Trust</Link></li>
            </ul>
          </div>

          {/* Col 4: Platform */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 dark:text-[#F5F7FA] font-mono">Platform</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/" className="hover:text-sky-600 dark:hover:text-[#22D3EE] transition-colors">Overview</Link></li>
              <li><Link to="/government/forecast" className="hover:text-sky-600 dark:hover:text-[#22D3EE] transition-colors">Demand Forecasting</Link></li>
              <li><Link to="/login" className="hover:text-sky-600 dark:hover:text-[#22D3EE] transition-colors">Portal Gateway</Link></li>
              <li><Link to="/security" className="hover:text-sky-600 dark:hover:text-[#22D3EE] transition-colors">Audit Ledger</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 dark:border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 dark:text-[#64748B]">
          <div>
            © 2026 SkillMitra · All Rights Reserved. Production-Ready Skills & Career Intelligence.
          </div>

          <div className="flex items-center gap-4">
            <Link to="/security" className="hover:text-sky-600 dark:hover:text-[#22D3EE] transition-colors">Security Center (92/100)</Link>
            <span>·</span>
            <span className="hover:text-sky-600 dark:hover:text-[#22D3EE] cursor-pointer">Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-sky-600 dark:hover:text-[#22D3EE] cursor-pointer">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
