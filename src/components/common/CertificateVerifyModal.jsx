import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, Copy, Check, Lock, Hash, Link2, Sparkles } from 'lucide-react';
import { VERIFIED_CREDENTIAL } from '../../data/mockData';

export default function CertificateVerifyModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const copyHash = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const steps = [
    { num: 1, title: "Issued", desc: "Signed by accredited MSSDS board" },
    { num: 2, title: "Hashed", desc: "SHA-256 digest generated" },
    { num: 3, title: "Recorded", desc: "Block #4819204 anchored" },
    { num: 4, title: "Verified", desc: "16 validator nodes confirmed" },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-xl rounded-3xl bg-[#111716]/95 border border-white/15 shadow-2xl overflow-hidden z-10 backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 bg-white/[0.04] border-b border-white/10 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-xl text-[#94A3B8] hover:text-[#F5F7F4] hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-[#A7F3D0] border border-emerald-500/30 flex items-center justify-center shadow-emerald-glow">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-[#F5F7F4]">Tamper-Evident Credential Proof</h3>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-[#A7F3D0] border border-emerald-500/30 font-bold font-mono">
                  ✓ VERIFIED
                </span>
              </div>
              <p className="text-xs text-[#94A3B8] font-mono mt-0.5">
                State of Maharashtra Proof Ledger (Block #4819204)
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 bg-transparent">
          
          {/* Certificate Snapshot Card */}
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 text-xs">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-[10px] text-[#64748B] uppercase font-mono">Certificate Title</div>
                <div className="font-bold text-[#F5F7F4] mt-1">{VERIFIED_CREDENTIAL.certificateTitle}</div>
              </div>
              <div>
                <div className="text-[10px] text-[#64748B] uppercase font-mono">Candidate</div>
                <div className="font-bold text-[#F5F7F4] mt-1">{VERIFIED_CREDENTIAL.candidateName}</div>
              </div>
              <div>
                <div className="text-[10px] text-[#64748B] uppercase font-mono">Certificate ID</div>
                <div className="font-mono font-bold text-[#A7F3D0] mt-1">{VERIFIED_CREDENTIAL.certificateId}</div>
              </div>
              <div>
                <div className="text-[10px] text-[#64748B] uppercase font-mono">Issuing Authority</div>
                <div className="font-medium text-[#94A3B8] mt-1">{VERIFIED_CREDENTIAL.issuingAuthority}</div>
              </div>
            </div>
          </div>

          {/* 4-Step Verification Timeline: Issued -> Hashed -> Recorded -> Verified */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] mb-2.5 font-mono">
              Verification Audit Pipeline
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
              {steps.map((s) => (
                <div key={s.num} className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/40 transition-all">
                  <div className="flex items-center justify-between text-[10px] text-[#94A3B8] mb-1 font-mono">
                    <span>Step 0{s.num}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="font-bold text-[#F5F7F4] text-xs">{s.title}</div>
                  <div className="text-[10px] text-[#64748B] mt-1 leading-tight">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Cryptographic SHA-256 Hash Digest */}
          <div className="space-y-2 text-xs">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] font-mono">
              SHA-256 Cryptographic Hash Digest
            </h4>

            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-3">
              <div className="min-w-0 flex-1">
                <div className="text-[10px] text-[#64748B] font-mono uppercase">Merkle Proof Root</div>
                <div className="font-mono text-xs text-[#A7F3D0] truncate mt-0.5">
                  {VERIFIED_CREDENTIAL.sha256Hash}
                </div>
              </div>
              <button
                onClick={() => copyHash(VERIFIED_CREDENTIAL.sha256Hash)}
                className="px-3 py-1.5 rounded-xl bg-white/[0.05] border border-white/10 text-[#F5F7F4] hover:bg-white/10 text-xs font-semibold shrink-0 flex items-center gap-1.5 transition-all"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#94A3B8]" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-5 bg-white/[0.03] border-t border-white/10 flex items-center justify-between text-xs">
          <span className="text-[11px] text-[#A7F3D0] font-bold flex items-center gap-1.5 font-mono">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Integrity Verified (0 Alterations)
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#16A36F] to-[#18B8A2] text-[#080B0A] text-xs font-bold transition-all shadow-emerald-glow hover:opacity-95"
          >
            Close Proof Record
          </button>
        </div>

      </div>
    </div>
  );
}
