import { Resend } from 'resend';
import { JamboTunesForm } from '../pages/JamboTunesForm';

const resend = new Resend('RESEND_API_KEY');

await resend.emails.send({
  from: 'onboarding@yourdomain.com',
  to: 'kamaudavikiruku@gmail.com',
  subject: 'Welcome!',
  react: <JamboTunesForm />,
});
