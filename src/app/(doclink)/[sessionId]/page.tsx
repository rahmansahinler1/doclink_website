'use client';

import { useState } from 'react';

interface Message {
  type: 'user' | 'assistant';
  content: string;
}

export default function DocLinkApp({
  params,
}: {
  params: { sessionId: string };
}) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      type: 'user',
      content: inputValue,
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // TODO: Send to API and get response
    // This will be implemented when we connect to the FastAPI backend
  };

  return (
    <div className="flex flex-col h-full">
      {/* Chat Messages */}
      <div className="flex-1 overflow-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.type === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.type === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-white'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        {messages.length === 0 && (
          <div className="text-center text-gray-400">
            Select files and start asking questions
          </div>
        )}
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask a question about your documents..."
            className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Ask
          </button>
        </div>
      </form>
    </div>
  );
} 