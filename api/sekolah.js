export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { path, npsn, keyword } = req.query;
  const targetBaseUrl = process.env.BELAJAR_API_URL;

  if (!targetBaseUrl) {
    return res.status(500).json({ error: "Konfigurasi server belum lengkap." });
  }

  let targetUrl = targetBaseUrl;
  if (path) {
    targetUrl = `${targetBaseUrl}/${path}`;
  } else if (npsn) {
    targetUrl = `${targetBaseUrl}/details/${encodeURIComponent(npsn)}`;
  } else if (keyword) {
    targetUrl = `${targetBaseUrl}/search?keyword=${encodeURIComponent(keyword)}`;
  } else {
    return res.status(400).json({ error: "Parameter 'path', 'npsn', atau 'keyword' wajib diisi." });
  }

  try {
    const response = await fetch(targetUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Referer": "https://belajar.id/",
        "Accept": "application/json"
      }
    });

    const text = await response.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch (e) {
      data = { raw: text };
    }

    return res.status(response.status).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Gagal menghubungkan ke server pusat.", details: error.message });
  }
}