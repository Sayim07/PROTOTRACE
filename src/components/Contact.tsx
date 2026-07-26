import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
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
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage("");
    
    try {
      const payload = {
        access_key: "4eb68d14-a600-4fc3-ac9d-699e75d10546",
        ...formData
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', projectType: '', budget: '', message: '' });
      } else {
        setErrorMessage(result.message || "Something went wrong. Please try again.");
        setSubmitStatus('error');
      }
    } catch (error) {
      setErrorMessage("Network error. Please try again or email us directly at prototracedev@gmail.com.");
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
            Ready to build the future? Drop us a line at <a href="mailto:prototracedev@gmail.com" className="text-cyan hover:underline">prototracedev@gmail.com</a> or use the secure terminal below.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="glass-panel p-8 md:p-12 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-gray-400 mb-2">Project Type</label>
              <select
                id="projectType"
                name="projectType"
                required
                value={formData.projectType}
                onChange={handleChange}
                className={clsx(inputClasses, "appearance-none bg-void")}
              >
                <option value="" disabled>Select Project Type</option>
                <option value="Web3">Web3 / Blockchain</option>
                <option value="Mobile">Mobile Application</option>
                <option value="WebApp">Web Application</option>
                <option value="DesignSystem">Design System</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-400 mb-2">Your Budget</label>
              <input
                type="text"
                id="budget"
                name="budget"
                required
                value={formData.budget}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Enter your budget range"
              />
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Project Description</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={clsx(inputClasses, "resize-none")}
              placeholder="Describe your project vision and requirements..."
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
                <>
                  <div className="w-5 h-5 border-2 border-cyan border-t-transparent rounded-full animate-spin" />
                  <span className="font-bold tracking-widest text-white transition-colors">SENDING...</span>
                </>
              ) : (
                <>
                  <span className="font-bold tracking-widest text-white group-hover:text-cyan transition-colors">SEND MESSAGE</span>
                  <Send className="w-5 h-5 text-violet group-hover:text-cyan group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </>
              )}
            </div>
          </button>
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 glass-panel border-green-500/30 px-6 py-4 flex items-center justify-center gap-3 bg-green-500/10"
            >
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-400" />
              <span className="text-green-100 font-medium text-sm text-center">Thank you! Your message has been sent to Prototrace.</span>
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 glass-panel border-red-500/30 px-6 py-4 flex items-center justify-center gap-3 bg-red-500/10"
            >
              <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-400" />
              <span className="text-red-100 font-medium text-sm text-center">
                {errorMessage || "Something went wrong. Please try again or email us directly at prototracedev@gmail.com."}
              </span>
            </motion.div>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
