export default function Hero() {
  return (
    <section className="pt-14 px-8 pb-12 relative overflow-hidden border-b border-white/5">
      <div className="pf-hdots"></div>
      <div className="relative z-10">
        <div className="flex gap-2.5 mb-5.5 flex-wrap">
          <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full font-mono text-[0.68rem] font-medium border text-accent-cy border-accent-cy/30 bg-accent-cy/10">
            <span className="pf-dot"></span> Fullstack Developer
          </span>
          <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full font-mono text-[0.68rem] font-medium border text-[#818CF8] border-[#818CF8]/30 bg-[#818CF8]/10">
            <span className="pf-dot text-[#818CF8]"></span> UI/UX Designer
          </span>
        </div>
        <h1 className="font-display text-[clamp(1.9rem,4.5vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] mb-4">
          Building <em className="not-italic text-accent-cy">Scalable</em><br />Web Applications
        </h1>
        <p className="text-fg-2 max-w-[480px] mb-7 text-sm leading-[1.75]">
          Hi, I'm Arvauzan Putra — a Fullstack Developer specializing in Laravel & React, with a strong eye for clean UI and great user experience.
        </p>
        <div className="flex gap-3 flex-wrap mb-9">
          <a href="#projects" className="py-2.5 px-6 bg-accent-cy text-bg font-bold text-[0.84rem] rounded-md no-underline transition-opacity hover:opacity-85">
            View My Work
          </a>
          <a href="#contact" className="py-2.5 px-6 border border-white/5 text-fg-1 font-medium text-[0.84rem] rounded-md no-underline hover:bg-white/5 transition-colors">
            Contact Me
          </a>
        </div>
        <div className="flex gap-8 sm:gap-5">
          <div>
            <div className="font-display text-[1.6rem] font-bold">5<span className="text-accent-cy">+</span></div>
            <div className="text-[0.68rem] text-fg-3 mt-0.5">Projects Built</div>
          </div>
          <div>
            <div className="font-display text-[1.6rem] font-bold">3<span className="text-accent-cy">+</span></div>
            <div className="text-[0.68rem] text-fg-3 mt-0.5">Years Learning</div>
          </div>
          <div>
            <div className="font-display text-[1.6rem] font-bold">3.62</div>
            <div className="text-[0.68rem] text-fg-3 mt-0.5">GPA</div>
          </div>
        </div>
      </div>
    </section>
  );
}
