import { motion } from 'framer-motion';
import { Trophy, Award, Target, Users } from 'lucide-react';

const achievementData = {
  title: 'AIML Hackathon 2025 Finalist',
  location: 'Hyderabad',
  meta: 'Organized by industry partners & AI communities',
  desc: 'Represented as one of the select few finalists at the state-level hackathon for developing a high-accuracy, deployable machine learning recommendation engine designed to address real-world business challenges.',
  bullets: [
    {
      icon: Target,
      text: 'Engineered a recommendation model using Python, Pandas, and Scikit-learn to parse user behavior and match items.',
    },
    {
      icon: Users,
      text: 'Presented the solution directly to a panel of expert judges, highlighting practical business metrics and scalability.',
    },
    {
      icon: Trophy,
      text: 'Ranked in the top percentage of submissions based on code quality, model accuracy, and business applicability.',
    }
  ]
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-dark-950">
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-indigo-500/5 blur-[90px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3">Recognitions</h2>
          <p className="text-3xl md:text-5xl font-extrabold text-white font-sans">
            Hackathons & Achievements
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl border border-white/5 p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center"
        >
          {/* Animated decorative ring */}
          <div className="absolute -right-24 -top-24 w-60 h-60 rounded-full border border-indigo-500/10 pointer-events-none" />
          
          {/* Visual Trophy Circle */}
          <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 border border-indigo-500/30 flex items-center justify-center relative shadow-[0_0_30px_rgba(99,102,241,0.15)] group-hover:scale-105 transition-transform duration-300">
            <Award className="w-12 md:w-16 h-12 md:h-16 text-indigo-400" />
            
            {/* Pulsing indicator */}
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-cyan-400" />
          </div>

          {/* Achievement Details */}
          <div className="flex-grow space-y-4 text-center md:text-left">
            <div className="space-y-1">
              <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest">
                {achievementData.location}
              </span>
              <h3 className="text-2xl md:text-3.5xl font-extrabold text-white">
                {achievementData.title}
              </h3>
              <p className="text-gray-400 text-xs italic">
                {achievementData.meta}
              </p>
            </div>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              {achievementData.desc}
            </p>

            {/* Bullets with icons */}
            <div className="grid grid-cols-1 gap-4 pt-4 text-left">
              {achievementData.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="p-2 w-fit rounded-lg bg-white/5 border border-white/5 flex-shrink-0 text-cyan-400">
                    <bullet.icon className="w-4 h-4" />
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {bullet.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
