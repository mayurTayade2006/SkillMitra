import React from 'react';
import { Link } from 'react-router-dom';
import { X, Bell, CheckCircle2, Briefcase, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { NOTIFICATIONS_DATA } from '../../data/mockData';

export default function NotificationDrawer({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white/95 dark:bg-[#111716]/95 border-l border-slate-200 dark:border-white/15 shadow-2xl flex flex-col backdrop-blur-2xl transition-colors">
          
          {/* Header */}
          <div className="p-5 border-b border-slate-200 dark:border-white/10 flex items-center justify-between bg-slate-50 dark:bg-white/[0.03]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-[#A7F3D0] border border-emerald-300 dark:border-emerald-500/30 flex items-center justify-center font-bold">
                <Bell className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-[#F5F7F4] text-sm">System Alerts & Notifications</h3>
                <p className="text-[10px] text-slate-500 dark:text-[#94A3B8] font-mono">Live telemetry stream</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-800 dark:text-[#94A3B8] dark:hover:text-[#F5F7F4] hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {NOTIFICATIONS_DATA.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                onClick={onClose}
                className={`block p-4 rounded-2xl border transition-all ${
                  item.unread
                    ? 'bg-emerald-50/80 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/30 hover:border-emerald-300 dark:hover:border-emerald-500/50 shadow-sm dark:shadow-glass'
                    : 'bg-slate-50 dark:bg-white/[0.03] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:bg-slate-100 dark:hover:bg-white/[0.06]'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-[#F5F7F4]">{item.title}</h4>
                  {item.unread && (
                    <span className="w-2 h-2 rounded-full bg-amber-500 dark:bg-[#E5A34A] shrink-0 animate-pulse" />
                  )}
                </div>
                <p className="text-xs text-slate-600 dark:text-[#94A3B8] mt-1.5 leading-relaxed">{item.message}</p>
                <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-slate-200 dark:border-white/10 text-[10px] text-slate-500 dark:text-[#64748B] font-mono">
                  <span>{item.time}</span>
                  <span className="text-emerald-700 dark:text-[#A7F3D0] font-semibold flex items-center gap-1">
                    Inspect <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] text-center">
            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.04] hover:bg-slate-100 dark:hover:bg-white/[0.08] text-xs font-semibold text-slate-800 dark:text-[#F5F7F4] shadow-sm transition-colors"
            >
              Mark All As Read
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
