import { motion } from 'framer-motion';
import { Shield, Brain, Terminal, Server } from 'lucide-react';
import Counter from './ui/Counter';

const pillars = [
  {
    icon: Shield,
    title: 'SaaS & Security Isolation',
    desc: 'Architecting zero-knowledge encryption, JWT-based tenant scopes, and multi-tier authentication workflows for enterprise reliability.',
    color: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/5',
  },
  {
    icon: Brain,
    title: 'AI / Machine Learning',
    desc: 'Developing computer vision pipelines (OpenCV), predictive modeling (Scikit-Learn), and processing live biomedical signals (rPPG/POS).',
    color: 'text-indigo-400 border-indigo-500/20 bg-indigo-500/5',
  },
  {
    icon: Server,
    title: 'Backend Engineering',
    desc: 'Offloading processing tasks via distributed tasks (Celery/Redis) and orchestrating high-performance APIs (FastAPI/Django).',
    color: 'text-violet-400 border-violet-500/20 bg-violet-500/5',
  },
  {
    icon: Terminal,
    title: 'Full Stack Integration',
    desc: 'Bringing frontend reactivity (React/Tailwind) together with scalable storage backends (PostgreSQL/Neon) and real-time sockets.',
    color: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5',
  },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  } as const;

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-dark-900">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3">About Me</h2>
          <p className="text-3xl md:text-5xl font-extrabold text-white font-sans">
            Crafting Secure, High-Performance Systems
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-20">
          
          {/* Text Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6 text-gray-300 text-lg leading-relaxed"
          >
            <p>
              I am a <strong className="text-white">Full-Stack Software Engineer</strong> with a strong foundation in computer science and a passion for engineering scalable, secure systems. My engineering philosophy revolves around combining robust backend architectures with fluid, responsive user experiences and data-driven intelligence.
            </p>
            <p>
              During my engineering journey at Anurag University, I have focused on designing real-world solutions. From building <strong className="text-white">TenantVault</strong>, a production-grade multi-tenant SaaS platform featuring zero-knowledge AES-128 document encryption, to developing a non-contact heart and respiratory rate estimator via standard webcams, I thrive on solving complex engineering challenges.
            </p>
            <p>
              I specialize in combining modern backend frameworks like <strong className="text-white">FastAPI, Django, and Celery</strong> with state-of-the-art frontends using <strong className="text-white">React.js</strong>. I am certified by Microsoft and Oracle, with deep interests in Cloud Architecture, system security, and AI integrations.
            </p>
          </motion.div>

          {/* Stats Cards (with Gradient Borders and Counters) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {/* Card 1: Degree */}
            <div className="gradient-border-card p-6 flex flex-col justify-center min-h-[145px] hover:-translate-y-1.5 transition-transform duration-300 shadow-lg shadow-black/25">
              <span className="text-gray-400 text-xs font-semibold tracking-wider uppercase mb-1">
                Degree
              </span>
              <span className="text-white text-xl md:text-2xl font-bold tracking-tight mb-1">
                B.Tech CSE
              </span>
              <span className="text-indigo-300 text-xs font-medium">
                Anurag University
              </span>
            </div>

            {/* Card 2: Standing (Counter) */}
            <div className="gradient-border-card p-6 flex flex-col justify-center min-h-[145px] hover:-translate-y-1.5 transition-transform duration-300 shadow-lg shadow-black/25">
              <span className="text-gray-400 text-xs font-semibold tracking-wider uppercase mb-1">
                Academic Standing
              </span>
              <span className="text-white text-xl md:text-2xl font-bold tracking-tight mb-1">
                <Counter value={7.29} decimals={2} /> CGPA
              </span>
              <span className="text-indigo-300 text-xs font-medium">
                Out of 10.0
              </span>
            </div>

            {/* Card 3: Major Projects */}
            <div className="gradient-border-card p-6 flex flex-col justify-center min-h-[145px] hover:-translate-y-1.5 transition-transform duration-300 shadow-lg shadow-black/25">
              <span className="text-gray-400 text-xs font-semibold tracking-wider uppercase mb-1">
                Major Projects
              </span>
              <span className="text-white text-base md:text-lg font-bold tracking-tight mb-1 leading-snug">
                TenantVault & FaceVitals
              </span>
              <span className="text-indigo-300 text-xs font-medium">
                SaaS & Computer Vision
              </span>
            </div>

            {/* Card 4: Certifications (Counter) */}
            <div className="gradient-border-card p-6 flex flex-col justify-center min-h-[145px] hover:-translate-y-1.5 transition-transform duration-300 shadow-lg shadow-black/25">
              <span className="text-gray-400 text-xs font-semibold tracking-wider uppercase mb-1">
                Certifications
              </span>
              <span className="text-white text-xl md:text-2xl font-bold tracking-tight mb-1">
                <Counter value={6} /> Professional
              </span>
              <span className="text-indigo-300 text-xs font-medium">
                Azure, OCI, Cisco, AWS
              </span>
            </div>
          </motion.div>
        </div>

        {/* Pillars / Technical Core Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {pillars.map((pillar, idx) => (
            <motion.div
              variants={itemVariants}
              key={idx}
              className={`gradient-border-card p-8 flex flex-col h-full hover:-translate-y-1.5 transition-transform duration-300 shadow-lg shadow-black/25`}
            >
              <div className="p-3 w-fit rounded-xl bg-white/5 mb-6 border border-white/5 text-indigo-400">
                <pillar.icon className="w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3 tracking-wide">{pillar.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-grow">{pillar.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
