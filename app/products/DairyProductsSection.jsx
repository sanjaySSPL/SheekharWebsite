'use client'
import React, { useState } from 'react';
import { DairyProduct } from '../data/data';
import ProductCard from '../(components)/ProductCard';
import { useMediaQuery } from 'react-responsive';

function DairyProductsSection() {
  const [selectedIdx, setSelectedIdx] = useState(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  // Removed sectionRef and scroll-to-top effect

  return (
    <section
      id="dairy-products"
      className="w-full min-h-[500px] bg-bg_light_blue"
    >
      <h2 className="text-[36px] font-semibold pl-[24px] pt-[32px] font-inter">Dairy Products</h2>
      <div className="w-full flex flex-wrap gap-4 px-4 py-4 justify-center items-stretch">
        {DairyProduct.map((item, idx) => {
          const isExpanded = selectedIdx === idx;
          return (
            <div
              key={idx}
              className={
                isExpanded
                  ? "w-full basis-full max-w-5xl mx-auto my-2 z-50 transition-all duration-500"
                  : "flex-none w-[300px] md:w-[350px] lg:w-[400px] my-2 z-10 transition-all duration-500"
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
                onExpand={() => setSelectedIdx(idx)
                  
                }
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

export default DairyProductsSection; 