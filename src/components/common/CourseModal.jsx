import React from 'react';
import { X, Clock, Award, BookOpen, CheckCircle2, Play } from 'lucide-react';

export default function CourseModal({ course, isOpen, onClose, onStartCourse }) {
  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg rounded-xl bg-[#FAF9F5] border border-[#E5E2DA] shadow-elevated overflow-hidden z-10 animate-in fade-in duration-200">
        
        {/* Header */}
        <div className="p-5 bg-[#F3F0E8] border-b border-[#E5E2DA] relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-md text-[#789184] hover:text-[#1D2421] hover:bg-[#E5E2DA]"
          >
            <X className="w-4 h-4" />
          </button>

          <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#EBF2EE] text-[#164B36] border border-[#D1E0D7] mb-1.5">
            {course.category}
          </span>
          <h3 className="text-lg font-bold text-[#1D2421] leading-snug">
            {course.title}
          </h3>
          <p className="text-xs text-[#789184] mt-1">
            Provider: <strong className="text-[#1D2421]">{course.provider}</strong>
          </p>
        </div>

        {/* Content Body */}
        <div className="p-5 space-y-4 bg-[#FAF9F5]">
          
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-2.5">
            <div className="p-2.5 rounded-lg bg-[#FFFFFF] border border-[#E5E2DA] text-center shadow-subtle">
              <div className="text-[10px] text-[#789184] font-bold uppercase">Duration</div>
              <div className="text-xs font-bold text-[#1D2421] mt-0.5">{course.duration}</div>
            </div>
            <div className="p-2.5 rounded-lg bg-[#FFFFFF] border border-[#E5E2DA] text-center shadow-subtle">
              <div className="text-[10px] text-[#789184] font-bold uppercase">Level</div>
              <div className="text-xs font-bold text-[#1D2421] mt-0.5">{course.level}</div>
            </div>
            <div className="p-2.5 rounded-lg bg-[#FFFFFF] border border-[#E5E2DA] text-center shadow-subtle">
              <div className="text-[10px] text-[#789184] font-bold uppercase">Status</div>
              <div className="text-xs font-bold text-[#164B36] capitalize mt-0.5">{course.status}</div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#789184] mb-1">
              Curriculum Overview
            </h4>
            <p className="text-xs text-[#4A5550] leading-relaxed bg-[#FFFFFF] p-3 rounded-lg border border-[#E5E2DA]">
              {course.description}
            </p>
          </div>

          {/* Skills Gained */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#789184] mb-1.5">
              Target Competencies
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {course.skillsGained.map((skill, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#EBF2EE] border border-[#D1E0D7] text-[#164B36] text-xs font-medium"
                >
                  <CheckCircle2 className="w-3 h-3 text-[#164B36]" />
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Certificate Badge */}
          <div className="p-3 rounded-lg bg-[#FDF4EC] border border-[#F8DCBE] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#E28A3B]" />
              <div>
                <div className="text-xs text-[#E28A3B] font-bold">Verifiable Credential Included</div>
                <div className="text-[10px] text-[#789184] font-mono">{course.certificateEarned}</div>
              </div>
            </div>
          </div>

        </div>

        {/* Action Button */}
        <div className="p-4 bg-[#F3F0E8] border-t border-[#E5E2DA] flex items-center justify-end gap-2.5">
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-md text-xs font-semibold text-[#4A5550] hover:text-[#1D2421]"
          >
            Close
          </button>
          <button
            onClick={() => {
              if (onStartCourse) onStartCourse(course);
              onClose();
            }}
            className="px-4 py-2 rounded-md bg-[#164B36] hover:bg-[#113A2A] text-[#FAF9F5] font-semibold text-xs transition-colors flex items-center gap-1.5 shadow-subtle"
          >
            <Play className="w-3.5 h-3.5 fill-[#FAF9F5]" />
            <span>{course.status === 'completed' ? 'Review Material' : course.status === 'in-progress' ? 'Resume Module' : 'Enroll & Start Learning'}</span>
          </button>
        </div>

      </div>
    </div>
  );
}
