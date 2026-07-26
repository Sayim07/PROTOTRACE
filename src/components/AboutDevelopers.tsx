import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const AboutDevelopers: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-center items-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-2xl"
      >
        <div className="glass-panel p-10 md:p-16 border border-glass-border relative overflow-hidden">
          {/* Subtle background effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-cyan/5 to-transparent pointer-events-none" />
          
          <h2 className="text-2xl md:text-3xl font-light text-gray-300 mb-12 tracking-wide leading-relaxed">
            Crafted & Maintained by <span className="font-bold text-white text-gradient">SMDEV</span> & <span className="font-bold text-white text-gradient">SLVERSE</span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#"
              className="group relative px-8 py-3 rounded-full bg-void border border-white/10 hover:border-cyan/50 transition-colors duration-300 overflow-hidden flex items-center gap-2"
            >
              <div className="absolute inset-0 bg-cyan/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 text-sm font-medium tracking-widest text-gray-300 group-hover:text-cyan transition-colors">
                VIEW SMDEV
              </span>
              <ArrowRight className="w-4 h-4 relative z-10 text-gray-500 group-hover:text-cyan transition-colors group-hover:translate-x-1" />
            </a>

            <a 
              href="#"
              className="group relative px-8 py-3 rounded-full bg-void border border-white/10 hover:border-violet/50 transition-colors duration-300 overflow-hidden flex items-center gap-2"
            >
              <div className="absolute inset-0 bg-violet/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 text-sm font-medium tracking-widest text-gray-300 group-hover:text-violet transition-colors">
                VIEW SLVERSE
              </span>
              <ArrowRight className="w-4 h-4 relative z-10 text-gray-500 group-hover:text-violet transition-colors group-hover:translate-x-1" />
            </a>
          </div>
          {/* GitHub Links Section */}
          <div className="mt-8 pt-8 border-t border-glass-border flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://github.com/Sayim07"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-transparent hover:border-cyan/30 transition-all duration-300"
            >
              <GithubIcon className="w-5 h-5 text-gray-400 group-hover:text-cyan transition-colors" />
              <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">SMDEV GitHub</span>
            </a>
            
            <a 
              href="https://github.com/ShreyasiLaha"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-transparent hover:border-violet/30 transition-all duration-300"
            >
              <GithubIcon className="w-5 h-5 text-gray-400 group-hover:text-violet transition-colors" />
              <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">SLVERSE GitHub</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutDevelopers;
