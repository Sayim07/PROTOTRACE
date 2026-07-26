import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import clsx from 'clsx';

type Category = 'All' | 'Web3' | 'Mobile' | 'Browser Tools' | 'Design Systems';

interface Project {
  id: string;
  title: string;
  category: Category;
  description: string;
  tech: string[];
  imageColor: string;
}

const projectsData: Project[] = [
  {
    id: 'reliefchain',
    title: 'ReliefChain',
    category: 'Web3',
    description: 'A blockchain-powered donation transparency platform enabling tamper-proof, fully traceable on-chain giving. Solidity smart contracts handle donation logic; a React frontend integrated via Ethers.js delivers seamless wallet-to-confirmation donor flows.',
    tech: ['Solidity', 'Ethers.js', 'Web3.js', 'React', 'Figma Design Systems'],
    imageColor: 'from-blue-600 to-cyan-500'
  },
  {
    id: 'darkscope',
    title: 'DarkScope X',
    category: 'Browser Tools',
    description: 'A real-time fraud-detection Chrome/Brave extension (Manifest V3) executing 10 concurrent live security checks per site visit (RDAP domain lookups, Google Safe Browsing API, SSL verification). Node.js/Express backend querying Indian registries (GST, MCA, RBI) with Redis caching for sub-2s responses on Railway, plus Brevo SMTP automated alerting.',
    tech: ['Manifest V3', 'Node.js', 'Express', 'Redis', 'Google Safe Browsing API', 'Brevo SMTP', 'Railway'],
    imageColor: 'from-violet-600 to-fuchsia-500'
  },
  {
    id: 'moodscape',
    title: 'MoodScape',
    category: 'Mobile',
    description: 'An award-winning student mental-wellness platform designed and shipped in a 24-hour hackathon sprint. Features mood-tracking and emotional check-in interfaces translated seamlessly into working Flutter/Firebase screens.',
    tech: ['Flutter', 'Firebase', 'Figma'],
    imageColor: 'from-emerald-500 to-teal-400'
  },
  {
    id: 'casualgame',
    title: 'Casual Mobile Game UI',
    category: 'Design Systems',
    description: 'A complete 5-screen mobile game UI system (Home, Level Select, Rewards, Gameplay HUD, Game Over) built from initial wireframes to presentation-ready mockups, anchored by a reusable component design system.',
    tech: ['Figma', 'Canva'],
    imageColor: 'from-orange-500 to-amber-400'
  }
];

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<Category>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters: Category[] = ['All', 'Web3', 'Mobile', 'Browser Tools', 'Design Systems'];

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter || p.tech.includes(activeFilter)); // Mapping some categories broadly

  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-violet">Selected Work</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mb-12">
          Showcasing the collective engineering and design achievements of Prototrace.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={clsx(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                activeFilter === filter
                  ? "bg-cyan/20 border-cyan text-cyan neon-glow"
                  : "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10"
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-[1000px]"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className="group relative cursor-pointer glass-panel overflow-hidden transform-gpu transition-transform duration-500 hover:rotate-x-2 hover:-rotate-y-2 hover:neon-glow border border-glass-border hover:border-cyan/50"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* 3D Image Placeholder */}
                <div className={`h-48 w-full bg-gradient-to-br ${project.imageColor} opacity-70 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="p-6 relative z-10 bg-void/80 backdrop-blur-sm">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan transition-colors">{project.title}</h3>
                    <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-cyan transition-colors" />
                  </div>
                  <p className="text-sm text-cyan mb-4">{project.category}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map(tech => (
                      <span key={tech} className="px-2 py-1 text-xs bg-white/10 rounded-md text-gray-300">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-white/10 rounded-md text-gray-300">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-void/80 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl glass-panel p-0 overflow-hidden neon-glow shadow-2xl"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-void/50 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              
              <div className={`h-48 w-full bg-gradient-to-br ${selectedProject.imageColor}`} />
              
              <div className="p-8 md:p-12 relative z-10 bg-void/90">
                <p className="text-cyan font-medium mb-2">{selectedProject.category}</p>
                <h3 className="text-4xl font-bold mb-6">{selectedProject.title}</h3>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {selectedProject.description}
                </p>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map(tech => (
                      <span key={tech} className="px-3 py-1.5 text-sm bg-white/10 border border-white/5 rounded-md text-gray-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
