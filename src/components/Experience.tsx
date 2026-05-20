import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Star, Sparkles, Shield } from "lucide-react";

const inclusions = [
  "Private Intimate Dinner Engagement",
  "Professional Portrait Session",
  "Autographed Commemorative Scripts",
  "Exclusive Behind-the-Scenes Discussion",
  "Priority Access to Future Premieres",
  "Luxury Concierge Service"
];

const tiers = [
  { name: "Essential", price: "5,000", icon: <Star size={16} /> },
  { name: "Platinum", price: "25,000", icon: <Sparkles size={16} /> },
  { name: "Legacy", price: "30,000", icon: <Shield size={16} /> },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-secondary/10 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-serif mb-8 tracking-tighter">The Curated Experience</h2>
            <div className="h-px w-40 bg-primary mx-auto mb-8" />
            <p className="text-muted-foreground tracking-[0.3em] uppercase text-xs">Strictly Limited to Select Global Attendees</p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[700px] group"
          >
            <div className="absolute inset-0 border border-primary/30 -m-4 transition-all duration-700 group-hover:m-0" />
            <div className="relative h-full w-full overflow-hidden shadow-2xl">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/4f954665-fcf1-44c3-beaa-29f4ecf7ea05/experience-private-dinner-5fd45071-1779312891864.webp" 
                alt="Private Luxury Dining"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-16 left-16 right-16">
                <div className="text-4xl font-serif mb-6 text-white leading-tight italic">"Cinema is a mirror that can focus the light."</div>
                <p className="text-white/60 font-light tracking-wide">Experience an evening of unparalleled depth and conversation in a setting designed for those who appreciate the finest details of life and art.</p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-16">
            <div className="space-y-8">
              <h3 className="text-3xl font-serif italic text-primary">Inclusions & Privileges</h3>
              <ul className="grid sm:grid-cols-2 gap-y-6 gap-x-12">
                {inclusions.map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 text-muted-foreground group"
                  >
                    <CheckCircle2 size={18} className="text-primary mt-1 flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <span className="font-light tracking-wide text-sm leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="bg-card/40 p-12 border border-white/5 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
              <h4 className="text-xl font-serif mb-10 text-white uppercase tracking-[0.2em]">Engagement Tiers</h4>
              
              <div className="space-y-8">
                {tiers.map((tier, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-6">
                    <div className="flex items-center gap-4">
                      <div className="text-primary">{tier.icon}</div>
                      <span className="text-sm uppercase tracking-widest font-light">{tier.name}</span>
                    </div>
                    <div className="text-2xl font-serif text-white">${tier.price} <span className="text-[10px] text-muted-foreground italic ml-2">USD</span></div>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex items-center justify-between">
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest max-w-[200px] leading-relaxed">
                  * All tiers inclusive of priority vetting and private concierge services.
                </p>
                <a 
                  href="#booking"
                  className="px-8 py-4 bg-primary text-primary-foreground font-serif text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all"
                >
                  View Tiers
                </a>
              </div>
            </div>
            
            <p className="text-[10px] text-muted-foreground/40 italic leading-relaxed uppercase tracking-[0.2em] max-w-md">
              Participation is subject to strict background verification and non-disclosure agreement execution. All bookings are final upon confirmation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};