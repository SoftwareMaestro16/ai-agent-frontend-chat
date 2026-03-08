import { useTranslation } from 'react-i18next';
import { useHealth } from '../../../features/chat/api/useHealth';
import { Shield } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();
  const { data: health } = useHealth();

  return (
    <footer className=" border-t border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-xl flex-shrink-0">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-2 sm:py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-light-text-secondary dark:text-dark-text-secondary text-center md:text-left">
            <Shield className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <p className="leading-tight">{t('disclaimer')}</p>
          </div>
          
          {health && (
            <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-light-surface dark:bg-dark-surface border border-gray-200 dark:border-gray-700">
              <span className="text-light-text-secondary dark:text-dark-text-secondary text-xs sm:text-sm truncate max-w-[120px] sm:max-w-none">
                {health.model}
              </span>
              <div className={`flex items-center gap-1.5 sm:gap-2 ${
                health.status === 'healthy' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
              }`}>
                <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                  health.status === 'healthy' ? 'bg-green-600 dark:bg-green-400 animate-pulse' : 'bg-red-600 dark:bg-red-400'
                }`} />
                <span className="font-medium text-xs sm:text-sm">
                  {health.status === 'healthy' ? t('active') : t('inactive')}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
