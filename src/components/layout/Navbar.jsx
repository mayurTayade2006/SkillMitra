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
import ThemeToggle from '../common/ThemeToggle';

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
    { name: "Opportunities", path: "/candidate/jobs" },
    { name: "Skills Diagnostic", path: "/candidate/skills" },
    { name: "Learning Paths", path: "/candidate/learning" },
    { name: "Employer Suite", path: "/employer" },
    { name: "Workforce Radar", path: "/government" },
  ];

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 dark:bg-[#06101E]/90 backdrop-blur-2xl border-b border-slate-200/80 dark:border-white/[0.14] shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(4,14,30,0.7)]' 
        : 'bg-white/75 dark:bg-[#06101E]/75 backdrop-blur-xl border-b border-slate-200/60 dark:border-white/[0.1]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Logo & Brand Identity */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-[#22D3EE] via-[#0284C7] to-[#7C3AED] flex items-center justify-center text-white dark:text-[#040810] font-black text-xs shadow-[0_0_20px_rgba(34,211,238,0.4)] group-hover:rotate-12 transition-transform duration-300">
              SM
              {/* Glass Glint Accent */}
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white/90 shadow-[0_0_6px_#ffffff] border border-cyan-200" />
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-sans text-sm font-extrabold tracking-tight text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-[#22D3EE] transition-colors">
                  SKILLMITRA
                </span>
              </div>
              <span className="text-[10px] text-sky-600 dark:text-[#93C5FD] font-mono leading-none">
                Skills & Opportunity Platform
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-slate-100/90 dark:bg-[#0B1C33]/80 border border-slate-200 dark:border-white/[0.14] backdrop-blur-xl shadow-inner">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-sky-900 dark:text-white bg-white dark:bg-gradient-to-r dark:from-[#1D4ED8]/40 dark:to-[#38BDF8]/25 border border-sky-300 dark:border-[#38BDF8]/40 font-extrabold shadow-sm dark:shadow-[0_0_16px_rgba(56,189,248,0.3)]'
                      : 'text-slate-600 dark:text-[#94A3B8] hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/[0.08]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5">
            
            {/* Animated Light / Dark Mode Toggle */}
            <ThemeToggle />

            {/* Notification Bell */}
            <button
              onClick={onOpenNotifications}
              className="relative p-2 rounded-lg border border-slate-200 dark:border-white/[0.14] bg-white/80 dark:bg-[#0B1C33]/80 hover:bg-slate-100 dark:hover:bg-[#122B4D] text-slate-700 dark:text-white transition-all group shadow-sm"
              title="Notifications"
            >
              <Bell className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform duration-300" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#F59E0B] text-[8px] font-bold text-white dark:text-[#070B10] shadow-sm">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Workspaces Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => setRolesDropdownOpen(!rolesDropdownOpen)}
                className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-slate-200 dark:border-white/[0.14] bg-white/80 dark:bg-[#0B1C33]/80 hover:bg-slate-100 dark:hover:bg-[#122B4D] text-slate-800 dark:text-white text-xs font-bold transition-all group shadow-sm"
              >
                <GraduationCap className="w-3.5 h-3.5 text-cyan-600 dark:text-[#38BDF8] group-hover:rotate-12 transition-transform duration-300" />
                <span>Workspaces</span>
                <ChevronDown className={`w-3 h-3 text-slate-500 dark:text-[#93C5FD] transition-transform duration-200 ${rolesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {rolesDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-64 rounded-xl bg-white/95 dark:bg-[#0D141B]/95 border border-slate-200 dark:border-white/[0.12] shadow-xl p-2 z-50 backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-150"
                  onMouseLeave={() => setRolesDropdownOpen(false)}
                >
                  <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-[#64748B] font-mono border-b border-slate-100 dark:border-white/[0.06]">
                    Switch Workspace
                  </div>
                  <button
                    onClick={() => { navigate('/candidate'); setRolesDropdownOpen(false); }}
                    className="w-full text-left px-3 py-2 rounded-lg flex items-center gap-2.5 text-xs text-slate-800 dark:text-[#F5F7FA] hover:bg-slate-100 dark:hover:bg-white/[0.05] transition-all mt-1"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#16A34A] dark:bg-[#4ADE80]" />
                    <div>
                      <div className="font-semibold">Candidate Portal</div>
                      <div className="text-[10px] text-slate-500 dark:text-[#94A3B8]">Shweta Sharma (78% Ready)</div>
                    </div>
                  </button>
                  <button
                    onClick={() => { navigate('/employer'); setRolesDropdownOpen(false); }}
                    className="w-full text-left px-3 py-2 rounded-lg flex items-center gap-2.5 text-xs text-slate-800 dark:text-[#F5F7FA] hover:bg-slate-100 dark:hover:bg-white/[0.05] transition-all"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#7C3AED] dark:bg-[#A78BFA]" />
                    <div>
                      <div className="font-semibold">Employer Suite</div>
                      <div className="text-[10px] text-slate-500 dark:text-[#94A3B8]">Hiring & Talent Pipeline</div>
                    </div>
                  </button>
                  <button
                    onClick={() => { navigate('/training'); setRolesDropdownOpen(false); }}
                    className="w-full text-left px-3 py-2 rounded-lg flex items-center gap-2.5 text-xs text-slate-800 dark:text-[#F5F7FA] hover:bg-slate-100 dark:hover:bg-white/[0.05] transition-all"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#D97706] dark:bg-[#F59E0B]" />
                    <div>
                      <div className="font-semibold">Training Partner (VTP)</div>
                      <div className="text-[10px] text-slate-500 dark:text-[#94A3B8]">Curriculum & Cohorts</div>
                    </div>
                  </button>
                  <button
                    onClick={() => { navigate('/government'); setRolesDropdownOpen(false); }}
                    className="w-full text-left px-3 py-2 rounded-lg flex items-center gap-2.5 text-xs text-slate-800 dark:text-[#F5F7FA] hover:bg-slate-100 dark:hover:bg-white/[0.05] transition-all"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#0284C7] dark:bg-[#22D3EE]" />
                    <div>
                      <div className="font-semibold">Workforce Intelligence</div>
                      <div className="text-[10px] text-slate-500 dark:text-[#94A3B8]">Regional Absorption (64.3%)</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Launch App CTA */}
            <Link
              to="/candidate"
              className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-[#0284C7] to-[#7C3AED] dark:from-[#22D3EE] dark:to-[#A78BFA] hover:opacity-90 text-white dark:text-[#070B10] font-bold text-xs tracking-tight transition-all shadow-md dark:shadow-glow-teal flex items-center gap-1.5 group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-slate-200 dark:border-white/[0.08] text-slate-800 dark:text-[#F5F7FA] bg-slate-100 dark:bg-white/[0.03]"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-[#0D141B]/95 backdrop-blur-2xl border-b border-slate-200 dark:border-white/[0.08] px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                location.pathname === link.path
                  ? 'bg-sky-50 dark:bg-white/[0.08] text-sky-900 dark:text-[#F5F7FA] font-bold'
                  : 'text-slate-600 dark:text-[#94A3B8] hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/[0.04]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3 border-t border-slate-100 dark:border-white/[0.06] grid grid-cols-2 gap-2">
            <Link
              to="/candidate"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-center rounded-lg bg-sky-600 dark:bg-[#22D3EE] text-white dark:text-[#070B10] text-xs font-bold"
            >
              Candidate Portal
            </Link>
            <Link
              to="/employer"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-center rounded-lg bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/[0.08] text-slate-800 dark:text-[#F5F7FA] text-xs font-bold"
            >
              Employer Suite
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
