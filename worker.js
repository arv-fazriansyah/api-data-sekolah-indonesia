export async function handleSekolah(request, env, ctx = {}) {
  const url = new URL(request.url);

  if (!url.searchParams.has('npsn')) {
    return new Response(JSON.stringify({
      message: "API Data Sekolah Wilayah Indonesia.",
      petunjuk: "Gunakan parameter `npsn` pada URL untuk mencari data sekolah.",
      contoh: "/v1/sekolah?npsn=20205428",
      //sumber_data: "https://api.data.belajar.id"
    }, null, 2), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }

  const npsn = url.searchParams.get('npsn');
  const cache = caches.default;
  const cacheKey = new Request(request.url, request);

  const cached = await cache.match(cacheKey);
  if (cached) {
    return new Response(cached.body, {
      ...cached,
      headers: {
        ...cached.headers,
        'Access-Control-Allow-Origin': '*'
      }
    });
  }

  const apiUrl = `<<email: arvib@fazriansyah.eu.org>>${encodeURIComponent(npsn)}`;

  try {
    const res = await fetch(apiUrl);
    const data = await res.json();

    const response = new Response(JSON.stringify({
      //sumber: new URL(apiUrl).origin,
      jenis: 'pencarian_sekolah',
      data
    }, null, 2), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300',
        'Access-Control-Allow-Origin': '*'
      }
    });

    if (ctx && typeof ctx.waitUntil === 'function') {
      ctx.waitUntil(cache.put(cacheKey, response.clone()));
    }

    return response;

  } catch (err) {
    return new Response(JSON.stringify({
      error: 'Gagal mengambil data',
      detail: err.message
    }, null, 2), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}
