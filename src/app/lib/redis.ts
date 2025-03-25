import Redis, { Redis as RedisType } from 'ioredis';

let redisClient: RedisType | null = null;

export function getRedisClient(): RedisType {
  if (!redisClient) {
    redisClient = new Redis({
      host: "localhost",
      port: 6380,
      db: 0
    });

    redisClient.on('error', (err) => {
      console.error('Redis Client Error:', err);
      if (err.code === 'ECONNREFUSED') {
        redisClient = null;
      }
    });

    redisClient.on('connect', () => {
      console.log('Successfully connected to Redis');
    });
  }
  return redisClient;
}

const SESSION_TTL = 259200; // 3 days in seconds

export async function setSession(userId: string, sessionId: string) {
  const redis = getRedisClient();
  try {
    await redis.set(
      `user:${userId}:session:${sessionId}`,
      'true',
      'EX',
      SESSION_TTL
    );
  } catch (error) {
    console.error('Redis set session error:', error);
    throw error;
  }
}

export async function validateSession(userId: string, sessionId: string) {
  const redis = getRedisClient();
  try {
    const sessionKey = `user:${userId}:session:${sessionId}`;
    const exists = await redis.exists(sessionKey);
    if (exists) {
      await redis.expire(sessionKey, SESSION_TTL); // Refresh TTL
    }
    return exists === 1;
  } catch (error) {
    console.error('Redis validate session error:', error);
    throw error;
  }
}

export async function removeSession(userId: string, sessionId: string) {
  const redis = getRedisClient();
  try {
    await redis.del(`user:${userId}:session:${sessionId}`);
  } catch (error) {
    console.error('Redis remove session error:', error);
    throw error;
  }
}

// Find an existing session for a user
export async function findExistingSession(userId: string): Promise<string | null> {
  const redis = getRedisClient();
  try {
    // Get all keys matching the user's sessions
    const sessionKeys = await redis.keys(`user:${userId}:session:*`);
    
    if (sessionKeys.length === 0) {
      return null;
    }

    // Extract the sessionId from the first key found
    // Format is user:{userId}:session:{sessionId}
    const sessionKey = sessionKeys[0];
    const sessionId = sessionKey.split(':').pop() || null;
    
    // If session exists, refresh its TTL
    if (sessionId) {
      await redis.expire(sessionKey, SESSION_TTL);
    }
    
    return sessionId;
  } catch (error) {
    console.error('Redis find session error:', error);
    return null;
  }
} 