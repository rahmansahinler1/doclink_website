'use client';

import React, { useState } from 'react';

// We'll create placeholder components until we implement the real ones
const DashboardHome = () => (
  <div>
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

const FoldersSection = () => (
  <div>
    <h1 className="text-3xl font-bold mb-6">Folders</h1>
    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
      <p className="text-gray-400">Your folders will appear here</p>
    </div>
  </div>
);

const ChatSection = () => (
  <div>
    <h1 className="text-3xl font-bold mb-6">Chat</h1>
    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
      <p className="text-gray-400">Your chat interface will appear here</p>
    </div>
  </div>
);

const DocumentsSection = () => (
  <div>
    <h1 className="text-3xl font-bold mb-6">Documents</h1>
    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
      <p className="text-gray-400">Your documents will appear here</p>
    </div>
  </div>
);

const SettingsSection = () => (
  <div>
    <h1 className="text-3xl font-bold mb-6">Settings</h1>
    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
      <p className="text-gray-400">Your settings will appear here</p>
    </div>
  </div>
);

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState('dashboard');

  // Function to be passed to Sidebar to update active section
  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  // Render the appropriate section based on active state
  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardHome />;
      case 'folders':
        return <FoldersSection />;
      case 'chat':
        return <ChatSection />;
      case 'documents':
        return <DocumentsSection />;
      case 'settings':
        return <SettingsSection />;
      default:
        return <DashboardHome />;
    }
  };

  // Export the section handler for the sidebar component
  (window as any).handleSectionChange = handleSectionChange;

  return (
    <div className="h-full flex flex-col">
      {renderSection()}
    </div>
  );
} 