import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Layout, Server, Database, Cloud, ShieldAlert, Brain } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    color: 'from-blue-500/20 to-indigo-500/20 text-blue-400',
    skills: ['Python', 'JavaScript'],
  },
  {
    title: 'Frontend',
    icon: Layout,
    color: 'from-cyan-500/20 to-blue-500/20 text-cyan-400',
    skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Streamlit'],
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'from-indigo-500/20 to-purple-500/20 text-indigo-400',
    skills: ['Django', 'Django REST Framework', 'Flask', 'FastAPI', 'Django Channels', 'Celery', 'Daphne', 'Redis'],
  },
  {
    title: 'Databases',
    icon: Database,
    color: 'from-emerald-500/20 to-teal-500/20 text-emerald-400',
    skills: ['PostgreSQL', 'MySQL', 'SQLite'],
  },
  {
    title: 'DevOps & Cloud',
    icon: Cloud,
    color: 'from-amber-500/20 to-orange-500/20 text-amber-400',
    skills: ['Git', 'GitHub', 'Vercel', 'Render', 'Cloudinary'],
  },
  {
    title: 'Architecture',
    icon: ShieldAlert,
    color: 'from-violet-500/20 to-fuchsia-500/20 text-violet-400',
    skills: ['REST APIs', 'JWT Authentication', 'RBAC', 'Multi-Tenancy', 'WebSockets', 'Responsive Design', 'Scalable Systems'],
  },
  {
    title: 'Data & ML',
    icon: Brain,
    color: 'from-pink-500/20 to-rose-500/20 text-pink-400',
    skills: ['NumPy', 'Pandas', 'SciPy', 'Scikit-learn', 'OpenCV', 'Matplotlib'],
  },
];

// Dictionary of explanations for interactive tech stack reveal
const skillDescriptions = {
  Python: 'Core programming language used for scripting, AI model training, and robust backend engineering.',
  JavaScript: 'Enables client-side reactivity and handles user events across frontend dashboards.',
  'React.js': 'Builds highly componentized interfaces using virtual DOM and state synchronization.',
  HTML5: 'Structures semantic browser content ensuring full accessibility.',
  CSS3: 'Handles layout layout, custom styling sheets, and core style sheets.',
  'Tailwind CSS': 'Utility-first styling utility used for high-fidelity custom design systems.',
  Streamlit: 'Rapid prototyping of analytical, data-heavy dashboard panels.',
  Django: 'Battery-included backend framework used to design enterprise-grade secure architectures.',
  'Django REST Framework': 'Builds standardized REST APIs with serializers and class-based viewsets.',
  Flask: 'Microservice-oriented framework chosen for lightweight server endpoints.',
  FastAPI: 'Asynchronous server framework compiling automated OpenAPI schemas with high performance.',
  'Django Channels': 'Orchestrates asynchronous WebSocket protocols for live user interaction.',
  Celery: 'Distributed task queue offloading heavy cryptographic computations in the background.',
  Daphne: 'ASGI web server running alongside Celery/Redis for multi-protocol async requests.',
  Redis: 'In-memory data structure broker handling fast session storage and job message routing.',
  PostgreSQL: 'Primary relational database utilizing structured data validation and query logic.',
  MySQL: 'Standard open-source relational storage for legacy database operations.',
  SQLite: 'Zero-config local embedded query runner for rapid prototyping.',
  Git: 'Tracks version history, code branches, and merge paths.',
  GitHub: 'Collaborative code hosting, continuous deployment integrations, and audit monitoring.',
  Vercel: 'Global serverless host providing edge networks for high-performance frontend loads.',
  Render: 'Deploys continuous integration containers for active API servers and background workers.',
  Cloudinary: 'Secure cloud hosting managing digital media assets and files dynamically.',
  'REST APIs': 'Standardized endpoints facilitating decoupled frontend and backend communication.',
  'JWT Authentication': 'Zero-session authentication system exchanging signed cryptographic keys.',
  RBAC: 'Role-Based Access Control enforcing strict user permission levels.',
  'Multi-Tenancy': 'Architectural partitioning ensuring strict isolated data lines for separate SaaS clients.',
  WebSockets: 'Establish full-duplex TCP channels for continuous sub-second data streaming.',
  'Responsive Design': 'Fluid layout scaling ensuring adaptability on mobile, tablet, and desktop monitors.',
  'Scalable Systems': 'Infrastructure design targeting consistent query speeds under heavy user spikes.',
  NumPy: 'Performs vector calculations and linear algebra operations at hardware speeds.',
  Pandas: 'Tabular data analysis handling complex cleaning and data transformations.',
  SciPy: 'Scientific numerical integration and Fourier transform filtering.',
  'Scikit-learn': 'Fits machine learning regression models and fits recommendation engines.',
  OpenCV: 'Tracks face ROIs and extracts capillary light signals in real-time camera frames.',
  Matplotlib: 'Generates mathematical charts and data plots for diagnostics.',
};

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              variants={cardVariants}
              key={idx}
              className="gradient-border-card p-6 flex flex-col justify-between h-full group hover:shadow-[0_0_25px_rgba(99,102,241,0.08)] transition-all duration-300 min-h-[220px]"
            >
              <div>
                {/* Card Header */}
                <div className="flex items-center gap-3.5 mb-5">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${category.color.split(' ')[0]} ${category.color.split(' ')[1]} border border-white/5`}>
                    <category.icon className={`w-5 h-5 ${category.color.split(' ')[2]}`} />
                  </div>
                  <h3 className="text-white font-bold text-base tracking-wide group-hover:text-indigo-300 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.skills.map((skill, sIdx) => {
                    const isHovered = hoveredSkill === skill;
                    return (
                      <span
                        key={sIdx}
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-medium border cursor-pointer select-none transition-all duration-200 ${
                          isHovered
                            ? 'bg-indigo-500/25 border-indigo-500/40 text-white shadow-[0_0_12px_rgba(99,102,241,0.3)] scale-105'
                            : 'bg-white/5 border-white/5 text-gray-300 hover:bg-white/10 hover:border-white/15 hover:text-white'
                        }`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Interactive Detail Console */}
              <div className="border-t border-white/5 pt-3.5 mt-3 min-h-[50px] flex items-center">
                <AnimatePresence mode="wait">
                  {hoveredSkill ? (
                    <motion.p
                      key={hoveredSkill}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 5 }}
                      transition={{ duration: 0.15 }}
                      className="text-[11px] font-mono leading-relaxed text-indigo-300"
                    >
                      <span className="text-cyan-400 font-bold">&gt;&gt;</span> {skillDescriptions[hoveredSkill]}
                    </motion.p>
                  ) : (
                    <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-none select-none">
                      Hover tags for details
                    </p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
