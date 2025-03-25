'use client';

import { useState, useEffect } from 'react';
import { getSession, handleLogout } from '@/utils/auth';
import { useRouter } from 'next/navigation';
import { Bars3Icon, PlusIcon } from '@heroicons/react/24/outline';

interface HeaderProps {
  toggleSidebar: () => void;
  sessionId: string;
}

export default function Header({ toggleSidebar, sessionId }: HeaderProps) {
  const router = useRouter();
  const [user, setUser] = useState({
    name: '',
    email: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      if (session?.user) {
        setUser({
          name: session.user.name || 'User',
          email: session.user.email || 'user@example.com',
        });
      }
    };
    
    fetchSession();
  }, []);

  const onLogout = async () => {
    setIsLoading(true);
    try {
      const success = await handleLogout();
      
      // Always redirect to landing page after logout attempt
      // Using window.location for a full page refresh to ensure all state is cleared
      window.location.href = '/';
      
    } catch (error) {
      console.error('Logout failed:', error);
      setIsLoading(false);
      
      // Still try to redirect on error
      window.location.href = '/';
    }
  };

  return (
    <header className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <div className="flex items-center justify-between h-12 px-3">
        {/* Left side - Sidebar toggle and model selector */}
        <div className="flex items-center">
          <button 
            onClick={toggleSidebar}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white focus:outline-none"
          >
            <Bars3Icon className="h-5 w-5" />
          </button>
          
          <div className="ml-2 relative">
            <button className="text-sm font-medium text-gray-900 dark:text-white flex items-center gap-1 rounded-md px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700">
              Doclink
              <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right side - User controls */}
        <div className="flex items-center space-x-2">
          <button className="text-gray-700 dark:text-gray-300 text-sm px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
            <PlusIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
} 