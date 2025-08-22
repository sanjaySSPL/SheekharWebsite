// DiamondInteractive.jsx
'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const DiamondInteractive = () => {
  const [hoveredDiamond, setHoveredDiamond] = useState(null);

  // Updated positions with increased spacing between diamonds
  const diamondData = [
    {
      id: 1,
      title: "Customized, Problem-Specific Solutions",
      description: "Every brand faces different challenges, and we're here to solve them. We don't just give ready-made solutions—we first understand your problem, your process, and your goal, and then offer ingredients that are made just for you.",
      diamondTop: 180,   // Top diamond - moved up
      diamondLeft: 450,
      titleTop: 190,     // Title above diamond
      titleLeft: 250,
      underlineLength: 140,
      hoverFilter: "brightness(0) saturate(100%) invert(26%) sepia(80%) saturate(2130%) hue-rotate(195deg) brightness(87%) contrast(102%)"
    },
    {
      id: 2,
      title: "Clean Label & Health-Focused", 
      description: "Consumers now want to eat clean and healthy. They check ingredients before buying anything. That's why we help you make products that have simple, safe, and health-focused ingredients—while still tasting and performing well.",
      diamondTop: 230,   // Middle row left - more spacing
      diamondLeft: 418,
      titleTop: 280,
      titleLeft: 230,    // Title further left
      underlineLength: 120,
      hoverFilter: "brightness(0) saturate(100%) invert(20%) sepia(86%) saturate(1594%) hue-rotate(189deg) brightness(93%) contrast(108%)"
    },
    {
      id: 3,
      title: "Better Texture & Mouthfeel",
      description: "A product doesn't just have to taste good—it should feel good in the mouth too. Our ingredients help improve the texture and creaminess of food products. Whether it's soft paneer, smooth curd, or melt-in-mouth ice cream, we help you create that perfect feel.",
      diamondTop: 287,   // Bottom row left - more spacing
      diamondLeft: 389,
      titleTop: 380,     // Title below diamond
      titleLeft: 250,
      underlineLength: 110,
      hoverFilter: "brightness(0) saturate(100%) invert(8%) sepia(23%) saturate(2922%) hue-rotate(181deg) brightness(94%) contrast(103%)"
    },
    {
      id: 4,
      title: "Stronger Consumer Response & Revenue Uplift",
      description: "Our ingredients not only make your product better—they also make your process easier. At the same time, your final product performs better in the market—giving your customers a great experience and increasing repeat purchases and brand value.",
      diamondTop: 231,   // Middle row right - more spacing
      diamondLeft: 482,
      titleTop: 260,
      titleLeft: 750,    // Title further right
      underlineLength: 130,
      hoverFilter: "brightness(0) saturate(100%) invert(23%) sepia(73%) saturate(1789%) hue-rotate(191deg) brightness(95%) contrast(106%)"
    },
    {
      id: 5,
      title: "Improved Stability & Appearance", 
      description: "At Sheekhar, we make sure our products always give the same good results, no matter where or how they're used. We focus on strong shelf life, reliable texture, and stable performance—so you don't have to worry about changes in the final product.",
      diamondTop: 287,   // Bottom row right - more spacing
      diamondLeft: 511,
      titleTop: 320,
      titleLeft: 790,    // Title further right
      underlineLength: 120,
      hoverFilter: "brightness(0) saturate(100%) invert(18%) sepia(42%) saturate(1247%) hue-rotate(183deg) brightness(96%) contrast(107%)"
    },
    {
      id: 6,
      title: "Good Quality",
      description: "With Sheekhar's ingredients, you can get more output and reduce waste. We help you improve things like water retention, fat holding, and consistency—so that you waste less material and get more product from the same amount of raw material.",
      diamondTop: 290,   // Bottom center - more spacing
      diamondLeft: 450,
      titleTop: 470,     // Title below diamond
      titleLeft: 750,
      underlineLength: 80,
      hoverFilter: "brightness(0) saturate(100%) invert(12%) sepia(39%) saturate(1678%) hue-rotate(181deg) brightness(96%) contrast(104%)"
    }
  ];

  return (
    <div className="hidden lg:block w-full h-fit bg-white flex items-center justify-center overflow-hidden">
      {/* Main Title */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
        <h1 className="text-2xl font-bold text-black">Sheekhar Benefits</h1>
      </div>

      {/* Fixed Size Container */}
      <div 
        className="relative mx-auto"
        style={{ 
          width: '900px', 
          height: '600px',
          minWidth: '900px',
          minHeight: '500px'
        }}
      >
        
        {/* SVG for all connection lines with underlines */}
        <svg 
          className="absolute top-0 left-0 pointer-events-none" 
          width="900" 
          height="700"
          style={{ zIndex: 10 }}
        >
          {diamondData.map((item) => {
            // Calculate title underline position (slightly below title)
            const titleUnderlineY = item.titleTop + 15;
            
            return (
              <g key={`line-group-${item.id}`}>
                {/* Line from diamond to title area */}
                <line
                  x1={item.diamondLeft}
                  y1={item.diamondTop}
                  x2={item.titleLeft}
                  y2={titleUnderlineY}
                  stroke="#9CA3AF"
                  strokeWidth="1"
                  strokeDasharray="4,4"
                />
                
                {/* Horizontal underline beneath title */}
                <line
                  x1={item.titleLeft - item.underlineLength/2}
                  y1={titleUnderlineY}
                  x2={item.titleLeft + item.underlineLength/2}
                  y2={titleUnderlineY}
                  stroke="#9CA3AF"
                  strokeWidth="1"
                  strokeDasharray="4,4"
                />
              </g>
            );
          })}
        </svg>

        {diamondData.map((item) => (
          <div key={item.id}>
            
            {/* Title Container - FIXED POSITION */}
            <div 
              className="absolute text-cente"
              style={{ 
                top: `${item.titleTop}px`, 
                left: `${item.titleLeft}px`,
                transform: 'translate(-50%, -50%)',
                zIndex: hoveredDiamond === item.id ? 50 : 20,
                width: '350px'
              }}
            >
              {/* Title Text - Always Visible */}
              <div className="mb-2">
                <h3 className="text-sm font-mediunm text-[#343884] leading-tight">
                  {item.title}
                </h3>
              </div>
              
              {/* Description - Only Visible on Hover */}
              <div className={`transition-all duration-300 ${
                hoveredDiamond === item.id ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}>
                <div className="mt-3 p-3 bg-white border-2  w-[300px] border-gray-400 rounded-md shadow-xl">
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>

            {/* SVG Diamond from Public Folder - Hover Target */}
            <div
              className="absolute cursor-pointer"
              style={{ 
                top: `${item.diamondTop}px`, 
                left: `${item.diamondLeft}px`,
                transform: 'translate(-50%, -50%)',
                zIndex: 30
              }}
              onMouseEnter={() => setHoveredDiamond(item.id)}
              onMouseLeave={() => setHoveredDiamond(null)}
            >
              {/* Using SVG from public/Diamond.svg */}
              <Image 
                src="/Diamond.svg" 
                alt="diamond" 
                width={32}
                height={48}
                className={`w-8 h-12 scale-[1.8] transition-all duration-200 ${
                  hoveredDiamond === item.id ? 'scale-110' : 'hover:scale-105'
                }`}
                style={{
                  filter: hoveredDiamond === item.id 
                    ? item.hoverFilter
                    : 'none'
                }}
              />
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default DiamondInteractive;
