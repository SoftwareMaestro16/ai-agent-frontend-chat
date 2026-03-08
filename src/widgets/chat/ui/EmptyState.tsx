import { useTranslation } from 'react-i18next';
import { Calculator, MessageCircle, Search, Sparkles, Zap, Brain } from 'lucide-react';
import { useHealth } from '../../../features/chat/api/useHealth';

export function EmptyState() {
  const { t } = useTranslation();
  const { data: health } = useHealth();

  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-3 sm:px-4 relative overflow-hidden pt-16 sm:pt-20 pb-32 sm:pb-8">
      {/* Animated background rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-light-accent/20 via-light-accent-secondary/20 to-transparent dark:from-dark-accent/20 dark:via-dark-accent-secondary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-l from-light-accent-secondary/20 via-light-accent/20 to-transparent dark:from-dark-accent-tertiary/20 dark:via-dark-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 mb-6 sm:mb-12 animate-float">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-light-accent via-light-accent-secondary to-light-accent dark:from-dark-accent dark:via-dark-accent-secondary dark:to-dark-accent-tertiary blur-2xl opacity-50 animate-gradient" />
          <h1 className="relative text-5xl sm:text-5xl md:text-7xl font-black mb-3 sm:mb-4 bg-gradient-to-r from-light-accent via-light-accent-secondary to-light-accent dark:from-dark-accent dark:via-dark-accent-secondary dark:to-dark-accent-tertiary bg-clip-text text-transparent animate-gradient">
            {t('appName')}
          </h1>
        </div>
        
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-light-accent dark:text-dark-accent animate-pulse" />
          <p className="text-base sm:text-xl font-medium text-light-text-secondary dark:text-dark-text-secondary">
            {t('tagline')}
          </p>
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-light-accent-secondary dark:text-dark-accent-secondary animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>

        {/* Model Status */}
        {health && health.status === 'healthy' && (
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 dark:from-green-400/10 dark:to-emerald-400/10 border border-green-500/20 dark:border-green-400/20 backdrop-blur-sm">
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-green-500 dark:bg-green-400 animate-pulse" />
              <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 dark:bg-green-400 animate-ping" />
            </div>
            <span className="text-sm font-semibold text-green-700 dark:text-green-300">
              {t('modelActive')}
            </span>
            <Zap className="w-4 h-4 text-green-600 dark:text-green-400" />
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-3xl w-full px-2 sm:px-4 relative z-0 mb-5 sm:mb-8">
        {/* Mathematics Card */}
        <div className="group relative p-5 sm:p-8 rounded-lg sm:rounded-2xl bg-gradient-to-br from-cyan-50 via-white to-cyan-50 dark:from-cyan-950/30 dark:via-dark-surface dark:to-cyan-900/20 border-2 border-cyan-200/50 dark:border-cyan-500/30 hover:border-cyan-400 dark:hover:border-cyan-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 overflow-hidden backdrop-blur-sm cursor-pointer min-h-[110px] sm:min-h-0">
          {/* Animated background particles */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0s' }} />
            <div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-ping" style={{ animationDelay: '0.3s' }} />
            <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-cyan-500 rounded-full animate-ping" style={{ animationDelay: '0.6s' }} />
          </div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-cyan-400/20 to-blue-500/30 dark:from-cyan-400/0 dark:via-cyan-400/10 dark:to-blue-400/20 rounded-lg sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient" />
          
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 dark:via-cyan-300/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
          
          <div className="relative text-center z-10">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-4 rounded-lg sm:rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 dark:from-cyan-500 dark:to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/50 group-hover:shadow-2xl group-hover:shadow-cyan-500/60 transition-all animate-gradient group-hover:scale-110 group-hover:rotate-3">
              <Calculator className="w-6 h-6 sm:w-8 sm:h-8 text-white drop-shadow-lg" />
            </div>
            <h3 className="font-bold text-[10px] sm:text-lg mb-0.5 sm:mb-2 leading-tight text-cyan-900 dark:text-cyan-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
              {t('mathTitle')}
            </h3>
            <p className="text-[9px] sm:text-sm text-cyan-700 dark:text-cyan-400 leading-tight sm:leading-snug hidden sm:block">
              {t('mathDesc')}
            </p>
          </div>
        </div>

        {/* Conversation Card */}
        <div className="group relative p-5 sm:p-8 rounded-lg sm:rounded-2xl bg-gradient-to-br from-pink-50 via-white to-rose-50 dark:from-pink-950/30 dark:via-dark-surface dark:to-rose-900/20 border-2 border-pink-200/50 dark:border-pink-500/30 hover:border-pink-400 dark:hover:border-pink-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20 overflow-hidden backdrop-blur-sm cursor-pointer min-h-[110px] sm:min-h-0">
          {/* Animated background particles */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-1/4 right-0 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '0.2s' }} />
            <div className="absolute bottom-0 left-1/4 w-1.5 h-1.5 bg-rose-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
            <div className="absolute top-1/2 left-0 w-1 h-1 bg-pink-300 rounded-full animate-ping" style={{ animationDelay: '0.8s' }} />
          </div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-400/0 via-pink-400/20 to-rose-500/30 dark:from-pink-400/0 dark:via-pink-400/10 dark:to-rose-400/20 rounded-lg sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient" />
          
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 dark:via-pink-300/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
          
          <div className="relative text-center z-10">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-4 rounded-lg sm:rounded-2xl bg-gradient-to-br from-pink-400 to-rose-500 dark:from-pink-500 dark:to-rose-600 flex items-center justify-center shadow-lg shadow-pink-500/50 group-hover:shadow-2xl group-hover:shadow-pink-500/60 transition-all animate-gradient group-hover:scale-110 group-hover:rotate-3">
              <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white drop-shadow-lg" />
            </div>
            <h3 className="font-bold text-[10px] sm:text-lg mb-0.5 sm:mb-2 leading-tight text-pink-900 dark:text-pink-100 group-hover:text-pink-600 dark:group-hover:text-pink-300 transition-colors">
              {t('chatTitle')}
            </h3>
            <p className="text-[9px] sm:text-sm text-pink-700 dark:text-pink-400 leading-tight sm:leading-snug hidden sm:block">
              {t('chatDesc')}
            </p>
          </div>
        </div>

        {/* Web Search Card */}
        <div className="group relative p-5 sm:p-8 rounded-lg sm:rounded-2xl bg-gradient-to-br from-emerald-50 via-white to-lime-50 dark:from-emerald-950/30 dark:via-dark-surface dark:to-lime-900/20 border-2 border-emerald-200/50 dark:border-emerald-500/30 hover:border-emerald-400 dark:hover:border-emerald-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20 overflow-hidden backdrop-blur-sm cursor-pointer min-h-[110px] sm:min-h-0">
          {/* Animated background particles */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute bottom-1/4 left-0 w-2 h-2 bg-emerald-400 rounded-full animate-ping" style={{ animationDelay: '0.1s' }} />
            <div className="absolute top-0 right-1/3 w-1.5 h-1.5 bg-lime-400 rounded-full animate-ping" style={{ animationDelay: '0.4s' }} />
            <div className="absolute bottom-0 right-0 w-1 h-1 bg-emerald-300 rounded-full animate-ping" style={{ animationDelay: '0.7s' }} />
          </div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 via-emerald-400/20 to-lime-500/30 dark:from-emerald-400/0 dark:via-emerald-400/10 dark:to-lime-400/20 rounded-lg sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient" />
          
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 dark:via-emerald-300/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
          
          <div className="relative text-center z-10">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-4 rounded-lg sm:rounded-2xl bg-gradient-to-br from-emerald-400 to-lime-500 dark:from-emerald-500 dark:to-lime-600 flex items-center justify-center shadow-lg shadow-emerald-500/50 group-hover:shadow-2xl group-hover:shadow-emerald-500/60 transition-all animate-gradient group-hover:scale-110 group-hover:rotate-3">
              <Search className="w-6 h-6 sm:w-8 sm:h-8 text-white drop-shadow-lg" />
            </div>
            <h3 className="font-bold text-[10px] sm:text-lg mb-0.5 sm:mb-2 leading-tight text-emerald-900 dark:text-emerald-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
              {t('searchTitle')}
            </h3>
            <p className="text-[9px] sm:text-sm text-emerald-700 dark:text-emerald-400 leading-tight sm:leading-snug hidden sm:block">
              {t('searchDesc')}
            </p>
          </div>
        </div>
      </div>

      {/* Additional features */}
      <div className="flex z-[0] flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-light-text-secondary dark:text-dark-text-secondary relative z-10">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Brain className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>{t('aiPowered')}</span>
        </div>
        <div className="w-1 h-1 rounded-full bg-current" />
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>{t('instantResponse')}</span>
        </div>
        <div className="w-1 h-1 rounded-full bg-current hidden sm:block" />
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>{t('multiLanguage')}</span>
        </div>
      </div>
    </div>
  );
}
