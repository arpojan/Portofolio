export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-[1.1rem] px-8 border-b border-white/5 bg-bg">
      <div className="font-mono text-accent-cy text-[0.95rem] tracking-wider">&lt;arv /&gt;</div>
      <ul className="hidden sm:flex gap-6 list-none">
        <li><a href="#about" className="text-fg-2 no-underline text-[0.78rem] font-medium hover:text-fg-1 transition-colors">About</a></li>
        <li><a href="#skills" className="text-fg-2 no-underline text-[0.78rem] font-medium hover:text-fg-1 transition-colors">Skills</a></li>
        <li><a href="#projects" className="text-fg-2 no-underline text-[0.78rem] font-medium hover:text-fg-1 transition-colors">Projects</a></li>
        <li><a href="#contact" className="text-fg-2 no-underline text-[0.78rem] font-medium hover:text-fg-1 transition-colors">Contact</a></li>
      </ul>
      <a href="#contact" className="py-1.5 px-4 bg-accent-cy text-bg rounded-md no-underline text-[0.78rem] font-bold hover:opacity-90 transition-opacity">
        Hire Me
      </a>
    </nav>
  );
}
