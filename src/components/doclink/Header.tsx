'use client';

import { useState } from 'react';

export default function Header() {
  const [user] = useState({
    name: 'User',
    email: 'user@example.com',
  });

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
        <button className="text-gray-400 hover:text-white">
          Logout
        </button>
      </div>
    </header>
  );
} 