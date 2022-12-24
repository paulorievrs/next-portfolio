import { SMTPClient } from 'emailjs';
import { NextApiRequest, NextApiResponse } from 'next';

const client = new SMTPClient({
  user: 'apikey',
  password: process.env.SENDGRID_API_KEY,
  host: 'smtp.sendgrid.net',
  ssl:true
});

export default async function asynchandler(req: NextApiRequest, res: NextApiResponse) {

  const { name, email, message, subject } = req.body;

  const buildMessage = `A new message from ${name} - (${email}) - subject: ${subject} \n\n\n ${message}`

   try {
    await client.sendAsync({
      text: buildMessage,
      from: 'eu@paulorievrs.dev',
      to: 'paulorievrsoliveira@gmail.com',
      subject
     });
   } catch (error) {
     console.log(error)
   }
    
  
  res.status(200).end(JSON.stringify({ message:'Send Mail' }))
}