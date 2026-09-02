import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import CertificateVerifyModal from '../../components/common/CertificateVerifyModal';
import { VERIFIED_CREDENTIAL, CURRENT_USER } from '../../data/mockData';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Copy, 
  Check, 
  Award, 
  ExternalLink, 
  Lock, 
  ArrowRight, 
  Sparkles, 
  Link2 
} from 'lucide-react';

export default function VerifiedCredentialsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [copiedHash, setCopiedHash] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 1500);
  };

  const timeline = [
    { title: "Issued", sub: "Signed by accredited MSSDS board" },
    { title: "Hashed", sub: "SHA-256 Merkle digest generated" },
    { title: "Recorded", sub: "Block #4819204 anchored on-chain" },
    { title: "Verified", sub: "16 validator nodes confirmed" },
  ];

  return (
    <DashboardLayout role="candidate">
      <div className="space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4ADE80]/10 border border-[#4ADE80]/25 text-[#4ADE80] text-xs font-semibold mb-2 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
              <span>BLOCKCHAIN LEDGER PROOF</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#F5F7FA] tracking-tight">
              Trust Every Credential
            </h1>
            <p className="text-xs sm:text-sm text-[#94A3B8] mt-1 font-mono">
              Tamper-evident qualification records anchored to the state skilling ledger for instant employer verification.
            </p>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#22D3EE] to-[#4ADE80] text-[#070B10] text-xs font-bold transition-all shadow-glow-teal flex items-center gap-2 hover:opacity-90 shrink-0 self-start sm:self-auto"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Verify Blockchain Record</span>
          </button>
        </div>

        {/* Primary Certificate Showcase Card */}
        <div className="surface-card rounded-2xl p-6 sm:p-7 space-y-6 relative overflow-hidden border-t-4 border-t-[#4ADE80]">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/[0.06]">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#4ADE80]/10 border border-[#4ADE80]/30 text-[#4ADE80] flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] font-mono">
                  Official State Certification
                </span>
                <h2 className="text-lg font-bold text-[#F5F7FA]">
                  {VERIFIED_CREDENTIAL.certificateTitle}
                </h2>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4ADE80]/10 text-[#4ADE80] border border-[#4ADE80]/30 text-xs font-bold font-mono self-start sm:self-auto">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#4ADE80]" /> VERIFIED CREDENTIAL ✓
            </span>
          </div>

          {/* Certificate Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 text-xs font-mono">
            <div className="p-3.5 rounded-xl bg-[#0D141B] border border-white/[0.06]">
              <div className="text-[10px] text-[#64748B] font-bold uppercase">Candidate</div>
              <div className="font-bold text-[#F5F7FA] mt-1">{VERIFIED_CREDENTIAL.candidateName}</div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0D141B] border border-white/[0.06]">
              <div className="text-[10px] text-[#64748B] font-bold uppercase">Certificate ID</div>
              <div className="font-bold text-[#22D3EE] mt-1">{VERIFIED_CREDENTIAL.certificateId}</div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0D141B] border border-white/[0.06]">
              <div className="text-[10px] text-[#64748B] font-bold uppercase">Issuing Authority</div>
              <div className="font-medium text-[#F5F7FA] truncate mt-1">MSSDS / NCVET</div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0D141B] border border-white/[0.06]">
              <div className="text-[10px] text-[#64748B] font-bold uppercase">Performance Grade</div>
              <div className="font-bold text-[#4ADE80] mt-1">{VERIFIED_CREDENTIAL.grade}</div>
            </div>
          </div>

          {/* Cryptographic SHA-256 Digest Box */}
          <div className="p-4 rounded-xl bg-[#0D141B] border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="min-w-0 flex-1 font-mono">
              <div className="text-[10px] text-[#64748B] uppercase flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#22D3EE]" />
                <span>Cryptographic SHA-256 Merkle Root</span>
              </div>
              <div className="text-xs text-[#22D3EE] truncate mt-1">
                {VERIFIED_CREDENTIAL.sha256Hash}
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(VERIFIED_CREDENTIAL.sha256Hash)}
              className="px-3.5 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.08] text-[#F5F7FA] hover:bg-white/[0.08] text-xs font-bold flex items-center gap-1.5 transition-all shrink-0 font-mono"
            >
              {copiedHash ? <Check className="w-3.5 h-3.5 text-[#4ADE80]" /> : <Copy className="w-3.5 h-3.5 text-[#64748B]" />}
              <span>{copiedHash ? 'Digest Copied' : 'Copy Proof Hash'}</span>
            </button>
          </div>

        </div>

        {/* Verification Timeline */}
        <div className="surface-card rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-[#F5F7FA] font-mono flex items-center gap-2">
              <Link2 className="w-3.5 h-3.5 text-[#22D3EE]" />
              <span>Cryptographic Consensus Lifecycle</span>
            </h3>
            <span className="text-xs text-[#4ADE80] font-mono font-bold">
              0 Alterations Detected (100% Valid)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3.5 pt-1">
            {timeline.map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-[#0D141B] border border-white/[0.06]">
                <div className="flex items-center justify-between text-[10px] text-[#64748B] mb-1 font-mono font-bold">
                  <span>Phase 0{idx + 1}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4ADE80]" />
                </div>
                <div className="font-extrabold text-xs text-[#F5F7FA]">{item.title}</div>
                <div className="text-[10px] text-[#94A3B8] mt-0.5 leading-relaxed">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Proof Modal */}
      <CertificateVerifyModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </DashboardLayout>
  );
}
