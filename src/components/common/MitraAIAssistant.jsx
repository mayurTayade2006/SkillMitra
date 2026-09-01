import React, { useState, useRef, useEffect } from 'react';
import { Send, X, MessageSquare, Bot, User, ArrowRight } from 'lucide-react';
import { MITRA_AI_RESPONSES } from '../../data/mockData';

export default function MitraAIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: "Namaste Shweta. I am the SkillMitra intelligent assistant.\n\nHow can I help you navigate your skill assessment, career trajectory, or active job opportunities today?",
      time: "Just now"
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const suggestedQuestions = [
    { text: "What skills should I improve?", key: "skills" },
    { text: "Which jobs fit me?", key: "careers" },
    { text: "What skills are in demand in Pune?", key: "pune" },
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
      } else if (lower.includes("career") || lower.includes("fit") || lower.includes("match") || lower.includes("best")) {
        reply = MITRA_AI_RESPONSES.careers;
      } else if (lower.includes("pune") || lower.includes("demand") || lower.includes("district")) {
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
    }, 500);
  };

  return (
    <>
      {/* Compact Circular Button with Green Icon */}
      <div className="fixed bottom-5 right-5 z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#164B36] hover:bg-[#113A2A] text-[#FAF9F5] text-xs font-bold shadow-elevated transition-all hover:scale-105"
          >
            <div className="w-5 h-5 rounded-full bg-[#FAF9F5] text-[#164B36] flex items-center justify-center">
              <MessageSquare className="w-3 h-3 fill-[#164B36]" />
            </div>
            <span>ASK SKILLMITRA</span>
          </button>
        )}
      </div>

      {/* Clean Slide-Over Assistant Drawer */}
      {isOpen && (
        <div className="fixed bottom-5 right-5 z-50 w-[92vw] sm:w-[400px] h-[520px] max-h-[85vh] rounded-xl bg-[#FAF9F5] border border-[#E5E2DA] shadow-elevated flex flex-col overflow-hidden animate-in fade-in duration-200">
          
          {/* Header */}
          <div className="p-4 bg-[#F3F0E8] border-b border-[#E5E2DA] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded bg-[#164B36] text-[#FAF9F5] flex items-center justify-center font-bold text-xs">
                SM
              </div>
              <div>
                <h4 className="font-bold text-[#1D2421] text-xs">Ask SkillMitra</h4>
                <p className="text-[10px] text-[#789184]">Career & Skill Advisory</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-[#789184] hover:text-[#1D2421] hover:bg-[#E5E2DA]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Suggestion Chips */}
          <div className="px-3 py-2 bg-[#FAF9F5] border-b border-[#ECE9E1] overflow-x-auto flex gap-1.5 no-scrollbar">
            {suggestedQuestions.map((q) => (
              <button
                key={q.key}
                onClick={() => handleSend(q.text)}
                className="shrink-0 px-2.5 py-1 rounded text-[11px] bg-[#FFFFFF] border border-[#E5E2DA] text-[#4A5550] hover:text-[#164B36] hover:border-[#164B36] transition-colors"
              >
                {q.text}
              </button>
            ))}
          </div>

          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#FAF9F5]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-6 h-6 rounded bg-[#164B36] text-white flex items-center justify-center shrink-0 mt-0.5 text-[9px] font-bold">
                    SM
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-lg px-3.5 py-2.5 text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#164B36] text-[#FAF9F5] font-medium shadow-subtle'
                      : 'bg-[#FFFFFF] border border-[#E5E2DA] text-[#1D2421] whitespace-pre-line shadow-subtle'
                  }`}
                >
                  <div>{msg.text}</div>
                  <div className={`text-[9px] mt-1.5 text-right ${msg.sender === 'user' ? 'text-[#A4B8AD]' : 'text-[#789184]'}`}>
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 items-center text-xs text-[#789184] p-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#164B36] animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#164B36] animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#164B36] animate-bounce [animation-delay:0.4s]" />
                <span className="text-[11px] ml-1">Analyzing state workforce data...</span>
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
            className="p-3 bg-[#F3F0E8] border-t border-[#E5E2DA] flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about skills, roadmaps, jobs..."
              className="flex-1 bg-[#FFFFFF] border border-[#E5E2DA] rounded-md px-3 py-2 text-xs text-[#1D2421] placeholder-[#789184] focus:outline-none focus:border-[#164B36]"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isTyping}
              className="p-2 rounded-md bg-[#164B36] text-[#FAF9F5] hover:bg-[#113A2A] disabled:opacity-40 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      )}
    </>
  );
}
