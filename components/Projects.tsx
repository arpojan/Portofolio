"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

export default function Projects() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="projects" className="py-12 px-8 border-b border-white/5 bg-sur relative overflow-hidden">
      <motion.p 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
        className="font-mono text-[0.65rem] text-accent-cy tracking-[0.15em] uppercase mb-2"
      >
        // selected work
      </motion.p>
      <motion.h2 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
        className="font-display text-[clamp(1.4rem,3vw,2rem)] font-bold tracking-[-0.02em] mb-2.5"
      >
        Projects
      </motion.h2>
      <motion.p 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
        className="text-fg-2 text-[0.84rem] leading-[1.7] max-w-[460px]"
      >
        Dari platform booking venue hingga sistem IoT berbasis AI.
      </motion.p>
      
      <div className="grid grid-cols-1 gap-6 mt-9">
        {/* Featured Project */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
          <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} scale={1.01} transitionSpeed={2000}>
            <div className="group bg-bg border border-white/5 rounded-[12px] overflow-hidden grid grid-cols-1 md:grid-cols-2 transition-all duration-300 hover:border-accent-cy/40 hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-cy/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="overflow-hidden bg-sur-2 flex items-center justify-center min-h-[220px] relative">
                <Image src="/assets/Sparring.png" alt="SPARRING" width={800} height={450} unoptimized className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="p-6 sm:p-8 flex flex-col justify-center z-10">
                <p className="font-mono text-[0.65rem] text-accent-cy uppercase tracking-[0.08em] mb-2">⭐ Internship · Suitmedia</p>
                <h3 className="font-display text-[1.1rem] font-bold mb-3 text-white group-hover:text-accent-cy transition-colors">SPARRING — Platform Venue Olahraga</h3>
                <p className="text-[0.78rem] text-fg-2 leading-[1.7] mb-5">
                  Platform booking venue berbasis web untuk menemukan partner dan venue olahraga. Dikembangkan sebagai fullstack dev selama internship di Suitmedia.
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {["Laravel 11", "React", "Inertia.js", "Tailwind CSS"].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-[4px] text-[0.65rem] font-mono bg-sur-2 text-fg-3 border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="https://arpojan.github.io/assets/SPARRING.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-accent-cy no-underline text-[0.78rem] font-semibold hover:gap-2 transition-all">
                  Detail Project <i className="ti ti-arrow-right"></i>
                </a>
              </div>
            </div>
          </Tilt>
        </motion.div>

        {/* Small Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { img: "home matano.png", tag: "Personal Project", title: "Matano Aquarent — Booking", desc: "Sistem pemesanan akuarium online. Laravel MVC end-to-end.", tech: ["Laravel", "MySQL", "Bootstrap"], link: "more matano.pdf" },
            { img: "home leet.png", tag: "Personal Project", title: "Leet — E-Commerce", desc: "Website e-commerce lengkap. Figma → Laravel, konsisten dari desain ke kode.", tech: ["Laravel", "Figma", "Tailwind"], link: "more leet.pdf" },
            { img: "company profile.png", tag: "Personal Project", title: "Matano — Company Profile", desc: "Website company profile penyedia jasa sewa akuarium profesional.", tech: ["HTML/CSS", "JavaScript"], link: "company profile.pdf" },
            { img: "Artboard 1.jpg", tag: "Freelance · Graphic Design", title: "GKN — Brand Identity", desc: "Logo, materi marketing, dan panduan brand identity untuk GKN.", tech: ["Photoshop", "Illustrator"], link: "Design.pdf", tagColor: "text-[#818CF8]" }
          ].map((project, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} transition={{ delay: i * 0.1 }}>
              <Tilt tiltMaxAngleX={4} tiltMaxAngleY={4} scale={1.02} transitionSpeed={1500} className="h-full">
                <div className="group h-full bg-bg border border-white/5 rounded-[12px] overflow-hidden transition-all duration-300 hover:border-accent-cy/30 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)] flex flex-col relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent-cy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>
                  
                  <div className="h-[160px] overflow-hidden bg-sur-2 flex items-center justify-center relative">
                    <Image src={`/assets/${project.img}`} alt={project.title} width={400} height={250} unoptimized className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                  <div className="p-5 sm:p-6 flex-grow flex flex-col z-20">
                    <p className={`font-mono text-[0.6rem] uppercase tracking-[0.08em] mb-2 ${project.tagColor || "text-accent-cy"}`}>{project.tag}</p>
                    <h3 className="font-display text-[0.95rem] font-semibold mb-2 group-hover:text-accent-cy transition-colors">{project.title}</h3>
                    <p className="text-[0.75rem] text-fg-2 leading-[1.6] mb-4 flex-grow">{project.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded-[3px] text-[0.62rem] font-mono bg-sur-2 text-fg-3 border border-white/5">{tech}</span>
                      ))}
                    </div>
                    <a href={`https://arpojan.github.io/assets/${project.link}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-accent-cy no-underline text-[0.72rem] font-semibold hover:gap-2 transition-all">
                      Detail <i className="ti ti-arrow-right"></i>
                    </a>
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
