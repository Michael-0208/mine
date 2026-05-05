import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router';
import { ArrowRight, Sparkles } from 'lucide-react';
import { upLevoPosProject } from '../data/projects';

export function ProjectsTeaser() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="work" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0f0514] to-[#0a0a0f]" />

      <div className="relative z-10 max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <span className="text-sm uppercase tracking-wider text-purple-400" style={{ fontWeight: 600 }}>
              Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 text-white" style={{ fontWeight: 700 }}>
            Systems that deliver results
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Product ownership, architecture, and delivery — including my flagship multi-tenant POS platform.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative p-8 md:p-10 mb-10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl text-left"
        >
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
            <div className="inline-flex p-3 bg-fuchsia-500/15 rounded-xl border border-fuchsia-500/25 shrink-0">
              <Sparkles className="w-6 h-6 text-fuchsia-300" aria-hidden />
            </div>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-wider text-fuchsia-400 mb-1" style={{ fontWeight: 600 }}>
                Featured · Founder
              </p>
              <h3 className="text-2xl text-white mb-2" style={{ fontWeight: 700 }}>
                {upLevoPosProject.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Multi-tenant POS + inventory with an AI-assisted invoice image → stock workflow (React, Laravel 12, FastAPI).
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              to="/portfolio/uplevo-pos"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white hover:shadow-lg hover:shadow-fuchsia-500/30 transition-all"
              style={{ fontWeight: 600 }}
            >
              Read the case study
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/5 border border-white/15 text-white hover:bg-white/10 hover:border-purple-500/40 transition-all"
              style={{ fontWeight: 600 }}
            >
              View all projects
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-center"
        >
          <Link
            to="/portfolio"
            className="text-purple-400 hover:text-purple-300 text-sm uppercase tracking-wider transition-colors"
            style={{ fontWeight: 600 }}
          >
            Full portfolio →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
