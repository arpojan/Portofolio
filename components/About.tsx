"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const cards = [
    { title: "Fullstack Development", skills: "Laravel · React · Inertia.js · Next.js · API", icon: "ti-code", colorClass: "text-[#818CF8]", bgClass: "bg-[#818CF8]/10" },
    { title: "UI/UX & Design", skills: "Figma · Photoshop · Illustrator · Tailwind", icon: "ti-color-swatch", colorClass: "text-[#A78BFA]", bgClass: "bg-[#A78BFA]/10" },
    { title: "Hardware Integration", skills: "ESP32 · IoT · RESTful API · Sensor", icon: "ti-cpu", colorClass: "text-[#60A5FA]", bgClass: "bg-[#60A5FA]/10" },
    { title: "Tools & Workflow", skills: "Git · MySQL · Spatie · Vite · Vercel", icon: "ti-tool", colorClass: "text-[#94A3B8]", bgClass: "bg-[#94A3B8]/10" }
  ];

  return (
    <section id="about" className="py-24 px-8 border-b border-white/5 bg-sur relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
          className="font-mono text-[0.65rem] text-accent-cy tracking-[0.15em] uppercase mb-3 text-center"
        >
          // 01. About
        </motion.p>
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
          className="font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight mb-12 text-center"
        >
          Who Am I?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mt-7 items-stretch">

          {/* 1. Profile Photo */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
            className="lg:col-span-4 relative rounded-[16px] overflow-hidden border border-white/10 group aspect-[4/5] bg-sur-2 shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent z-10"></div>
            <Image
              src="/portofolio/assets/profile.jpg"
              alt="Arvauzan Putra"
              fill
              className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              unoptimized
            />
          </motion.div>

          {/* 2. Text Content */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
            className="lg:col-span-4 flex flex-col justify-center"
          >
            <p className="text-fg-2 text-[0.84rem] leading-[1.8] mb-4">
              Saya seorang <strong className="text-fg-1 font-semibold">Fullstack Developer</strong> dengan pengalaman membangun aplikasi web end-to-end — dari database dan backend logic, hingga tampilan antarmuka yang bersih dan intuitif.
            </p>
            <p className="text-fg-2 text-[0.84rem] leading-[1.8] mb-4">
              Terbiasa bekerja dengan <strong className="text-fg-1 font-semibold">Laravel, React, dan Inertia.js</strong>. Kemampuan desain di <strong className="text-fg-1 font-semibold">Figma</strong> membuat saya bisa menjembatani kebutuhan teknis dan visual dalam satu tim.
            </p>
            <p className="text-fg-2 text-[0.84rem] leading-[1.8] mb-6">
              Menyelesaikan studi Teknik Informatika di <strong className="text-fg-1 font-semibold">Universitas Gunadarma</strong> (GPA 3.62), fokus pada sistem web dan IoT.
            </p>
            <div className="mt-auto">
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(14, 165, 233, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                href="https://arpojan.github.io/assets/CV%20Arvauzan.pdf"
                className="inline-flex items-center gap-1.5 py-2.5 px-6 bg-accent-cy text-bg font-bold text-[0.78rem] rounded-md no-underline transition-all"
              >
                <i className="ti ti-download text-[1rem]"></i> Download CV
              </motion.a>
            </div>
          </motion.div>

          {/* 3. Skill Cards */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="h-full"
              >
                <div className="h-full bg-sur/50 border border-white/5 hover:border-white/10 hover:bg-sur transition-colors rounded-[8px] p-4 flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-md flex items-center justify-center text-[1rem] shrink-0 ${card.bgClass} ${card.colorClass}`}>
                    <i className={`ti ${card.icon}`} aria-hidden="true"></i>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[0.85rem] text-fg-1">{card.title}</h3>
                    <p className="text-[0.65rem] text-fg-3 font-mono mt-1">{card.skills}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
