'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';

const AnimationContext = createContext();

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
};

export const AnimationProvider = ({ children }) => {
  // Hero-to-navbar animation state
  const [showHeroText, setShowHeroText] = useState(true);
  const [showNavbarName, setShowNavbarName] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Animation sequence: 1s - start transition, 1.7s - show navbar name, 2s - hide hero text
  useEffect(() => {
    const timer1 = setTimeout(() => setIsTransitioning(true), 2000); // Start text move
    const timer2 = setTimeout(() => setShowNavbarName(true), 1000); // Show navbar text
    const timer3 = setTimeout(() => setShowHeroText(false), 3000); // Remove hero text/overlay
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const value = {
    showHeroText,
    showNavbarName,
    isTransitioning,
  };

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
}; 