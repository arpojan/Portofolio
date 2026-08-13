export default function About() {
  return (
    <section id="about" className="py-12 px-8 border-b border-white/5 bg-sur">
      <p className="font-mono text-[0.65rem] text-accent-cy tracking-[0.15em] uppercase mb-2">// about me</p>
      <h2 className="font-display text-[clamp(1.4rem,3vw,2rem)] font-bold tracking-[-0.02em] mb-2.5">
        Dev by skill,<br />designer by instinct.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-7 items-start">
        <div>
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
          <a href="https://arpojan.github.io/assets/CV%20Arvauzan.pdf" className="inline-flex items-center gap-1.5 py-2.5 px-6 bg-accent-cy text-bg font-bold text-[0.78rem] rounded-md no-underline transition-opacity hover:opacity-85">
            <i className="ti ti-download" aria-hidden="true"></i> Download CV
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <div className="bg-sur-2 border border-white/5 rounded-[9px] p-3.5 flex items-center gap-3">
            <div className="w-8 h-8 rounded-md flex items-center justify-center text-[0.95rem] shrink-0 bg-accent-cy/10 text-accent-cy">
              <i className="ti ti-code" aria-hidden="true"></i>
            </div>
            <div>
              <h4 className="text-[0.77rem] font-semibold mb-0.5">Fullstack Development</h4>
              <p className="text-[0.68rem] text-fg-3">Laravel · React · Inertia.js · Next.js · API</p>
            </div>
          </div>
          <div className="bg-sur-2 border border-white/5 rounded-[9px] p-3.5 flex items-center gap-3">
            <div className="w-8 h-8 rounded-md flex items-center justify-center text-[0.95rem] shrink-0 bg-[#818CF8]/10 text-[#818CF8]">
              <i className="ti ti-palette" aria-hidden="true"></i>
            </div>
            <div>
              <h4 className="text-[0.77rem] font-semibold mb-0.5">UI/UX & Design</h4>
              <p className="text-[0.68rem] text-fg-3">Figma · Photoshop · Illustrator · Tailwind</p>
            </div>
          </div>
          <div className="bg-sur-2 border border-white/5 rounded-[9px] p-3.5 flex items-center gap-3">
            <div className="w-8 h-8 rounded-md flex items-center justify-center text-[0.95rem] shrink-0 bg-accent-cy/10 text-accent-cy">
              <i className="ti ti-cpu" aria-hidden="true"></i>
            </div>
            <div>
              <h4 className="text-[0.77rem] font-semibold mb-0.5">Hardware Integration</h4>
              <p className="text-[0.68rem] text-fg-3">ESP32 · IoT · RESTful API · Sensor</p>
            </div>
          </div>
          <div className="bg-sur-2 border border-white/5 rounded-[9px] p-3.5 flex items-center gap-3">
            <div className="w-8 h-8 rounded-md flex items-center justify-center text-[0.95rem] shrink-0 bg-[#818CF8]/10 text-[#818CF8]">
              <i className="ti ti-brand-git" aria-hidden="true"></i>
            </div>
            <div>
              <h4 className="text-[0.77rem] font-semibold mb-0.5">Tools & Workflow</h4>
              <p className="text-[0.68rem] text-fg-3">Git · MySQL · Spatie · Vite · Vercel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
