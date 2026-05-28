import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Bot, Clock, Sparkles, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ChatMessage } from "../types";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const scrollRef = useRef<HTMLDivElement>(null);

  // Initial greeting message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: "initial-greet",
          role: "assistant",
          content: "Hello! I am your AI assistant for Reliable Services & Solutions. 🛠️ How can I help you today with home repairs, remodeling, plumbing, or electrical diagnostics in New River, Arizona?",
          timestamp: new Date(),
        },
      ]);
    }
  }, []);

  // Scroll to bottom whenever messages or status changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  const quickPrompts = [
    "Do you serve New River AZ?",
    "What services do you offer?",
    "How do I request a quote?",
  ];

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    setErrorMsg("");
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: textToSend,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setUserInput("");
    setIsTyping(true);

    try {
      // Send message history to our secure server-side endpoint
      const chatHistory = [...messages, userMsg].map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: chatHistory }),
      });

      const data = await res.json();
      if (res.ok && data.text) {
        setMessages((prev) => [
          ...prev,
          {
            id: `ai-${Date.now()}`,
            role: "assistant",
            content: data.text,
            timestamp: new Date(),
          },
        ]);
      } else {
        throw new Error(data.error || "Failed API response.");
      }
    } catch (err: any) {
      console.error(err);
      setErrorMsg("Failed to connect to AI server. Please call us directly at 623-980-5133!");
    } finally {
      setIsTyping(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(userInput);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 font-sans" id="chatbot-wrapper">
      <AnimatePresence mode="wait">
        
        {/* Toggle Button when Closed */}
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="flex items-center justify-center w-14 h-14 bg-orange-500 text-white rounded-full shadow-lg hover:scale-105 active:scale-95 cursor-pointer relative z-40 transition-transform focus:outline-none focus:ring-2 focus:ring-orange-500/50 group"
            id="chatbot-trigger-btn"
          >
            <MessageSquare className="h-6 w-6" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-navy-light opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
          </motion.button>
        )}

        {/* Chat Drawer open */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
            className="w-[340px] sm:w-[380px] h-[450px] sm:h-[480px] max-h-[calc(100vh-110px)] rounded-2xl border border-slate-200 shadow-2xl flex flex-col overflow-hidden bg-white text-slate-800 z-50 relative bottom-0 right-0 animate-in fade-in zoom-in duration-300"
            id="chatbot-drawer"
          >
            {/* Header branding */}
            <div className="bg-slate-50 border-b border-slate-200 px-5 py-4 flex items-center justify-between relative">
              <div className="flex items-center space-x-3 text-left">
                <div className="w-10 h-10 rounded bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-600">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-blue-900 tracking-tight flex items-center space-x-1.5 font-sans">
                    <span>Reliable AI Assistant</span>
                    <Sparkles className="h-3 w-3 text-orange-500" />
                  </h3>
                  <span className="text-[9px] font-mono text-emerald-600 font-bold tracking-wider uppercase flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full inline-block animate-pulse" />
                    <span>On-Duty • Live</span>
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-slate-200/50 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                id="chatbot-close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Message Thread Scroll panel */}
            <div className="flex-1 min-h-0 overflow-y-auto p-4 space-y-4">
              
              {messages.map((m) => {
                const isAI = m.role === "assistant";
                return (
                  <div
                    key={m.id}
                    className={`flex items-start space-x-2.5 ${isAI ? "justify-start text-left" : "justify-end text-right"}`}
                  >
                    {isAI && (
                      <div className="w-7 h-7 rounded bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-600 flex-shrink-0 text-xs">
                        <Bot className="h-3.5 w-3.5" />
                      </div>
                    )}
                    <div className="max-w-[80%]">
                      <div className={`p-3 rounded-xl text-xs space-y-1.5 leading-relaxed tracking-wide ${
                        isAI
                          ? "bg-slate-100 text-slate-700 rounded-tl-none border border-slate-250/20"
                          : "bg-orange-500 text-white rounded-tr-none shadow-sm font-medium"
                      }`}>
                        <p>{m.content}</p>
                      </div>
                      <span className="text-[8px] font-mono text-slate-400 mt-1 block px-1">
                        {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Chatbot typing animation loader */}
              {isTyping && (
                <div className="flex items-start space-x-2.5 justify-start text-left">
                  <div className="w-7 h-7 rounded bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-600 flex-shrink-0 text-xs animate-pulse">
                    <Bot className="h-3.5 w-3.5" />
                  </div>
                  <div className="bg-slate-100 border border-slate-200/50 p-3 rounded-xl rounded-tl-none flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}

              {/* Call alert on API errors */}
              {errorMsg && (
                <div className="bg-rose-500/10 border border-rose-500/20 p-3 rounded flex items-start space-x-2 text-rose-700 text-xs text-left animate-bounce">
                  <AlertCircle className="h-4.5 w-4.5 text-rose-500 flex-shrink-0" />
                  <p>{errorMsg}</p>
                </div>
              )}

              <div ref={scrollRef} />
            </div>

            {/* Quick Helper Questions (when empty or just beginning) */}
            {messages.length < 5 && (
              <div className="px-4 py-2 flex flex-wrap gap-1.5 border-t border-slate-105 bg-slate-50">
                {quickPrompts.map((p) => (
                  <button
                    key={p}
                    onClick={() => handleSendMessage(p)}
                    className="text-[10px] uppercase tracking-wider px-2.5 py-1.5 rounded bg-white border border-slate-200 text-slate-600 hover:border-orange-500 hover:text-orange-600 transition-all font-bold text-left truncate max-w-full cursor-pointer shadow-sm"
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}

            {/* Message input action form */}
            <form onSubmit={handleFormSubmit} className="p-3.5 border-t border-slate-200 bg-slate-50 flex items-center space-x-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Ask our AI helper a question..."
                className="flex-1 bg-white border border-slate-200 hover:border-slate-300 focus:border-orange-500 focus:outline-none p-3 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:ring-1 focus:ring-orange-500/35"
              />
              <button
                type="submit"
                disabled={!userInput.trim() || isTyping}
                className="p-3 rounded-xl bg-orange-500 text-white hover:bg-orange-600 disabled:bg-slate-200 disabled:text-slate-400 transition-all font-semibold flex items-center justify-center cursor-pointer"
                id="chatbot-send-msg"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>

          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
