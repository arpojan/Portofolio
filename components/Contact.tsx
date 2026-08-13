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
    <section id="contact" className="py-12 px-8 relative overflow-hidden">
      {/* Decorative Ornaments */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-accent-cy/5 rounded-full blur-[150px] z-0 pointer-events-none"></div>

      <div className="max-w-[540px] relative z-10">
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
          className="flex gap-3 flex-wrap my-6"
        >
          {[
            { icon: "ti-mail", text: "arvauzanp@gmail.com", href: "mailto:arvauzanp@gmail.com" },
            { icon: "ti-brand-linkedin", text: "LinkedIn", href: "https://linkedin.com/in/arvauzan" },
            { icon: "ti-brand-github", text: "GitHub", href: "https://github.com/arpojan" }
          ].map((link, i) => (
            <motion.a 
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.05, y: -2, borderColor: "rgba(0, 212, 255, 0.4)", color: "#00D4FF", backgroundColor: "rgba(0, 212, 255, 0.05)" }}
              whileTap={{ scale: 0.95 }}
              href={link.href} target={link.text !== "arvauzanp@gmail.com" ? "_blank" : undefined} rel={link.text !== "arvauzanp@gmail.com" ? "noopener noreferrer" : undefined} 
              className="flex items-center gap-2 py-2 px-4 rounded-[7px] border border-white/5 text-fg-2 no-underline text-[0.77rem] bg-sur/80 backdrop-blur-sm transition-all duration-300"
            >
              <i className={`ti ${link.icon} text-[1.1rem]`} aria-hidden="true"></i> {link.text}
            </motion.a>
          ))}
        </motion.div>
        
        <motion.form 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          onSubmit={handleSubmit} 
          className="bg-sur/80 backdrop-blur-md border border-white/5 rounded-[12px] p-6 shadow-2xl relative"
        >
          {/* Animated Glowing border effect for form */}
          <div className="absolute inset-0 rounded-[12px] border border-accent-cy/0 transition-colors duration-500 pointer-events-none" style={{ borderColor: focusedField ? "rgba(0, 212, 255, 0.2)" : "rgba(0,0,0,0)" }}></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 relative z-10">
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.68rem] text-fg-3 font-medium transition-colors" style={{ color: focusedField === "name" ? "#00D4FF" : undefined }}>Name</label>
              <input 
                type="text" 
                placeholder="Your name" 
                className="bg-sur-2/80 border border-white/5 text-fg-1 rounded-[7px] py-2.5 px-4 text-[0.78rem] font-sans outline-none transition-all duration-300 focus:border-accent-cy/50 focus:bg-sur-2 focus:shadow-[0_0_15px_rgba(0,212,255,0.1)]"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.68rem] text-fg-3 font-medium transition-colors" style={{ color: focusedField === "email" ? "#00D4FF" : undefined }}>Email</label>
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="bg-sur-2/80 border border-white/5 text-fg-1 rounded-[7px] py-2.5 px-4 text-[0.78rem] font-sans outline-none transition-all duration-300 focus:border-accent-cy/50 focus:bg-sur-2 focus:shadow-[0_0_15px_rgba(0,212,255,0.1)]"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5 relative z-10">
            <label className="text-[0.68rem] text-fg-3 font-medium transition-colors" style={{ color: focusedField === "message" ? "#00D4FF" : undefined }}>Message</label>
            <textarea 
              placeholder="Tell me about your project..." 
              className="bg-sur-2/80 border border-white/5 text-fg-1 rounded-[7px] py-3 px-4 text-[0.78rem] font-sans outline-none transition-all duration-300 focus:border-accent-cy/50 focus:bg-sur-2 focus:shadow-[0_0_15px_rgba(0,212,255,0.1)] resize-y min-h-[100px]"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
            ></textarea>
          </div>
          <motion.button 
            whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0, 212, 255, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            type="submit" 
            className="w-full mt-5 p-3 bg-accent-cy text-bg font-bold text-[0.84rem] border-none rounded-[7px] cursor-pointer transition-all relative z-10"
          >
            Send Message <i className="ti ti-arrow-right ml-1"></i>
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
