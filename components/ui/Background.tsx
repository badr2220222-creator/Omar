// components/Background.tsx
"use client";

import { useEffect, useState } from 'react';

export default function Background() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // الكشف عن تفضيلات النظام
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);

    // الاستماع للتغييرات
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <style jsx global>{`
      body {
        background-image: ${isDarkMode 
          ? 'none' 
          : `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('/bgimg.jpg')`};
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-color: ${isDarkMode ? '#0f172a' : '#f0f2f5'};
      }
    `}</style>
  );
}