import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, subject, message } = body;

    if (
      typeof email !== 'string' ||
      typeof subject !== 'string' ||
      typeof message !== 'string' ||
      !email ||
      !subject ||
      !message
    ) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      subject.length > 150 ||
      message.length > 3000
    ) {
      return Response.json(
        { error: 'Please check your email and message length.' },
        { status: 400 }
      );
    }

    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['ammatthews2004@gmail.com'],
      replyTo: email,
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
            New message from your portfolio
          </h2>
          <div style="margin: 20px 0;">
            <p><strong>From:</strong> ${safeEmail}</p>
            <p><strong>Subject:</strong> ${safeSubject}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;"/>
          <div style="margin: 20px 0;">
            <p style="white-space: pre-wrap; line-height: 1.6;">${safeMessage.replace(/\n/g, '<br/>')}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json(
        { error: error.message || 'Failed to send email' },
        { status: 500 }
      );
    }

    return Response.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Email API error:', error);

    if (error instanceof SyntaxError) {
      return Response.json(
        { error: 'Invalid request body' },
        { status: 400 }
      );
    }

    return Response.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
