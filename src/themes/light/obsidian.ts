import { Theme } from '../../types';

export const obsidianLight: Theme = {
  name: 'obsidian-light',
  displayName: 'Obsidian Light',
  category: 'light',
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
    
    // Couleurs de fond - Blanc cassé et tons clairs
    background: '#FAFAFA',
    backgroundLight: '#FFFFFF',
    backgroundDark: '#F5F5F5',
    surface: '#FFFFFF',
    surfaceLight: '#FAFAFA',
    surfaceDark: '#F5F5F5',
    
    // Couleurs de texte - Sombres pour contraste sur fond clair
    text: '#212121',
    textSecondary: '#424242',
    textMuted: '#757575',
    textInverse: '#FFFFFF',
    
    // Couleurs de bordure - Gris doux
    border: '#E0E0E0',
    borderLight: '#F5F5F5',
    borderDark: '#BDBDBD',
    
    // Couleurs d'état - Adaptées pour mode light
    success: '#388E3C',
    successLight: '#4CAF50',
    successDark: '#2E7D32',
    warning: '#F57C00',
    warningLight: '#FF9800',
    warningDark: '#E65100',
    error: '#D32F2F',
    errorLight: '#F44336',
    errorDark: '#C62828',
    info: '#1976D2',
    infoLight: '#2196F3',
    infoDark: '#1565C0',
  },
};