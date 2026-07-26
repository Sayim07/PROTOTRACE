import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import clsx from 'clsx';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setFormData({ name: '', email: '', projectType: '', budget: '', message: '' });
      
      setTimeout(() => setShowToast(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const inputClasses = "w-full bg-void/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition-all duration-300";

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-4xl mx-auto min-h-screen flex flex-col justify-center relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet to-cyan">Initiate Protocol</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to build the future? Drop us a line at <a href="mailto:hello@prototrace.dev" className="text-cyan hover:underline">hello@prototrace.dev</a> or use the secure terminal below.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="glass-panel p-8 md:p-12 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Identifier (Name)</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className={inputClasses}
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Comms Link (Email)</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={inputClasses}
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-gray-400 mb-2">Vector (Project Type)</label>
              <select
                id="projectType"
                name="projectType"
                required
                value={formData.projectType}
                onChange={handleChange}
                className={clsx(inputClasses, "appearance-none bg-void")}
              >
                <option value="" disabled>Select Vector</option>
                <option value="Web3">Web3 / Blockchain</option>
                <option value="Mobile">Mobile Application</option>
                <option value="WebApp">Web Application</option>
                <option value="DesignSystem">Design System</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-400 mb-2">Resources (Budget)</label>
              <select
                id="budget"
                name="budget"
                required
                value={formData.budget}
                onChange={handleChange}
                className={clsx(inputClasses, "appearance-none bg-void")}
              >
                <option value="" disabled>Select Range</option>
                <option value="<5k">&lt; $5,000</option>
                <option value="5k-15k">$5,000 - $15,000</option>
                <option value="15k-50k">$15,000 - $50,000</option>
                <option value=">50k">&gt; $50,000</option>
              </select>
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Payload (Message)</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={clsx(inputClasses, "resize-none")}
              placeholder="Describe your vision..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full relative group overflow-hidden rounded-xl p-[1px]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan to-violet rounded-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative bg-void px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 group-hover:bg-void/80">
              {isSubmitting ? (
                <div className="w-6 h-6 border-2 border-cyan border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span className="font-bold tracking-widest text-white group-hover:text-cyan transition-colors">TRANSMIT</span>
                  <Send className="w-5 h-5 text-violet group-hover:text-cyan group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </>
              )}
            </div>
          </button>
        </form>
      </motion.div>

      {/* Success Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className="fixed bottom-8 left-1/2 z-50 glass-panel border-cyan/30 px-6 py-4 flex items-center gap-3 neon-glow shadow-2xl"
          >
            <CheckCircle2 className="w-6 h-6 text-cyan" />
            <span className="text-white font-medium">Transmission successful. We will respond shortly.</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
