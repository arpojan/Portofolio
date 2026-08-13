"use client";

import { motion } from "framer-motion";

export default function Contact() {

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  return (
    <section id="contact" className="py-12 px-8 relative overflow-hidden bg-bg">
      <div className="max-w-[540px] mx-auto text-center relative z-10">
        <motion.p 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
          className="font-mono text-[0.65rem] text-accent-cy tracking-[0.15em] uppercase mb-2"
        >
          // get in touch
        </motion.p>
        <motion.h2 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
          className="font-display text-[clamp(1.4rem,3vw,2rem)] font-bold tracking-[-0.02em] mb-2.5"
        >
          Let's Work Together
        </motion.h2>
        <motion.p 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
          className="text-fg-2 text-[0.84rem] leading-[1.7] max-w-[460px]"
        >
          Terbuka untuk peluang kerja, freelance, atau sekadar ngobrol soal project baru.
        </motion.p>
        
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants}
          className="flex justify-center gap-3 flex-wrap my-8"
        >
          {[
            { icon: "ti-mail", text: "arvauzanp@gmail.com", href: "mailto:arvauzanp@gmail.com" },
            { icon: "ti-brand-linkedin", text: "LinkedIn", href: "https://linkedin.com/in/arvauzan" },
            { icon: "ti-brand-github", text: "GitHub", href: "https://github.com/arpojan" }
          ].map((link, i) => (
            <motion.a 
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={link.href} target={link.text !== "arvauzanp@gmail.com" ? "_blank" : undefined} rel={link.text !== "arvauzanp@gmail.com" ? "noopener noreferrer" : undefined} 
              className="flex items-center gap-2 py-2 px-4 rounded-[4px] border border-white/5 text-fg-2 no-underline text-[0.8rem] bg-sur hover:bg-white/5 hover:text-fg-1 transition-colors"
            >
              <i className={`ti ${link.icon} text-[1.1rem]`} aria-hidden="true"></i> {link.text}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
