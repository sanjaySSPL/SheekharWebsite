"use client";
import React from "react";
import ParticleEffect from "./ParticleEffect";
import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';

// Custom hook to detect mobile screen
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [breakpoint]);
  return isMobile;
}

function HomeHeroSection() {
  const { navbarAnimationComplete, showHeroText, isTransitioning } = useAnimation();
  const isMobile = useIsMobile();

  // Animation variants for the description text

  return (
    <div className="relative w-full h-[100dvh] z-20">
      {/* Background image */}
      <div className="absolute inset-0 z-10">
        {/* <Image
          src={"/home_img.png"}
          alt="Home Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        /> */}
        <video
          className="w-full h-full object-cover absolute inset-0"
          src="https://res.cloudinary.com/dipc3ow9z/video/upload/v1755865768/Untitled_video_-_Made_with_Clipchamp_1_oqbtur.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata" // Add this to load only the metadata initially
        >
          <source
            src="https://res.cloudinary.com/dipc3ow9z/video/upload/v1754114971/sheekharr_intro_1_2_ialygw.mp4
            "
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Overlay with SVG knockout text effect, now animated */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none w-[100dvw] h-full"
        animate={{ opacity: showHeroText ? 1 : 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        {/* Conditional rendering for desktop and mobile */}
        {isMobile ? (
          // Mobile: no overlay or text effect
          null
        ) : (
          // Desktop SVG
          <svg width="100%" height="100%" viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <mask id="knockout-text-mask-desktop" x="0" y="0" width="100%" height="100%">
                <rect x="0" y="0" width="200" height="100" fill="white" />
                <text
                  x="69"
                  y="46"
                  textAnchor="middle"
                  fontSize="22"
                  fontWeight="bold"
                  fontFamily="inherit"
                  fill="black"
                  style={{ letterSpacing: '1px' }}
                >
                  neyohm
                </text>
                <text
                  x="95"
                  y="68"
                  textAnchor="middle"
                  fontSize="22"
                  fontWeight="bold"
                  fontFamily="inherit"
                  fill="black"
                  style={{ letterSpacing: '1' }}
                >
                  Ingredients
                </text>
              </mask>
            </defs>
            <rect
              x="0"
              y="0"
              width="200"
              height="100"
              className="bg-overflow-white/70"
              fill="white"
              fillOpacity="0.7"
              mask="url(#knockout-text-mask-desktop)"
            />
          </svg>
        )}
      </motion.div>
      {/* Shared element brand name (centered, only if showHeroText) */}
      {showHeroText && (
        <motion.span
          layoutId="brand-name"
          className="absolute z-30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[40px] md:text-[80px] font-bold text-center"
          animate={{
            y: isTransitioning ? -100 : 0, // Move up by 200px (adjust as needed)
            scale: isTransitioning ? 0.7 : 1, // Optionally shrink
            opacity: isTransitioning ? 0.7 : 1, // Optionally fade a bit
          }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          Neyohm Innovations
        </motion.span>
      )}
      {/* Particle Effect */}
      <ParticleEffect startAnimation={navbarAnimationComplete} />
    </div>
  );
}

export default HomeHeroSection;
