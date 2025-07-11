---
# API Data Sekolah Indonesia Terbaru — Berdasarkan Dapodik
---
API publik untuk mendapatkan data satuan pendidikan (SD, SMP, SMA, SMK, dan lainnya) di seluruh Indonesia berdasarkan Dapodik (Data Pokok Pendidikan), dengan pencarian menggunakan NPSN.

🔗 Contoh endpoint:

```
https://api.fazriansyah.eu.org/v1/sekolah?npsn=12345678
```

---

## 🚀 Fitur

* ✅ Ambil data sekolah berdasarkan **NPSN**
* 📡 Data resmi dari [api.data.belajar.id](https://api.data.belajar.id)
* 🔁 Terupdate otomatis setiap hari
* 📄 Format JSON rapi, siap digunakan di aplikasi
* 🧭 Mendukung query berbasis NPSN

---

## 📚 Contoh Penggunaan

### 🔍 Cari sekolah berdasarkan NPSN

```
GET /v1/sekolah?npsn=12345678
```

Contoh respons:

```json
{
  "data": {
    "satuanPendidikan": {
      "npsn": "12345678",
      "nama": "SD NEGERI ADMIN,
      "statusSatuanPendidikan": "NEGERI",
      "alamatJalan": "KP. SUBUR RT003 RW002",
      "namaKecamatan": "KEC. MAJUMUNDUR",
      "namaKabupaten": "KAB. MAJUJAYA",
      "namaProvinsi": "JAWA BARAT",
      "akreditasi": "A",
      "email": "sdnadmin@gmail.com",
      "telepon": "081xxxxxxxxx"
    },
    "meta": {
      "lastUpdatedAt": "2025-07-10T21:04:05.151047Z"
    }
  }
}
```

---

## 📌 Parameter Query

| Parameter | Keterangan                   | Wajib |
| --------- | ---------------------------- | ----- |
| `npsn`    | Nomor Pokok Sekolah Nasional | ✅ Ya  |

---

## 🧑‍💻 Teknologi

* Cloudflare Worker (proxy serverless)
* Sumber data resmi: [api.data.belajar.id](https://api.data.belajar.id)

---

## 🛡️ Lisensi

MIT License — Bebas digunakan untuk keperluan pribadi, pendidikan, maupun komersial.

---
