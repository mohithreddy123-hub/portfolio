import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Download, ArrowRight, Code2, Cpu, Server, Settings } from 'lucide-react';
import ParticlesBg from './ui/ParticlesBg';
import Magnetic from './ui/Magnetic';

const titles = [
  'Full-Stack Developer',
  'SaaS Architect',
  'AI & ML Specialist',
];

const floatingBadges = [
  { text: 'Python', icon: Cpu, top: '25%', left: '10%', duration: 9, delay: 0 },
  { text: 'React.js', icon: Code2, top: '30%', right: '10%', duration: 12, delay: 2 },
  { text: 'FastAPI', icon: Settings, bottom: '30%', left: '12%', duration: 10, delay: 1 },
  { text: 'Django', icon: Server, bottom: '25%', right: '15%', duration: 13, delay: 3 },
];

const Github = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Decorative ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-indigo-500/10 blur-[80px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] h-[350px] rounded-full bg-cyan-500/10 blur-[80px] animate-pulse-slow pointer-events-none" />

      {/* Grid mesh background */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-40" />
      <div className="absolute inset-0 grid-bg-glow pointer-events-none" />

      {/* Canvas particles */}
      <ParticlesBg />

      {/* Floating technology icons side-decoration (Desktop only) */}
      {floatingBadges.map((badge, idx) => (
        <motion.div
          key={idx}
          style={{
            position: 'absolute',
            top: badge.top,
            left: badge.left,
            right: badge.right,
            bottom: badge.bottom,
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: badge.duration,
            repeat: Infinity,
            delay: badge.delay,
            ease: 'easeInOut',
          }}
          className="hidden lg:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/5 text-gray-400 font-mono text-xs select-none shadow-lg shadow-black/30 backdrop-blur-sm"
        >
          <badge.icon className="w-4 h-4 text-indigo-400" />
          <span>{badge.text}</span>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Top greeting badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-xs font-semibold text-indigo-300 tracking-wider uppercase">
            Available for Opportunities
          </span>
        </motion.div>

        {/* Large premium heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 font-sans leading-none"
        >
          Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">Karnati Mohith Reddy</span>
        </motion.h1>

        {/* Rotating titles container */}
        <div className="h-12 md:h-16 flex items-center justify-center mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="text-xl md:text-3xl font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-cyan-300 text-glow-indigo"
            >
              {titles[index]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Short intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-base md:text-xl max-w-2xl mb-12 leading-relaxed"
        >
          I architect and ship secure, production-grade web systems and AI/ML applications. 
          Specialized in multi-tenant SaaS infrastructures, zero-knowledge encryption, 
          and computer vision workflows.
        </motion.p>

        {/* Action Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto mb-16"
        >
          <Magnetic>
            <button
              onClick={handleScrollToContact}
              className="group px-8 py-4 w-full sm:w-auto rounded-xl font-bold tracking-wide text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_30px_rgba(99,102,241,0.4)] flex items-center justify-center gap-2.5"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Magnetic>

          <Magnetic>
            <a
              href="/Karnati_Mohith_Reddy_Resume.pdf"
              download="Karnati_Mohith_Reddy_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 w-full sm:w-auto rounded-xl font-bold tracking-wide text-gray-300 hover:text-white glass-card hover:bg-white/10 hover:border-white/25 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </Magnetic>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center gap-6"
        >
          <a
            href="https://github.com/mohithreddy123-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 hover:scale-110 transition-all duration-300"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohith-reddy-k"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 hover:scale-110 transition-all duration-300"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:mohithreddy382@gmail.com"
            className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 hover:scale-110 transition-all duration-300"
            aria-label="Send Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
