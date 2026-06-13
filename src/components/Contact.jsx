import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const Github = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Instagram = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formState, setFormState] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all required fields.');
      setFormState('error');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      setFormState('error');
      return;
    }

    setFormState('submitting');
    setErrorMessage('');

    // Simulate sending email API
    setTimeout(() => {
      setFormState('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-dark-900">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3">Get In Touch</h2>
          <p className="text-3xl md:text-5xl font-extrabold text-white font-sans">
            Let's Start a Conversation
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Info Card Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white tracking-wide">Contact Details</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Have a project idea, scaling challenge, or looking to add a full-stack engineer to your team? Drop a message or reach out through my direct coordinates.
              </p>

              {/* Direct Info list */}
              <div className="space-y-4 pt-4">
                <a
                  href="mailto:mohithreddy382@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/35 hover:bg-white/10 group transition-all duration-300"
                >
                  <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:scale-105 transition-transform duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs font-semibold block mb-0.5">Email</span>
                    <span className="text-white text-sm font-semibold tracking-wide">mohithreddy382@gmail.com</span>
                  </div>
                </a>

                <a
                  href="tel:+919182679465"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/35 hover:bg-white/10 group transition-all duration-300"
                >
                  <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:scale-105 transition-transform duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs font-semibold block mb-0.5">Phone</span>
                    <span className="text-white text-sm font-semibold tracking-wide">+91 9182679465</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs font-semibold block mb-0.5">Location</span>
                    <span className="text-white text-sm font-semibold tracking-wide">Hyderabad, Telangana, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Connection Badges */}
            <div className="space-y-4">
              <h4 className="text-white font-bold text-xs uppercase tracking-widest">Connect on Networks</h4>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/mohithreddy123-hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 text-gray-300 hover:text-white flex items-center justify-center gap-2 font-bold text-xs transition-all duration-200"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/mohith-reddy-k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/30 text-gray-300 hover:text-indigo-400 flex items-center justify-center gap-2 font-bold text-xs transition-all duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/mohith7512?igsh=MXBvaWE2bDRkcnR5Yw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-white/5 border border-white/5 hover:border-pink-500/30 text-gray-300 hover:text-pink-400 flex items-center justify-center gap-2 font-bold text-xs transition-all duration-200"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Form Card Column */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl border border-white/5 p-8 shadow-2xl h-full flex flex-col justify-between">
              
              <AnimatePresence mode="wait">
                {formState !== 'success' ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6 flex flex-col justify-between h-full"
                  >
                    <div className="space-y-5">
                      <h3 className="text-white font-bold text-lg mb-2">Send a Message</h3>
                      
                      {formState === 'error' && (
                        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 flex-shrink-0" />
                          <span>{errorMessage}</span>
                        </div>
                      )}

                      {/* Name input */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label htmlFor="name" className="text-gray-400 text-xs font-bold uppercase tracking-wider">Name *</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 focus:border-indigo-500/40 text-white text-sm outline-none transition-all duration-200 font-sans"
                          />
                        </div>
                        
                        {/* Email input */}
                        <div className="space-y-1.5">
                          <label htmlFor="email" className="text-gray-400 text-xs font-bold uppercase tracking-wider">Email *</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@example.com"
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 focus:border-indigo-500/40 text-white text-sm outline-none transition-all duration-200 font-sans"
                          />
                        </div>
                      </div>

                      {/* Subject input */}
                      <div className="space-y-1.5">
                        <label htmlFor="subject" className="text-gray-400 text-xs font-bold uppercase tracking-wider">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Project Collaboration"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 focus:border-indigo-500/40 text-white text-sm outline-none transition-all duration-200 font-sans"
                        />
                      </div>

                      {/* Message input */}
                      <div className="space-y-1.5">
                        <label htmlFor="message" className="text-gray-400 text-xs font-bold uppercase tracking-wider">Message *</label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell me about your project details..."
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 focus:border-indigo-500/40 text-white text-sm outline-none resize-none transition-all duration-200 font-sans"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={formState === 'submitting'}
                      className="w-full py-4 mt-6 rounded-xl text-white font-bold tracking-wider bg-gradient-to-r from-indigo-600 to-indigo-500 hover:opacity-90 active:scale-[0.99] shadow-lg shadow-indigo-600/20 disabled:bg-indigo-800 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all duration-200"
                    >
                      {formState === 'submitting' ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="contact-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center p-8 h-full space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/35 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)] animate-bounce">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-white font-extrabold text-2xl">Message Sent Successfully!</h3>
                      <p className="text-gray-400 text-sm max-w-sm">
                        Thank you for reaching out. I have received your message and will get back to you as soon as possible.
                      </p>
                    </div>

                    <button
                      onClick={() => setFormState('idle')}
                      className="px-6 py-2.5 rounded-xl border border-white/10 hover:border-white/20 text-gray-300 hover:text-white font-bold text-xs bg-white/5 transition-all duration-200"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
