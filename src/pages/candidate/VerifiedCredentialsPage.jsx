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
  ArrowRight
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
    { title: "Hashed", sub: "SHA-256 digest generated" },
    { title: "Recorded", sub: "Block #4819204 anchored" },
    { title: "Verified", sub: "16 validator nodes confirmed" },
  ];

  return (
    <DashboardLayout role="candidate">
      <div className="space-y-7">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#E5E2DA]">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1D2421] tracking-tight">
              Trust every credential.
            </h1>
            <p className="text-xs sm:text-sm text-[#4A5550] mt-1">
              Tamper-evident qualification records anchored to the state skilling ledger for instant employer verification.
            </p>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="px-4 py-2 rounded-md bg-[#164B36] hover:bg-[#113A2A] text-[#FAF9F5] text-xs font-bold transition-colors flex items-center gap-1.5 shadow-subtle shrink-0 self-start sm:self-auto"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Open Verification Drawer</span>
          </button>
        </div>

        {/* Beautiful Primary Certificate Showcase Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#E5E2DA] shadow-card space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#ECE9E1]">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-[#EBF2EE] border border-[#D1E0D7] text-[#164B36] flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#789184]">
                  Official State Certification
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-[#1D2421]">
                  {VERIFIED_CREDENTIAL.certificateTitle}
                </h2>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EBF2EE] text-[#164B36] border border-[#D1E0D7] text-xs font-bold self-start sm:self-auto">
              <CheckCircle2 className="w-4 h-4" /> Verified ✓
            </span>
          </div>

          {/* Certificate Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div className="p-3.5 rounded-lg bg-[#FAF9F5] border border-[#E5E2DA]">
              <div className="text-[10px] text-[#789184] font-bold uppercase">Candidate</div>
              <div className="font-bold text-[#1D2421] mt-0.5">{VERIFIED_CREDENTIAL.candidateName}</div>
            </div>

            <div className="p-3.5 rounded-lg bg-[#FAF9F5] border border-[#E5E2DA]">
              <div className="text-[10px] text-[#789184] font-bold uppercase">Certificate ID</div>
              <div className="font-mono font-bold text-[#164B36] mt-0.5">{VERIFIED_CREDENTIAL.certificateId}</div>
            </div>

            <div className="p-3.5 rounded-lg bg-[#FAF9F5] border border-[#E5E2DA]">
              <div className="text-[10px] text-[#789184] font-bold uppercase">Issuing Authority</div>
              <div className="font-medium text-[#1D2421] truncate mt-0.5">MSSDS / NCVET</div>
            </div>

            <div className="p-3.5 rounded-lg bg-[#FAF9F5] border border-[#E5E2DA]">
              <div className="text-[10px] text-[#789184] font-bold uppercase">Performance Grade</div>
              <div className="font-bold text-[#164B36] mt-0.5">{VERIFIED_CREDENTIAL.grade}</div>
            </div>
          </div>

          {/* Cryptographic SHA-256 Digest Box */}
          <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E5E2DA] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="min-w-0 flex-1">
              <div className="text-[10px] text-[#789184] font-mono uppercase flex items-center gap-1">
                <Lock className="w-3 h-3 text-[#164B36]" />
                Cryptographic SHA-256 Hash Digest
              </div>
              <div className="font-mono text-xs text-[#1D2421] truncate mt-0.5">
                {VERIFIED_CREDENTIAL.sha256Hash}
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(VERIFIED_CREDENTIAL.sha256Hash)}
              className="px-3.5 py-1.5 rounded bg-[#FFFFFF] border border-[#E5E2DA] text-[#1D2421] hover:bg-[#F3F0E8] text-xs font-bold flex items-center gap-1.5 shadow-subtle shrink-0"
            >
              {copiedHash ? <Check className="w-3.5 h-3.5 text-[#164B36]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedHash ? 'Digest Copied' : 'Copy Hash'}</span>
            </button>
          </div>

        </div>

        {/* Verification Timeline (Issued -> Hashed -> Recorded -> Verified) */}
        <div className="p-6 sm:p-7 rounded-2xl bg-[#FFFFFF] border border-[#E5E2DA] shadow-subtle space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-[#1D2421]">
              Cryptographic Consensus Lifecycle
            </h3>
            <span className="text-xs text-[#164B36] font-bold">
              0 Alterations Detected
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-2">
            {timeline.map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#E5E2DA]">
                <div className="flex items-center justify-between text-[10px] text-[#789184] mb-1 font-mono font-bold">
                  <span>Phase 0{idx + 1}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#164B36]" />
                </div>
                <div className="font-extrabold text-xs text-[#1D2421]">{item.title}</div>
                <div className="text-[10px] text-[#789184] mt-0.5 leading-relaxed">{item.sub}</div>
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
