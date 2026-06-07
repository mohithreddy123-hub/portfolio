import { motion } from 'framer-motion';
import { Award, ShieldAlert, Cpu, Sparkles, Network, Cloud, GraduationCap } from 'lucide-react';

const certifications = [
  {
    title: 'OCI Generative AI Professional',
    issuer: 'Oracle Certified Professional',
    year: '2025',
    icon: Sparkles,
    desc: 'Deep expertise in OCI generative AI foundations, large language models (LLMs), fine-tuning, RAG (Retrieval-Augmented Generation) pipelines, and framework structures.',
    color: 'from-orange-500/20 to-rose-500/20 text-orange-400 border-orange-500/20 shadow-orange-500/5',
  },
  {
    title: 'Azure AI Fundamentals',
    issuer: 'Microsoft',
    year: '2025',
    icon: Cpu,
    desc: 'Demonstrates foundational knowledge of machine learning, computer vision, natural language processing, and conversational AI workloads on the Microsoft Azure cloud.',
    color: 'from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500/20 shadow-blue-500/5',
  },
  {
    title: 'AI Fluency: Framework & Foundations',
    issuer: 'Anthropic',
    year: '2025',
    icon: ShieldAlert,
    desc: 'Comprehensive understanding of Anthropic model families, prompt engineering methodologies, enterprise AI safety, and structural scaling principles.',
    color: 'from-amber-600/20 to-yellow-500/20 text-amber-400 border-amber-600/20 shadow-amber-600/5',
  },
  {
    title: 'AWS Solutions Architecture Simulation',
    issuer: 'Forage',
    year: '2025',
    icon: Cloud,
    desc: 'Hands-on practice designing highly available, fault-tolerant architectures, VPC networking configuration, and serverless compute scaling (Lambda/ECS).',
    color: 'from-yellow-500/20 to-orange-400/20 text-yellow-400 border-yellow-500/20 shadow-yellow-500/5',
  },
  {
    title: 'Cisco Python Essentials 1 & 2',
    issuer: 'Cisco Networking Academy',
    year: '2025',
    icon: Network,
    desc: 'Rigorous object-oriented programming, modules, exceptions, and algorithms in Python tailored for networking and systems workflows.',
    color: 'from-teal-500/20 to-emerald-500/20 text-teal-400 border-teal-500/20 shadow-teal-500/5',
  },
  {
    title: 'Full Stack Python Training (A+ Grade)',
    issuer: 'Teks Academy',
    year: '2026',
    icon: GraduationCap,
    desc: 'Full-time real-world training in web engineering using Python stacks (Django/Flask), database relations (PostgreSQL), and modern frontends.',
    color: 'from-purple-500/20 to-indigo-500/20 text-purple-400 border-purple-500/20 shadow-purple-500/5',
  },
];

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  } as const;

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-dark-900">
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-indigo-500/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3">Qualifications</h2>
          <p className="text-3xl md:text-5xl font-extrabold text-white font-sans">
            Professional Certifications
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, idx) => (
            <motion.div
              variants={cardVariants}
              key={idx}
              className={`glass-card p-6 md:p-8 rounded-2xl border ${cert.color.split(' ')[3]} flex flex-col justify-between hover:scale-[1.02] hover:shadow-lg transition-all duration-300 group`}
            >
              <div>
                {/* Header Icon + Year */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-tr ${cert.color.split(' ')[0]} ${cert.color.split(' ')[1]} border border-white/5`}>
                    <cert.icon className={`w-6 h-6 ${cert.color.split(' ')[2]}`} />
                  </div>
                  <span className="text-gray-400 text-xs font-bold font-mono bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                    {cert.year}
                  </span>
                </div>

                {/* Issuer */}
                <span className="text-indigo-400 text-[10px] font-bold uppercase tracking-wider block mb-1">
                  {cert.issuer}
                </span>

                {/* Title */}
                <h3 className="text-white font-bold text-lg mb-3 tracking-wide group-hover:text-indigo-300 transition-colors duration-300">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {cert.desc}
                </p>
              </div>

              {/* Verified Digital Seal Badge */}
              <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                <span className="text-[10px] text-gray-500 font-semibold tracking-wider flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-gray-500" />
                  VERIFIED CREDENTIAL
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
