import React, { useState } from 'react';
import { X, CheckCircle2, MapPin, DollarSign, ShieldCheck, Send, Check } from 'lucide-react';
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
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg rounded-xl bg-[#FAF9F5] border border-[#E5E2DA] shadow-elevated overflow-hidden z-10 animate-in fade-in duration-200">
        
        {/* Header */}
        <div className="p-5 bg-[#F3F0E8] border-b border-[#E5E2DA] relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-1 rounded-md text-[#789184] hover:text-[#1D2421] hover:bg-[#E5E2DA]"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3">
            <img
              src={job.logo}
              alt={job.company}
              className="w-10 h-10 rounded object-cover border border-[#E5E2DA]"
            />
            <div>
              <h3 className="text-base font-bold text-[#1D2421]">{job.title}</h3>
              <p className="text-xs text-[#164B36] font-semibold">{job.company}</p>
            </div>
          </div>

          <div className="mt-2.5 flex items-center gap-3 text-xs text-[#789184]">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#789184]" /> {job.location}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1 text-[#164B36] font-bold">
              <DollarSign className="w-3.5 h-3.5" /> {job.salary}
            </span>
          </div>
        </div>

        {/* Content */}
        {!applied ? (
          <div className="p-5 space-y-4 bg-[#FAF9F5]">
            {/* Match Score Summary */}
            <div className="p-3.5 rounded-lg bg-[#EBF2EE] border border-[#D1E0D7] flex items-center justify-between">
              <div>
                <div className="text-xs text-[#164B36] font-bold">
                  Candidate Match: {job.matchScore}%
                </div>
                <div className="text-[11px] text-[#4A5550] mt-0.5">
                  Your profile meets the core competency benchmarks for this role.
                </div>
              </div>
              <div className="text-xl font-bold text-[#164B36] font-mono">
                {job.matchScore}%
              </div>
            </div>

            {/* Attached Verified Credentials */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#789184] mb-1.5 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#164B36]" />
                Attached Verified Profile Details
              </h4>
              <div className="p-3 rounded-lg bg-[#FFFFFF] border border-[#E5E2DA] space-y-1.5 text-xs text-[#4A5550] shadow-subtle">
                <div className="flex justify-between">
                  <span className="text-[#789184]">Candidate:</span>
                  <span className="font-bold text-[#1D2421]">{CURRENT_USER.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#789184]">College:</span>
                  <span className="font-medium text-[#1D2421]">{CURRENT_USER.institution}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#789184]">Verified Credential:</span>
                  <span className="font-mono text-[#164B36] font-bold">SKL-9281 (Verified)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#789184]">Assessed Readiness:</span>
                  <span className="text-[#164B36] font-bold">78%</span>
                </div>
              </div>
            </div>

            {/* Skills Check */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#789184] mb-1.5">
                Required Competencies
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {job.skillsRequired.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-[#EBF2EE] border border-[#D1E0D7] text-[#164B36] text-xs font-medium"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#164B36]" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-3 border-t border-[#E5E2DA] flex items-center justify-end gap-2.5">
              <button
                onClick={handleClose}
                className="px-3 py-1.5 rounded-md text-xs font-semibold text-[#789184] hover:text-[#1D2421]"
              >
                Cancel
              </button>
              <button
                onClick={handleApply}
                disabled={isSubmitting}
                className="px-4 py-2 rounded-md bg-[#164B36] hover:bg-[#113A2A] text-[#FAF9F5] font-semibold text-xs transition-colors flex items-center gap-1.5 shadow-subtle"
              >
                {isSubmitting ? (
                  <span>Submitting Profile...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Application</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ) : (
          /* Applied Success State */
          <div className="p-6 text-center bg-[#FAF9F5] space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#EBF2EE] text-[#164B36] border border-[#D1E0D7] flex items-center justify-center mx-auto">
              <Check className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#1D2421]">
              Application Transmitted
            </h3>
            <p className="text-xs text-[#789184] max-w-sm mx-auto leading-relaxed">
              Your verified resume and assessed skill matrix have been transmitted to the recruiting desk at <strong>{job.company}</strong>.
            </p>
            <div className="p-3 rounded-lg bg-[#FFFFFF] border border-[#E5E2DA] text-left text-xs text-[#4A5550] font-mono space-y-1 shadow-subtle">
              <div>• Status: <span className="text-[#164B36] font-bold">Fast-Track Screening</span></div>
              <div>• Token: <span className="text-[#1D2421]">APP-MH-94829</span></div>
            </div>
            <button
              onClick={handleClose}
              className="px-4 py-2 rounded-md bg-[#164B36] text-[#FAF9F5] font-semibold text-xs hover:bg-[#113A2A] transition-colors"
            >
              Done & Explore More Jobs
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
