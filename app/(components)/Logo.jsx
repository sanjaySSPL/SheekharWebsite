'use client'
import React from 'react'
import { motion } from 'framer-motion'

function Logo({ startAnimation = false }) {
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

  // Animation variants for SHEEKHARR text (comes from above)
  const sheekharrVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,  // Start 50px above
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,    // Move to final position
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.2 // Small delay after navbar
      }
    }
  };

  // Animation variants for the punchline (comes from below)
  const punchlineVariants = {
    hidden: { 
      opacity: 0, 
      y: -50,   // Start 50px below
      scale: 0.9

    },
    visible: { 
      opacity: 1, 
      y: 0,    // Move to final position
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.6 // Start after SHEEKHARR animation
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
        delay: 1.2 // Start after punchline
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
      {/* SHEEKHARR Text - comes from above */}
      <motion.h2 
        className='font-abhaya-extraBold text-[70px] md:text-[152px] text-white m-0 text-center'
        variants={sheekharrVariants}
        initial="hidden"
        animate={startAnimation ? "visible" : "hidden"}
        style={{ 
          textShadow: "0 0 20px rgba(255,255,255,0.3)"
        }}
      >
        Sheekharr
      </motion.h2>

      {/* Punchline - comes from below */}
      <motion.p 
        className='text-[20px] md:text-[40px] text-white text-center -mt-8 md:-mt-16 font-abhaya-extraBold'
        variants={punchlineVariants}
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