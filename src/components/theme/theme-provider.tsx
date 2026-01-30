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
    // Always start with defaultTheme so server and first client render match (avoids hydration mismatch).
    // ThemeScript in <head> already sets document.documentElement class before React, so the page looks correct.
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    // After mount, sync state from localStorage so ThemeToggle shows the correct active button (avoids hydration mismatch).
    useEffect(() => {
        try {
            const savedTheme = localStorage.getItem('theme') as Theme | null;
            if (savedTheme) setTheme(savedTheme);
        } catch {
            // ignore
        }
    }, []);

    // Apply theme to DOM whenever theme changes.
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