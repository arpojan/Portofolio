"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 w-full z-50 flex items-center justify-between py-4 px-8 border-b border-white/5 bg-bg/60 backdrop-blur-xl"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="font-display font-bold text-[1.1rem] tracking-tight text-fg-1"
      >
        Portofolio<span className="text-accent-cy">.</span>
      </motion.div>
      <ul className="hidden md:flex items-center gap-8">
        {[
          { name: "About", href: "#about" },
          { name: "Skills", href: "#skills" },
          { name: "Projects", href: "#projects" },
        ].map((link) => (
          <li key={link.name}>
            <a href={link.href} className="text-[0.78rem] font-medium text-fg-2 hover:text-fg-1 transition-colors relative group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent-cy transition-all group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="#contact"
        className="py-2 px-5 bg-sur border border-white/10 hover:border-accent-cy/50 text-fg-1 rounded-full no-underline text-[0.78rem] font-medium transition-all"
      >
        Get in touch
      </motion.a>
    </motion.nav>
  );
}
