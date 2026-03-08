import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, Search, Thermometer, Snowflake, Flame, Zap, X } from 'lucide-react';
import { useStore } from '../../../entities/chat/model/store';
import type { TemperatureMode } from '../../../shared/types';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const { t } = useTranslation();
  const [input, setInput] = useState('');
  const [showTempMenu, setShowTempMenu] = useState(false);
  const { useSearch, setUseSearch, temperatureMode, setTemperatureMode } = useStore();

  // Close temperature menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (showTempMenu) {
        setShowTempMenu(false);
      }
    };

    if (showTempMenu) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showTempMenu]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSend(input.trim());
      setInput('');
    }
  };

  const modes: { mode: TemperatureMode; icon: any; label: string; color: string }[] = [
    { mode: 'precise', icon: Snowflake, label: t('precise'), color: 'from-light-accent to-light-accent-secondary dark:from-dark-accent dark:to-dark-accent-secondary' },
    { mode: 'balanced', icon: Thermometer, label: t('balanced'), color: 'from-light-accent-secondary to-light-accent dark:from-dark-accent-secondary dark:to-dark-accent-tertiary' },
    { mode: 'creative', icon: Zap, label: t('creative'), color: 'from-light-accent to-light-accent-secondary dark:from-dark-accent-tertiary dark:to-dark-accent' },
    { mode: 'extreme', icon: Flame, label: t('extreme'), color: 'from-light-accent-secondary to-light-accent dark:from-dark-accent dark:to-dark-accent-secondary' },
  ];

  const currentMode = modes.find(m => m.mode === temperatureMode);
  const CurrentIcon = currentMode?.icon || Thermometer;

  return (
    <form onSubmit={handleSubmit} className="relative z-[99999999999] flex-shrink-0">
      <div className="w-full mx-auto px-3 sm:px-4 -py-5 sm:py-3 flex justify-center">
        <div className="relative group w-full max-w-4xl">
          {/* Gradient glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-light-accent via-light-accent-secondary to-light-accent dark:from-dark-accent dark:via-dark-accent-secondary dark:to-dark-accent-tertiary rounded-2xl blur opacity-50 sm:opacity-25 group-hover:opacity-60 sm:group-hover:opacity-50 transition-opacity animate-gradient" />
          
          {/* Main input container */}
          <div className="relative flex items-center gap-2 bg-white/95 dark:bg-dark-surface/95 backdrop-blur-sm border-2 border-light-accent/40 dark:border-dark-accent/40 sm:border-gray-200 sm:dark:border-gray-700 rounded-2xl focus-within:border-light-accent dark:focus-within:border-dark-accent transition-all shadow-2xl sm:shadow-lg">
            {/* Search indicator (left side) */}
            {useSearch && (
              <div className="flex items-center gap-1.5 sm:gap-2 pl-3 sm:pl-4 pr-2 sm:pr-3 border-r border-gray-200 dark:border-gray-700">
                <Search className="w-4 h-4 sm:w-4 sm:h-4 text-light-accent dark:text-dark-accent flex-shrink-0" />
                <span className="hidden sm:inline text-xs sm:text-sm font-semibold text-light-accent dark:text-dark-accent whitespace-nowrap">
                  {t('search')}
                </span>
              </div>
            )}

            {/* Input field */}
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t('placeholder')}
              disabled={disabled}
              className={`flex-1 py-3 sm:py-3.5 bg-transparent focus:outline-none disabled:opacity-50 transition-all text-base sm:text-base placeholder:text-light-text-secondary/80 dark:placeholder:text-dark-text-secondary/80 rounded-2xl ${
                useSearch ? 'px-2 sm:px-3' : 'px-3 sm:px-4'
              }`}
            />

            {/* Right controls */}
            <div className="flex items-center gap-1 sm:gap-1 pr-1.5 sm:pr-2 flex-shrink-0">
              {/* Search toggle */}
              <button
                type="button"
                onClick={() => setUseSearch(!useSearch)}
                className={`p-2 sm:p-2 rounded-lg transition-all duration-300 flex-shrink-0 ${
                  useSearch
                    ? 'bg-gradient-to-r from-light-accent to-light-accent-secondary dark:from-dark-accent dark:to-dark-accent-secondary text-white shadow-md'
                    : 'hover:bg-light-surface dark:hover:bg-dark-bg text-light-text-secondary dark:text-dark-text-secondary'
                }`}
                title={t('search')}
              >
                <Search className="w-5 h-5 sm:w-4 sm:h-4" />
              </button>

              {/* Temperature menu */}
              <div className="relative flex-shrink-0 z-[9999999999]">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowTempMenu(!showTempMenu);
                  }}
                  className={`p-2 sm:p-2 rounded-lg transition-all ${
                    showTempMenu
                      ? 'bg-light-surface dark:bg-dark-bg'
                      : 'hover:bg-light-surface dark:hover:bg-dark-bg'
                  } text-light-text-secondary dark:text-dark-text-secondary`}
                  title={currentMode?.label}
                >
                  <CurrentIcon className="w-5 h-5 sm:w-4 sm:h-4" />
                </button>

                {/* Temperature dropdown */}
                {showTempMenu && (
                  <div 
                    className="fixed bottom-[65px] right-3 sm:absolute sm:bottom-full sm:right-0 mb-0 sm:mb-3 w-48 sm:w-56 bg-white dark:bg-dark-surface rounded-lg sm:rounded-xl shadow-2xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden animate-fade-in"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="p-1.5 sm:p-2">
                      <div className="flex items-center justify-between px-2 sm:px-3 py-1.5 sm:py-2 mb-1.5 sm:mb-2">
                        <span className="text-[10px] sm:text-xs font-semibold text-light-text-secondary dark:text-dark-text-secondary uppercase">
                          {t('temperature')}
                        </span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowTempMenu(false);
                          }}
                          className="p-0.5 sm:p-1 hover:bg-light-surface dark:hover:bg-dark-bg rounded"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                      {modes.map(({ mode, icon: Icon, label, color }) => (
                        <button
                          key={mode}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setTemperatureMode(mode);
                            setShowTempMenu(false);
                          }}
                          className={`relative w-full flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
                            temperatureMode === mode
                              ? 'text-white scale-[0.98]'
                              : 'hover:bg-light-surface dark:hover:bg-dark-bg'
                          }`}
                        >
                          {temperatureMode === mode && (
                            <>
                              <div className={`absolute inset-0 bg-gradient-to-r ${color} rounded-lg`} />
                              <div className={`absolute inset-0 bg-gradient-to-r ${color} rounded-lg blur opacity-50`} />
                            </>
                          )}
                          <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 relative z-10" />
                          <span className="relative z-10">{label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Send button */}
              <button
                type="submit"
                disabled={disabled || !input.trim()}
                className="group relative px-3.5 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-light-accent via-light-accent-secondary to-light-accent dark:from-dark-accent dark:via-dark-accent-secondary dark:to-dark-accent-tertiary text-white font-semibold hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 transition-all duration-300 shadow-lg hover:shadow-2xl animate-gradient flex-shrink-0"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-light-accent via-light-accent-secondary to-light-accent dark:from-dark-accent dark:via-dark-accent-secondary dark:to-dark-accent-tertiary rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity" />
                <Send className="w-5 h-5 sm:w-4 sm:h-4 relative z-10" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
