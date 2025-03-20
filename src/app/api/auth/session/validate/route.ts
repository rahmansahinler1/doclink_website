// src/app/api/session/validate/route.ts
import { NextResponse } from "next/server";
import { validateSession } from "@/app/lib/redis";

export async function POST(request: Request) {
  try {
    const { sessionId, userId } = await request.json();
    
    if (!sessionId || !userId) {
      return NextResponse.json(
        { valid: false, error: 'Missing sessionId or userId' }, 
        { status: 400 }
      );
    }

    const isValid = await validateSession(userId, sessionId);
    return NextResponse.json({ valid: isValid });

  } catch (error) {
    console.error('Session validation error:', error);
    return NextResponse.json(
      { valid: false, error: 'Internal server error' }, 
      { status: 500 }
    );
  }
}