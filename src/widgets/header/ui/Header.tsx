import { Moon, Sun, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useStore } from '../../../entities/chat/model/store';
import type { Language } from '../../../shared/types';

const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'ro', name: 'Română', flag: '🇷🇴' },
];

export function Header() {
  const { t, i18n } = useTranslation();
  const { theme, setTheme, setLanguage } = useStore();

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <header className="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-2 sm:py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-light-accent to-light-accent-secondary dark:from-dark-accent dark:to-dark-accent-secondary flex items-center justify-center shadow-lg animate-gradient">
            <span className="text-xl sm:text-2xl font-black text-white">N</span>
          </div>
          <div>
            <h1 className="text-base sm:text-xl font-bold bg-gradient-to-r from-light-accent to-light-accent-secondary dark:from-dark-accent dark:via-dark-accent-secondary dark:to-dark-accent-tertiary bg-clip-text text-transparent">
              {t('appName')}
            </h1>
            <p className="text-[10px] sm:text-xs text-light-text-secondary dark:text-dark-text-secondary hidden sm:block">
              {t('tagline')}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="relative group">
            <button className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl hover:bg-light-surface dark:hover:bg-dark-surface transition-all hover:scale-110 border border-transparent hover:border-gray-200 dark:hover:border-gray-700">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <div className="absolute right-0 mt-2 w-48 sm:w-56 bg-white dark:bg-dark-surface rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 overflow-hidden max-h-[70vh] overflow-y-auto">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-left hover:bg-light-surface dark:hover:bg-dark-bg transition-colors flex items-center gap-2 sm:gap-3 group/item text-sm sm:text-base"
                >
                  <span className="text-lg sm:text-xl">{lang.flag}</span>
                  <span className="group-hover/item:translate-x-1 transition-transform">{lang.name}</span>
                </button>
              ))}
            </div>
          </div>
          
          <button
            onClick={toggleTheme}
            className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl hover:bg-light-surface dark:hover:bg-dark-surface transition-all hover:scale-110 border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4 sm:w-5 sm:h-5" />
            ) : (
              <Sun className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
