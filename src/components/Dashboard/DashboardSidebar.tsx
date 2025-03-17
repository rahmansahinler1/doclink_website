'use client';

import React, { useState } from 'react';
import { 
  FolderIcon, 
  ChatBubbleLeftRightIcon, 
  DocumentTextIcon, 
  Cog6ToothIcon, 
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  PlusIcon
} from '@heroicons/react/24/outline';

const navItems = [
  { name: 'Dashboard', id: 'dashboard', icon: <DocumentTextIcon className="w-5 h-5" /> },
  { name: 'Folders', id: 'folders', icon: <FolderIcon className="w-5 h-5" /> },
  { name: 'Chat', id: 'chat', icon: <ChatBubbleLeftRightIcon className="w-5 h-5" /> },
  { name: 'Documents', id: 'documents', icon: <DocumentTextIcon className="w-5 h-5" /> },
  { name: 'Settings', id: 'settings', icon: <Cog6ToothIcon className="w-5 h-5" /> },
];

export default function DashboardSidebar() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [collapsed, setCollapsed] = useState(false);

  const handleNavigation = (sectionId: string) => {
    setActiveSection(sectionId);
    
    // Use the handler from the dashboard page
    if (typeof window !== 'undefined' && (window as any).handleSectionChange) {
      (window as any).handleSectionChange(sectionId);
    }
  };

  return (
    <aside 
      className={`bg-gray-800 border-r border-gray-700 transition-all duration-300 ease-in-out ${
        collapsed ? 'w-16' : 'w-64'
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="p-4 flex items-center justify-between">
          {!collapsed && (
            <div className="text-xl font-bold text-green-500">Doclink</div>
          )}
          <button 
            onClick={() => setCollapsed(!collapsed)}
            className="text-gray-400 hover:text-white"
          >
            {collapsed ? (
              <ChevronDoubleRightIcon className="w-5 h-5" />
            ) : (
              <ChevronDoubleLeftIcon className="w-5 h-5" />
            )}
          </button>
        </div>

        <div className="p-4">
          <button className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors">
            <PlusIcon className="w-5 h-5" />
            {!collapsed && <span>New Folder</span>}
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-1 p-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => handleNavigation(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-gray-700 text-white'
                      : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <span className="flex-shrink-0">{item.icon}</span>
                  {!collapsed && <span>{item.name}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-700">
          <div className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3'}`}>
            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-sm">
              U
            </div>
            {!collapsed && (
              <div className="overflow-hidden">
                <div className="truncate text-sm font-medium">User Name</div>
                <div className="truncate text-xs text-gray-400">user@example.com</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
} 