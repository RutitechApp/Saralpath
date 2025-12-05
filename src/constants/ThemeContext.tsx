import React, { createContext, useContext, useEffect, useState } from 'react';
import { Appearance } from 'react-native';
import { dark, light } from '../utils/colors';
import { loadTheme, saveTheme } from './themeStorage';

const ThemeContext = createContext({
  theme: 'light',
  setTheme: () => {},
  colors: light,
});

interface ThemeProviderProps {
  children?: void;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState('default');

  useEffect(() => {
    (async () => {
      const savedTheme = await loadTheme();
      if (savedTheme) {
        setTheme(savedTheme);
      }
    })();
  }, []);

  const changeTheme = async (selectedTheme?: string | any) => {
    setTheme(selectedTheme);
    await saveTheme(selectedTheme);
  };

  const systemPreference = Appearance.getColorScheme();
  const appliedTheme = theme === 'default' ? systemPreference : theme;

  const colors = appliedTheme === 'dark' ? dark : light;

  return (
    <ThemeContext.Provider value={{ theme, setTheme: changeTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeColors = () => useContext(ThemeContext);
