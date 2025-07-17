export default async function handler(req, res) {
  const apiKeyHeader = req.headers['authorization'];
  const secretApiKey = process.env.WEDDIFY_API_KEY;

  // Cek apakah metode POST dan apikey cocok
  if (req.method !== 'POST' || apiKeyHeader !== `Bearer ${secretApiKey}`) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  const trx = req.body;

  // Contoh log transaksi masuk
  console.log("🔔 Transaksi masuk dari pakasir.zone.id:");
  console.log(JSON.stringify(trx, null, 2));

  // Lanjutkan logika: kirim email, generate PDF, simpan ke DB, dsb

  return res.status(200).json({ success: true, message: 'Webhook diterima' });
}
