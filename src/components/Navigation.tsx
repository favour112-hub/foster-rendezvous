import React from "react";
import { motion } from "framer-motion";

export const Navigation = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-background/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="text-xl font-serif tracking-widest uppercase text-primary">
        Jodie Foster
      </div>
      <div className="hidden md:flex gap-12 text-sm font-light tracking-widest uppercase">
        <a href="#about" className="hover:text-primary transition-colors">Legacy</a>
        <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
        <a href="#booking" className="hover:text-primary transition-colors underline underline-offset-8 decoration-primary">Reserve</a>
      </div>
      <div className="md:hidden">
        <button className="text-primary uppercase text-xs tracking-widest">Menu</button>
      </div>
    </motion.nav>
  );
};