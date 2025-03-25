'use client';

import React from 'react';
import { Reference } from './types';

interface ReferencePanelProps {
  references: Reference[];
  isOpen: boolean;
  onClose: () => void;
}

export default function ReferencePanel({ 
  references, 
  isOpen, 
  onClose 
}: ReferencePanelProps) {
  if (!isOpen) return null;
  
  return (
    <div className="fixed right-0 top-0 h-full w-80 bg-white dark:bg-gray-800 shadow-lg border-l border-gray-200 dark:border-gray-700 overflow-y-auto z-20">
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white">References</h2>
        <button 
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div className="p-4">
        {references.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">No references available.</p>
        ) : (
          <div className="space-y-4">
            {references.map((reference) => (
              <div key={reference.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                <h3 className="font-medium text-gray-900 dark:text-white mb-1">{reference.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{reference.content}</p>
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>{reference.source}</span>
                  {reference.pageNumber && <span>Page {reference.pageNumber}</span>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 