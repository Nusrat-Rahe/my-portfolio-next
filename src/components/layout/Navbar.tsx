export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 shadow-[0_10px_30px_rgba(16,42,67,0.08)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="bg-gradient-to-r from-teal-700 via-cyan-700 to-orange-600 bg-clip-text text-2xl font-bold tracking-tight text-transparent"
        >
          Nusrat Jahan Rahe
        </a>

        <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          <a href="#home" className="transition hover:text-teal-700">
            Home
          </a>
          <a href="#about" className="transition hover:text-teal-700">
            About
          </a>
          <a href="#education" className="transition hover:text-teal-700">
            Education
          </a>
          <a href="#skills" className="transition hover:text-teal-700">
            Skills
          </a>
          <a href="#projects" className="transition hover:text-teal-700">
            Projects
          </a>
          <a href="#contact" className="transition hover:text-teal-700">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
