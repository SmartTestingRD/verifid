import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import pg from 'pg';

const { Pool } = pg;

// We need to load dotenv manually here in case this is run as a standalone script
// If it's run via 'npm run ...', the env vars might be loaded differently, but this is safe
dotenv.config();

// Reconstruct __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure we have a database URL
if (!process.env.DATABASE_URL) {
    console.error("FATAL ERROR: DATABASE_URL is not defined in the .env file.");
    process.exit(1);
}

// Create a standalone pool for migrations
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

async function runMigrations() {
    const schemaPath = path.join(__dirname, 'schema.sql');

    try {
        console.log(`Reading SQL script from: ${schemaPath}`);
        const sqlScript = fs.readFileSync(schemaPath, 'utf8');

        console.log('Connecting to database...');
        const client = await pool.connect();

        try {
            console.log('Starting execution of schema.sql...');

            // Execute the entire SQL script
            await client.query(sqlScript);

            console.log('✅ Schema migration completed successfully!');
        } finally {
            client.release(); // release the connection back to the pool
        }
    } catch (error) {
        console.error('❌ Error executing database script:', error);
        process.exit(1);
    } finally {
        // End the pool so the Node process can exit
        await pool.end();
    }
}

// Run the function
runMigrations();
