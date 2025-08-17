import { ArrowUpRightIcon } from "lucide-react";

function Subsection() {
  return (
    <>
    <section id="">
      <div className="w-full flex flex-col items-center justify-center py-20">
        <div className="flex flex-col items-center">
          <div className="flex flex-row items-center justify-center flex-wrap gap-2 mb-8">
            <span className="text-5xl sm:text-7xl md:text-8xl text-white">LET'S</span>
            <span className="text-5xl sm:text-7xl md:text-8xl text-white">CREATE</span>
          </div>
          <div className="text-5xl sm:text-7xl md:text-8xl text-white mb-10 text-center">GREAT THINGS.</div>
          <button className="px-6 py-3 rounded-full border border-white/20 bg-black/60 text-white text-base font-semibold flex items-center gap-2 shadow-md hover:bg-white/10 transition">
            Drop me a line <span className="text-lg">✉️</span>
          </button>
        </div>
      </div>

      <nav className="m-auto mx-auto max-w-5xl py-3 sm:px-24 bg-gradient-to-r from-black via-purple-900/40 to-black flex flex-col sm:flex-row items-center sm:justify-between border-b border-white/10">
        <ul className="flex items-center gap-6 text-white/80 text-sm font-medium justify-center w-full sm:w-auto mb-2 sm:mb-0">
          <li><a href="#" className="hover:text-pink-400 transition flex items-center gap-1">Twitter <ArrowUpRightIcon size={16} className="text-pink-400" /></a></li>
          <li><a href="#" className="hover:text-pink-400 transition flex items-center gap-1">LinkedIn <ArrowUpRightIcon size={16} className="text-pink-400" /></a></li>
          <li><a href="#" className="hover:text-pink-400 transition flex items-center gap-1">Youtube <ArrowUpRightIcon size={16} className="text-pink-400" /></a></li>
          <li><a href="#" className="hover:text-pink-400 transition flex items-center gap-1">TikTok <ArrowUpRightIcon size={16} className="text-pink-400" /></a></li>
          <li><a href="#" className="hover:text-pink-400 transition flex items-center gap-1">Facebook <ArrowUpRightIcon size={16} className="text-pink-400" /></a></li>
        </ul>
        <span className="text-white/60 text-xs font-normal text-center sm:text-right w-full sm:w-auto">Theresaportfolio © 2025</span>
      </nav>
      </section>
    </>
  );
}

export default Subsection;