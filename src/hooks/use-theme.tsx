
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useToast } from '@/components/ui/use-toast';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  isThemeLoaded: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Set mounted to true after the first render
    setMounted(true);
    
    // Check for system preference or saved preference
    const savedTheme = localStorage.getItem('woldreamz-theme') as Theme;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    
    // Apply theme class to document
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
    
    // Add transition class after a short delay to prevent transition on page load
    setTimeout(() => {
      document.documentElement.classList.add('theme-transition');
      setIsThemeLoaded(true);
    }, 100);
    
    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('woldreamz-theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('woldreamz-theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    
    toast({
      title: `${newTheme === 'dark' ? '🌙' : '☀️'} ${newTheme.charAt(0).toUpperCase() + newTheme.slice(1)} mode activated`,
      description: `Interface switched to ${newTheme} theme`,
      duration: 2000,
    });
  };
  
  const toggleTheme = () => {
    handleThemeChange(theme === 'dark' ? 'light' : 'dark');
  };
  
  // Prevent flash of incorrect theme
  if (!mounted) {
    return null;
  }
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleThemeChange, toggleTheme, isThemeLoaded }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
