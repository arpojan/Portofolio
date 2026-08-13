export default function Skills() {
  return (
    <section id="skills" className="py-12 px-8 border-b border-white/5">
      <p className="font-mono text-[0.65rem] text-accent-cy tracking-[0.15em] uppercase mb-2">// technical arsenal</p>
      <h2 className="font-display text-[clamp(1.4rem,3vw,2rem)] font-bold tracking-[-0.02em] mb-2.5">Core Competencies</h2>
      <p className="text-fg-2 text-[0.84rem] leading-[1.7] max-w-[460px]">Full stack and design spectrum — from API to pixel.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-7">
        <div className="bg-sur border border-white/5 rounded-[9px] p-5">
          <div className="font-mono text-[0.63rem] uppercase tracking-[0.1em] mb-3.5 text-accent-cy flex items-center">
            <i className="ti ti-bolt mr-1" aria-hidden="true"></i>Fullstack Dev
          </div>
          <div className="flex flex-wrap gap-1.5">
            {["Laravel", "React", "Next.js", "Inertia.js", "Node.js", "JavaScript", "PHP", "MySQL", "REST API", "Tailwind CSS", "Bootstrap", "Vite"].map((skill) => (
              <span key={skill} className="px-2.5 py-1 rounded-[4px] text-[0.68rem] font-medium bg-sur-2 text-fg-2 border border-white/5 cursor-default transition-all duration-200 hover:text-accent-cy hover:border-accent-cy/30">
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="bg-sur border border-white/5 rounded-[9px] p-5">
          <div className="font-mono text-[0.63rem] uppercase tracking-[0.1em] mb-3.5 text-[#818CF8] flex items-center">
            <i className="ti ti-sparkles mr-1" aria-hidden="true"></i>Design & Tools
          </div>
          <div className="flex flex-wrap gap-1.5">
            {["Figma", "Photoshop", "Illustrator", "Canva", "HTML/CSS", "Git", "GitHub", "Spatie", "ESP32", "Premiere Pro"].map((skill) => (
              <span key={skill} className="px-2.5 py-1 rounded-[4px] text-[0.68rem] font-medium bg-sur-2 text-fg-2 border border-white/5 cursor-default transition-all duration-200 hover:text-[#818CF8] hover:border-[#818CF8]/30">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
