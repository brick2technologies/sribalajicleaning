import React from 'react';

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-accent transition-transform duration-500 group-hover:scale-110" aria-hidden="true">
    {children}
  </svg>
);

export const WaterTankIcon = () => (
  <svg 
    viewBox="0 0 270 480" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="12" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="w-12 h-12 text-accent transition-transform duration-500 group-hover:scale-110" 
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Roof Structure */}
    <path d="M264 80L136 8L8 80h256z" />
    
    {/* Main Tank Body */}
    <path d="M24 80h224v192H24V80z" />
    
    {/* The Water Drop Symbol */}
    <path d="M136 240c-22 0-40-18-40-40 0-22 40-64 40-64s40 42 40 64c0 22-18 40-40 40z" />
    
    {/* Base Platform */}
    <path d="M8 272h256v32H8v-32z" />
    
    {/* Support Structure / Legs */}
    <path d="M48 304v168" />
    <path d="M222 304v168" />
    
    {/* Cross Bracing */}
    <path d="M48 330l174 80" />
    <path d="M222 330L48 410" />
    <path d="M48 410h174" />
  </svg>
);

export const VillaIcon = () => (
  <svg 
    viewBox="0 0 48 48" 
    fill="currentColor" 
    className="w-12 h-12 text-accent transition-transform duration-500 group-hover:scale-110" 
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Upper Ventilation/Structure */}
    <path d="M5.876 8.212l4.971-5.676a.5.5 0 00.118-.4 2.481 2.481 0 00-2.465-2.136h-1a2.5 2.5 0 00-2.5 2.5v5.383a.5.5 0 00.876.329z"/>
    
    {/* Main Upper Housing */}
    <path d="M31.129 19h15.737a.5.5 0 00.477-.651l-4.807-15.171a4.486 4.486 0 00-4.286-3.138h-19.18a.5.5 0 00-.376.829l11.638 13.289a3.513 3.513 0 01.365 4.089.5.5 0 00.432.753z"/>
    
    {/* Roof/Top Framing */}
    <path d="M1.53 18.237l.905.905a2.515 2.515 0 003.649-.121l9.04-10.332a.512.512 0 01.753 0l9.039 10.332a2.518 2.518 0 003.65.121l.9-.905a2.507 2.507 0 00.113-3.415l-12.198-13.933a2.582 2.582 0 00-3.762 0l-12.202 13.933a2.508 2.508 0 00.113 3.415z"/>
    
    {/* Base/Foundation */}
    <path d="M47.5 42h-45a2.5 2.5 0 00-2.5 2.5v1a2.5 2.5 0 002.5 2.5h43a2.5 2.5 0 002.5-2.5v-3a.5.5 0 00-.5-.5z"/>
    
    {/* Left Mechanical Pillar & Details */}
    <path d="M25.5 41a.5.5 0 00.5-.5v-19.37a.5.5 0 00-.34-.47 3.385 3.385 0 01-1.49-.98l-8.29-9.47a.52.52 0 00-.76 0l-8.29 9.47a3.385 3.385 0 01-1.49.98.5.5 0 00-.34.47v19.37a.5.5 0 00.5.5h6.5v-8a3.5 3.5 0 017 0v8zm-10-17.5a3.5 3.5 0 113.5-3.5 3.5 3.5 0 01-3.5 3.5z"/>
    
    {/* Right Mechanical Housing & Grids */}
    <path d="M47.5 20h-18.236a.507.507 0 00-.311.107 3.475 3.475 0 01-1.544.709.5.5 0 00-.409.492v19.192a.5.5 0 00.5.5h3v-3h13v3h4a.5.5 0 00.5-.5v-20a.5.5 0 00-.5-.5zm-4 17h-13v-4h13zm0-5h-13v-2.5a2 2 0 012-2h9a2 2 0 012 2z"/>
  </svg>
);

export const ApartmentIcon = () => (
  <IconWrapper>
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <path d="M9 2v20M15 2v20M4 6h16M4 10h16M4 14h16M4 18h16" />
  </IconWrapper>
);

export const UpholsteryIcon = () => (
  <IconWrapper>
    <path d="M4 11V9a2 2 0 012-2h12a2 2 0 012 2v2M4 11a2 2 0 00-2 2v4a2 2 0 002 2h16a2 2 0 002-2v-4a2 2 0 00-2-2M4 11h16M7 15h10" />
  </IconWrapper>
);

