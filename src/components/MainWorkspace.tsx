import React from 'react';
import Navbar from './Navbar';
import Projects from './Projects';
import Capabilities from './Capabilities';
import TrackRecord from './TrackRecord';
import AboutDevelopers from './AboutDevelopers';
import Contact from './Contact';

const MainWorkspace: React.FC = () => {
  return (
    <div className="min-h-screen bg-void bg-noise relative">
      {/* Global Ambient Glows for Workspace */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-violet/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-cyan/5 rounded-full blur-[150px]" />
      </div>

      <Navbar />

      <main className="relative z-10 pt-24 pb-12">
        <Projects />
        
        {/* Interstitial Banner */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
          <div className="relative glass-panel p-6 text-center overflow-hidden transition-all duration-500 hover:neon-glow hover:border-cyan/30">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan/5 to-violet/5 opacity-50" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 text-gray-400 font-medium tracking-wide">
              <span>For more projects visit our portfolio website or check out our GitHubs:</span>
              <div className="flex items-center gap-4">
                <a 
                  href="https://github.com/Sayim07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-cyan/50 hover:text-cyan hover:bg-white/10 transition-colors duration-300"
                >
                  SMDEV GitHub
                </a>
                <span className="text-white/20">|</span>
                <a 
                  href="https://github.com/ShreyasiLaha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-violet/50 hover:text-violet hover:bg-white/10 transition-colors duration-300"
                >
                  SLVERSE GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <Capabilities />
        <TrackRecord />
        <AboutDevelopers />
        <Contact />
      </main>

      <footer className="relative z-10 py-8 text-center border-t border-glass-border bg-void/80 backdrop-blur-md">
        <p className="text-gray-500 text-sm">
          &copy; 2026 Prototrace. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default MainWorkspace;
