'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ParticleEffect = ({ startAnimation = false }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (startAnimation) {
      // Create particles
      const newParticles = Array.from({ length: 200 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2
      }));
      setParticles(newParticles);
    }
  }, [startAnimation]);

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
          }}
          initial={{ 
            opacity: 0, 
            scale: 0,
            y: 0
          }}
          animate={startAnimation ? {
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: -100,
          } : {}}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            ease: "easeOut",
            repeat: 0
          }}
        />
      ))}
    </div>
  );
};

export default ParticleEffect; 