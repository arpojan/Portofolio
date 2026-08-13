"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const cards = [
    { title: "Fullstack Development", desc: "Laravel · React · Inertia.js · Next.js · API", icon: "ti-code", colorClass: "text-accent-cy", bgClass: "bg-accent-cy/10" },
    { title: "UI/UX & Design", desc: "Figma · Photoshop · Illustrator · Tailwind", icon: "ti-palette", colorClass: "text-[#818CF8]", bgClass: "bg-[#818CF8]/10" },
    { title: "Hardware Integration", desc: "ESP32 · IoT · RESTful API · Sensor", icon: "ti-cpu", colorClass: "text-accent-cy", bgClass: "bg-accent-cy/10" },
    { title: "Tools & Workflow", desc: "Git · MySQL · Spatie · Vite · Vercel", icon: "ti-brand-git", colorClass: "text-[#818CF8]", bgClass: "bg-[#818CF8]/10" },
  ];

  return (
    <section id="about" className="py-12 px-8 border-b border-white/5 bg-sur relative overflow-hidden">
      <motion.p 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
        className="font-mono text-[0.65rem] text-accent-cy tracking-[0.15em] uppercase mb-2"
      >
        // about me
      </motion.p>
      <motion.h2 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
        className="font-display text-[clamp(1.4rem,3vw,2rem)] font-bold tracking-[-0.02em] mb-2.5"
      >
        Dev by skill,<br />designer by instinct.
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-7 items-start">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
          <p className="text-fg-2 text-[0.84rem] leading-[1.8] mb-3.5">
            Saya seorang <strong className="text-fg-1 font-semibold">Fullstack Developer</strong> dengan pengalaman membangun aplikasi web end-to-end — dari database dan backend logic, hingga tampilan antarmuka yang bersih dan intuitif.
          </p>
          <p className="text-fg-2 text-[0.84rem] leading-[1.8] mb-3.5">
            Terbiasa bekerja dengan <strong className="text-fg-1 font-semibold">Laravel, React, dan Inertia.js</strong>. Kemampuan desain di <strong className="text-fg-1 font-semibold">Figma</strong> membuat saya bisa menjembatani kebutuhan teknis dan visual dalam satu tim.
          </p>
          <p className="text-fg-2 text-[0.84rem] leading-[1.8] mb-3.5">
            Menyelesaikan studi Teknik Informatika di <strong className="text-fg-1 font-semibold">Universitas Gunadarma</strong> (GPA 3.62), fokus pada sistem web dan IoT.
          </p>
          <br />
          <motion.a 
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 212, 255, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            href="https://arpojan.github.io/assets/CV%20Arvauzan.pdf" 
            className="inline-flex items-center gap-1.5 py-2.5 px-6 bg-accent-cy text-bg font-bold text-[0.78rem] rounded-md no-underline transition-all"
          >
            <i className="ti ti-download" aria-hidden="true"></i> Download CV
          </motion.a>
        </motion.div>

        <div className="flex flex-col gap-3">
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000}>
                <div className="bg-sur-2/80 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-colors rounded-[9px] p-3.5 flex items-center gap-3 shadow-lg">
                  <div className={`w-8 h-8 rounded-md flex items-center justify-center text-[0.95rem] shrink-0 ${card.bgClass} ${card.colorClass}`}>
                    <i className={`ti ${card.icon}`} aria-hidden="true"></i>
                  </div>
                  <div>
                    <h4 className="text-[0.77rem] font-semibold mb-0.5 text-fg-1">{card.title}</h4>
                    <p className="text-[0.68rem] text-fg-3">{card.desc}</p>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
