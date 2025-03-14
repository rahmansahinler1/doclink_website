'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { 
  MagnifyingGlassIcon,
  BellIcon, 
  QuestionMarkCircleIcon 
} from '@heroicons/react/24/outline';

export default function DashboardHeader() {
  const pathname = usePathname();

  // Determine the title based on the path
  const getTitle = () => {
    if (pathname === '/dashboard') return 'Dashboard';
    if (pathname === '/dashboard/folders') return 'Folders';
    if (pathname === '/dashboard/chat') return 'Chat';
    if (pathname === '/dashboard/documents') return 'Documents';
    if (pathname === '/dashboard/settings') return 'Settings';
    
    // Default or fallback
    return 'Doclink';
  };

  return (
    <header className="bg-gray-800 border-b border-gray-700 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">{getTitle()}</h1>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-700 text-white px-4 py-2 pl-10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
          
          <button className="text-gray-400 hover:text-white">
            <BellIcon className="w-6 h-6" />
          </button>
          
          <button className="text-gray-400 hover:text-white">
            <QuestionMarkCircleIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
} 