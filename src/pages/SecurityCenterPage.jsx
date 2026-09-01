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
  Clock 
} from 'lucide-react';

export default function SecurityCenterPage() {
  const securityControls = [
    { title: "Authentication", status: "Active", desc: "JWT stateless authentication with cryptographic token rotation", badge: "256-bit Signatures" },
    { title: "Data Protection", status: "Active", desc: "AES-256 encryption at rest and TLS 1.3 in transit", badge: "FIPS 140-2" },
    { title: "Role-Based Access", status: "Active", desc: "5 granular stakeholder tiers with strict policy boundaries", badge: "Enforced" },
    { title: "Audit Trail", status: "Active", desc: "Immutable logging of authentication and credential verification events", badge: "Real-time" },
    { title: "Secure APIs", status: "Active", desc: "WAF edge filtering and distributed DDoS rate-limiting", badge: "Protected" },
  ];

  const recentActivity = [
    { time: "10:42 AM", event: "Successful login (Candidate: Shweta Sharma)", status: "Authorized" },
    { time: "10:38 AM", event: "Certificate verification (Token: SKL-9281)", status: "Verified" },
    { time: "10:21 AM", event: "Profile updated (Target Role: Data Analyst)", status: "Completed" },
    { time: "09:55 AM", event: "State outcome dataset refreshed (Mantralaya Node)", status: "Synced" },
    { time: "09:14 AM", event: "RBAC permission check for Government Dashboard", status: "Authorized" },
  ];

  return (
    <DashboardLayout role="candidate">
      <div className="space-y-7">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-[#E5E2DA]">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1D2421] tracking-tight">
                Built with trust.
              </h1>
              <span className="text-[10px] font-bold px-2 py-0.2 rounded bg-[#EBF2EE] text-[#164B36] border border-[#D1E0D7]">
                Gov Compliance
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#4A5550] mt-1">
              Public data governance, cryptographic integrity protocols, and compliance standards for Maharashtra.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-[#FAF9F5] border border-[#E5E2DA] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#164B36]" />
              <div>
                <div className="text-[10px] uppercase font-bold text-[#789184]">Security Health Score</div>
                <div className="text-sm font-black text-[#164B36]">92 / 100</div>
              </div>
            </div>
          </div>
        </div>

        {/* Clean Horizontal Security Controls System */}
        <div className="space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#789184]">
            Operational Security Controls
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5">
            {securityControls.map((ctrl, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E5E2DA] shadow-card space-y-2.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-[#1D2421]">{ctrl.title}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#164B36]" />
                  </div>
                  <p className="text-[11px] text-[#4A5550] leading-relaxed">
                    {ctrl.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#ECE9E1] text-[10px] text-[#789184] font-mono">
                  {ctrl.badge}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Audit Activity Log Table */}
        <div className="rounded-xl border border-[#E5E2DA] bg-[#FFFFFF] shadow-card overflow-hidden">
          <div className="p-4 sm:p-5 border-b border-[#ECE9E1] bg-[#FAF9F5] flex items-center justify-between">
            <h3 className="text-sm font-bold text-[#1D2421]">
              Recent Activity & Security Audit Trail
            </h3>
            <span className="text-xs text-[#789184]">
              Real-time Event Stream
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px] text-left text-xs">
              <thead className="bg-[#F3F0E8] text-[#789184] uppercase text-[10px] font-bold border-b border-[#E5E2DA]">
                <tr>
                  <th className="py-3 px-4">Timestamp</th>
                  <th className="py-3 px-4">Activity Event</th>
                  <th className="py-3 px-4 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ECE9E1]">
                {recentActivity.map((act, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF9F5] transition-colors">
                    <td className="py-3.5 px-4 font-mono text-[#789184]">
                      {act.time}
                    </td>
                    <td className="py-3.5 px-4 font-medium text-[#1D2421]">
                      {act.event}
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <span className="px-2 py-0.5 rounded bg-[#EBF2EE] text-[#164B36] border border-[#D1E0D7] text-[11px] font-bold">
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
