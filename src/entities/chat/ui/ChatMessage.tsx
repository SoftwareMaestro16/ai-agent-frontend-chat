import { User, Bot } from 'lucide-react';
import type { Message } from '../../../shared/types';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex gap-3 sm:gap-4 ${isUser ? 'flex-row-reverse' : ''} animate-fade-in`}>
      <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center shadow-lg ${
        isUser 
          ? 'bg-gradient-to-br from-light-accent to-light-accent-secondary dark:from-dark-accent dark:to-dark-accent-secondary animate-gradient' 
          : 'bg-gradient-to-br from-light-surface to-gray-100 dark:from-dark-surface dark:to-gray-800 border border-gray-200 dark:border-gray-700'
      }`}>
        {isUser ? (
          <User className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        ) : (
          <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-light-accent dark:text-dark-accent" />
        )}
      </div>
      
      <div className={`flex-1 ${isUser ? 'text-right' : ''}`}>
        <div className={`inline-block max-w-[90%] sm:max-w-[85%] px-4 sm:px-6 py-3 sm:py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all ${
          isUser
            ? 'bg-gradient-to-br from-light-accent to-light-accent-secondary dark:from-dark-accent dark:to-dark-accent-secondary text-white animate-gradient'
            : 'bg-gradient-to-br from-light-surface to-white dark:from-dark-surface dark:to-dark-bg border border-gray-200 dark:border-gray-700'
        }`}>
          <p className="whitespace-pre-wrap break-words leading-relaxed text-sm sm:text-base">{message.content}</p>
        </div>
      </div>
    </div>
  );
}
