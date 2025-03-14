'use client';

import React, { useState } from 'react';
import { 
  DocumentTextIcon, 
  PlusIcon, 
  EllipsisVerticalIcon,
  TrashIcon,
  FolderIcon,
  ArrowUpTrayIcon,
  LinkIcon
} from '@heroicons/react/24/outline';

type Document = {
  id: string;
  name: string;
  type: string;
  size: string;
  folderId: string | null;
  folderName: string | null;
  uploadedAt: Date;
};

export default function DocumentsComponent() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [uploadType, setUploadType] = useState<'file' | 'url' | null>(null);
  const [urlInput, setUrlInput] = useState('');

  const handleDeleteDocument = (id: string) => {
    setDocuments(documents.filter(doc => doc.id !== id));
    setActiveDropdown(null);
  };

  const toggleDropdown = (id: string) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const newDocuments: Document[] = Array.from(files).map(file => ({
      id: Date.now().toString() + Math.random().toString(36).substring(2, 9),
      name: file.name,
      type: file.type,
      size: formatFileSize(file.size),
      folderId: null,
      folderName: null,
      uploadedAt: new Date(),
    }));

    setDocuments([...documents, ...newDocuments]);
    setShowUploadModal(false);
    setUploadType(null);
  };

  const handleUrlUpload = () => {
    if (!urlInput.trim()) return;

    const newDocument: Document = {
      id: Date.now().toString() + Math.random().toString(36).substring(2, 9),
      name: new URL(urlInput).hostname,
      type: 'url',
      size: 'N/A',
      folderId: null,
      folderName: null,
      uploadedAt: new Date(),
    };

    setDocuments([...documents, newDocument]);
    setUrlInput('');
    setShowUploadModal(false);
    setUploadType(null);
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="h-full">
      <div className="mb-4 flex justify-between items-center">
        <div className="text-sm text-gray-400">
          {documents.length} {documents.length === 1 ? 'document' : 'documents'}
        </div>
        <button 
          onClick={() => setShowUploadModal(true)}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors"
        >
          <PlusIcon className="w-5 h-5" />
          <span>Upload Document</span>
        </button>
      </div>

      {documents.length === 0 ? (
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-8 text-center">
          <div className="mx-auto w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mb-4">
            <DocumentTextIcon className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-xl font-medium mb-2">No documents yet</h3>
          <p className="text-gray-400 mb-6">Upload your first document to start asking questions</p>
          <button 
            onClick={() => setShowUploadModal(true)}
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors"
          >
            <PlusIcon className="w-5 h-5" />
            <span>Upload Document</span>
          </button>
        </div>
      ) : (
        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4 font-medium text-gray-400">Name</th>
                <th className="text-left py-3 px-4 font-medium text-gray-400">Folder</th>
                <th className="text-left py-3 px-4 font-medium text-gray-400">Size</th>
                <th className="text-left py-3 px-4 font-medium text-gray-400">Uploaded</th>
                <th className="text-left py-3 px-4 font-medium text-gray-400"></th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc) => (
                <tr key={doc.id} className="border-b border-gray-700 hover:bg-gray-750">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <DocumentTextIcon className="w-5 h-5 text-gray-400" />
                      <span className="truncate max-w-[200px]">{doc.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    {doc.folderName ? (
                      <div className="flex items-center gap-2">
                        <FolderIcon className="w-4 h-4 text-green-500" />
                        <span>{doc.folderName}</span>
                      </div>
                    ) : (
                      <span className="text-gray-500">Not assigned</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-gray-400">{doc.size}</td>
                  <td className="py-3 px-4 text-gray-400">{doc.uploadedAt.toLocaleDateString()}</td>
                  <td className="py-3 px-4 text-right relative">
                    <button 
                      onClick={() => toggleDropdown(doc.id)}
                      className="text-gray-400 hover:text-white"
                    >
                      <EllipsisVerticalIcon className="w-5 h-5" />
                    </button>
                    {activeDropdown === doc.id && (
                      <div className="absolute right-4 mt-2 w-48 bg-gray-700 rounded-lg shadow-lg z-10 py-1">
                        <button 
                          className="w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-600 flex items-center gap-2"
                        >
                          <FolderIcon className="w-4 h-4" />
                          <span>Move to Folder</span>
                        </button>
                        <button 
                          onClick={() => handleDeleteDocument(doc.id)}
                          className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-600 flex items-center gap-2"
                        >
                          <TrashIcon className="w-4 h-4" />
                          <span>Delete</span>
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-xl p-6 w-full max-w-md">
            <h3 className="text-xl font-medium mb-4">Upload Document</h3>
            
            {!uploadType ? (
              <div className="grid grid-cols-2 gap-4 mb-4">
                <button
                  onClick={() => setUploadType('file')}
                  className="bg-gray-700 hover:bg-gray-650 p-4 rounded-lg text-center"
                >
                  <ArrowUpTrayIcon className="w-8 h-8 mx-auto mb-2 text-green-500" />
                  <span>Upload File</span>
                </button>
                <button
                  onClick={() => setUploadType('url')}
                  className="bg-gray-700 hover:bg-gray-650 p-4 rounded-lg text-center"
                >
                  <LinkIcon className="w-8 h-8 mx-auto mb-2 text-green-500" />
                  <span>Add from URL</span>
                </button>
              </div>
            ) : uploadType === 'file' ? (
              <div className="mb-4">
                <label className="block text-sm text-gray-400 mb-2">Select File</label>
                <input
                  type="file"
                  onChange={handleFileUpload}
                  multiple
                  className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            ) : (
              <div className="mb-4">
                <label className="block text-sm text-gray-400 mb-2">Enter URL</label>
                <input
                  type="url"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  placeholder="https://example.com"
                  className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  onClick={handleUrlUpload}
                  disabled={!urlInput.trim()}
                  className="mt-3 w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Add URL
                </button>
              </div>
            )}
            
            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowUploadModal(false);
                  setUploadType(null);
                  setUrlInput('');
                }}
                className="px-4 py-2 text-gray-400 hover:text-white"
              >
                Cancel
              </button>
              {!uploadType && (
                <button
                  onClick={() => setShowUploadModal(false)}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                >
                  Close
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 