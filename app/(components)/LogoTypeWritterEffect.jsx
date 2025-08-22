'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function Logo({ startAnimation = false }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typewriterComplete, setTypewriterComplete] = useState(false);
  const neyohmText = "NEYOHM";

  // Typewriter effect
  useEffect(() => {
    if (startAnimation && currentIndex < neyohmText.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + neyohmText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150); // 350ms between each letter

      return () => clearTimeout(timer);
    } else if (startAnimation && currentIndex === neyohmText.length) {
      // Typewriter is complete
      setTypewriterComplete(true);
    }
      }, [startAnimation, currentIndex, neyohmText]);

  // Reset when animation starts
  useEffect(() => {
    if (startAnimation) {
      setDisplayText('');
      setCurrentIndex(0);
      setTypewriterComplete(false);
    }
  }, [startAnimation]);

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Animation variants for the tagline
  const taglineVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 1.5 // Start after NEYOHM animation
      }
    }
  };

  const highlightVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      color: "#ffffff"
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      color: "#93c5fd", // blue-300
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: 2.2 // Start after tagline
      }
    }
  };

  // Cursor animation
  const cursorVariants = {
    blink: {
      opacity: [1, 0, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Final flourish animation for completed text
  const finalFlourishVariants = {
    hidden: { 
      scale: 1,
      textShadow: "0 0 20px rgba(255,255,255,0.3)"
    },
    visible: { 
      scale: [1, 1.05, 1],
      textShadow: [
        "0 0 20px rgba(255,255,255,0.3)",
        "0 0 40px rgba(255,255,255,0.8)",
        "0 0 20px rgba(255,255,255,0.3)"
      ],
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className='py-2 md:px-4 flex align-middle justify-center flex-col'
      variants={containerVariants}
      initial="hidden"
      animate={startAnimation ? "visible" : "hidden"}
    >
              {/* NEYOHM Text with typewriter effect */}
      <motion.h2 
        className='font-abhaya-extraBold text-[70px] md:text-[152px] text-white m-0 flex justify-center items-center'
        variants={typewriterComplete ? finalFlourishVariants : {}}
        animate={typewriterComplete ? "visible" : "hidden"}
      >
        <span className="flex">
          {displayText.split('').map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
                delay: index * 0.15
              }}
              style={{ 
                textShadow: "0 0 20px rgba(255,255,255,0.3)",
                color: "#ffffff"
              }}
            >
              {letter}
            </motion.span>
          ))}
          {/* Blinking cursor */}
          {startAnimation && currentIndex < neyohmText.length && (
            <motion.span
              className="inline-block w-[4px] h-[70px] md:h-[152px] bg-white ml-1"
              variants={cursorVariants}
              animate="blink"
              style={{ 
                boxShadow: "0 0 20px rgba(255,255,255,0.5)"
              }}
            />
          )}
        </span>
      </motion.h2>

      {/* Tagline with staggered animation */}
      <motion.p 
        className='text-[20px] md:text-[40px] text-white text-center -mt-8 md:-mt-16 font-abhaya-extraBold'
        variants={taglineVariants}
        initial="hidden"
        animate={startAnimation ? "visible" : "hidden"}
      >
        Your{" "}
        <motion.span 
          className='text-[22px] md:text-[52px]'
          variants={highlightVariants}
          initial="hidden"
          animate={startAnimation ? "visible" : "hidden"}
        >
          Success
        </motion.span>{" "}
        our{" "}
        <motion.span 
          className='text-[22px] md:text-[50px]'
          variants={highlightVariants}
          initial="hidden"
          animate={startAnimation ? "visible" : "hidden"}
        >
          Ingredients
        </motion.span>
      </motion.p>
    </motion.div>
  )
}

export default Logo