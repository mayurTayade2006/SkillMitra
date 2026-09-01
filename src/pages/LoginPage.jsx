import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ROLES_DATA } from '../data/mockData';
import { ShieldCheck, ChevronRight, ArrowRight } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import RoleSwitcherBar from '../components/common/RoleSwitcherBar';

export default function LoginPage() {
  const navigate = useNavigate();

  const handleRoleSelect = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1D2421] flex flex-col font-sans">
      <RoleSwitcherBar />
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 flex flex-col items-center justify-center">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E5E2DA] text-[#4A5550] text-[11px] font-semibold shadow-subtle">
            <span className="w-1.5 h-1.5 rounded-full bg-[#164B36]" />
            <span>Role-Based Access Control</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#1D2421] tracking-tight">
            Select Your Portal Gateway
          </h1>
          <p className="text-xs sm:text-sm text-[#4A5550]">
            Select any stakeholder persona below to enter that role's live pre-populated environment.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
          {ROLES_DATA.map((role) => (
            <div
              key={role.id}
              onClick={() => handleRoleSelect(role.path)}
              className="p-5 sm:p-6 rounded-2xl bg-[#FFFFFF] border border-[#E5E2DA] hover:border-[#164B36] cursor-pointer transition-colors shadow-card flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#EBF2EE] text-[#164B36] border border-[#D1E0D7]">
                    {role.badge}
                  </span>
                  <ChevronRight className="w-4 h-4 text-[#789184] group-hover:text-[#164B36] transition-colors" />
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#1D2421] group-hover:text-[#164B36] transition-colors">
                    {role.title}
                  </h3>
                  <p className="text-xs text-[#4A5550] mt-1 leading-relaxed">
                    {role.description}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-3.5 border-t border-[#ECE9E1] flex items-center justify-between text-xs">
                <span className="text-[10px] text-[#789184] font-mono">{role.metrics}</span>
                <span className="font-bold text-[#164B36] flex items-center gap-1 group-hover:underline">
                  Enter <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Security & Verification Banner */}
        <div className="mt-10 p-4 rounded-xl bg-[#FFFFFF] border border-[#E5E2DA] max-w-2xl w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs shadow-subtle">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#164B36] shrink-0" />
            <div>
              <div className="font-bold text-[#1D2421]">Single Sign-On (SSO) & DigiLocker Supported</div>
              <div className="text-[11px] text-[#789184]">OAuth 2.0 / OpenID Connect with Aadhaar authentication</div>
            </div>
          </div>
          <Link to="/security" className="text-[#164B36] font-bold hover:underline shrink-0">
            Trust Center →
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}