export const OfficeIcon = () => (
  <IconWrapper>
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M6 21h12M12 17v4M7 8h10M7 12h4" />
  </IconWrapper>
);

export const FloorIcon = () => (
  <IconWrapper>
    <path d="M3 12h18M3 18h18M12 3v18M12 3l-3 3M12 3l3 3" />
    <circle cx="12" cy="12" r="3" />
  </IconWrapper>
);

export const RetailIcon = () => (
  <IconWrapper>
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <rect x="9" y="13" width="6" height="8" />
    <path d="M12 2v2M3 9h18" />
  </IconWrapper>
);

export const CarpetIcon = () => (
  <IconWrapper>
    <path d="M22 17H2a3 3 0 000 6h20a3 3 0 000-6zM2 17V5a3 3 0 013-3h14a3 3 0 013 3v12" />
    <path d="M7 8h10M7 12h6" />
  </IconWrapper>
);

export const RestaurantIcon = () => (
  <svg 
    viewBox="0 0 512 512" 
    fill="currentColor" 
    className="w-12 h-12 text-accent transition-transform duration-500 group-hover:scale-110" 
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Chef Hat / Professional Standard Top */}
    <path d="M376 75c0-41.4-33.6-75-75-75h-90c-41.4 0-75 33.6-75 75 0 8.4 6.6 15 15 15h210c8.4 0 15-6.6 15-15z"/>
    <path d="M376 105c0 41.4-33.6 75-75 75l-45 31-45-31c-41.4 0-75-33.6-75-75 0-8.4 6.6-15 15-15h210c8.4 0 15 6.6 15 15z"/>
    
    {/* Main Service Counter / Kitchen Infrastructure */}
    <path d="M507.5 215.5l-30-31c-2.7-3-6.6-4.5-10.5-4.5h-422c-3.9 0-7.8 1.5-10.5 4.5l-30 31c-3 2.7-4.5 6.6-4.5 10.5v30c0 24.9 20.1 45 45 45 11.7 0 22.9-4.5 31-11.7 8.1 7.2 18.3 11.7 30 11.7s21.9-4.5 30-11.7c8.1 7.2 18.3 11.7 30 11.7s21.9-4.5 30-11.7c8.1 7.2 18.3 11.7 30 11.7s21.9-4.5 30-11.7c8.1 7.2 18.3 11.7 30 11.7s21.9-4.5 30-11.7c8.1 7.2 18.3 11.7 30 11.7s21.9-4.5 30-11.7c8.1 7.2 19.3 11.7 31 11.7s21.9-4.5 30-11.7c8.1 7.2 18.3 11.7 30 11.7 24.9 0 45-20.1 45-45v-30c0-3.9-1.5-7.8-4.5-10.5z"/>
    
    {/* Industrial Cleaning Equipment / Base */}
    <path d="M482 361l-30 30 30 31v30h-226c-8.4 0-15-6.6-15-15v-91c0-8.4 6.6-15 15-15h226z"/>
    <path d="M196 331h-90c-8.3 0-15 6.7-15 15v166h30l30-30 30 30h30v-166c0-8.3-6.7-15-15-15z"/>
  </svg>
);

export const HospitalityIcon = () => (
  <svg 
    viewBox="0 0 512 512" 
    fill="currentColor" 
    className="w-12 h-12 text-accent transition-transform duration-500 group-hover:scale-110" 
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Main Building Structure */}
    <path d="M271 15v497h-90l-30-30h-30l-30 30h-76c-8.4 0-15-6.6-15-15v-482c0-8.4 6.6-15 15-15h241c8.4 0 15 6.6 15 15z"/>
    
    {/* Medical/Sanitization Plus Symbol Section */}
    <path d="M497 211h-181c-8.3 0-15-6.7-15-15v-181c0-8.3 6.7-15 15-15h181c8.3 0 15 6.7 15 15v181c0 8.3-6.7 15-15 15z"/>
    <path d="M436 91h-15v-15c0-8.3-6.7-15-15-15s-15 6.7-15 15v15h-15c-8.3 0-15 6.7-15 15s6.7 15 15 15h15v15c0 8.3 6.7 15 15 15s15-6.7 15-15v-15h15c8.3 0 15-6.7 15-15s-6.7-15-15-15z"/>
    
    {/* Window/Grid Patterns representing clean environments */}
    <path d="M76 121c-8.3 0-15-6.7-15-15v-30c0-8.3 6.7-15 15-15s15 6.7 15 15v30c0 8.3-6.7 15-15 15zm75-45v30c0 8.4-6.6 15-15 15s-15-6.6-15-15v-30c0-8.4 6.6-15 15-15s15 6.6 15 15zm45 45c-8.3 0-15-6.7-15-15v-30c0-8.3 6.7-15 15-15s15 6.7 15 15v30c0 8.3-6.7 15-15 15z"/>
    <path d="M316 361c-8.3 0-15-6.7-15-15v-30c0-8.3 6.7-15 15-15s15 6.7 15 15v30c0 8.3-6.7 15-15 15zm60 0c-8.3 0-15-6.7-15-15v-30c0-8.3 6.7-15 15-15s15 6.7 15 15v30c0 8.3-6.7 15-15 15z"/>
    
    {/* Foundation/Infrastructure */}
    <path d="M181 436v76h-90v-76c0-8.4 6.6-15 15-15h60c8.4 0 15 6.6 15 15z"/>
  </svg>
);

