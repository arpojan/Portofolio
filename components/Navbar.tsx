"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 flex items-center justify-between py-[1.1rem] px-8 border-b border-white/5 bg-bg/80 backdrop-blur-md"
    >
      <motion.div 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="font-mono text-accent-cy text-[0.95rem] tracking-wider cursor-pointer"
      >
        &lt;arv /&gt;
      </motion.div>
      <ul className="hidden sm:flex gap-6 list-none">
        {["About", "Skills", "Projects", "Contact"].map((item) => (
          <motion.li key={item} whileHover={{ y: -2 }}>
            <a href={`#${item.toLowerCase()}`} className="text-fg-2 no-underline text-[0.78rem] font-medium hover:text-accent-cy transition-colors">
              {item}
            </a>
          </motion.li>
        ))}
      </ul>
      <motion.a 
        whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 212, 255, 0.4)" }}
        whileTap={{ scale: 0.95 }}
        href="#contact" 
        className="py-1.5 px-4 bg-accent-cy text-bg rounded-md no-underline text-[0.78rem] font-bold transition-all"
      >
        Hire Me
      </motion.a>
    </motion.nav>
  );
}
