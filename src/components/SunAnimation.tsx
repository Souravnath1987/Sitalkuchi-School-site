import React from 'react';
import { motion } from 'motion/react';

export function SunAnimation({ className = "" }: { className?: string }) {
  return (
    <motion.div 
      className={`relative flex items-center justify-center ${className}`}
      animate={{ y: [-10, 10, -10] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Outer Glow / Shining brightly */}
      <motion.div
        className="absolute inset-0 bg-orange-500 rounded-full blur-2xl z-0"
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <svg
        viewBox="0 0 100 100"
        className="relative z-10 w-full h-full drop-shadow-xl overflow-visible"
      >
        {/* Fiery Rays (rotating) */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "50px 50px" }}
        >
          {/* Main Long Rays */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <path
              key={`long-${angle}`}
              d="M50 0 L56 24 L44 24 Z"
              fill="#FF8C00"
              transform={`rotate(${angle} 50 50)`}
            />
          ))}
          {/* Shorter Inner Rays */}
          {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle) => (
            <path
              key={`short-${angle}`}
              d="M50 10 L54 28 L46 28 Z"
              fill="#FFA500"
              transform={`rotate(${angle} 50 50)`}
            />
          ))}
        </motion.g>

        {/* Sun Body */}
        <motion.circle
          cx="50"
          cy="50"
          r="24"
          animate={{ 
            scale: [1, 1.02, 1, 1.05, 1],
            fill: ["#FFD700", "#FFD700", "#FFB300", "#FF8C00", "#FFD700"]
          }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.5, 0.7, 0.85, 1] }}
        />

        {/* Angry Face & Fire */}
        <g transform="translate(50, 50)">
          {/* Angry Eyebrows */}
          <motion.path
            d="M -12 -9 L -4 -3 M 12 -9 L 4 -3"
            fill="none"
            stroke="#6B0000"
            strokeWidth="2.5"
            strokeLinecap="round"
            animate={{ 
              y: [0, 0, 2, 2, 0],
              strokeWidth: [2.5, 2.5, 3.5, 3.5, 2.5]
            }}
            transition={{ duration: 3, repeat: Infinity, times: [0, 0.6, 0.75, 0.95, 1] }}
          />

          {/* Left Eye */}
          <circle cx="-6" cy="-2" r="2.5" fill="#6B0000" />
          {/* Right Eye */}
          <circle cx="6" cy="-2" r="2.5" fill="#6B0000" />

          {/* Nose */}
          <path 
            d="M 0 -2 L -2 3 L 0 4" 
            fill="none" 
            stroke="#6B0000" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />

          {/* Smoke Puff 1 (Center-Left) */}
          <motion.circle
            animate={{ 
              cx: [0, 0, -8, -18, 0],
              cy: [12, 12, 28, 48, 12],
              r:  [0, 0, 8, 16, 0],
              fill: ["#FF0000", "#FF0000", "#FF8C00", "#555555", "#555555"],
              opacity: [0, 0, 0.9, 0, 0]
            }}
            transition={{ duration: 3, repeat: Infinity, times: [0, 0.7, 0.75, 0.95, 1] }}
          />

          {/* Smoke Puff 2 (Center-Right) */}
          <motion.circle
            animate={{ 
              cx: [0, 0, 10, 20, 0],
              cy: [12, 12, 32, 52, 12],
              r:  [0, 0, 10, 20, 0],
              fill: ["#FF0000", "#FF0000", "#FFaa00", "#444444", "#444444"],
              opacity: [0, 0, 0.9, 0, 0]
            }}
            transition={{ duration: 3, repeat: Infinity, times: [0, 0.72, 0.78, 0.98, 1] }}
          />

          {/* Smoke Puff 3 (Straight-Down / Main) */}
          <motion.circle
            animate={{ 
              cx: [0, 0, -2, -4, 0],
              cy: [12, 12, 38, 62, 12],
              r:  [0, 0, 12, 24, 0],
              fill: ["#FF0000", "#FF0000", "#FF8C00", "#333333", "#333333"],
              opacity: [0, 0, 0.9, 0, 0]
            }}
            transition={{ duration: 3, repeat: Infinity, times: [0, 0.74, 0.82, 0.99, 1] }}
          />

          {/* Smoke Puff 4 (Far-Left) */}
          <motion.circle
            animate={{ 
              cx: [0, 0, -14, -28, 0],
              cy: [12, 12, 34, 52, 12],
              r:  [0, 0, 7, 14, 0],
              fill: ["#FF0000", "#FF0000", "#FFaa00", "#666666", "#666666"],
              opacity: [0, 0, 0.8, 0, 0]
            }}
            transition={{ duration: 3, repeat: Infinity, times: [0, 0.76, 0.85, 0.99, 1] }}
          />

          {/* Smoke Puff 5 (Far-Right) */}
          <motion.circle
            animate={{ 
              cx: [0, 0, 14, 28, 0],
              cy: [12, 12, 36, 56, 12],
              r:  [0, 0, 8, 16, 0],
              fill: ["#FF0000", "#FF0000", "#FF8C00", "#444444", "#444444"],
              opacity: [0, 0, 0.8, 0, 0]
            }}
            transition={{ duration: 3, repeat: Infinity, times: [0, 0.78, 0.88, 0.99, 1] }}
          />

          {/* Angry Open Mouth */}
          <motion.ellipse
            cx="0"
            cy="11"
            rx="5"
            ry="2"
            fill="#4A0000"
            animate={{ 
              ry: [2, 2, 8, 8, 2],
              cy: [11, 11, 14, 14, 11]
            }}
            transition={{ duration: 3, repeat: Infinity, times: [0, 0.7, 0.75, 0.95, 1] }}
          />
        </g>
      </svg>
    </motion.div>
  );
}
