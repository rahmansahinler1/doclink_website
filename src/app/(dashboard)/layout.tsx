import React from 'react';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import DashboardSidebar from '../../components/Dashboard/DashboardSidebar';
import DashboardHeader from '../../components/Dashboard/DashboardHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Doclink Dashboard',
  description: 'Manage your documents and chat with them',
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (!session || !session.user) {
    redirect('/auth/login');
  }

  return (
    <div className="flex h-screen overflow-hidden bg-gray-900 text-white">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  );
} 