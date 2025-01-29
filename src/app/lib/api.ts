const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

interface ApiOptions extends RequestInit {
  timeout?: number;
}

export async function fetchWithAuth(endpoint: string, options: ApiOptions = {}) {
  const { timeout = 8000, ...fetchOptions } = options;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(`${API_URL}${endpoint}`, {
      ...fetchOptions,
      credentials: 'include',
      headers: {
        ...fetchOptions.headers,
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('Request timeout');
    }
    throw error;
  }
}

export async function initializeUserInApp(
  userId: string, 
  sessionToken: string, 
  isNewUser: boolean = false
) {
  return fetchWithAuth('/api/initialize-user', {
    method: 'POST',
    body: JSON.stringify({
      userId,
      sessionToken,
      isNewUser,
      timestamp: new Date().toISOString()
    }),
  });
}

export async function checkSession() {
  return fetchWithAuth('/api/check-session', {
    method: 'GET',
  });
}