"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! (UI only)");
  };

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
        
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit} 
          className="bg-sur/50 border border-white/5 rounded-[8px] p-6 text-left"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.75rem] text-fg-2 font-medium">Name</label>
              <input 
                type="text" 
                placeholder="Your name" 
                className="bg-bg border border-white/5 text-fg-1 rounded-[4px] py-2.5 px-3 text-[0.85rem] font-sans outline-none focus:border-accent-cy transition-colors"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.75rem] text-fg-2 font-medium">Email</label>
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="bg-bg border border-white/5 text-fg-1 rounded-[4px] py-2.5 px-3 text-[0.85rem] font-sans outline-none focus:border-accent-cy transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5 mb-5">
            <label className="text-[0.75rem] text-fg-2 font-medium">Message</label>
            <textarea 
              placeholder="Tell me about your project..." 
              className="bg-bg border border-white/5 text-fg-1 rounded-[4px] py-3 px-3 text-[0.85rem] font-sans outline-none focus:border-accent-cy transition-colors resize-y min-h-[120px]"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full p-2.5 bg-accent-cy hover:bg-blue-600 text-white font-medium text-[0.85rem] rounded-[4px] transition-colors"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
