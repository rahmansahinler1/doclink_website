import React from 'react';
import { Metadata } from 'next';
import DocumentsComponent from '../../../components/Dashboard/DocumentsComponent';

export const metadata: Metadata = {
  title: 'Doclink Documents',
  description: 'Manage your documents',
};

export default function DocumentsPage() {
  return (
    <div className="h-full flex flex-col">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Documents</h1>
        <p className="text-gray-400">Upload and manage your documents</p>
      </div>
      
      <div className="flex-1">
        <DocumentsComponent />
      </div>
    </div>
  );
} 