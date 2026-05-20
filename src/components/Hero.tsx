import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale opacity-20 scale-110"
          style={{
            backgroundImage: 'url("https://storage.googleapis.com/dala-prod-public-storage/generated-images/4f954665-fcf1-44c3-beaa-29f4ecf7ea05/hero-background-atmosphere-7ab001e8-1779312888876.webp")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left lg:pr-12"
        >
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-primary font-light tracking-[0.5em] uppercase mb-8 text-sm"
          >
            An Exclusive Invitation
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-7xl md:text-9xl font-serif mb-10 leading-[0.9] tracking-tighter"
          >
            Jodie <br/> <span className="text-primary italic">Foster</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-6">
              <div className="h-px w-16 bg-primary" />
              <div className="text-xl md:text-2xl font-light tracking-wide text-white/80">
                A Private Engagement with a Cinema Icon
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-12">
              <a 
                href="#booking"
                className="px-10 py-5 bg-primary text-primary-foreground font-serif text-lg tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500 shadow-2xl"
              >
                Request Invitation
              </a>
              <a 
                href="#experience"
                className="px-10 py-5 border border-white/20 text-white font-serif text-lg tracking-widest uppercase hover:bg-white/5 transition-all duration-500"
              >
                The Itinerary
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Featured Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative aspect-[4/5] lg:aspect-auto lg:h-[80vh] group"
        >
          <div className="absolute inset-0 bg-primary/20 -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />
          <div className="relative h-full w-full overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/4f954665-fcf1-44c3-beaa-29f4ecf7ea05/jodie-foster-portrait-20bee68d-1779313835823.webp" 
              alt="Jodie Foster Portrait"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
          </div>
          
          {/* Subtle Accent Overlay */}
          <div className="absolute -bottom-8 -right-8 bg-background p-8 border border-white/5 hidden md:block">
            <div className="text-primary text-xs uppercase tracking-[0.4em] mb-2 font-light">Global Tour</div>
            <div className="text-2xl font-serif italic text-white/90">2024 Series</div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 z-20"
      >
        <ChevronDown size={32} strokeWidth={1} />
      </motion.div>
    </section>
  );
};