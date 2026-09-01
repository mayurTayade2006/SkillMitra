import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import SkillBar from '../../components/common/SkillBar';
import { TARGET_ROLES } from '../../data/mockData';
import { 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  BookOpen, 
  Sparkles,
  Info,
  TrendingUp
} from 'lucide-react';

export default function SkillIntelligencePage() {
  const [selectedRoleKey, setSelectedRoleKey] = useState("Data Analyst");

  const roleData = TARGET_ROLES[selectedRoleKey] || TARGET_ROLES["Data Analyst"];

  return (
    <DashboardLayout role="candidate">
      <div className="space-y-7">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-[#E5E2DA]">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1D2421] tracking-tight">
                Where your skills stand.
              </h1>
              <span className="text-[10px] font-bold px-2 py-0.2 rounded bg-[#EBF2EE] text-[#164B36] border border-[#D1E0D7]">
                Live Benchmark
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#4A5550] mt-1">
              Comparing your verified capabilities against current industry hiring criteria in Maharashtra.
            </p>
          </div>

          <Link
            to="/candidate/learning"
            className="px-4 py-2 rounded-md bg-[#164B36] hover:bg-[#113A2A] text-[#FAF9F5] text-xs font-bold transition-colors flex items-center gap-1.5 shadow-subtle self-start md:self-auto"
          >
            <span>View Learning Roadmap</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Target Role Selector Tabs */}
        <div className="space-y-2">
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#789184]">
            Target Career Pathway
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {Object.keys(TARGET_ROLES).map((roleKey) => {
              const item = TARGET_ROLES[roleKey];
              const isSelected = selectedRoleKey === roleKey;

              return (
                <button
                  key={roleKey}
                  onClick={() => setSelectedRoleKey(roleKey)}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'bg-[#EBF2EE] border-[#164B36] text-[#164B36] shadow-subtle ring-1 ring-[#164B36]'
                      : 'bg-[#FFFFFF] border-[#E5E2DA] hover:bg-[#F3F0E8] text-[#1D2421]'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] text-[#789184] mb-1">
                    <span>{item.category}</span>
                    <span className="font-mono font-bold text-[#164B36]">{item.overallMatch}% fit</span>
                  </div>
                  <div className="text-xs font-extrabold truncate text-[#1D2421]">
                    {item.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Grid: Left = Skills Comparison, Right = Recommendations & Insight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Horizontal Comparison Bars (8 Cols) */}
          <div className="lg:col-span-8 space-y-4">
            
            <div className="p-5 sm:p-6 rounded-2xl bg-[#FFFFFF] border border-[#E5E2DA] shadow-card space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#ECE9E1]">
                <div>
                  <h3 className="text-sm font-bold text-[#1D2421]">
                    Competency Matrix Comparison
                  </h3>
                  <p className="text-xs text-[#789184]">Your score vs role benchmark threshold</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-[#789184] block">Market Package</span>
                  <span className="text-xs font-bold text-[#164B36] font-mono">{roleData.salaryRange}</span>
                </div>
              </div>

              {/* Horizontal Skill Bars List */}
              <div className="space-y-3">
                {roleData.currentSkills.map((skill, idx) => (
                  <SkillBar
                    key={idx}
                    name={skill.name}
                    score={skill.score}
                    required={skill.required}
                    status={skill.status}
                  />
                ))}
              </div>
            </div>

            {/* "Where to focus next" 3 Recommendations */}
            <div className="p-5 rounded-xl bg-[#FAF9F5] border border-[#E5E2DA] space-y-3 shadow-subtle">
              <div className="text-xs font-bold text-[#1D2421]">
                Where to focus next (3 High-Impact Recommendations):
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
                <div className="p-3 rounded-lg bg-[#FFFFFF] border border-[#E5E2DA] shadow-subtle">
                  <span className="text-[10px] font-bold text-[#E28A3B] uppercase block">1. Priority Skill</span>
                  <div className="font-bold text-[#1D2421] mt-0.5">Advanced Power BI</div>
                  <div className="text-[10px] text-[#789184] mt-0.5">DAX measures & dashboards</div>
                </div>
                <div className="p-3 rounded-lg bg-[#FFFFFF] border border-[#E5E2DA] shadow-subtle">
                  <span className="text-[10px] font-bold text-[#164B36] uppercase block">2. Foundation</span>
                  <div className="font-bold text-[#1D2421] mt-0.5">Applied Statistics</div>
                  <div className="text-[10px] text-[#789184] mt-0.5">A/B testing & probability</div>
                </div>
                <div className="p-3 rounded-lg bg-[#FFFFFF] border border-[#E5E2DA] shadow-subtle">
                  <span className="text-[10px] font-bold text-[#789184] uppercase block">3. Integration</span>
                  <div className="font-bold text-[#1D2421] mt-0.5">Python Pandas</div>
                  <div className="text-[10px] text-[#789184] mt-0.5">Data wrangling scripts</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Overall Readiness & SkillMitra Insight Block (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Overall Fit Card */}
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E5E2DA] shadow-card text-center space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#789184]">
                Overall Role Readiness
              </span>
              
              <div className="text-4xl font-black font-sans text-[#164B36]">
                {roleData.overallMatch}%
              </div>

              <div className="text-xs text-[#4A5550]">
                Target: <strong>{roleData.title}</strong>
              </div>

              <div className="pt-3 border-t border-[#ECE9E1] text-xs text-[#789184] flex justify-between">
                <span>With Gaps Closed:</span>
                <strong className="text-[#164B36]">94% Readiness</strong>
              </div>
            </div>

            {/* Elegant SkillMitra Insight Block */}
            <div className="p-6 rounded-2xl bg-[#FDF4EC] border border-[#F8DCBE] shadow-subtle space-y-3">
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#E28A3B] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#E28A3B]" />
                SKILLMITRA INSIGHT
              </div>

              <p className="text-xs text-[#1D2421] leading-relaxed bg-[#FFFFFF] p-3.5 rounded-lg border border-[#F8DCBE] font-medium">
                "{roleData.aiExplanation}"
              </p>

              <Link
                to="/candidate/learning"
                className="w-full py-2.5 rounded-md bg-[#164B36] hover:bg-[#113A2A] text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-subtle"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Start Learning Pathway</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}
