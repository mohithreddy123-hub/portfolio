import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle } from 'lucide-react';

const courses = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'Database Management Systems (DBMS)',
  'Web Engineering (Full Stack)',
  'Machine Learning & Data Science',
  'Computer Vision (OpenCV Pipeline)',
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-dark-950">
      {/* Glow blobs */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3">Academic Path</h2>
          <p className="text-3xl md:text-5xl font-extrabold text-white font-sans">
            Education Timeline
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Education Item Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl border border-white/5 p-8 md:p-10 shadow-2xl relative overflow-hidden"
        >
          {/* Card Accent line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 to-cyan-500" />

          {/* Core Info */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-white/5">
            <div className="flex items-center gap-4.5">
              <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Anurag University
                </h3>
                <p className="text-indigo-300 text-sm font-semibold tracking-wide">
                  Bachelor of Technology in Computer Science & Engineering
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 font-semibold text-xs text-gray-400">
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                2022 — 2026
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                Hyderabad, India
              </span>
            </div>
          </div>

          {/* Academic Stats and Subject Coverage */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8">
            
            {/* Left Column: Grade Stats */}
            <div className="md:col-span-4 flex flex-col justify-center items-center text-center p-6 bg-white/5 border border-white/5 rounded-2xl">
              <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest block mb-2">
                Cumulative Grade Point
              </span>
              <span className="text-4xl md:text-5xl font-extrabold text-white tracking-tight font-mono text-glow-indigo">
                7.29
              </span>
              <span className="text-indigo-400 text-xs font-bold block mt-1">
                Out of 10.0 CGPA
              </span>
              <div className="mt-4 flex items-center gap-1.5 text-xs text-emerald-400 font-bold tracking-wider uppercase bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                <Award className="w-3.5 h-3.5" />
                First Class
              </div>
            </div>

            {/* Right Column: Major Courses */}
            <div className="md:col-span-8 space-y-4">
              <h4 className="text-white font-bold text-sm uppercase tracking-wide">
                Key Coursework & Domains Covered:
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Completed rigorous foundational computer science courses focusing on software patterns, data management, and predictive machine learning architectures:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {courses.map((course, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-gray-300 text-xs font-medium">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}
