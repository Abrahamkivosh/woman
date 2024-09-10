"use server";
import {
  CONTACT_EMAIL,
  HOST_EMAIL,
  PASSWORD_EMAIL,
  PORT_EMAIL,
} from "@/config";
import ContactUsNotification from "@/emails/conatactUsNotification";
import { render } from "jsx-email";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport"; // Import SMTP transport type

/**
 * Next.js Action to send a notification to the admin when a user submits a contact us form
 * @param {Object} data - The data from the contact us form
 * @param {string} data.name - The name of the user
 * @param {string} data.email - The email of the user
 * @param {string} data.subject - The subject of the user
 * @param {string} data.message - The message of the user
 * @returns {Promise<Object>}
 */
export async function handleContactUsNotificationAction(
  data: ContactUsNotificationInterface
): Promise<
  | {
      status: number;
      message: string;
    }
  | {
      status: number;
      message: string;
    }
> {
  console.log("Sending email...");
  console.log(CONTACT_EMAIL);
  // Define the transport options explicitly using the correct SMTP transport type
  const transporterOptions: SMTPTransport.Options = {
    host: HOST_EMAIL,
    port: parseInt(PORT_EMAIL), // Convert the port to a number
    auth: {
      user: CONTACT_EMAIL,
      pass: PASSWORD_EMAIL,
    },
  };

  const transporter = nodemailer.createTransport(transporterOptions);

  try {
    // Render the email content
    const html = await render(ContactUsNotification(data));

    // Send the email
    await transporter.sendMail({
      from: CONTACT_EMAIL, // Sender address
      to: CONTACT_EMAIL, // Recipient (e.g., admin)
      subject: `New Contact Us Message from ${data.name}`, // Subject line
      html: html, // HTML body content
    });

    const message = `Thank you for reaching out to us! We will get back to you shortly.`;

    return {
      status: 200,
      message: message,
    };
  } catch (error) {
    console.error("Error sending email:", error);

    return {
      status: 500,
      message: "An error occurred while sending the email",
    };
  }
}
