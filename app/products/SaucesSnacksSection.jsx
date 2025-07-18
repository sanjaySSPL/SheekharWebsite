'use client'
import React, { useState } from 'react';
import { SaucesSnacks } from '../data/data';
import ProductCard from '../(components)/ProductCard';
import { useMediaQuery } from 'react-responsive';

function SaucesSnacksSection() {
  const [selectedIdx, setSelectedIdx] = useState(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <section
      id="sauces-snacks"
      className="w-full min-h-[500px] bg-white"
    >
      <h2 className="text-[36px] font-semibold pl-[24px] pt-[32px] font-inter">Sauces & Snacks</h2>
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8 px-4 py-8 items-stretch justify-items-center">
        {SaucesSnacks.map((item, idx) => {
          const isExpanded = selectedIdx === idx;
          return (
            <div
              key={idx}
              className={
                isExpanded
                  ? "col-span-full w-full max-w-5xl mx-auto my-2 z-20 transition-all duration-500"
                  : "w-full max-w-[500px] my-2 z-10 transition-all duration-500"
              }
              style={{
                position: isExpanded ? "relative" : "static",
                display: "block",
              }}
            >
              <ProductCard
                {...item}
                onClick={() => setSelectedIdx(idx)}
                expanded={isExpanded}
                onExpand={() => setSelectedIdx(idx)}
                onCollapse={() => setSelectedIdx(null)}
                isMobile={isMobile}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SaucesSnacksSection; 