import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Target, Lightbulb, Code, Rocket } from 'lucide-react';

export function HowIWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const principles = [
    {
      icon: Target,
      title: "I design systems, not just endpoints",
      description: "Before writing a single line of code, I map out the architecture, data flows, and potential scalability challenges."
    },
    {
      icon: Lightbulb,
      title: "I optimize for scale from day one",
      description: "Whether it's caching strategies, database indexing, or queue architecture—I build with growth in mind."
    },
    {
      icon: Code,
      title: "I focus on long-term maintainability",
      description: "Clean code, proper abstractions, and comprehensive documentation ensure your system can evolve."
    },
    {
      icon: Rocket,
      title: "I prioritize business outcomes",
      description: "Technology serves the business. Every technical decision is tied to real-world impact and ROI."
    }
  ];

  return (
    <section id="how-i-work" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
            <span className="text-sm uppercase tracking-wider text-cyan-400" style={{ fontWeight: 600 }}>Philosophy</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 text-white" style={{ fontWeight: 700 }}>
            How I approach problems
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A mindset honed through years of building production systems
          </p>
        </motion.div>

        {/* Timeline-style layout */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/0 via-purple-500/50 to-purple-500/0" />

          <div className="space-y-16">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="flex-1 md:w-1/2">
                  <div className={`group relative p-8 bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl hover:border-purple-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10 ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}>
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-cyan-600/0 group-hover:from-purple-600/5 group-hover:to-cyan-600/5 rounded-2xl transition-all duration-500" />
                    
                    <div className="relative">
                      <h3 className="text-xl mb-3 text-white" style={{ fontWeight: 700 }}>
                        {principle.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Icon in center */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-2xl shadow-lg shadow-purple-500/50"
                  >
                    <principle.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-2xl blur-xl opacity-50" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1 md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-8 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 border border-purple-500/20 rounded-2xl backdrop-blur-sm">
            <p className="text-lg text-gray-300 mb-4">
              <span className="text-2xl text-white block mb-2" style={{ fontWeight: 700 }}>
                The difference?
              </span>
              You get a system that doesn't just work today—it scales tomorrow.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
