const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export async function initializeUserInApp(
  userId: string, 
  sessionToken: string, 
  isFirstTime: boolean = false,
  sessionId: string
) {
  console.log('Triggering application rendering', {
    userId,
    sessionId,
    isFirstTime,
    tokenProvided: !!sessionToken
  });

  try {
    // Send request but don't parse response as JSON
    const response = await fetch(`${API_URL}/render-app`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: userId,
        session_id: sessionId,
        is_first_time: isFirstTime,
        session_token: sessionToken,
        timestamp: new Date().toISOString()
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Just return the redirect URL, don't try to parse the response
    return `http://localhost:8000/chat/${sessionId}`;
    
  } catch (error) {
    console.error('Render request failed:', error);
    throw error;
  }
}