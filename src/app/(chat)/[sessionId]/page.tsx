'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ChatPage({ params }: { params: { sessionId: string } }) {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Verify that the URL session matches the user's session
    if (session?.sessionId !== params.sessionId) {
      router.push('/');
    }
  }, [session, params.sessionId, router]);

  if (!session?.user) {
    return null; // or loading state
  }

  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1 overflow-hidden">
        {/* Chat interface will be implemented here */}
        <div className="h-full flex flex-col">
          <div className="flex-1 overflow-y-auto p-4">
            {/* Messages will go here */}
          </div>
          <div className="border-t p-4">
            {/* Input form will go here */}
          </div>
        </div>
      </main>
    </div>
  );
} 