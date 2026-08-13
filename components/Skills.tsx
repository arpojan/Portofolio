"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const skills = [
    { name: "React", weight: "text-[2rem] text-accent-cy font-bold opacity-100" },
    { name: "Next.js", weight: "text-[2.5rem] text-fg-1 font-bold opacity-100" },
    { name: "Laravel", weight: "text-[2.2rem] text-[#FF2D20] font-bold opacity-100" },
    { name: "Tailwind CSS", weight: "text-[1.8rem] text-[#38B2AC] font-semibold opacity-90" },
    { name: "TypeScript", weight: "text-[1.6rem] text-[#3178C6] font-semibold opacity-90" },
    { name: "JavaScript", weight: "text-[1.8rem] text-[#F7DF1E] font-semibold opacity-90" },
    { name: "PHP", weight: "text-[1.5rem] text-[#777BB4] font-medium opacity-80" },
    { name: "MySQL", weight: "text-[1.4rem] text-[#4479A1] font-medium opacity-80" },
    { name: "Figma", weight: "text-[2rem] text-[#F24E1E] font-bold opacity-90" },
    { name: "UI/UX Design", weight: "text-[1.7rem] text-accent-coral font-semibold opacity-90" },
    { name: "Git", weight: "text-[1.3rem] text-[#F05032] font-medium opacity-70" },
    { name: "Postman", weight: "text-[1.2rem] text-[#FF6C37] opacity-60" },
    { name: "Inertia.js", weight: "text-[1.5rem] text-[#9553E9] font-medium opacity-80" },
    { name: "Framer Motion", weight: "text-[1.4rem] text-pink-500 font-medium opacity-80" },
  ];

  return (
    <section id="skills" className="py-24 px-8 border-b border-white/5 bg-sur relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
          className="mb-16"
        >
          <p className="font-mono text-[0.65rem] text-accent-cy tracking-[0.15em] uppercase mb-3">
            // 03. Technical Arsenal
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight">
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 max-w-4xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.1, rotate: Math.random() * 6 - 3 }}
              className={`font-display cursor-default transition-all duration-300 ${skill.weight} hover:!opacity-100 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]`}
            >
              {skill.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
