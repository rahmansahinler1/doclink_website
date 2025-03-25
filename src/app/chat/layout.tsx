'use client';

import Header from '@/components/doclink/Header';

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
} 