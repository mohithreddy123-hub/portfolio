import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, ShieldCheck, Cpu, Settings, Flame, Database, Bot, CheckCircle2, ChevronRight, Terminal, Search, Send, RotateCcw, AlertTriangle, FileText, Check } from 'lucide-react';

const Github = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Brain = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-3.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-3.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2z" />
  </svg>
);

const Sparkles = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5.5 5 3Z" className="opacity-60" />
    <path d="m19 17 1 2.5 2.5.5-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1 1-2.5Z" className="opacity-60" />
  </svg>
);

const PinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <line x1="12" y1="17" x2="12" y2="22" />
    <path d="M5 17h14v-1.76a2 2 0 0 0-.44-1.24l-2.78-3.55A2 2 0 0 1 15 9.2V5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4.2a2 2 0 0 1-.78 1.25l-2.78 3.55A2 2 0 0 0 5 15.24z" />
  </svg>
);

const ArchiveIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <polyline points="21 8 21 21 3 21 3 8" />
    <rect x="1" y="3" width="22" height="5" rx="1" />
    <line x1="10" y1="12" x2="14" y2="12" />
  </svg>
);

export default function Projects() {
  const [activeProject, setActiveProject] = useState('tenantvault');
  const [tenantVaultTab, setTenantVaultTab] = useState('overview');
  const [faceVitalsTab, setFaceVitalsTab] = useState('overview');
  const [resumeRoasterTab, setResumeRoasterTab] = useState('overview');
  const [queryMindTab, setQueryMindTab] = useState('overview');

  // Simulator States for Resume Roaster
  const resumeProfiles = {
    mohith: {
      name: 'Mohith Reddy (Full-Stack & Systems)',
      role: 'Full-Stack Software Engineer',
      resumeScore: 88,
      atsScore: 94,
      tier: 'Strong / Hire Ready',
      tierColor: 'emerald',
      roastQuote: "Look, your multi-tenant isolation and rPPG computer vision pipelines are legitimately solid, but you hid your database latency benchmarks under bullet point three. Recruiters skim in 6 seconds—put your throughput metrics right where they can't miss them!",
      strengths: [
        'Zero-knowledge AES-128 cryptographic offloading with Celery & Redis (<200ms latency)',
        'Custom remote Photoplethysmography (POS algorithm) without third-party wrapper dependencies',
        'Strict multi-tenant row-level database partitioning across isolated schema models'
      ],
      fixFirst: 'Elevate your system scalability benchmarks and API response percentiles directly to your executive summary.',
      atsFactors: [
        { name: 'Standard Section Hierarchy', score: '98%', status: 'Pass' },
        { name: 'Quantified Action Verbs', score: '92%', status: 'Pass' },
        { name: 'Single-Column Text Stream', score: '96%', status: 'Pass' },
        { name: 'Keyword Cloud Density', score: '90%', status: 'Pass' }
      ],
      recruiterQuestions: [
        {
          q: 'Why did you pick Celery over simple background worker threads?',
          a: 'Celery provides durable distributed broker-backed task persistence with Redis. Heavy AES encryption jobs survive web worker restarts and can scale horizontally across multiple container instances.'
        },
        {
          q: 'How did you handle the rPPG ambient lighting noise in FaceVitals?',
          a: 'Applied 2nd-order Butterworth bandpass filtering (0.8–2.5 Hz for HR) coupled with Plane-Orthogonal-to-Skin (POS) projection to isolate pure pulsatile capillary reflectance from motion artifacts.'
        }
      ]
    },
    junior: {
      name: 'Generic CS Student',
      role: 'Aspiring Software Developer',
      resumeScore: 58,
      atsScore: 72,
      tier: 'Needs Work',
      tierColor: 'amber',
      roastQuote: "You listed 18 separate programming languages, but your only project is a copy-pasted weather app and a to-do list. In 2026, recruiters instantly spot tutorial fluff. Show me production auth, deployed databases, and error handling.",
      strengths: [
        'Clean accredited university degree',
        'Demonstrates grasp of core data structures'
      ],
      fixFirst: 'Delete 10 unproven keywords. Replace one tutorial project with a deployed full-stack application handling authenticated sessions.',
      atsFactors: [
        { name: 'Standard Section Hierarchy', score: '82%', status: 'Pass' },
        { name: 'Quantified Action Verbs', score: '44%', status: 'Warning' },
        { name: 'Single-Column Text Stream', score: '88%', status: 'Pass' },
        { name: 'Keyword Cloud Density', score: '52%', status: 'Warning' }
      ],
      recruiterQuestions: [
        {
          q: 'What makes a project stand out over a tutorial?',
          a: 'Adding private route protection (JWT), automated database migrations, deployed hosting on Render/Vercel, and public GitHub CI/CD.'
        },
        {
          q: 'Should I keep all 18 programming languages on my resume?',
          a: 'No. Trim to your top 2 languages (e.g. Python, JavaScript) where you can comfortably defend memory models and framework internals.'
        }
      ]
    },
    unformatted: {
      name: 'Design-Heavy Graphic Resume',
      role: 'UI/UX & Frontend Dev',
      resumeScore: 42,
      atsScore: 38,
      tier: 'High ATS Risk',
      tierColor: 'rose',
      roastQuote: "Two-column graphic resume with skill rating progress bars! Standard ATS parsers will split your text stream across columns, turning your project descriptions into an unreadable scrambled word salad.",
      strengths: [
        'Visually aesthetic for human eyes in a print portfolio'
      ],
      fixFirst: 'Immediately migrate to a clean, single-column machine-parseable format without tables, columns, or graphic skill bars.',
      atsFactors: [
        { name: 'Standard Section Hierarchy', score: '40%', status: 'Fail' },
        { name: 'Quantified Action Verbs', score: '55%', status: 'Warning' },
        { name: 'Single-Column Text Stream', score: '25%', status: 'Fail' },
        { name: 'Keyword Cloud Density', score: '32%', status: 'Fail' }
      ],
      recruiterQuestions: [
        {
          q: 'Why do skill rating bars hurt ATS scores?',
          a: 'ATS systems cannot parse graphical SVGs or percentages into candidate qualifications. They need plain semantic text.'
        },
        {
          q: 'Can I keep two columns for my contact info?',
          a: 'Even contact info in two columns frequently merges telephone numbers into email addresses during PDF stream extraction.'
        }
      ]
    }
  };

  const [selectedResumeProfile, setSelectedResumeProfile] = useState('mohith');
  const [selectedRoastQuestion, setSelectedRoastQuestion] = useState(0);

  // Simulator States for TenantVault
  const [consoleLogs, setConsoleLogs] = useState([
    'Initializing TenantVault core modules...',
    'Connecting to Neon serverless PostgreSQL database...',
    'Celery workers pool initialized: 4 active processes.',
    'Ready for incoming tenant requests.'
  ]);
  const [simTenant, setSimTenant] = useState('Developer');
  const [simFileEncrypting, setSimFileEncrypting] = useState(false);
  const [simEncryptResult, setSimEncryptResult] = useState(null);

  // Simulator States for FaceVitals
  const [heartRate, setHeartRate] = useState(72);
  const [respRate, setRespRate] = useState(16);
  const [signalQuality, setSignalQuality] = useState(94);
  const [ppgPoints, setPpgPoints] = useState([]);
  
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);

  // Simulator States for QueryMind Text-to-SQL
  const queryMindPresets = [
    {
      id: 'rev',
      label: 'Top Revenue Products',
      query: 'Which 5 products generated the most revenue last quarter?',
      retrievedSchemas: [
        { table: 'products', distance: 0.124, relevance: '0.88 match' },
        { table: 'orders', distance: 0.145, relevance: '0.85 match' },
        { table: 'payments', distance: 0.189, relevance: '0.81 match' }
      ],
      sql: `SELECT p.product_name, 
       SUM(pay.amount) AS total_revenue,
       COUNT(o.id) AS units_sold
FROM products p
JOIN orders o ON p.id = o.product_id
JOIN payments pay ON o.id = pay.order_id
GROUP BY p.product_name
ORDER BY total_revenue DESC
LIMIT 5;`,
      securityStatus: 'SAFE_READ_ONLY',
      securityDetail: 'Validated: ANSI SELECT syntax. Prohibited DDL/DML tokens: 0. Read-only connection enforced.',
      executionTime: '14ms',
      rowCount: 5,
      results: [
        { col1: 'Noise-Canceling Pro Headphones', col2: '$34,250', col3: '171 units' },
        { col1: 'Ultra HD 4K Monitor 27"', col2: '$28,900', col3: '96 units' },
        { col1: 'Mechanical Ergonomic Keyboard', col2: '$19,450', col3: '130 units' },
        { col1: 'USB-C Universal Docking Station', col2: '$14,800', col3: '148 units' },
        { col1: 'Smart Fitness Tracker Gen 3', col2: '$12,100', col3: '81 units' }
      ],
      summary: 'The top revenue driver is Noise-Canceling Pro Headphones ($34,250 across 171 units), followed by the Ultra HD 4K Monitor ($28,900). The top 5 products represent 68.4% of total quarterly catalog gross merchandise value.'
    },
    {
      id: 'dormant',
      label: 'Dormant Customers',
      query: 'Find customers who have not placed any orders in the past 6 months.',
      retrievedSchemas: [
        { table: 'users', distance: 0.118, relevance: '0.88 match' },
        { table: 'orders', distance: 0.132, relevance: '0.87 match' }
      ],
      sql: `SELECT u.id, u.name, u.email, 
       MAX(o.created_at) AS last_order_date
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name, u.email
HAVING last_order_date < DATE_SUB(NOW(), INTERVAL 6 MONTH)
   OR last_order_date IS NULL
LIMIT 5;`,
      securityStatus: 'SAFE_READ_ONLY',
      securityDetail: 'Validated: Standard SELECT query. Regex blocklist clean. textsql_reader role active.',
      executionTime: '11ms',
      rowCount: 3,
      results: [
        { col1: 'Sarah Jenkins', col2: 'sarah.j@example.com', col3: '7 months inactive' },
        { col1: 'Marcus Chen', col2: 'mchen99@example.com', col3: '9 months inactive' },
        { col1: 'Elena Rostova', col2: 'elena.r@example.com', col3: '11 months inactive' }
      ],
      summary: 'Identified 3 high-value dormant customer accounts exceeding the 180-day inactivity threshold. Recommended action: trigger targeted retention campaign via automated notification pipeline.'
    },
    {
      id: 'aov',
      label: 'Order Value by City',
      query: 'What is the average order value across user cities?',
      retrievedSchemas: [
        { table: 'users', distance: 0.110, relevance: '0.89 match' },
        { table: 'orders', distance: 0.151, relevance: '0.85 match' },
        { table: 'payments', distance: 0.177, relevance: '0.82 match' }
      ],
      sql: `SELECT u.city, 
       ROUND(AVG(pay.amount), 2) AS avg_order_value, 
       COUNT(o.id) AS total_orders
FROM users u
JOIN orders o ON u.id = o.user_id
JOIN payments pay ON o.id = pay.order_id
GROUP BY u.city
ORDER BY avg_order_value DESC
LIMIT 4;`,
      securityStatus: 'SAFE_READ_ONLY',
      securityDetail: 'Validated: Safe analytical aggregation. Write/Drop protection verified.',
      executionTime: '18ms',
      rowCount: 4,
      results: [
        { col1: 'Seattle', col2: '$218.40 avg', col3: '420 orders' },
        { col1: 'San Francisco', col2: '$194.20 avg', col3: '610 orders' },
        { col1: 'New York', col2: '$182.50 avg', col3: '940 orders' },
        { col1: 'Austin', col2: '$156.80 avg', col3: '380 orders' }
      ],
      summary: 'Seattle recorded the highest Average Order Value at $218.40 across 420 orders, with New York accounting for the largest total order volume (940 orders).'
    }
  ];

  const [activeQueryPreset, setActiveQueryPreset] = useState(0);
  const [activeStageTab, setActiveStageTab] = useState('pipeline'); // 'pipeline' | 'sql' | 'answer'
  const [isSimulatingQuery, setIsSimulatingQuery] = useState(false);

  const handleRunQuery = (idx) => {
    setActiveQueryPreset(idx);
    setIsSimulatingQuery(true);
    setTimeout(() => {
      setIsSimulatingQuery(false);
    }, 400);
  };

  // Parallax transform based on section scroll progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  
  const yParallax = useTransform(scrollYProgress, [0, 1], [30, -30]);

  // TenantVault Log Simulator loop
  useEffect(() => {
    if (activeProject !== 'tenantvault') return;
    const logPool = [
      'GET /api/v1/documents/ 200 OK (JWT Verified)',
      'Celery: Offloading encryption job for doc_83921.pdf',
      'AES-128: Key generated for tenant ID scope: t_enterprise_01',
      'Redis: Cached active session token for 3600 seconds',
      'POST /api/v1/auth/token 202 ACCEPTED',
      'AuditLog: Client ID c_4829 accessed Billing Settings',
      'WebSocket: User user_382 joined collaborative workspace room_s392',
      'AuditLog: Keystroke cursor synchronization event processed in 18ms',
      'Celery: Task encrypt_file completed in 186ms (File size: 24MB)',
      'Database: Strict tenant isolation query executed (Rows: 12)'
    ];

    const interval = setInterval(() => {
      setConsoleLogs((prev) => {
        const nextLogs = [...prev, `[${new Date().toLocaleTimeString()}] ${logPool[Math.floor(Math.random() * logPool.length)]}`];
        if (nextLogs.length > 8) nextLogs.shift();
        return nextLogs;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [activeProject]);

  // TenantVault encryption button trigger
  const runSimEncryption = () => {
    if (simFileEncrypting) return;
    setSimFileEncrypting(true);
    setSimEncryptResult(null);
    setConsoleLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] [CRYPTO] Encryption job started for tenant: ${simTenant}`]);
    
    setTimeout(() => {
      setSimFileEncrypting(false);
      setSimEncryptResult(`Success! Encrypted via zero-knowledge AES-128. Response: HTTP 202 (182ms).`);
      setConsoleLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] [CRYPTO] Document encrypted and saved. UUID: enc_doc_${Math.random().toString(36).substring(7)}`]);
    }, 1200);
  };

  // FaceVitals PPG wave generator loop
  useEffect(() => {
    let tick = 0;
    const interval = setInterval(() => {
      tick += 0.1;
      const baseWave = Math.sin(tick * 3.5) * 15;
      const dicroticNotch = Math.cos(tick * 7.0) * 5;
      const finalValue = 40 + baseWave + dicroticNotch + (Math.random() - 0.5) * 2;

      setPpgPoints(prev => {
        const next = [...prev, finalValue];
        if (next.length > 50) next.shift();
        return next;
      });

      if (Math.random() > 0.85) {
        setHeartRate(prev => Math.min(Math.max(prev + Math.floor(Math.random() * 3) - 1, 65), 85));
        setRespRate(prev => Math.min(Math.max(prev + Math.floor(Math.random() * 3) - 1, 12), 20));
        setSignalQuality(prev => Math.min(Math.max(prev + Math.floor(Math.random() * 5) - 2, 88), 98));
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // FaceVitals PPG Wave Canvas Draw
  useEffect(() => {
    if (faceVitalsTab !== 'simulator' || activeProject !== 'facevitals') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw grid
    ctx.strokeStyle = 'rgba(255,255,255,0.03)';
    ctx.lineWidth = 1;
    for (let i = 0; i < canvas.width; i += 20) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, canvas.height);
      ctx.stroke();
    }
    for (let i = 0; i < canvas.height; i += 20) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(canvas.width, i);
      ctx.stroke();
    }

    // Draw ECG line
    ctx.strokeStyle = '#22d3ee';
    ctx.lineWidth = 2.5;
    ctx.shadowBlur = 10;
    ctx.shadowColor = 'rgba(34, 211, 238, 0.5)';
    ctx.beginPath();

    const step = canvas.width / 49;
    ppgPoints.forEach((val, index) => {
      const x = index * step;
      const y = canvas.height - (val * 1.5);
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.stroke();
    ctx.shadowBlur = 0;
  }, [ppgPoints, faceVitalsTab, activeProject]);

  return (
    <section ref={sectionRef} id="projects" className="py-24 relative overflow-hidden bg-dark-900">
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3">Featured Work</h2>
          <p className="text-3xl md:text-5xl font-extrabold text-white font-sans">
            Engineering Showcases
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Project Selector Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/5 border border-white/5 p-1.5 rounded-2xl grid grid-cols-2 lg:grid-cols-4 max-w-4xl w-full relative z-20 gap-1.5 md:gap-2.5">
            <button
              onClick={() => setActiveProject('tenantvault')}
              className={`py-3 rounded-xl font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-xs md:text-sm ${
                activeProject === 'tenantvault'
                  ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              TenantVault SaaS
            </button>
            <button
              onClick={() => setActiveProject('facevitals')}
              className={`py-3 rounded-xl font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-xs md:text-sm ${
                activeProject === 'facevitals'
                  ? 'bg-gradient-to-r from-cyan-600 to-cyan-500 text-white shadow-lg shadow-cyan-600/30'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Cpu className="w-4 h-4" />
              FaceVitals ML/CV
            </button>
            <button
              onClick={() => setActiveProject('resumeroaster')}
              className={`py-3 rounded-xl font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-xs md:text-sm ${
                activeProject === 'resumeroaster'
                  ? 'bg-gradient-to-r from-rose-600 to-amber-500 text-white shadow-lg shadow-rose-600/30'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Flame className="w-4 h-4" />
              Resume Roaster AI
            </button>
            <button
              onClick={() => setActiveProject('querymind')}
              className={`py-3 rounded-xl font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-xs md:text-sm ${
                activeProject === 'querymind'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-lg shadow-emerald-600/30'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Database className="w-4 h-4" />
              QueryMind Text-to-SQL
            </button>
          </div>
        </div>

        {/* Project Display Container with Parallax y-offset */}
        <motion.div
          style={{ y: yParallax }}
          className="gradient-border-card rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden min-h-[580px] hover:shadow-[0_0_50px_rgba(99,102,241,0.15)] transition-all duration-500"
        >
          {/* Subtle inside glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

          <AnimatePresence mode="wait">
            
            {/* Project 1: TenantVault */}
            {activeProject === 'tenantvault' && (
              <motion.div
                key="tenantvault"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
              >
                {/* Info and Navigation Column */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/25 bg-indigo-500/10 text-indigo-300 text-xs font-semibold mb-4">
                      <span>Full Stack SaaS Platform</span>
                    </div>

                    <h3 className="text-2xl md:text-3.5xl font-extrabold text-white mb-4">
                      TenantVault
                    </h3>

                    <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed">
                      A highly secure, enterprise-grade multi-tenant SaaS platform featuring 
                      strict, tenant-scoped JWT auth, zero-knowledge AES-128 document encryption, 
                      real-time collaborative editing, and detailed logging mechanisms.
                    </p>

                    {/* Tab Navigation for details */}
                    <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-2">
                      {['overview', 'architecture', 'simulator'].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setTenantVaultTab(tab)}
                          className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                            tenantVaultTab === tab
                              ? 'bg-white/10 text-white border border-white/10'
                              : 'text-gray-500 hover:text-gray-300 border border-transparent'
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>

                    {/* Tab Contents */}
                    <div className="min-h-[220px]">
                      {tenantVaultTab === 'overview' && (
                        <div className="space-y-4">
                          <h4 className="text-white font-bold text-sm uppercase tracking-wide">Key Technical Features:</h4>
                          <ul className="space-y-2.5 text-gray-400 text-sm">
                            <li className="flex items-start gap-2.5">
                              <span className="text-indigo-400 font-bold">✓</span>
                              <span><strong>Multi-Tier Tenant Isolation:</strong> Strict scopes mapped across 3 billing levels, isolating database interactions for 8 relational models.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                              <span className="text-indigo-400 font-bold">✓</span>
                              <span><strong>Zero-Knowledge Encryption:</strong> Offloads high-cost cryptographic tasks (AES-128) using Celery queues and Redis caches, maintaining API speeds &lt;200ms.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                              <span className="text-indigo-400 font-bold">✓</span>
                              <span><strong>WebSocket Keystroke Sync:</strong> Real-time workspace rooms powered by Django Channels and Daphne for sub-second cursor mapping.</span>
                            </li>
                          </ul>
                        </div>
                      )}

                      {tenantVaultTab === 'architecture' && (
                        <div className="space-y-4">
                          <h4 className="text-white font-bold text-sm uppercase tracking-wide">System Architecture:</h4>
                          <div className="grid grid-cols-2 gap-4 text-xs">
                            <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                              <span className="text-indigo-400 font-semibold block mb-1">Frontend Layer</span>
                              React.js SPA with Tailwind CSS styled dashboard, WebSockets client for cursors, secure JWT local handler.
                            </div>
                            <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                              <span className="text-indigo-400 font-semibold block mb-1">Backend Core</span>
                              FastAPI & Django REST Framework, Daphne server serving Django Channels and REST API endpoints.
                            </div>
                            <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                              <span className="text-indigo-400 font-semibold block mb-1">Distributed Workers</span>
                              Celery asynchronous scheduler managing parallel encryption tasks over a Redis broker.
                            </div>
                            <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                              <span className="text-indigo-400 font-semibold block mb-1">Data Storage</span>
                              Neon PostgreSQL serverless cluster utilizing strict row-level isolation and Cloudinary for file assets.
                            </div>
                          </div>
                        </div>
                      )}

                      {tenantVaultTab === 'simulator' && (
                        <div className="space-y-4">
                          <h4 className="text-white font-bold text-sm uppercase tracking-wide">Interactive Demo Details:</h4>
                          <p className="text-gray-400 text-xs leading-relaxed">
                            Interact with the live SaaS simulation panel on the right. You can select subscription packages, trigger an AES-128 encryption task, and see real-time asynchronous background tasks processed by the Celery/Redis console simulator.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap items-center gap-4 mt-8">
                    <a
                      href="https://github.com/mohithreddy123-hub/Multi-tenant-SaaS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 hover:text-white flex items-center gap-2 font-bold text-sm transition-all duration-200"
                    >
                      <Github className="w-4 h-4" />
                      GitHub Code
                    </a>
                    <a
                      href="https://multi-tenant-saa-s-nine.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-bold text-sm flex items-center gap-2 hover:opacity-90 transition-all duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Application
                    </a>
                  </div>
                </div>

                {/* Simulated Screen / Visual Column */}
                <div className="lg:col-span-6 flex flex-col items-stretch">
                  <div className="bg-dark-950 border border-white/5 rounded-2xl flex flex-col flex-grow overflow-hidden shadow-inner font-mono text-[11px] text-gray-400">
                    
                    {/* Console Header */}
                    <div className="bg-white/5 px-4 py-3 border-b border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                        <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-gray-400 font-semibold tracking-wide text-xs">TenantVault Console Simulator</span>
                      <Settings className="w-3.5 h-3.5 text-gray-500 animate-spin-slow" />
                    </div>

                    {/* Simulator Workspace Content */}
                    <div className="p-4 bg-dark-950/70 border-b border-white/5 flex flex-col sm:flex-row gap-4 justify-between items-center text-xs">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 font-bold">Tenant Scope:</span>
                        <div className="flex gap-1">
                          {['Developer', 'Startup', 'Enterprise'].map((tier) => (
                            <button
                              key={tier}
                              onClick={() => setSimTenant(tier)}
                              className={`px-2.5 py-1 rounded font-bold transition-all duration-200 cursor-pointer ${
                                simTenant === tier
                                  ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                                  : 'bg-white/5 hover:bg-white/10 text-gray-400 border border-transparent'
                              }`}
                            >
                              {tier}
                            </button>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={runSimEncryption}
                        disabled={simFileEncrypting}
                        className={`px-3 py-1.5 rounded-lg font-bold text-white shadow-md flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
                          simFileEncrypting
                            ? 'bg-indigo-800 cursor-not-allowed'
                            : 'bg-indigo-600 hover:bg-indigo-500'
                        }`}
                      >
                        {simFileEncrypting ? 'Encrypting...' : 'Encrypt Doc'}
                      </button>
                    </div>

                    {/* Console Live Stream Logs */}
                    <div className="p-4 flex-grow overflow-y-auto space-y-2 min-h-[160px] max-h-[200px]">
                      {consoleLogs.map((log, i) => (
                        <div key={i} className="leading-relaxed">
                          <span className="text-indigo-400 font-semibold">&gt;</span> {log}
                        </div>
                      ))}
                      {simFileEncrypting && (
                        <div className="text-cyan-400 font-semibold animate-pulse">
                          &gt; [JOB: {Math.floor(Math.random()*90000+10000)}] Offloading AES encryption tasks to Celery via Redis...
                        </div>
                      )}
                      {simEncryptResult && (
                        <div className="text-emerald-400 font-semibold">
                          &gt; {simEncryptResult}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Tech stack badge list */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {['React.js', 'Django Channels', 'FastAPI', 'Celery', 'Redis', 'PostgreSQL', 'WebSockets', 'Vercel'].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-white/5 border border-white/5 text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Project 2: FaceVitals */}
            {activeProject === 'facevitals' && (
              <motion.div
                key="facevitals"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
              >
                {/* Info and Navigation Column */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/25 bg-cyan-500/10 text-cyan-300 text-xs font-semibold mb-4">
                      <span>Computer Vision & Machine Learning</span>
                    </div>

                    <h3 className="text-2xl md:text-3.5xl font-extrabold text-white mb-4">
                      FaceVitals
                    </h3>

                    <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed">
                      A non-contact physiological monitoring application using Remote Photoplethysmography (rPPG) 
                      and face detection algorithms to estimate heart rate and respiratory rate through a standard webcam feed.
                    </p>

                    {/* Tab Navigation for details */}
                    <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-2">
                      {['overview', 'architecture', 'simulator'].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setFaceVitalsTab(tab)}
                          className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                            faceVitalsTab === tab
                              ? 'bg-white/10 text-white border border-white/10'
                              : 'text-gray-500 hover:text-gray-300 border border-transparent'
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>

                    {/* Tab Contents */}
                    <div className="min-h-[220px]">
                      {faceVitalsTab === 'overview' && (
                        <div className="space-y-4">
                          <h4 className="text-white font-bold text-sm uppercase tracking-wide">Key Technical Features:</h4>
                          <ul className="space-y-2.5 text-gray-400 text-sm">
                            <li className="flex items-start gap-2.5">
                              <span className="text-cyan-400 font-bold">✓</span>
                              <span><strong>rPPG and POS Algorithms:</strong> Extracts blood volume pulse signals from facial skin pixel variations (RGB signals) captured via standard camera.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                              <span className="text-cyan-400 font-bold">✓</span>
                              <span><strong>FFT & Bandpass Filtering:</strong> Implements frequency estimation filters (0.8-2.5 Hz for HR, 0.1-0.5 Hz for RR) to eliminate ambient noise and camera jitter.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                              <span className="text-cyan-400 font-bold">✓</span>
                              <span><strong>Gradient Boosting Regressor:</strong> A machine learning regressor model trained on 9 handcrafted statistical signal features for heart rate correction.</span>
                            </li>
                          </ul>
                        </div>
                      )}

                      {faceVitalsTab === 'architecture' && (
                        <div className="space-y-4">
                          <h4 className="text-white font-bold text-sm uppercase tracking-wide">Processing Pipeline:</h4>
                          <div className="grid grid-cols-2 gap-4 text-xs">
                            <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                              <span className="text-cyan-400 font-semibold block mb-1">1. Face ROI Extraction</span>
                              OpenCV face detector tracks facial bounding box. Forehead region is selected as the optimal area for skin capillary variations.
                            </div>
                            <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                              <span className="text-cyan-400 font-semibold block mb-1">2. POS Signal Estimation</span>
                              Applies Plane-Orthogonal-to-Skin calculations to robustly isolate light reflection changes from motion artifacts.
                            </div>
                            <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                              <span className="text-cyan-400 font-semibold block mb-1">3. FFT & Filtering</span>
                              Applies Fast Fourier Transforms and 2nd-order Butterworth bandpass filters to capture pure cardiovascular beats.
                            </div>
                            <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                              <span className="text-cyan-400 font-semibold block mb-1">4. Regressor Estimation</span>
                              Scikit-learn Gradient Boosting Regressor predicts final bpm based on signal features, showing health alerts on Streamlit.
                            </div>
                          </div>
                        </div>
                      )}

                      {faceVitalsTab === 'simulator' && (
                        <div className="space-y-4">
                          <h4 className="text-white font-bold text-sm uppercase tracking-wide">Interactive Demo Details:</h4>
                          <p className="text-gray-400 text-xs leading-relaxed">
                            Interact with the real-time vital-sign monitor on the right. You can see a synthesized real-time PPG signal wave mapped dynamically on the canvas, simulating camera-based photoplethysmography extraction.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap items-center gap-4 mt-8">
                    <a
                      href="https://github.com/mohithreddy123-hub/FaceVitalsPrototype"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 hover:text-white flex items-center gap-2 font-bold text-sm transition-all duration-200"
                    >
                      <Github className="w-4 h-4" />
                      GitHub Code
                    </a>
                  </div>
                </div>

                {/* Simulated Screen / Visual Column */}
                <div className="lg:col-span-6 flex flex-col items-stretch">
                  <div className="bg-dark-950 border border-white/5 rounded-2xl flex flex-col flex-grow overflow-hidden shadow-inner">
                    
                    {/* Console Header */}
                    <div className="bg-white/5 px-4 py-3 border-b border-white/5 flex items-center justify-between font-mono text-[11px]">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                        <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-gray-400 font-semibold tracking-wide text-xs">FaceVitals Live Simulator</span>
                      <span className="flex items-center gap-1.5 text-cyan-400 animate-pulse font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        STREAMING
                      </span>
                    </div>

                    {/* Simulator Analytics Dashboard */}
                    <div className="p-4 grid grid-cols-3 gap-4 border-b border-white/5">
                      <div className="bg-white/5 p-3 rounded-xl text-center border border-white/5">
                        <span className="text-gray-400 text-[10px] uppercase font-bold tracking-wider block mb-1">Heart Rate</span>
                        <span className="text-cyan-400 text-2xl font-bold font-mono text-glow-cyan">{heartRate}</span>
                        <span className="text-gray-400 text-[10px] block">BPM</span>
                      </div>
                      <div className="bg-white/5 p-3 rounded-xl text-center border border-white/5">
                        <span className="text-gray-400 text-[10px] uppercase font-bold tracking-wider block mb-1">Respiration</span>
                        <span className="text-indigo-400 text-2xl font-bold font-mono text-glow-indigo">{respRate}</span>
                        <span className="text-gray-400 text-[10px] block">Bpm</span>
                      </div>
                      <div className="bg-white/5 p-3 rounded-xl text-center border border-white/5">
                        <span className="text-gray-400 text-[10px] uppercase font-bold tracking-wider block mb-1">Signal Quality</span>
                        <span className="text-emerald-400 text-2xl font-bold font-mono text-glow-emerald">{signalQuality}%</span>
                        <span className="text-gray-400 text-[10px] block">rPPG SNR</span>
                      </div>
                    </div>

                    {/* Canvas PPG wave render */}
                    <div className="p-4 bg-dark-950/40 flex-grow flex flex-col justify-center items-center relative min-h-[160px]">
                      <canvas
                        ref={canvasRef}
                        width={380}
                        height={120}
                        className="w-full h-[120px] rounded-lg"
                      />
                      
                      {/* Sub-label overlay */}
                      <span className="absolute bottom-2 left-4 font-mono text-[9px] text-gray-500 uppercase tracking-widest">
                        Plane-Orthogonal-to-Skin (POS) filtered wave
                      </span>
                    </div>

                    {/* Alert suggestion banner */}
                    <div className="p-3 bg-cyan-950/20 border-t border-cyan-500/10 flex items-center justify-between px-4">
                      <span className="text-gray-400 text-[10px] font-mono">Status: Vital indicators show stable metrics.</span>
                      <span className="text-cyan-300 text-[9px] font-bold uppercase tracking-wider bg-cyan-900/30 px-2 py-0.5 rounded border border-cyan-800/30">Normal</span>
                    </div>
                  </div>

                  {/* Tech stack badge list */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {['Python', 'Streamlit', 'OpenCV', 'Scikit-learn', 'NumPy', 'SciPy', 'rPPG POS', 'Matplotlib'].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-white/5 border border-white/5 text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Project 3: Resume Roaster */}
            {activeProject === 'resumeroaster' && (
              <motion.div
                key="resumeroaster"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
              >
                {/* Info and Navigation Column */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/25 bg-rose-500/10 text-rose-300 text-xs font-semibold mb-4">
                      <Flame className="w-3.5 h-3.5 text-amber-400" />
                      <span>AI Recruiter Persona &amp; Dual-Engine ATS Engine</span>
                    </div>

                    <h3 className="text-2xl md:text-3.5xl font-extrabold text-white mb-4">
                      Resume Roaster
                    </h3>

                    <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed">
                      A hybrid dual-engine platform combining deterministic Python mathematical scoring 
                      with Google Gemini to evaluate tech resumes like a 20-year veteran senior tech recruiter. 
                      Generates dynamic career-stage weighted Resume Scores, multi-factor ATS compatibility audits, 
                      unfiltered evidence-backed roasts, and interactive recruiter Q&amp;A.
                    </p>

                    {/* Tab Navigation for details */}
                    <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-2">
                      {['overview', 'architecture', 'simulator'].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setResumeRoasterTab(tab)}
                          className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                            resumeRoasterTab === tab
                              ? 'bg-white/10 text-white border border-white/10'
                              : 'text-gray-500 hover:text-gray-300 border border-transparent'
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>

                    {/* Tab Contents */}
                    <div className="min-h-[220px]">
                      {resumeRoasterTab === 'overview' && (
                        <div className="space-y-4">
                          <h4 className="text-white font-bold text-sm uppercase tracking-wide">Key Technical Highlights:</h4>
                          <ul className="space-y-2.5 text-gray-400 text-sm">
                            <li className="flex items-start gap-2.5">
                              <span className="text-rose-400 font-bold">✓</span>
                              <span><strong>Dual-Engine Scoring Architecture:</strong> Pure deterministic Python algorithms calculate Resume Strength (0–100) and ATS Compatibility (0–100) before invoking LLMs, ensuring 100% reproducible baseline metrics.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                              <span className="text-rose-400 font-bold">✓</span>
                              <span><strong>Veteran Recruiter Persona:</strong> Google Gemini 1.5 Flash generates unfiltered, constructive roasts with zero corporate fluff, citing specific project architectures, missing metrics, and prioritized fixes.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                              <span className="text-rose-400 font-bold">✓</span>
                              <span><strong>Heuristic Layout &amp; Document Parsing:</strong> PyMuPDF (<code className="text-rose-300 font-mono text-xs">fitz</code>) and <code className="text-rose-300 font-mono text-xs">python-docx</code> extract raw text streams, detecting headers, contact items, project bullets, and multi-column formatting flaws.</span>
                            </li>
                          </ul>
                        </div>
                      )}

                      {resumeRoasterTab === 'architecture' && (
                        <div className="space-y-4">
                          <h4 className="text-white font-bold text-sm uppercase tracking-wide">System Processing Pipeline:</h4>
                          <div className="grid grid-cols-2 gap-4 text-xs">
                            <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                              <span className="text-rose-400 font-semibold block mb-1">1. Stream Document Extraction</span>
                              PyMuPDF and python-docx extract text streams with word count validation (&gt;50 words) and missing field audits.
                            </div>
                            <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                              <span className="text-rose-400 font-semibold block mb-1">2. Heuristic Segmentation</span>
                              Regex patterns segment document into structured dataclasses: Header, Summary, Education, Experience, Projects, Skills.
                            </div>
                            <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                              <span className="text-rose-400 font-semibold block mb-1">3. Deterministic Python Scoring</span>
                              Calculates career-stage weighted Resume Score (0–100) + 6-factor ATS model (Hierarchy, Verbs, Single-Column, Density).
                            </div>
                            <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                              <span className="text-rose-400 font-semibold block mb-1">4. Generative Recruiter Engine</span>
                              Gemini 1.5 Flash system prompt enforces strict recruiter persona, structured JSON schema, and exponential backoff.
                            </div>
                          </div>
                        </div>
                      )}

                      {resumeRoasterTab === 'simulator' && (
                        <div className="space-y-4">
                          <h4 className="text-white font-bold text-sm uppercase tracking-wide">Interactive Demo Details:</h4>
                          <p className="text-gray-400 text-xs leading-relaxed">
                            Interact with the live Resume Roaster simulator on the right. Toggle between different candidate profiles, observe real-time mathematical Resume &amp; ATS score changes, inspect the unfiltered recruiter roast, and test the interactive follow-up recruiter Q&amp;A.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap items-center gap-4 mt-8">
                    <a
                      href="https://github.com/mohithreddy123-hub/Resume-Roaster"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 hover:text-white flex items-center gap-2 font-bold text-sm transition-all duration-200"
                    >
                      <Github className="w-4 h-4" />
                      GitHub Code
                    </a>
                  </div>
                </div>

                {/* Simulated Screen / Visual Column */}
                <div className="lg:col-span-6 flex flex-col items-stretch">
                  <div className="bg-dark-950 border border-white/5 rounded-2xl flex flex-col flex-grow overflow-hidden shadow-inner font-mono text-[11px] text-gray-400">
                    
                    {/* Console Header */}
                    <div className="bg-white/5 px-4 py-3 border-b border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                        <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="flex items-center gap-2">
                        <Flame className="w-3.5 h-3.5 text-rose-400" />
                        <span className="text-gray-300 font-semibold tracking-wide text-xs">Resume Roaster — Recruiter Console</span>
                      </div>
                      <span className="text-[10px] text-gray-500">v1.39 Hybrid Engine</span>
                    </div>

                    {/* Candidate Profile Switcher */}
                    <div className="p-3 bg-dark-950/70 border-b border-white/5 flex flex-col sm:flex-row gap-2 justify-between items-start sm:items-center text-xs">
                      <span className="text-gray-400 font-bold">Candidate:</span>
                      <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
                        {Object.entries(resumeProfiles).map(([key, profile]) => (
                          <button
                            key={key}
                            onClick={() => {
                              setSelectedResumeProfile(key);
                              setSelectedRoastQuestion(0);
                            }}
                            className={`px-2.5 py-1 rounded font-bold transition-all duration-200 cursor-pointer text-[10px] ${
                              selectedResumeProfile === key
                                ? 'bg-gradient-to-r from-rose-600/30 to-amber-600/30 text-rose-300 border border-rose-500/40'
                                : 'bg-white/5 hover:bg-white/10 text-gray-400 border border-transparent'
                            }`}
                          >
                            {key === 'mohith' ? 'Mohith (Systems)' : key === 'junior' ? 'Junior Dev' : 'Graphic Format'}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Scores Dashboard */}
                    <div className="p-4 border-b border-white/5 bg-white/[0.02]">
                      <div className="grid grid-cols-3 gap-3 text-center">
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                          <span className="text-[10px] uppercase text-gray-400 font-bold block mb-1">Resume Score</span>
                          <span className="text-xl md:text-2xl font-black text-rose-400">
                            {resumeProfiles[selectedResumeProfile].resumeScore}
                            <span className="text-xs text-gray-500 font-normal">/100</span>
                          </span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                          <span className="text-[10px] uppercase text-gray-400 font-bold block mb-1">ATS Match</span>
                          <span className="text-xl md:text-2xl font-black text-amber-400">
                            {resumeProfiles[selectedResumeProfile].atsScore}
                            <span className="text-xs text-gray-500 font-normal">/100</span>
                          </span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-center">
                          <span className="text-[10px] uppercase text-gray-400 font-bold block mb-1">Recruiter Tier</span>
                          <span className={`text-xs font-bold ${
                            resumeProfiles[selectedResumeProfile].tierColor === 'emerald' ? 'text-emerald-400' :
                            resumeProfiles[selectedResumeProfile].tierColor === 'amber' ? 'text-amber-400' : 'text-rose-400'
                          }`}>
                            {resumeProfiles[selectedResumeProfile].tier}
                          </span>
                        </div>
                      </div>

                      {/* ATS Factor Badges */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-3">
                        {resumeProfiles[selectedResumeProfile].atsFactors.map((f, i) => (
                          <div key={i} className="flex items-center justify-between px-2 py-1 rounded bg-black/40 border border-white/5 text-[9px]">
                            <span className="text-gray-400 truncate mr-1">{f.name.split(' ')[0]}</span>
                            <span className={`font-bold ${
                              f.status === 'Pass' ? 'text-emerald-400' :
                              f.status === 'Warning' ? 'text-amber-400' : 'text-rose-400'
                            }`}>
                              {f.score}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recruiter Unvarnished Roast Quote */}
                    <div className="p-4 border-b border-white/5 bg-rose-500/[0.03]">
                      <div className="flex items-start gap-2.5 mb-2">
                        <div className="p-1 rounded bg-rose-500/20 text-rose-300 mt-0.5">
                          <Flame className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-bold text-rose-400 tracking-wider">Recruiter Feedback (Google Gemini 1.5):</span>
                          <p className="text-gray-300 text-xs italic mt-1 leading-relaxed">
                            &ldquo;{resumeProfiles[selectedResumeProfile].roastQuote}&rdquo;
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 text-[10px] text-amber-300 bg-amber-500/10 border border-amber-500/20 rounded-lg px-2.5 py-1.5">
                        <strong>Fix First:</strong> {resumeProfiles[selectedResumeProfile].fixFirst}
                      </div>
                    </div>

                    {/* Interactive Recruiter Q&amp;A */}
                    <div className="p-4 flex-grow flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-2">
                          Ask the Recruiter (Interactive Follow-Up):
                        </span>
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {resumeProfiles[selectedResumeProfile].recruiterQuestions.map((item, qIdx) => (
                            <button
                              key={qIdx}
                              onClick={() => setSelectedRoastQuestion(qIdx)}
                              className={`text-[10px] text-left px-2.5 py-1.5 rounded-lg border transition-all duration-200 cursor-pointer truncate max-w-full ${
                                selectedRoastQuestion === qIdx
                                  ? 'bg-rose-500/20 border-rose-500/40 text-white'
                                  : 'bg-white/5 border-white/5 text-gray-400 hover:text-gray-200'
                              }`}
                            >
                              &bull; {item.q}
                            </button>
                          ))}
                        </div>
                        <div className="p-2.5 rounded-lg bg-black/60 border border-white/5 text-xs text-gray-300 leading-relaxed min-h-[60px]">
                          <span className="text-rose-400 font-bold mr-1.5">&gt; Recruiter:</span>
                          {resumeProfiles[selectedResumeProfile].recruiterQuestions[selectedRoastQuestion]?.a}
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Tech stack badge list */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {['Python 3.12', 'Google Gemini 1.5 Flash', 'Streamlit', 'PyMuPDF (fitz)', 'python-docx', 'Pydantic', 'Regex', 'Custom CSS3'].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-white/5 border border-white/5 text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Project 4: QueryMind (Text-to-SQL RAG) */}
            {activeProject === 'querymind' && (
              <motion.div
                key="querymind"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
              >
                {/* Info and Navigation Column */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/25 bg-emerald-500/10 text-emerald-300 text-xs font-semibold mb-4">
                      <Database className="w-3.5 h-3.5 text-teal-400" />
                      <span>Enterprise Text-to-SQL RAG Pipeline</span>
                    </div>

                    <h3 className="text-2xl md:text-3.5xl font-extrabold text-white mb-4">
                      QueryMind
                    </h3>

                    <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed">
                      An enterprise-grade, retrieval-augmented generation (RAG) conversational interface 
                      for relational databases (MySQL). Uses ChromaDB vector similarity search to dynamically 
                      retrieve only relevant table schemas, Google Gemini 2.5 Flash for ANSI SQL synthesis, 
                      two-tier security guardrails, and read-only database execution to deliver conversational business intelligence.
                    </p>

                    {/* Tab Navigation for details */}
                    <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-2">
                      {['overview', 'architecture', 'simulator'].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setQueryMindTab(tab)}
                          className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                            queryMindTab === tab
                              ? 'bg-white/10 text-white border border-white/10'
                              : 'text-gray-500 hover:text-gray-300 border border-transparent'
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>

                    {/* Tab Contents */}
                    <div className="min-h-[220px]">
                      {queryMindTab === 'overview' && (
                        <div className="space-y-4">
                          <h4 className="text-white font-bold text-sm uppercase tracking-wide">Key Technical Highlights:</h4>
                          <ul className="space-y-2.5 text-gray-400 text-sm">
                            <li className="flex items-start gap-2.5">
                              <span className="text-emerald-400 font-bold">✓</span>
                              <span><strong>Vector-Augmented Schema RAG:</strong> Solves the prompt context-window limit by embedding table metadata into 3072-dim ChromaDB vectors (<code className="text-emerald-300 font-mono text-xs">gemini-embedding-001</code>), dynamically injecting only top-K relevant schemas into prompts.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                              <span className="text-emerald-400 font-bold">✓</span>
                              <span><strong>Two-Tier Defense Security:</strong> Strict application-level regex validator blocks destructive DDL/DML statements, backed by a dedicated read-only MySQL role (<code className="text-emerald-300 font-mono text-xs">textsql_reader</code>) with execution row caps.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                              <span className="text-emerald-400 font-bold">✓</span>
                              <span><strong>Executive Business Synthesis:</strong> Translates raw database rows into conversational, analytical business answers with currency formatting and key metric highlights.</span>
                            </li>
                          </ul>
                        </div>
                      )}

                      {queryMindTab === 'architecture' && (
                        <div className="space-y-4">
                          <h4 className="text-white font-bold text-sm uppercase tracking-wide">5-Stage RAG Pipeline Architecture:</h4>
                          <div className="grid grid-cols-2 gap-4 text-xs">
                            <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                              <span className="text-emerald-400 font-semibold block mb-1">1. Vector Schema RAG</span>
                              Question is embedded into 3072-dim vector; ChromaDB cosine similarity retrieves only top-K matching table schemas.
                            </div>
                            <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                              <span className="text-emerald-400 font-semibold block mb-1">2. SQL Synthesis (Gemini)</span>
                              Gemini 2.5 Flash compiles natural language into standards-compliant ANSI MySQL syntax with relational JOIN constraints.
                            </div>
                            <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                              <span className="text-emerald-400 font-semibold block mb-1">3. Security Wall</span>
                              Regex blocklist rejects DROP, DELETE, INSERT, ALTER, multi-statement injection, and unpermitted schema access.
                            </div>
                            <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                              <span className="text-emerald-400 font-semibold block mb-1">4. Sandboxed MySQL &amp; NL</span>
                              Executed via textsql_reader role; tabular results fed back to Gemini for executive analytical commentary.
                            </div>
                          </div>
                        </div>
                      )}

                      {queryMindTab === 'simulator' && (
                        <div className="space-y-4">
                          <h4 className="text-white font-bold text-sm uppercase tracking-wide">Interactive Demo Details:</h4>
                          <p className="text-gray-400 text-xs leading-relaxed">
                            Interact with the live QueryMind RAG Pipeline Inspector on the right. Select sample enterprise questions, inspect the vector schema matches in ChromaDB, review the generated ANSI SQL query, verify the security sandbox pass, and review the executive conversational synthesis.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap items-center gap-4 mt-8">
                    <a
                      href="https://github.com/mohithreddy123-hub/QueryMind"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 hover:text-white flex items-center gap-2 font-bold text-sm transition-all duration-200"
                    >
                      <Github className="w-4 h-4" />
                      GitHub Code
                    </a>
                  </div>
                </div>

                {/* Simulated Screen / Visual Column */}
                <div className="lg:col-span-6 flex flex-col items-stretch">
                  <div className="bg-dark-950 border border-white/5 rounded-2xl flex flex-col flex-grow overflow-hidden shadow-inner font-mono text-[11px] text-gray-400">
                    
                    {/* Console Header */}
                    <div className="bg-white/5 px-4 py-3 border-b border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                        <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="flex items-center gap-2">
                        <Database className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-gray-300 font-semibold tracking-wide text-xs">QueryMind — RAG Pipeline Inspector</span>
                      </div>
                      <span className="text-[10px] text-emerald-400 font-bold">ChromaDB + MySQL</span>
                    </div>

                    {/* Query Preset Selector */}
                    <div className="p-3 bg-dark-950/70 border-b border-white/5 flex flex-col sm:flex-row gap-2 justify-between items-start sm:items-center text-xs">
                      <span className="text-gray-400 font-bold">Query:</span>
                      <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
                        {queryMindPresets.map((preset, idx) => (
                          <button
                            key={preset.id}
                            onClick={() => handleRunQuery(idx)}
                            className={`px-2.5 py-1 rounded font-bold transition-all duration-200 cursor-pointer text-[10px] ${
                              activeQueryPreset === idx
                                ? 'bg-gradient-to-r from-emerald-600/30 to-teal-600/30 text-emerald-300 border border-emerald-500/40'
                                : 'bg-white/5 hover:bg-white/10 text-gray-400 border border-transparent'
                            }`}
                          >
                            {preset.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Question Banner */}
                    <div className="px-4 py-2.5 border-b border-white/5 bg-white/[0.01] flex items-center gap-2">
                      <Search className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span className="text-gray-200 text-xs font-sans italic truncate">
                        &ldquo;{queryMindPresets[activeQueryPreset].query}&rdquo;
                      </span>
                    </div>

                    {/* Stage Navigation */}
                    <div className="px-4 py-2 border-b border-white/5 bg-black/40 flex items-center justify-between text-[10px]">
                      <div className="flex items-center gap-2">
                        {['pipeline', 'sql', 'answer'].map((st) => (
                          <button
                            key={st}
                            onClick={() => setActiveStageTab(st)}
                            className={`px-2 py-0.5 rounded font-bold uppercase transition-all duration-200 cursor-pointer ${
                              activeStageTab === st
                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                : 'text-gray-500 hover:text-gray-300'
                            }`}
                          >
                            {st === 'pipeline' ? '1. Vector RAG' : st === 'sql' ? '2. Generated SQL' : '3. Executive Insight'}
                          </button>
                        ))}
                      </div>
                      <span className="text-emerald-400/80 font-bold">{queryMindPresets[activeQueryPreset].executionTime}</span>
                    </div>

                    {/* Dynamic Stage Body */}
                    <div className="p-4 flex-grow min-h-[240px] flex flex-col justify-between">
                      {isSimulatingQuery ? (
                        <div className="flex flex-col items-center justify-center flex-grow py-8 text-emerald-400 animate-pulse gap-2">
                          <Terminal className="w-6 h-6 animate-spin" />
                          <span className="text-xs">Embedding question &amp; searching ChromaDB vectors...</span>
                        </div>
                      ) : (
                        <>
                          {activeStageTab === 'pipeline' && (
                            <div className="space-y-3">
                              <div>
                                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-1.5">
                                  Retrieved Schema Vectors (ChromaDB Cosine Match):
                                </span>
                                <div className="grid grid-cols-3 gap-2">
                                  {queryMindPresets[activeQueryPreset].retrievedSchemas.map((s, idx) => (
                                    <div key={idx} className="p-2 rounded-lg bg-black/60 border border-white/5">
                                      <span className="text-emerald-400 font-bold block text-xs truncate">{s.table}</span>
                                      <span className="text-[9px] text-gray-500 block">dist: {s.distance}</span>
                                      <span className="text-[9px] text-teal-300/80 block">{s.relevance}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div className="p-2.5 rounded-lg bg-emerald-500/5 border border-emerald-500/20 text-[10px]">
                                <span className="text-emerald-400 font-bold flex items-center gap-1 mb-0.5">
                                  <CheckCircle2 className="w-3 h-3" /> Security Sandbox Guardrail:
                                </span>
                                <span className="text-gray-300 font-sans">
                                  {queryMindPresets[activeQueryPreset].securityDetail}
                                </span>
                              </div>
                            </div>
                          )}

                          {activeStageTab === 'sql' && (
                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-[10px] text-gray-400">
                                <span>Synthesized ANSI SQL (Gemini 2.5 Flash):</span>
                                <span className="text-emerald-400 font-bold">Read-Only</span>
                              </div>
                              <pre className="p-3 rounded-lg bg-black/80 border border-white/5 text-[10.5px] text-emerald-300 font-mono overflow-x-auto leading-relaxed max-h-[160px]">
                                {queryMindPresets[activeQueryPreset].sql}
                              </pre>
                            </div>
                          )}

                          {activeStageTab === 'answer' && (
                            <div className="space-y-3">
                              {/* Executive Insight Box */}
                              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                                <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider block mb-1">
                                  Executive Business Insight:
                                </span>
                                <p className="text-gray-200 text-xs font-sans leading-relaxed">
                                  {queryMindPresets[activeQueryPreset].summary}
                                </p>
                              </div>

                              {/* Sample Result Preview Table */}
                              <div>
                                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-1">
                                  Database Result Set ({queryMindPresets[activeQueryPreset].rowCount} rows):
                                </span>
                                <div className="space-y-1">
                                  {queryMindPresets[activeQueryPreset].results.slice(0, 3).map((r, i) => (
                                    <div key={i} className="flex justify-between items-center px-2.5 py-1 rounded bg-black/50 border border-white/5 text-[10px]">
                                      <span className="text-white font-semibold truncate mr-2">{r.col1}</span>
                                      <span className="text-emerald-400 font-mono flex-shrink-0">{r.col2}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </>
                      )}

                      {/* Bottom Quick-Action Buttons */}
                      <div className="flex items-center justify-between pt-3 mt-2 border-t border-white/5 text-[10px]">
                        <div className="flex items-center gap-1.5 text-gray-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Gemini 2.5 Flash + ChromaDB v1.5.9</span>
                        </div>
                        <button
                          onClick={() => handleRunQuery((activeQueryPreset + 1) % queryMindPresets.length)}
                          className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-gray-300 font-bold transition-all cursor-pointer flex items-center gap-1"
                        >
                          <RotateCcw className="w-3 h-3" /> Next Query
                        </button>
                      </div>
                    </div>

                  </div>

                  {/* Tech stack badge list */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {['Python 3.11+', 'Google Gemini 2.5 Flash', 'ChromaDB Vector Store', 'MySQL 8.0', 'PyMySQL', 'Streamlit', 'Regex Guardrails'].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-white/5 border border-white/5 text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
            
          </AnimatePresence>

        </motion.div>

      </div>
    </section>
  );
}
