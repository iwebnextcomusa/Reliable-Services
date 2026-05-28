import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircleCode, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setResponseMsg("Please fill in all required fields (Name, Email, and message).");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setResponseMsg(data.message);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
        setResponseMsg("Failed to deliver your message. Please try calling us directly at 623-980-5133.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
      setResponseMsg("Something went wrong connecting to the local server. Call us at 623-980-5133 instead!");
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden text-slate-800 border-b border-slate-200">
      {/* Visual background flares */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-orange-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-blue-900/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs text-orange-500 uppercase tracking-widest font-black inline-flex items-center space-x-2">
            <span className="w-4 h-[2px] bg-orange-500 block" />
            <span>Connect Directly</span>
            <span className="w-4 h-[2px] bg-orange-500 block" />
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-900 leading-none tracking-tight">
            Let's Discuss Your Project Today
          </h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-xl mx-auto font-normal">
            Have an electrical fault, plumbing question, or custom general contracting request? We are here to help. Reach out using the form, or call us directly.
          </p>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="contact-content-grid">
          
          {/* Left Column: Coordinates & Structured Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="font-bold text-xl uppercase tracking-wider text-blue-900">
                Business Information
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed font-normal">
                Reliable Services & Solutions serves New River AZ, and nearby homes. Our local crew is on-call to provide honest pricing and professional craftsmanship.
              </p>

              {/* Data Rows */}
              <div className="space-y-4">
                
                {/* Location row with local SEO keywords */}
                <div className="flex items-start space-x-4 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-mono font-bold tracking-wider text-slate-400">
                      Local Headquarters
                    </h4>
                    <span className="text-sm font-bold text-blue-900">
                      New River, Arizona
                    </span>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Providing professional services throughout New River, AZ & Anthem Arizona
                    </p>
                  </div>
                </div>

                {/* Phone row */}
                <a
                  href="tel:623-980-5133"
                  className="flex items-start space-x-4 bg-slate-50 hover:bg-slate-100 p-3.5 rounded-xl border border-slate-200 hover:border-orange-500/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 flex-shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-mono font-bold tracking-wider text-slate-400">
                      Direct Telephone Line
                    </h4>
                    <span className="text-sm font-black text-blue-900 group-hover:text-orange-500 transition-colors">
                      623.980.5133
                    </span>
                    <p className="text-[11px] text-slate-500 mt-0.5 font-sans font-light">
                      Click-to-call for immediate assistance and diagnostics
                    </p>
                  </div>
                </a>

                {/* Email row */}
                <a
                  href="mailto:blown1931@msn.com"
                  className="flex items-start space-x-4 bg-slate-50 hover:bg-slate-100 p-3.5 rounded-xl border border-slate-200 hover:border-orange-500/35 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 flex-shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[10px] uppercase font-mono font-bold tracking-wider text-slate-400">
                      Official Email
                    </h4>
                    <span className="text-sm font-bold text-blue-900 block truncate group-hover:text-orange-500 transition-colors">
                      blown1931@msn.com
                    </span>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Send us project blueprints and inquiries directly
                    </p>
                  </div>
                </a>

                {/* Operating hours */}
                <div className="flex items-start space-x-4 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-orange-500 flex-shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-mono font-bold tracking-wider text-slate-400">
                      Dispatch Hours
                    </h4>
                    <span className="text-sm font-bold text-blue-900">
                      Monday – Saturday: 7:00 AM – 6:00 PM
                    </span>
                    <p className="text-[11px] text-orange-500 font-bold mt-0.5">
                      ⚠️ 24/7 Priority Emergency dispatch on standby
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Google Map Mockup Placeholder with desert design overlay lines */}
            <div className="h-44 rounded-2xl border border-slate-200 relative overflow-hidden bg-slate-50 shadow-inner flex items-center justify-center p-4">
              {/* Map background style vectors */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ff6b35_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
              <div className="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,#3A506B_25%,transparent_25%,transparent_75%,#3A506B_75%,#3A506B),linear-gradient(45deg,#3A506B_25%,#f1f5f9_25%,#f1f5f9_75%,#3A506B_75%,#3A506B)] [background-size:60px_60px] pointer-events-none" />

              <div className="relative text-center space-y-2 z-10 w-full">
                <div className="w-8 h-8 rounded-full bg-orange-500 text-white border-2 border-white flex items-center justify-center mx-auto shadow-md animate-bounce">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-blue-900 tracking-wide">Serving New River, AZ Coordinate Matrix</span>
                  <span className="text-[9px] font-mono text-slate-400">N 33° 50' / W 112° 5' • Anthem, Desert Hills</span>
                </div>
                <p className="text-[9px] text-slate-500 font-light max-w-xs mx-auto">
                  Local crew in New River AZ, dispatched directly to your residential or commercial property.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Lead Submission Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-10 shadow-lg relative overflow-hidden h-full flex flex-col justify-between">
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-xl uppercase tracking-wider text-blue-900">
                    Send a Message
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal mt-1">
                    Fill out our quick form below. Fields marked with <span className="text-orange-500 font-bold">*</span> are required.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="name" className="text-[10px] uppercase tracking-wider font-mono text-slate-400 font-bold">
                        Your Name <span className="text-orange-500 font-bold">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-white border border-slate-200 hover:border-slate-300 focus:border-orange-500 focus:outline-none p-3.5 rounded text-sm transition-all text-slate-800 placeholder-slate-400 shadow-sm"
                      />
                    </div>
                    
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="email" className="text-[10px] uppercase tracking-wider font-mono text-slate-400 font-bold">
                        Email Address <span className="text-orange-500 font-bold">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="johndoe@example.com"
                        className="w-full bg-white border border-slate-200 hover:border-slate-300 focus:border-orange-500 focus:outline-none p-3.5 rounded text-sm transition-all text-slate-800 placeholder-slate-400 shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="phone" className="text-[10px] uppercase tracking-wider font-mono text-slate-400 font-bold">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="623.980.5133"
                      className="w-full bg-white border border-slate-200 hover:border-slate-300 focus:border-orange-500 focus:outline-none p-3.5 rounded text-sm transition-all text-slate-800 placeholder-slate-400 shadow-sm"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="message" className="text-[10px] uppercase tracking-wider font-mono text-slate-400 font-bold">
                      Project Details or Inquiry <span className="text-orange-500 font-bold">*</span>
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us what you need. (e.g. electrical wiring repair requested for Anthem residential, or custom backyard patio construction estimate update)"
                      className="w-full bg-white border border-slate-200 hover:border-slate-300 focus:border-orange-500 focus:outline-none p-3.5 rounded text-sm transition-all text-slate-800 placeholder-slate-400 shadow-sm"
                    />
                  </div>

                  {/* Status Box */}
                  <AnimatePresence mode="wait">
                    {status === "success" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-emerald-500/10 border border-emerald-500/25 p-4 rounded flex items-start space-x-3 text-emerald-700 text-xs"
                      >
                        <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="font-semibold">{responseMsg}</span>
                      </motion.div>
                    )}

                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-rose-500/10 border border-rose-500/25 p-4 rounded flex items-start space-x-3 text-rose-700 text-xs"
                      >
                        <AlertCircle className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" />
                        <span className="font-semibold">{responseMsg}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black p-4 rounded font-black text-xs uppercase tracking-widest shadow-md transition-all flex items-center justify-center space-x-2 disabled:bg-slate-200 disabled:text-slate-400 disabled:pointer-events-none cursor-pointer"
                  >
                    {status === "loading" ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <Send className="h-4 w-4 text-white" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                </form>
              </div>

              <div className="pt-4 border-t border-slate-200 mt-6 text-center">
                <p className="text-[10px] text-slate-400 font-mono font-bold">
                  🚨 By submitting, you request direct dispatch call contact within 1 hour.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
