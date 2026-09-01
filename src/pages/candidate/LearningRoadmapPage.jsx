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
  Sparkles
} from 'lucide-react';

export default function LearningRoadmapPage() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courses, setCourses] = useState(LEARNING_ROADMAP);

  const handleStartCourse = (course) => {
    setCourses((prev) =>
      prev.map((c) =>
        c.id === course.id
          ? { ...c, status: c.status === 'locked' ? 'in-progress' : c.status, progress: c.status === 'locked' ? 15 : c.progress }
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
      <div className="space-y-7">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-[#E5E2DA]">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1D2421] tracking-tight">
              Personalized learning roadmap
            </h1>
            <p className="text-xs sm:text-sm text-[#4A5550] mt-1">
              Sequential skill building journey targeted at closing identified deficits for Data Analyst.
            </p>
          </div>

          <div className="p-3 rounded-lg bg-[#FAF9F5] border border-[#E5E2DA] text-right shrink-0">
            <div className="text-[10px] uppercase font-bold text-[#789184]">Journey Completion</div>
            <div className="text-sm font-extrabold text-[#164B36] mt-0.5">
              {completedCount} of {courses.length} Stages ({progressPercent}%)
            </div>
          </div>
        </div>

        {/* Visual Journey Stepper Line: SQL -> Statistics -> Power BI -> Python -> Portfolio -> JOB READY */}
        <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E5E2DA] shadow-card space-y-3">
          <div className="text-xs font-bold text-[#1D2421]">
            Career Milestone Journey
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 pt-2">
            {journeySteps.map((step, idx) => (
              <div 
                key={idx}
                className={`p-3 rounded-lg border text-center transition-colors ${
                  step.status === 'completed'
                    ? 'bg-[#EBF2EE] border-[#D1E0D7] text-[#164B36]'
                    : step.status === 'current'
                    ? 'bg-[#FDF4EC] border-[#E28A3B] text-[#E28A3B] ring-2 ring-[#E28A3B]/30'
                    : step.status === 'goal'
                    ? 'bg-[#164B36] border-[#164B36] text-white font-bold'
                    : 'bg-[#FAF9F5] border-[#E5E2DA] text-[#789184]'
                }`}
              >
                <div className="text-[10px] font-mono font-bold uppercase mb-1">
                  {step.status === 'completed' ? '✓ Stage 0' + (idx + 1) : step.status === 'current' ? '← CURRENT' : 'Stage 0' + (idx + 1)}
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
                className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-subtle ${
                  isInProgress
                    ? 'bg-[#FFFFFF] border-[#164B36] ring-1 ring-[#164B36]'
                    : isCompleted
                    ? 'bg-[#FFFFFF] border-[#E5E2DA]'
                    : 'bg-[#FAF9F5] border-[#E5E2DA] opacity-80 hover:opacity-100'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-9 h-9 rounded-md flex items-center justify-center shrink-0 font-mono text-xs font-bold ${
                    isCompleted
                      ? 'bg-[#EBF2EE] text-[#164B36]'
                      : isInProgress
                      ? 'bg-[#164B36] text-white'
                      : 'bg-[#F3F0E8] text-[#789184]'
                  }`}>
                    0{idx + 1}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold text-[#789184] uppercase">
                        {course.category}
                      </span>
                      <span>·</span>
                      {isCompleted ? (
                        <span className="px-2 py-0.5 rounded bg-[#EBF2EE] text-[#164B36] border border-[#D1E0D7] text-[11px] font-bold">
                          ✓ Completed
                        </span>
                      ) : isInProgress ? (
                        <span className="px-2 py-0.5 rounded bg-[#FDF4EC] text-[#E28A3B] border border-[#F8DCBE] text-[11px] font-bold">
                          In Progress ({course.progress}%)
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded bg-[#FAF9F5] text-[#789184] border border-[#E5E2DA] text-[11px] font-bold">
                          Locked
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold text-[#1D2421]">
                      {course.title}
                    </h3>
                    <p className="text-xs text-[#789184] mt-0.5">{course.provider}</p>

                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {course.skillsGained.map((skill, sIdx) => (
                        <span key={sIdx} className="px-2.5 py-0.5 rounded bg-[#FAF9F5] border border-[#E5E2DA] text-[11px] text-[#4A5550]">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#ECE9E1]">
                  <div className="text-left sm:text-right text-xs text-[#789184]">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#789184]" /> {course.duration}
                    </div>
                    <div className="text-[10px] text-[#4A5550] mt-0.5">Level: {course.level}</div>
                  </div>

                  <button className="px-3.5 py-1.5 rounded-md border border-[#E5E2DA] bg-[#FAF9F5] hover:bg-[#F3F0E8] text-xs font-bold text-[#1D2421] flex items-center gap-1 shadow-subtle">
                    <span>Module Info</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#789184]" />
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
