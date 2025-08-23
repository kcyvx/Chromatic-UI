export interface ThemeColors {
    primary: string;
    primaryLight: string;
    primaryDark: string;
    secondary: string;
    secondaryLight: string;
    secondaryDark: string;
    accent: string;
    accentLight: string;
    accentDark: string;
    background: string;
    backgroundLight: string;
    backgroundDark: string;
    surface: string;
    surfaceLight: string;
    surfaceDark: string;
    text: string;
    textSecondary: string;
    textMuted: string;
    textInverse: string;
    border: string;
    borderLight: string;
    borderDark: string;
    success: string;
    successLight: string;
    successDark: string;
    warning: string;
    warningLight: string;
    warningDark: string;
    error: string;
    errorLight: string;
    errorDark: string;
    info: string;
    infoLight: string;
    infoDark: string;
}
export interface Theme {
    name: string;
    displayName: string;
    category: 'light' | 'dark';
    colors: ThemeColors;
}
export interface ThemeContextValue {
    currentTheme: Theme;
    setTheme: (themeName: string) => void;
    availableThemes: Theme[];
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}
export type ThemeCategory = 'light' | 'dark';
export interface ThemeProviderProps {
    children: React.ReactNode;
    defaultTheme?: string;
    themes?: Theme[];
}
//# sourceMappingURL=index.d.ts.map