import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { ProjectCard } from '../components/ProjectCard';
import { portfolioProjects } from '../data/projects';

export function PortfolioPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0f0514] to-[#0a0a0f] min-h-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors text-sm mb-8"
            style={{ fontWeight: 600 }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
          <div className="inline-block mb-4">
            <span className="text-sm uppercase tracking-wider text-purple-400" style={{ fontWeight: 600 }}>
              Portfolio
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl mb-4 text-white" style={{ fontWeight: 700 }}>
            Featured work &amp; systems
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            Case studies and shipped platforms — including <span className="text-gray-300">UpLevo POS</span>, which I
            founded and architected end-to-end.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" ref={ref}>
          {portfolioProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </div>
  );
}
