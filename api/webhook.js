// /api/webhook.js

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  // Biarkan Vercel parsing JSON otomatis
  const payload = req.body;

  console.log('Webhook diterima:', payload);

  res.status(200).json({ received: true });
}
