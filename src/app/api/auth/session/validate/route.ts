// src/app/api/session/validate/route.ts
import { NextResponse } from "next/server";
import Redis from "ioredis";

const redis = new Redis({
  host: "localhost",
  port: 6380,
  db: 0
});

export async function POST(request: Request) {
  try {
    const { sessionId, userId } = await request.json();
    
    if (!sessionId || !userId) {
      return NextResponse.json({ valid: false }, { status: 400 });
    }

    // Check if session exists in Redis
    const sessionExists = await redis.exists(`user:${userId}:session:${sessionId}`);
    
    return NextResponse.json({
      valid: sessionExists === 1
    });
  } catch (error) {
    console.error('Session validation error:', error);
    return NextResponse.json({ valid: false }, { status: 500 });
  }
}