import React, { useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { Sparkles } from 'lucide-react';

const ParticleField = () => {
  const ref = useRef<any>(null);
  // Generate 5000 random points in a sphere
  const sphere = useMemo(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }), []);

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00F0FF"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

interface HeroGateProps {
  onEnter: () => void;
}

const HeroGate: React.FC<HeroGateProps> = ({ onEnter }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-void bg-noise overflow-hidden"
      initial={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 2, filter: 'blur(10px)' }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ParticleField />
        </Canvas>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center p-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 flex flex-col items-center"
        >
          {/* Logo / Monogram */}
          <div className="w-24 h-24 mb-6 rounded-full glass-panel neon-glow flex items-center justify-center">
            <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan to-violet">
              P
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-4">
            <span className="text-white">PROTO</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-violet">TRACE</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl">
            From Prototype to Production — Design & Code, Fused.
          </p>
        </motion.div>

        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8, type: 'spring', stiffness: 200 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onEnter}
          className="mt-12 px-10 py-4 glass-panel neon-glow text-cyan font-bold text-lg tracking-wider flex items-center gap-3 hover:bg-white/5 transition-colors duration-300"
        >
          <Sparkles className="w-5 h-5 text-violet" />
          GET STARTED
        </motion.button>
      </div>

      {/* Ambient Gradient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan/10 rounded-full blur-[120px] pointer-events-none z-0" />
    </motion.div>
  );
};

export default HeroGate;
