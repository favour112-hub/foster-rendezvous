import React from "react";
import { motion } from "framer-motion";
import { Film, Award, Star } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-32 px-8 max-w-7xl mx-auto border-b border-white/5">
      <div className="grid md:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-serif leading-tight">
            A Cinematic Legacy <br/>Defined by Excellence
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            From the visceral intensity of <span className="text-white italic">Taxi Driver</span> to the cerebral mastery of <span className="text-white italic">The Silence of the Lambs</span>, Jodie Foster has redefined the landscape of modern cinema. Her journey as a two-time Academy Award winner and visionary director continues to inspire generations.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-8">
            <div className="space-y-2">
              <Award className="text-primary mb-4" size={24} />
              <h4 className="font-serif text-xl">2 Oscars</h4>
              <p className="text-sm text-muted-foreground">Best Actress Honors</p>
            </div>
            <div className="space-y-2">
              <Film className="text-primary mb-4" size={24} />
              <h4 className="font-serif text-xl">50+ Films</h4>
              <p className="text-sm text-muted-foreground">Iconic Performances</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-[4/5] overflow-hidden rounded-sm"
        >
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/4f954665-fcf1-44c3-beaa-29f4ecf7ea05/cinema-legacy-0619837c-1779312890447.webp" 
            alt="Cinematic Camera"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
        </motion.div>
      </div>
    </section>
  );
};