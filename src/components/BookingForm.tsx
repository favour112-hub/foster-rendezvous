import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { Send, Check, Diamond, ShieldCheck, Mail } from "lucide-react";

const feeOptions = [
  { label: "Essential Engagement", value: "5000", description: "Private group session & professional portrait." },
  { label: "Premium Experience", value: "10000", description: "Extended session with signed memorabilia & champagne reception." },
  { label: "Elite Access", value: "15000", description: "Private dinner inclusion & curated gift box." },
  { label: "Platinum Circle", value: "25000", description: "One-on-one session, private car service & exclusive archive access." },
  { label: "Legacy VIP", value: "30000", description: "Ultimate personalized day with Jodie, guest list access & lifetime membership." },
];

export const BookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedFee, setSelectedFee] = useState("5000");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate routing to the official email
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Application Transmitted", {
        description: "Your request has been successfully directed to officialjodiefoster7@gmail.com",
      });
    }, 2000);
  };

  return (
    <section id="booking" className="py-32 px-8 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-serif mb-6 uppercase tracking-tight">Request an Invitation</h2>
        <div className="h-px w-32 bg-primary mx-auto mb-8" />
        <p className="text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
          Due to the exclusive nature of this engagement, all bookings and requests are processed through our private concierge. You may apply below or correspond directly via email.
        </p>
        <div className="mt-8 flex items-center justify-center gap-2 text-primary font-serif italic">
          <Mail size={16} />
          <a href="mailto:officialjodiefoster7@gmail.com" className="hover:underline tracking-widest text-sm">officialjodiefoster7@gmail.com</a>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-16"
          >
            {/* Tier Selection */}
            <div className="space-y-8">
              <label className="text-xs uppercase tracking-widest text-primary flex items-center gap-2 font-medium">
                <Diamond size={14} className="fill-primary/20" /> Engagement Tier Selection
              </label>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {feeOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setSelectedFee(option.value)}
                    className={`relative p-8 text-left border transition-all duration-500 group overflow-hidden ${
                      selectedFee === option.value 
                        ? "border-primary bg-primary/5 ring-1 ring-primary/50" 
                        : "border-white/5 hover:border-white/20 bg-card/30"
                    }`}
                  >
                    <div className="relative z-10">
                      <div className="text-xl font-serif mb-1">${Number(option.value).toLocaleString()}</div>
                      <div className={`text-[10px] tracking-[0.2em] uppercase mb-4 ${selectedFee === option.value ? "text-primary" : "text-white/60"}`}>
                        {option.label}
                      </div>
                      <p className="text-xs text-muted-foreground font-light leading-relaxed h-10 line-clamp-2">
                        {option.description}
                      </p>
                    </div>
                    {selectedFee === option.value && (
                      <motion.div 
                        layoutId="active-bg"
                        className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" 
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 pt-8 border-t border-white/5">
              <div className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Legal Identity</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-primary transition-all font-light placeholder:text-white/10 text-lg"
                    placeholder="Full Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Digital Correspondence (Your Email)</label>
                  <input 
                    required
                    type="email" 
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-primary transition-all font-light placeholder:text-white/10 text-lg"
                    placeholder="name@domain.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Global Location</label>
                  <select className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-primary transition-all font-light text-lg appearance-none cursor-pointer">
                    <option className="bg-background text-foreground">Select Territory</option>
                    <option className="bg-background text-foreground">Los Angeles / Beverly Hills</option>
                    <option className="bg-background text-foreground">New York / Manhattan</option>
                    <option className="bg-background text-foreground">London / Mayfair</option>
                    <option className="bg-background text-foreground">Paris / 1er Arrondissement</option>
                    <option className="bg-background text-foreground">Tokyo / Ginza</option>
                  </select>
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Application Brief</label>
                  <textarea 
                    rows={6}
                    className="w-full bg-transparent border border-white/10 p-4 focus:outline-none focus:border-primary transition-all font-light resize-none placeholder:text-white/10"
                    placeholder="Provide a brief statement on your professional background or interest in this engagement..."
                  />
                </div>
                
                <div className="p-4 bg-white/[0.02] border border-white/5 flex gap-4 items-start">
                  <ShieldCheck size={20} className="text-primary mt-1" />
                  <p className="text-[10px] text-muted-foreground leading-relaxed uppercase tracking-widest">
                    All formal requests are forwarded to the executive office at officialjodiefoster7@gmail.com for vetting.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-6">
              <button
                disabled={isSubmitting}
                type="submit"
                className="group relative w-full md:w-auto px-16 py-6 bg-primary text-primary-foreground font-serif text-xl tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500 overflow-hidden shadow-2xl"
              >
                <span className="relative z-10 flex items-center gap-3">
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  ) : (
                    <>
                      Apply via Secure Channel
                      <Send size={18} className="group-hover:translate-x-2 transition-transform" />
                    </>
                  )}
                </span>
              </button>
              <p className="text-[10px] text-muted-foreground/40 uppercase tracking-[0.3em] text-center">
                Submissions are monitored by the Jodie Foster Executive Team <br />
                Direct Enquiries: officialjodiefoster7@gmail.com
              </p>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-24 border border-primary/20 bg-primary/5 rounded-sm"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full border border-primary/40 mb-8 relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
              <Check size={48} className="text-primary relative z-10" />
            </div>
            <h3 className="text-4xl font-serif mb-6 uppercase tracking-tight">Request Transmitted</h3>
            <p className="text-muted-foreground font-light mb-12 max-w-lg mx-auto leading-relaxed">
              Your application for the <span className="text-white">${Number(selectedFee).toLocaleString()} {feeOptions.find(f => f.value === selectedFee)?.label}</span> tier has been successfully directed to <span className="text-primary">officialjodiefoster7@gmail.com</span> for executive review.
            </p>
            <div className="flex flex-col items-center gap-4">
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-primary uppercase text-xs tracking-[0.4em] border-b border-primary pb-2 hover:text-white hover:border-white transition-all"
              >
                Back to Overview
              </button>
              <a href="mailto:officialjodiefoster7@gmail.com" className="text-[10px] text-muted-foreground/60 uppercase tracking-widest hover:text-primary transition-colors">
                Send a follow-up email
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};