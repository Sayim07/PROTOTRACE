import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Target, Link as LinkIcon } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: 'Winner & Team Lead',
    event: 'Synchronicity S2.0, Jadavpur University 24-Hour Hackathon',
    icon: <Trophy className="w-8 h-8 text-yellow-400" />,
    color: 'from-yellow-400/20 to-orange-500/20',
    borderColor: 'border-yellow-400/30'
  },
  {
    id: 2,
    title: 'Top 6 National Finalists',
    event: 'Smart India Hackathon (SIH) 2025',
    icon: <Medal className="w-8 h-8 text-gray-300" />,
    color: 'from-gray-300/20 to-slate-500/20',
    borderColor: 'border-gray-300/30'
  },
  {
    id: 3,
    title: 'Top 10 Finalist',
    event: 'EIBS Hackathon 2026',
    icon: <Target className="w-8 h-8 text-cyan" />,
    color: 'from-cyan/20 to-blue-500/20',
    borderColor: 'border-cyan/30'
  },
  {
    id: 4,
    title: 'Finalist',
    event: 'IIT Kharagpur Blockchain Hackathon',
    icon: <LinkIcon className="w-8 h-8 text-violet" />,
    color: 'from-violet/20 to-fuchsia-500/20',
    borderColor: 'border-violet/30'
  }
];

const TrackRecord: React.FC = () => {
  return (
    <section id="track-record" className="py-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-violet">Track Record</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mb-16">
          A history of high-pressure execution and competitive excellence.
        </p>

        <div className="relative border-l border-glass-border ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className={`absolute -left-[41px] md:-left-[57px] top-4 w-4 h-4 rounded-full bg-void border-2 ${item.borderColor} z-10 neon-glow`} />
              
              <div className={`glass-panel p-6 md:p-8 border ${item.borderColor} bg-gradient-to-r ${item.color} hover:scale-[1.02] transition-transform duration-300`}>
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0 bg-void/50 p-4 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-lg">{item.event}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TrackRecord;
