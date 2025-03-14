'use client';

import React, { useState } from 'react';
import { 
  FolderIcon, 
  PlusIcon, 
  EllipsisVerticalIcon,
  TrashIcon,
  PencilIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

type Folder = {
  id: string;
  name: string;
  documentCount: number;
  createdAt: Date;
};

export default function FoldersComponent() {
  const [folders, setFolders] = useState<Folder[]>([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleCreateFolder = () => {
    if (!newFolderName.trim()) return;
    
    const newFolder: Folder = {
      id: Date.now().toString(),
      name: newFolderName,
      documentCount: 0,
      createdAt: new Date(),
    };
    
    setFolders([...folders, newFolder]);
    setNewFolderName('');
    setShowCreateModal(false);
  };

  const handleDeleteFolder = (id: string) => {
    setFolders(folders.filter(folder => folder.id !== id));
    setActiveDropdown(null);
  };

  const toggleDropdown = (id: string) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <div className="h-full">
      <div className="mb-4 flex justify-between items-center">
        <div className="text-sm text-gray-400">
          {folders.length} {folders.length === 1 ? 'folder' : 'folders'}
        </div>
        <button 
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors"
        >
          <PlusIcon className="w-5 h-5" />
          <span>New Folder</span>
        </button>
      </div>

      {folders.length === 0 ? (
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-8 text-center">
          <div className="mx-auto w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mb-4">
            <FolderIcon className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-xl font-medium mb-2">No folders yet</h3>
          <p className="text-gray-400 mb-6">Create your first folder to start organizing your documents</p>
          <button 
            onClick={() => setShowCreateModal(true)}
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors"
          >
            <PlusIcon className="w-5 h-5" />
            <span>Create Folder</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {folders.map((folder) => (
            <div key={folder.id} className="bg-gray-800 rounded-xl border border-gray-700 p-4 relative">
              <div className="absolute top-4 right-4">
                <button 
                  onClick={() => toggleDropdown(folder.id)}
                  className="text-gray-400 hover:text-white"
                >
                  <EllipsisVerticalIcon className="w-5 h-5" />
                </button>
                {activeDropdown === folder.id && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-700 rounded-lg shadow-lg z-10 py-1">
                    <button 
                      className="w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-600 flex items-center gap-2"
                    >
                      <PencilIcon className="w-4 h-4" />
                      <span>Rename</span>
                    </button>
                    <button 
                      onClick={() => handleDeleteFolder(folder.id)}
                      className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-600 flex items-center gap-2"
                    >
                      <TrashIcon className="w-4 h-4" />
                      <span>Delete</span>
                    </button>
                  </div>
                )}
              </div>
              
              <Link href={`/dashboard/chat?folder=${folder.id}`} className="block">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
                    <FolderIcon className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="truncate">
                    <h3 className="font-medium truncate">{folder.name}</h3>
                    <p className="text-sm text-gray-400">
                      {folder.documentCount} {folder.documentCount === 1 ? 'document' : 'documents'}
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center text-sm text-gray-400 mt-4">
                  <div className="flex items-center gap-1">
                    <DocumentTextIcon className="w-4 h-4" />
                    <span>{folder.documentCount}</span>
                  </div>
                  <div>
                    Created {folder.createdAt.toLocaleDateString()}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}

      {/* Create Folder Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-xl p-6 w-full max-w-md">
            <h3 className="text-xl font-medium mb-4">Create New Folder</h3>
            <div className="mb-4">
              <label className="block text-sm text-gray-400 mb-2">Folder Name</label>
              <input
                type="text"
                value={newFolderName}
                onChange={(e) => setNewFolderName(e.target.value)}
                placeholder="Enter folder name"
                className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowCreateModal(false);
                  setNewFolderName('');
                }}
                className="px-4 py-2 text-gray-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateFolder}
                disabled={!newFolderName.trim()}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 