'use client'
import React, { useState } from 'react';
import { Premixes } from '../data/data';
import ProductCard from '../(components)/ProductCard';
import { useMediaQuery } from 'react-responsive';

function PremixesSection() {
  const [selectedIdx, setSelectedIdx] = useState(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <section
      id="premixes"
      className="w-full min-h-[500px] bg-bg_light_blue"
    >
      <h2 className="text-[36px] font-semibold md:pl-8 text-center text-text_blue pt-[32px] font-inter">Premixes</h2>
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8 px-4 py-8 items-stretch justify-items-center">
        {Premixes.map((item, idx) => {
          const isExpanded = selectedIdx === idx;
          return (
            <div
              key={idx}
              className={
                isExpanded
                  ? "col-span-full w-full max-w-5xl mx-auto my-2 z-20 transition-all duration-500"
                  : "w-full max-w-[600px] my-2 z-10 transition-all duration-500"
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

export default PremixesSection; 