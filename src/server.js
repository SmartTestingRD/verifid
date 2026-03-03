import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { query } from './database/db.js';

// Load env vars
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Main health check endpoint
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'Verifid API is running' });
});

// Endpoint to handle contact form submissions
app.post('/api/contact', async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            workEmail,
            phoneNumber,
            companyName,
            country,
            message
        } = req.body;

        // Basic validation
        if (!firstName || !lastName || !workEmail) {
            return res.status(400).json({
                error: 'Required fields missing: firstName, lastName, workEmail are required'
            });
        }

        // Insert into database
        const sql = `
      INSERT INTO verifid.contact_requests (
        first_name, last_name, work_email, phone_number, company_name, country, message
      ) 
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id, created_at
    `;

        const values = [
            firstName,
            lastName,
            workEmail,
            phoneNumber || null,
            companyName || null,
            country || null,
            message || null
        ];

        const result = await query(sql, values);

        res.status(201).json({
            success: true,
            message: 'Contact request saved successfully',
            data: result.rows[0]
        });

    } catch (error) {
        console.error('Error saving contact request:', error);
        res.status(500).json({
            error: 'An internal server error occurred while saving the request.'
        });
    }
});

// Start server only in local environment
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`🚀 API Server running on http://localhost:${PORT}`);
    });
}

// Export the Express API for Vercel
export default app;
