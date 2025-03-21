'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ChatPage({ params }: { params: { sessionId: string } }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  
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
      <div className="flex items-center justify-center h-screen">
        {status === "loading" ? "Loading session..." : "Redirecting to login..."}
      </div>
    );
  }

  // Simple content to ensure the page works
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Chat Session</h1>
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <p><strong>Session ID:</strong> {params.sessionId}</p>
        <p><strong>User:</strong> {session?.user?.name || 'Unknown'}</p>
        <p><strong>Email:</strong> {session?.user?.email || 'Unknown'}</p>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2">This is a placeholder chat interface</h2>
        <p>Your chat application will be implemented here</p>
      </div>
    </div>
  );
} 