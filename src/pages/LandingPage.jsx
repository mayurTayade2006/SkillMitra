import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Building2, 
  Users, 
  Award, 
  Briefcase, 
  MapPin, 
  Sparkles, 
  ChevronRight, 
  BarChart3, 
  Compass, 
  Database, 
  Layers, 
  Cpu, 
  Activity, 
  GraduationCap,
  ArrowUpRight,
  Zap,
  Check
} from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import MitraAIAssistant from '../components/common/MitraAIAssistant';
import NotificationDrawer from '../components/common/NotificationDrawer';
import CinematicStoryHero from '../components/common/CinematicStoryHero';
import { ROLES_DATA } from '../data/mockData';

export default function LandingPage() {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [activeStoryTab, setActiveStoryTab] = useState(0);

  const scrollStories = [
    {
      num: "01",
      tag: "DISCOVER",
      accent: "#0284C7",
      title: "Understand what you already know.",
      description: "Adaptive AI skill assessments diagnose core competencies across SQL, Python, Cloud, and Engineering against live industry standards.",
      icon: Sparkles,
      previewTitle: "Diagnostic Skill Assessment",
      metricLabel: "Assessed Competencies",
      metricValue: "12 Verified Skills",
      highlight: "Real-time psychometric & technical diagnostic"
    },
    {
      num: "02",
      tag: "IDENTIFY",
      accent: "#D97706",
      title: "Find the skills holding you back.",
      description: "Pinpoint exact skill gaps with precision. Compare candidate mastery against 480+ active job specifications across industry hubs.",
      icon: Layers,
      previewTitle: "Skill Gap Benchmark",
      metricLabel: "Critical Deficit Identified",
      metricValue: "Power BI (-28%)",
      highlight: "Real-time telemetry gap detection"
    },
    {
      num: "03",
      tag: "BUILD",
      accent: "#7C3AED",
      title: "Follow a path built for you.",
      description: "AI-generated modular roadmap connecting accredited learning partners and micro-credentials directly to your target role.",
      icon: Compass,
      previewTitle: "Personalized Roadmap",
      metricLabel: "Trajectory Acceleration",
      metricValue: "4 Weeks to Job Ready",
      highlight: "Modular milestones aligned with industry frameworks"
    },
    {
      num: "04",
      tag: "CONNECT",
      accent: "#16A36F",
      title: "Meet the opportunities that fit.",
      description: "Direct talent matching connects pre-assessed candidates with verified employer hiring desks across regional innovation hubs.",
      icon: Briefcase,
      previewTitle: "Regional Opportunity Matching",
      metricLabel: "High-Fit Openings",
      metricValue: "24 Direct Matches (94% Max Fit)",
      highlight: "Fast-track algorithmic job matching"
    },
    {
      num: "05",
      tag: "MEASURE",
      accent: "#64748B",
      title: "See what training actually achieves.",
      description: "Comprehensive workforce analytics give talent leaders and partners transparent visibility into training efficacy, retention, and wage growth.",
      icon: BarChart3,
      previewTitle: "Workforce Telemetry",
      metricLabel: "Average Placement Conversion",
      metricValue: "64.3% Employed",
      highlight: "Continuous closed-loop data intelligence"
    },
  ];

  return (
    <div className="min-h-screen bg-transparent text-[var(--text-primary)] flex flex-col font-sans relative z-10 transition-colors">
      
      {/* Main Navbar */}
      <Navbar onOpenNotifications={() => setNotificationsOpen(true)} />

      {/* =========================================================
          HERO SECTION (Editorial headline on Left, Cinematic Story on Right)
          ========================================================= */}
      <section className="relative pt-8 pb-16 sm:pt-16 sm:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
            
            {/* Left Column: Editorial Headline & Copy */}
            <div className="lg:col-span-5 xl:col-span-5 space-y-6 sm:space-y-7">
              
              {/* Product Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-[#121B23] border border-slate-200 dark:border-white/[0.08] text-sky-700 dark:text-[#22D3EE] text-xs font-semibold shadow-sm">
                <span className="w-2 h-2 rounded-full bg-sky-500 dark:bg-[#22D3EE] animate-pulse" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-slate-600 dark:text-[#94A3B8]">
                  SKILLMITRA · <strong className="text-sky-700 dark:text-[#22D3EE]">SKILLS & CAREER INTELLIGENCE</strong>
                </span>
              </div>

              {/* Editorial Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[40px] xl:text-[50px] 2xl:text-[56px] font-extrabold tracking-tight text-slate-900 dark:text-[#F5F7FA] leading-[1.12]">
                SKILLS ARE EVERYWHERE. <br />
                <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-[#7C3AED] to-[#D97706] dark:from-[#22D3EE] dark:via-[#A78BFA] dark:to-[#F59E0B]">
                  OPPORTUNITY
                </span>{" "}
                <span className="inline-block whitespace-nowrap">SHOULDN'T BE.</span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-[#94A3B8] font-normal leading-relaxed max-w-xl">
                Learn the skills that matter. Discover opportunities that match your potential.
              </p>

              {/* CTA Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  to="/candidate/jobs"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0284C7] to-[#7C3AED] dark:from-[#22D3EE] dark:to-[#A78BFA] hover:opacity-90 text-white dark:text-[#070B10] font-extrabold text-xs tracking-tight transition-all shadow-md dark:shadow-glow-teal flex items-center justify-center gap-2 group"
                >
                  <span>Explore Opportunities</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  to="/candidate/skills"
                  className="px-6 py-3.5 rounded-xl bg-white dark:bg-[#121B23] hover:bg-slate-50 dark:hover:bg-[#17232C] border border-slate-200 dark:border-white/[0.08] text-slate-900 dark:text-[#F5F7FA] font-bold text-xs tracking-tight transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Build Your Skills</span>
                </Link>
              </div>

              {/* Trust Metric Strip */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-500 dark:text-[#64748B] font-mono border-t border-slate-200 dark:border-white/[0.06]">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-[#4ADE80]" />
                  <span>50,000+ Assessed Professionals</span>
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 dark:text-[#22D3EE]" />
                  <span>94% Max Role Fit</span>
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-violet-600 dark:text-[#A78BFA]" />
                  <span>Verified Credentials</span>
                </span>
              </div>

            </div>

            {/* Right Column: Cinematic Human Career Journey Visual */}
            <div className="lg:col-span-7 xl:col-span-7 w-full">
              <CinematicStoryHero />
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          SECTION 2: THE 5-STEP CONTINUOUS CAREER LOOP
          ========================================================= */}
      <section id="how-it-works" className="py-20 border-t border-slate-200 dark:border-white/[0.06] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-violet-700 dark:text-[#A78BFA] px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-500/10 border border-violet-300 dark:border-violet-500/30 font-mono">
              THE SKILLMITRA ENGINE
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-[#F5F7FA] tracking-tight">
              From Skills to Verified Outcomes
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-[#94A3B8]">
              A continuous closed-loop architecture connecting candidate assessments, personalized training interventions, and employer hiring.
            </p>
          </div>

          {/* Interactive Story Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-8">
            {scrollStories.map((story, idx) => (
              <button
                key={story.num}
                onClick={() => setActiveStoryTab(idx)}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  activeStoryTab === idx
                    ? 'bg-white dark:bg-[#121B23] text-slate-900 dark:text-[#F5F7FA] border-sky-300 dark:border-white/[0.15] shadow-sm dark:shadow-surface'
                    : 'bg-slate-100/80 dark:bg-[#0D141B]/60 text-slate-600 dark:text-[#94A3B8] border-slate-200 dark:border-white/[0.04] hover:bg-white dark:hover:bg-[#121B23]/50'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono font-bold mb-1">
                  <span style={{ color: story.accent }}>{story.num}</span>
                  <span className="text-slate-400 dark:text-[#64748B]">{story.tag}</span>
                </div>
                <div className="text-xs font-bold text-slate-900 dark:text-[#F5F7FA] truncate">
                  {story.title.split(' ')[0]} {story.title.split(' ')[1]}
                </div>
              </button>
            ))}
          </div>

          {/* Active Story Spotlight Card */}
          <div className="surface-card rounded-2xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08]" style={{ color: scrollStories[activeStoryTab].accent }}>
                <span>Phase {scrollStories[activeStoryTab].num}</span>
                <span>·</span>
                <span>{scrollStories[activeStoryTab].tag}</span>
              </div>

              <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-[#F5F7FA]">
                {scrollStories[activeStoryTab].title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                {scrollStories[activeStoryTab].description}
              </p>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#0D141B] border border-slate-200 dark:border-white/[0.06] text-xs text-slate-700 dark:text-[#94A3B8] flex items-center gap-2.5 font-mono">
                <Check className="w-4 h-4 text-emerald-600 dark:text-[#4ADE80] shrink-0" />
                <span>{scrollStories[activeStoryTab].highlight}</span>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-xl bg-slate-50 dark:bg-[#0D141B] border border-slate-200 dark:border-white/[0.08] space-y-4 text-center">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-[#64748B] font-mono">
                {scrollStories[activeStoryTab].previewTitle}
              </div>

              <div className="text-2xl sm:text-3xl font-black font-mono" style={{ color: scrollStories[activeStoryTab].accent }}>
                {scrollStories[activeStoryTab].metricValue}
              </div>

              <div className="text-xs text-slate-500 dark:text-[#94A3B8] font-mono">
                {scrollStories[activeStoryTab].metricLabel}
              </div>

              <Link
                to="/candidate"
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-[#F5F7FA] hover:text-sky-600 dark:hover:text-[#22D3EE] transition-colors mt-2"
              >
                <span>Launch this workflow</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          SECTION 3: INTEGRATED WORKSPACE SUITES
          ========================================================= */}
      <section className="py-20 border-t border-slate-200 dark:border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-[#4ADE80] px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/30 font-mono">
              PRODUCT WORKSPACES
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-[#F5F7FA] tracking-tight">
              One Unified Skilling Intelligence Platform
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-[#94A3B8]">
              Dedicated interactive workspaces tailored to candidates, employers, training partners, and workforce planners.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ROLES_DATA.map((role) => (
              <Link
                key={role.id}
                to={role.path}
                className="surface-card rounded-2xl p-6 flex flex-col justify-between group cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-[#94A3B8] border border-slate-200 dark:border-white/[0.06] font-mono">
                      {role.badge}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 dark:group-hover:text-[#22D3EE] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-[#F5F7FA] group-hover:text-sky-600 dark:group-hover:text-[#22D3EE] transition-colors">
                      {role.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-[#94A3B8] mt-2 leading-relaxed">
                      {role.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between text-xs font-mono">
                  <span className="text-[10px] text-slate-400 dark:text-[#64748B]">{role.metrics}</span>
                  <span className="font-bold text-sky-700 dark:text-[#22D3EE] flex items-center gap-1 group-hover:underline">
                    Enter Workspace →
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Global AI Assistant */}
      <MitraAIAssistant />

      {/* Slide-out Notification Drawer */}
      <NotificationDrawer 
        isOpen={notificationsOpen} 
        onClose={() => setNotificationsOpen(false)} 
      />

    </div>
  );
}
