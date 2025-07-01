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
  const [navbarAnimationComplete, setNavbarAnimationComplete] = useState(false);
  const [logoAnimationComplete, setLogoAnimationComplete] = useState(false);

  // Calculate navbar animation duration
  // 0.2s delay + (7 items × 0.1s stagger) + 0.5s duration = ~1.4s total
  useEffect(() => {
    const timer = setTimeout(() => {
      setNavbarAnimationComplete(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  const value = {
    navbarAnimationComplete,
    setNavbarAnimationComplete,
    logoAnimationComplete,
    setLogoAnimationComplete,
  };

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
}; 