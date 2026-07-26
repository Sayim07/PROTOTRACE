import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Smartphone, Code, Blocks, Wrench } from 'lucide-react';

const capabilities = [
  {
    category: 'UI/UX Design',
    icon: <Palette className="w-6 h-6 text-cyan" />,
    skills: ['Figma', 'Canva', 'Wireframing', 'Prototyping', 'User Research', 'Usability Testing', 'Design Systems', 'Design Thinking', 'Responsive Design', 'WCAG Accessibility'],
  },
  {
    category: 'Frontend & Mobile',
    icon: <Smartphone className="w-6 h-6 text-violet" />,
    skills: ['React', 'React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Flutter'],
  },
  {
    category: 'Backend & APIs',
    icon: <Code className="w-6 h-6 text-cyan" />,
    skills: ['Node.js', 'Express', 'REST API Design', 'Python', 'Redis'],
  },
  {
    category: 'Web3 / Blockchain',
    icon: <Blocks className="w-6 h-6 text-violet" />,
    skills: ['Solidity', 'Ethers.js', 'Web3.js', 'Smart Contracts'],
  },
  {
    category: 'Languages & Tools',
    icon: <Wrench className="w-6 h-6 text-cyan" />,
    skills: ['Java', 'C', 'Python', 'Git', 'GitHub', 'VS Code', 'Cursor AI', 'Chrome DevTools'],
  },
];

const Capabilities: React.FC = () => {
  return (
    <section id="capabilities" className="py-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen flex flex-col justify-center relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet to-cyan">Capabilities</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mb-16">
          A multi-disciplinary stack engineered for rapid prototyping and robust production deployments.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 relative overflow-hidden group hover:neon-glow transition-all duration-300 border border-glass-border hover:border-violet/50"
            >
              {/* Animated background glow */}
              <div className="absolute -inset-2 bg-gradient-to-br from-violet/20 to-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl z-0" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-white/10 transition-colors">
                    {cap.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan transition-colors">{cap.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {cap.skills.map(skill => (
                    <span 
                      key={skill} 
                      className="px-3 py-1.5 text-xs font-medium bg-void/50 border border-white/5 rounded-md text-gray-300 group-hover:border-white/10 group-hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Decorative background grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
    </section>
  );
};

export default Capabilities;
