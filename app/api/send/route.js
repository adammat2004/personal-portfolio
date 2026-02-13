import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, subject, message } = body;

    if (!email || !subject || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

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
            <p><strong>From:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;"/>
          <div style="margin: 20px 0;">
            <p style="white-space: pre-wrap; line-height: 1.6;">${message.replace(/\n/g, '<br/>')}</p>
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
    return Response.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
