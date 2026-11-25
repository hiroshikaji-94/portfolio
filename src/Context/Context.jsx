import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';

const AppContext = createContext();

// Only an explicit choice from the theme toggle is stored. Without one, the
// site follows the operating system's light/dark setting.
const THEME_KEY = 'theme-preference';

const darkSchemeQuery = () =>
  window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

const readSavedTheme = () => {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    return saved === 'light' || saved === 'dark' ? saved : null;
  } catch {
    return null;
  }
};

export const AppProvider = ({ children }) => {
  const { t } = useTranslation();
  const [theme, setTheme] = useState(
    () => readSavedTheme() ?? (darkSchemeQuery()?.matches ? 'dark' : 'light')
  );

  // Follow OS theme changes until the visitor picks a theme themselves.
  useEffect(() => {
    const query = darkSchemeQuery();
    if (!query) return undefined;
    const handleChange = event => {
      if (!readSavedTheme()) setTheme(event.matches ? 'dark' : 'light');
    };
    query.addEventListener('change', handleChange);
    return () => query.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(previous => {
      const next = previous === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch {
        // Storage can be unavailable (private mode); the toggle still works.
      }
      return next;
    });
  }, []);

  // Changes the document title based on the language selected
  useEffect(() => {
    document.title = t('app-title');
  }, [t]);

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
