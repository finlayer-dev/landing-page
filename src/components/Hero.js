import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import siteTranslations from '../translations/index';

const Hero = () => {
  const { language } = useLanguage();
  const translations = siteTranslations[language].hero;
  
  return (
    <section id="home" className="hero gradient-bg pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-white mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {translations.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {translations.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="btn-secondary bg-white">
                {translations.exploreSolution}
              </button>
              <button className="btn-secondary bg-transparent text-white border-white hover:bg-white/10">
                {translations.requestDemo}
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-2xl">
              <div className="aspect-square rounded-lg overflow-hidden">
                <BlockchainAnimation />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Simple blockchain animation component
const BlockchainAnimation = () => {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full">
      {/* Background grid */}
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      
      {/* Blockchain nodes and connections */}
      <g className="nodes">
        <circle cx="200" cy="200" r="30" fill="#0066cc" opacity="0.9" className="pulse-animation" />
        <circle cx="120" cy="140" r="20" fill="#00cc66" opacity="0.8" />
        <circle cx="280" cy="140" r="20" fill="#00cc66" opacity="0.8" />
        <circle cx="120" cy="260" r="20" fill="#00cc66" opacity="0.8" />
        <circle cx="280" cy="260" r="20" fill="#00cc66" opacity="0.8" />
        
        {/* Additional nodes */}
        <circle cx="70" cy="200" r="15" fill="#f2f8ff" opacity="0.7" />
        <circle cx="330" cy="200" r="15" fill="#f2f8ff" opacity="0.7" />
        <circle cx="200" cy="70" r="15" fill="#f2f8ff" opacity="0.7" />
        <circle cx="200" cy="330" r="15" fill="#f2f8ff" opacity="0.7" />
      </g>
      
      {/* Connections */}
      <g className="connections">
        <line x1="200" y1="200" x2="120" y2="140" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="2" className="transaction-path" />
        <line x1="200" y1="200" x2="280" y2="140" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="2" className="transaction-path" />
        <line x1="200" y1="200" x2="120" y2="260" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="2" className="transaction-path" />
        <line x1="200" y1="200" x2="280" y2="260" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="2" className="transaction-path" />
        
        {/* Additional connections */}
        <line x1="120" y1="140" x2="70" y2="200" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" className="transaction-path" />
        <line x1="280" y1="140" x2="330" y2="200" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" className="transaction-path" />
        <line x1="120" y1="260" x2="70" y2="200" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" className="transaction-path" />
        <line x1="280" y1="260" x2="330" y2="200" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" className="transaction-path" />
        <line x1="120" y1="140" x2="200" y2="70" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" className="transaction-path" />
        <line x1="280" y1="140" x2="200" y2="70" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" className="transaction-path" />
        <line x1="120" y1="260" x2="200" y2="330" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" className="transaction-path" />
        <line x1="280" y1="260" x2="200" y2="330" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" className="transaction-path" />
      </g>
      
      {/* Financial icons */}
      <g className="icons">
        <text x="200" y="205" textAnchor="middle" fill="white" fontSize="10">₫</text>
        <text x="120" y="145" textAnchor="middle" fill="white" fontSize="8">$</text>
        <text x="280" y="145" textAnchor="middle" fill="white" fontSize="8">€</text>
        <text x="120" y="265" textAnchor="middle" fill="white" fontSize="8">¥</text>
        <text x="280" y="265" textAnchor="middle" fill="white" fontSize="8">£</text>
      </g>
    </svg>
  );
};

export default Hero;
