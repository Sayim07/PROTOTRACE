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
