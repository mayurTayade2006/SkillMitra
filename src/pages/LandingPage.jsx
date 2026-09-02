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
import { ROLES_DATA } from '../data/mockData';

import CircularProgress from '../components/common/CircularProgress';

export default function LandingPage() {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [activeStoryTab, setActiveStoryTab] = useState(0);

  const scrollStories = [
    {
      num: "01",
      tag: "DISCOVER",
      accent: "#22D3EE",
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
      accent: "#F59E0B",
      title: "Find the skills holding you back.",
      description: "Pinpoint exact skill gaps with precision. Compare candidate mastery against 480+ active job specifications across Maharashtra.",
      icon: Layers,
      previewTitle: "Skill Gap Benchmark",
      metricLabel: "Critical Deficit Identified",
      metricValue: "Power BI (-28%)",
      highlight: "Pulsing telemetry gap detection"
    },
    {
      num: "03",
      tag: "BUILD",
      accent: "#A78BFA",
      title: "Follow a path built for you.",
      description: "AI-generated modular roadmap connecting state-accredited VTPs and university micro-credentials directly to your target role.",
      icon: Compass,
      previewTitle: "Personalized Roadmap",
      metricLabel: "Trajectory Acceleration",
      metricValue: "4 Weeks to Job Ready",
      highlight: "Modular milestones aligned with NCVET"
    },
    {
      num: "04",
      tag: "CONNECT",
      accent: "#4ADE80",
      title: "Meet the opportunities that fit.",
      description: "Direct talent matching connects pre-assessed candidates with hiring desks across Pune, Mumbai, Nashik, and Nagpur.",
      icon: Briefcase,
      previewTitle: "Regional Opportunity Matching",
      metricLabel: "High-Fit Openings",
      metricValue: "24 Direct Matches (94% Max Fit)",
      highlight: "Fast-track algorithmic job matching"
    },
    {
      num: "05",
      tag: "MEASURE",
      accent: "#94A3B8",
      title: "See what training actually achieves.",
      description: "State-wide telemetry gives policymakers transparent visibility into skilling scheme ROI, district employment, and wage growth.",
      icon: BarChart3,
      previewTitle: "Civic Workforce Telemetry",
      metricLabel: "Statewide Placement Rate",
      metricValue: "64.3% Employed",
      highlight: "36 Districts connected in real-time"
    },
  ];

  return (
    <div className="min-h-screen bg-transparent text-[#F5F7FA] flex flex-col font-sans relative z-10">
      
      {/* Main Navbar */}
      <Navbar onOpenNotifications={() => setNotificationsOpen(true)} />

      {/* =========================================================
          HERO SECTION (Clean headline on left, rich card on right)
          ========================================================= */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headline & Editorial Copy */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              
              {/* Civic Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121B23] border border-white/[0.08] text-[#22D3EE] text-xs font-semibold shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#94A3B8]">
                  GOVERNMENT OF MAHARASHTRA · <strong className="text-[#22D3EE]">SIH26135</strong>
                </span>
              </div>

              {/* Editorial Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-extrabold tracking-tight text-[#F5F7FA] leading-[1.08]">
                SKILLS ARE EVERYWHERE. <br />
                <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] via-[#A78BFA] to-[#F59E0B] pr-2">
                  OPPORTUNITY
                </span>
                SHOULDN'T BE.
                <span className="block text-lg sm:text-2xl font-light text-[#94A3B8] mt-3 tracking-normal font-sans">
                  Powered by intelligence.
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-sm sm:text-base text-[#94A3B8] font-normal leading-relaxed max-w-xl">
                SkillMitra connects candidate skills, adaptive training pathways, and verified employment data to build relevant careers and help state policymakers understand what actually works.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  to="/candidate"
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#22D3EE] to-[#A78BFA] hover:opacity-90 text-[#070B10] font-extrabold text-xs tracking-tight transition-all shadow-glow-teal flex items-center justify-center gap-2 group"
                >
                  <span>Explore SkillMitra</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <a
                  href="#how-it-works"
                  className="px-6 py-3 rounded-lg bg-[#121B23] hover:bg-[#17232C] border border-white/[0.08] text-[#F5F7FA] font-bold text-xs tracking-tight transition-colors flex items-center justify-center gap-2"
                >
                  <span>See How It Works</span>
                </a>
              </div>

              {/* Trust Strip */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#64748B] font-mono border-t border-white/[0.06]">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4ADE80]" />
                  <span>50,000+ Trained in MH</span>
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#22D3EE]" />
                  <span>36 Districts Live</span>
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A78BFA]" />
                  <span>NCVET Accredited</span>
                </span>
              </div>

            </div>

            {/* Right Column: Hero Product Preview (Career Intelligence Panel in front of Silent Orbit) */}
            <div className="lg:col-span-5 relative">
              <div className="surface-card rounded-2xl p-6 sm:p-7 relative border border-white/[0.1] bg-[#0e1823]/85 backdrop-blur-2xl shadow-[0_16px_48px_rgba(0,0,0,0.6)]">
                
                {/* Target Pathway Badge & Fit */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-[#22D3EE]">
                      <Database className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8] block">TARGET PATHWAY</span>
                      <h3 className="text-base font-extrabold text-white">Junior Data Analyst</h3>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[#4ADE80] text-xs font-mono font-bold">
                      94% Match
                    </span>
                  </div>
                </div>

                {/* Primary Stats Grid */}
                <div className="grid grid-cols-2 gap-3.5 my-5">
                  
                  {/* Career Readiness */}
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-3">
                    <CircularProgress percentage={78} size={48} strokeWidth={4.5} color="emerald" showPercentage={false} />
                    <div>
                      <div className="text-[10px] text-[#94A3B8] font-mono">Career Readiness</div>
                      <div className="text-sm font-extrabold text-white">78% Ready</div>
                    </div>
                  </div>

                  {/* Skill Gaps */}
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <div className="text-[10px] text-[#94A3B8] font-mono">Skill Gaps</div>
                    <div className="text-sm font-extrabold text-[#F59E0B] mt-0.5">3 Identified</div>
                    <div className="text-[10px] text-[#64748B] font-mono mt-0.5">Power BI, ETL</div>
                  </div>

                  {/* Job Matches */}
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <div className="text-[10px] text-[#94A3B8] font-mono">Direct Openings</div>
                    <div className="text-sm font-extrabold text-[#22D3EE] mt-0.5">24 Matches</div>
                    <div className="text-[10px] text-[#64748B] font-mono mt-0.5">Pune & Mumbai</div>
                  </div>

                  {/* Hire Probability */}
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <div className="text-[10px] text-[#94A3B8] font-mono">Hire Probability</div>
                    <div className="text-sm font-extrabold text-[#A78BFA] mt-0.5">84% Predicted</div>
                    <div className="text-[10px] text-[#64748B] font-mono mt-0.5">Post-Pathway</div>
                  </div>

                </div>

                {/* Key Competencies Breakdown */}
                <div className="space-y-2 pt-2 border-t border-white/[0.08]">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-[#94A3B8]">SQL & Database Queries</span>
                    <span className="text-[#4ADE80] font-bold">90% Verified</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/[0.08] overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#22D3EE] to-[#4ADE80] rounded-full" style={{ width: '90%' }} />
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono pt-1">
                    <span className="text-[#94A3B8]">Power BI & Visual Analytics</span>
                    <span className="text-[#F59E0B] font-bold">51% · Priority Gap</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/[0.08] overflow-hidden">
                    <div className="h-full bg-[#F59E0B] rounded-full" style={{ width: '51%' }} />
                  </div>
                </div>

                {/* Fast CTA */}
                <div className="pt-4 mt-4 border-t border-white/[0.08]">
                  <Link
                    to="/candidate"
                    className="w-full py-2.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.12] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Launch Candidate Diagnostic</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#22D3EE] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          SECTION 2: THE 5-STEP SKILLMITRA LOOP
          ========================================================= */}
      <section id="how-it-works" className="py-20 border-t border-white/[0.06] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#A78BFA] px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 font-mono">
              THE SKILLMITRA ENGINE
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F5F7FA] tracking-tight">
              From Skills to Verified Outcomes
            </h2>
            <p className="text-xs sm:text-sm text-[#94A3B8]">
              A continuous closed-loop architecture connecting candidate assessments, training interventions, and industry placements.
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
                    ? 'bg-[#121B23] text-[#F5F7FA] border-white/[0.15] shadow-surface'
                    : 'bg-[#0D141B]/60 text-[#94A3B8] border-white/[0.04] hover:bg-[#121B23]/50'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono font-bold mb-1">
                  <span style={{ color: story.accent }}>{story.num}</span>
                  <span className="text-[#64748B]">{story.tag}</span>
                </div>
                <div className="text-xs font-bold text-[#F5F7FA] truncate">
                  {story.title.split(' ')[0]} {story.title.split(' ')[1]}
                </div>
              </button>
            ))}
          </div>

          {/* Active Story Spotlight Card */}
          <div className="surface-card rounded-2xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/[0.04] border border-white/[0.08]" style={{ color: scrollStories[activeStoryTab].accent }}>
                <span>Phase {scrollStories[activeStoryTab].num}</span>
                <span>·</span>
                <span>{scrollStories[activeStoryTab].tag}</span>
              </div>

              <h3 className="text-xl sm:text-3xl font-extrabold text-[#F5F7FA]">
                {scrollStories[activeStoryTab].title}
              </h3>

              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                {scrollStories[activeStoryTab].description}
              </p>

              <div className="p-3.5 rounded-xl bg-[#0D141B] border border-white/[0.06] text-xs text-[#94A3B8] flex items-center gap-2.5 font-mono">
                <Check className="w-4 h-4 text-[#4ADE80] shrink-0" />
                <span>{scrollStories[activeStoryTab].highlight}</span>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-xl bg-[#0D141B] border border-white/[0.08] space-y-4 text-center">
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] font-mono">
                {scrollStories[activeStoryTab].previewTitle}
              </div>

              <div className="text-2xl sm:text-3xl font-black font-mono" style={{ color: scrollStories[activeStoryTab].accent }}>
                {scrollStories[activeStoryTab].metricValue}
              </div>

              <div className="text-xs text-[#94A3B8] font-mono">
                {scrollStories[activeStoryTab].metricLabel}
              </div>

              <Link
                to="/candidate"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#F5F7FA] hover:text-[#22D3EE] transition-colors mt-2"
              >
                <span>Launch this workflow</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          SECTION 3: THE 5 ECOSYSTEM PORTALS
          ========================================================= */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#4ADE80] px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 font-mono">
              STAKEHOLDER SUITES
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F5F7FA] tracking-tight">
              One Unified Skilling Intelligence Platform
            </h2>
            <p className="text-xs sm:text-sm text-[#94A3B8]">
              Dedicated interactive workspaces tailored to every participant in Maharashtra's employment ecosystem.
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
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/[0.04] text-[#94A3B8] border border-white/[0.06] font-mono">
                      {role.badge}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#64748B] group-hover:text-[#22D3EE] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
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
                    Enter Portal →
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
