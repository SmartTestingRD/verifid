/**
 * Generates the English email template for a contact request.
 * 
 * @param {Object} data 
 * @param {string} data.firstName
 * @param {string} data.companyName
 * @param {string} data.workEmail
 * @param {string} data.phoneNumber
 * @returns {Object} Object containing { subject, html, text }
 */
export const generateContactEmailEnglish = ({ firstName, companyName, workEmail, phoneNumber }) => {
    // Escaping simple values just in case
    const safeFirstName = firstName || 'there';
    const safeCompanyName = companyName || 'your company';
    const safeWorkEmail = workEmail || 'Not provided';
    const safePhoneNumber = phoneNumber || 'Not provided';

    const subject = `Received! We're ready to secure your ecosystem \u2013 ${safeCompanyName}`;

    const text = `
Hello, ${safeFirstName}:

Thank you for reaching out to us. We have received your request for information regarding compliance and security needs for ${safeCompanyName}. We know that the security of your ecosystem is a priority. One of our compliance specialists will review the details you shared in the form and will contact you via:

- Email: ${safeWorkEmail}
- Phone: ${safePhoneNumber}

What's next?
An expert consultant will contact you to schedule a brief diagnostic call and guide you through the process.

Best regards,
    `.trim();

    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Verifid - Contact Confirmation</title>
        <style>
            body { font-family: 'Inter', -apple-system, sans-serif; background-color: #f8fafc; color: #0f172a; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 16px; box-shadow: 0 10px 15px rgba(0, 0, 0, 0.05); overflow: hidden; border: 1px solid rgba(0, 0, 0, 0.05); }
            .header { background: linear-gradient(135deg, #0f49bd, #3b82f6); color: #ffffff; padding: 30px; text-align: center; }
            .header h1 { margin: 0; font-family: 'Outfit', sans-serif; font-size: 24px; font-weight: 600; }
            .content { padding: 40px 30px; line-height: 1.6; }
            .content p { margin: 0 0 16px; }
            .highlight-box { background-color: #f1f5f9; border-left: 4px solid #D32F2F; padding: 16px 20px; border-radius: 0 8px 8px 0; margin-bottom: 24px; }
            .highlight-box ul { margin: 0; padding: 0; list-style-type: none; }
            .highlight-box li { margin-bottom: 8px; color: #475569; }
            .highlight-box li strong { color: #0f172a; }
            .highlight-box li:last-child { margin-bottom: 0; }
            .next-steps { text-align: center; padding: 24px; background-color: #f8fafc; border-radius: 12px; margin-bottom: 24px; border: 1px solid #e2e8f0;}
            .next-steps strong { display: block; color: #0f49bd; margin-bottom: 8px; font-size: 18px;}
            .footer { padding: 20px 30px; text-align: center; color: #64748b; font-size: 14px; background-color: #f8fafc; border-top: 1px solid rgba(0,0,0,0.05); }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Contact Request Received</h1>
            </div>
            <div class="content">
                <p><strong>Hello, ${safeFirstName}:</strong></p>
                <p>
                    Thank you for reaching out to <strong>Verifid</strong>. We have received your request for information regarding compliance and security needs for <strong>${safeCompanyName}</strong>. 
                </p>
                <p>
                    We know that the security of your ecosystem is a priority. One of our compliance specialists will review the details you shared in the form and will contact you via:
                </p>
                
                <div class="highlight-box">
                    <ul>
                        <li><strong>Email:</strong> ${safeWorkEmail}</li>
                        <li><strong>Phone:</strong> ${safePhoneNumber}</li>
                    </ul>
                </div>

                <div class="next-steps">
                    <strong>What's next?</strong>
                    An expert consultant will contact you to schedule a brief diagnostic call and guide you through the process.
                </div>
                
                <p>Best regards,<br><strong>The Verifid Team</strong></p>
            </div>
            <div class="footer">
                &copy; ${new Date().getFullYear()} Verifid. All rights reserved.
            </div>
        </div>
    </body>
    </html>
    `.trim();

    return { subject, html, text };
};