export const SchoolIcon = () => (
  <svg 
    viewBox="0 0 512 512" 
    fill="currentColor" 
    className="w-12 h-12 text-accent transition-transform duration-500 group-hover:scale-110" 
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Side Wings / Building Extensions */}
    <path d="M7.6 259.2l140.1-32.7v270.8H9.8c-5.4 0-9.8-4.4-9.8-9.8V268.8c0-4.6 3.1-8.6 7.6-9.6z M504.4 259.2l-140.1-32.7v270.8h137.8c5.4 0 9.8-4.4 9.8-9.8V268.8c0-4.6-3.2-8.6-7.7-9.6z"/>
    
    {/* Central Clock Tower & Flag Pole */}
    <path d="M256 157.8c-5.5 0-10-4.5-10-10V24.7c0-5.5 4.5-10 10-10s10 4.5 10 10v123.1c0 5.5-4.5 10-10 10z"/>
    <rect x="256" y="24.7" width="78.8" height="59.1" />
    
    {/* Main Building Body */}
    <path d="M364.3 497.3H147.7V178c0-3.5 1.9-6.7 4.9-8.5l98.5-58.2c3-1.8 6.8-1.8 9.8 0l98.5 58.2c3 1.7 4.9 5 4.9 8.5v319.3z"/>
    
    {/* Entrance Door */}
    <path d="M226.5 339.8h59.1c5.4 0 9.8 4.4 9.8 9.8v108.3h-78.8V349.6c0-5.4 4.4-9.8 9.9-9.8z"/>
    
    {/* Central Clock / Emblem */}
    <circle cx="256" cy="226.5" r="44.3" />
    
    {/* Windows */}
    <path d="M418.5 300.4h39.4c5.4 0 9.8 4.4 9.8 9.8v39.4c0 5.4-4.4 9.8-9.8 9.8h-39.4c-5.4 0-9.8-4.4-9.8-9.8v-39.4c0-5.4 4.4-9.8 9.8-9.8z M418.5 398.8h39.4c5.4 0 9.8 4.4 9.8 9.8v39.4c0 5.4-4.4 9.8-9.8 9.8h-39.4c-5.4 0-9.8-4.4-9.8-9.8v-39.4c0-5.4 4.4-9.8 9.8-9.8z M54.2 300.4h39.4c5.4 0 9.8 4.4 9.8 9.8v39.4c0 5.4-4.4 9.8-9.8 9.8H54.2c-5.4 0-9.8-4.4-9.8-9.8v-39.4c0-5.4 4.4-9.8 9.8-9.8z M54.2 398.8h39.4c5.4 0 9.8 4.4 9.8 9.8v39.4c0 5.4-4.4 9.8-9.8 9.8H54.2c-5.4 0-9.8-4.4-9.8-9.8v-39.4c0-5.4 4.4-9.8 9.8-9.8z"/>
  </svg>
);

export const ChemicalIcon = () => (
  <IconWrapper>
    <path d="M10 2v8L4.7 19c-.3.5-.1 1.2.4 1.5.2.1.4.2.6.2h12.6c.6 0 1.1-.5 1.1-1.1 0-.2-.1-.4-.2-.6L14 10V2h-4z" />
    <path d="M8.5 10h7M7 15h10" />
  </IconWrapper>
);