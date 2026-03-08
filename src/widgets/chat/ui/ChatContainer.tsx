import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Trash2 } from 'lucide-react';
import { useStore } from '../../../entities/chat/model/store';
import { useChat } from '../../../features/chat/api/useChat';
import { ChatMessage } from '../../../entities/chat/ui/ChatMessage';
import { ChatInput } from '../../../features/chat/ui/ChatInput';
import { EmptyState } from './EmptyState';

export function ChatContainer() {
  const { t } = useTranslation();
  const { messages, clearMessages } = useStore();
  const { mutate: sendMessage, isPending } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const isEmpty = messages.length === 0;

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden">
      {/* Background pattern for chat */}
      {!isEmpty && (
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Top circles */}
          <div className="absolute -top-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-light-accent/8 via-light-accent-secondary/8 to-transparent dark:from-dark-accent/8 dark:via-dark-accent-secondary/8 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute top-1/4 -right-20 w-[450px] h-[450px] bg-gradient-to-bl from-light-accent-secondary/8 via-light-accent/8 to-transparent dark:from-dark-accent-tertiary/8 dark:via-dark-accent/8 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
          
          {/* Middle circles */}
          <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-gradient-to-tr from-light-accent/6 to-transparent dark:from-dark-accent-secondary/6 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
          
          {/* Bottom circles */}
          <div className="absolute -bottom-20 right-1/4 w-[480px] h-[480px] bg-gradient-to-tl from-light-accent-secondary/8 via-light-accent/8 to-transparent dark:from-dark-accent-tertiary/8 dark:via-dark-accent/8 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
          <div className="absolute bottom-1/3 -left-20 w-[420px] h-[420px] bg-gradient-to-tr from-light-accent/7 to-transparent dark:from-dark-accent/7 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
        </div>
      )}
      
      <div className="flex-1 overflow-y-auto relative z-10">
        {isEmpty ? (
          <EmptyState />
        ) : (
          <div className="max-w-6xl mx-auto px-3 sm:px-4 pt-24 sm:pt-24 pb-0 sm:pb-6 space-y-4 sm:space-y-6">
            <button
              onClick={clearMessages}
              className="group relative flex items-center gap-2 px-4 sm:px-4 py-2.5 sm:py-2 rounded-xl sm:rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30 hover:from-red-100 hover:to-rose-100 dark:hover:from-red-950/50 dark:hover:to-rose-950/50 border-2 border-red-200/50 dark:border-red-800/50 hover:border-red-400 dark:hover:border-red-600 transition-all hover:scale-105 shadow-md hover:shadow-lg hover:shadow-red-500/20 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-400/0 via-red-400/10 to-rose-400/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <Trash2 className="w-4 h-4 sm:w-4 sm:h-4 text-red-600 dark:text-red-400 group-hover:text-red-700 dark:group-hover:text-red-300 transition-colors relative z-10 group-hover:scale-110" />
              <span className="text-red-700 dark:text-red-300 group-hover:text-red-800 dark:group-hover:text-red-200 transition-colors relative z-10">{t('clear')}</span>
            </button>
            
            {messages.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
            
            {isPending && (
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-gradient-to-br from-light-accent to-light-accent-secondary dark:from-dark-accent dark:to-dark-accent-secondary flex items-center justify-center shadow-lg">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                </div>
                <div className="flex-1">
                  <div className="inline-block px-6 py-4 rounded-2xl bg-light-surface dark:bg-dark-surface">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-light-accent dark:bg-dark-accent animate-bounce" />
                      <div className="w-2 h-2 rounded-full bg-light-accent-secondary dark:bg-dark-accent-secondary animate-bounce" style={{ animationDelay: '0.2s' }} />
                      <div className="w-2 h-2 rounded-full bg-light-accent dark:bg-dark-accent-tertiary animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      <ChatInput onSend={sendMessage} disabled={isPending} />
    </div>
  );
}
