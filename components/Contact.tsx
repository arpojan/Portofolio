"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Action form submit logic here if needed, for now just basic UI
    alert("Message sent! (UI only)");
  };

  return (
    <section id="contact" className="py-12 px-8">
      <div className="max-w-[540px]">
        <p className="font-mono text-[0.65rem] text-accent-cy tracking-[0.15em] uppercase mb-2">// get in touch</p>
        <h2 className="font-display text-[clamp(1.4rem,3vw,2rem)] font-bold tracking-[-0.02em] mb-2.5">Let's Work Together</h2>
        <p className="text-fg-2 text-[0.84rem] leading-[1.7] max-w-[460px]">
          Terbuka untuk peluang kerja, freelance, atau sekadar ngobrol soal project baru.
        </p>
        <div className="flex gap-2.5 flex-wrap my-5">
          <a href="mailto:arvauzanp@gmail.com" className="flex items-center gap-1.5 py-2 px-4 rounded-md border border-white/5 text-fg-2 no-underline text-[0.77rem] bg-sur transition-all duration-200 hover:border-accent-cy/30 hover:text-accent-cy">
            <i className="ti ti-mail" aria-hidden="true"></i> arvauzanp@gmail.com
          </a>
          <a href="https://linkedin.com/in/arvauzan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 py-2 px-4 rounded-md border border-white/5 text-fg-2 no-underline text-[0.77rem] bg-sur transition-all duration-200 hover:border-accent-cy/30 hover:text-accent-cy">
            <i className="ti ti-brand-linkedin" aria-hidden="true"></i> LinkedIn
          </a>
          <a href="https://github.com/arpojan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 py-2 px-4 rounded-md border border-white/5 text-fg-2 no-underline text-[0.77rem] bg-sur transition-all duration-200 hover:border-accent-cy/30 hover:text-accent-cy">
            <i className="ti ti-brand-github" aria-hidden="true"></i> GitHub
          </a>
        </div>
        
        <form onSubmit={handleSubmit} className="bg-sur border border-white/5 rounded-[9px] p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            <div className="flex flex-col gap-1">
              <label className="text-[0.68rem] text-fg-3">Name</label>
              <input 
                type="text" 
                placeholder="Your name" 
                className="bg-sur-2 border border-white/5 text-fg-1 rounded-[5px] py-2 px-3 text-[0.78rem] font-sans outline-none transition-colors focus:border-accent-cy/40"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[0.68rem] text-fg-3">Email</label>
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="bg-sur-2 border border-white/5 text-fg-1 rounded-[5px] py-2 px-3 text-[0.78rem] font-sans outline-none transition-colors focus:border-accent-cy/40"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[0.68rem] text-fg-3">Message</label>
            <textarea 
              placeholder="Tell me about your project..." 
              className="bg-sur-2 border border-white/5 text-fg-1 rounded-[5px] py-2 px-3 text-[0.78rem] font-sans outline-none transition-colors focus:border-accent-cy/40 resize-y min-h-[80px]"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>
          <button type="submit" className="w-full mt-3 p-2.5 bg-accent-cy text-bg font-bold text-[0.84rem] border-none rounded-md cursor-pointer hover:opacity-90 transition-opacity">
            Send Message →
          </button>
        </form>
      </div>
    </section>
  );
}
