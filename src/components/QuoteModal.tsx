import React, { useState, useEffect } from "react";
import { X, Send, Calendar, ShieldAlert, Sparkles, CheckCircle2, User, Phone, Mail, FileText, ChevronRight, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCategory: string;
}

export default function QuoteModal({ isOpen, onClose, preselectedCategory }: QuoteModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "Residential Services",
    urgency: "medium",
    details: "",
    estimatedScope: "Medium Project Duty",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");

  // Sync category pre-selection
  useEffect(() => {
    if (preselectedCategory) {
      setFormData((prev) => ({
        ...prev,
        category: preselectedCategory,
        // Set urgency high automatically if it says Emergency
        urgency: preselectedCategory.toLowerCase().includes("emergency") ? "emergency" : "medium",
      }));
    }
  }, [preselectedCategory, isOpen]);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 3) setStep((s) => s + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const setCategoryValue = (val: string) => {
    setFormData((prev) => ({ ...prev, category: val }));
  };

  const setUrgencyValue = (val: string) => {
    setFormData((prev) => ({ ...prev, urgency: val }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      setStatus("error");
      setResponseMsg("Please fill in your Name, Phone Number, and Email Address so we can reach back.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setResponseMsg(data.message);
        // Autoclose modal after timer
        setTimeout(() => {
          setStep(1);
          setStatus("idle");
          onClose();
        }, 5000);
      } else {
        setStatus("error");
        setResponseMsg("Failed to process quote request on backend. Call us at 623-980-5133 for immediate pricing.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setResponseMsg("Network issue occurred. Please call 623-980-5133 directly!");
    }
  };

  const categories = [
    "Residential Services",
    "Commercial Services",
    "Maintenance & Repairs",
    "Emergency Services",
    "General Contracting",
    "Custom Solutions",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Blurred Backdrop */}
      <div className="absolute inset-0 bg-navy-darkest/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Card Frame */}
      <div className="relative w-full max-w-xl rounded-2xl border border-slate-200 shadow-2xl bg-white text-slate-800 p-6 sm:p-8 overflow-hidden max-h-[90vh] overflow-y-auto z-10 text-left">
        
        {/* Dynamic header progress border line */}
        <div className="absolute top-0 left-0 w-full bg-slate-100 h-1.5 font-bold">
          <div
            className="bg-orange-500 h-full transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        {/* Closing cross */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-blue-900 transition-colors focus:outline-none"
          aria-label="Close modal"
          id="close-quote-modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal heading */}
        <div className="mb-6 space-y-1.5">
          <span className="text-[10px] uppercase tracking-widest text-orange-500 font-black flex items-center space-x-1.5">
            <Sparkles className="h-4 w-4" />
            <span>Interactive Estimator • Step {step} of 3</span>
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight text-blue-900">
            Request A Professional Quote
          </h2>
        </div>

        {/* FORM INJECTION WITH STEP DECISIONS */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {step === 1 && (
            <div className="space-y-4">
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Choose the service category that represents your needs in Reliable Services and Solutions, and specify how urgently you require our dispatch crew.
              </p>

              {/* Service selection layout pills */}
              <div className="space-y-2 text-left">
                <label className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold block">
                  Select Service Sector
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setCategoryValue(cat)}
                      className={`p-3 rounded border text-[11px] sm:text-xs font-bold text-center uppercase tracking-wide transition-all cursor-pointer ${
                        formData.category === cat
                          ? "bg-orange-500/10 border-orange-500 text-orange-600"
                          : "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Urgency selection layout */}
              <div className="space-y-2 text-left">
                <label className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold block">
                  Urgency Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Standard Upkeep", val: "low" },
                    { label: "Needed Within Days", val: "medium" },
                    { label: "On-Call Emergency", val: "emergency" },
                  ].map((u) => (
                    <button
                      key={u.val}
                      type="button"
                      onClick={() => setUrgencyValue(u.val)}
                      className={`p-3 rounded border text-[10px] font-bold text-center uppercase tracking-wider transition-all cursor-pointer ${
                        formData.urgency === u.val
                          ? u.val === "emergency"
                            ? "bg-rose-500/10 border-rose-500 text-rose-600 font-black animate-pulse"
                            : "bg-orange-500/10 border-orange-500 text-orange-600"
                          : "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-500"
                      }`}
                    >
                      {u.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <p className="text-xs text-slate-500 leading-relaxed">
                Describe the specific project guidelines and parameters. Mention dimensions, location in New River, or brand configurations if known.
              </p>

              {/* Text Area */}
              <div className="space-y-1.5 text-left">
                <label htmlFor="details" className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold">
                  Job Description & Scope
                </label>
                <textarea
                  name="details"
                  id="details"
                  rows={4}
                  value={formData.details}
                  onChange={handleTextChange}
                  required
                  placeholder="e.g. My electrical breaker panel is constantly switching in the hot weather, would need a diagnostic review. Or patio deck remodelling needs with wood materials."
                  className="w-full bg-white border border-slate-200 focus:border-orange-500 focus:outline-none p-3.5 rounded text-xs text-slate-800 placeholder-slate-400 shadow-sm"
                />
              </div>

              {/* Pricing transparency notice */}
              <div className="p-4 bg-orange-500/5 border border-orange-500/10 rounded-xl flex items-start space-x-3 text-slate-600 text-xs leading-relaxed font-normal">
                <ShieldAlert className="h-4.5 w-4.5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-blue-900 block text-xs uppercase tracking-wider mb-0.5">Transparent Pricing Honesty</span>
                  We don't believe in computer-generated blind quotes. Once we review these specs, our local New River crew will map actual diagnostic costs and call you with an exact transparent cost ceiling. No games.
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                We're ready to calculate! Provide your direct callback statistics so the primary service dispatcher can call or email you directly with the pricing.
              </p>

              <div className="space-y-3">
                {/* Name */}
                <div className="space-y-1 text-left">
                  <label htmlFor="qm-name" className="text-[10px] uppercase tracking-wider font-mono text-slate-400 font-bold flex items-center space-x-1.5">
                    <User className="h-3 w-3" />
                    <span>Your Full Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="qm-name"
                    required
                    value={formData.name}
                    onChange={handleTextChange}
                    placeholder="John Doe"
                    className="w-full bg-white border border-slate-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/35 focus:outline-none p-3 rounded text-xs text-slate-800 placeholder-slate-400 shadow-sm"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1 text-left">
                  <label htmlFor="qm-phone" className="text-[10px] uppercase tracking-wider font-mono text-slate-400 font-bold flex items-center space-x-1.5">
                    <Phone className="h-3 w-3" />
                    <span>Callback Phone</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="qm-phone"
                    required
                    value={formData.phone}
                    onChange={handleTextChange}
                    placeholder="623.980.5133"
                    className="w-full bg-white border border-slate-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/35 focus:outline-none p-3 rounded text-xs text-slate-800 placeholder-slate-400 shadow-sm"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1 text-left">
                  <label htmlFor="qm-email" className="text-[10px] uppercase tracking-wider font-mono text-slate-400 font-bold flex items-center space-x-1.5">
                    <Mail className="h-3 w-3" />
                    <span>Email Address</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="qm-email"
                    required
                    value={formData.email}
                    onChange={handleTextChange}
                    placeholder="john@example.com"
                    className="w-full bg-white border border-slate-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/35 focus:outline-none p-3 rounded text-xs text-slate-800 placeholder-slate-400 shadow-sm"
                  />
                </div>
              </div>

              {/* Status block alerts */}
              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded flex items-start space-x-3 text-emerald-700 text-xs"
                  >
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="font-light">{responseMsg}</span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-rose-500/10 border border-rose-500/20 p-4 rounded flex items-start space-x-3 text-rose-700 text-xs"
                  >
                    <ShieldAlert className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span className="font-light">{responseMsg}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* Bottom Control buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 pr-1">
            {/* Step back */}
            {step > 1 ? (
              <button
                type="button"
                onClick={handlePrev}
                className="flex items-center space-x-1.5 px-4 py-2 bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-700 rounded text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            {/* Step forward or submit */}
            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="flex items-center space-x-1.5 px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded text-[10px] font-black uppercase tracking-widest shadow-md transition-all cursor-pointer"
              >
                <span>Continue</span>
                <ChevronRight className="h-4.5 w-4.5" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="flex items-center space-x-1.5 px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded text-[10px] font-black uppercase tracking-widest shadow-md transition-all disabled:bg-slate-200 disabled:text-slate-400 cursor-pointer"
              >
                {status === "loading" ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <Send className="h-4 w-4 text-white" />
                    <span>Submit</span>
                  </>
                )}
              </button>
            )}
          </div>

        </form>

      </div>
    </div>
  );
}
