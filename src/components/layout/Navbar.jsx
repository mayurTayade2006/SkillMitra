import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Building2, 
  ChevronDown, 
  Menu, 
  X, 
  Bell, 
  ArrowRight, 
  ShieldCheck, 
  User, 
  Briefcase, 
  BookOpen, 
  Sparkles,
  GraduationCap
} from 'lucide-react';

export default function Navbar({ onOpenNotifications, unreadCount = 2 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [rolesDropdownOpen, setRolesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Platform", path: "/" },
    { name: "Candidates", path: "/candidate" },
    { name: "Skills Diagnostic", path: "/candidate/skills" },
    { name: "Government", path: "/government" },
    { name: "District Map", path: "/government/skills" },
    { name: "Security", path: "/security" },
  ];

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${
      scrolled 
        ? 'bg-[#06101E]/90 backdrop-blur-2xl border-b border-white/[0.14] shadow-[0_8px_32px_rgba(4,14,30,0.7)]' 
        : 'bg-[#06101E]/75 backdrop-blur-xl border-b border-white/[0.1]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Logo & Brand Identity with Liquid Droplet Glint */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-[#38BDF8] via-[#1D4ED8] to-[#93C5FD] flex items-center justify-center text-[#040810] font-black text-xs shadow-[0_0_20px_rgba(56,189,248,0.5)] group-hover:rotate-12 transition-transform duration-300">
              SM
              {/* Glass Dew Droplet Glint Accent */}
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white/80 shadow-[0_0_6px_#ffffff] border border-cyan-200" />
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-sans text-sm font-extrabold tracking-tight text-white group-hover:text-[#38BDF8] transition-colors">
                  SKILLMITRA
                </span>
              </div>
              <span className="text-[10px] text-[#93C5FD] font-mono leading-none">
                GovTech Maharashtra
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links (Liquid Glass Pill Container) */}
          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-[#0B1C33]/80 border border-white/[0.14] backdrop-blur-xl shadow-[inset_0_1px_2px_rgba(255,255,255,0.15)]">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-[#1D4ED8]/40 to-[#38BDF8]/25 border border-[#38BDF8]/40 font-extrabold shadow-[0_0_16px_rgba(56,189,248,0.3)]'
                      : 'text-[#94A3B8] hover:text-white hover:bg-white/[0.08]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5">
            
            {/* Notification Bell */}
            <button
              onClick={onOpenNotifications}
              className="relative p-2 rounded-lg border border-white/[0.14] bg-[#0B1C33]/80 hover:bg-[#122B4D] text-white transition-all group shadow-sm"
              title="Notifications"
            >
              <Bell className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform duration-300" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#F59E0B] text-[8px] font-bold text-[#070B10] shadow-sm">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Portal Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => setRolesDropdownOpen(!rolesDropdownOpen)}
                className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-white/[0.14] bg-[#0B1C33]/80 hover:bg-[#122B4D] text-white text-xs font-bold transition-all group shadow-sm"
              >
                <GraduationCap className="w-3.5 h-3.5 text-[#38BDF8] group-hover:rotate-12 transition-transform duration-300" />
                <span>Portals</span>
                <ChevronDown className={`w-3 h-3 text-[#93C5FD] transition-transform duration-200 ${rolesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {rolesDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-64 rounded-xl bg-[#0D141B]/95 border border-white/[0.12] shadow-surface-elevated p-2 z-50 backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-150"
                  onMouseLeave={() => setRolesDropdownOpen(false)}
                >
                  <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#64748B] font-mono border-b border-white/[0.06]">
                    Select Live Portal
                  </div>
                  <button
                    onClick={() => { navigate('/candidate'); setRolesDropdownOpen(false); }}
                    className="w-full text-left px-3 py-2 rounded-lg flex items-center gap-2.5 text-xs text-[#F5F7FA] hover:bg-white/[0.05] transition-all mt-1"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#4ADE80]" />
                    <div>
                      <div className="font-semibold">Candidate Portal</div>
                      <div className="text-[10px] text-[#94A3B8]">Shweta Sharma (78% Ready)</div>
                    </div>
                  </button>
                  <button
                    onClick={() => { navigate('/government'); setRolesDropdownOpen(false); }}
                    className="w-full text-left px-3 py-2 rounded-lg flex items-center gap-2.5 text-xs text-[#F5F7FA] hover:bg-white/[0.05] transition-all"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#22D3EE]" />
                    <div>
                      <div className="font-semibold">Government Intelligence</div>
                      <div className="text-[10px] text-[#94A3B8]">Statewide Outcomes (64.3%)</div>
                    </div>
                  </button>
                  <button
                    onClick={() => { navigate('/employer'); setRolesDropdownOpen(false); }}
                    className="w-full text-left px-3 py-2 rounded-lg flex items-center gap-2.5 text-xs text-[#F5F7FA] hover:bg-white/[0.05] transition-all"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#A78BFA]" />
                    <div>
                      <div className="font-semibold">Employer Suite</div>
                      <div className="text-[10px] text-[#94A3B8]">Hiring & Skill Matching</div>
                    </div>
                  </button>
                  <button
                    onClick={() => { navigate('/security'); setRolesDropdownOpen(false); }}
                    className="w-full text-left px-3 py-2 rounded-lg flex items-center gap-2.5 text-xs text-[#F5F7FA] hover:bg-white/[0.05] transition-all"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                    <div>
                      <div className="font-semibold">Security & Trust</div>
                      <div className="text-[10px] text-[#94A3B8]">92/100 Security Score</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Launch App CTA */}
            <Link
              to="/candidate"
              className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-[#22D3EE] to-[#A78BFA] hover:opacity-90 text-[#070B10] font-bold text-xs tracking-tight transition-all shadow-glow-teal flex items-center gap-1.5 group"
            >
              <span>Launch Demo</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-white/[0.08] text-[#F5F7FA] bg-white/[0.03]"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D141B]/95 backdrop-blur-2xl border-b border-white/[0.08] px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                location.pathname === link.path
                  ? 'bg-white/[0.08] text-[#F5F7FA] font-bold'
                  : 'text-[#94A3B8] hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3 border-t border-white/[0.06] grid grid-cols-2 gap-2">
            <Link
              to="/candidate"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-center rounded-lg bg-[#22D3EE] text-[#070B10] text-xs font-bold"
            >
              Candidate Portal
            </Link>
            <Link
              to="/government"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-center rounded-lg bg-white/[0.06] border border-white/[0.08] text-[#F5F7FA] text-xs font-bold"
            >
              Gov Portal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
