'use client';

import { useState, useEffect } from 'react';
import { getSession, handleLogout } from '@/utils/auth';
import { useRouter } from 'next/navigation';

export default function Header() {
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
    <header className="bg-gray-800 text-white h-16 flex items-center justify-between px-6 border-b border-gray-700">
      {/* Session Info */}
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-400">Session Active</span>
      </div>

      {/* User Menu */}
      <div className="flex items-center space-x-4">
        <div className="text-sm">
          <div className="font-medium">{user.name}</div>
          <div className="text-gray-400">{user.email}</div>
        </div>
        <button 
          className="text-gray-400 hover:text-white disabled:opacity-50"
          onClick={onLogout}
          disabled={isLoading}
        >
          {isLoading ? 'Logging out...' : 'Logout'}
        </button>
      </div>
    </header>
  );
} 