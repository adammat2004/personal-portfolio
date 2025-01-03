//import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  const { email, subject, message } = req.body;
  try {
    const { data, error } = await resend.emails.send({
      from: 'Adam <ammatthews2004@gmail.com>',
      to: ['ammatthews2004@gmail.com'],
      subject: 'Hello world',
      react: 
      <>
        <h1>{subject}</h1>
        <p>{message}</p>
      </>,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
