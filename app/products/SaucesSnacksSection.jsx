'use client'
import React, { useState, useRef, useEffect } from 'react';
import { SaucesSnacks } from '../data/data';
import ProductCard from '../(components)/ProductCard';
import ExpandedProductCard from '../(components)/ExpandedProductCard';
import { useMediaQuery } from 'react-responsive';

function SaucesSnacksSection() {
  const [selectedIdx, setSelectedIdx] = useState(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const sectionRef = useRef(null);

  // Scroll to top of section when a new card is selected (desktop only)
  useEffect(() => {
    if (!isMobile && selectedIdx !== null && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedIdx, isMobile]);

  return (
    <section
      id="sauces-snacks"
      ref={sectionRef}
      className="w-full min-h-[500px] bg-white"
    >
      <h2 className="text-[36px] font-semibold pl-[24px] pt-[32px] font-inter">Sauces & Snacks</h2>
      <div className="w-full flex flex-wrap gap-4 px-4 py-4 justify-center items-stretch">
        {/* Desktop: Show expanded card at top */}
        {!isMobile && selectedIdx !== null && (
          <ExpandedProductCard
            {...SaucesSnacks[selectedIdx]}
            onClose={() => setSelectedIdx(null)}
          />
        )}
        {SaucesSnacks.map((item, idx) => {
          // Desktop: Hide the selected card in the grid
          if (!isMobile && selectedIdx === idx) return null;
          return (
            <ProductCard
              key={idx}
              {...item}
              onClick={() => setSelectedIdx(idx)}
              expanded={isMobile && selectedIdx === idx}
              onExpand={() => setSelectedIdx(idx)}
              onCollapse={() => setSelectedIdx(null)}
              isMobile={isMobile}
            />
          );
        })}
      </div>
    </section>
  );
}

export default SaucesSnacksSection; 