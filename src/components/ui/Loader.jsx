import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onComplete }) {
  const [visible, setVisible] = useState(true);
  const firstName = 'MOHITH'.split('');
  const lastName = 'REDDY'.split('');

  useEffect(() => {
    // Hold preloader for 2 seconds then trigger exit animation
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          key="loader-container"
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100svh',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[100] bg-dark-950 flex flex-col items-center justify-center font-sans select-none"
        >
          {/* Subtle Ambient Background Blob */}
          <div className="absolute w-[300px] h-[300px] bg-indigo-500/10 blur-[80px] rounded-full animate-pulse-slow" />

          {/* Letter Reveal Container */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-2 relative z-10"
          >
            {/* Name letters */}
            <div className="flex gap-2 flex-wrap justify-center text-4xl md:text-6xl font-black tracking-widest text-white font-sans">
              <div className="flex">
                {firstName.map((char, index) => (
                  <motion.span key={index} variants={letterVariants} className="inline-block">
                    {char}
                  </motion.span>
                ))}
              </div>
              <div className="flex ml-4">
                {lastName.map((char, index) => (
                  <motion.span key={index} variants={letterVariants} className="inline-block">
                    {char}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Glowing developer sub-badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-6 flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-widest font-mono border border-indigo-500/20 bg-indigo-500/5 px-4 py-1.5 rounded-full"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              SYSTEMS ARCHITECT & DEVELOPER
            </motion.div>
          </motion.div>

          {/* Bottom loading progress line */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-white/10 overflow-hidden">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="w-1/2 h-full bg-gradient-to-r from-indigo-500 to-cyan-400"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
