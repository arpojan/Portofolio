"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 100 } }
  };

  return (
    <section id="skills" className="py-12 px-8 border-b border-black/5 bg-bg relative overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.p 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
          className="font-mono text-[0.65rem] text-accent-cy tracking-[0.15em] uppercase mb-2"
        >
          // technical arsenal
        </motion.p>
        <motion.h2 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
          className="font-display text-[clamp(1.4rem,3vw,2rem)] font-bold tracking-[-0.02em] mb-2.5"
        >
          Core Competencies
        </motion.h2>
        <motion.p 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
          className="text-fg-2 text-[0.84rem] leading-[1.7] max-w-[460px]"
        >
          Full stack and design spectrum — from API to pixel.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants}
            className="bg-sur/50 border border-black/5 rounded-[8px] p-6 h-full hover:border-black/10 transition-colors"
          >
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.1em] mb-4 text-accent-cy flex items-center">
              <i className="ti ti-bolt mr-1.5" aria-hidden="true"></i>Fullstack Dev
            </div>
            <div className="flex flex-wrap gap-2.5">
              {["Laravel", "React", "Next.js", "Inertia.js", "Node.js", "JavaScript", "PHP", "MySQL", "REST API", "Tailwind CSS", "Bootstrap", "Vite"].map((skill) => (
                <motion.span 
                  variants={itemVariants}
                  key={skill} 
                  className="px-2.5 py-1.5 rounded-[4px] text-[0.72rem] font-medium bg-sur text-fg-2 border border-black/5 cursor-default hover:bg-black/5 transition-colors duration-200"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants}
            className="bg-sur/50 border border-black/5 rounded-[8px] p-6 h-full hover:border-black/10 transition-colors"
          >
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.1em] mb-4 text-[#818CF8] flex items-center">
              <i className="ti ti-sparkles mr-1.5" aria-hidden="true"></i>Design & Tools
            </div>
            <div className="flex flex-wrap gap-2.5">
              {["Figma", "Photoshop", "Illustrator", "Canva", "HTML/CSS", "Git", "GitHub", "Spatie", "ESP32", "Premiere Pro"].map((skill) => (
                <motion.span 
                  variants={itemVariants}
                  key={skill} 
                  className="px-2.5 py-1.5 rounded-[4px] text-[0.72rem] font-medium bg-sur text-fg-2 border border-black/5 cursor-default hover:bg-black/5 transition-colors duration-200"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
