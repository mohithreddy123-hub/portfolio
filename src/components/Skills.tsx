import { motion } from 'framer-motion';
import { Layout, Server, Database, Cloud, Brain, ShieldAlert } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Layout,
    color: 'from-cyan-500/20 to-blue-500/20 text-cyan-400',
    skills: ['React.js', 'HTML5 & CSS3', 'Tailwind CSS', 'Streamlit', 'Responsive Design', 'SaaS Client Interfaces'],
  },
  {
    title: 'Backend Engineering',
    icon: Server,
    color: 'from-indigo-500/20 to-purple-500/20 text-indigo-400',
    skills: ['FastAPI', 'Django & DRF', 'Flask', 'Django Channels', 'Celery Workers', 'Daphne / Web Sockets', 'Redis Caching'],
  },
  {
    title: 'Databases & Storage',
    icon: Database,
    color: 'from-emerald-500/20 to-teal-500/20 text-emerald-400',
    skills: ['PostgreSQL', 'MySQL', 'SQLite', 'Neon DB (Serverless)', 'Cloudinary Media Storage', 'Schema Migration'],
  },
  {
    title: 'DevOps & Cloud',
    icon: Cloud,
    color: 'from-amber-500/20 to-orange-500/20 text-amber-400',
    skills: ['Git & GitHub', 'Vercel Deployment', 'Render Hosting', 'Docker (Job Simulations)', 'AWS Architecture', 'CI/CD Pipelines'],
  },
  {
    title: 'Data & Machine Learning',
    icon: Brain,
    color: 'from-pink-500/20 to-rose-500/20 text-pink-400',
    skills: ['Python (A+ Grade Training)', 'NumPy & Pandas', 'SciPy & Scikit-learn', 'OpenCV (Computer Vision)', 'Matplotlib', 'rPPG Signal Analysis'],
  },
  {
    title: 'Architecture & Security',
    icon: ShieldAlert,
    color: 'from-violet-500/20 to-fuchsia-500/20 text-violet-400',
    skills: ['RESTful API Design', 'JWT Token Auth', 'Role-Based Access (RBAC)', 'Multi-Tenancy Isolation', 'Zero-Knowledge Encryption', 'AuditLog Tracking'],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  } as const;

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-dark-950">
      {/* Glow circles */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3">Skills</h2>
          <p className="text-3xl md:text-5xl font-extrabold text-white font-sans">
            Technical Expertise & Tooling
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              variants={cardVariants}
              key={idx}
              className="glass-card glass-card-hover p-8 rounded-2xl border border-white/5 flex flex-col h-full group"
            >
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-tr ${category.color.split(' ')[0]} ${category.color.split(' ')[1]} border border-white/5`}>
                  <category.icon className={`w-6 h-6 ${category.color.split(' ')[2]}`} />
                </div>
                <h3 className="text-white font-bold text-lg tracking-wide group-hover:text-indigo-300 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              {/* Skills List tags */}
              <div className="flex flex-wrap gap-2.5 mt-auto">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 hover:bg-white/10 text-gray-300 border border-white/5 hover:border-white/15 hover:text-white transition-all duration-200 select-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
