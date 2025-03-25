export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export interface Reference {
  id: string;
  title: string;
  content: string;
  source: string;
  pageNumber?: number;
} 