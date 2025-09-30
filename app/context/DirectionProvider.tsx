"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// 1. تعريف الأنواع التي سيحتويها الـ Context
type Direction = 'rtl' | 'ltr';

interface DirectionContextType {
  direction: Direction;
  toggleDirection: () => void;
}

// 2. إنشاء الـ Context مع تحديد النوع، والقيمة الافتراضية يمكن أن تكون undefined
const DirectionContext = createContext<DirectionContextType | undefined>(undefined);

// 3. تعريف نوع الـ props للـ Provider
interface DirectionProviderProps {
  children: ReactNode;
}

// 4. إنشاء الـ Provider
export function DirectionProvider({ children }: DirectionProviderProps) {
  // تحديد نوع الحالة لضمان أنها لا تقبل إلا 'rtl' أو 'ltr'
  const [direction, setDirection] = useState<Direction>('ltr');

  useEffect(() => {
    document.documentElement.dir = direction;
    localStorage.setItem('direction', direction);
  }, [direction]);

  useEffect(() => {
    const savedDirection = localStorage.getItem('direction');
    // التحقق من أن القيمة المحفوظة هي من النوع الصحيح قبل استخدامها
    if (savedDirection === 'rtl' || savedDirection === 'ltr') {
      setDirection(savedDirection);
    }
  }, []);

  const toggleDirection = () => {
    setDirection((prevDirection) => (prevDirection === 'ltr' ? 'rtl' : 'ltr'));
  };

  return (
    <DirectionContext.Provider value={{ direction, toggleDirection }}>
      {children}
    </DirectionContext.Provider>
  );
}

// 5. إنشاء Custom Hook مع فحص للتأكد من استخدامه داخل Provider
export function useDirection(): DirectionContextType {
  const context = useContext(DirectionContext);
  if (context === undefined) {
    throw new Error('useDirection must be used within a DirectionProvider');
  }
  return context;
}