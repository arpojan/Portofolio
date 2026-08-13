"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [roleText, setRoleText] = useState("");
  const fullText = "Fullstack Developer & UI/UX Designer";
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setRoleText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(typingInterval);
    }, 50);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="relative min-h-[90vh] px-8 pt-32 pb-16 overflow-hidden flex items-center justify-center border-b border-white/5">
      <div className="mesh-bg opacity-30"></div>
      
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-2 py-1.5 px-3.5 rounded-full border border-white/10 bg-sur/50 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-[0.65rem] font-mono text-fg-2 uppercase tracking-widest">Available for work</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold tracking-tight leading-[1.1] mb-6"
          >
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-accent-cy to-accent-coral bg-clip-text text-transparent">
              Arvauzan Putra
            </span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="h-8 mb-8"
          >
            <p className="font-mono text-[0.85rem] md:text-[0.95rem] text-fg-2">
              <span className="text-accent-coral">&gt;</span> {roleText}
              <span className="animate-pulse">_</span>
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects" className="py-3 px-7 bg-fg-1 text-bg rounded-[4px] font-medium text-[0.85rem] transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:-translate-y-0.5">
              View Projects
            </a>
            <a href="#contact" className="py-3 px-7 bg-sur border border-white/10 text-fg-1 rounded-[4px] font-medium text-[0.85rem] transition-all hover:border-accent-cy/50 hover:bg-white/5 hover:-translate-y-0.5">
              Contact Me
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="hidden lg:block relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-accent-cy to-accent-coral opacity-20 blur-xl rounded-[12px] group-hover:opacity-40 transition-opacity"></div>
          <div className="relative bg-[#0d0d12] border border-white/10 rounded-[12px] p-6 shadow-2xl font-mono text-[0.75rem] leading-loose text-fg-2">
            <div className="flex gap-2 mb-4 border-b border-white/5 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <p><span className="text-[#c678dd]">const</span> <span className="text-[#e5c07b]">developer</span> = {'{'}</p>
            <p className="pl-4">name: <span className="text-[#98c379]">'Arvauzan Putra'</span>,</p>
            <p className="pl-4">role: <span className="text-[#98c379]">'Fullstack Engineer'</span>,</p>
            <p className="pl-4">skills: [<span className="text-[#98c379]">'React'</span>, <span className="text-[#98c379]">'Next.js'</span>, <span className="text-[#98c379]">'Laravel'</span>],</p>
            <p className="pl-4">passion: <span className="text-[#98c379]">'Building beautiful web apps'</span></p>
            <p>{'}'};</p>
            <p className="mt-4"><span className="text-[#c678dd]">export default</span> <span className="text-[#e5c07b]">developer</span>;</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
