import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { useStore } from '../entities/chat/model/store';
import { Header } from '../widgets/header/ui/Header';
import { ChatContainer } from '../widgets/chat/ui/ChatContainer';
import { Footer } from '../widgets/footer/ui/Footer';

const queryClient = new QueryClient();

function AppContent() {
  const { theme, language } = useStore();
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    i18n.changeLanguage(language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language, i18n]);

  return (
    <div className="h-screen flex flex-col bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
      <Header />
      <ChatContainer />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}
