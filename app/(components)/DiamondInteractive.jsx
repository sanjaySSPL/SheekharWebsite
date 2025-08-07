// DiamondInteractive.jsx
'use client'
import React, { useState } from 'react';

const DiamondInteractive = () => {
  const [hoveredDiamond, setHoveredDiamond] = useState(null);

  // Updated data with junction points for L-shaped lines
  const diamondData = [
    {
      id: 1,
      title: "Customized, Problem-Specific Solutions",
      description: "Every brand faces different challenges, and we're here to solve them. We don't just give ready-made solutions—we first understand your problem, your process, and your goal, and then offer ingredients that are made just for you.",
      diamondTop: 140,
      diamondLeft: 450,
      titleTop: 108,
      titleLeft: 195,
      underlineLength: 100,
      junctionX: 450,      // Junction point X
      junctionY: 160,      // Junction point Y (above diamond)
      underlineY: 160,     // Horizontal underline Y position
      underlineStartX: 180, // Where underline starts
      underlineEndX: 420,   // Where underline ends
      hoverFilter: "brightness(0) saturate(100%) invert(26%) sepia(80%) saturate(2130%) hue-rotate(195deg) brightness(87%) contrast(102%)",
      line_image: '/Lines/Customized.png',
      line_top : 40,
      line_left: -6,
       filler_line: '/Filler_Line.png',
       filler_line_top:51,
       filler_line_left:0
    },
    {
      id: 2,
      title: "Clean Label & Health-Focused",
      description: "Consumers now want to eat clean and healthy. They check ingredients before buying anything. That's why we help you make products that have simple, safe, and health-focused ingredients—while still tasting and performing well.",
      diamondTop: 220,
      diamondLeft: 408,
      titleTop: 208,
      titleLeft: 140,
      underlineLength: 120,
      junctionX: 320,      // Junction to the left
      junctionY: 230,
      underlineY: 295,     // Below title
      underlineStartX: 170,
      underlineEndX: 290,
      hoverFilter: "brightness(0) saturate(100%) invert(20%) sepia(86%) saturate(1594%) hue-rotate(189deg) brightness(93%) contrast(108%)",
      line_image: '/Lines/Clean.png',
      line_top : 140,
      line_left: -10,
       filler_line: '/Filler_Line.png',
       filler_line_top:150,
       filler_line_left:-12
    },
    {
      id: 3,
      title: "Better Texture and Mouthfeel",
      description: "A product doesn't just have to taste good—it should feel good in the mouth too. Our ingredients help improve the texture and creaminess of food products. Whether it's soft paneer, smooth curd, or melt-in-mouth ice cream, we help you create that perfect feel.",
      diamondTop: 298,
      diamondLeft: 364,
      titleTop: 315,
      titleLeft: 125,
      underlineLength: 110,
      junctionX: 300,      // Junction to the left
      junctionY: 287,
      underlineY: 395,     // Below title
      underlineStartX: 195,
      underlineEndX: 305,
      hoverFilter: "brightness(0) saturate(100%) invert(8%) sepia(23%) saturate(2922%) hue-rotate(181deg) brightness(94%) contrast(103%)",
      line_image: '/Lines/Better.png',
      line_top : 240,
      line_left: -5,
       filler_line: '/Filler_Line.png',
       filler_line_top:246.5,
       filler_line_left:-20
    },
    {
      id: 4,
      title: "Stronger Consumer Response & Revenue Uplift",
      description: "Our ingredients not only make your product better—they also make your process easier. At the same time, your final product performs better in the market—giving your customers a great experience and increasing repeat purchases and brand value.",
      diamondTop: 220,
      diamondLeft: 492,
      titleTop: 220,
      titleLeft: 780,
      underlineLength: 130,
      junctionX: 580,      // Junction to the right
      junctionY: 231,
      underlineY: 275,     // Below title
      underlineStartX: 685,
      underlineEndX: 815,
      hoverFilter: "brightness(0) saturate(100%) invert(23%) sepia(73%) saturate(1789%) hue-rotate(191deg) brightness(95%) contrast(106%)",
      line_image: '/Lines/Stronger.png',
      line_top : 140,
      line_left: 420,
      filler_line: '/Filler_Line.png',
      filler_line_top:151,
       filler_line_left:843
    },
    {
      id: 5,
      title: "Improved Stability & Appearance",
      description: "At Sheekhar, we make sure our products always give the same good results, no matter where or how they're used. We focus on strong shelf life, reliable texture, and stable performance—so you don't have to worry about changes in the final product.",
      diamondTop: 298,
      diamondLeft: 536,
      titleTop: 315,
      titleLeft: 785,
      underlineLength: 120,
      junctionX: 600,      // Junction to the right
      junctionY: 287,
      underlineY: 335,     // Below title
      underlineStartX: 730,
      underlineEndX: 850,
      hoverFilter: "brightness(0) saturate(100%) invert(18%) sepia(42%) saturate(1247%) hue-rotate(183deg) brightness(96%) contrast(107%)",
      line_image: '/Lines/Improved.png',
      line_top : 240,
      line_left: 470,
       filler_line: '/Filler_Line.png',
       filler_line_top:246.5,
       filler_line_left:831
    },
    {
      id: 6,
      title: "Good Quality",
      description: "With Sheekhar's ingredients, you can get more output and reduce waste. We help you improve things like water retention, fat holding, and consistency—so that you waste less material and get more product from the same amount of raw material.",
      diamondTop: 298,
      diamondLeft: 450,
      titleTop: 453,
      titleLeft: 672,
      underlineLength: 80,
      junctionX: 450,      // Junction below diamond
      junctionY: 400,
      underlineY: 485,     // Below title
      underlineStartX: 710,
      underlineEndX: 790,
      hoverFilter: "brightness(0) saturate(100%) invert(12%) sepia(39%) saturate(1678%) hue-rotate(181deg) brightness(96%) contrast(104%)",
      line_image: '/Lines/Good_Quality.png',
      line_top : 350,
      line_left: 380
    //    filler_line: '/Filler_Line.png',
    //    filler_line_top:0,
    //    filler_line_left:0
    }
  ];

  return (
    <div className="hidden md:block w-full h-fit bg-green-300 flex items-center justify-center overflow-hidden">
      {/* Main Title */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
        <h1 className="text-2xl font-bold text-black">Sheekhar Benefits</h1>
      </div>

      {/* Fixed Size Container */}
      <div
        className="relative mx-auto bg-red-400"
        style={{
          width: '900px',
          height: '55 0px',
          minWidth: '900px',
          minHeight: '500px'
        }}
      >

        {/* SVG for L-shaped connection lines with junction points */}
        {/* <svg 
          className="absolute top-0 left-0 pointer-events-none" 
          width="900" 
          height="700"
          style={{ zIndex: 10 }}
        > */}
        {diamondData.map((item) => (
          <>
          <img src={item.line_image} 
          className='absolute scale-[0.66]'
           alt='' 
           key={item.id}
           style={{
            top: `${item.line_top}px`,
            left: `${item.line_left}px`,
          }}
          />
          
                  {item.filler_line && <img src={item.filler_line} 
                  className='absolute scale-[0.66]'
                   alt='' 
                   key={item.id}
                   style={{
                    top: `${item.filler_line_top}px`,
                    left: `${item.filler_line_left}px`,
                   }}
                   />}
          </>
        ))}


        {/* </svg> */}


        {diamondData.map((item) => (
          <div key={item.id}>

            {/* Title Container - FIXED POSITION */}
            <div
              className="absolute text-center cursor-pointer"
              style={{
                top: `${item.titleTop}px`,
                left: `${item.titleLeft}px`,
                transform: 'translate(-50%, -50%)',
                zIndex: hoveredDiamond === item.id ? 50 : 20,
                width: '420px'
              }}

            >
              {/* Title Text - Always Visible */}
              <div className="mb-2 cursor-pointer"
                onMouseEnter={() => setHoveredDiamond(item.id)}
              onMouseLeave={() => setHoveredDiamond(null)}
              >
                <h3 className="text-[19px] font-medium text-[#343884]  leading-tight">
                  {item.title}
                </h3>

              </div>

              {/* Description - Only Visible on Hover */}
              <div className={`transition-all duration-300 ${hoveredDiamond === item.id ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}>
                <div className="mt-3 p-3 bg-white w-[300px] w-full border-gray-400 rounded-md ">
                  <p className="text-[15px] text-start text-gray-700 leading-relaxed">
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
              <img
                src="/Diamond.svg"
                alt="diamond"
                className={`w-8 h-12 scale-[2.5] transition-all duration-200 ${hoveredDiamond === item.id ? 'scale-110' : 'hover:scale-105'
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
