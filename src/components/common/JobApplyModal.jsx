import React, { useState } from 'react';
import { X, CheckCircle2, MapPin, DollarSign, ShieldCheck, Send, Check, Sparkles } from 'lucide-react';
import { CURRENT_USER } from '../../data/mockData';

export default function JobApplyModal({ job, isOpen, onClose, onApplied }) {
  const [applied, setApplied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen || !job) return null;

  const handleApply = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setApplied(true);
      if (onApplied) onApplied(job.id);
    }, 500);
  };

  const handleClose = () => {
    setApplied(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/40 dark:bg-black/75 backdrop-blur-md transition-opacity"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg rounded-3xl bg-white/95 dark:bg-[#111716]/95 border border-slate-200 dark:border-white/15 shadow-2xl overflow-hidden z-10 backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-200 transition-colors">
        
        {/* Header */}
        <div className="p-6 bg-slate-50 dark:bg-white/[0.04] border-b border-slate-200 dark:border-white/10 relative">
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 p-1.5 rounded-xl text-slate-400 hover:text-slate-800 dark:text-[#94A3B8] dark:hover:text-[#F5F7F4] hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3.5">
            <img
              src={job.logo}
              alt={job.company}
              className="w-11 h-11 rounded-xl object-cover border border-slate-200 dark:border-white/10 shadow-sm"
            />
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-[#F5F7F4]">{job.title}</h3>
              <p className="text-xs text-emerald-700 dark:text-[#A7F3D0] font-semibold">{job.company}</p>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-3 text-xs text-slate-500 dark:text-[#94A3B8] font-mono">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-[#A7F3D0]" /> {job.location}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5 text-amber-600 dark:text-[#E5A34A] font-bold">
              <DollarSign className="w-3.5 h-3.5" /> {job.salary}
            </span>
          </div>
        </div>

        {/* Content */}
        {!applied ? (
          <div className="p-6 space-y-4 bg-transparent">
            {/* Match Score Summary */}
            <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-between">
              <div>
                <div className="text-xs text-emerald-800 dark:text-[#A7F3D0] font-bold font-mono">
                  Candidate Fit Match: {job.matchScore}%
                </div>
                <div className="text-[11px] text-slate-600 dark:text-[#94A3B8] mt-0.5">
                  Your skill matrix exceeds 4 out of 5 required competency benchmarks.
                </div>
              </div>
              <div className="text-2xl font-black text-emerald-700 dark:text-[#A7F3D0] font-mono">
                {job.matchScore}%
              </div>
            </div>

            {/* Attached Verified Credentials */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-[#94A3B8] mb-2 flex items-center gap-2 font-mono">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-[#16A36F]" />
                Attached Verified Profile
              </h4>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-2 text-xs text-slate-600 dark:text-[#94A3B8]">
                <div className="flex justify-between">
                  <span className="text-slate-400 dark:text-[#64748B]">Candidate:</span>
                  <span className="font-bold text-slate-900 dark:text-[#F5F7F4]">{CURRENT_USER.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 dark:text-[#64748B]">College:</span>
                  <span className="font-medium text-slate-900 dark:text-[#F5F7F4]">{CURRENT_USER.institution}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 dark:text-[#64748B]">Verified Blockchain Credential:</span>
                  <span className="font-mono text-emerald-700 dark:text-[#A7F3D0] font-bold">SKL-9281 (Verified)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 dark:text-[#64748B]">Assessed Readiness:</span>
                  <span className="text-emerald-700 dark:text-[#A7F3D0] font-bold font-mono">78%</span>
                </div>
              </div>
            </div>

            {/* Skills Check */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-[#94A3B8] mb-2 font-mono">
                Required Competencies
              </h4>
              <div className="flex flex-wrap gap-2">
                {job.skillsRequired.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-emerald-800 dark:text-[#A7F3D0] text-xs font-medium font-mono"
                  >
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-end gap-3">
              <button
                onClick={handleClose}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-[#94A3B8] hover:text-slate-900 dark:hover:text-[#F5F7F4] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleApply}
                disabled={isSubmitting}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#059669] to-[#0D9488] dark:from-[#16A36F] dark:to-[#18B8A2] text-white dark:text-[#080B0A] font-bold text-xs transition-all shadow-sm dark:shadow-emerald-glow flex items-center gap-2 hover:opacity-95"
              >
                {isSubmitting ? (
                  <span>Submitting Profile...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Verified Application</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ) : (
          /* Applied Success State */
          <div className="p-8 text-center bg-transparent space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-[#A7F3D0] border border-emerald-300 dark:border-emerald-500/40 flex items-center justify-center mx-auto shadow-sm dark:shadow-emerald-glow">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-[#F5F7F4]">
              Application Transmitted
            </h3>
            <p className="text-xs text-slate-600 dark:text-[#94A3B8] max-w-sm mx-auto leading-relaxed">
              Your verified resume and cryptographically signed skill matrix have been transmitted directly to <strong>{job.company}</strong> talent acquisition desk.
            </p>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 text-left text-xs text-slate-600 dark:text-[#94A3B8] font-mono space-y-1.5">
              <div>• Pipeline: <span className="text-emerald-700 dark:text-[#A7F3D0] font-bold">Fast-Track AI Screened</span></div>
              <div>• Ledger Token: <span className="text-slate-900 dark:text-[#F5F7F4]">APP-MH-94829-VERIFIED</span></div>
            </div>
            <button
              onClick={handleClose}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 dark:bg-emerald-500 text-white dark:text-[#080B0A] font-bold text-xs hover:opacity-90 transition-colors shadow-sm dark:shadow-emerald-glow"
            >
              Done & Explore Matches
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
