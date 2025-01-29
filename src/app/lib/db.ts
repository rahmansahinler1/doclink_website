import { Pool } from 'pg';

let pool: Pool | null = null;

export function getPool(): Pool {
  if (!pool) {
    const connectionConfig = {
      user: process.env.POSTGRES_USER,
      host: process.env.POSTGRES_HOST,
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: parseInt(process.env.POSTGRES_PORT || '5432'),
    };

    pool = new Pool(connectionConfig);

    // Add error handler
    pool.on('error', (err) => {
      console.error('Unexpected error on idle client', err);
      process.exit(-1);
    });
  }
  return pool;
}

export async function query(text: string, params?: any[]) {
  const pool = getPool();
  try {
    const start = Date.now();
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log('Executed query', { text, duration, rows: res.rowCount });
    return res;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}

// User management functions
export async function findUserByGoogleId(googleId: string) {
  const result = await query(
    'SELECT * FROM user_info WHERE google_id = $1',
    [googleId]
  );
  return result.rows[0];
}

export async function updateUserLastLogin(userId: string) {
  await query(
    'UPDATE user_info SET updated_at = CURRENT_TIMESTAMP WHERE user_id = $1',
    [userId]
  );
}