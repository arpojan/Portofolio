"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

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
    <section id="skills" className="py-12 px-8 border-b border-white/5 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-cy/5 rounded-full blur-[150px] z-0 pointer-events-none"></div>

      <div className="relative z-10">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-7">
          <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} scale={1.01} transitionSpeed={1000} className="h-full">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants}
              className="bg-sur/80 backdrop-blur-md border border-white/5 rounded-[9px] p-5 h-full hover:border-accent-cy/30 transition-colors shadow-xl"
            >
              <div className="font-mono text-[0.63rem] uppercase tracking-[0.1em] mb-3.5 text-accent-cy flex items-center">
                <i className="ti ti-bolt mr-1" aria-hidden="true"></i>Fullstack Dev
              </div>
              <div className="flex flex-wrap gap-2">
                {["Laravel", "React", "Next.js", "Inertia.js", "Node.js", "JavaScript", "PHP", "MySQL", "REST API", "Tailwind CSS", "Bootstrap", "Vite"].map((skill) => (
                  <motion.span 
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 212, 255, 0.15)", color: "#00D4FF", borderColor: "rgba(0, 212, 255, 0.4)" }}
                    key={skill} 
                    className="px-2.5 py-1 rounded-[4px] text-[0.68rem] font-medium bg-sur-2 text-fg-2 border border-white/5 cursor-default transition-colors duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </Tilt>
          
          <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} scale={1.01} transitionSpeed={1000} className="h-full">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants}
              className="bg-sur/80 backdrop-blur-md border border-white/5 rounded-[9px] p-5 h-full hover:border-[#818CF8]/30 transition-colors shadow-xl"
            >
              <div className="font-mono text-[0.63rem] uppercase tracking-[0.1em] mb-3.5 text-[#818CF8] flex items-center">
                <i className="ti ti-sparkles mr-1" aria-hidden="true"></i>Design & Tools
              </div>
              <div className="flex flex-wrap gap-2">
                {["Figma", "Photoshop", "Illustrator", "Canva", "HTML/CSS", "Git", "GitHub", "Spatie", "ESP32", "Premiere Pro"].map((skill) => (
                  <motion.span 
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(129, 140, 248, 0.15)", color: "#818CF8", borderColor: "rgba(129, 140, 248, 0.4)" }}
                    key={skill} 
                    className="px-2.5 py-1 rounded-[4px] text-[0.68rem] font-medium bg-sur-2 text-fg-2 border border-white/5 cursor-default transition-colors duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </Tilt>
        </div>
      </div>
    </section>
  );
}
