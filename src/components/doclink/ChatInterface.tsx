'use client';

import { useState } from 'react';
import { PaperAirplaneIcon, MicrophoneIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import MessageList from './MessageList';
import ReferencePanel from './ReferencePanel';
import { Message, Reference } from './types';

interface ChatInterfaceProps {
  sessionId: string;
}

export default function ChatInterface({ sessionId }: ChatInterfaceProps) {
  const [inputValue, setInputValue] = useState('');
  const [hasSelectedDomain, setHasSelectedDomain] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [references, setReferences] = useState<Reference[]>([]);
  const [isReferencePanelOpen, setIsReferencePanelOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would be implemented with actual functionality later
    console.log('Submitting:', inputValue);
    setInputValue('');
  };

  // Adjust textarea height based on content
  const adjustTextareaHeight = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
  };

  const toggleReferencePanel = () => {
    setIsReferencePanelOpen(!isReferencePanelOpen);
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900 relative">
      {/* Chat Messages Area */}
      <div className="flex-1 overflow-y-auto p-4">
        {!hasSelectedDomain ? (
          <div className="h-full flex flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold mb-6 text-gray-900 dark:text-white">
              Select your source, and let's get started!
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Choose a folder from the sidebar to begin your document inquiry.
            </p>
          </div>
        ) : (
          <MessageList messages={messages} />
        )}
      </div>

      {/* Reference Panel (when open) */}
      <ReferencePanel 
        references={references} 
        isOpen={isReferencePanelOpen} 
        onClose={() => setIsReferencePanelOpen(false)} 
      />

      {/* Input Area */}
      <div className="border-t border-gray-200 dark:border-gray-700 p-4">
        <div className="max-w-3xl mx-auto flex justify-between items-center mb-2">
          {/* Reference Panel Toggle Button (only shown when domain is selected) */}
          {hasSelectedDomain && (
            <button
              onClick={toggleReferencePanel}
              className="flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <BookOpenIcon className="h-4 w-4" />
              <span>References</span>
            </button>
          )}
        </div>
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="relative">
            <div className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-sm">
              <textarea
                value={inputValue}
                onChange={(e) => {
                  handleInputChange(e);
                  adjustTextareaHeight(e);
                }}
                placeholder="Message Doclink..."
                className="w-full resize-none py-3 px-4 outline-none bg-transparent text-gray-900 dark:text-white"
                style={{ maxHeight: '200px', minHeight: '24px', height: '24px' }}
                rows={1}
                disabled={!hasSelectedDomain}
              />
              <div className="flex items-center justify-between px-3 py-2 border-t border-gray-200 dark:border-gray-700">
                <button
                  type="button"
                  className="p-1 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <MicrophoneIcon className="h-5 w-5" />
                </button>
                <button
                  type="submit"
                  disabled={!inputValue.trim() || !hasSelectedDomain}
                  className={`p-1 rounded-md ${
                    !inputValue.trim() || !hasSelectedDomain
                      ? 'text-gray-400 dark:text-gray-600'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <PaperAirplaneIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </form>
          <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">
            Doclink can make mistakes. Verify important information.
          </p>
        </div>
      </div>
    </div>
  );
} 