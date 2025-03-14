import React from 'react';
import { Metadata } from 'next';
import ChatComponent from '../../../components/Dashboard/ChatComponent';

export const metadata: Metadata = {
  title: 'Doclink Chat',
  description: 'Chat with your documents',
};

export default function ChatPage() {
  return (
    <div className="h-full flex flex-col">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Document Chat</h1>
        <p className="text-gray-400">Ask questions about your documents</p>
      </div>
      
      <div className="flex-1 flex">
        <ChatComponent />
      </div>
    </div>
  );
} 