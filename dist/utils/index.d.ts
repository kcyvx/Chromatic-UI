import { Theme } from '../types';
/**
 * Génère les variables CSS personnalisées pour un thème
 */
export declare const generateCSSVariables: (theme: Theme) => string;
/**
 * Génère la configuration Tailwind pour un thème
 * Utile pour intégrer les couleurs dans tailwind.config.js
 */
export declare const generateTailwindConfig: (theme: Theme) => {
    extend: {
        colors: {
            theme: Record<string, string>;
        };
    };
};
/**
 * Génère toutes les variables CSS pour plusieurs thèmes
 */
export declare const generateMultipleThemesCSS: (themes: Theme[]) => string;
/**
 * Applique un thème au DOM
 */
export declare const applyThemeToDOM: (theme: Theme) => void;
/**
 * Convertit une couleur hex en RGB
 */
export declare const hexToRgb: (hex: string) => {
    r: number;
    g: number;
    b: number;
} | null;
/**
 * Calcule le contraste entre deux couleurs (utile pour l'accessibilité)
 */
export declare const getContrastRatio: (color1: string, color2: string) => number;
/**
 * Vérifie si une couleur respecte les standards d'accessibilité WCAG
 */
export declare const isAccessible: (foreground: string, background: string, level?: "AA" | "AAA") => boolean;
//# sourceMappingURL=index.d.ts.map