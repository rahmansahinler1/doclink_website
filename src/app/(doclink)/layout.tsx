import React from 'react';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import Sidebar from '@/components/doclink/Sidebar';
import Header from '@/components/doclink/Header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Doclink Chat',
  description: 'Manage your documents and chat with them',
};

// This is a temporary auth check until we implement proper authentication
async function getUser() {
  // This will be replaced with actual auth logic
  return null;
}

export default async function DocLinkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();

  if (!user) {
    redirect('/');
  }

  return (
    <div className="flex h-screen overflow-hidden bg-gray-900 text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  );
} 