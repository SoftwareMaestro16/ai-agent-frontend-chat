import { useMutation } from '@tanstack/react-query';
import { sendMessage } from '../../../shared/api/client';
import { useStore, getTemperature } from '../../../entities/chat/model/store';
import type { ChatRequest } from '../../../shared/types';

export function useChat() {
  const { messages, temperatureMode, useSearch, addMessage } = useStore();

  const mutation = useMutation({
    mutationFn: async (userMessage: string) => {
      const request: ChatRequest = {
        message: userMessage,
        history: messages,
        use_search: useSearch,
        temperature: getTemperature(temperatureMode),
      };

      addMessage({ role: 'user', content: userMessage });
      const response = await sendMessage(request);
      addMessage({ role: 'assistant', content: response.response });
      
      return response;
    },
  });

  return mutation;
}
