import { Link } from 'react-router';

export function SiteFooter() {
  return (
    <footer className="relative py-12 px-6 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] to-[#050508]" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © 2026 Backend Engineer. Built with React & Tailwind CSS.
            </p>
          </div>
          <div className="flex gap-6">
            <Link to="/#about" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
              About
            </Link>
            <Link to="/portfolio" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
              Work
            </Link>
            <Link to="/#contact" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
