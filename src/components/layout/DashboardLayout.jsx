import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Sparkles, 
  Compass, 
  MapPin, 
  BookOpen, 
  Briefcase, 
  Award, 
  ShieldCheck, 
  Building2, 
  TrendingUp, 
  Users, 
  FileText, 
  Bell, 
  Search, 
  ChevronRight, 
  LogOut, 
  GraduationCap, 
  Activity, 
  Cpu, 
  Layers, 
  CheckCircle2 
} from 'lucide-react';
import { CURRENT_USER } from '../../data/mockData';
import NotificationDrawer from '../common/NotificationDrawer';
import MitraAIAssistant from '../common/MitraAIAssistant';
import ThemeToggle from '../common/ThemeToggle';

export default function DashboardLayout({ children, role = "candidate" }) {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // 1. LIVE DEMO PORTALS (Permanent in Left Sidebar)
  const demoPortals = [
    { name: "Candidate Portal", path: "/candidate", icon: GraduationCap, color: "#16A34A", badge: "Live Seeker" },
    { name: "Skill Intelligence", path: "/candidate/skills", icon: Sparkles, color: "#0284C7", badge: "AI Diagnostics" },
    { name: "Govt Intelligence", path: "/government", icon: Building2, color: "#0284C7", badge: "Outcome Radar" },
    { name: "District Heatmap", path: "/government/skills", icon: MapPin, color: "#D97706", badge: "36 Districts" },
    { name: "Employer Suite", path: "/employer", icon: Briefcase, color: "#7C3AED", badge: "Pre-Assessed" },
    { name: "Training Provider", path: "/training", icon: BookOpen, color: "#16A34A", badge: "NCVET Hub" },
  ];

  // 2. CONTEXT MODULE NAVIGATION
  const candidateNav = [
    { name: "Overview", path: "/candidate", icon: LayoutDashboard },
    { name: "Skill Assessment", path: "/candidate/skills", icon: Sparkles },
    { name: "Career Pathways", path: "/candidate/careers", icon: Compass },
    { name: "Learning Roadmap", path: "/candidate/learning", icon: BookOpen },
    { name: "Job Matches", path: "/candidate/jobs", icon: Briefcase, badge: "24" },
    { name: "Credentials", path: "/candidate/certificates", icon: Award },
    { name: "Security & Trust", path: "/security", icon: ShieldCheck },
  ];

  const govNav = [
    { name: "Statewide Intelligence", path: "/government", icon: Building2 },
    { name: "District Skill Map", path: "/government/skills", icon: MapPin, badge: "36" },
    { name: "Future Demand Forecast", path: "/government/forecast", icon: TrendingUp },
    { name: "Training Impact & ROI", path: "/government/programs", icon: FileText },
    { name: "Security & Compliance", path: "/security", icon: ShieldCheck },
  ];

  const employerNav = [
    { name: "Talent Pipeline", path: "/employer", icon: Users, badge: "AI Matched" },
    { name: "Post New Vacancy", path: "/employer", icon: Briefcase },
    { name: "District Heatmap", path: "/government/skills", icon: MapPin },
    { name: "Security Center", path: "/security", icon: ShieldCheck },
  ];

  const trainingNav = [
    { name: "Cohort Progression", path: "/training", icon: Users, badge: "8 Batches" },
    { name: "Curriculum Modules", path: "/candidate/learning", icon: BookOpen },
    { name: "Issued Credentials", path: "/candidate/certificates", icon: Award },
    { name: "State Analytics", path: "/government", icon: Building2 },
  ];

  const currentContextNav = 
    role === "government" ? govNav : 
    role === "employer" ? employerNav : 
    role === "training" ? trainingNav : 
    candidateNav;

  const currentRoleLabel = 
    role === "government" ? "GOVERNMENT INTELLIGENCE" : 
    role === "employer" ? "EMPLOYER SUITE" : 
    role === "training" ? "TRAINING PROVIDER" : 
    "CANDIDATE SUITE";

  return (
    <div className="min-h-screen bg-transparent text-[var(--text-primary)] flex overflow-hidden font-sans relative">
      
      {/* =========================================================
          FIXED NON-COLLAPSING LEFT SIDEBAR (Liquid Silk Glass Surface)
          ========================================================= */}
      <aside className="w-[270px] min-w-[270px] max-w-[270px] h-screen sticky top-0 flex flex-col bg-white/90 dark:bg-[#06101E]/90 backdrop-blur-2xl border-r border-slate-200/80 dark:border-white/[0.12] shadow-[4px_0_24px_rgba(0,0,0,0.03)] dark:shadow-[6px_0_30px_rgba(4,14,30,0.7)] shrink-0 z-30 select-none transition-colors duration-300">
        
        {/* Brand Header with Droplet Glint */}
        <div className="p-5 border-b border-slate-200/80 dark:border-white/[0.1]">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-[#38BDF8] via-[#1D4ED8] to-[#93C5FD] flex items-center justify-center text-white dark:text-[#040810] font-black text-xs shadow-[0_0_18px_rgba(56,189,248,0.5)] group-hover:rotate-12 transition-transform duration-300">
              SM
              {/* Glass Dew Glint */}
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-white/90 shadow-[0_0_5px_#ffffff]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-sans font-extrabold text-sm tracking-tight text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-[#38BDF8] transition-colors">
                  SKILLMITRA
                </span>
              </div>
              <span className="block text-[10px] text-sky-600 dark:text-[#93C5FD] font-mono mt-0.5">Skills & Opportunity</span>
            </div>
          </Link>
        </div>

        {/* Scrollable Navigation Body */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
          
          {/* Section 1: PRODUCT WORKSPACES */}
          <div className="space-y-1.5">
            <div className="px-2.5 pb-1 flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-[#93C5FD] font-mono">
                Product Workspaces
              </span>
              <span className="w-2 h-2 rounded-full bg-sky-500 dark:bg-[#38BDF8] shadow-[0_0_8px_#38BDF8] animate-pulse" />
            </div>

            {demoPortals.map((portal) => {
              const Icon = portal.icon;
              const isCurrent = location.pathname === portal.path;

              return (
                <Link
                  key={portal.name}
                  to={portal.path}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all group ${
                    isCurrent
                      ? 'bg-sky-50 dark:bg-gradient-to-r dark:from-[#1D4ED8]/35 dark:to-[#38BDF8]/20 text-sky-900 dark:text-white font-extrabold border border-sky-200 dark:border-[#38BDF8]/40 shadow-sm dark:shadow-[0_0_14px_rgba(56,189,248,0.25)]'
                      : 'text-slate-600 dark:text-[#94A3B8] hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/[0.06]'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span 
                      className="w-2 h-2 rounded-full shrink-0 transition-transform group-hover:scale-125"
                      style={{ backgroundColor: portal.color, boxShadow: isCurrent ? `0 0 8px ${portal.color}` : 'none' }}
                    />
                    <Icon className={`w-3.5 h-3.5 shrink-0 group-hover:rotate-12 transition-transform duration-300 ${isCurrent ? 'text-sky-600 dark:text-[#38BDF8]' : 'text-slate-400 dark:text-[#64748B] group-hover:text-slate-900 dark:group-hover:text-white'}`} />
                    <span className="truncate">{portal.name}</span>
                  </div>

                  {portal.badge && (
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-white/[0.06] text-slate-600 dark:text-[#E2E8F0] border border-slate-200 dark:border-white/[0.1] group-hover:text-slate-900 dark:group-hover:text-white">
                      {portal.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Section 2: CONTEXT MODULE NAVIGATION */}
          <div className="space-y-1.5 pt-3 border-t border-slate-200/80 dark:border-white/[0.1]">
            <div className="px-2.5 pb-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-[#94A3B8] font-mono">
                {currentRoleLabel}
              </span>
            </div>

            {currentContextNav.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all group ${
                    isActive
                      ? 'bg-cyan-50 dark:bg-gradient-to-r dark:from-[#22D3EE]/25 dark:to-[#A78BFA]/20 text-cyan-900 dark:text-white font-extrabold border border-cyan-200 dark:border-[#22D3EE]/50 shadow-sm dark:shadow-[0_0_14px_rgba(34,211,238,0.25)]'
                      : 'text-slate-600 dark:text-[#CBD5E1] hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/[0.08]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-3.5 h-3.5 group-hover:rotate-12 transition-transform duration-300 ${isActive ? 'text-cyan-600 dark:text-[#22D3EE]' : 'text-slate-400 dark:text-[#94A3B8] group-hover:text-slate-900 dark:group-hover:text-white'}`} />
                    <span>{item.name}</span>
                  </div>

                  {item.badge && (
                    <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded font-bold ${
                      isActive 
                        ? 'bg-cyan-100 text-cyan-800 border border-cyan-300 dark:bg-[#22D3EE]/30 dark:text-white dark:border-[#22D3EE]/50' 
                        : 'bg-slate-100 dark:bg-white/[0.08] text-slate-600 dark:text-[#E2E8F0]'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

        </div>

        {/* User Profile Footer Card */}
        <div className="p-4 border-t border-slate-200/80 dark:border-white/[0.12] bg-slate-50/90 dark:bg-[#13202e]/90 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <img
              src={CURRENT_USER.avatar}
              alt={CURRENT_USER.name}
              className="w-8 h-8 rounded-lg object-cover border border-slate-200 dark:border-white/[0.2] shadow-sm"
            />
            <div className="min-w-0 flex-1">
              <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                {role === "government" ? "Rajesh Patil" : CURRENT_USER.name}
              </div>
              <div className="text-[10px] text-slate-500 dark:text-[#94A3B8] truncate font-mono">
                {role === "government" ? "Director (MSSDS)" : `${CURRENT_USER.district}, MH`}
              </div>
            </div>
            <Link to="/login" title="Switch Portal">
              <LogOut className="w-3.5 h-3.5 text-slate-400 dark:text-[#94A3B8] hover:text-amber-500 dark:hover:text-[#F59E0B] transition-colors" />
            </Link>
          </div>
        </div>

      </aside>

      {/* =========================================================
          MAIN APPLICATION AREA (Header + Content)
          ========================================================= */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto relative z-10">
        
        {/* TOP HEADER */}
        <header className="h-14 bg-white/88 dark:bg-[#0e1823]/88 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/[0.14] px-6 sm:px-8 flex items-center justify-between gap-4 sticky top-0 z-20 shrink-0 shadow-sm transition-colors duration-300">
          
          {/* Left: Breadcrumbs / Title */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-500 dark:text-[#94A3B8] font-mono uppercase font-bold">Portal</span>
            <ChevronRight className="w-3 h-3 text-slate-400 dark:text-[#94A3B8]" />
            <span className="font-extrabold text-slate-900 dark:text-white truncate">
              {role === "government" 
                ? "Government Intelligence Suite" 
                : role === "employer" 
                ? "Corporate Hiring Suite" 
                : role === "training" 
                ? "Vocational Training Partner Portal" 
                : "Candidate Career & Skill Intelligence"}
            </span>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            
            {/* AI Intelligence Status Pill */}
            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 dark:bg-[#22D3EE]/15 border border-cyan-200 dark:border-[#22D3EE]/40 text-cyan-800 dark:text-[#22D3EE] text-[10px] font-mono font-bold shadow-sm dark:shadow-[0_0_10px_rgba(34,211,238,0.2)]">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-[#22D3EE] animate-pulse" />
              <span>Mitra AI Active</span>
            </div>

            {/* Animated Light / Dark Mode Toggle */}
            <ThemeToggle />

            {/* Notification Bell */}
            <button
              onClick={() => setNotificationsOpen(true)}
              className="relative p-2 rounded-lg border border-slate-200 dark:border-white/[0.14] bg-white/80 dark:bg-white/[0.08] hover:bg-slate-100 dark:hover:bg-white/[0.15] text-slate-700 dark:text-[#F5F7FA] transition-all shadow-sm"
              title="Notifications"
            >
              <Bell className="w-3.5 h-3.5" />
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#F59E0B] text-[8px] font-bold text-white dark:text-[#070B10] shadow-sm">
                2
              </span>
            </button>

            {/* Quick Switch Role Gateway */}
            <Link
              to="/login"
              className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/[0.14] bg-white/80 dark:bg-white/[0.08] hover:bg-slate-100 dark:hover:bg-white/[0.15] text-xs font-bold text-slate-800 dark:text-white transition-all flex items-center gap-1.5 shadow-sm"
            >
              <GraduationCap className="w-3.5 h-3.5 text-violet-600 dark:text-[#A78BFA]" />
              <span className="hidden md:inline">Switch Portal</span>
            </Link>

          </div>

        </header>

        {/* Page Content Container */}
        <main className="flex-1 px-6 sm:px-8 py-8 max-w-[1400px] w-full mx-auto">
          {children}
        </main>

      </div>

      {/* Global Slide-Over Notification Drawer */}
      <NotificationDrawer
        isOpen={notificationsOpen}
        onClose={() => setNotificationsOpen(false)}
      />

      {/* Persistent Mitra AI Copilot Button & Drawer */}
      <MitraAIAssistant />

    </div>
  );
}
