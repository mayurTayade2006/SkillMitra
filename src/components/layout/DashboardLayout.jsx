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
  Menu, 
  X, 
  Search, 
  ChevronRight, 
  LogOut,
  GraduationCap
} from 'lucide-react';
import { CURRENT_USER } from '../../data/mockData';
import RoleSwitcherBar from '../common/RoleSwitcherBar';
import NotificationDrawer from '../common/NotificationDrawer';
import MitraAIAssistant from '../common/MitraAIAssistant';

export default function DashboardLayout({ children, role = "candidate" }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Navigation configurations based on role
  const candidateNav = [
    { name: "Overview", path: "/candidate", icon: LayoutDashboard },
    { name: "Skill Assessment", path: "/candidate/skills", icon: Sparkles, badge: "Live" },
    { name: "Career Path", path: "/candidate/careers", icon: Compass },
    { name: "Learning", path: "/candidate/learning", icon: BookOpen },
    { name: "Jobs", path: "/candidate/jobs", icon: Briefcase, badge: "24 Matches" },
    { name: "Credentials", path: "/candidate/certificates", icon: Award },
    { name: "Security & Trust", path: "/security", icon: ShieldCheck },
  ];

  const govNav = [
    { name: "Government Intelligence", path: "/government", icon: Building2 },
    { name: "District Heatmap", path: "/government/skills", icon: MapPin, badge: "36 Districts" },
    { name: "Demand Forecasting", path: "/government/forecast", icon: TrendingUp },
    { name: "Program Impact & ROI", path: "/government/programs", icon: FileText },
    { name: "Security & Trust", path: "/security", icon: ShieldCheck },
  ];

  const employerNav = [
    { name: "Employer Suite", path: "/employer", icon: Briefcase },
    { name: "Candidate Search", path: "/employer", icon: Users, badge: "AI Match" },
    { name: "District Heatmap", path: "/government/skills", icon: MapPin },
    { name: "Security & Trust", path: "/security", icon: ShieldCheck },
  ];

  const trainingNav = [
    { name: "Provider Overview", path: "/training", icon: BookOpen },
    { name: "Cohort Progression", path: "/training", icon: Users },
    { name: "Issued Credentials", path: "/candidate/certificates", icon: Award },
    { name: "Statewide Outcomes", path: "/government", icon: Building2 },
  ];

  const currentNavList = 
    role === "government" ? govNav : 
    role === "employer" ? employerNav : 
    role === "training" ? trainingNav : 
    candidateNav;

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1D2421] flex flex-col font-sans">
      
      {/* Quick Demo Switcher Bar */}
      <RoleSwitcherBar />

      <div className="flex-1 flex overflow-hidden">
        
        {/* Sidebar for Desktop */}
        <aside className="hidden lg:flex lg:flex-col w-64 bg-[#FAF9F5] border-r border-[#E5E2DA] shrink-0">
          
          {/* Brand Header */}
          <div className="p-4 border-b border-[#E5E2DA] flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-7 h-7 rounded bg-[#164B36] flex items-center justify-center text-[#FAF9F5] font-bold text-xs shadow-subtle">
                SM
              </div>
              <div>
                <span className="font-sans font-extrabold text-sm tracking-tight text-[#1D2421]">
                  SKILLMITRA
                </span>
                <span className="block text-[10px] text-[#789184] leading-none mt-0.5 font-medium">GovTech Maharashtra</span>
              </div>
            </Link>
          </div>

          {/* Current Role Banner */}
          <div className="px-4 py-2 bg-[#F3F0E8] border-b border-[#E5E2DA] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#164B36]" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#4A5550]">
                {role === "government" ? "Government View" : role === "employer" ? "Employer Suite" : role === "training" ? "Training Provider" : "Candidate Portal"}
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex-1 overflow-y-auto p-3 space-y-1">
            {currentNavList.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center justify-between px-3 py-2 rounded-md text-xs font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#EBF2EE] text-[#164B36] font-bold shadow-subtle border border-[#D1E0D7]'
                      : 'text-[#4A5550] hover:text-[#1D2421] hover:bg-[#F3F0E8]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#164B36]' : 'text-[#789184]'}`} />
                    <span>{item.name}</span>
                  </div>

                  {item.badge && (
                    <span className={`text-[9px] px-1.5 py-0.2 rounded font-mono font-semibold ${
                      isActive ? 'bg-[#FFFFFF] text-[#164B36] border border-[#D1E0D7]' : 'bg-[#E5E2DA] text-[#4A5550]'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* User Profile Footer Card */}
          <div className="p-3.5 border-t border-[#E5E2DA] bg-[#F3F0E8]">
            <div className="flex items-center gap-2.5">
              <img
                src={CURRENT_USER.avatar}
                alt={CURRENT_USER.name}
                className="w-8 h-8 rounded-full object-cover border border-[#E5E2DA]"
              />
              <div className="min-w-0 flex-1">
                <div className="text-xs font-bold text-[#1D2421] truncate">
                  {role === "government" ? "Rajesh Patil" : CURRENT_USER.name}
                </div>
                <div className="text-[10px] text-[#789184] truncate">
                  {role === "government" ? "Director (MSSDS)" : `${CURRENT_USER.district}, MH`}
                </div>
              </div>
              <Link to="/login" title="Switch Role">
                <LogOut className="w-3.5 h-3.5 text-[#789184] hover:text-[#C9634C] transition-colors" />
              </Link>
            </div>
          </div>

        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
          
          {/* Dashboard Header Bar */}
          <header className="h-14 bg-[#FAF9F5] border-b border-[#E5E2DA] px-4 sm:px-6 flex items-center justify-between gap-4 sticky top-0 z-30">
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-1.5 rounded-md border border-[#E5E2DA] text-[#1D2421]"
              >
                <Menu className="w-4 h-4" />
              </button>

              <div>
                <h1 className="text-sm sm:text-base font-bold text-[#1D2421] flex items-center gap-2">
                  {role === "government" 
                    ? "Government Intelligence Portal" 
                    : role === "employer" 
                    ? "Corporate Talent Hub" 
                    : `Good morning, ${CURRENT_USER.name.split(' ')[0]}.`}
                </h1>
              </div>
            </div>

            {/* Header Right Actions */}
            <div className="flex items-center gap-2.5">
              
              {/* Notification Bell */}
              <button
                onClick={() => setNotificationsOpen(true)}
                className="relative p-2 rounded-md border border-[#E5E2DA] bg-[#FAF9F5] hover:bg-[#F3F0E8] text-[#4A5550] hover:text-[#1D2421] transition-colors shadow-subtle"
                title="Notifications"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#E28A3B] text-[9px] font-bold text-white">
                  2
                </span>
              </button>

              {/* Portal Selector Button */}
              <Link
                to="/login"
                className="px-3 py-1.5 rounded-md border border-[#E5E2DA] bg-[#FFFFFF] hover:bg-[#F3F0E8] text-xs font-semibold text-[#1D2421] transition-colors flex items-center gap-1.5 shadow-subtle"
              >
                <GraduationCap className="w-3.5 h-3.5 text-[#164B36]" />
                <span className="hidden sm:inline">Switch Role</span>
              </Link>
            </div>

          </header>

          {/* Page Body View */}
          <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
            {children}
          </main>

        </div>

      </div>

      {/* Floating MitraAI Assistant everywhere in dashboard */}
      <MitraAIAssistant />

      {/* Slide-out Notification Drawer */}
      <NotificationDrawer 
        isOpen={notificationsOpen} 
        onClose={() => setNotificationsOpen(false)} 
      />

      {/* Mobile Drawer */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/40" onClick={() => setSidebarOpen(false)} />
          <div className="fixed inset-y-0 left-0 w-64 bg-[#FAF9F5] border-r border-[#E5E2DA] p-4 flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-[#E5E2DA]">
              <span className="font-extrabold text-[#1D2421] text-base">SKILLMITRA</span>
              <button onClick={() => setSidebarOpen(false)} className="p-1 rounded-md text-[#789184]">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-3 space-y-1">
              {currentNavList.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-md text-xs font-semibold ${
                    location.pathname === item.path ? 'bg-[#EBF2EE] text-[#164B36] font-bold border border-[#D1E0D7]' : 'text-[#4A5550] hover:bg-[#F3F0E8]'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>

            {/* User Profile in Mobile Drawer */}
            <div className="p-3 border-t border-[#E5E2DA] bg-[#F3F0E8] rounded-lg mt-auto flex items-center gap-2.5">
              <img
                src={CURRENT_USER.avatar}
                alt={CURRENT_USER.name}
                className="w-8 h-8 rounded-full object-cover border border-[#E5E2DA]"
              />
              <div className="min-w-0 flex-1">
                <div className="text-xs font-bold text-[#1D2421] truncate">
                  {role === "government" ? "Rajesh Patil" : CURRENT_USER.name}
                </div>
                <div className="text-[10px] text-[#789184] truncate">
                  {role === "government" ? "Director (MSSDS)" : `${CURRENT_USER.district}, MH`}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
