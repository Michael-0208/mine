import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Server, Boxes, Users, Brain, Database, Zap } from 'lucide-react';

export function Expertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const expertiseAreas = [
    {
      icon: Server,
      title: "Backend Development",
      description: "Laravel, PHP, FastAPI—crafting robust APIs and business logic that powers complex applications.",
      gradient: "from-purple-600/20 to-purple-900/20"
    },
    {
      icon: Boxes,
      title: "System Architecture",
      description: "Designing scalable, maintainable systems with proper separation of concerns and clean abstractions.",
      gradient: "from-cyan-600/20 to-cyan-900/20"
    },
    {
      icon: Users,
      title: "Multi-Tenant SaaS",
      description: "Building isolated, secure environments that serve thousands of organizations from a single codebase.",
      gradient: "from-purple-600/20 to-cyan-900/20"
    },
    {
      icon: Brain,
      title: "AI Integrations",
      description: "Implementing OCR pipelines, LLM integrations, and intelligent data extraction systems.",
      gradient: "from-pink-600/20 to-purple-900/20"
    },
    {
      icon: Database,
      title: "Database Optimization",
      description: "Query optimization, indexing strategies, and data modeling for high-performance applications.",
      gradient: "from-blue-600/20 to-cyan-900/20"
    },
    {
      icon: Zap,
      title: "Performance Engineering",
      description: "Caching strategies, background jobs, and optimization techniques for lightning-fast applications.",
      gradient: "from-yellow-600/20 to-orange-900/20"
    }
  ];

  return (
    <section id="expertise" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
            <span className="text-sm uppercase tracking-wider text-cyan-400" style={{ fontWeight: 600 }}>Core Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 text-white" style={{ fontWeight: 700 }}>
            Built for complexity
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Specialized skills honed over years of building production systems at scale
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10">
                {/* Animated gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  initial={false}
                  animate={hoveredCard === index ? { scale: 1.1 } : { scale: 1 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="mb-6 inline-flex p-4 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-xl border border-white/10"
                    animate={hoveredCard === index ? { 
                      scale: 1.1,
                      rotate: [0, 5, -5, 0]
                    } : { scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <area.icon className="w-7 h-7 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl mb-3 text-white group-hover:text-purple-200 transition-colors" style={{ fontWeight: 700 }}>
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {area.description}
                  </p>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-purple-500/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
