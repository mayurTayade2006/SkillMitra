import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import CourseModal from '../../components/common/CourseModal';
import { LEARNING_ROADMAP } from '../../data/mockData';
import { 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  Lock, 
  Play, 
  ChevronRight, 
  ArrowRight, 
  Sparkles, 
  Award, 
  Layers 
} from 'lucide-react';

export default function LearningRoadmapPage() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courses, setCourses] = useState(LEARNING_ROADMAP);

  const handleStartCourse = (course) => {
    setCourses((prev) =>
      prev.map((c) =>
        c.id === course.id
          ? { ...c, status: c.status === 'locked' ? 'in-progress' : c.status, progress: c.status === 'locked' ? 20 : c.progress }
          : c
      )
    );
  };

  const completedCount = courses.filter((c) => c.status === 'completed').length;
  const progressPercent = Math.round((completedCount / courses.length) * 100);

  const journeySteps = [
    { label: "SQL", status: "completed" },
    { label: "Statistics", status: "completed" },
    { label: "Power BI", status: "current" },
    { label: "Python Pandas", status: "upcoming" },
    { label: "Portfolio Project", status: "upcoming" },
    { label: "JOB READY", status: "goal" },
  ];

  return (
    <DashboardLayout role="candidate">
      <div className="space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 dark:bg-[#A78BFA]/10 border border-violet-200 dark:border-[#A78BFA]/25 text-violet-800 dark:text-[#A78BFA] text-xs font-semibold mb-2 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500 dark:bg-[#A78BFA] animate-pulse" />
              <span>NCVET-ACCREDITED CURRICULUM</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-[#F5F7FA] tracking-tight">
              Adaptive Learning Roadmap
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-[#94A3B8] mt-1 font-mono">
              Sequential skill building journey targeted at closing identified deficits for Data Analyst.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#0D141B] border border-slate-200 dark:border-white/[0.06] text-right shrink-0">
            <div className="text-[10px] uppercase font-bold text-slate-400 dark:text-[#64748B] font-mono">Journey Progress</div>
            <div className="text-sm font-extrabold text-emerald-600 dark:text-[#4ADE80] font-mono mt-0.5">
              {completedCount} of {courses.length} Stages ({progressPercent}%)
            </div>
          </div>
        </div>

        {/* Visual Journey Stepper Line: SQL -> Statistics -> Power BI -> Python -> Portfolio -> JOB READY */}
        <div className="surface-card rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-xs font-bold text-slate-900 dark:text-[#F5F7FA] font-mono flex items-center gap-2">
              <Layers className="w-4 h-4 text-sky-600 dark:text-[#22D3EE]" />
              <span>Career Milestone Trajectory</span>
            </div>
            <span className="text-[10px] text-slate-400 dark:text-[#64748B] font-mono">Target: Q4 Hiring Cycle</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-6 gap-3 pt-2">
            {journeySteps.map((step, idx) => (
              <div 
                key={idx}
                className={`p-3.5 rounded-xl border text-center transition-all ${
                  step.status === 'completed'
                    ? 'bg-emerald-50 dark:bg-[#4ADE80]/10 border-emerald-300 dark:border-[#4ADE80]/30 text-emerald-800 dark:text-[#4ADE80]'
                    : step.status === 'current'
                    ? 'bg-amber-50 dark:bg-[#F59E0B]/15 border-amber-300 dark:border-[#F59E0B]/40 text-amber-800 dark:text-[#F59E0B]'
                    : step.status === 'goal'
                    ? 'bg-gradient-to-r from-[#0284C7] to-[#7C3AED] dark:from-[#22D3EE] dark:to-[#A78BFA] text-white dark:text-[#070B10] font-black border-transparent shadow-sm dark:shadow-glow-teal'
                    : 'bg-slate-50 dark:bg-[#0D141B] border-slate-200 dark:border-white/[0.04] text-slate-500 dark:text-[#64748B]'
                }`}
              >
                <div className="text-[9px] font-mono font-bold uppercase mb-1">
                  {step.status === 'completed' ? '✓ Stage 0' + (idx + 1) : step.status === 'current' ? '← IN PROGRESS' : 'Stage 0' + (idx + 1)}
                </div>
                <div className="font-extrabold text-xs">
                  {step.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Numbered Milestone Modules */}
        <div className="space-y-3.5">
          {courses.map((course, idx) => {
            const isCompleted = course.status === 'completed';
            const isInProgress = course.status === 'in-progress';

            return (
              <div
                key={course.id}
                onClick={() => setSelectedCourse(course)}
                className={`surface-card rounded-xl p-5 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 group ${
                  isInProgress
                    ? 'border-l-4 border-l-amber-500 dark:border-l-[#F59E0B]'
                    : isCompleted
                    ? 'border-l-4 border-l-emerald-500 dark:border-l-[#4ADE80]'
                    : 'border-l-4 border-l-slate-300 dark:border-l-slate-700 opacity-80 hover:opacity-100'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 font-mono text-xs font-black ${
                    isCompleted
                      ? 'bg-emerald-50 dark:bg-[#4ADE80]/10 text-emerald-700 dark:text-[#4ADE80] border border-emerald-300 dark:border-[#4ADE80]/30'
                      : isInProgress
                      ? 'bg-amber-50 dark:bg-[#F59E0B]/10 text-amber-700 dark:text-[#F59E0B] border border-amber-300 dark:border-[#F59E0B]/30'
                      : 'bg-slate-100 dark:bg-white/[0.04] text-slate-500 dark:text-[#64748B] border border-slate-200 dark:border-white/[0.06]'
                  }`}>
                    0{idx + 1}
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold text-slate-400 dark:text-[#64748B] uppercase font-mono">
                        {course.category}
                      </span>
                      <span className="text-slate-300 dark:text-white/20">·</span>
                      {isCompleted ? (
                        <span className="px-2 py-0.5 rounded bg-emerald-50 dark:bg-[#4ADE80]/10 text-emerald-700 dark:text-[#4ADE80] border border-emerald-300 dark:border-[#4ADE80]/30 text-[10px] font-bold font-mono">
                          ✓ Completed
                        </span>
                      ) : isInProgress ? (
                        <span className="px-2 py-0.5 rounded bg-amber-50 dark:bg-[#F59E0B]/15 text-amber-700 dark:text-[#F59E0B] border border-amber-300 dark:border-[#F59E0B]/30 text-[10px] font-bold font-mono animate-pulse">
                          In Progress ({course.progress}%)
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.04] text-slate-500 dark:text-[#64748B] border border-slate-200 dark:border-white/[0.06] text-[10px] font-bold font-mono">
                          Locked
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-[#F5F7FA] group-hover:text-sky-600 dark:group-hover:text-[#22D3EE] transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-[#94A3B8] font-mono">{course.provider}</p>

                    <div className="flex flex-wrap gap-1.5 pt-1.5">
                      {course.skillsGained.map((skill, sIdx) => (
                        <span key={sIdx} className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-[#0D141B] border border-slate-200 dark:border-white/[0.06] text-[10px] text-slate-600 dark:text-[#94A3B8] font-mono">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3.5 shrink-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-200 dark:border-white/[0.06]">
                  <div className="text-left sm:text-right text-xs text-slate-600 dark:text-[#94A3B8] font-mono">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-sky-600 dark:text-[#22D3EE]" /> {course.duration}
                    </div>
                    <div className="text-[10px] text-slate-400 dark:text-[#64748B] mt-0.5">Level: {course.level}</div>
                  </div>

                  <button className="px-3.5 py-1.5 rounded-lg border border-slate-200 dark:border-white/[0.08] bg-slate-100 hover:bg-sky-50 dark:bg-white/[0.03] dark:hover:bg-[#22D3EE]/20 text-xs font-bold text-slate-800 hover:text-sky-700 dark:text-[#F5F7FA] dark:hover:text-[#22D3EE] flex items-center gap-1 transition-all shadow-sm">
                    <span>Inspect</span>
                    <ChevronRight className="w-3 h-3 text-slate-400 dark:text-[#64748B]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Course Modal */}
      <CourseModal
        course={selectedCourse}
        isOpen={Boolean(selectedCourse)}
        onClose={() => setSelectedCourse(null)}
        onStartCourse={handleStartCourse}
      />
    </DashboardLayout>
  );
}
