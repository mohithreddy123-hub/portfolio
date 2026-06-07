import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, ShieldCheck, Cpu, Settings, ClipboardList, Wallet } from 'lucide-react';

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

type TabType = 'overview' | 'architecture' | 'simulator';

export default function Projects() {
  const [activeProject, setActiveProject] = useState<'tenantvault' | 'facevitals' | 'tracknest'>('tenantvault');
  const [tenantVaultTab, setTenantVaultTab] = useState<TabType>('overview');
  const [faceVitalsTab, setFaceVitalsTab] = useState<TabType>('overview');
  const [trackNestTab, setTrackNestTab] = useState<TabType>('overview');

  // Simulator States for TrackNest
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Deploy Django API to Render', status: 'Completed' },
    { id: 2, text: 'Set up MySQL database schemas', status: 'Completed' },
    { id: 3, text: 'Configure JWT rotation interceptors', status: 'In Progress' },
    { id: 4, text: 'Write React private route guards', status: 'Pending' }
  ]);
  const [expenses, setExpenses] = useState([
    { id: 1, name: 'Server Hosting (Render)', amount: 20 },
    { id: 2, name: 'Database instance (MySQL)', amount: 15 },
    { id: 3, name: 'Domain Registration', amount: 12 }
  ]);
  const [newTaskText, setNewTaskText] = useState('');
  const [newExpenseName, setNewExpenseName] = useState('');
  const [newExpenseAmount, setNewExpenseAmount] = useState('');

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;
    setTasks(prev => [
      ...prev,
      { id: Date.now(), text: newTaskText.trim(), status: 'Pending' }
    ]);
    setNewTaskText('');
  };

  const toggleTaskStatus = (id: number) => {
    setTasks(prev => prev.map(t => {
      if (t.id === id) {
        const nextStatus = t.status === 'Pending' ? 'In Progress' : t.status === 'In Progress' ? 'Completed' : 'Pending';
        return { ...t, status: nextStatus };
      }
      return t;
    }));
  };

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newExpenseName.trim() || !newExpenseAmount.trim()) return;
    const amt = parseFloat(newExpenseAmount);
    if (isNaN(amt)) return;
    setExpenses(prev => [
      ...prev,
      { id: Date.now(), name: newExpenseName.trim(), amount: amt }
    ]);
    setNewExpenseName('');
    setNewExpenseAmount('');
  };

  const handleDeleteExpense = (id: number) => {
    setExpenses(prev => prev.filter(e => e.id !== id));
  };

  const taskCompletionRate = tasks.length ? Math.round((tasks.filter(t => t.status === 'Completed').length / tasks.length) * 100) : 0;
  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  // Simulator States for TenantVault
  const [consoleLogs, setConsoleLogs] = useState<string[]>([
    'Initializing TenantVault core modules...',
    'Connecting to Neon serverless PostgreSQL database...',
    'Celery workers pool initialized: 4 active processes.',
    'Ready for incoming tenant requests.'
  ]);
  const [simTenant, setSimTenant] = useState<'Enterprise' | 'Startup' | 'Developer'>('Developer');
  const [simFileEncrypting, setSimFileEncrypting] = useState(false);
  const [simEncryptResult, setSimEncryptResult] = useState<string | null>(null);

  // Simulator States for FaceVitals
  const [heartRate, setHeartRate] = useState(72);
  const [respRate, setRespRate] = useState(16);
  const [signalQuality, setSignalQuality] = useState(94);
  const [ppgPoints, setPpgPoints] = useState<number[]>([]);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

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
          <div className="bg-white/5 border border-white/5 p-1 rounded-2xl flex max-w-2xl w-full relative z-20">
            <button
              onClick={() => setActiveProject('tenantvault')}
              className={`flex-1 py-3.5 rounded-xl font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer ${
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
              className={`flex-1 py-3.5 rounded-xl font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer ${
                activeProject === 'facevitals'
                  ? 'bg-gradient-to-r from-cyan-600 to-cyan-500 text-white shadow-lg shadow-cyan-600/30'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Cpu className="w-4 h-4" />
              FaceVitals ML/CV
            </button>
            <button
              onClick={() => setActiveProject('tracknest')}
              className={`flex-1 py-3.5 rounded-xl font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer ${
                activeProject === 'tracknest'
                  ? 'bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-lg shadow-emerald-600/30'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <ClipboardList className="w-4 h-4" />
              TrackNest Dashboard
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
                      {(['overview', 'architecture', 'simulator'] as TabType[]).map((tab) => (
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
                          {(['Developer', 'Startup', 'Enterprise'] as const).map((tier) => (
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
                      {(['overview', 'architecture', 'simulator'] as TabType[]).map((tab) => (
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

            {/* Project 3: TrackNest */}
            {activeProject === 'tracknest' && (
              <motion.div
                key="tracknest"
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
                      <span>Full Stack Productivity & Budget SaaS</span>
                    </div>

                    <h3 className="text-2xl md:text-3.5xl font-extrabold text-white mb-4">
                      TrackNest
                    </h3>

                    <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed">
                      A professional full-stack application designed to unify task management 
                      and expense tracking, providing real-time aggregated metrics, multi-user 
                      isolation, and dynamic visual dashboards.
                    </p>

                    {/* Tab Navigation for details */}
                    <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-2">
                      {(['overview', 'architecture', 'simulator'] as TabType[]).map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setTrackNestTab(tab)}
                          className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                            trackNestTab === tab
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
                      {trackNestTab === 'overview' && (
                        <div className="space-y-4">
                          <h4 className="text-white font-bold text-sm uppercase tracking-wide">Key Technical Features:</h4>
                          <ul className="space-y-2.5 text-gray-400 text-sm">
                            <li className="flex items-start gap-2.5">
                              <span className="text-emerald-400 font-bold">✓</span>
                              <span><strong>Unified Dashboard Interface:</strong> Real-time synchronization of daily expenses and multi-tiered task statuses (Pending, In Progress, Completed).</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                              <span className="text-emerald-400 font-bold">✓</span>
                              <span><strong>Real-time Analytical Aggregation:</strong> Executes high-performance sum and completion calculations on database querysets using optimized indexes.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                              <span className="text-emerald-400 font-bold">✓</span>
                              <span><strong>JWT Session Security:</strong> SimpleJWT-based user authentication on the API with automated frontend rotation and session clear rules.</span>
                            </li>
                          </ul>
                        </div>
                      )}

                      {trackNestTab === 'architecture' && (
                        <div className="space-y-4">
                          <h4 className="text-white font-bold text-sm uppercase tracking-wide">System Architecture:</h4>
                          <div className="grid grid-cols-2 gap-4 text-xs">
                            <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                              <span className="text-emerald-400 font-semibold block mb-1">Frontend Client</span>
                              React SPA built with Axios interceptors, protected routing guards, React Router, and React Hot Toast feedback.
                            </div>
                            <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                              <span className="text-emerald-400 font-semibold block mb-1">REST Backend</span>
                              Django REST Framework endpoint system, customized global exception handlers, and API request throttling.
                            </div>
                            <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                              <span className="text-emerald-400 font-semibold block mb-1">Persistent Storage</span>
                              Scalable, structured MySQL relational database utilizing relational indexing and row-level data isolation.
                            </div>
                            <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                              <span className="text-emerald-400 font-semibold block mb-1">Hosting & Deployment</span>
                              Hosted on Render platforms, served via Gunicorn servers and WhiteNoise middleware for static asset loads.
                            </div>
                          </div>
                        </div>
                      )}

                      {trackNestTab === 'simulator' && (
                        <div className="space-y-4">
                          <h4 className="text-white font-bold text-sm uppercase tracking-wide">Interactive Demo Details:</h4>
                          <p className="text-gray-400 text-xs leading-relaxed">
                            Interact with the live dashboard simulator on the right. You can add new tasks, toggle task statuses, add expenses, and see the completion rates and budgets adjust instantly in the analytics overlay!
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap items-center gap-4 mt-8">
                    <a
                      href="https://github.com/mohithreddy123-hub/portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 hover:text-white flex items-center gap-2 font-bold text-sm transition-all duration-200"
                    >
                      <Github className="w-4 h-4" />
                      GitHub Code
                    </a>
                    <a
                      href="https://tracknest-frontend-x6ln.onrender.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold text-sm flex items-center gap-2 hover:opacity-90 transition-all duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Application
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
                      <span className="text-gray-400 font-semibold tracking-wide text-xs">TrackNest Real-Time Dashboard</span>
                      <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        CONNECTED
                      </span>
                    </div>

                    {/* Dashboard Mini-Analytics Header */}
                    <div className="p-4 grid grid-cols-2 gap-4 border-b border-white/5">
                      <div className="bg-white/5 p-3 rounded-xl text-center border border-white/5">
                        <span className="text-gray-400 text-[10px] uppercase font-bold block mb-1">Task Progress</span>
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-emerald-400 text-2xl font-bold font-mono text-glow-emerald">{taskCompletionRate}%</span>
                        </div>
                        <div className="w-full bg-white/10 h-1 rounded-full mt-2 overflow-hidden">
                          <div className="bg-emerald-400 h-full transition-all duration-300" style={{ width: `${taskCompletionRate}%` }} />
                        </div>
                      </div>
                      
                      <div className="bg-white/5 p-3 rounded-xl text-center border border-white/5">
                        <span className="text-gray-400 text-[10px] uppercase font-bold block mb-1">Total Expenses</span>
                        <span className="text-cyan-400 text-2xl font-bold font-mono text-glow-cyan">${totalExpenses}</span>
                        <span className="text-gray-400 text-[9px] block mt-1">MySQL Indexed Sum</span>
                      </div>
                    </div>

                    {/* Simulator Panels split */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 flex-grow overflow-y-auto max-h-[300px]">
                      {/* Tasks panel */}
                      <div className="space-y-3">
                        <div className="flex justify-between items-center border-b border-white/5 pb-1">
                          <span className="text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-1">
                            <ClipboardList className="w-3 h-3 text-emerald-400" />
                            Tasks ({tasks.length})
                          </span>
                        </div>

                        {/* Task Form */}
                        <form onSubmit={handleAddTask} className="flex gap-1">
                          <input
                            type="text"
                            value={newTaskText}
                            onChange={(e) => setNewTaskText(e.target.value)}
                            placeholder="Add task..."
                            className="flex-grow px-2 py-1 bg-white/5 border border-white/5 rounded text-[10px] text-white outline-none focus:border-emerald-500/30 font-sans"
                          />
                          <button type="submit" className="px-2 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-[10px] font-bold cursor-pointer">+</button>
                        </form>

                        {/* Task List */}
                        <div className="space-y-1.5 max-h-[160px] overflow-y-auto pr-1">
                          {tasks.map(t => (
                            <div key={t.id} className="flex justify-between items-center p-1.5 rounded bg-white/5 border border-white/5 text-[9px] font-sans">
                              <span className="text-gray-300 truncate max-w-[100px]">{t.text}</span>
                              <button
                                onClick={() => toggleTaskStatus(t.id)}
                                className={`px-1.5 py-0.5 rounded text-[8px] font-bold transition-all duration-200 cursor-pointer ${
                                  t.status === 'Completed'
                                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                    : t.status === 'In Progress'
                                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                                    : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                                }`}
                              >
                                {t.status}
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Expenses panel */}
                      <div className="space-y-3">
                        <div className="flex justify-between items-center border-b border-white/5 pb-1">
                          <span className="text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-1">
                            <Wallet className="w-3 h-3 text-cyan-400" />
                            Expenses
                          </span>
                        </div>

                        {/* Expense Form */}
                        <form onSubmit={handleAddExpense} className="flex gap-1">
                          <input
                            type="text"
                            value={newExpenseName}
                            onChange={(e) => setNewExpenseName(e.target.value)}
                            placeholder="Name"
                            className="w-1/2 px-1.5 py-1 bg-white/5 border border-white/5 rounded text-[10px] text-white outline-none focus:border-cyan-500/30 font-sans"
                          />
                          <input
                            type="number"
                            value={newExpenseAmount}
                            onChange={(e) => setNewExpenseAmount(e.target.value)}
                            placeholder="$"
                            className="w-1/4 px-1 py-1 bg-white/5 border border-white/5 rounded text-[10px] text-white outline-none focus:border-cyan-500/30 font-sans"
                          />
                          <button type="submit" className="w-1/4 py-1 bg-cyan-600 hover:bg-cyan-500 text-white rounded text-[10px] font-bold cursor-pointer">+</button>
                        </form>

                        {/* Expenses list */}
                        <div className="space-y-1.5 max-h-[160px] overflow-y-auto pr-1">
                          {expenses.map(e => (
                            <div key={e.id} className="flex justify-between items-center p-1.5 rounded bg-white/5 border border-white/5 text-[9px] font-sans">
                              <div className="flex flex-col truncate max-w-[80px]">
                                <span className="text-gray-300 truncate">{e.name}</span>
                              </div>
                              <div className="flex items-center gap-2 flex-shrink-0">
                                <span className="text-cyan-400 font-bold font-mono">${e.amount}</span>
                                <button
                                  onClick={() => handleDeleteExpense(e.id)}
                                  className="text-gray-500 hover:text-rose-400 font-bold cursor-pointer text-[8px]"
                                >
                                  ✖
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tech stack badge list */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {['React.js', 'Django REST Framework', 'MySQL', 'SimpleJWT', 'Axios', 'Gunicorn', 'WhiteNoise', 'Render'].map((tech) => (
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
