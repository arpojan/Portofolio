"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 100 } },
  };

  return (
    <section className="pt-14 px-8 pb-12 relative overflow-hidden border-b border-white/5">
      <div className="pf-hdots"></div>
      
      {/* Decorative Ornaments */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] bg-accent-cy/20 rounded-full blur-[100px] z-0 pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#818CF8]/20 rounded-full blur-[120px] z-0 pointer-events-none"
      />

      <motion.div 
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="flex gap-2.5 mb-5.5 flex-wrap">
          <motion.span 
            whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(0, 212, 255, 0.2)" }}
            className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full font-mono text-[0.68rem] font-medium border text-accent-cy border-accent-cy/30 bg-accent-cy/10 backdrop-blur-sm transition-colors cursor-default"
          >
            <span className="pf-dot"></span> Fullstack Developer
          </motion.span>
          <motion.span 
            whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(129, 140, 248, 0.2)" }}
            className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full font-mono text-[0.68rem] font-medium border text-[#818CF8] border-[#818CF8]/30 bg-[#818CF8]/10 backdrop-blur-sm transition-colors cursor-default"
          >
            <span className="pf-dot text-[#818CF8]"></span> UI/UX Designer
          </motion.span>
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="font-display text-[clamp(1.9rem,4.5vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] mb-4">
          Building <em className="not-italic text-accent-cy" style={{ textShadow: "0 0 20px rgba(0, 212, 255, 0.4)" }}>Scalable</em><br />Web Applications
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-fg-2 max-w-[480px] mb-7 text-sm leading-[1.75]">
          Hi, I'm Arvauzan Putra — a Fullstack Developer specializing in Laravel & React, with a strong eye for clean UI and great user experience.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex gap-3 flex-wrap mb-9">
          <motion.a 
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 212, 255, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            href="#projects" 
            className="py-2.5 px-6 bg-accent-cy text-bg font-bold text-[0.84rem] rounded-md no-underline transition-all"
          >
            View My Work
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            href="#contact" 
            className="py-2.5 px-6 border border-white/5 text-fg-1 font-medium text-[0.84rem] rounded-md no-underline backdrop-blur-sm transition-all"
          >
            Contact Me
          </motion.a>
        </motion.div>
        
        <motion.div variants={itemVariants} className="flex gap-8 sm:gap-5">
          <motion.div whileHover={{ y: -3 }}>
            <div className="font-display text-[1.6rem] font-bold">5<span className="text-accent-cy">+</span></div>
            <div className="text-[0.68rem] text-fg-3 mt-0.5">Projects Built</div>
          </motion.div>
          <motion.div whileHover={{ y: -3 }}>
            <div className="font-display text-[1.6rem] font-bold">3<span className="text-accent-cy">+</span></div>
            <div className="text-[0.68rem] text-fg-3 mt-0.5">Years Learning</div>
          </motion.div>
          <motion.div whileHover={{ y: -3 }}>
            <div className="font-display text-[1.6rem] font-bold">3.62</div>
            <div className="text-[0.68rem] text-fg-3 mt-0.5">GPA</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
