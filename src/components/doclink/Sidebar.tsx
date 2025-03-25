'use client';

import { useState } from 'react';
import { FolderIcon, PlusIcon, UserIcon } from '@heroicons/react/24/outline';

interface SidebarProps {
  onToggle?: () => void;
}

export default function Sidebar({ onToggle }: SidebarProps) {
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  
  // Example folders - this would come from your API in production
  const folders = [
    { id: '1', name: 'Work Documents' },
    { id: '2', name: 'Personal Files' },
    { id: '3', name: 'Research Papers' },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* New Folder Button */}
      <div className="p-3 border-b border-gray-200 dark:border-gray-700">
        <button className="flex items-center justify-center w-full py-2 px-3 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm">
          <PlusIcon className="h-4 w-4 mr-2" />
          New Folder
        </button>
      </div>

      {/* Folders List */}
      <nav className="flex-1 overflow-y-auto p-2">
        <ul className="space-y-1">
          {folders.map((folder) => (
            <li key={folder.id}>
              <button 
                className={`w-full flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                  selectedDomain === folder.id 
                    ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white' 
                    : 'text-gray-700 dark:text-gray-300'
                }`}
                onClick={() => setSelectedDomain(folder.id)}
              >
                <FolderIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className="truncate">{folder.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Profile */}
      <div className="p-3 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
          <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
            <UserIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
              User Account
            </p>
          </div>
        </div>
        <button className="mt-2 flex items-center justify-center w-full py-2 px-3 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm">
          Upgrade to Plus
        </button>
      </div>
    </div>
  );
} 