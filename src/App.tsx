import { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';
import Lenis from 'lenis';
import Loader from './components/ui/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Spring-smoothed cursor coordinates for spotlight
  const mouseX = useSpring(0, { stiffness: 120, damping: 20, mass: 0.2 });
  const mouseY = useSpring(0, { stiffness: 120, damping: 20, mass: 0.2 });

  useEffect(() => {
    // 1. Initialize Lenis Scroll Engine
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2.0,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // 2. Mouse move listener for spotlight
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      lenis.destroy();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* 1. Preloader Screen */}
      <Loader onComplete={() => setIsLoading(false)} />

      {/* 2. Main Content (reveals when loader ends) */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative min-h-screen bg-dark-950 text-gray-200 overflow-x-hidden selection:bg-indigo-500/30 selection:text-indigo-200"
        >
          {/* Mouse spotlight cursor glow layer */}
          <motion.div
            style={{ x: mouseX, y: mouseY }}
            className="fixed top-0 left-0 w-[450px] h-[450px] rounded-full pointer-events-none z-30 bg-indigo-500/5 blur-[120px] -translate-x-1/2 -translate-y-1/2 hidden md:block"
          />

          {/* Global Floating Background Blobs */}
          <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Blob 1 */}
            <motion.div
              animate={{
                x: [0, 80, -50, 0],
                y: [0, -60, 40, 0],
                scale: [1, 1.1, 0.95, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 25,
                ease: 'easeInOut',
              }}
              className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-indigo-500/5 blur-[100px]"
            />
            {/* Blob 2 */}
            <motion.div
              animate={{
                x: [0, -100, 60, 0],
                y: [0, 80, -50, 0],
                scale: [1, 0.9, 1.15, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: 'easeInOut',
              }}
              className="absolute bottom-[10%] right-[5%] w-[450px] h-[450px] rounded-full bg-cyan-500/4 blur-[120px]"
            />
            {/* Blob 3 */}
            <motion.div
              animate={{
                x: [0, 40, -30, 0],
                y: [0, 50, -40, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: 'easeInOut',
              }}
              className="absolute top-[60%] left-[50%] -translate-x-1/2 w-[350px] h-[350px] rounded-full bg-purple-500/3 blur-[100px]"
            />
          </div>

          {/* Main Core Site Layout */}
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            
            <main className="flex-grow">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Achievements />
              <Certifications />
              <Education />
              <Contact />
            </main>
            
            <Footer />
          </div>
        </motion.div>
      )}
    </>
  );
}
