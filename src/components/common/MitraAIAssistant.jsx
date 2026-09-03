import React, { useState, useRef, useEffect } from 'react';
import { Send, X, MessageSquare, Bot, User, ArrowRight, Sparkles, ChevronRight } from 'lucide-react';
import { MITRA_AI_RESPONSES } from '../../data/mockData';

export default function MitraAIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: "Namaste Shweta. I am the SkillMitra intelligence assistant.\n\nHow can I help you navigate your skill gap analysis, career readiness, or active hiring matches across Maharashtra today?",
      time: "Just now"
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const suggestedQuestions = [
    { text: "What skills should I improve?", key: "skills" },
    { text: "Which jobs match me?", key: "careers" },
    { text: "What skills are trending in Pune?", key: "pune" },
    { text: "Which skilling program has best placement?", key: "schemes" },
  ];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (textToSend = inputText) => {
    if (!textToSend.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: "user",
      text: textToSend,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    setTimeout(() => {
      let reply = "Based on current state employment datasets and industry benchmarks, completing your Power BI and Applied Statistics roadmap modules will deliver the highest boost to your job readiness.";
      
      const lower = textToSend.toLowerCase();
      if (lower.includes("miss") || lower.includes("gap") || lower.includes("analyst") || lower.includes("improve") || lower.includes("skill")) {
        reply = MITRA_AI_RESPONSES.skills;
      } else if (lower.includes("career") || lower.includes("fit") || lower.includes("match") || lower.includes("best") || lower.includes("job")) {
        reply = MITRA_AI_RESPONSES.careers;
      } else if (lower.includes("pune") || lower.includes("demand") || lower.includes("district") || lower.includes("mumbai")) {
        reply = MITRA_AI_RESPONSES.pune;
      } else if (lower.includes("program") || lower.includes("scheme") || lower.includes("placement") || lower.includes("rate")) {
        reply = MITRA_AI_RESPONSES.schemes;
      }

      const aiMsg = {
        id: Date.now() + 1,
        sender: "ai",
        text: reply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 450);
  };

  return (
    <>
      {/* Floating Glass Capsule Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-2.5 px-5 py-3 rounded-full bg-gradient-to-r from-[#059669] to-[#0D9488] dark:from-[#16A36F] dark:to-[#18B8A2] hover:opacity-95 text-white dark:text-[#080B0A] text-xs font-black tracking-wide shadow-lg dark:shadow-emerald-glow hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border border-emerald-400/40"
          >
            <div className="w-6 h-6 rounded-full bg-white/20 dark:bg-[#080B0A] text-white dark:text-[#16A36F] flex items-center justify-center shadow-inner">
              <Sparkles className="w-3.5 h-3.5 fill-current" />
            </div>
            <span>ASK SKILLMITRA</span>
            <div className="w-2 h-2 rounded-full bg-white dark:bg-[#080B0A] animate-ping opacity-60" />
          </button>
        )}
      </div>

      {/* Slide-Over Assistant Drawer */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[94vw] sm:w-[420px] h-[560px] max-h-[85vh] rounded-3xl bg-white/95 dark:bg-[#111716]/95 border border-slate-200 dark:border-white/15 shadow-2xl flex flex-col overflow-hidden backdrop-blur-2xl animate-in fade-in slide-in-from-bottom-6 duration-200 transition-colors">
          
          {/* Header */}
          <div className="p-4 bg-slate-50 dark:bg-white/[0.04] border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#059669] to-[#0D9488] dark:from-[#16A36F] dark:to-[#18B8A2] text-white dark:text-[#080B0A] flex items-center justify-center font-black text-xs shadow-sm dark:shadow-emerald-glow">
                SM
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-[#F5F7F4] text-xs flex items-center gap-1.5">
                  SkillMitra Intelligence
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </h4>
                <p className="text-[10px] text-slate-500 dark:text-[#94A3B8]">Career & Skill Advisory Engine</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-800 dark:text-[#94A3B8] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Suggestion Chips */}
          <div className="px-3.5 py-2.5 bg-slate-50/50 dark:bg-white/[0.02] border-b border-slate-200/80 dark:border-white/5 overflow-x-auto flex gap-2 no-scrollbar">
            {suggestedQuestions.map((q) => (
              <button
                key={q.key}
                onClick={() => handleSend(q.text)}
                className="shrink-0 px-3 py-1.5 rounded-full text-[11px] bg-white hover:bg-emerald-50 dark:bg-white/[0.04] dark:hover:bg-emerald-500/20 border border-slate-200 hover:border-emerald-300 dark:border-white/10 dark:hover:border-emerald-500/40 text-slate-700 hover:text-emerald-800 dark:text-[#94A3B8] dark:hover:text-[#A7F3D0] shadow-sm transition-all"
              >
                {q.text}
              </button>
            ))}
          </div>

          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-transparent">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-500/20 border border-emerald-300 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                    SM
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-[#059669] to-[#0D9488] dark:from-[#16A36F] dark:to-[#18B8A2] text-white dark:text-[#080B0A] font-semibold shadow-md'
                      : 'bg-slate-100 dark:bg-white/[0.05] border border-slate-200/80 dark:border-white/10 text-slate-800 dark:text-[#F5F7F4] whitespace-pre-line shadow-sm dark:shadow-glass backdrop-blur-md'
                  }`}
                >
                  <div>{msg.text}</div>
                  <div className={`text-[9px] mt-1.5 text-right font-mono ${msg.sender === 'user' ? 'text-white/80 dark:text-[#080B0A]/70' : 'text-slate-400 dark:text-[#94A3B8]'}`}>
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 items-center text-xs text-slate-500 dark:text-[#94A3B8] p-2 bg-slate-100 dark:bg-white/[0.03] rounded-xl border border-slate-200 dark:border-white/5 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-[#16A36F] animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-[#18B8A2] animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 dark:bg-[#A7F3D0] animate-bounce [animation-delay:0.4s]" />
                <span className="text-[11px] ml-1 font-mono">Analyzing state workforce neural graph...</span>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3.5 bg-slate-50 dark:bg-white/[0.04] border-t border-slate-200 dark:border-white/10 flex items-center gap-2.5"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about skill gaps, roadmaps, jobs in MH..."
              className="flex-1 bg-white dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-[#F5F7F4] placeholder-slate-400 dark:placeholder-[#94A3B8] focus:outline-none focus:border-emerald-500/50 focus:bg-white transition-all shadow-sm"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isTyping}
              className="p-2.5 rounded-xl bg-gradient-to-r from-[#059669] to-[#0D9488] dark:from-[#16A36F] dark:to-[#18B8A2] text-white dark:text-[#080B0A] hover:opacity-90 disabled:opacity-30 transition-all shadow-sm dark:shadow-emerald-glow"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
}
