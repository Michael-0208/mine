import { motion } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import type { Project } from '../data/projects';

type ProjectCardProps = {
  project: Project;
  index: number;
  isInView: boolean;
};

export function ProjectCard({ project, index, isInView }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const detailPath = project.slug ? `/portfolio/${project.slug}` : undefined;

  const inner = (
    <>
      <div className="relative h-full p-8 bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20">
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500`}
          animate={hovered ? { scale: 1.2 } : { scale: 1 }}
          transition={{ duration: 0.7 }}
        />

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-6 gap-3">
            <div className="min-w-0">
              {project.role ? (
                <span className="inline-block mb-2 text-xs uppercase tracking-wider text-fuchsia-400/90" style={{ fontWeight: 600 }}>
                  {project.role}
                </span>
              ) : null}
              <h3 className="text-2xl text-white pr-2" style={{ fontWeight: 700 }}>
                {project.title}
              </h3>
            </div>
            {detailPath ? (
              <motion.div
                animate={hovered ? { x: 5, y: -5 } : { x: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0"
              >
                <ArrowUpRight className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
              </motion.div>
            ) : null}
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                <span className="text-xs uppercase tracking-wider text-red-400" style={{ fontWeight: 600 }}>
                  Problem
                </span>
              </div>
              <p className="text-gray-400 text-sm pl-3.5">{project.problem}</p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                <span className="text-xs uppercase tracking-wider text-cyan-400" style={{ fontWeight: 600 }}>
                  Solution
                </span>
              </div>
              <p className="text-gray-400 text-sm pl-3.5">{project.solution}</p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                <span className="text-xs uppercase tracking-wider text-green-400" style={{ fontWeight: 600 }}>
                  Outcome
                </span>
              </div>
              <p className="text-gray-300 text-sm pl-3.5" style={{ fontWeight: 600 }}>
                {project.outcome}
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-sm text-green-300" style={{ fontWeight: 600 }}>
              {project.metrics}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300 group-hover:border-purple-500/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative"
    >
      {detailPath ? (
        <Link to={detailPath} className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/60 rounded-3xl">
          {inner}
        </Link>
      ) : (
        inner
      )}
    </motion.div>
  );
}
