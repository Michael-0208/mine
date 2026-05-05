import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Boxes, Zap, CheckCircle2, XCircle } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Code2,
      label: "7+ Years",
      description: "Building production systems"
    },
    {
      icon: Boxes,
      label: "System First",
      description: "Architecture over implementation"
    },
    {
      icon: Zap,
      label: "Real Impact",
      description: "Powering 1000+ businesses"
    }
  ];

  const dos = [
    "Boundaries, contracts, and SLOs you can measure — not wishful diagrams.",
    "Explicit ownership, runbooks, and failure modes — operable from day one.",
    "Incremental migrations — not caffeine-fueled big-bang rewrites.",
  ];

  const donts = [
    "Shipping on hope, vendor promises, and \"it should be fine.\"",
    "Permanent crunch disguised as a delivery strategy.",
    "Treating \"we'll refactor later\" like a funded backlog item.",
  ];

  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0f0a1a] to-[#0a0a0f]" />
      
      <div className="relative z-10 max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-sm uppercase tracking-wider text-purple-400" style={{ fontWeight: 600 }}>About</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 text-white" style={{ fontWeight: 700 }}>
            Not your average developer
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I don't just write code-I architect systems that scale. With 7+ years focused on backend engineering,
            I specialize in building the complex, business-critical systems that power modern SaaS platforms.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl hover:border-purple-500/50 transition-all duration-300"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-cyan-600/0 group-hover:from-purple-600/10 group-hover:to-cyan-600/10 rounded-2xl transition-all duration-300" />
              
              <div className="relative">
                <div className="mb-4 inline-flex p-3 bg-purple-500/10 rounded-xl group-hover:bg-purple-500/20 transition-colors">
                  <item.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl mb-2 text-white" style={{ fontWeight: 700 }}>
                  {item.label}
                </h3>
                <p className="text-gray-400">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Do's & Don'ts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="relative p-10 md:p-12 mb-16 bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl"
        >
          <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-emerald-500/25 rounded-tr-3xl" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-rose-500/25 rounded-bl-3xl" />

          <div className="relative">
            <h3 className="text-2xl md:text-3xl mb-3 text-white text-center" style={{ fontWeight: 700 }}>
              Do&apos;s &amp; Don&apos;ts
            </h3>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              I fix architectures built on hope, caffeine, and &quot;we&apos;ll refactor later.&quot;
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" aria-hidden />
                  <span className="text-lg text-emerald-400/95" style={{ fontWeight: 700 }}>
                    Do&apos;s
                  </span>
                </div>
                <ul className="space-y-4">
                  {dos.map((line) => (
                    <li key={line} className="flex gap-3 text-gray-300 text-sm md:text-base leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-400/80 shrink-0" aria-hidden />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <XCircle className="w-5 h-5 text-rose-400/90 shrink-0" aria-hidden />
                  <span className="text-lg text-rose-400/90" style={{ fontWeight: 700 }}>
                    Don&apos;ts
                  </span>
                </div>
                <ul className="space-y-4">
                  {donts.map((line) => (
                    <li key={line} className="flex gap-3 text-gray-300 text-sm md:text-base leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-rose-400/70 shrink-0" aria-hidden />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative p-10 md:p-12 bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl"
        >
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-purple-500/30 rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-cyan-500/30 rounded-br-3xl" />
          
          <div className="relative">
            <h3 className="text-2xl md:text-3xl mb-6 text-white" style={{ fontWeight: 700 }}>
              What makes me different?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 mt-2 bg-purple-500 rounded-full flex-shrink-0" />
                  <div>
                    <p className="text-white mb-1" style={{ fontWeight: 600 }}>Systems Architect, not just a coder</p>
                    <p className="text-gray-400 text-sm">I design solutions that consider scalability, maintainability, and business logic complexity from day one.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 bg-purple-500 rounded-full flex-shrink-0" />
                  <div>
                    <p className="text-white mb-1" style={{ fontWeight: 600 }}>Deep domain expertise</p>
                    <p className="text-gray-400 text-sm">Multi-tenant SaaS, POS systems, inventory management, pricing engines—I've built them at scale.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 mt-2 bg-cyan-500 rounded-full flex-shrink-0" />
                  <div>
                    <p className="text-white mb-1" style={{ fontWeight: 600 }}>Performance-obsessed</p>
                    <p className="text-gray-400 text-sm">Every query, every cache strategy, every optimization matters when you're handling millions of requests.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 bg-cyan-500 rounded-full flex-shrink-0" />
                  <div>
                    <p className="text-white mb-1" style={{ fontWeight: 600 }}>Future-proof mindset</p>
                    <p className="text-gray-400 text-sm">I build systems that are easy to extend, refactor, and scale as your business grows.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
