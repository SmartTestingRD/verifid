import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

// Use the database connection string from environment variables
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // The ?sslmode=require in the URL often handles this, but adding it explicitly
  // is a good practice for NeonDB and other cloud providers
  ssl: {
    rejectUnauthorized: false
  }
});

// Always set the search path to our schema when a new client is connected
pool.on('connect', (client) => {
  client.query('SET search_path TO verifid');
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

// Helper function to execute queries
export const query = async (text, params) => {
  const start = Date.now();
  try {
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log('Executed query', { text, duration, rows: res.rowCount });
    return res;
  } catch (error) {
    console.error('Error executing query', { text, error });
    throw error;
  }
};

// Export the pool if someone needs direct access
export default pool;
