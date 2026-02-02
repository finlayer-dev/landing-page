import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import siteTranslations from '../translations/index';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const translations = siteTranslations[language].header;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const toggleLanguage = () => {
    setLanguage(language === 'vi' ? 'en' : 'vi');
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-primary flex items-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
            </svg>
            FinLayer
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="font-medium hover:text-primary transition-colors">{translations.home}</a>
          <a href="#features" className="font-medium hover:text-primary transition-colors">{translations.features}</a>
          <a href="#architecture" className="font-medium hover:text-primary transition-colors">{translations.architecture}</a>
          <a href="#useCases" className="font-medium hover:text-primary transition-colors">{translations.useCases}</a>
          <a href="#documentation" className="font-medium hover:text-primary transition-colors">{translations.documentation}</a>
          <a href="#contact" className="font-medium hover:text-primary transition-colors">Contact</a>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <button 
            onClick={toggleLanguage}
            className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100 transition-colors"
            aria-label={language === 'vi' ? 'Switch to English' : 'Chuyển sang tiếng Việt'}
          >
            {language === 'vi' ? 'EN' : 'VI'}
          </button>
          
          <button className="btn-primary">
            {language === 'vi' ? 'Bắt đầu' : 'Get Started'}
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg pb-4">
          <nav className="flex flex-col space-y-3 px-4 py-2">
            <a href="#home" className="font-medium hover:text-primary transition-colors">{translations.home}</a>
            <a href="#features" className="font-medium hover:text-primary transition-colors">{translations.features}</a>
            <a href="#architecture" className="font-medium hover:text-primary transition-colors">{translations.architecture}</a>
            <a href="#useCases" className="font-medium hover:text-primary transition-colors">{translations.useCases}</a>
            <a href="#documentation" className="font-medium hover:text-primary transition-colors">{translations.documentation}</a>
            <a href="#contact" className="font-medium hover:text-primary transition-colors">{translations.contact}</a>
          </nav>
          
          <div className="flex items-center space-x-4 px-4 mt-4">
            <button 
              onClick={toggleLanguage}
              className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100 transition-colors"
              aria-label={language === 'vi' ? 'Switch to English' : 'Chuyển sang tiếng Việt'}
            >
              {language === 'vi' ? 'EN' : 'VI'}
            </button>
            
            <button className="btn-primary">
              {language === 'vi' ? 'Bắt đầu' : 'Get Started'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
