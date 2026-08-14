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
    <section id="contact" className="py-24 px-8 relative overflow-hidden bg-bg">
      <div className="max-w-[540px] mx-auto text-center relative z-10">
        <motion.p
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
          className="font-mono text-[0.65rem] text-accent-cy tracking-[0.15em] uppercase mb-3"
        >
          // 04. Contact
        </motion.p>
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
          className="font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight mb-4"
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
          className="grid grid-cols-2 gap-4 my-10 w-full max-w-[500px] mx-auto"
        >
          {[
            { icon: "ti-brand-whatsapp", text: "WhatsApp", caption: "+62 857-1129-0246", href: "https://wa.me/6285711290246", color: "group-hover:text-[#25D366] group-hover:border-[#25D366]/50" },
            { icon: "ti-mail", text: "Email", caption: "arvauzanp@gmail.com", href: "mailto:arvauzanp@gmail.com", color: "group-hover:text-accent-coral group-hover:border-accent-coral/50" },
            { icon: "ti-brand-linkedin", text: "LinkedIn", caption: "in/arvauzan", href: "https://linkedin.com/in/arvauzan", color: "group-hover:text-[#0A66C2] group-hover:border-[#0A66C2]/50" },
            { icon: "ti-brand-github", text: "GitHub", caption: "arpojan", href: "https://github.com/arpojan", color: "group-hover:text-fg-1 group-hover:border-white/50" }
          ].map((link, i) => (
            <motion.a
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              href={link.href} target="_blank" rel="noopener noreferrer"
              className={`group flex flex-col items-center justify-center gap-3 py-6 px-4 rounded-[12px] border border-white/5 bg-sur/50 text-fg-2 no-underline transition-all duration-300 hover:bg-white/5 ${link.color}`}
            >
              <i className={`ti ${link.icon} text-[2rem] transition-colors`} aria-hidden="true"></i>
              <div className="flex flex-col items-center gap-1">
                <span className="text-[0.9rem] font-bold font-display">{link.text}</span>
                <span className="text-[0.7rem] font-mono opacity-60 text-center select-all">{link.caption}</span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
