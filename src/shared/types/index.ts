export interface Message {
  role: "user" | "assistant";
  content: string;
}

export interface ChatRequest {
  message: string;
  history?: Message[];
  use_search?: boolean;
  temperature?: number;
}

export interface ChatResponse {
  response: string;
  tool_used: string | null;
  tool_result: string | null;
  search_used: boolean;
}

export interface HealthResponse {
  status: string;
  model: string;
}

export type Theme = 'light' | 'dark';
export type Language = 'en' | 'ru' | 'fr' | 'ar' | 'zh' | 'ja' | 'ko' | 'es' | 'it' | 'ro';
export type TemperatureMode = 'precise' | 'balanced' | 'creative' | 'extreme';
