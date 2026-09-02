import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import { SECURITY_AUDIT_DATA } from '../data/mockData';
import { 
  ShieldCheck, 
  Lock, 
  Key, 
  FileText, 
  Server, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  Activity, 
  Terminal, 
  Zap 
} from 'lucide-react';

export default function SecurityCenterPage() {
  const securityControls = [
    { title: "JWT Authentication", status: "Active", desc: "Stateless authentication with cryptographic 256-bit token rotation", badge: "RSA-256 Signatures", color: "#22D3EE" },
    { title: "Data Encryption", status: "Active", desc: "AES-256 encryption at rest and TLS 1.3 cryptographic transport", badge: "FIPS 140-2 Level 3", color: "#4ADE80" },
    { title: "Role-Based Access", status: "Active", desc: "5 granular stakeholder tiers with strict zero-trust boundaries", badge: "RBAC Enforced", color: "#A78BFA" },
    { title: "Immutable Audit", status: "Active", desc: "Tamper-evident logging of verification and authentication events", badge: "Real-time Stream", color: "#F59E0B" },
    { title: "Secure APIs", status: "Active", desc: "WAF edge filtering, rate limiting, and automated DDoS mitigation", badge: "Shield Protected", color: "#22D3EE" },
  ];

  const recentActivity = [
    { time: "10:42:18 AM", event: "Successful JWT login (Candidate: Shweta Sharma)", status: "Authorized", hash: "0x8f2a...1b9e" },
    { time: "10:38:05 AM", event: "Certificate verification (Token: SKL-9281)", status: "Verified", hash: "0x4c91...883a" },
    { time: "10:21:44 AM", event: "Profile updated (Target Role: Data Analyst)", status: "Completed", hash: "0x77e1...991c" },
    { time: "09:55:12 AM", event: "State outcome dataset refreshed (Mantralaya Node)", status: "Synced", hash: "0x23a0...44d9" },
    { time: "09:14:30 AM", event: "RBAC permission check for Government Dashboard", status: "Authorized", hash: "0x11b3...55aa" },
  ];

  return (
    <DashboardLayout role="candidate">
      <div className="space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A78BFA]/10 border border-[#A78BFA]/25 text-[#A78BFA] text-xs font-semibold mb-2 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] animate-pulse" />
              <span>ZERO-TRUST GOVERNANCE CENTER</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#F5F7FA] tracking-tight">
              Security, Cryptography & Trust
            </h1>
            <p className="text-xs sm:text-sm text-[#94A3B8] mt-1 font-mono">
              Public data governance, cryptographic integrity protocols, and compliance standards for Maharashtra.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3.5 rounded-xl bg-[#0D141B] border border-white/[0.08] flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#A78BFA]/15 text-[#A78BFA] flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-[#64748B] font-mono">Security Health Score</div>
                <div className="text-lg font-black text-[#F5F7FA] font-mono">92 / 100</div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Controls System */}
        <div className="space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#64748B] font-mono flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-[#22D3EE]" />
            <span>Active Cryptographic Safeguards</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {securityControls.map((ctrl, idx) => (
              <div key={idx} className="surface-card rounded-xl p-4.5 space-y-3 flex flex-col justify-between border-t-2" style={{ borderTopColor: ctrl.color }}>
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-[#F5F7FA]">{ctrl.title}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4ADE80]" />
                  </div>
                  <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                    {ctrl.desc}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-white/[0.06] text-[10px] font-mono" style={{ color: ctrl.color }}>
                  {ctrl.badge}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Audit Activity Log Table */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#121B23] overflow-hidden">
          <div className="p-4 sm:p-5 border-b border-white/[0.06] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#22D3EE]" />
              <h3 className="text-xs font-bold text-[#F5F7FA] font-mono">
                Recent Security Audit Trail & Event Stream
              </h3>
            </div>
            <span className="text-xs text-[#4ADE80] font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
              Live Immutable Stream
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[540px] text-left text-xs font-mono">
              <thead className="bg-[#0D141B] text-[#64748B] uppercase text-[10px] font-bold border-b border-white/[0.08]">
                <tr>
                  <th className="py-3.5 px-5">Timestamp</th>
                  <th className="py-3.5 px-5">Activity Event</th>
                  <th className="py-3.5 px-5">Proof Hash</th>
                  <th className="py-3.5 px-5 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {recentActivity.map((act, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-5 text-[#64748B]">
                      {act.time}
                    </td>
                    <td className="py-3.5 px-5 text-[#F5F7FA]">
                      {act.event}
                    </td>
                    <td className="py-3.5 px-5 text-[#22D3EE] text-[11px]">
                      {act.hash}
                    </td>
                    <td className="py-3.5 px-5 text-right">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#4ADE80]/10 text-[#4ADE80] border border-[#4ADE80]/30 text-[10px] font-bold">
                        {act.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
