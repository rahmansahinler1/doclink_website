'use client';

import { useState } from 'react';

export default function Sidebar() {
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);

  return (
    <aside className="w-64 bg-gray-900 text-white h-full flex flex-col">
      {/* User Profile Section */}
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-xl font-semibold">Doclink</h2>
      </div>

      {/* Domain Selection */}
      <div className="p-4 border-b border-gray-700">
        <select 
          className="w-full bg-gray-800 text-white rounded p-2"
          value={selectedDomain || ''}
          onChange={(e) => setSelectedDomain(e.target.value)}
        >
          <option value="">Select Domain</option>
          {/* Domain options will be populated here */}
        </select>
      </div>

      {/* File List */}
      <div className="flex-1 overflow-y-auto p-4">
        <h3 className="text-sm font-semibold text-gray-400 mb-2">Your Files</h3>
        <div className="space-y-2">
          {/* File list will be populated here */}
          <div className="text-gray-300">No files selected</div>
        </div>
      </div>

      {/* Upload Section */}
      <div className="p-4 border-t border-gray-700">
        <button className="w-full bg-blue-600 text-white rounded py-2 hover:bg-blue-700 transition-colors">
          Upload Files
        </button>
      </div>
    </aside>
  );
} 