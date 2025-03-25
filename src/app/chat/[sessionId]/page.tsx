'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "@/components/doclink/Header";
import Sidebar from "@/components/doclink/Sidebar";
import ChatInterface from "@/components/doclink/ChatInterface";

export default function ChatPage({ params }: { params: { sessionId: string } }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  // Debug logging
  useEffect(() => {
    console.log("Standard route chat page rendered with sessionId:", params.sessionId);
    console.log("Session status:", status);
    console.log("Session data:", session);

    // Handle authentication redirect
    if (status === "unauthenticated") {
      router.push('/');
    }
  }, [params.sessionId, session, status, router]);

  // Show loading state while session is loading or redirecting
  if (status === "loading" || status === "unauthenticated") {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
        {status === "loading" ? "Loading session..." : "Redirecting to login..."}
      </div>
    );
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-white dark:bg-gray-900">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-0'} transition-all duration-300 overflow-hidden border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800`}>
        <Sidebar onToggle={toggleSidebar} />
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <Header toggleSidebar={toggleSidebar} sessionId={params.sessionId} />
        
        {/* Chat Interface */}
        <div className="flex-1 overflow-hidden">
          <ChatInterface sessionId={params.sessionId} />
        </div>
      </div>
    </div>
  );
} 