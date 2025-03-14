import React from 'react';
import { Metadata } from 'next';
import FoldersComponent from '../../../components/Dashboard/FoldersComponent';

export const metadata: Metadata = {
  title: 'Doclink Folders',
  description: 'Manage your document folders',
};

export default function FoldersPage() {
  return (
    <div className="h-full flex flex-col">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Document Folders</h1>
        <p className="text-gray-400">Organize your documents into folders</p>
      </div>
      
      <div className="flex-1">
        <FoldersComponent />
      </div>
    </div>
  );
} 