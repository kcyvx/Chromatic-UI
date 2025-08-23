import { Theme } from '../../types';

export const obsidianDark: Theme = {
  name: 'obsidian-dark',
  displayName: 'Obsidian Dark',
  category: 'dark',
  colors: {
    // Couleurs principales - Violet améthyste adapté pour le light
    primary: '#7B1FA2',
    primaryLight: '#AB47BC',
    primaryDark: '#4A148C',
    
    // Couleurs secondaires - Rose quartz adapté pour le light
    secondary: '#C2185B',
    secondaryLight: '#E91E63',
    secondaryDark: '#880E4F',
    
    // Couleurs d'accent - Or ancien adapté pour le light
    accent: '#F57C00',
    accentLight: '#FF9800',
    accentDark: '#E65100',
    
    // Couleurs de fond - Noir obsidienne profond
    background: '#0D0D0D',
    backgroundLight: '#1A1A1A',
    backgroundDark: '#000000',
    surface: '#1A1A1A',
    surfaceLight: '#262626',
    surfaceDark: '#0D0D0D',
    
    // Couleurs de texte - Blanc perle
    text: '#F5F5F5',
    textSecondary: '#BDBDBD',
    textMuted: '#757575',
    textInverse: '#0D0D0D',
    
    // Couleurs de bordure - Gris charbon
    border: '#424242',
    borderLight: '#616161',
    borderDark: '#212121',
    
    // Couleurs d'état - Adaptées pour mode sombre
    success: '#4CAF50',
    successLight: '#81C784',
    successDark: '#2E7D32',
    warning: '#FF9800',
    warningLight: '#FFB74D',
    warningDark: '#E65100',
    error: '#F44336',
    errorLight: '#E57373',
    errorDark: '#C62828',
    info: '#2196F3',
    infoLight: '#64B5F6',
    infoDark: '#1565C0',
  },
};