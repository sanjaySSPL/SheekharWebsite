'use client'
import React, { useState } from 'react';

const officeData = {
  delhi: {
    name: 'Delhi Office',
    city: 'Delhi',
    manager: 'Mr. Sharma',
    phone: '+91 11 1234 5678',
    coordinates: { x: 420, y: 170 },
  },
  mumbai: {
    name: 'Mumbai Office',
    city: 'Mumbai',
    manager: 'Ms. Patel',
    phone: '+91 22 8765 4321',
    coordinates: { x: 260, y: 370 },
  },
};

const markerColor = '#343884';

function OurOffice() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="w-full flex flex-col items-center py-8 px-2 md:px-0">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-[#343884]">Our Offices in India</h2>
      <div className="w-full max-w-2xl relative">
        <svg
          viewBox="0 0 600 600"
          className="w-full h-auto max-h-[400px] mx-auto"
          style={{ background: 'white', borderRadius: '1rem', boxShadow: '0 4px 24px rgba(52,56,132,0.08)' }}
        >
          {/* India outline (simplified for demo) */}
          <path
            d="M120,100 L500,100 L550,180 L540,250 L480,320 L420,400 L350,470 L270,420 L200,350 L150,250 L170,180 Z"
            fill="#f3f4f6"
            stroke="#c7d2fe"
            strokeWidth="3"
          />
          {/* Markers */}
          {Object.entries(officeData).map(([key, office]) => (
            <g key={key}>
              <circle
                cx={office.coordinates.x}
                cy={office.coordinates.y}
                r="13"
                fill={markerColor}
                stroke="#fff"
                strokeWidth="3"
                onMouseEnter={() => setHovered(key)}
                onMouseLeave={() => setHovered(null)}
                style={{ cursor: 'pointer', filter: hovered === key ? 'drop-shadow(0 0 8px #34388488)' : 'none', transition: 'filter 0.2s' }}
              />
              {/* Marker label */}
              <text
                x={office.coordinates.x + 18}
                y={office.coordinates.y + 5}
                fontSize="1rem"
                fill={markerColor}
                fontWeight="bold"
                style={{ pointerEvents: 'none', fontFamily: 'inherit' }}
              >
                {office.city}
              </text>
              {/* Tooltip */}
              {hovered === key && (
                <foreignObject
                  x={office.coordinates.x - 80}
                  y={office.coordinates.y - 70}
                  width="160"
                  height="60"
                  style={{ pointerEvents: 'none' }}
                >
                  <div className="bg-white border border-[#343884] rounded-lg shadow-lg px-4 py-2 text-sm text-[#343884] animate-fadeIn" style={{ fontFamily: 'inherit' }}>
                    <div className="font-semibold mb-1">{office.name}</div>
                    <div>Manager: {office.manager}</div>
                    <div>Contact: <span className="font-mono">{office.phone}</span></div>
                  </div>
                </foreignObject>
              )}
            </g>
          ))}
        </svg>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.2s ease; }
      `}</style>
    </div>
  );
}

export default OurOffice;