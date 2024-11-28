"use client";

import React from "react";

export const GlassyBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden">
      {/* White base */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Soft color blocks */}
      <div className="absolute inset-0">
        {/* Main accent color block */}
        <div 
          className="absolute w-[800px] h-[800px] rounded-[100px] mix-blend-multiply animate-float-slow"
          style={{
            backgroundColor: '#BAE6FD', // Lighter sky blue
            top: '20%',
            left: '30%',
            filter: 'blur(100px)',
            opacity: '0.15',
            transform: 'translate(-50%, -50%) rotate(-10deg)',
          }}
        />
        <div 
          className="absolute w-[600px] h-[600px] rounded-[100px] mix-blend-multiply animate-float-delayed-slow"
          style={{
            backgroundColor: '#E0F2FE', // Very light sky blue
            top: '60%',
            right: '25%',
            filter: 'blur(100px)',
            opacity: '0.12',
            transform: 'translate(50%, -50%) rotate(15deg)',
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] rounded-[100px] mix-blend-multiply animate-float-reverse-slow"
          style={{
            backgroundColor: '#7DD3FC', // Sky blue
            bottom: '10%',
            left: '35%',
            filter: 'blur(100px)',
            opacity: '0.1',
            transform: 'translate(-50%, 50%) rotate(-15deg)',
          }}
        />
      </div>

      {/* Glass overlay with reduced blur */}
      <div className="absolute inset-0 backdrop-blur-[20px] bg-white/70" />
    </div>
  );
}; 