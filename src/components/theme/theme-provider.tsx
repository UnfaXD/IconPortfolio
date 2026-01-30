'use client'

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

type ThemeContextType = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider = ({
                           children,
                           defaultTheme = 'system',
                       }: {
    children: React.ReactNode;
    defaultTheme?: Theme;
}) => {
    // Initialize theme from localStorage or use default
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window !== 'undefined') {
            try {
                const savedTheme = localStorage.getItem('theme') as Theme | null;
                return savedTheme || defaultTheme;
            } catch {
                return defaultTheme;
            }
        }
        return defaultTheme;
    });

    useEffect(() => {
        const root = window.document.documentElement;
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';

        if (theme === 'system') {
            root.classList.remove('light', 'dark');
            systemTheme === 'dark'
                ? root.classList.add('dark')
                : root.classList.remove('dark');
        } else {
            root.classList.remove('light', 'dark');
            root.classList.add(theme);
        }
    }, [theme]);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleSystemThemeChange = (e: MediaQueryListEvent) => {
            if (theme === 'system') {
                document.documentElement.classList.toggle('dark', e.matches);
            }
        };

        mediaQuery.addEventListener('change', handleSystemThemeChange);
        return () =>
            mediaQuery.removeEventListener('change', handleSystemThemeChange);
    }, [theme]);

    // Persist theme to localStorage when it changes
    useEffect(() => {
        if (typeof window !== 'undefined') {
            try {
                if (theme === 'system') {
                    localStorage.removeItem('theme');
                } else {
                    localStorage.setItem('theme', theme);
                }
            } catch (error) {
                console.error('Error saving theme to localStorage:', error);
            }
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export default ThemeProvider;