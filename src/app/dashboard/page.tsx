import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Doclink Dashboard',
  description: 'Manage your documents and chat with them',
};

export default function DashboardPage() {
  return (
    <div className="h-full flex flex-col">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Welcome to Doclink</h1>
        <p className="text-gray-400 mt-2">
          Upload your documents and start asking questions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <h2 className="text-xl font-semibold mb-2">Getting Started</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li>Create a folder for your documents</li>
            <li>Upload your documents to the folder</li>
            <li>Select the folder to start a chat</li>
            <li>Ask questions about your documents</li>
          </ol>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
          <p className="text-gray-400">No recent activity to display</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <h2 className="text-xl font-semibold mb-2">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full text-left px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
              New Folder
            </button>
            <button className="w-full text-left px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
              Upload Document
            </button>
            <button className="w-full text-left px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
              Start New Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 