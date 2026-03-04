import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

// Initialize the SES Client
// The client will automatically pick up AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY,
// and AWS_REGION from the environment variables.
const sesClient = new SESClient({});

/**
 * Sends an email using AWS SES.
 *
 * @param {Object} options - Email options
 * @param {string|string[]} options.to - Recipient email address(es)
 * @param {string} options.subject - Email subject
 * @param {string} [options.html] - HTML body of the email
 * @param {string} [options.text] - Plain text body of the email
 * @returns {Promise<Object>} The response from AWS SES
 */
export const sendEmail = async ({ to, subject, html, text }) => {
    const senderEmail = process.env.EMAIL_SENDER;

    if (!senderEmail) {
        throw new Error("EMAIL_SENDER is not defined in the environment variables.");
    }

    // Ensure 'to' is an array format for the SES command
    const toAddresses = Array.isArray(to) ? to : [to];

    // Prepare the email parameters required by SendEmailCommand
    const params = {
        Destination: {
            ToAddresses: toAddresses,
        },
        Message: {
            Body: {
                ...(html && { Html: { Charset: "UTF-8", Data: html } }),
                ...(text && { Text: { Charset: "UTF-8", Data: text } }),
            },
            Subject: {
                Charset: "UTF-8",
                Data: subject,
            },
        },
        Source: senderEmail,
    };

    try {
        const command = new SendEmailCommand(params);
        const response = await sesClient.send(command);
        console.log(`Email sent successfully to ${toAddresses.join(', ')}. MessageId: ${response.MessageId}`);
        return response;
    } catch (error) {
        console.error(`Failed to send email to ${toAddresses.join(', ')}:`, error);
        throw error;
    }
};
