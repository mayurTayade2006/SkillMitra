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
  Database
} from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import RoleSwitcherBar from '../components/common/RoleSwitcherBar';
import MitraAIAssistant from '../components/common/MitraAIAssistant';
import NotificationDrawer from '../components/common/NotificationDrawer';
import CircularProgress from '../components/common/CircularProgress';

export default function LandingPage() {
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const loopSteps = [
    { num: "01", title: "Discover Skills", sub: "Verified academic and adaptive diagnostic assessments" },
    { num: "02", title: "Identify Gaps", sub: "Real-time benchmarking against live hiring standards in MH" },
    { num: "03", title: "Build Skills", sub: "Targeted modular roadmap focused on critical deficiencies" },
    { num: "04", title: "Find Opportunities", sub: "Direct matching with verified regional vacancies" },
    { num: "05", title: "Measure Outcomes", sub: "Statewide policy analytics and scheme placement ROI" },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1D2421] flex flex-col font-sans">
      
      {/* Top Demo Bar */}
      <RoleSwitcherBar />

      {/* Main Navbar */}
      <Navbar onOpenNotifications={() => setNotificationsOpen(true)} />

      {/* Hero Section with Subdued Topographic Background & Asymmetrical Editorial Composition */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden border-b border-[#E5E2DA] bg-topo-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headline & Editorial Copy (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Civic Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E5E2DA] text-[#4A5550] text-xs font-semibold shadow-subtle">
                <span className="w-1.5 h-1.5 rounded-full bg-[#164B36]" />
                <span className="font-mono text-[11px] uppercase tracking-wider">
                  GOVERNMENT OF MAHARASHTRA · SIH26135
                </span>
              </div>

              {/* Editorial Large Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-extrabold tracking-tight text-[#1D2421] leading-[1.1]">
                Skills are everywhere. <br />
                <span className="font-serif italic font-normal text-[#164B36] pr-2">Opportunity</span>
                shouldn't be.
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-[#4A5550] font-normal leading-relaxed max-w-xl">
                SkillMitra connects skills, training and employment outcomes to help people build relevant careers and help policymakers understand what actually works.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <Link
                  to="/candidate"
                  className="px-6 py-3 rounded-md bg-[#164B36] hover:bg-[#113A2A] text-[#FAF9F5] font-bold text-sm tracking-tight transition-colors shadow-subtle flex items-center justify-center gap-2"
                >
                  <span>Explore SkillMitra</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/candidate/skills"
                  className="px-6 py-3 rounded-md bg-[#FFFFFF] hover:bg-[#F3F0E8] border border-[#E5E2DA] text-[#1D2421] font-semibold text-sm tracking-tight transition-colors shadow-subtle flex items-center justify-center gap-2"
                >
                  <span>See How It Works</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 flex items-center gap-6 text-xs text-[#789184]">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#164B36]" />
                  <span>36 Districts Active</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#164B36]" />
                  <span>50,000+ Assessed Youth</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#164B36]" />
                  <span>NCVET Verifiable</span>
                </div>
              </div>

            </div>

            {/* Right Column: Real-Looking Skill Intelligence Panel (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-7 rounded-2xl bg-[#FFFFFF] border border-[#E5E2DA] shadow-card space-y-5">
                
                {/* Panel Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#ECE9E1]">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#789184] block">
                      Target Career Role
                    </span>
                    <h3 className="text-base font-bold text-[#1D2421] mt-0.5">
                      Data Analyst (Pune Hub)
                    </h3>
                  </div>

                  <span className="px-2.5 py-1 rounded bg-[#EBF2EE] text-[#164B36] border border-[#D1E0D7] text-xs font-bold font-mono">
                    84% Fit
                  </span>
                </div>

                {/* Main Gauge & Gaps Count Row */}
                <div className="flex items-center gap-5 p-4 rounded-xl bg-[#FAF9F5] border border-[#E5E2DA]">
                  <CircularProgress
                    percentage={78}
                    size={84}
                    strokeWidth={7}
                    color="forest"
                    label=""
                    showPercentage={true}
                  />

                  <div className="space-y-1">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#789184]">
                      Career Readiness
                    </div>
                    <div className="text-sm font-bold text-[#1D2421]">
                      You're 78% ready for this role.
                    </div>
                    <div className="text-xs text-[#E28A3B] font-semibold flex items-center gap-1">
                      <span>3 skills to strengthen</span>
                    </div>
                  </div>
                </div>

                {/* Horizontal Skill Breakdown */}
                <div className="space-y-3 pt-1">
                  
                  {/* SQL */}
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-[#1D2421]">SQL Queries & Schema</span>
                      <span className="text-[#164B36] font-mono font-bold">90%</span>
                    </div>
                    <div className="w-full h-2 bg-[#F3F0E8] rounded-full overflow-hidden">
                      <div className="h-full bg-[#164B36] rounded-full w-[90%]" />
                    </div>
                  </div>

                  {/* Python */}
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-[#1D2421]">Python & Pandas</span>
                      <span className="text-[#E28A3B] font-mono font-bold">62%</span>
                    </div>
                    <div className="w-full h-2 bg-[#F3F0E8] rounded-full overflow-hidden">
                      <div className="h-full bg-[#E28A3B] rounded-full w-[62%]" />
                    </div>
                  </div>

                  {/* Power BI */}
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-[#1D2421]">Power BI & DAX</span>
                      <span className="text-[#E28A3B] font-mono font-bold">51%</span>
                    </div>
                    <div className="w-full h-2 bg-[#F3F0E8] rounded-full overflow-hidden">
                      <div className="h-full bg-[#E28A3B] rounded-full w-[51%]" />
                    </div>
                  </div>

                </div>

                {/* Insight Quote */}
                <div className="p-3 rounded-lg bg-[#FDF4EC] border border-[#F8DCBE] text-xs text-[#4A5550]">
                  <span className="font-bold text-[#E28A3B] block mb-0.5">Your next best move:</span>
                  Complete <strong>Advanced Power BI</strong> to unlock 14 immediate openings (+₹2.2L LPA).
                </div>

                <Link
                  to="/candidate/skills"
                  className="w-full py-2.5 rounded-md bg-[#FAF9F5] hover:bg-[#F3F0E8] border border-[#E5E2DA] text-[#1D2421] text-xs font-bold text-center transition-colors flex items-center justify-center gap-1 shadow-subtle"
                >
                  <span>Open Interactive Assessment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION: THE SKILL-TO-EMPLOYMENT LOOP */}
      <section className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#E5E2DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#164B36]">
              How SkillMitra Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1D2421] tracking-tight">
              The Skill-to-Employment Loop.
            </h2>
            <p className="text-sm sm:text-base text-[#4A5550] leading-relaxed">
              A continuous, data-driven cycle connecting individual youth capabilities with employer demands and statewide policy insights.
            </p>
          </div>

          {/* 5-Step Large Process Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {loopSteps.map((step, idx) => (
              <div
                key={step.num}
                className="relative space-y-3 p-5 rounded-xl bg-[#FAF9F5] border border-[#E5E2DA] flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl sm:text-4xl font-black font-sans text-[#164B36] opacity-30 mb-2">
                    {step.num}
                  </div>
                  <h3 className="text-base font-bold text-[#1D2421]">{step.title}</h3>
                </div>
                <p className="text-xs text-[#4A5550] leading-relaxed mt-2">{step.sub}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FULL-WIDTH DARK FOREST SECTION: GOVERNMENT INTELLIGENCE PREVIEW */}
      <section className="py-20 sm:py-28 bg-[#164B36] text-[#FAF9F5] border-b border-[#0E3324]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E28A3B]">
              Statewide Skilling Governance
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              See what skills are shaping Maharashtra.
            </h2>
            <p className="text-sm sm:text-base text-[#A4B8AD] leading-relaxed">
              Real-time outcome monitoring across 36 districts, measuring scheme ROI, workforce supply, and industrial absorption rates.
            </p>
          </div>

          {/* 4 Large Number Metrics directly on dark surface */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-[#0E3324]">
            
            <div className="space-y-1">
              <div className="text-3xl sm:text-5xl font-black font-sans text-white">
                50,000
              </div>
              <div className="text-sm font-bold text-[#FAF9F5]">Candidates Trained</div>
              <div className="text-xs text-[#A4B8AD]">Across 36 Districts</div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-5xl font-black font-sans text-[#E28A3B]">
                38,420
              </div>
              <div className="text-sm font-bold text-[#FAF9F5]">Certified Youth</div>
              <div className="text-xs text-[#A4B8AD]">76.8% Pass Rate</div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-5xl font-black font-sans text-white">
                24,680
              </div>
              <div className="text-sm font-bold text-[#FAF9F5]">Employed in Industry</div>
              <div className="text-xs text-[#A4B8AD]">Avg ₹4.85 LPA Package</div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-5xl font-black font-sans text-[#E28A3B]">
                64.3%
              </div>
              <div className="text-sm font-bold text-[#FAF9F5]">State Placement Rate</div>
              <div className="text-xs text-[#A4B8AD]">+8.4% YoY Growth</div>
            </div>

          </div>

          {/* Gov CTA */}
          <div className="pt-6 flex items-center gap-4">
            <Link
              to="/government"
              className="px-6 py-3 rounded-md bg-[#FAF9F5] hover:bg-white text-[#164B36] font-bold text-xs sm:text-sm tracking-tight transition-colors shadow-subtle flex items-center gap-2"
            >
              <span>Explore Government Intelligence</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/government/skills"
              className="px-6 py-3 rounded-md bg-transparent hover:bg-[#113A2A] border border-[#A4B8AD]/40 text-white font-semibold text-xs sm:text-sm tracking-tight transition-colors"
            >
              View District Heatmap
            </Link>
          </div>

        </div>
      </section>

      {/* Stakeholder Portals Section */}
      <section className="py-20 bg-[#FAF9F5] border-b border-[#E5E2DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#164B36]">
              Stakeholder Ecosystem
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1D2421]">
              Purpose-built experiences for every participant.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            <Link
              to="/candidate"
              className="p-5 rounded-xl bg-[#FFFFFF] border border-[#E5E2DA] hover:border-[#164B36] transition-colors shadow-subtle group flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-8 h-8 rounded bg-[#EBF2EE] text-[#164B36] flex items-center justify-center font-bold">
                  <Users className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-[#1D2421] group-hover:text-[#164B36]">
                  Candidate Portal
                </h3>
                <p className="text-xs text-[#4A5550] leading-relaxed">
                  Skill assessments, learning roadmaps, verified credentials and matching jobs.
                </p>
              </div>
              <span className="text-xs font-bold text-[#164B36] flex items-center gap-1">
                Enter Portal <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link
              to="/government"
              className="p-5 rounded-xl bg-[#FFFFFF] border border-[#E5E2DA] hover:border-[#E28A3B] transition-colors shadow-subtle group flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-8 h-8 rounded bg-[#FDF4EC] text-[#E28A3B] flex items-center justify-center font-bold">
                  <Building2 className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-[#1D2421] group-hover:text-[#E28A3B]">
                  Government Officer
                </h3>
                <p className="text-xs text-[#4A5550] leading-relaxed">
                  Statewide employment funnels, district demand heatmaps, and scheme impact.
                </p>
              </div>
              <span className="text-xs font-bold text-[#E28A3B] flex items-center gap-1">
                Enter Portal <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link
              to="/employer"
              className="p-5 rounded-xl bg-[#FFFFFF] border border-[#E5E2DA] hover:border-[#C9634C] transition-colors shadow-subtle group flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-8 h-8 rounded bg-[#FAF0ED] text-[#C9634C] flex items-center justify-center font-bold">
                  <Briefcase className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-[#1D2421] group-hover:text-[#C9634C]">
                  Corporate Employer
                </h3>
                <p className="text-xs text-[#4A5550] leading-relaxed">
                  Search pre-assessed talent, post vacancies, and review verified credentials.
                </p>
              </div>
              <span className="text-xs font-bold text-[#C9634C] flex items-center gap-1">
                Enter Portal <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link
              to="/training"
              className="p-5 rounded-xl bg-[#FFFFFF] border border-[#E5E2DA] hover:border-[#164B36] transition-colors shadow-subtle group flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-8 h-8 rounded bg-[#EBF2EE] text-[#164B36] flex items-center justify-center font-bold">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-[#1D2421] group-hover:text-[#164B36]">
                  Training Provider
                </h3>
                <p className="text-xs text-[#4A5550] leading-relaxed">
                  Track cohorts, curriculum completion, and verifiable credential issuance.
                </p>
              </div>
              <span className="text-xs font-bold text-[#164B36] flex items-center gap-1">
                Enter Portal <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </Link>

          </div>

        </div>
      </section>

      {/* Floating MitraAI Assistant */}
      <MitraAIAssistant />

      {/* Notification Drawer */}
      <NotificationDrawer
        isOpen={notificationsOpen}
        onClose={() => setNotificationsOpen(false)}
      />

      {/* Footer */}
      <Footer />

    </div>
  );
}
