// src/app/api/auth/session/validate/route.ts
import { NextResponse } from "next/server";
import { validateSession } from "@/app/lib/redis";

// Set to dynamic to avoid static optimization
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  console.log("Session validation API called");
  
  try {
    const body = await request.json();
    console.log("Request body:", body);
    
    const { sessionId, userId } = body;
    
    if (!sessionId || !userId) {
      console.log("Missing parameters", { sessionId, userId });
      return NextResponse.json(
        { valid: false, error: 'Missing sessionId or userId' }, 
        { status: 400 }
      );
    }

    console.log("Validating session:", { userId, sessionId });
    const isValid = await validateSession(userId, sessionId);
    console.log("Validation result:", isValid);
    
    return NextResponse.json({ valid: isValid });

  } catch (error) {
    console.error('Session validation error:', error);
    return NextResponse.json(
      { valid: false, error: 'Internal server error' }, 
      { status: 500 }
    );
  }
}