import { useQuery } from '@tanstack/react-query';
import { checkHealth } from '../../../shared/api/client';

export function useHealth() {
  return useQuery({
    queryKey: ['health'],
    queryFn: checkHealth,
    refetchInterval: 30000,
    retry: 2,
  });
}
