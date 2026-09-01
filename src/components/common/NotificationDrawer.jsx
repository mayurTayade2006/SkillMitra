import React from 'react';
import { Link } from 'react-router-dom';
import { X, Bell, CheckCircle2, Briefcase, ShieldCheck, ArrowRight } from 'lucide-react';
import { NOTIFICATIONS_DATA } from '../../data/mockData';

export default function NotificationDrawer({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-sm bg-[#FFFFFF] border-l border-[#DDD9CF] shadow-elevated flex flex-col">
          
          {/* Header */}
          <div className="p-4 border-b border-[#DDD9CF] flex items-center justify-between bg-[#FAF8F3]">
            <div className="flex items-center gap-2">
              <Bell className="w-4 h-4 text-[#176B4D]" />
              <h3 className="font-bold text-[#202522] text-sm">Notifications</h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-md text-[#68716C] hover:text-[#202522] hover:bg-[#EEEAE0]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {NOTIFICATIONS_DATA.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                onClick={onClose}
                className={`block p-3 rounded-lg border transition-colors ${
                  item.unread
                    ? 'bg-[#FDF8EB] border-[#F6EAC9]'
                    : 'bg-[#FFFFFF] border-[#E5E0D5] hover:bg-[#F7F5EF]'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-xs font-bold text-[#202522]">{item.title}</h4>
                  {item.unread && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C66A4A] shrink-0" />
                  )}
                </div>
                <p className="text-xs text-[#454E48] mt-1 leading-relaxed">{item.message}</p>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#E5E0D5] text-[10px] text-[#68716C]">
                  <span>{item.time}</span>
                  <span className="text-[#176B4D] font-semibold flex items-center gap-1">
                    View <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Footer */}
          <div className="p-3 border-t border-[#DDD9CF] bg-[#FAF8F3] text-center">
            <button
              onClick={onClose}
              className="w-full py-1.5 rounded-md border border-[#DDD9CF] bg-[#FFFFFF] hover:bg-[#F7F5EF] text-xs font-semibold text-[#454E48] transition-colors"
            >
              Mark All As Read
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
