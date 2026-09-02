import React from 'react';
import { X, Clock, Award, BookOpen, CheckCircle2, Play, Sparkles } from 'lucide-react';

export default function CourseModal({ course, isOpen, onClose, onStartCourse }) {
  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg rounded-3xl bg-[#111716]/95 border border-white/15 shadow-2xl overflow-hidden z-10 backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 bg-white/[0.04] border-b border-white/10 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-xl text-[#94A3B8] hover:text-[#F5F7F4] hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/20 text-[#A7F3D0] border border-emerald-500/30 mb-2 font-mono">
            {course.category}
          </span>
          <h3 className="text-xl font-bold text-[#F5F7F4] leading-snug">
            {course.title}
          </h3>
          <p className="text-xs text-[#94A3B8] mt-1">
            Accredited Provider: <strong className="text-[#A7F3D0]">{course.provider}</strong>
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5 bg-transparent">
          
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
              <div className="text-[10px] text-[#94A3B8] font-bold uppercase font-mono">Duration</div>
              <div className="text-xs font-bold text-[#F5F7F4] mt-1">{course.duration}</div>
            </div>
            <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
              <div className="text-[10px] text-[#94A3B8] font-bold uppercase font-mono">Level</div>
              <div className="text-xs font-bold text-[#F5F7F4] mt-1">{course.level}</div>
            </div>
            <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
              <div className="text-[10px] text-[#94A3B8] font-bold uppercase font-mono">Status</div>
              <div className="text-xs font-bold text-[#A7F3D0] capitalize mt-1 font-mono">{course.status}</div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] mb-1.5 font-mono">
              Curriculum Overview
            </h4>
            <p className="text-xs text-[#94A3B8] leading-relaxed bg-white/[0.03] p-4 rounded-2xl border border-white/10">
              {course.description}
            </p>
          </div>

          {/* Skills Gained */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] mb-2 font-mono">
              Target Competencies
            </h4>
            <div className="flex flex-wrap gap-2">
              {course.skillsGained.map((skill, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[#A7F3D0] text-xs font-medium"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Certificate Badge */}
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-[#E5A34A]" />
              <div>
                <div className="text-xs text-[#E5A34A] font-bold">Verifiable Blockchain Credential</div>
                <div className="text-[10px] text-[#94A3B8] font-mono">{course.certificateEarned}</div>
              </div>
            </div>
          </div>

        </div>

        {/* Action Button */}
        <div className="p-5 bg-white/[0.03] border-t border-white/10 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-[#94A3B8] hover:text-[#F5F7F4] hover:bg-white/[0.05] transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              if (onStartCourse) onStartCourse(course);
              onClose();
            }}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#16A36F] to-[#18B8A2] text-[#080B0A] font-bold text-xs transition-all shadow-emerald-glow flex items-center gap-2 hover:opacity-95"
          >
            <Play className="w-3.5 h-3.5 fill-[#080B0A]" />
            <span>{course.status === 'completed' ? 'Review Material' : course.status === 'in-progress' ? 'Resume Module' : 'Enroll & Start Learning'}</span>
          </button>
        </div>

      </div>
    </div>
  );
}
