import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/LanguageSwitcher.css';

const FloatingLanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  
  return (
    <div className="floating-language-switcher">
      <button
        onClick={() => setLanguage('vi')}
        className={`flag-button ${language === 'vi' ? 'active' : ''}`}
        aria-label="Chuyển sang tiếng Việt"
        title="Tiếng Việt"
      >
        <div className="flag flag-vi"></div>
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`flag-button ${language === 'en' ? 'active' : ''}`}
        aria-label="Switch to English"
        title="English"
      >
        <div className="flag flag-en"></div>
      </button>
    </div>
  );
};

export default FloatingLanguageSwitcher;
