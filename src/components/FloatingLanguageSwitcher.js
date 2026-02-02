import React from 'react';
import { Button, Space } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { useLanguage } from '../context/LanguageContext';
import '../styles/LanguageSwitcher.css';

const FloatingLanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  
  return (
    <div className="floating-language-switcher">
      <Space.Compact>
        <Button
          type={language === 'vi' ? 'primary' : 'default'}
          onClick={() => setLanguage('vi')}
          icon={<GlobalOutlined />}
          size="small"
        >
          VI
        </Button>
        <Button
          type={language === 'en' ? 'primary' : 'default'}
          onClick={() => setLanguage('en')}
          icon={<GlobalOutlined />}
          size="small"
        >
          EN
        </Button>
      </Space.Compact>
    </div>
  );
};

export default FloatingLanguageSwitcher;
