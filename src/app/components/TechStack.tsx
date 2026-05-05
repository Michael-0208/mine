import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = [
    { name: "Laravel", category: "Backend" },
    { name: "PHP", category: "Language" },
    { name: "MySQL", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Redis", category: "Caching" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "FastAPI", category: "Backend" },
    { name: "Python", category: "Language" },
    { name: "REST API", category: "Architecture" },
    { name: "GraphQL", category: "Architecture" },
    { name: "JWT", category: "Security" },
    { name: "RBAC", category: "Security" },
    { name: "Git", category: "Version Control" },
    { name: "Queue Workers", category: "Background Jobs" },
    { name: "OpenAI API", category: "AI/ML" },
    { name: "Tesseract OCR", category: "AI/ML" },
    { name: "Nginx", category: "Server" }
  ];

  return (
    <section id="tech-stack" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />

      <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
            <span className="text-sm uppercase tracking-wider text-cyan-400" style={{ fontWeight: 600 }}>Technology Stack</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 text-white" style={{ fontWeight: 700 }}>
            Tools & Technologies
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Modern, battle-tested technologies for building robust systems
          </p>
        </motion.div>

        {/* Animated Grid */}
        <div className="relative">
          {/* Main Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.03,
                  ease: "easeOut"
                }}
                className="group relative"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="relative p-6 bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-cyan-600/0 group-hover:from-purple-600/10 group-hover:to-cyan-600/10 rounded-2xl transition-all duration-300" />
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <div className="text-white mb-2" style={{ fontWeight: 700 }}>
                      {tech.name}
                    </div>
                    <div className="text-xs text-gray-500 group-hover:text-purple-400 transition-colors">
                      {tech.category}
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Floating particles effect */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-purple-500/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400">
            Always learning and adapting to new technologies that deliver value
          </p>
        </motion.div>
      </div>
    </section>
  );
}
