import React from "react";

const PrimaryButton = ({ children, className, animation = false, onClick, disabled }) => {
  return (
    <button
      className={`
        relative 
        cursor-pointer
        flex items-center
        bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
        text-white font-semibold py-2.5 px-6 rounded-lg
        shadow-lg shadow-blue-500/20
        hover:shadow-xl hover:shadow-blue-500/30
        hover:scale-105
        active:scale-95
        transition-all duration-300 ease-in-out
        transform
        border border-blue-400/20
        backdrop-blur-sm
        overflow-hidden
        group
        ${animation ? 'animate-bounce' : ''}
        ${className}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
        translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      
      {/* Pulse effect */}
      {animation && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent rounded-lg 
          animate-pulse-slow opacity-50" />
      )}
    </button>
  );
};

export default PrimaryButton;
