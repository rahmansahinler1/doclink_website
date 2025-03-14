// src/app/api/session/validate/route.ts
import { NextResponse } from "next/server";
import Redis from "ioredis";

// Check if we're in development mode
const isDevelopment = process.env.NODE_ENV === 'development';

// Initialize Redis client only if not in development mode
let redis: Redis.Redis | null = null;
if (!isDevelopment) {
  redis = new Redis({
    host: "localhost",
    port: 6380,
    db: 0
  });
}

export async function POST(request: Request) {
  try {
    const { sessionId, userId } = await request.json();
    
    if (!sessionId || !userId) {
      return NextResponse.json({ valid: false, error: 'Missing sessionId or userId' }, { status: 400 });
    }

    // In development mode, always return valid=true for easier testing
    if (isDevelopment) {
      console.log('Development mode: Session validation bypassed');
      return NextResponse.json({ valid: true });
    }

    // Check if session exists in Redis
    const sessionKey = `user:${userId}:session:${sessionId}`;
    const sessionExists = await redis?.exists(sessionKey);

    if (sessionExists) {
      // Refresh the TTL of the session
      await redis?.expire(sessionKey, 259200); // 3 days in seconds
      return NextResponse.json({ valid: true });
    } else {
      return NextResponse.json({ valid: false });
    }
  } catch (error) {
    console.error('Session validation error:', error);
    return NextResponse.json({ valid: false, error: 'Internal server error' }, { status: 500 });
  }
}