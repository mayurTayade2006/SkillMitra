import React, { useState } from 'react';
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
  BookOpen
} from 'lucide-react';
import { CURRENT_USER } from '../../data/mockData';

export default function Navbar({ onOpenNotifications, unreadCount = 2 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [rolesDropdownOpen, setRolesDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Platform", path: "/" },
    { name: "For Candidates", path: "/candidate" },
    { name: "For Employers", path: "/employer" },
    { name: "For Government", path: "/government" },
    { name: "Insights", path: "/government/skills" },
    { name: "Security", path: "/security" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF9F5]/95 backdrop-blur-md border-b border-[#E5E2DA] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Logo & Brand Identity */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded bg-[#164B36] flex items-center justify-center text-[#FAF9F5] font-black text-sm tracking-tight shadow-subtle group-hover:bg-[#113A2A] transition-colors">
              SM
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-sans text-base font-extrabold tracking-tight text-[#1D2421]">
                  SKILLMITRA
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-[#EBF2EE] text-[#164B36] border border-[#D1E0D7] uppercase tracking-wider">
                  GovTech
                </span>
              </div>
              <span className="text-[11px] text-[#789184] font-medium leading-none">
                GovTech Maharashtra
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links with Green Underline on Active */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`nav-link-item px-3.5 py-2 text-xs font-semibold transition-colors duration-150 ${
                    isActive
                      ? 'text-[#164B36] active font-bold'
                      : 'text-[#4A5550] hover:text-[#1D2421]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            
            {/* Notification Bell */}
            <button
              onClick={onOpenNotifications}
              className="relative p-2 rounded-md border border-[#E5E2DA] bg-[#FAF9F5] hover:bg-[#F3F0E8] text-[#4A5550] hover:text-[#1D2421] transition-colors shadow-subtle"
              title="Notifications"
            >
              <Bell className="w-4 h-4" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#E28A3B] text-[9px] font-bold text-white">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Portal Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => setRolesDropdownOpen(!rolesDropdownOpen)}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#E5E2DA] bg-[#FFFFFF] hover:bg-[#F3F0E8] text-[#1D2421] text-xs font-semibold transition-colors shadow-subtle"
              >
                <span>Switch Portal</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#789184] transition-transform duration-150 ${rolesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {rolesDropdownOpen && (
                <div 
                  className="absolute right-0 mt-1.5 w-56 rounded-lg bg-[#FFFFFF] border border-[#E5E2DA] shadow-elevated py-1.5 z-50 animate-in fade-in duration-150"
                  onMouseLeave={() => setRolesDropdownOpen(false)}
                >
                  <div className="px-3 py-1 border-b border-[#ECE9E1] text-[10px] font-bold uppercase tracking-wider text-[#789184]">
                    Select Live View
                  </div>
                  <button
                    onClick={() => { navigate('/candidate'); setRolesDropdownOpen(false); }}
                    className="w-full text-left px-3 py-2 flex items-center gap-2.5 text-xs text-[#1D2421] hover:bg-[#FAF9F5] transition-colors"
                  >
                    <User className="w-4 h-4 text-[#164B36]" />
                    <div>
                      <div className="font-semibold">Candidate Portal</div>
                      <div className="text-[10px] text-[#789184]">Shweta Sharma</div>
                    </div>
                  </button>
                  <button
                    onClick={() => { navigate('/government'); setRolesDropdownOpen(false); }}
                    className="w-full text-left px-3 py-2 flex items-center gap-2.5 text-xs text-[#1D2421] hover:bg-[#FAF9F5] transition-colors"
                  >
                    <Building2 className="w-4 h-4 text-[#E28A3B]" />
                    <div>
                      <div className="font-semibold">Government Officer</div>
                      <div className="text-[10px] text-[#789184]">State Policy Analytics</div>
                    </div>
                  </button>
                  <button
                    onClick={() => { navigate('/employer'); setRolesDropdownOpen(false); }}
                    className="w-full text-left px-3 py-2 flex items-center gap-2.5 text-xs text-[#1D2421] hover:bg-[#FAF9F5] transition-colors"
                  >
                    <Briefcase className="w-4 h-4 text-[#C9634C]" />
                    <div>
                      <div className="font-semibold">Employer Suite</div>
                      <div className="text-[10px] text-[#789184]">Talent Matching</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Sign In Link */}
            <Link
              to="/login"
              className="hidden sm:inline-block text-xs font-semibold text-[#4A5550] hover:text-[#1D2421] px-2 py-1.5 transition-colors"
            >
              Sign In
            </Link>

            {/* Solid Deep Forest Primary CTA */}
            <Link
              to="/candidate"
              className="px-4 py-2 rounded-md bg-[#164B36] hover:bg-[#113A2A] text-[#FAF9F5] font-semibold text-xs tracking-tight transition-colors shadow-subtle flex items-center gap-1.5"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md border border-[#E5E2DA] text-[#1D2421]"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF9F5] border-b border-[#E5E2DA] px-4 pt-2 pb-5 space-y-1.5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-xs font-semibold ${
                location.pathname === link.path
                  ? 'bg-[#EBF2EE] text-[#164B36] font-bold'
                  : 'text-[#4A5550] hover:bg-[#F3F0E8]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-[#E5E2DA] flex gap-2">
            <Link
              to="/candidate"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 py-2 text-center rounded-md bg-[#164B36] text-[#FAF9F5] text-xs font-bold"
            >
              Candidate Portal
            </Link>
            <Link
              to="/government"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 py-2 text-center rounded-md bg-[#FDF4EC] text-[#E28A3B] border border-[#F8DCBE] text-xs font-bold"
            >
              Gov Portal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
