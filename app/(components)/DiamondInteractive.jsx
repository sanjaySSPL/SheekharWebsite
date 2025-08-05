// DiamondInteractive.jsx
'use client'
import React, { useState } from 'react';

const DiamondInteractive = () => {
  const [hoveredDiamond, setHoveredDiamond] = useState(null);

  // Updated data with underline lengths
  const diamondData = [
    {
      id: 1,
      title: "Customized, Problem-Specific Solutions",
      description: "Every brand faces different challenges, and we're here to solve them. We don't just give ready-made solutions—we first understand your problem, your process, and your goal, and then offer ingredients that are made just for you.",
      diamondTop: "30%",
      diamondLeft: "50%",
      titleTop: "34%",
      titleLeft: "39%",
      underlineLength: 120, // Width of underline in pixels
      hoverFilter: "invert(26%) sepia(80%) saturate(2130%) hue-rotate(195deg) brightness(87%) contrast(102%)"
    },
    {
      id: 2,
      title: "Clean Label & Health-Focused", 
      description: "Consumers now want to eat clean and healthy. They check ingredients before buying anything. That's why we help you make products that have simple, safe, and health-focused ingredients—while still tasting and performing well.",
      diamondTop: "35%",
      diamondLeft: "48%",
      titleTop: "42%",
      titleLeft: "34%",
      underlineLength: 100,
      hoverFilter: "invert(20%) sepia(86%) saturate(1594%) hue-rotate(189deg) brightness(93%) contrast(108%)"
    },
    {
      id: 3,
      title: "Better Texture & Mouthfeel",
      description: "A product doesn't just have to taste good—it should feel good in the mouth too. Our ingredients help improve the texture and creaminess of food products. Whether it's soft paneer, smooth curd, or melt-in-mouth ice cream, we help you create that perfect feel.",
      diamondTop: "40%",
      diamondLeft: "45.9%",
      titleTop: "52%",
      titleLeft: "30%",
      underlineLength: 90,
      hoverFilter: "brightness(0) saturate(100%) invert(37%) sepia(68%) saturate(4068%) hue-rotate(240deg) brightness(95%) contrast(105%)"
    },
    {
      id: 4,
      title: "Stronger Consumer Response & Revenue Uplift",
      description: "Our ingredients not only make your product better—they also make your process easier. At the same time, your final product performs better in the market—giving your customers a great experience and increasing repeat purchases and brand value.",
      diamondTop: "35%",
      diamondLeft: "52%",
      titleTop: "40%",
      titleLeft: "65%",
      underlineLength: 110,
      hoverFilter: "brightness(0) saturate(100%) invert(78%) sepia(61%) saturate(2865%) hue-rotate(160deg) brightness(101%) contrast(101%)"
    },
    {
      id: 5,
      title: "Improved Stability & Appearance", 
      description: "At Sheekhar, we make sure our products always give the same good results, no matter where or how they're used. We focus on strong shelf life, reliable texture, and stable performance—so you don't have to worry about changes in the final product.",
      diamondTop: "39.9%",
      diamondLeft: "54.15%",
      titleTop: "49.5%",
      titleLeft: "70%",
      underlineLength: 100,
      hoverFilter: "brightness(0) saturate(100%) invert(58%) sepia(69%) saturate(2142%) hue-rotate(140deg) brightness(95%) contrast(105%)"
    },
    {
      id: 6,
      title: "Good Quality",
      description: "With Sheekhar's ingredients, you can get more output and reduce waste. We help you improve things like water retention, fat holding, and consistency—so that you waste less material and get more product from the same amount of raw material.",
      diamondTop: "40%",
      diamondLeft: "50%",
      titleTop: "63%",
      titleLeft: "67%",
      underlineLength: 60,
      hoverFilter: "brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(1352%) hue-rotate(87deg) brightness(119%) contrast(119%)"
    }
  ];

  return (
    <div className="hidden lg:block relative w-full h-screen bg-white overflow-hidden">
      {/* Main Title */}
      <div className="text-center py-4">
        <h1 className="text-2xl font-bold text-black">Sheekhar Benefits</h1>
      </div>

      {/* Interactive Diamond Layout */}
      <div className="relative w-full h-full">
        
        {/* SVG for all connection lines with underlines */}
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
          {diamondData.map((item) => {
            // Calculate title underline position (slightly below title)
            const titleUnderlineY = `calc(${item.titleTop} + 15px)`;
            
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
                  x1={`calc(${item.titleLeft} - ${item.underlineLength/2}px)`}
                  y1={titleUnderlineY}
                  x2={`calc(${item.titleLeft} + ${item.underlineLength/2}px)`}
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
              className="absolute text-center"
              style={{ 
                top: item.titleTop, 
                left: item.titleLeft,
                transform: 'translate(-50%, -50%)',
                zIndex: hoveredDiamond === item.id ? 50 : 20,
                width: '200px'
              }}
            >
              {/* Title Text - Always Visible */}
              <div className="mb-2">
                <h3 className="text-sm font-medium text-gray-800 leading-tight">
                  {item.title}
                </h3>
              </div>
              
              {/* Description - Only Visible on Hover */}
              <div className={`transition-all duration-300 ${
                hoveredDiamond === item.id ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}>
                <div className="mt-3 p-3 bg-white border-2 border-gray-400 rounded-md shadow-xl">
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
                top: item.diamondTop, 
                left: item.diamondLeft,
                transform: 'translate(-50%, -50%)',
                zIndex: 30
              }}
              onMouseEnter={() => setHoveredDiamond(item.id)}
              onMouseLeave={() => setHoveredDiamond(null)}
            >
              {/* Using SVG from public/Diamond.svg */}
              <img 
                src="/Diamond.svg" 
                alt="diamond" 
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
