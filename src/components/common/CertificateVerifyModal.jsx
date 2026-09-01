import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, Copy, Check, Lock, Hash } from 'lucide-react';
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
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-xl rounded-xl bg-[#FAF9F5] border border-[#E5E2DA] shadow-elevated overflow-hidden z-10 animate-in fade-in duration-200">
        
        {/* Header */}
        <div className="p-5 bg-[#F3F0E8] border-b border-[#E5E2DA] relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-md text-[#789184] hover:text-[#1D2421] hover:bg-[#E5E2DA]"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-[#164B36] flex items-center justify-center text-[#FAF9F5]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-[#1D2421]">Tamper-Evident Credential Record</h3>
                <span className="text-[10px] px-2 py-0.2 rounded bg-[#EBF2EE] text-[#164B36] border border-[#D1E0D7] font-bold">
                  ✓ Verified
                </span>
              </div>
              <p className="text-xs text-[#789184]">
                State of Maharashtra Public Proof Ledger (Block #4819204)
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4 bg-[#FAF9F5]">
          
          {/* Certificate Snapshot Card */}
          <div className="p-4 rounded-lg bg-[#FFFFFF] border border-[#E5E2DA] space-y-2 text-xs shadow-subtle">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <div className="text-[11px] text-[#789184]">Certificate Title</div>
                <div className="font-bold text-[#1D2421] mt-0.5">{VERIFIED_CREDENTIAL.certificateTitle}</div>
              </div>
              <div>
                <div className="text-[11px] text-[#789184]">Candidate</div>
                <div className="font-bold text-[#1D2421] mt-0.5">{VERIFIED_CREDENTIAL.candidateName}</div>
              </div>
              <div>
                <div className="text-[11px] text-[#789184]">Certificate ID</div>
                <div className="font-mono font-bold text-[#164B36] mt-0.5">{VERIFIED_CREDENTIAL.certificateId}</div>
              </div>
              <div>
                <div className="text-[11px] text-[#789184]">Issuing Body</div>
                <div className="font-medium text-[#4A5550] mt-0.5">{VERIFIED_CREDENTIAL.issuingAuthority}</div>
              </div>
            </div>
          </div>

          {/* 4-Step Verification Timeline: Issued -> Hashed -> Recorded -> Verified */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#789184] mb-2">
              Verification Audit Pipeline
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              {steps.map((s) => (
                <div key={s.num} className="p-2.5 rounded-lg bg-[#FFFFFF] border border-[#E5E2DA] shadow-subtle">
                  <div className="flex items-center justify-between text-[10px] text-[#789184] mb-1">
                    <span>Step 0{s.num}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#164B36]" />
                  </div>
                  <div className="font-bold text-[#1D2421] text-[11px]">{s.title}</div>
                  <div className="text-[10px] text-[#789184] mt-0.5 leading-tight">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Cryptographic SHA-256 Hash Digest */}
          <div className="space-y-1.5 text-xs">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#789184]">
              Cryptographic Proof Digest
            </h4>

            <div className="p-3 rounded-lg bg-[#FFFFFF] border border-[#E5E2DA] flex items-center justify-between gap-2 shadow-subtle">
              <div className="min-w-0 flex-1">
                <div className="text-[10px] text-[#789184] font-mono uppercase">SHA-256 Hash Digest</div>
                <div className="font-mono text-xs text-[#1D2421] truncate mt-0.5">
                  {VERIFIED_CREDENTIAL.sha256Hash}
                </div>
              </div>
              <button
                onClick={() => copyHash(VERIFIED_CREDENTIAL.sha256Hash)}
                className="px-2.5 py-1 rounded bg-[#F3F0E8] border border-[#E5E2DA] text-[#1D2421] hover:bg-[#E5E2DA] text-xs font-semibold shrink-0 flex items-center gap-1"
              >
                {copied ? <Check className="w-3 h-3 text-[#164B36]" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F3F0E8] border-t border-[#E5E2DA] flex items-center justify-between text-xs">
          <span className="text-[11px] text-[#164B36] font-bold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> Integrity Check Passed (0 Alterations)
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-md bg-[#164B36] text-[#FAF9F5] text-xs font-semibold hover:bg-[#113A2A] transition-colors"
          >
            Close Record
          </button>
        </div>

      </div>
    </div>
  );
}
