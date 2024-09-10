// emails/contactUsNotification.tsx
import { APP_NAME } from "@/config";
import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
} from "jsx-email";

const ContactUsNotification = ({
  name,
  email,
  subject,
  message,
}: ContactUsNotificationInterface) => {
  return (
    <Html>
      <Head>
        <style>
          {`
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              padding: 20px;
              margin: 0;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .header {
              padding: 10px;
              text-align: center;
              border-radius: 8px 8px 0 0;
               color: #ffffff;
              background-color: #0086FF;
            }
            .content {
              padding: 20px;
            }
              .actionSection {
              text-align: center;
              margin-top: 20px;
              display: flex;
              justify-content: center;
              align-items: center;
              }
              .actionSection  a {
              text-decoration: none;
              color: #ffffff;
              background-color: #0086FF;
              padding: 10px 20px;
              border-radius: 4px;
              }

            .footer {
              text-align: center;
              color: #888;
              font-size: 12px;
              margin-top: 20px;
            }
            h2 {
              margin: 0;
              color: #ffffff;
            }
            p {
              line-height: 1.6;
            }
          `}
        </style>
      </Head>
      <Preview>New Contact Us Message from {name}</Preview>
      <Body>
        <Container className="container">
          <Section className="header">
            <h2>Contact Us Notification</h2>
          </Section>
          <Section className="content">
            <Text>
              <strong>Name:</strong> {name}
            </Text>
            <Text>
              <strong>Email:</strong> {email}
            </Text>
            <Text>
              <strong>Subject:</strong> {subject}
            </Text>
            <Text>
              <strong>Message:</strong>
            </Text>
            <Text>{message}</Text>
          </Section>
          <Section className="actionSection">
            <Button href={`mailto:${email}`}>Reply to {name}</Button>
          </Section>

          <Section className="footer">
            <Text>
              Thank you for reaching out to us! We will get back to you shortly.
            </Text>
            <Text>
              Best regards,
              <br />
              The {APP_NAME} Team
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactUsNotification;
