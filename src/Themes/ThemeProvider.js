import React, { useState, useEffect } from 'react';
import { ThemeContext, lightTheme, darkTheme } from './theme';

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  useEffect(() => {
    
    const isNight = new Date().getHours() >= 18 || new Date().getHours() < 6;
    setTheme(isNight ? darkTheme : lightTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};