"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, idx: number) => {
    const card = document.getElementById(`project-card-${idx}`);
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const projects = [
    { img: "Sparring.png", tag: "Freelance", title: "SPARRING", desc: "Aplikasi penyedia lawan & teman olahraga. (Tim — Frontend Dev).", tech: ["Laravel 11", "React", "Inertia", "Tailwind"], link: "Sparring.pdf" },
    { img: "home leet.png", tag: "Personal", title: "Leet — E-Commerce", desc: "Website e-commerce lengkap. Figma → Laravel, konsisten dari desain ke kode.", tech: ["Laravel", "Figma", "Tailwind"], link: "more leet.pdf" },
    { img: "company profile.png", tag: "Personal", title: "Matano — Profile", desc: "Website company profile penyedia jasa sewa akuarium profesional.", tech: ["HTML/CSS", "JS"], link: "company profile.pdf" },
    { img: "Artboard 1.jpg", tag: "Design", title: "GKN — Brand Identity", desc: "Logo, materi marketing, dan panduan brand identity untuk GKN.", tech: ["Photoshop", "Illustrator"], link: "Design.pdf" }
  ];

  return (
    <section id="projects" className="py-24 px-8 border-b border-white/5 bg-bg relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
          className="mb-12"
        >
          <p className="font-mono text-[0.65rem] text-accent-cy tracking-[0.15em] uppercase mb-3">
            // 02. Selected Work
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight">
            Featured Projects
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div 
              key={i} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-50px" }} 
              variants={fadeUp} 
              transition={{ delay: i * 0.1 }}
            >
                <div 
                  id={`project-card-${i}`}
                  onMouseMove={(e) => handleMouseMove(e, i)}
                  className="group relative h-full bg-sur border border-white/5 rounded-[12px] overflow-hidden transition-all duration-300 hover:border-white/10 flex flex-col"
                >
                  {/* Glow mask */}
                  <div className="glow-mask absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>
                  
                  <div className="relative z-10 h-[220px] overflow-hidden bg-sur-2 flex items-center justify-center border-b border-white/5">
                    <div className="absolute top-4 left-4 z-20 bg-bg/80 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-full flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-cy"></span>
                      <span className="text-[0.6rem] font-mono text-fg-1 uppercase tracking-wider">{project.tag}</span>
                    </div>
                    <div className="absolute top-4 right-4 z-20 text-[0.7rem] font-mono text-fg-3 font-bold">
                      0{i + 1}
                    </div>
                    <Image src={`/assets/${project.img}`} alt={project.title} width={600} height={400} unoptimized className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                  </div>
                  
                  <div className="relative z-10 p-6 sm:p-8 flex-grow flex flex-col bg-sur">
                    <h3 className="font-display text-[1.25rem] font-bold text-fg-1 mb-2 group-hover:text-accent-cy transition-colors">{project.title}</h3>
                    <p className="text-[0.8rem] text-fg-2 leading-relaxed mb-6 flex-grow">{project.desc}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 rounded-[4px] text-[0.65rem] font-mono bg-sur-2 text-fg-3 border border-white/5 group-hover:border-white/10 transition-colors">{tech}</span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-4 mt-auto pt-5 border-t border-white/5">
                      <a href={`https://arpojan.github.io/assets/${project.link}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-fg-1 hover:text-accent-cy text-[0.75rem] font-medium transition-colors">
                        <i className="ti ti-external-link text-[1rem]"></i> Live Demo
                      </a>
                      <a href="#" className="flex items-center gap-1.5 text-fg-3 hover:text-fg-1 text-[0.75rem] font-medium transition-colors">
                        <i className="ti ti-brand-github text-[1rem]"></i> Source Code
                      </a>
                    </div>
                  </div>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
