import React, { createContext, useContext, useEffect, useState } from 'react';
import { saveFontScale, loadFontScale } from './fontSizeStorage';

interface FontSizeContextType {
  fontScale: number;
  setFontScale: (value: number) => void;
}

const FontSizeContext = createContext<FontSizeContextType>({
  fontScale: 1,
  setFontScale: () => {},
});

export const FontSizeProvider = ({ children }) => {
  const [fontScale, setFontScaleState] = useState(1);

  useEffect(() => {
    (async () => {
      const saved = await loadFontScale();
      setFontScaleState(saved);
    })();
  }, []);

  const setFontScale = (value: number) => {
    setFontScaleState(value);
    saveFontScale(value);
  };

  return (
    <FontSizeContext.Provider value={{ fontScale, setFontScale }}>
      {children}
    </FontSizeContext.Provider>
  );
};

export const useFontSize = () => useContext(FontSizeContext);
