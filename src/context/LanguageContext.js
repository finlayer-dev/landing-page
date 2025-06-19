import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a context for language
export const LanguageContext = createContext();

// Language provider component
export const LanguageProvider = ({ children }) => {
  // Check if language preference is stored in localStorage, default to Vietnamese
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    return savedLanguage || 'vi'; // Default to Vietnamese
  });

  // Save language preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('preferredLanguage', language);
  }, [language]);

  // Function to toggle language
  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'vi' ? 'en' : 'vi');
  };

  // Language switcher component with flags
  const LanguageSwitcher = () => {
    return (
      <div className="language-switcher">
        <button
          onClick={() => setLanguage('vi')}
          className={`flag-button ${language === 'vi' ? 'active' : ''}`}
          aria-label="Switch to Vietnamese"
        >
          <div className="flag flag-vi"></div>
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`flag-button ${language === 'en' ? 'active' : ''}`}
          aria-label="Switch to English"
        >
          <div className="flag flag-en"></div>
        </button>
      </div>
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, LanguageSwitcher }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
