import React from 'react';
import { Metadata } from 'next';
import SettingsComponent from '../../../components/Dashboard/SettingsComponent';

export const metadata: Metadata = {
  title: 'Doclink Settings',
  description: 'Manage your account settings',
};

export default function SettingsPage() {
  return (
    <div className="h-full flex flex-col">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-gray-400">Manage your account and preferences</p>
      </div>
      
      <div className="flex-1">
        <SettingsComponent />
      </div>
    </div>
  );
} 