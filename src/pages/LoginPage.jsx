import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ROLES_DATA } from '../data/mockData';
import { ShieldCheck, ChevronRight, ArrowRight, Sparkles, Lock, GraduationCap } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import MitraAIAssistant from '../components/common/MitraAIAssistant';

export default function LoginPage() {
  const navigate = useNavigate();

  const handleRoleSelect = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-transparent text-[#F5F7FA] flex flex-col font-sans relative z-10">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 flex flex-col items-center justify-center">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#22D3EE]/10 border border-[#22D3EE]/25 text-[#22D3EE] text-xs font-semibold font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
            <span>ROLE-BASED ACCESS CONTROL (RBAC)</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F5F7FA] tracking-tight">
            Select Your Portal Gateway
          </h1>
          <p className="text-xs sm:text-sm text-[#94A3B8] font-mono">
            Select any stakeholder persona below to enter that role's live pre-populated intelligence environment.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {ROLES_DATA.map((role) => (
            <div
              key={role.id}
              onClick={() => handleRoleSelect(role.path)}
              className="surface-card rounded-2xl p-6 cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#0D141B] text-[#94A3B8] border border-white/[0.06] font-mono">
                    {role.badge}
                  </span>
                  <ChevronRight className="w-4 h-4 text-[#64748B] group-hover:text-[#22D3EE] group-hover:translate-x-1 transition-all" />
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#F5F7FA] group-hover:text-[#22D3EE] transition-colors">
                    {role.title}
                  </h3>
                  <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed">
                    {role.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <span className="text-[10px] text-[#64748B]">{role.metrics}</span>
                <span className="font-bold text-[#22D3EE] flex items-center gap-1 group-hover:underline">
                  Launch <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Security & Verification Banner */}
        <div className="mt-12 p-4 rounded-xl bg-[#121B23] border border-white/[0.08] max-w-2xl w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs shadow-surface">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#A78BFA]/15 text-[#A78BFA] flex items-center justify-center font-bold">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-[#F5F7FA]">Single Sign-On (SSO) & DigiLocker Supported</div>
              <div className="text-[11px] text-[#64748B] font-mono">OAuth 2.0 / OpenID Connect with Aadhaar authentication</div>
            </div>
          </div>
          <Link to="/security" className="text-[#22D3EE] font-mono font-bold hover:underline shrink-0">
            Trust Center →
          </Link>
        </div>

      </main>

      <Footer />
      <MitraAIAssistant />
    </div>
  );
}
