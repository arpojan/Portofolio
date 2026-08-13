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
    <section className="pt-20 px-8 pb-16 relative overflow-hidden border-b border-black/5 flex flex-col items-center text-center">

      <motion.div 
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="flex justify-center gap-2.5 mb-6 flex-wrap">
          <motion.span 
            whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(14, 165, 233, 0.2)" }}
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
        
        <motion.h1 variants={itemVariants} className="font-display text-[clamp(2.2rem,5vw,3.5rem)] font-bold leading-[1.15] tracking-[-0.02em] mb-5">
          Building <span className="text-accent-cy">Scalable</span><br />Web Applications
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-fg-2 max-w-[500px] mx-auto mb-8 text-[0.9rem] leading-[1.75]">
          Hi, I'm Arvauzan Putra — a Fullstack Developer specializing in Laravel & React. I craft clean, efficient code and intuitive user interfaces.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex justify-center gap-3 flex-wrap mb-12">
          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            href="#projects" 
            className="py-2.5 px-6 bg-accent-cy text-bg font-bold text-[0.84rem] rounded-md no-underline transition-all"
          >
            View My Work
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.02, backgroundColor: "rgba(0, 0, 0, 0.05)" }}
            whileTap={{ scale: 0.95 }}
            href="#contact" 
            className="py-2.5 px-6 border border-black/5 text-fg-1 font-medium text-[0.84rem] rounded-md no-underline backdrop-blur-sm transition-all"
          >
            Contact Me
          </motion.a>
        </motion.div>
        
        <motion.div variants={itemVariants} className="flex justify-center gap-10 sm:gap-16 border-t border-black/5 pt-8 inline-flex mx-auto">
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
