"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
            <div className="group bg-sur/50 border border-white/5 rounded-[8px] overflow-hidden grid grid-cols-1 md:grid-cols-2 hover:border-white/10 hover:bg-sur transition-colors">
              <div className="overflow-hidden bg-sur-2 flex items-center justify-center min-h-[220px] relative border-b md:border-b-0 md:border-r border-white/5">
                <Image src="/assets/Sparring.png" alt="SPARRING" width={800} height={450} unoptimized className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <p className="font-mono text-[0.65rem] text-accent-cy uppercase tracking-[0.08em] mb-2">⭐ Internship · Suitmedia</p>
                <h3 className="font-display text-[1.1rem] font-bold mb-3 text-fg-1">SPARRING — Platform Venue Olahraga</h3>
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
                <a href="https://arpojan.github.io/assets/SPARRING.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-fg-1 no-underline text-[0.78rem] font-semibold hover:text-accent-cy transition-colors">
                  Detail Project <i className="ti ti-arrow-right"></i>
                </a>
              </div>
            </div>
        </motion.div>

        {/* Small Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { img: "home matano.png", tag: "Personal Project", title: "Matano Aquarent — Booking", desc: "Sistem pemesanan akuarium online. Laravel MVC end-to-end.", tech: ["Laravel", "MySQL", "Bootstrap"], link: "more matano.pdf" },
            { img: "home leet.png", tag: "Personal Project", title: "Leet — E-Commerce", desc: "Website e-commerce lengkap. Figma → Laravel, konsisten dari desain ke kode.", tech: ["Laravel", "Figma", "Tailwind"], link: "more leet.pdf" },
            { img: "company profile.png", tag: "Personal Project", title: "Matano — Company Profile", desc: "Website company profile penyedia jasa sewa akuarium profesional.", tech: ["HTML/CSS", "JavaScript"], link: "company profile.pdf" },
            { img: "Artboard 1.jpg", tag: "Freelance · Graphic Design", title: "GKN — Brand Identity", desc: "Logo, materi marketing, dan panduan brand identity untuk GKN.", tech: ["Photoshop", "Illustrator"], link: "Design.pdf", tagColor: "text-[#818CF8]" }
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} transition={{ delay: i * 0.1 }}>
                <div className="group h-full bg-sur/50 border border-white/5 rounded-[8px] overflow-hidden hover:border-white/10 hover:bg-sur transition-colors flex flex-col">
                  <div className="h-[160px] overflow-hidden bg-sur-2 flex items-center justify-center border-b border-white/5">
                    <Image src={`/assets/${project.img}`} alt={project.title} width={400} height={250} unoptimized className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-5 sm:p-6 flex-grow flex flex-col">
                    <p className={`font-mono text-[0.6rem] uppercase tracking-[0.08em] mb-2 ${project.tagColor || "text-accent-cy"}`}>{project.tag}</p>
                    <h3 className="font-display text-[0.95rem] font-semibold mb-2 text-fg-1">{project.title}</h3>
                    <p className="text-[0.75rem] text-fg-2 leading-[1.6] mb-4 flex-grow">{project.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded-[3px] text-[0.62rem] font-mono bg-sur-2 text-fg-3 border border-white/5">{tech}</span>
                      ))}
                    </div>
                    <a href={`https://arpojan.github.io/assets/${project.link}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-fg-1 no-underline text-[0.72rem] font-semibold hover:text-accent-cy transition-colors">
                      Detail <i className="ti ti-arrow-right"></i>
                    </a>
                  </div>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
