import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="py-12 px-8 border-b border-white/5 bg-sur">
      <p className="font-mono text-[0.65rem] text-accent-cy tracking-[0.15em] uppercase mb-2">// selected work</p>
      <h2 className="font-display text-[clamp(1.4rem,3vw,2rem)] font-bold tracking-[-0.02em] mb-2.5">Projects</h2>
      <p className="text-fg-2 text-[0.84rem] leading-[1.7] max-w-[460px]">Dari platform booking venue hingga sistem IoT berbasis AI.</p>
      
      <div className="grid grid-cols-1 gap-4 mt-7">
        {/* Featured Project */}
        <div className="bg-bg border border-white/5 rounded-[9px] overflow-hidden grid grid-cols-1 md:grid-cols-2 transition-colors duration-250 hover:border-accent-cy/25">
          <div className="overflow-hidden bg-sur-2 flex items-center justify-center min-h-[180px]">
            <Image src="/assets/Sparring.png" alt="SPARRING" width={800} height={450} unoptimized className="w-full h-full object-cover" />
          </div>
          <div className="p-4 sm:p-[1.1rem]">
            <p className="font-mono text-[0.6rem] text-accent-cy uppercase tracking-[0.08em] mb-2">⭐ Internship · Suitmedia</p>
            <h3 className="font-display text-[0.88rem] font-semibold mb-2">SPARRING — Platform Venue Olahraga</h3>
            <p className="text-[0.75rem] text-fg-2 leading-[1.6] mb-3">
              Platform booking venue berbasis web untuk menemukan partner dan venue olahraga. Dikembangkan sebagai fullstack dev selama internship di Suitmedia.
            </p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {["Laravel 11", "React", "Inertia.js", "Tailwind CSS"].map((tech) => (
                <span key={tech} className="px-2 py-0.5 rounded-[3px] text-[0.62rem] font-mono bg-sur-2 text-fg-3 border border-white/5">
                  {tech}
                </span>
              ))}
            </div>
            <a href="https://arpojan.github.io/assets/SPARRING.pdf" target="_blank" rel="noopener noreferrer" className="text-accent-cy no-underline text-[0.72rem] font-semibold">
              Detail Project →
            </a>
          </div>
        </div>

        {/* Small Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-bg border border-white/5 rounded-[9px] overflow-hidden transition-all duration-250 hover:border-accent-cy/20 hover:-translate-y-[2px]">
            <div className="h-[120px] overflow-hidden bg-sur-2 flex items-center justify-center">
              <Image src="/assets/home matano.png" alt="Matano Aquarent" width={400} height={250} unoptimized className="w-full h-full object-cover" />
            </div>
            <div className="p-4 sm:p-[1.1rem]">
              <p className="font-mono text-[0.6rem] text-accent-cy uppercase tracking-[0.08em] mb-2">Personal Project</p>
              <h3 className="font-display text-[0.88rem] font-semibold mb-2">Matano Aquarent — Booking</h3>
              <p className="text-[0.75rem] text-fg-2 leading-[1.6] mb-3">Sistem pemesanan akuarium online. Laravel MVC end-to-end.</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {["Laravel", "MySQL", "Bootstrap"].map((tech) => (
                  <span key={tech} className="px-2 py-0.5 rounded-[3px] text-[0.62rem] font-mono bg-sur-2 text-fg-3 border border-white/5">{tech}</span>
                ))}
              </div>
              <a href="https://arpojan.github.io/assets/more matano.pdf" target="_blank" rel="noopener noreferrer" className="text-accent-cy no-underline text-[0.72rem] font-semibold">Detail →</a>
            </div>
          </div>

          <div className="bg-bg border border-white/5 rounded-[9px] overflow-hidden transition-all duration-250 hover:border-accent-cy/20 hover:-translate-y-[2px]">
            <div className="h-[120px] overflow-hidden bg-sur-2 flex items-center justify-center">
              <Image src="/assets/home leet.png" alt="Leet E-Commerce" width={400} height={250} unoptimized className="w-full h-full object-cover" />
            </div>
            <div className="p-4 sm:p-[1.1rem]">
              <p className="font-mono text-[0.6rem] text-accent-cy uppercase tracking-[0.08em] mb-2">Personal Project</p>
              <h3 className="font-display text-[0.88rem] font-semibold mb-2">Leet — E-Commerce</h3>
              <p className="text-[0.75rem] text-fg-2 leading-[1.6] mb-3">Website e-commerce lengkap. Figma → Laravel, konsisten dari desain ke kode.</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {["Laravel", "Figma", "Tailwind"].map((tech) => (
                  <span key={tech} className="px-2 py-0.5 rounded-[3px] text-[0.62rem] font-mono bg-sur-2 text-fg-3 border border-white/5">{tech}</span>
                ))}
              </div>
              <a href="https://arpojan.github.io/assets/more leet.pdf" target="_blank" rel="noopener noreferrer" className="text-accent-cy no-underline text-[0.72rem] font-semibold">Detail →</a>
            </div>
          </div>

          <div className="bg-bg border border-white/5 rounded-[9px] overflow-hidden transition-all duration-250 hover:border-accent-cy/20 hover:-translate-y-[2px]">
            <div className="h-[120px] overflow-hidden bg-sur-2 flex items-center justify-center">
              <Image src="/assets/company profile.png" alt="Matano Company Profile" width={400} height={250} unoptimized className="w-full h-full object-cover" />
            </div>
            <div className="p-4 sm:p-[1.1rem]">
              <p className="font-mono text-[0.6rem] text-accent-cy uppercase tracking-[0.08em] mb-2">Personal Project</p>
              <h3 className="font-display text-[0.88rem] font-semibold mb-2">Matano — Company Profile</h3>
              <p className="text-[0.75rem] text-fg-2 leading-[1.6] mb-3">Website company profile penyedia jasa sewa akuarium profesional.</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {["HTML/CSS", "JavaScript"].map((tech) => (
                  <span key={tech} className="px-2 py-0.5 rounded-[3px] text-[0.62rem] font-mono bg-sur-2 text-fg-3 border border-white/5">{tech}</span>
                ))}
              </div>
              <a href="https://arpojan.github.io/assets/company profile.pdf" target="_blank" rel="noopener noreferrer" className="text-accent-cy no-underline text-[0.72rem] font-semibold">Detail →</a>
            </div>
          </div>

          <div className="bg-bg border border-white/5 rounded-[9px] overflow-hidden transition-all duration-250 hover:border-accent-cy/20 hover:-translate-y-[2px]">
            <div className="h-[120px] overflow-hidden bg-sur-2 flex items-center justify-center">
              <Image src="/assets/Artboard 1.jpg" alt="GKN Brand Identity" width={400} height={250} unoptimized className="w-full h-full object-cover" />
            </div>
            <div className="p-4 sm:p-[1.1rem]">
              <p className="font-mono text-[0.6rem] text-[#818CF8] uppercase tracking-[0.08em] mb-2">Freelance · Graphic Design</p>
              <h3 className="font-display text-[0.88rem] font-semibold mb-2">GKN — Brand Identity</h3>
              <p className="text-[0.75rem] text-fg-2 leading-[1.6] mb-3">Logo, materi marketing, dan panduan brand identity untuk GKN.</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {["Photoshop", "Illustrator"].map((tech) => (
                  <span key={tech} className="px-2 py-0.5 rounded-[3px] text-[0.62rem] font-mono bg-sur-2 text-fg-3 border border-white/5">{tech}</span>
                ))}
              </div>
              <a href="https://arpojan.github.io/assets/Design.pdf" target="_blank" rel="noopener noreferrer" className="text-accent-cy no-underline text-[0.72rem] font-semibold">Detail →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
