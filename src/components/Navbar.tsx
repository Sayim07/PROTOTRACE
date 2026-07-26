import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const links = ['Projects', 'Capabilities', 'Track Record', 'About', 'Contact'];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.toLowerCase().replace(' ', '-'));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex justify-between items-center glass-panel border-b-0 rounded-none rounded-b-2xl mx-4 mt-4 lg:mx-auto max-w-7xl"
    >
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}>
        <div className="w-8 h-8 rounded-full bg-cyan/10 flex items-center justify-center neon-glow">
          <span className="text-cyan font-bold text-xl">P</span>
        </div>
        <span className="text-xl font-bold tracking-widest text-white">PROTOTRACE</span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <button
            key={link}
            onClick={() => scrollToSection(link)}
            className="text-sm font-medium text-gray-300 hover:text-cyan transition-colors duration-300 relative group"
          >
            {link}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan transition-all duration-300 group-hover:w-full"></span>
          </button>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
