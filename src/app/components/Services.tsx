import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Boxes, Workflow, Brain, CheckCircle } from 'lucide-react';

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Code2,
      title: "Backend Development",
      description: "Full-stack backend solutions with Laravel, PHP, and FastAPI",
      features: [
        "RESTful API design & implementation",
        "Complex business logic architecture",
        "Third-party integrations"
      ]
    },
    {
      icon: Boxes,
      title: "System Architecture",
      description: "Scalable architecture design for growing businesses",
      features: [
        "Multi-tenant SaaS architecture",
        "Microservices design",
        "Database schema optimization"
      ]
    },
    {
      icon: Workflow,
      title: "API Development",
      description: "Production-ready APIs built for performance and reliability",
      features: [
        "GraphQL & REST endpoints",
        "Authentication & authorization",
        "Rate limiting & caching"
      ]
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Intelligent features powered by modern AI technologies",
      features: [
        "OCR & document processing",
        "LLM pipeline integration",
        "Automated data extraction"
      ]
    }
  ];

  return (
    <section id="services" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0a0a14] to-[#0a0a0f]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
            <span className="text-sm uppercase tracking-wider text-purple-400" style={{ fontWeight: 600 }}>Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 text-white" style={{ fontWeight: 700 }}>
            What I can build for you
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Flexible engagement models tailored to your project needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-8 bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-cyan-600/0 group-hover:from-purple-600/5 group-hover:to-cyan-600/5 transition-all duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 inline-flex p-4 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-2xl border border-white/10 group-hover:border-purple-500/30 transition-colors">
                    <service.icon className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl mb-3 text-white" style={{ fontWeight: 700 }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative p-10 bg-gradient-to-r from-purple-600/10 via-cyan-600/10 to-purple-600/10 border border-purple-500/20 rounded-3xl backdrop-blur-sm text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-cyan-600/5 rounded-3xl" />
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl mb-4 text-white" style={{ fontWeight: 700 }}>
              Flexible Pricing
            </h3>
            <p className="text-lg text-gray-300 mb-2">
              Project-based and retainer options available
            </p>
            <p className="text-gray-400">
              Pricing tailored to project scope, complexity, and your region (US/UK/EU rates)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
