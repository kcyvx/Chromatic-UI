import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Theme, ThemeContextValue, ThemeProviderProps } from '../types';
// Import themes directly instead of from index to avoid circular dependency
import { lightThemes } from '../themes/light';
import { darkThemes } from '../themes/dark';

export const ThemeContext = createContext<ThemeContextValue | null>(null);

// Create allThemes locally to avoid circular dependency
const allThemes = [
  ...lightThemes,
  ...darkThemes,
];

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = 'oceanic-light',
  themes = allThemes, // Use local allThemes instead of imported one
}) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
    const foundTheme = themes.find(theme => theme.name === defaultTheme);
    return foundTheme || themes[0];
  });

  const [availableThemes] = useState<Theme[]>(themes);

  // Fonction pour changer de thÃ¨me
  const setTheme = (themeName: string) => {
    const foundTheme = availableThemes.find(theme => theme.name === themeName);
    if (foundTheme) {
      setCurrentTheme(foundTheme);
    }
  };

  // Check si mode sombre
  const isDarkMode = currentTheme.category === 'dark';

  // Basculer entre le premier thÃ¨me light et dark disponible
  const toggleDarkMode = () => {
    const lightTheme = availableThemes.find(theme => theme.category === 'light');
    const darkTheme = availableThemes.find(theme => theme.category === 'dark');
    
    if (isDarkMode && lightTheme) {
      setCurrentTheme(lightTheme);
    } else if (!isDarkMode && darkTheme) {
      setCurrentTheme(darkTheme);
    }
  };

  // Appliquer les couleurs CSS custom properties au DOM et la classe bg-background sur body
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const colors = currentTheme.colors;

    // Appliquer toutes les couleurs comme variables CSS
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--theme-${key}`, value);
    });

    // Variables additionnelles pour faciliter l'usage avec Tailwind
    root.style.setProperty('--theme-primary', colors.primary);
    root.style.setProperty('--theme-secondary', colors.secondary);
    root.style.setProperty('--theme-accent', colors.accent);
    root.style.setProperty('--theme-background', colors.background);
    root.style.setProperty('--theme-surface', colors.surface);
    root.style.setProperty('--theme-text', colors.text);

    // Ajouter la classe bg-background au body
    // Nettoyer d'abord toutes les anciennes classes bg-* du thÃ¨me
    const classesToRemove = Array.from(body.classList).filter(className => 
      className.startsWith('bg-') && className.includes('theme')
    );
    classesToRemove.forEach(className => body.classList.remove(className));
    
    // Ajouter la nouvelle classe
    body.classList.add('bg-background');

    // Fonction de nettoyage pour supprimer la classe quand le composant est dÃ©montÃ©
    return () => {
      body.classList.remove('bg-background');
    };
  }, [currentTheme]);

  const contextValue: ThemeContextValue = {
    currentTheme,
    setTheme,
    availableThemes,
    isDarkMode,
    toggleDarkMode,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};