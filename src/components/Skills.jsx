import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Layout, Server, Database, Cloud, ShieldAlert, Brain, Sparkles } from 'lucide-react';

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
    skills: ['Django', 'Django REST Framework', 'FastAPI', 'Django Channels'],
  },
  {
    title: 'Databases',
    icon: Database,
    color: 'from-emerald-500/20 to-teal-500/20 text-emerald-400',
    skills: ['PostgreSQL', 'MySQL', 'Redis'],
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
    skills: ['REST APIs', 'JWT Auth', 'RBAC', 'Multi-Tenancy', 'WebSockets', 'Async Programming'],
  },
  {
    title: 'Data & ML',
    icon: Brain,
    color: 'from-pink-500/20 to-rose-500/20 text-pink-400',
    skills: ['NumPy', 'Pandas', 'Scikit-learn', 'OpenCV', 'Matplotlib'],
  },
  {
    title: 'Generative AI',
    icon: Sparkles,
    color: 'from-rose-500/20 to-amber-500/20 text-rose-400',
    skills: [
      'Google Gemini API',
      'LLM API Integration',
      'Prompt Engineering',
      'Structured JSON Output',
      'RAG',
      'Vector Databases (ChromaDB)',
      'Embedding Models',
      'LangChain',
    ],
  },
];

// Dictionary of explanations for interactive tech stack reveal
const skillDescriptions = {
  Python: 'Core programming language used for scripting, backend systems, and AI engineering.',
  JavaScript: 'Client-side reactivity and dynamic event handling across web user interfaces.',
  'React.js': 'Builds responsive component-driven user interfaces with declarative state and virtual DOM.',
  HTML5: 'Semantic page structure ensuring strict web accessibility and standards.',
  CSS3: 'Modern styling, keyframe animations, and fluid responsive design layouts.',
  'Tailwind CSS': 'Utility-first CSS framework for crafting high-fidelity design systems.',
  Streamlit: 'Rapid web app framework for deploying interactive data science & ML prototypes.',
  Django: 'High-level Python web framework providing robust ORM, security, and scalability.',
  'Django REST Framework': 'Standardized RESTful API architectures with serializers and permission classes.',
  FastAPI: 'High-performance asynchronous server framework with automatic OpenAPI documentation.',
  'Django Channels': 'Extends Django to handle WebSockets and asynchronous protocols in real time.',
  PostgreSQL: 'Enterprise-grade relational database with advanced JSON indexing and constraints.',
  MySQL: 'Reliable relational storage engine with optimized schemas and read-only sandboxing.',
  Redis: 'In-memory key-value store used for high-speed caching, session storage, and message brokering.',
  Git: 'Distributed version control tracking changes, branching models, and code history.',
  GitHub: 'Collaborative source control hosting, pull requests, and CI/CD automation.',
  Vercel: 'Edge deployment platform providing rapid global distribution for frontend SPAs.',
  Render: 'Cloud application hosting for containerized web services, workers, and databases.',
  Cloudinary: 'Cloud storage platform for automated media asset optimization and delivery.',
  'REST APIs': 'Decoupled HTTP architectural endpoints for client-server communication.',
  'JWT Auth': 'Cryptographically signed JSON Web Tokens for stateless, tenant-scoped authentication.',
  RBAC: 'Role-Based Access Control enforcing granular permission scopes across user tiers.',
  'Multi-Tenancy': 'Architectural isolation ensuring strict data partitioning between independent SaaS tenants.',
  WebSockets: 'Full-duplex bidirectional communication channels for real-time cursor and data sync.',
  'Async Programming': 'Non-blocking concurrent execution handling high-throughput I/O and cryptographic offloading.',
  NumPy: 'Fast multi-dimensional numerical arrays and vectorized mathematical routines.',
  Pandas: 'Data manipulation, tabular cleaning, and statistical dataframe analysis.',
  'Scikit-learn': 'Machine learning library for regression, clustering, and predictive modeling.',
  OpenCV: 'Computer vision algorithms for real-time face detection, ROI tracking, and signal extraction.',
  Matplotlib: 'Data visualization library generating diagnostic plots and frequency spectra.',
  'Google Gemini API': 'Multimodal foundation models for text generation, semantic reasoning, and embeddings.',
  'LLM API Integration': 'Connecting language model endpoints with robust error handling, retries, and token management.',
  'Prompt Engineering': 'Designing system personas, few-shot examples, and strict negative constraints.',
  'Structured JSON Output': 'Enforcing validated JSON schemas from LLM generations for reliable downstream consumption.',
  RAG: 'Retrieval-Augmented Generation grounding model responses on semantically retrieved documents.',
  'Vector Databases (ChromaDB)': 'High-dimensional vector indexing and cosine similarity search for dynamic schema retrieval.',
  'Embedding Models': 'Generating semantic dense vector representations of text queries and schemas.',
  LangChain: 'Framework for orchestrating compound LLM pipelines, prompt chains, and agentic workflows.',
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
