import React from "react";

export const Footer = () => {
  return (
    <footer className="py-20 px-8 border-t border-white/5 text-center">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-2xl font-serif tracking-[0.4em] uppercase text-primary/60">
          Jodie Foster
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-primary transition-colors">Confidentiality</a>
          <a href="#" className="hover:text-primary transition-colors">Press Inquiries</a>
        </div>
        
        <div className="text-[10px] text-muted-foreground/30 tracking-[0.2em]">
          &copy; {new Date().getFullYear()} J. FOSTER PRODUCTIONS. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};